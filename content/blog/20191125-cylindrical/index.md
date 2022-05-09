---
title: "[流体力学] 円筒座標での連続の式・ナビエストークス方程式"
date: "2019-11-25T00:00:00.000Z"
description: "Navier-Stokes equation and Continuity equation in the cylindrical coordinates"
tags: ["Fluid dynamics"]
---

管内流れを議論する場合，円筒座標系で表した流体力学の基礎方程式が必要になる．基本的には，これまでに導出した連続の式およびナビエストークス方程式に対して，円筒座標系のナブラとラプラシアンを代入してやればよい．

## 円筒座標系での連続の式

連続の式は以下のように表すことが出来た[（[流体力学] 連続の式）](https://kanamesasaki.github.io/blog/20191121-continuity/)．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_1.2}
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \boldsymbol{v}) = 0
\end{equation}
$$

また，円筒座標系での$\nabla$は次のように表すことができた[（[流体力学] 円筒座標・極座標のナブラとラプラシアン）](https://kanamesasaki.github.io/blog/20191124-nabla-laplacian/)．

$$
\begin{equation}
% \label{eq:nabla}
\nabla = \boldsymbol{e}_r \frac{\partial}{\partial r} + \boldsymbol{e}_\theta \frac{1}{r} \frac{\partial}{\partial \theta} + \boldsymbol{e}_z \frac{\partial}{\partial z}
\end{equation}
$$

円筒座標系での連続の式を得るには，(1)に(2)をそのまま代入してやればよい．

$$
\begin{equation}
\frac{\partial \rho}{\partial t} + \frac{1}{r} \frac{\partial}{\partial r} (r \rho v_r) + \frac{1}{r} \frac{\partial}{\partial \theta} (\rho v_\theta) + \frac{\partial}{\partial z} (\rho v_z) = 0
\end{equation}
$$

## 円筒座標系のナビエストークス方程式

ナビエストークス方程式は以下のように表すことができた[（[流体力学] ナビエストークス方程式の導出）](https://kanamesasaki.github.io/blog/20191122-navier-stokes/)．ただし，$\zeta$は体積粘性率(bulk viscosity, bulk modulus or modulus of compression)，$\eta$せん断粘性率(shear viscosity, shear modulus or modulus of rigidity) である．今回は，重力などの流体質量に直接働く力はないものとして，$\rho \boldsymbol{f}$の項は無視する．

$$
\begin{equation}
% \label{eq:navier-stokes}
\rho \frac{\partial \boldsymbol{v}}{\partial t} + \rho \boldsymbol{v} \cdot \nabla \boldsymbol{v} = - \nabla p + \mu \Delta \boldsymbol{v} + \left( \zeta + \frac{1}{3} \eta \right) \nabla (\nabla \cdot \boldsymbol{v}) + \rho \boldsymbol{f}
\end{equation}
$$

また，円筒座標系でのラプラシアンは次のように表すことができた[（[流体力学] 円筒座標・極座標のナブラとラプラシアン）](https://kanamesasaki.github.io/blog/20191124-nabla-laplacian/)．

$$
\begin{equation}
% \label{eq:laplacian}
\Delta= \frac{\partial^2}{\partial r^2} + \frac{1}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{\partial^2}{\partial z^2} \\
\end{equation}
$$

よって(4)に(2)と(5)を代入すれば，円筒座標系でのナビエストークス方程式が得られる．ここでは各軸方向ごとに式を整理していく．

$$
\begin{align*}
& \rho \frac{\partial v_r}{\partial t} + \rho \boldsymbol{v} \cdot \nabla v_r
= - \frac{\partial p}{\partial r} + \eta \nabla^2 v_r - \frac{2}{r^2} \frac{\partial v_\theta}{\partial \theta} - \frac{v_r}{r^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial r} (\nabla \cdot \boldsymbol{v}) \\
& \rho \frac{\partial v_\theta}{\partial t} + \rho \boldsymbol{v} \cdot \nabla v_\theta
= - \frac{1}{r} \frac{\partial p}{\partial \theta} + \eta \nabla^2 v_\theta - \frac{2}{r^2} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta}{r^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{1}{r} \frac{\partial}{\partial \theta} (\nabla \cdot \boldsymbol{v}) \\
& \rho \frac{\partial v_z}{\partial t} + \rho \boldsymbol{v} \cdot \nabla v_z
= - \frac{\partial p}{\partial z} + \eta \nabla^2 v_z
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial z} (\nabla \cdot \boldsymbol{v})
\end{align*}
$$

$$
\begin{align*}
& \rho \frac{\partial v_r}{\partial t} + \rho v_r \frac{\partial v_r}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_r}{\partial \theta} + \rho v_z \frac{\partial v_r}{\partial z} \\
&~~~~~= - \frac{\partial p}{\partial r} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_r}{\partial \theta^2} + \eta \frac{\partial^2 v_r}{\partial z^2}
- \frac{2}{r^2} \frac{\partial v_\theta}{\partial \theta} - \frac{v_r}{r^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial r} \left( \frac{\partial v_r}{\partial r} + \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} \right)  \\

& \rho \frac{\partial v_\theta}{\partial t} + \rho v_r \frac{\partial v_\theta}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \rho v_z \frac{\partial v_\theta}{\partial z} \\
&~~~~~= - \frac{1}{r} \frac{\partial p}{\partial \theta} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_\theta}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_\theta}{\partial \theta^2} + \eta \frac{\partial^2 v_\theta}{\partial z^2}
- \frac{2}{r^2} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta}{r^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{1}{r} \frac{\partial}{\partial \theta} \left( \frac{\partial v_r}{\partial r} + \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} \right)  \\

