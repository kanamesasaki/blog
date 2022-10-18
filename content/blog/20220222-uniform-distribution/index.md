---
title: いろいろな形状の表面に点を一様分布させる
date: "2022-02-22T00:00:00.000Z"
description: "Uniformly distribute points on primitive geometries"
tags: ["Thermal"]
---

## やりたいこと

輻射による熱のやり取りを評価する場合，レイトレースすることで物体間のRadiative Coupling（または形態係数）を求めることが出来る．
このとき光線は，物体の表面上で面積に関して一様になるように発生点を指定して，そこからランベルトの余弦則に沿うように光線の方向を決めてやる必要がある．
今回は基本的な表面形状（長方形・三角形・円板・球面・円柱・円錐・放物面）について，0&ndash;1の範囲のランダム値からどうやって一様分布を発生させるかを考える．

## 長方形上の一様分布
下図のような長方形上に一様分布させる場合は，2つのランダム値$(q_1, q_2)$を発生させて，以下のように計算すればよい．

$$
\begin{equation}
q_1 (\vec{p_2} - \vec{p_1}) + q_2 (\vec{p_3} - \vec{p_1})
\end{equation}
$$

<div align=center><img src=".\rectangle.svg" width="450"></div>

## 三角形上の一様分布
三角形の場合は，発生させた2つのランダム値$(q_1, q_2)$の和が1より大きい場合は値を捨てて，和が1以下の組み合わせが得られるまでランダム値を繰り返し発生させる．

$$
\begin{equation}
q_1 (\vec{p_2} - \vec{p_1}) + q_2 (\vec{p_3} - \vec{p_1})
\end{equation}
$$

<div align=center><img src=".\triangle.svg" width="450"></div>

## 円柱側面上の一様分布
円柱側面上に点を一様分布させる場合は，高方向・周方向それぞれ一様に値をとればよい．
高さ$h$は，0&ndash;1の範囲のランダム値$q$を用いて以下のように決められる．

$$
\begin{gather}
h = h_\mathrm{max} q
\end{gather}
$$

周方向のパラメタ$\varphi$は以下のように決められる．

$$
\begin{gather}
\varphi = 2\pi q
\end{gather}
$$

<div align=center><img src=".\cylinder.svg" width="450"></div>

## 円板上の一様分布
部分円板上に点を一様にばらまく場合，ある点が半径方向の位置$r$の内側に入る確率は次のように表される．

$$
\begin{equation}
q = \frac{\int_{r_\mathrm{inner}}^{r} \int_{\theta_\mathrm{start}}^{\theta_\mathrm{end}} r dr d\theta}{\int_{r_\mathrm{inner}}^{r_\mathrm{outer}} \int_{\theta_\mathrm{start}}^{\theta_\mathrm{end}} r dr d\theta} 
= \frac{r^2 - r_\mathrm{inner}^2}{r_\mathrm{outer}^2 - r_\mathrm{inner}^2}
\end{equation}
$$

この式を逆に解いてやると，0&ndash;1の値$p$に対して半径方向の位置$r$を対応させることが出来る．

$$
\begin{equation}
r = \sqrt{q(r_\mathrm{outer}^2 - r_\mathrm{inner}^2) + r_\mathrm{inner}^2}
\end{equation}
$$

周方向については，次のように決められる．

$$
\begin{equation}
\theta = q (\theta_\mathrm{end} - \theta_\mathrm{start}) + \theta_\mathrm{start}
\end{equation}
$$

<div align=center><img src=".\disk.svg" width="450"></div>

## 球面上の一様分布
部分球面上に一様に点をばらまく場合，ある点が緯度方向について$\theta$以下である確率は次のように表される．

$$
\begin{gather}
q = \frac{\int_{\theta_\mathrm{apex}}^{\theta} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \sin \theta d\varphi d\theta}{\int_{\theta_\mathrm{base}}^{\theta_\mathrm{end}} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \sin \theta d\varphi d\theta } 
= \frac{[-\cos \theta]_{\theta_\mathrm{apex}}^{\theta}}{[-\cos \theta]_{\theta_\mathrm{apex}}^{\theta_\mathrm{base}}} 
= \frac{\cos \theta_\mathrm{apex}-\cos \theta}{\cos \theta_\mathrm{apex}-\cos \theta_\mathrm{base}} \\
\mathrm{where}~~ \theta_\mathrm{base} = \arccos \frac{h_\mathrm{base}}{r}, ~~ \theta_\mathrm{apex} = \arccos \frac{h_\mathrm{apex}}{r}
\end{gather}
$$

この式を逆に解いてやると，0&ndash;1の値$p$に対して緯度方向のパラメタ$\theta$を対応させることが出来る．

$$
\begin{align}
\theta &= \arccos (\cos \theta_\mathrm{apex} - q(\cos \theta_\mathrm{apex}-\cos \theta_\mathrm{base})) \\
&= \arccos\left( (1-q) \frac{h_\mathrm{apex}}{r} + q \frac{h_\mathrm{base}}{r} \right)
\end{align}
$$

経度方向については，次のように決められる．

$$
\begin{equation}
\varphi = q (\varphi_\mathrm{end} - \varphi_\mathrm{start}) + \varphi_\mathrm{start}
\end{equation}
$$

<div align=center><img src=".\sphere.svg" width="450"></div>

## 円錐面上の一様分布
部分円錐面上に一様に点をばらまく場合，ある点が高さ$h$以下である確率は次のように表される．

