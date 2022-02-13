---
title: ES6モジュールをJestテストする
date: "2022-02-09T00:00:00.000Z"
description: "Jest testing environment for ES6 modules without Babel"
tags: ["Programming", "JavaScript"]
---

## やりたいこと

ES6モジュールをJestテストする方法のメモです．

## Jestの設定

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
