---
title: "[量子力学] シュレーディンガー方程式"
date: "2020-04-22T00:00:00.000Z"
description: "Schrödinger equation"
tags: ["Quantum physics"]
---

## 波動方程式の導出

波動関数$\Psi$は量子状態を完全に表すと考えよう．つまりある瞬間での状態が表され，かつその情報から将来の状態も決定できるとする．このことを式で表すとすると，波動関数の時間微分$\partial \Psi / \partial t$が$\Psi$の関数で表されるべきだ．さらに，量子状態が重ね合わせ可能であることを要求すれば，$\Psi$に関して次のような線形な形に表されるべきだ．

$$
\begin{equation}
i \frac{\partial \Psi}{\partial t} = \hat{L} \Psi
\end{equation}
$$

ただし，$\hat{L}$は何らかの線形な演算子で，$i$は後々あった方がいいので便宜上導入してある．$\int \Psi^* \Psi dq$は常に一定なので，以下の関係が成り立つ．

$$
\begin{equation}
\frac{d}{dt} \int \Psi \Psi^* dq = \int \frac{\partial \Psi^*}{\partial t} \Psi dq + \int \Psi^* \frac{\partial \Psi}{\partial t} dq = 0
\end{equation}
$$

これに$\frac{\partial \Psi}{\partial t} = - i \hat{L} \Psi$，$\frac{\partial \Psi^*}{\partial t} = i \hat{L}^* \Psi^*$を代入すると，以下の様に変形できる．ただし$\hat{L}^\dag$は$\hat{L}$の随伴作用素（$\langle \hat{f} \Psi|\Psi \rangle = \langle \Psi|\hat{f}^\dag \Psi \rangle$）を表す．

$$
\begin{align*}
&\int (\hat{L}^* \Psi^*) \Psi dq - \int \Psi^* (\hat{L} \Psi) dq = 
\int \Psi \hat{L}^* \Psi^* dq - \int \Psi^* \hat{L} \Psi dq \\
&= \int \Psi \hat{L}^* \Psi^* dq - \int \Psi {\hat{L}^\dag}^* \Psi^* dq
= \int \Psi (\hat{L} - \hat{L}^\dag)^* \Psi^* dq = 0
\end{align*}
$$

よって$\hat{L}$もエルミート演算子である．もちろんこれはこれで嬉しいのだが，具体的な演算子の形が分からないと議論が進まない．そこで準古典的な系を考えて，波動関数の形を次のように仮定しよう．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_6.1}
\Psi = a e^{iS / \hbar}
\end{equation}
$$

$S$はラグランジアンの汎関数（作用と呼ばれ次元は[Js]になる）で，古典的な系において，相空間内での軌跡はこの値が最小化されるように決まる．「この値$S$が波動関数の位相に比例する」というのが，古典系から量子系への拡張を行う上でのアイデアだ．これを式で表したものが(3)で，波動の位相を表す部分が$S$に比例して，比例係数が$1/\hbar$となっている．このアイデアは，幾何光学において光が光路長を最小化するような経路をとり，電磁波としての光の位相が光路長に比例することのアナロジーになっている．係数$a$の変化が十分ゆっくりなとき，(3)の時間変化を次のように書ける．

$$
\begin{gather*}
\frac{\partial \Psi}{\partial t} = a \frac{i}{\hbar} \frac{\partial S}{\partial t} e^{iS/\hbar} ~\rightarrow~
i\hbar \frac{\partial \Psi}{\partial t} = - \frac{\partial S}{\partial t} \Psi
\end{gather*}
$$

汎関数$S$とハミルトニアンの間には，$H = -\frac{\partial S}{\partial t}$の関係があるので，(4)が得られて，これをシュレーディンガー方程式と呼ぶ．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_8.1}
i \hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi
\end{equation}
$$

## 保存量

量子系ではある物理量$f$は，常に確定値を取るわけではないので，物理量$f$の時間微分は次の条件を満たすものとして定義しよう．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_9.1}
\overline{\dot{f}} = \dot{\overline{f}}
\end{equation}
$$

まず，物理量$f$の平均の時間微分を求めてみる．

$$
\begin{align}
\dot{\overline{f}} &= \frac{d}{dt} \int \Psi^* \hat{f} \Psi dq \\
&= \int \frac{\partial \Psi^*}{\partial t} \hat{f} \Psi dq + \int \Psi^* \frac{\partial \hat{f}}{\partial t} \Psi dq + \int \Psi^* \hat{f} \frac{\partial \Psi}{\partial t} dq
\end{align}
$$

これに(4)を代入する．ただし(4)の複素共役をとると$-i \hbar \frac{\partial \Psi^*}{\partial t} = \hat{H}^* \Psi^*$となる．