$$
\begin{align}
q &= \frac{\int_{0}^{h} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \frac{2\pi r}{\cos \theta}d\varphi dh}{\int^{h_\mathrm{max}}_{0} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \frac{2\pi r}{\cos \theta}d\varphi dh}, ~~
\mathrm{where}~~ r = r_1 - \tan \theta ~h, ~~ \tan \theta = \frac{r_1 - r_2}{h_\mathrm{max}} \\
&= \frac{\int_{0}^{h} r_1 - \tan \theta~ h ~ dh}{\int^{h_\mathrm{max}}_{0} r_1 - \tan \theta h ~ dh}
= \frac{\left[r_1 h - \frac{\tan \theta}{2}h^2 \right]^h_0}{\left[r_1 h - \frac{\tan \theta}{2}h^2 \right]^{h_\mathrm{max}}_0}
= \frac{r_1 h - \frac{\tan \theta}{2}h^2}{r_1 h_\mathrm{max} - \frac{\tan \theta}{2}h^2_\mathrm{max}} 
\end{align}
$$

この式を逆に解いてやると，0&ndash;1の値$q$に対して高さ方向のパラメタ$h$を対応させることが出来る．
解は2つ存在するが，高さ$h$が円錐の頂点を超えないようにしたいので，マイナスの場合を用いる．

$$
\begin{equation}
h = \frac{r_1}{\tan \theta} \pm \sqrt{\left( \frac{r_1}{\tan \theta} \right)^2 - 2q h_\mathrm{max} \frac{r_1}{\tan \theta} + q h_\mathrm{max}^2}
\end{equation}
$$

周方向については，次のように決められる．

$$
\begin{equation}
\varphi = q (\varphi_\mathrm{end} - \varphi_\mathrm{start}) + \varphi_\mathrm{start}
\end{equation}
$$

<div align=center><img src=".\cone.svg" width="450"></div>

## 放物面上の一様分布
下図のような部分放物面について考えよう．ただし放物面の頂点は原点にあり，放物面の軸が高さ方向の軸に一致するものとする．半径$r$と高さ$h$の関係は以下のように表される．

$$
\begin{equation}
h = a^2 r^2, ~~\mathrm{where} ~~ a^2 = \frac{h_\mathrm{max}}{r_\mathrm{max}^2}
\end{equation}
$$

$$
\begin{equation}
r = \frac{\sqrt{h}}{a}
\end{equation}
$$

接線の傾きを$\tan \theta$で表すとすると，以下のように表される．

$$
\begin{equation}
\tan{\theta} = \frac{dh}{dr} = 2a^2 r
\end{equation}
$$

$1+\frac{1}{\tan^2 \theta} = \frac{1}{\sin^2 \theta}$を用いると，以下の関係が得られる．

$$
\begin{gather}
\frac{1}{\sin \theta} = \sqrt{1 + \frac{1}{\tan^2 \theta}} = \sqrt{1 + \frac{1}{4a^4r^2}} \\
\frac{r}{\sin \theta} = \sqrt{\frac{h}{a^2} + \frac{h}{4a^6r^2}}
= \sqrt{\frac{h}{a^2} + \frac{1}{4a^4}}
\end{gather}
$$

一様に点をばらまく場合，ある点が高さ$h$以下である確率は次のように表される．

$$
\begin{align}
q &= \frac{\int_{h_\mathrm{min}}^{h} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \frac{r}{\sin \theta}d\varphi dh}{\int^{h_\mathrm{max}}_{h_\mathrm{min}} \int_{\varphi_\mathrm{start}}^{\varphi_\mathrm{end}} \frac{r}{\sin \theta}d\varphi dh} 
= \frac{\int_{h_\mathrm{min}}^{h} \sqrt{h + \frac{1}{4a^2}} dh}{\int^{h_\mathrm{max}}_{h_\mathrm{min}} \sqrt{h + \frac{1}{4a^2}} dh} \\
&= \frac{\left[ \frac{2}{3}\left(h + \frac{1}{4a^2} \right)^{\frac{3}{2}} \right]^h_{h_\mathrm{min}}}{\left[ \frac{2}{3} \left(h + \frac{1}{4a^2} \right)^{\frac{3}{2}} \right]^{h_\mathrm{max}}_{h_\mathrm{min}}}
= \frac{\left(h + \frac{1}{4a^2} \right)^{\frac{3}{2}} - \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^{\frac{3}{2}}}{\left(h_\mathrm{max} + \frac{1}{4a^2} \right)^{\frac{3}{2}} - \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^{\frac{3}{2}}} 
\end{align}
$$

この式を逆に解いてやると，0&ndash;1の値$q$に対して高さ方向のパラメタ$h$を対応させることが出来る．

$$
\begin{gather}
\left(h + \frac{1}{4a^2} \right)^{\frac{3}{2}} = q \left\{ \left(h_\mathrm{max} + \frac{1}{4a^2} \right)^{\frac{3}{2}} - \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^{\frac{3}{2}} \right\} + \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^\frac{3}{2} \\
h = \left[q \left\{ \left(h_\mathrm{max} + \frac{1}{4a^2} \right)^{\frac{3}{2}} - \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^{\frac{3}{2}} \right\} + \left(h_\mathrm{min} + \frac{1}{4a^2} \right)^\frac{3}{2} \right]^\frac{2}{3} - \frac{1}{4a^2}
\end{gather}
$$

<div align=center><img src=".\paraboloid.svg" width="450"></div>

