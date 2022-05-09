---
title: "PythonからOpenTD・Thermal Desktopを操作する環境構築"
date: "2020-03-21T00:00:00.000Z"
description: "How to setup Python Environment for Controling OpenTD / Thermal Desktop"
tags: ["Thermal"]
---

## OpenTD

Thermal Desktop Version 6.1にはOpenTDと呼ばれる，Thermal Desktopを操作するためのAPIが含まれている．Version 6.0でTD APIとして初めて導入された機能で， Version 6.1へのアップデートに伴って，大幅な機能の拡張と名前の変更が行われたようだ． 通常Thermal Desktopは，AutoCADに組み込まれたGUIを用いて，ポチポチクリックしながら熱モデルの作成や解析を行うが，OpenTDを用いると，これらのマニュアル作業をスクリプトで書き表すことができる．以下のような点で非常に便利な機能だ．

- 形状，材料，熱環境など様々なパラメタに関して，パラメトリックな解析を簡単に行うことができる
- モデルの作成手順がそのままスクリプト化されるので，モデル作成の情報がすべて残る
- スクリプトの一部あるいは全部を，将来的に再利用をすることが（うまくやれば）容易
- Thermal Desktopから直接データを受け取って，グラフ等にプロットすることができる

OpenTDは.NETを用いるので，基本的にはC#での利用が推奨されている．ただ，個人的には最近Pythonしか使っていないので，できればThermal Desktopの操作，Thermal Desktopから渡されたデータの解析・プロットまでを，Python環境で全てできるようにしてしまいたい．そこで今回は，PythonからOpenTD・Thermal Desktopを操作するために必要な環境の，セットアップ方法について解説する．

## 仮想環境の構築

バージョン互換などの問題が生じないように，Thermal Desktopを操作するための仮想環境を立てて，その中に必要なパッケージをインストールしよう．まずはAnacondaのターミナルを開いて，以下のコマンドを打つと現在存在する環境の一覧が確認できる．もし，何も追加で作成されていなければbase環境のみが存在するはずだ．

```shell
(base) C:\>conda info --envs
# conda environments:
#
base                  *  C:\ProgramData\Anaconda3
```

通常，仮想環境を作成するとユーザーフォルダに\.conda\envsと\.conda\pkgsが作成されて，ここに環境設定ファイルやパッケージが展開されるのだが，諸事情によりユーザーフォルダ以下を重たくしたくないので，インストールディレクトリをC:\conda\の下に変更する．これには，ユーザーフォルダにある，.condarcファイルに以下のテキストを書き込めばよい．

```shell
envs_dirs:
  - C:\conda\envs

pkgs_dirs:
  - C:\conda\pkgs
```

これを行った上で，Anacondaのターミナルで以下のコマンドを打って，ディレクトリの指定・優先順位設定がされていることを確認しよう．

```shell
(base) C:\>conda config --show envs_dirs
envs_dirs:
  - C:\conda\envs
  - C:\Users\XXXXXX\.conda\envs
  - C:\ProgramData\Anaconda3\envs
  - C:\Users\XXXXXX\AppData\Local\conda\conda\envs

(base) C:\>conda config --show pkgs_dirs
pkgs_dirs:
  - C:\conda\pkgs
```

ここまで確認出来たら，以下のコマンドを打って仮想環境を作成しよう．このコマンドではtdという名前の仮想環境を作成して，そこにPython 3.7をインストールしている．インストールを行った時点でPython 3.8が利用可能だが，後でインストールするPython for .NET (pythonnet)のために，Python 3.7を指定している．

```shell
(base) C:\>conda create -n td python=3.7
```

これで，仮想環境ができているはずなので，以下のコマンドを打ってtd環境に入ろう・

```shell
(base) C:\>conda activate td
```

## パッケージのインストール

ここから，td環境に各種パッケージをインストールしていく．OpenTDを使用するために必要なのはPython for .NET (pythonnet)だけではあるのだが，その他にも最低限必要そうなパッケージはインストールしておく．

```shell
(td) C:\>conda install -c conda-forge pythonnet
(td) C:\>conda install numpy
(td) C:\>conda install scipy
(td) C:\>conda install pandas
(td) C:\>conda install matplotlib
(td) C:\>conda install jupyterlab
```

注意点として，pythonnetはインストールの際にきちんとチャネルを指定して，バージョンを確認しよう．今回はpythonnet 2.4をインストールしているが，このバージョンとpythonnet 2.3では動作が異なる（自分の確認している限りでは，場合によってデータ型がC#のgeneric listからpython listに変わっていたりする）．以下のページでインストールコマンドやソフトウェアバージョンが確認できる．

- https://anaconda.org/conda-forge/pythonnet
- https://pypi.org/project/pythonnet/

以下のコマンドでtd環境を終了し，現在存在する環境のリストを再度確認することができる．

```shell
(td) C:\>conda deactivate

(base) C:\>conda info --envs
# conda environments:
#
base                  *  C:\ProgramData\Anaconda3
td                       C:\conda\envs\td
```