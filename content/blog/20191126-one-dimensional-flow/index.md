---
title: "[流体力学] 一次元流れの基礎式"
date: "2019-11-26T00:00:00.000Z"
description: "Basic equations for the one-dimensional flow"
tags: ["Fluid dynamics"]
---

今回からは一次元流れについて解説していく．一次元流れの仮定とは「流体のあらゆるパラメタが断面の任意の点において等しい」とすることに相当する．以下のような条件下において，一次元流れの仮定をおくことができる．

- 断面積の変化が十分小さい
- 断面直径に対して流線の曲率半径が十分大きい
- 断面内の速度分布および温度分布の形状がほぼ一定である

今回は，このような一次元流れの仮定の下で，流体力学の基礎式がどのように表されるかを考える．具体的には一次元流れの連続の式，運動方程式，エネルギーの式の導出を行う．一次元流れの議論をするにはこれに加えて，気体の状態方程式を用いることが多い．ただ，気体の状態方程式についての解説は（熱力学・統計力学と関連させて）また別の機会に行いたい．

## 連続の式

管内の微小部分$dz$を占める流体の質量は$\rho A dz$と表せて，同領域を占める質量の時間変化と，流入出量の等式を立てることが出来る．ただし，$\dot{m}_{in} [\mathrm{kg} \mathrm{m}^{-1} \mathrm{s}]$は壁面等から流入出がある場合の単位長さあたりの流入量を表す．

$$
\begin{equation*}
\frac{\partial}{\partial t} (\rho A dz) = - \frac{\partial}{\partial z} (\rho A v_z) dz + \dot{m}_{in} dz
\end{equation*}
$$

この式から$dz$をはらってしまえば，一次元流れの連続の式が得られる

$$
\begin{equation}
% \label{eq:Matsuo_3.1}
\frac{\partial}{\partial t} (\rho A) = - \frac{\partial}{\partial z} (\rho A v_z) + \dot{m}_{in}
\end{equation}
$$

定常流れでは以下の式が成り立つ．

$$
\begin{equation}
% \label{eq:Matsuo_3.3}
\frac{d}{dz} (\rho v_z A) = \dot{m}_{in}
\end{equation}
$$

質量流量(mass flow rate)を$\dot{m}(z) = \rho v_z A [kg/s]$と表せば，$d\dot{m} = \dot{m}_{in} dz$で，定常流れでの連続の式は次のように表される．

$$
\begin{equation}
% \label{eq:Matsuo_3.5}
\frac{d \rho}{\rho} + \frac{d v_z}{v_z} + \frac{dA}{A} = \frac{d\dot{m}}{\dot{m}}
\end{equation}
$$

さらに，壁面からの流入出がない場合であれば以下のように表される．

$$
\begin{gather*}
\rho v_z A = \dot{m} = \mathrm{const\ [kg/s]} \\
\frac{d \rho}{\rho} + \frac{d v_z}{v_z} + \frac{dA}{A} = 0
\end{gather*}
$$

## 運動方程式

まず，一次元のラグランジュ微分とオイラー微分の関係を確認しておく．

$$
\begin{equation}
\frac{d}{dt} = \frac{\partial}{\partial t} + v_z \frac{\partial}{\partial z}
\end{equation}
$$

ここから，長さ$dz$の流体にかかる力を整理する．

<div align="center"><img src=".\1d-flow.svg" width="350" title="Forces in 1-Dimensional Flow"></div>

管側面にかかる圧力は次のように表される．

$$
\begin{align*}
&2\pi \left(r + \frac{1}{2}\frac{\partial r}{\partial z} dz \right) \frac{1}{\cos \theta} \times \left( p + \frac{1}{2} \frac{\partial p}{\partial z} dz \right) \sin \theta \\
&= 2 \pi rp \tan \theta + \pi r \frac{\partial p}{\partial z} dz \tan \theta + \pi p \frac{\partial r}{\partial z} dz \tan \theta
= p \frac{\partial A}{\partial z} + \pi \frac{\partial (pr)}{\partial z} dz \tan \theta
\end{align*}
$$

$$
\begin{equation*}
\mathrm{where}~~\frac{\partial A}{\partial z} = 2 \pi r \frac{\partial r}{\partial z} = 2 \pi r \tan \theta
\end{equation*}
$$

これより，流体に働く圧力の合計は次のように表される．

$$
\begin{align*}
dF_p &= pA - \left( pA + \frac{\partial (pA)}{\partial z} dz \right)+ p \frac{\partial A}{\partial z} dz + \pi \frac{\partial (pr)}{\partial z} {dz}^2 \tan \theta \\
&\simeq - A \frac{\partial p}{\partial z} dz
\end{align*}
$$

せん断応力による力の合計は次のように表される．ただし，せん断応力$\tau[N/m^2]$を単位体積あたりの運動エネルギー$\frac{1}{2}\rho v^2 [Ns/m^3]$でわった無次元数を摩擦係数$f$と呼ぶ．

$$
\begin{align*}
dF_w &= - 2\pi \left(r + \frac{1}{2}\frac{\partial r}{\partial z} dz \right) \frac{ \tau dz}{\cos \theta} \times \cos \theta \\
&= - \pi D \tau dz \hspace{20pt} \mathrm{where}\ D \simeq 2r \\
&= -\frac{1}{2} \rho {v_z}^2 \pi Df dz \hspace{20pt} \mathrm{where}\ f = \frac{\tau}{\rho {v_z}^2 / 2}
\end{align*}
$$

