---
title: "Windows 10に日本語IMEをインストールする際のエラー対処法"
date: "2020-03-15T00:00:00.000Z"
description: "Errors when installing Japanese IME on non-Japanese Windows 10"
tags: ["Misc"]
---

外国語版Windows 10で日本語入力をしたい場合，基本的にはJapanese Microsoft IMEを追加すれば良いだけなのですが，私の環境ではハマったので対策法をメモしておきます．参考にしたのは以下のページです．

[Problems using a Japanese or Traditional Chinese IME on a non-Japanese or non-Traditional Chinese version of Windows 10 immediately after installing the April 2018 Update.](https://answers.microsoft.com/en-us/windows/forum/windows_10-other_settings/problems-using-a-japanese-or-traditional-chinese/db5a0ddf-2c50-4f0d-a961-58902f40acda?tm=1525123101042)

## エラーの場合の症状

Settings -> Languageで，Add a languageから日本語を選択・インストールすると，外国語版Windows 10でも日本語環境を導入することができます．ただ私の環境では，エラーメッセージ等はなかったものの，インストール後以下のような症状がみられました．

IMEの設定を，Half-width AlphanumericからHiraganaに変更できない
HiraganaへIME設定の変更，ひらがな入力はできるが，漢字に変換できない

このような場合，Settings -> Apps -> Manage optional featuresを確認して，Japanese typingが追加されていなければ，Japanese Microsoft IMEが正しくインストールできていないことがわかります．

## 手動でIME dictionaryをインストール

以下の手順でIME dictionaryを手動インストールします．

Registory Editorから以下のパラメタを1 -> 0に変更する（UseWUServer=1の場合はWSUSサーバーからアップデートを取得，UseWUServer=0の場合はMicrosoft Updateからアップデートを取得する）：
HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU\UseWUServer
コマンドプロンプトを管理者権限で実行して，以下のコマンドをうつ：
DISM.exe /Online /Add-Capability /CapabilityName:Language.Basic~~~ja-JP~0.0.1.0

エラーなしに完了できればOKで，Settings -> Apps -> Manage optional featuresにJapanese typingが追加されているはずです．私の環境では以上の手順が必要でしたが，レジストリのパラメタ変更をしなくてもDISMコマンドが通ることもあるようなので，まずは2の手順を試してみるのがおすすめです．