---
title: フラグメントシェーダからCPUへのデータ受け渡し
date: "2022-01-25T00:00:00.000Z"
description: "Transfering data from the fragment shader to CPU by using WebGL readPixels"
tags: ["Programming", "GLSL", "JavaScript", "WebGL"]
---

## やりたいこと

WebGLとOpenGL ES Shading Language(GLSL ES)を用いると，ウェブブラウザ上で比較的簡単にグラフィック処理を行うことが出来る．
この環境でGPGPU(General-purpose computing on graphics processing units)をやる準備として，GPUのフラグメントシェーダからCPUへのデータの受け渡しについて考えよう．

<details>
<summary></summary>
Mithilfe von WebGL und OpenGL ES Shading Language (GLSL ES) kann man die Grafikverarbeitung relativ einfach in einem Webbrowser durchführen.
Um GPGPU (General-purpose computing on graphics processing units) in dieser Umgebung durchzuführen, versuchen wir, Daten vom GPU Fragment Shader auf die CPU zu übertragen.
</details>

## フラグメントシェーダのデータを色に変換する

もともとフラグメントシェーダの役割は，各ピクセルで表示するべき色を決めることである．
この処理をプログラミングしてやることで，表示されるポリゴンに好きな色を指定したり，グラデーションをつけたりすることもできる．
一方，表示された色はWebGLのreadPixelsという関数を使うとJavaScript側で読みだすことも出来る．
なので，渡したいデータを色として表示して，それを読みだしてやれば，フラグメントシェーダからCPUへデータを受け渡すことが出来る．

色はRGBAの値で指定されるが，フラグメントシェーダではRGBAの値を0&ndash;1のfloatで指定するのに対して，JavaScript側では，RGBAの値を8ビットのunsigned intとして受け取るので注意しよう．

32ビットのintを色に変換するには，次のように8ビットごとにバイナリを取り出して，0&ndash;1のfloatに変換してやればよい．

```glsl
vec4 intToVec4(int num) {
    int rIntValue = num & 0x000000FF;
    int gIntValue = (num & 0x0000FF00) >> 8;
    int bIntValue = (num & 0x00FF0000) >> 16;
    int aIntValue = (num & 0xFF000000) >> 24;
    vec4 numColor = vec4(float(rIntValue)/255.0, float(gIntValue)/255.0, float(bIntValue)/255.0, float(aIntValue)/255.0); 
    return numColor; 
} 
```

同様に32ビットのuintも次のように色に変換できる．

```glsl
vec4 uintToVec4(uint num) {
    uint rIntValue = num & 0x000000FFu;
    uint gIntValue = (num & 0x0000FF00u) >> 8;
    uint bIntValue = (num & 0x00FF0000u) >> 16;
    uint aIntValue = (num & 0xFF000000u) >> 24;
    vec4 numColor = vec4(float(rIntValue)/255.0, float(gIntValue)/255.0, float(bIntValue)/255.0, float(aIntValue)/255.0); 
    return numColor;
}
```

32ビットfloatの場合は，ビット列を変えずにfloatをuintに変換した後，uintを色に変換してやればよい．

```glsl
vec4 floatToVec4(float val) {
    uint conv = floatBitsToUint(val);
    return uintToVec4(conv);
}
```

<details>
<summary></summary>
Die Rolle des Fragment Shaders ist, für jedes Pixel eine Farbe zu bestimmen. Die gezeichnete Farbe kann von der CPU mit der WebGL Funktion readPixcels gelesen werden.
Das heißt, wenn man die Daten als Farbe zeichnet, können die Daten von der GPU zur CPU übertragen werden.
</details>

## 色をデータとして読みだす

画面全体の色を，int，unsigned int，floatの配列としてJavaScript側で読み出す関数は次のような感じになる．

まず，読み出しに必要な分だけバイナリ配列の領域を用意して，そこに色データを読み出す．
必要なサイズは，ピクセル数×8ビット×RGBAである．
これを32ビットごとのまとまりとして認識し直せば，もともとのデータが得られる．

```javascript
function readInt32Array() {
  let pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
  gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return new Int32Array(pixels.buffer);
}

function readUint32Array() {
  let pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
  gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return new Uint32Array(pixels.buffer);
}

function readFloat32Array() {
  let pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
  gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return new Float32Array(pixels.buffer);
}
```

<details>
<summary></summary>
Die gezeichneten Farben können als ein int-, uint-, oder float-Array ausgelesen werden.

Zuerst sollte man den notwendigen Binary Buffer vorbereiten und die Farbdaten auslesen. Die notwendige Buffergröße ist: Pixels × 8-Bit × RGBA.
Dann sollen diese Binärdaten als 32-Bit Datan neu erkannt werden.
</details>