これより一次元流れの運動方程式は次のように表される．

$$
\begin{equation*}
% \label{Matsuo_3.13}
\rho A dz \left( \frac{\partial v_z}{\partial t} + v_z \frac{\partial v_z}{\partial z} \right) = - A \frac{\partial p}{\partial z} dz - \frac{1}{2} \rho {v_z}^2 \pi Df dz \\
\end{equation*}
$$
$$
\begin{equation}
\frac{\partial v_z}{\partial t} + v_z \frac{\partial v_z}{\partial z} = - \frac{1}{\rho} \frac{\partial p}{\partial z} - \frac{1}{2} {v_z}^2 \frac{4f}{D}
\end{equation}
$$

定常かつ壁面のせん断力を無視できる場合、以下の式が得られる．

$$
\begin{equation}
% \label{eq:Matsuo_3.15}
v_z \frac{d v_z}{dz} + \frac{1}{\rho} \frac{dp}{dz} = 0
\end{equation}
$$

一方，微小でない領域について運動方程式を足し合わせると運動量の式が得られる。
ある領域の持つ運動量は$M=\int \rho v_z A dz$と表されて，運動量の微小変化はその領域の受ける外力の総和に等しい．

$$
\begin{equation*}
\frac{\partial }{\partial t} \left(\int \rho A v_z dz \right) + v_z \frac{\partial}{\partial z} \left( \int \rho A v_z dz \right) = - \int A \frac{\partial p}{\partial z}dz - \int \frac{1}{2} \rho {v_z}^2 \pi Df dz
\end{equation*}
$$

定常状態を仮定し，両辺をzについて微分すると以下の式が得られる．

$$
\begin{equation*}
v_z \frac{d}{d z} \left( \int \rho A v_z dz \right) = - \int A \frac{d p}{d z}dz - \int \frac{1}{2} \rho {v_z}^2 \pi Df dz
\end{equation*}
$$
$$
\begin{equation}
% \label{eq:Matsuo_3.26}
\frac{d}{dz} \left( \rho A {v_z}^2 \right) = - A \frac{dp}{dz} - \frac{1}{2} \rho {v_z}^2 \pi D f
\end{equation}
$$

さらに断面一定かつ壁面のせん断力ゼロを仮定すると，以下の式が得られる．

$$
\begin{equation}
% \label{eq:Matsuo_3.27}
\rho {v_z}^2 + p = \mathrm{const}
\end{equation}
$$

## エネルギーの式

管内の流れについて，微小部分$dz$でのエネルギー保存を表す式考える．微小部分のエネルギーは内部エネルギーと運動エネルギーの和として$\rho A(e + \frac{{v_z}^2}{2})dz$と表される．$dz$は省略して，微小部分のエネルギーの時間変化は次のように表される．

$$
\begin{equation*}
\frac{\partial}{\partial t} \left[ \rho A \left( e + \frac{{v_z}^2}{2} \right) \right]
\end{equation*}
$$

流体の流入に伴うエネルギーの変化は次のように表される．

$$
\begin{equation*}
- \frac{\partial}{\partial z} \left[ \rho A v_z \left( e + \frac{{v_z}^2}{2} \right) \right]
\end{equation*}
$$

ここでは，摩擦力によっておこるエネルギー変化は無視している．もしこれを考慮する場合，単位長さ・時間当たりにされる摩擦による仕事(9)を考慮する必要がある．

$$
\begin{equation}
% \label{eq:friction}
- \pi D \tau v_z = - \frac{\pi}{2} f D \rho v_z^3 = - \rho A v_z \frac{4f}{D} \frac{v_z^2}{2}
\end{equation}
$$

微小部分が圧力によって外部に対してする仕事は次によるエネルギーの変化は次のように表される．

$$
\begin{equation}
- \frac{\partial}{\partial z} [p A v_z] = - \frac{\partial}{\partial z} \left[ \rho A v_z \left( \frac{p}{\rho} \right) \right]
\end{equation}
$$

単位質量に対する熱流入を$\dot{q}$と表せば，エネルギーのつりあい式は以下のように表される．

$$
\begin{equation}
% \label{eq:Matsuo_3.36}
\frac{\partial}{\partial t} \left[ \rho A \left( e + \frac{{v_z}^2}{2} \right) \right] = \rho A \dot{q} - \frac{\partial}{\partial z} \left[ \rho A v_z \left( e + \frac{{v_z}^2}{2} + \frac{p}{\rho} \right) \right]
\end{equation}
$$

定常かつ断熱な流れでは，$\dot{q}=0$かつ$\rho A v_z = \mathrm{const}$より以下の式が成り立つ．この関係は，粘性によるせん断力が働く場合でも成立する．

$$
\begin{equation}
% \label{eq:Matsuo_3.39}
h + \frac{{v_z}^2}{2} = \mathrm{const} \hspace{10pt} \mathrm{where}\ h = e + \frac{p}{\rho}
\end{equation}
$$

## まとめ

一次元流れの連続の式，運動方程式，エネルギーの式の導出を行った．次回以降の記事で，これらの式を用いて一次元流れの物理的な特徴について考察していく．