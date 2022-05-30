---
title: TypeScriptとThree.jsでWebアプリを作ってGithub Pagesにデプロイする
date: "2022-05-16T00:00:00.000Z"
description: "Develop a browser app with TypeScript and Three.js. Then deploy it on Github Pages"
tags: ["Programming", "Typescript"]
---

今回は，TypeScriptでThree.jsを使ったWebアプリを作成してGithub Pagesにデプロイする際の手順についてまとめておきます．

## プロジェクトのセットアップ

まずはプロジェクトをinitsしてTypeScriptをインストール．

```shell
npm init
npm install --save-dev typescript
```

tsc --initするとtsconfig.jsonファイルが作成される．

```shell
npx tsc -v
npx tsc --init
```

いくつかtsconfig.jsonの設定を書き換えておこう．
- 今回はWebアプリ的なものを作りたいので，HTMLの要素を扱うためにdom (Document Object Model)をlibに追加
- アウトプットディレクトリは./distにしておく

```json
{
	"compilerOptions": {
		"target": "es2016",
		"lib": ["dom"],
		"module": "es6",
		"outDir": "./dist",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true
	}
}
```

TypeScriptをコンパイルして最終的にデプロイするのに必要なパッケージをインストールする．
webpack-dev-serverは，ローカルサーバーをたてて作成したアプリの動作確認をするのに便利なので入れておく．

```shell
npm install --save-dev webpack webpack-cli ts-loader webpack-dev-server
```

Three.jsとdat.gui，およびそれぞれの型定義をインストールする．
dat.guiはGUIのモジュールで，グラフィックに関するパラメタをインタラクティブに変更するのに便利なツールだ．

```shell
npm install three @types/three
npm install dat.gui @types/dat.gui
```

追加でコードテストするためのライブラリをインストールする．

```shell
npm install --save-dev jest ts-jest @types/jest
```

package.jsonを以下のように書き変えて，コードテストとページビルドに関するコマンドを追加する．

```json
  "scripts": {
    "test": "jest",
    "build": "webpack --mode=development",
    "start": "webpack serve --mode=development --open"
  },
```

以下のようなwebpack.config.jsファイルを作成して，webpackに関する設定を行う．

```js
const path = require('path');
module.exports = {
    // webpack starts bundling here
    entry: {
        bundle: './src/main.ts'
    },  
    output: {
        // the target directory for all output files
        path: path.join(__dirname,'dist'),
        filename: '[name].js'  // [name] is defined at entry (bundle in this case)
    },
    resolve: {
        // extensions that are recognized as modules
        extensions:['.ts','.js']
    },
    devServer: {
        // file location for webpack-dev-server
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    module: {
	      // rules for modules (configure loaders, parser options, etc.)
        rules: [
            {
                // use TypeScript compiler for .ts files
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}
```

以下のコマンドでjest.configファイルを作成する．
jest.configファイルをTypeScriptにすると，ts-nodeが追加で必要になるので，JavaScriptを指定する．

```shell
npx jest --init

√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances and results before every test? ... no
```

jest.config.jsに以下のスクリプトを追加する．

```js
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
```

.gitignoreにdist/bundle.jsを記入して，mainブランチにはコンパイルされたJavaScriptコードは置かないようにしておく．

## コンパイルとデプロイ

準備が整ったので，簡単なHTMLとTypeScriptのスクリプトを書いて，実際にブラウザ上で動かしてみよう．
まず，以下のようなindex.htmlを作成してdistディレクトリに置く．

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Three.js on TypeScript</title>
  </head>

  <body>
    <div id="WebGL-output"></div>
    <script type="module" src="./bundle.js"></script>
  </body>
  <footer>
  </footer>
</html>
```

TypeScriptのファイル名はwebpack.config.jsで指定したように，main.tsとしておこう．
こちらはsrcディレクトリに置く．

```typescript
import * as THREE from "three"

function init() {
	let scene = new THREE.Scene()
	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
	
	let renderer = new THREE.WebGL1Renderer()
	renderer.setClearColor(new THREE.Color(0xEEEEEE))
	renderer.setSize(window.innerWidth, window.innerHeight)

	let axes = new THREE.AxesHelper(20)
	scene.add(axes)

	// create the ground plane
	let planeGeometry = new THREE.PlaneGeometry(60, 20)
	let planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc})
	let plane = new THREE.Mesh(planeGeometry, planeMaterial)
	plane.rotation.x = -0.5 * Math.PI
	plane.position.x = 15.0
	plane.position.y = 0.0
	plane.position.z = 0.0
	scene.add(plane)

	// create a sphere
	let sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    let sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true})
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
	sphere.position.x = 20.0
	sphere.position.y = 4.0
	sphere.position.z = 2.0
	scene.add(sphere)

	camera.position.x = -30.0
	camera.position.y = 40.0
	camera.position.z = 30.0
    camera.lookAt(scene.position)

	// add the output of the renderer to the html element
	let element = document.getElementById("WebGL-output")
	if (element !== null) {
		element.appendChild(renderer.domElement)
	}
	
	// render the scene
	renderer.render(scene, camera)
}
window.onload = init
```

以下のコマンドで，TypeScriptをコンパイルできる．

```shell
npm run build
```

以下のコマンドでは，webpack-dev-serverを用いて，ローカルサーバーにデプロイしてブラウザ上で動作確認ができる．問題なければ，ブラウザが立ち上がって，グレーの板の上にワイヤフレームの球が表示されるはずだ．

```shell
npm run start
```

Jestテストは以下のコマンドで実行できる．

```shell
npm test
```

Github Pagesにデプロイする際には，gh-pagesパッケージを用いる．
今回はdistフォルダ内をデプロイしたいので，以下のコマンドを打つ．

```shell
gh-pages -d dist
```