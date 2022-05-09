---
title: "[量子力学] 中心場での粒子の運動"
date: "2020-04-24T00:00:00.000Z"
description: "Motion in a centrally symmetric field"
tags: ["Quantum physics"]
---

## 重心運動と相対運動

古典力学において2つの粒子が相互作用する運動は，重心運動と相対運動の形に書き換えることができた．まずはこの変形について確認しておこう．2つの粒子が相互作用するような系のハミルトニアンは次のように表される．

$$
\begin{equation}
H = \frac{m_1 \dot{\boldsymbol{r}}_1^2}{2} + \frac{m_1 \dot{\boldsymbol{r}}_2^2}{2} + U(|\boldsymbol{r}_2 - \boldsymbol{r}_1|)
\end{equation}
$$

ここで，2つの粒子の重心ベクトル$\boldsymbol{R}$と相対位置のベクトル$\boldsymbol{r}$を導入する．

$$
\begin{align}
\boldsymbol{R} &= \frac{m_1 \boldsymbol{r}_1 + m_2 \boldsymbol{r}_2}{m_1 + m_2} \\
\boldsymbol{r} &= \boldsymbol{r}_2 - \boldsymbol{r}_1
\end{align}
$$

$\boldsymbol{r}_1, \boldsymbol{r}_2$について解いてやれば以下の通り．

$$
\begin{align}
\boldsymbol{r}_1 &= \boldsymbol{R} - \frac{m_2}{m_1 + m_2} \boldsymbol{r} \\
\boldsymbol{r}_2 &= \boldsymbol{R} + \frac{m_1}{m_1 + m_2} \boldsymbol{r}
\end{align}
$$

これを用いてハミルトニアンを書き直すと，重心位置と相対位置に関する項に分離することができる．ここで$m = \frac{m_1 m_2}{m_1 + m_2}$とおいて，この量を換算質量（reduced mass）と呼ぶ．

$$
\begin{align*}
H &= \frac{m_1}{2} \left(\dot{\boldsymbol{R}}^2 -\frac{2m_2 (\dot{\boldsymbol{R}} \cdot \dot{\boldsymbol{r}})}{m_1+m_2}  + \frac{m_2^2 \dot{\boldsymbol{r}}^2}{(m_1+m_2)^2} \right) + \frac{m_2}{2} \left(\dot{\boldsymbol{R}}^2 +\frac{2m_1 (\dot{\boldsymbol{R}} \cdot \dot{ \boldsymbol{r}})}{m_1+m_2} + \frac{m_1^2 \dot{\boldsymbol{r}}^2}{(m_1+m_2)^2} \right) + U(|\boldsymbol{r}|) \\
&= \frac{m_1 + m_2}{2} \dot{\boldsymbol{R}}^2 + \frac{1}{2} \frac{m_1 m_2}{m_1 + m_2} \dot{\boldsymbol{r}}^2 + U(|\boldsymbol{r}|)
\end{align*}
$$

同様に量子的な2粒子系についても，ハミルトニアン（演算子）は(6)から(7)の形に変形することができる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.1}
\hat{H} = - \frac{\hbar^2}{2m_1} \Delta_1 - \frac{\hbar^2}{2m_2} \Delta_2 + U(r)
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.3}
\hat{H} = - \frac{\hbar^2}{2(m_1+m_2)} \Delta_R - \frac{\hbar^2}{2m} \Delta_r + U(r)
\end{equation}
$$

このとき波動関数は，$\psi(r)\varphi(R)$の形で表すことができる．念のため確認しておこう．

$$
\begin{gather}
- \frac{\hbar^2}{2(m_1+m_2)} \Delta_R (\varphi \psi) - \frac{\hbar^2}{2m} \Delta_r (\varphi \psi) + U(r) (\varphi \psi) = E (\varphi \psi) \\
- \frac{\hbar^2 \psi}{2(m_1+m_2)} \Delta_R \varphi - \frac{\hbar^2 \varphi}{2m} \Delta_r \psi + U(r) (\varphi \psi) = (E_R + E_r) (\varphi \psi) \\
\to \left\{ \begin{array}{l}
- \frac{\hbar^2 \psi}{2(m_1 + m_2)} \Delta_R \varphi = E_R (\varphi \psi) \\
- \frac{\hbar^2 \varphi}{2m} \Delta_r \psi + U(r) (\varphi \psi) = E_r (\varphi \psi)
\end{array} \right.
\end{gather}
$$

ラプラシアンに関係ない$\varphi, \psi$を掃ってやれば，重心位置と相対位置ばらばらにシュレーディンガー方程式を解いてやればよいことがわかる．相対位置に関しては，1粒子が原点からの距離に応じたポテンシャルの中を運動する式に対応する．

$$
\begin{equation}
\left\{ \begin{array}{l}
- \frac{\hbar^2}{2(m_1 + m_2)} \Delta_R \varphi = E_R \varphi \\
- \frac{\hbar^2}{2m} \Delta_r \psi + U(r) \psi= E_r \psi
\end{array} \right.
\end{equation}
$$

## 中心場での粒子の運動

中心場での粒子の運動は以下の式で表される．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.4}
\Delta \psi + \frac{2m}{\hbar^2} [E - U(r)] \psi = 0
\end{equation}
$$

原点に関して球対称な式なので，ここからは極座標で考えよう．極座標系のラプラシアンは次のように表された（[[流体力学] 円筒座標・極座標のナブラとラプラシアン](https://kanamesasaki.github.io/blog/20191124-nabla-laplacian/)）．

$$
\begin{align}
\Delta &= \frac{\partial^2}{\partial r^2} + \frac{2}{r} \frac{\partial}{\partial r} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta^2} + \frac{1}{r^2 \tan \theta} \frac{\partial}{\partial \theta} + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2} \\
&= \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial}{\partial r} \right) + \frac{1}{r^2} \left[ \frac{1}{\sin \theta} \frac{\partial}{\partial \theta} \left( \sin \theta \frac{\partial}{\partial \theta} \right) + \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial^2 \phi} \right]
\end{align}
$$

