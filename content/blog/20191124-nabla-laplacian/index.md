---
title: "[流体力学] 円筒座標・極座標のナブラとラプラシアン"
date: "2019-11-24T00:00:00.000Z"
description: "Derivation of nabla and laplacian in cylindrical and polar coordinates"
tags: ["Fluid dynamics"]
---

流体力学の議論では円筒座標系や極座標系を用いることも多いので，各座標系でのナブラとラプラシアンを求めておこう．いくつか手法はあるが，連鎖律（Chain Rule）からガリガリ計算するのは心が折れるし，計量テンソルを持ち込むのは仰々しすぎる気がする...ということで，以下のような折衷案で計算してみた．

## 円筒座標 / Cylindrical Coordinates

デカルト座標系パラメタは円筒座標系のパラメタを用いると以下のように表される．

$$
\begin{equation*}
\boldsymbol{r} = x \boldsymbol{e}_x + y \boldsymbol{e}_y + z \boldsymbol{e}_z
= r \cos \theta\ \boldsymbol{e}_x + r \sin \theta\ \boldsymbol{e}_y + z \boldsymbol{e}_z
\end{equation*}
$$

これより共変基底ベクトルを求めると以下のとおり．共変基底ベクトルは位置ベクトル$\boldsymbol{r}$をある座標系のパラメタで偏微分したもので，パラメタが微小に変化したときに，位置ベクトルの変化する方向を表す．これらのベクトルは必ずしも直交しないが，今回は円筒座標系を用いるので，互いに直交する3つのベクトルが得られる．

$$
\begin{align*}
&\boldsymbol{g}_r = \frac{\partial \boldsymbol{r}}{\partial r} = \cos \theta \boldsymbol{e}_x + \sin \theta \boldsymbol{e}_y \\
&\boldsymbol{g}_\theta = \frac{\partial \boldsymbol{r}}{\partial \theta} = - r \sin \theta \boldsymbol{e}_x + r \cos \theta \boldsymbol{e}_y \\
&\boldsymbol{g}_z = \frac{\partial \boldsymbol{r}}{\partial z} = \boldsymbol{e}_z
\end{align*}
$$

これらを正規化したものを改めて$(\boldsymbol{e}_r, \boldsymbol{e}_\theta, \boldsymbol{e}_z)$とおくと，次のように円筒座標系での$\nabla$が得られる．

$$
\begin{equation*}
\nabla = \boldsymbol{g}_r \frac{\partial}{\partial r} + \boldsymbol{g}_\theta \frac{\partial}{\partial \theta} + \boldsymbol{g}_z \frac{\partial}{\partial z}
= \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_z \frac{\partial}{\partial z}
\end{equation*}
$$

円筒座標基底の偏微分を求めて，ナブラの内積を計算すると円筒座標系でのラプラシアンが求められる．

$$
\begin{equation*}
\frac{\partial}{\partial \theta} \left( \begin{array}{c}
\boldsymbol{e}_r \\ \boldsymbol{e}_\theta
\end{array} \right) =
\left( \begin{array}{cc}
-\sin \theta & \cos \theta \\
- \cos \theta & - \sin \theta
\end{array} \right)
\left( \begin{array}{c}
\boldsymbol{e}_x \\ \boldsymbol{e}_y
\end{array} \right) =
\left( \begin{array}{c}
\boldsymbol{e}_\theta \\ - \boldsymbol{e}_r
\end{array} \right)
\end{equation*}
$$

$$
\begin{align*}
\Delta &= \nabla \cdot \nabla \\

&= \left( \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_z \frac{\partial}{\partial z} \right) \cdot \left( \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_z \frac{\partial}{\partial z} \right) \\

&= \frac{\partial^2}{\partial r^2} + \boldsymbol{e}_\theta \cdot \frac{1}{r} \left( \frac{\partial}{\partial \theta} \boldsymbol{e}_r \right) \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{\partial^2}{\partial z^2} \\

&= \frac{\partial^2}{\partial r^2} + \frac{1}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{\partial^2}{\partial z^2} \\
\end{align*}
$$

## 極座標 / Polar Coordinate

デカルト座標系パラメタは極座標系のパラメタを用いると以下のように表される．

$$
\begin{equation*}
\boldsymbol{r} = x \boldsymbol{e}_x + y \boldsymbol{e}_y + z \boldsymbol{e}_z
= r \sin \theta \cos \phi\ \boldsymbol{e}_x + r \sin \theta \sin \phi\ \boldsymbol{e}_y + r \cos \theta \boldsymbol{e}_z
\end{equation*}
$$