& \rho \frac{\partial v_z}{\partial t} + \rho v_r \frac{\partial v_z}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_z}{\partial \theta} + \rho v_z \frac{\partial v_z}{\partial z} \\
&~~~~~= - \frac{\partial p}{\partial z} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_z}{\partial \theta^2} + \eta \frac{\partial^2 v_z}{\partial z^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial z} \left( \frac{\partial v_r}{\partial r} + \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} \right) 
\end{align*}
$$

## 軸対称・非圧縮などの場合について

ナビエストークス方程式をそのままの形で扱うのは難しいので，扱う問題に応じて適切な簡略化がしばしば行われる．ここでは，いくつかの仮定をおいた場合，連続の式とナビエストークス方程式がどう変形されるかを確認しておく．

旋回のない軸対称問題$v_\theta = 0$であれば，連続の式とナビエストークス方程式は以下のように簡略化できる．
$$
\begin{equation*}
\frac{\partial \rho}{\partial t} + \frac{1}{r} \frac{\partial}{\partial r} (r \rho v_r) + \frac{\partial}{\partial z} (\rho v_z) = 0
\end{equation*}
$$
$$
\begin{align*}
& \rho \frac{\partial v_r}{\partial t} + \rho v_r \frac{\partial v_r}{\partial r} + \rho v_z \frac{\partial v_r}{\partial z}
= - \frac{\partial p}{\partial r} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial r} \right) + \eta \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial r} \left( \frac{\partial v_r}{\partial r} + \frac{\partial v_z}{\partial z} \right)  \\
& \rho \frac{\partial v_z}{\partial t} + \rho v_r \frac{\partial v_z}{\partial r} + \rho v_z \frac{\partial v_z}{\partial z}
= - \frac{\partial p}{\partial z} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) + \eta \frac{\partial^2 v_z}{\partial z^2}
+ \left( \zeta + \frac{1}{3} \eta \right) \frac{\partial}{\partial z} \left( \frac{\partial v_r}{\partial r} + \frac{\partial v_z}{\partial z} \right) 
\end{align*}
$$

さらに半径方向にも一様である場合，一次元流れとして以下のように簡略化できる．

$$
\begin{equation*}
\frac{\partial \rho}{\partial t} + \frac{\partial}{\partial z} (\rho v_z) = 0
\end{equation*}
$$
$$
\begin{equation*}
\rho \frac{\partial v_z}{\partial t} + \rho v_z \frac{\partial v_z}{\partial z}
= - \frac{\partial p}{\partial z} + \left( \zeta + \frac{4}{3} \eta \right) \frac{\partial^2 v_z}{\partial z^2} 
\end{equation*}
$$

圧縮性を考慮しない$\rho = \mathrm{const}$の場合，連続の式とナビエストークス方程式は以下のように表される．このとき，粘性係数は$\eta$のみとなり，動粘性係数$\nu = \eta/\rho$を用いることも多い．

$$
\begin{equation*}
\frac{1}{r} \frac{\partial}{\partial r} (r v_r) + \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} = 0
\end{equation*}
$$
$$
\begin{align*}
& \rho \frac{\partial v_r}{\partial t} + \rho v_r \frac{\partial v_r}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_r}{\partial \theta} + \rho v_z \frac{\partial v_r}{\partial z}
= - \frac{\partial p}{\partial r} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_r}{\partial \theta^2} + \eta \frac{\partial^2 v_r}{\partial z^2}
- \frac{2}{r^2} \frac{\partial v_\theta}{\partial \theta} - \frac{v_r}{r^2} \\
& \rho \frac{\partial v_\theta}{\partial t} + \rho v_r \frac{\partial v_\theta}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_\theta}{\partial \theta} + \rho v_z \frac{\partial v_\theta}{\partial z}
= - \frac{1}{r} \frac{\partial p}{\partial \theta} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_\theta}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_\theta}{\partial \theta^2} + \eta \frac{\partial^2 v_\theta}{\partial z^2}
- \frac{2}{r^2} \frac{\partial v_r}{\partial \theta} - \frac{v_\theta}{r^2} \\
& \rho \frac{\partial v_z}{\partial t} + \rho v_r \frac{\partial v_z}{\partial r} + \rho v_\theta \frac{1}{r} \frac{\partial v_z}{\partial \theta} + \rho v_z \frac{\partial v_z}{\partial z}
= - \frac{\partial p}{\partial z} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) + \frac{\eta}{r^2} \frac{\partial^2 v_z}{\partial \theta^2} + \eta \frac{\partial^2 v_z}{\partial z^2}
\end{align*}
$$

旋回のない軸対称問題$v_\theta = 0$であれば，以下のように簡略化できる．

$$
\begin{equation*}
\frac{1}{r} \frac{\partial}{\partial r} (r v_r) + \frac{\partial v_z}{\partial z} = 0
\end{equation*}
$$
$$
\begin{align*}
&\rho \frac{\partial v_r}{\partial t} + \rho v_r \frac{\partial v_r}{\partial r} + \rho v_z \frac{\partial v_r}{\partial z}
= - \frac{\partial p}{\partial r} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial r} \right) + \eta \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2} \\
&\rho \frac{\partial v_z}{\partial t} + \rho v_r \frac{\partial v_z}{\partial r} + \rho v_z \frac{\partial v_z}{\partial z}
= - \frac{\partial p}{\partial z} + \frac{\eta}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) + \eta \frac{\partial^2 v_z}{\partial z^2}
\end{align*}
$$

## まとめ

以上で円筒座標での連続の式とナビエストークス方程式を導出することが出来た．基本的にはもともとの式のナブラとラプラシアンを円筒座標系のものに置き換えるだけなので，一度手作業で確認してみるとよいと思う．