また，角運動量の2乗の演算子は次のように表された（[[量子力学] 角運動量](https://kanamesasaki.github.io/blog/20200421-angular-momentum/)）．

$$
\begin{equation}
\hat{l}_2 = - \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial^2 \phi}- \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \theta} - \frac{\partial^2}{\partial^2 \theta}
\end{equation}
$$

これらを用いると(12)は次のように書き直せる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.6}
\frac{\hbar^2}{2m} \left[ - \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial \psi}{\partial r} \right) + \frac{\hat{l}_2}{r^2} \psi \right] + U(r) \psi = E \psi
\end{equation}
$$

この式の解を(17)の形と仮定しよう．ただし，$Y_{lm}(\theta, \phi)$は角運動量の2乗の固有関数になっていた（[[量子力学] 角運動量](https://kanamesasaki.github.io/blog/20200421-angular-momentum/)）．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.7}
\psi = R(r) Y_{lm} (\theta, \phi)
\end{equation}
$$
$$
\begin{equation}
\hat{l}_2 Y_{lm} = l(l+1) Y_{lm}
\end{equation}
$$

これを実際に(16)に代入すると，以下のように整理できる．

$$
\begin{gather*}
% \label{eq:LandauLifshitz_Quantum_32.8}
\frac{\hbar^2}{2m} \left[ - \frac{Y_{lm}(\theta, \phi)}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial R(r)}{\partial r} \right) + R(r) \frac{l(l+1)}{r^2} Y_{lm}(\theta, \phi) \right] + U(r) R(r)Y_{lm}(\theta, \phi) = E R(r)Y_{lm}(\theta, \phi) \\
\frac{1}{r^2} \frac{d}{d r} \left( r^2 \frac{d R(r)}{d r} \right) - R(r) \frac{l(l+1)}{r^2} + \frac{2m}{\hbar^2} [E - U(r)] R(r) = 0
\end{gather*}
$$

ここで，次のような置換を行う．

$$
\begin{gather}
% \label{eq:LandauLifshitz_Quantum_32.9}
R(r) = \frac{\chi(r)}{r} \\
\frac{d R(r)}{d r} = \frac{1}{r} \frac{d\chi}{dr} - \frac{\chi}{r^2} \\
\frac{d}{d r}\left( r \frac{d\chi}{dr} - \chi \right) = \frac{d\chi}{dr} + r \frac{d^2 r}{dr^2} - \frac{d\chi}{dr} = r \frac{d^2 r}{dr^2}
\end{gather}
$$
$$
\begin{gather}
% \label{eq:LandauLifshitz_Quantum_32.10}
\frac{1}{r} \frac{d^2 \chi}{dr^2} - \frac{\chi(r)}{r} \frac{l(l+1)}{r^2} + \frac{2m}{\hbar^2} [E-U(r)] \frac{\chi(r)}{r} = 0 \\
\frac{d^2 \chi}{dr^2} + \left[ \frac{2m}{\hbar^2} (E-U(r)) - \frac{l(l+1)}{r^2} \right] \chi = 0
\end{gather}
$$

ポテンシャルを次のように置きなおせば，(23)はポテンシャル$U_l(r)$の中の1次元運動を表すシュレーディンガー方程式と考えられる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_32.12}
\frac{d^2 \chi}{dr^2} + \frac{2m}{\hbar^2} [E-U_l(r)] \chi = 0, ~~\mathrm{where}~U_l(r) = U(r) + \frac{\hbar^2}{2m} \frac{l(l+1)}{r^2}
\end{equation}
$$

1次元運動で離散スペクトルをもつとき，エネルギー固有値に対して波動関数は縮退していないので，(24)で$l$が決まっていて，エネルギーが与えられれば波動関数が決定される．周方向の波動関数はパラメタ$l$と$m$で決定されたので，最終的に，中心場での粒子の運動を表す波動関数は$E, l, m$によって完全に決定されることがわかる．

動径方向のシュレーディンガー方程式が解けたとして，離散スペクトルの場合についてとりうるエネルギー固有値を並べて，小さいほうから番号を$n_r =0,1,2, \cdots$と振ってやろう．この波動関数を決定する3つのパラメタは，$n_r$が動径量子数（radial quantum number），$l$は方位量子数（azimuthal quantum number），$m$は磁気量子数（magnetic quantum number）と呼ばれる．