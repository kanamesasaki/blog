---
title: "[流体力学] レイノルズ数と相似則"
date: "2019-11-23T00:00:00.000Z"
description: "Reynolds number and the similarity of flows"
tags: ["Fluid dynamics"]
---

代表長さ$L$，および代表速度$U$を導入すると，非圧縮でのNavier-Stokes方程式を無次元化することができる．無次元化されたNavier-Stokes方程式を見てみると，レイノルズ数$\mathrm{Re}$の等しい流れでは，流れの場全体が相似になることがわかる．このことを実際に式変形して確認してみよう．

## Navier-Stokes方程式の無次元化

非圧縮でのNavier-Stokes方程式は以下のように表すことができた[（ナビエストークス方程式の導出）](https://kanamesasaki.github.io/blog/20191122-navier-stokes/)．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_15.7}
\rho \left[ \frac{\partial \boldsymbol{v}}{\partial t} + (\boldsymbol{v} \cdot \mathrm{grad}\ \boldsymbol{v}) \right] = - \mathrm{grad}\ p + \mu \Delta \boldsymbol{v}
\end{equation}
$$

ここで，代表長さ$L$，および代表速度$U$を導入して，次のような無次元化をしよう．

$$
\begin{gather*}
x = Lx', \hspace{10pt}
v = Uv', \hspace{10pt}
t = \frac{L}{U} t', \hspace{10pt}
p = \rho U^2 p', \\
\frac{\partial}{\partial x} = \frac{1}{L} \frac{\partial}{\partial x'}, \hspace{10pt}
\frac{\partial}{\partial t} = \frac{U}{L} \frac{\partial}{\partial t'}
\end{gather*}
$$

これらを(1)に代入すると，無次元化されたNavier-Stokes方程式を作ることが出来る．

$$
\begin{gather}
\rho \left[ \frac{U}{L} \frac{\partial}{\partial t'}(U\boldsymbol{v}') + (U\boldsymbol{v}' \cdot \frac{1}{L} \mathrm{grad}'\ U\boldsymbol{v}') \right] = - \frac{1}{L} \mathrm{grad}'\ \rho U^2 p' + \mu \frac{1}{L^2} \Delta' U\boldsymbol{v}' \\
\left[ \frac{\partial \boldsymbol{v}'}{\partial t'} + (\boldsymbol{v}' \cdot \mathrm{grad}'\ \boldsymbol{v}') \right] = - \mathrm{grad}'\ p' + \frac{1}{\mathrm{Re}} \Delta' \boldsymbol{v}'
\end{gather}
$$

## レイノルズ数

$\mathrm{Re}$はレイノルズ数と呼ばれる無次元量で，次のように定義される．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_19.1}
\mathrm{Re} = \frac{\rho U L}{\mu} = \frac{UL}{\nu}
\end{equation}
$$

以下のように書き直すと，レイノルズ数が慣性力$\rho U^2$と粘性力$\mu U / L$の比となっていることがよく分かる．（そもそもの構成則を思い出すと，せん断粘性率$\mu [\frac{\mathrm{N}}{\mathrm{m}\cdot \mathrm{m}/\mathrm{s}}]$は変形速度テンソル$[\frac{\mathrm{m}/\mathrm{s}}{\mathrm{m}}]$をかけて，単位面積当たりの力$[\frac{\mathrm{N}}{\mathrm{m}^2}]$となるような係数だった．）

$$
\begin{equation*}
\mathrm{Re} = \frac{\rho U^2}{\mu U / L}
\end{equation*}
$$

いま，2つの幾何学的に相似な流れがあって，粘性係数$\mu$や密度$\rho$が異なっていたとしても，レイノルズ数$\mathrm{Re}$が同一であれば，無次元化されたNavier-Stokes方程式は同じ形になる．このことをレイノルズの相似則と呼ぶ．

## まとめと参考文献

今回は流体力学の教科書として[^1]を紹介したい．流体力学というと，Navier-Stokes方程式を初めとする数式の理解が中心となりがちだが，この本は単に数式を追うのではなく，図や実験結果を多く取り入れて流体現象を解説する，というスタンスを取っている．一方で，扱っている流体現象の幅は広く，それぞれについての議論も丁寧なので，簡単にわかるという類の本ではない．序言には"流体の運動を取り扱う学問の入門書"とあるが，個人的にはむしろ，ある程度流体力学（基本的な数式）を学んだ後で読むと，数式と流体現象が結びついて理解が進むように思う．本棚に置いておいて，こちらの教科書ではこう書いてあったけど，[^1]ではどう書いてあったかな，というような使い方をするのがおすすめだ．

[^1]: 谷 一郎, "流れ学 第3版", 岩波全書, 1967年


