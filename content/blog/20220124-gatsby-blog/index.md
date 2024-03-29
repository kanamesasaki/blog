---
title: GatsbyとGitHub Pagesで作るMarkdownブログ
date: "2022-01-24T00:00:00.000Z"
description: "How to setup a Markdown format blog based on Gatsby and GitHub Pages"
tags: ["Programming"]
---

## Gatsbyのセットアップ
以下のコマンドでグローバルにgatsby-cliをインストールする．

```shell
npm install -g gatsby-cli
```

これでgatsbyコマンドが使えるはずだが，もしコマンドが認識されないようなら，
gatsby-cliのインストール先にパスが通っていない可能性がある．
その場合には，インストール先(C:\Users\username\AppData\Roaming\npm)を環境変数のPathに追加すればよい．
インストール先は以下のコマンドでも確認できる．

```shell
npm bin -g
```
gatsbyではstarterと呼ばれる様々なサイトテンプレートが利用できる．
今回はその中から，gatsby-starter-blogを用いてブログのセットアップをする．
以下のコマンドで，blogフォルダ（プロジェクトのルートディレクトリ）内にgatsby-starter-blogのコードが展開される．

```shell
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
```

プロジェクトのルートディレクトリに移動してdevelopコマンドを打つと，開発用サーバーがたてられる．
ブラウザからlocalhost:8000にアクセスすると，実際にウェブサイトが表示されるはずだ．

```shell
cd blog
gatsby develop
```

## Github Pagesにウェブサイトをデプロイする

GitHub Pagesの機能を用いると，GitHubで管理しているコード・記事を元に，ウェブサイトを公開することが出来る．
公開元として，自由にブランチを指定でき，さらにフォルダをルートまたはdocsフォルダから指定できる．

今やりたいこととしては，ソースコードはGitで監視してmainブランチに置き，
ビルド結果は，mainブランチに含めたくないしGitで監視する必要もないので，gh-pagesブランチに置いてウェブサイトの公開だけしたい．
npmのgh-pagesパッケージを利用すると，この辺りをうまいことやってくれる．

まずgh-pagesパッケージをグローバルにインストールしておく．

```shell
npm install -g gh-pages --save-dev
```

GitHubでblogリポジトリを新しく作成して，これをリモートリポジトリに指定する．

```shell
git remote add origin git@github.com:username/blog.git
```

ソースコードは普通にmainブランチにpushすればOK．
publicフォルダは.gitignoreに指定されているので，Gitには監視されていない．
```shell
git push origin main
```

GitHub Pagesを使ってblogという名前でプロジェクトサイトを作る場合，トップページがこのようなURL(`https://username.github.io/blog/`)になる．
各ページへのパスを/blog/以下に割り振るために，gatsby-config.jsにpathPrefixを追加して，ビルドする際に--prefix-pathsフラグを入れる．

```js
module.exports = {
  pathPrefix: `/blog`,
}
```

以下のコマンドでビルドして，publicフォルダ内にファイルが生成されていることを確認する．

```shell
gatsby build --prefix-paths
```

以下のコマンドを打つと，gh-pagesブランチにpublicフォルダの中身がpushされる．

```shell
gh-pages -d public
```

## Markdownで数式を使えるようにする

このままだとMarkdownファイルの中で数式が使えないので，gatsby-remark-katexとkatexをインストールする．

```shell
npm install gatsby-remark-katex katex
```

gatsby-starter-blogを使っていると，gatsby-config.jsの中にgatsby-transformer-remarkに関するスクリプトがあるはずなので，そこにgatsby-remark-katexを追加する．

```js
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 630,
        },
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
      `gatsby-remark-prismjs`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      {
        resolve: `gatsby-remark-katex`,
        options: {
          // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
          strict: `ignore`
        }
      }
    ],
  },
},
```
\src\templates\blog-post.jsに以下のスクリプトを追加する．

```js
import "katex/dist/katex.min.css"
```

## 図の挿入について

gatsby-starter-blogではMarkdownの書式を用いて，以下のように図を挿入することが出来る．

```markdown
![figurename](.\figurename.jpg)
```

ただこの状態では，svgやgifの使用，幅・高さの設定等ができないので，gatsby-remark-static-imagesをインストールして，gatsby-config.jsにスクリプトを追加する．

```shell
npm install gatsby-remark-static-images
```

```js
// gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-static-images'
      ]
    }
  }
]
```

これでsvgやgifもMarkdownの書式で挿入できるが，さらに図の幅や位置を指定したい場合は，以下のようにHTMLの書式で挿入することが出来る．

```markdown
<div align="center"><img src=".\figurename.svg" width="300"></div>
```

## Google Analyticsの設定

gatsby-starter-blogにはgatsby-plugin-google-analyticsがインストールされているが，新しいGoogleアナリティクス（GA4）には対応していないようなので，そちらを使用する場合はgatsby-plugin-google-gtagに移行する必要がある．

```shell
npm uninstall gatsby-plugin-google-analytics
```

```shell
npm install gatsby-plugin-google-gtag
```
gatsby-plugin-google-gtagをインストールしたら，gatsby-config.jsのgatsby-plugin-google-analyticsに関する記述は削除して，以下のスクリプトを追加する．

```js
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: ["G-XXXXXXXXXX"],
    gtagConfig: {
      anonymize_ip: true,
    },
    pluginConfig: {
      head: true,
    },
  },
},
```

