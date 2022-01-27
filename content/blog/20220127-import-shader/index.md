---
title: GLSLコードをJavaScriptからimportする
date: "2022-01-27T00:00:00.000Z"
description: "Importing GLSL shader code from JavaScript"
tags: ["Programming", "GLSL", "JavaScript", "WebGL"]
---

## やりたいこと

WebGLをブラウザ上で使用する場合，HTMLのscriptタグ内にGLSLコードを直接書き込むことでシェーダのタスクを指定できる． ただ，この方法ではGLSLコードの管理やエディタ上での編集がやりにくいので，GLSLコード部分を別ファイルにして読み込めるようにしたい． おそらくすぐに思いつくのは以下のような書き方だが，残念ながらこれでは読み込むことはできない．

```html
<script src="shader.glsl" id="vertex-shader" type="x-shader/x-vertex"></script>
```

## GLSLコードのインポート

そもそも，GLSLコードをHTMLファイルの中で読み込む必要があるかというとそんなことはない． 
HTML内にべた書きする方法で行っているのは，GLSLコードを単なるテキストとしてJavaScriptから参照できるようにしているだけだ． 
なのでGLSLコードを別ファイルにする場合，そのコードをテキストとして直接JavaScriptから読み込んでしまえばよい． 
vertex shaderのコードであれば，以下のようにGLSLコード部分をbackticksで囲んでエクスポートするJavaScriptファイル(vertex-shader.glsl.js)を作る．

```glsl
export default `#version 300 es
precision mediump float;

// Supplied vertex position attribute
in vec3 aVertexPosition;

void main(void) {
    // Set the position in clipspace coordinates
    gl_Position = vec4(aVertexPosition, 1.0);
}`
```

これを，別のJavaScriptからインポートして使用すればよい．このときvertexSourceにはGLSLコードがテキストとして入っている．

```javascript
import vertexSource from './vertex-shader.glsl.js'

shader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(shader, shaderString)
```

この手法についての詳細は以下のページも参考にしてほしい:
https://stackoverflow.com/questions/14219947/why-do-shaders-have-to-be-in-html-file-for-webgl-program