これより共変基底ベクトルを求めると以下のとおり．

$$
\begin{align*}
&\boldsymbol{g}_r = \frac{\partial \boldsymbol{r}}{\partial r} = \sin \theta \cos \phi\ \boldsymbol{e}_x + \sin \theta \sin \phi\ \boldsymbol{e}_y + \cos \theta\ \boldsymbol{e}_z \\
&\boldsymbol{g}_\theta = \frac{\partial \boldsymbol{r}}{\partial \theta} = r \cos \theta \cos \phi\ \boldsymbol{e}_x + r \cos \theta \sin \phi\ \boldsymbol{e}_y - r \sin \theta\ \boldsymbol{e}_z \\
&\boldsymbol{g}_\phi = \frac{\partial \boldsymbol{r}}{\partial \phi} = - r \sin \theta \sin \phi\ \boldsymbol{e}_x + r \sin \theta \cos \phi\ \boldsymbol{e}_y
\end{align*}
$$

これらを正規化したものを改めて$(\boldsymbol{e}_r, \boldsymbol{e}_{\theta}, \boldsymbol{e}_{\phi})$とおくと，次のように極座標系での$\nabla$が得られる．

$$
\begin{equation*}
\nabla = \boldsymbol{g}_r \frac{\partial}{\partial r} + \boldsymbol{g}_\theta \frac{\partial}{\partial \theta} + \boldsymbol{g}_\phi \frac{\partial}{\partial \phi}
= \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_\phi \frac{1}{r \sin \theta} \frac{\partial}{\partial \phi}
\end{equation*}
$$

極座標基底の偏微分を求めて，ナブラの内積を計算すると円筒座標系でのラプラシアンが求められる．

$$
\begin{equation*}
\frac{\partial}{\partial \theta} \left( \begin{array}{c}
\boldsymbol{e}_r \\ \boldsymbol{e}_\theta \\ \boldsymbol{e}_\phi
\end{array} \right) =
\left( \begin{array}{ccc}
\cos \theta \cos \phi & \cos \theta \sin \phi & - \sin \theta \\
- \sin \theta \cos \phi & - \sin \theta \sin \phi & - \cos \theta \\
0 & 0 & 0
\end{array} \right)
\left( \begin{array}{c}
\boldsymbol{e}_x \\ \boldsymbol{e}_y \\ \boldsymbol{e}_z
\end{array} \right) =
\left( \begin{array}{c}
\boldsymbol{e}_\theta \\ - \boldsymbol{e}_r \\ 0
\end{array} \right)
\end{equation*}
$$

$$
\begin{equation*}
\frac{\partial}{\partial \phi} \left( \begin{array}{c}
\boldsymbol{e}_r \\ \boldsymbol{e}_\theta \\ \boldsymbol{e}_\phi
\end{array} \right) =
\left( \begin{array}{ccc}
- \sin \theta \sin \phi & \sin \theta \cos \phi & 0 \\
- \cos \theta \sin \phi & \cos \theta \cos \phi & 0 \\
- \cos \phi & - \sin \phi & 0
\end{array} \right)
\left( \begin{array}{c}
\boldsymbol{e}_x \\ \boldsymbol{e}_y \\ \boldsymbol{e}_z
\end{array} \right) =
\left( \begin{array}{c}
\sin \theta\ \boldsymbol{e}_\phi \\ \cos \theta\ \boldsymbol{e}_\phi \\ - \sin \theta\ \boldsymbol{e}_r - \cos \theta\ \boldsymbol{e}_\theta
\end{array} \right)
\end{equation*}
$$

$$
\begin{align*}
\Delta &= \nabla \cdot \nabla \\
&= \left( \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_\phi \frac{1}{r \sin \theta}\frac{\partial}{\partial \phi} \right) \cdot \left( \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_\phi \frac{1}{r \sin \theta}\frac{\partial}{\partial \phi} \right) \\
&= \frac{\partial^2}{\partial r^2} + \frac{2}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{1}{r^2 \tan \theta} \frac{\partial}{\partial \theta} + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2}
\end{align*}
$$

## まとめ

以上で円筒座標・極座標でのナブラとラプラシアンを求めることが出来た．初めに述べたように，アプローチの仕方は他にもあるので，好きな方法で一度計算してみるといいと思う．