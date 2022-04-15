---
title: ES6モジュールをJestテストする
date: "2022-02-09T00:00:00.000Z"
description: "Jest testing environment for JavaScript/TypeScript ES6 modules"
tags: ["Programming", "JavaScript", "Typescript"]
---

## やりたいこと

JavaScriptまたはTypeScriptのES6モジュールをJestテストする方法のメモです．

## Jestの設定（JavaScriptの場合）

Jestをインストールする．

```shell
npm install --save-dev jest
```

package.jsonファイル内に"script"と"type"のスクリプトを追加する．

```json
{
  "name": "",
  "version": "",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "type": "module",
  "author": "",
  "license": "",
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

jest.config.jsファイルを作成し，以下のスクリプトを書き込む．

```js
export default {
  testEnvironment: 'jest-environment-node',
  transform: {}
};
```

以下のコマンドでJestテストを実行する．

```shell
npm test
```

## Jestの設定（TypeScriptの場合）

Jestと関連するモジュールをインストールする．

```shell
npm install --save-dev jest ts-jest @types/jest
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
package.jsonファイルに以下のスクリプトを追加．

```json
  "scripts": {
    "test": "jest"
  },
```

tsconfig.jsonファイルにはesModuleInteropのスクリプトを追加．

```json
{
	"compilerOptions": {
		"lib": ["es6", "dom"],
		"moduleResolution": "node",
		"module": "es6",
		"outDir": "dist",
		"sourceMap": true,
		"strict": true,
		"esModuleInterop": true,
		"target": "es6",
		"allowJs": true
	},
	"include": [
		"src", "lib"
	]
}
```

以下のコマンドでJestテストを実行する．

```shell
npm test
```
