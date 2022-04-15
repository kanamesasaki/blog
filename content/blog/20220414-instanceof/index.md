---
title: TypeScriptのジェネリクスでinstanceof Tしたい
date: "2022-04-14T00:00:00.000Z"
description: "How to use instanceof with generics in TypeScript"
tags: ["TypeScript", "Programming"]
---

## やりたいこと

いろんなものが入った配列から何番目かの要素を選んで，それが期待した型なら受け取る，という操作を考えよう．
気持ち的にはジェネリクスを使って次のように書きたいのだが，これは上手くいかない．TypeScriptがコンパイルされると，ジェネリクスの記述はなくなってしまうので，ランタイムの型チェックでTと表すことはできないようだ．

```typescript
function get<T>(id:number, arr:Array<any>) : T {
    const m = arr[id]
    if (m instanceof T){
        return m
    }
    else {
        throw Error('unexpected type')
    }
}
```

## コンストラクト関数

解決方法としては，以下のようにコンストラクタ関数を書く，という方法がある．

```typescript
function get<T>(id:number, arr:Array<any>, cls: new (...args: any) => T) : T {
    const m = arr[id]
    if (m instanceof cls){
        return m
    }
    else {
        throw Error('unexpected type')
    }
}
```
慣れていないと少し分かりにくい記述なので，分解して考えてみよう．
`(...args: any) => T`の部分は任意の個数だけany引数をとってTを返すような関数を表している．
この部分の頭についている`new`はconstruct signatureと呼ばれ，この関数がコンストラクタ関数として使えることを表している．
つまり`cls`は，何かしらの引数をとってTを返すようなコンストラクタ関数になっており，`instanceof`を使うことで配列`arr`から取り出した`m`がコンストラクタ関数`cls`のインスタンスになっているかどうかをランタイムにチェックできる．

使用例としては以下のような感じになる．

```typescript
class Foo {
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}

class Bar {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const arr = [new Foo(1), new Bar('bar')]
console.log(get(0, arr, Foo))
```