$$
\begin{align*}
\dot{\overline{f}} &= \int \left(\frac{i}{\hbar}\hat{H}^*\Psi^*\right) \hat{f} \Psi dq + \int \Psi^* \frac{\partial \hat{f}}{\partial t} \Psi dq + \int \Psi^* \hat{f} \left(-\frac{i}{\hbar}\hat{H}\Psi\right) dq \\
&= \int \Psi^* \frac{\partial \hat{f}}{\partial t} \Psi dq + \frac{i}{\hbar} \int \Psi^* \hat{H} \hat{f} \Psi dq - \frac{i}{\hbar} \int \Psi^* \hat{f} \hat{H} \Psi dq \\
&= \int \Psi^* \left\{ \frac{\partial \hat{f}}{\partial t} + \frac{i}{\hbar} \left( \hat{H} \hat{f} - \hat{f} \hat{H} \right) \right\} \Psi dq
\end{align*}
$$

ただし，ハミルトニアン$\hat{H}$はエルミート演算子で，エルミート演算子について一般に次のような関係が成り立つことを用いた．

$$
\begin{gather*}
\langle \Psi | X| \Phi \rangle = \langle \Phi | X| \Psi \rangle^* \\
\int \Psi^* X \Phi dq = \left( \int \Phi^* X \Psi dq \right)^* = \int \Phi X^* \Psi^* dq
= \int X^* \Psi^* \Phi dq
\end{gather*}
$$

一方で，物理量$f$の時間微分に対応する演算子について次の関係が成り立ってほしい．

$$
\begin{equation}
\overline{\dot{f}} = \int \Psi^* \hat{\dot{f}} \Psi dq
\end{equation}
$$

よって$\hat{\dot{f}}$は以下のように表されるべきだ．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_9.2}
\hat{\dot{f}} = \frac{\partial \hat{f}}{\partial t} + \frac{i}{\hbar} \left( \hat{H} \hat{f} - \hat{f} \hat{H} \right)
\end{equation}
$$

もし演算子$\hat{f}$が，時間$t$を陽に変数として持っておらず，かつハミルトニアンとcommuteであれば，$f$の時間微分に対応する演算子はゼロとなる．つまり$\overline{\dot{f}} = \dot{\overline{f}} = 0$で，物理量$f$の平均値は一定となる．このような物理量$f$を保存量と呼ぶ．

さて，ハミルトニアンが時間を陽に含まないとき，当然ハミルトニアンは自分自身とcommuteなので，対応する物理量”エネルギー”は保存される．量子系において，エネルギーがある一定の値をとるとき，これを定常状態と呼ぶ．エネルギー$E_n$の定常状態で，これに対応する波動関数$\Psi_n$と表すと，$E_n$はハミルトニアンの固有値となっているはずなので，以下の関係が成り立つ．

$$
\begin{equation}
i\hbar \frac{\partial \Psi_n}{\partial t} = \hat{H} \Psi_n = E_n \Psi_n 
\end{equation}
$$

波動関数が時間に関する項と座標に関する項$\psi(q)$の積になっているとして，これを積分してやれば，波動関数の形が次のように得られる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_10.1}
\Psi_n = e^{-\frac{i}{\hbar} E_n t} \psi_n (q)
\end{equation}
$$

座標にのみ依存する項$\psi(q)$に注目すれば，次の関係が満たされるべきだ．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_10.2}
\hat{H} \psi = E \psi
\end{equation}
$$

## 量子的な粒子の系

ある粒子のハミルトニアンは$H = \frac{1}{2m} (p_x^2 + p_y^2 + p_z^2) + U(x,y,z)$と表されるが，対応する演算子も同様の形で表される．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_17.1}
\hat{H} = \frac{1}{2m} (\hat{p}_x^2 + \hat{p}_y^2 + \hat{p}_z^2)  + U(x,y,z)
\end{equation}
$$

運動量の演算子[[量子力学] 運動量）](https://kanamesasaki.github.io/blog/20200419-momentum/)を代入してやれば，以下の表式が得られる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_17.2}
\hat{H} = - \frac{\hbar^2}{2m} \Delta + U(x,y,z), ~~\mathrm{where}~~ \Delta = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
\end{equation}
$$

これを，シュレーディンガー方程式(4)に代入すると，時間に依存する波動方程式が得られる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_17.6}
i \hbar \frac{\partial \Psi}{\partial t} =  - \frac{\hbar^2}{2m} \Delta \Psi + U(x,y,z) \Psi
\end{equation}
$$

また，定常状態の式(12)に適用すれば，時間に依存しない波動方程式が得られる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_17.7}
\frac{\hbar^2}{2m} \Delta \psi + [E - U(x,y,z)] \psi = 0
\end{equation}
$$

定常状態での波動関数$\psi$を知るためには，具体的に境界条件を与えて，時間に依存しない波動方程式(16)を解いてやる必要がある．次回以降，1次元の場合についていくつか境界条件を与えて，解の特徴について議論する．

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977