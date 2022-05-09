---
title: "[量子力学] 井戸型ポテンシャル"
date: "2020-04-23T00:00:00.000Z"
description: "Potential well"
tags: ["Quantum physics"]
---

時間に依存しない1次元のシュレーディンガー方程式は(1)ように書き表される．この式に具体的な境界条件を与えれば粒子の運動を議論できる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_21.1}
\frac{d^2 \psi}{dx^2} + \frac{2m}{\hbar^2} [E-U(x)] \psi = 0
\end{equation}
$$

今回は井戸型ポテンシャルのいくつかの場合について，具体的な解を求めてみよう．まずは単純な場合として，左図のように深さ$U_0$のポテンシャル，とくに$U_0 \to \infty$として無限に深い井戸型ポテンシャルについて議論する．その後，右図のように左右で高さの異なる井戸型ポテンシャルについて考えよう．

<div align="center"><img src=".\potential_well.svg" width="400" title="One-dimensional Potential Well"></div>

## 無限に深い井戸型ポテンシャル

まず高さ$U_0$の井戸型ポテンシャルについて考えよう．井戸の内側・外側でのシュレーディンガー方程式はそれぞれ次のように表される．

$$
\begin{align}
&\psi'' + \frac{2m}{\hbar^2} (E-U_0) \psi = 0 &&: \mathrm{outside~of~the~well},~ x<0 \\
&\psi'' + \frac{2m}{\hbar^2} E\psi = 0 &&: \mathrm{inside~of~the~well} \\
&\psi'' + \frac{2m}{\hbar^2} (E-U_0) \psi = 0 &&: \mathrm{outside~of~the~well},~ x>a
\end{align}
$$

今回はポテンシャルの深さが無限大$U_0 \to \infty$の場合に注目する．このとき井戸の外での確率分布は常にゼロになるので，波動関数は$\psi=0$である．一方，井戸の中に関しては解を以下のように仮定する．

$$
\begin{equation}
\psi = \mathrm{const} \times \sin (kx + \delta), ~~ k = \sqrt{\frac{2mE}{\hbar^2}}
\end{equation}
$$

井戸の境界$x=0, a$では$\psi = 0$となるべきなので，以下の条件が得られる．

$$
\begin{equation}
\left\{ \begin{array}{ll}
\sin \delta = 0 & \mathrm{at}~x=0 \\
\sin (ka + \delta) = 0 & \mathrm{at}~x=a
\end{array} \right.
\end{equation}
$$

これを満たすような$k$の条件は次のように表される．

$$
\begin{equation}
k_n a = n\pi, ~~ n = 1,2,3, \cdots
\end{equation}
$$

これより系のエネルギーが以下のように離散化されていることがわかる．$n$は量子数と呼ばれ，量子数が増えるに従ってエネルギーも増加する．エネルギー固有値が異なれば，対応する波動関数も異なるので縮退していない．

$$
\begin{equation}
E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{\hbar^2}{2m} \left( \frac{n\pi}{a} \right)^2, ~~ n = 1,2,3, \cdots
\end{equation}
$$

## 左右で高さの異なる井戸型ポテンシャル

今度は右側の高さ$U_2$，左側の高さ$U_1$の井戸型ポテンシャルについて議論しよう．井戸の内側・外側でのシュレーディンガー方程式はそれぞれ次のように表される．ただし$E < U_1 < U_2$としておく．

$$
\begin{align}
&\psi'' + \frac{2m}{\hbar^2} (E-U_1) \psi = 0 &&: \mathrm{outside~of~the~well},~ x<0 \\
&\psi'' + \frac{2m}{\hbar^2} E\psi = 0 &&: \mathrm{inside~of~the~well} \\
&\psi'' + \frac{2m}{\hbar^2} (E-U_2) \psi = 0 &&: \mathrm{outside~of~the~well},~ x>a
\end{align}
$$

井戸の外に関しては無限遠で確率分布がゼロになるはずなので，解は次のように表すことができる．

$$
\begin{equation}
\psi = \left\{
\begin{array}{lll}
c_2 e^{-\kappa_2 x} & x >a, & \kappa_2 = \sqrt{\frac{2m}{\hbar^2} (U_2 - E)}\\
c_1 e^{+\kappa_1 x} & x < 0, & \kappa_1 = \sqrt{\frac{2m}{\hbar^2} (U_1 - E)}
\end{array} \right.
\end{equation}
$$
$$
\begin{equation}
\psi' = \left\{
\begin{array}{ll}
-c_2 \kappa_2 e^{-\kappa_2 x} & x > a \\
+c_1 \kappa_1 e^{+\kappa_1 x} & x < 0
\end{array} \right.
\end{equation}
$$
$$
\begin{equation}
\psi'/\psi = \left\{
\begin{array}{ll}
- \kappa_2 & x > a \\
+ \kappa_1 & x < 0
\end{array} \right.
\end{equation}
$$

井戸の中に関しては解を以下のように仮定する．ただし，位相を$-\pi < \delta \le \pi$の範囲で考えて，定数$c$は正の実数としておく．

$$
\begin{equation}
\psi = c \sin (kx + \delta), ~~ k = \sqrt{\frac{2mE}{\hbar^2}}
\end{equation}
$$
$$
\begin{equation}
\psi' = c k\cos (kx + \delta)
\end{equation}
$$
$$
\begin{equation}
\psi'/\psi = \frac{k}{\tan (kx + \delta)} = k \cot(kx + \delta)
\end{equation}
$$

$\psi, \psi'$はいずれも連続であるべきで，$\psi'/\psi$も連続である．$x=0, a$での接続条件から次の関係が得られる．

$$
\begin{equation}
% \label{eq:boundary_0}
\frac{k}{\tan \delta} = \kappa_1
\end{equation}
$$
$$
\begin{equation}
% \label{eq:boundary_a}
\frac{k}{\tan (ka + \delta)} = -\kappa_2
\end{equation}
$$

以下の関係を用いて，接続条件を$\sin$の関係式に書き直しておこう．

$$
\begin{equation}
\frac{1}{\tan^2 \theta} = \frac{1-\sin^2 \theta}{\sin^2 \theta}
\end{equation}
$$

(18)は以下のように書き換えられる．

$$
\begin{gather*}
k^2 (1 - \sin^2 \delta) = \kappa_1^2 \sin^2 \delta \\
(k^2 + \kappa_1^2) \sin^2 \delta = k^2 \\
\frac{2m U_1}{\hbar^2} \sin^2 \delta = k^2 \\
\sin \delta = \pm \frac{k\hbar}{\sqrt{2mU_1}}
\end{gather*}
$$

ただし(18)の条件から

$$
\begin{equation}
\sin \delta =  \left\{
\begin{array}{lc}
+\frac{k\hbar}{\sqrt{2mU_1}}, & 0 \le \delta < \frac{\pi}{2} \\
-\frac{k\hbar}{\sqrt{2mU_1}}, & -\pi < \delta < -\frac{\pi}{2}
\end{array} \right.
\end{equation}
$$

同様に(19)は以下のように書き換えられる．

$$
\begin{equation}
\sin (ka + \delta) = \left\{
\begin{array}{lc}
+\frac{k\hbar}{\sqrt{2mU_2}}, & +\frac{\pi}{2} < ka+\delta-2n\pi \le \pi \\ 
- \frac{k\hbar}{\sqrt{2mU_2}}, & -\frac{\pi}{2} < ka+\delta-2n\pi \le 0
\end{array} \right.
\end{equation}
$$

そもそもの$\psi, \psi'$の接続条件から，位相に関する条件を整理しておこう．

$$
\begin{gather*}
c_1 = c \sin \delta \\
c_1 \kappa_1 = ck \cos \delta 
\end{gather*}
$$
$$
\begin{gather*}
c_2 e^{-\kappa_2 a}= c \sin (ka + \delta) \\
-c_2 \kappa_2 e^{-\kappa_2 a} = ck \cos (ka + \delta) 
\end{gather*}
$$

| |$c_1 > 0$ | $c_1 < 0$|
|:-----:|:-----:|:-----:|
|$c_2 > 0$ | $0<\delta<\frac{\pi}{2},~+\frac{\pi}{2}<ka+\delta-2n\pi<\pi$ | $-\pi<\delta<-\frac{\pi}{2},~+\frac{\pi}{2}<ka+\delta-2n\pi<\pi$
|$c_2 < 0$ | $0<\delta<\frac{\pi}{2},~-\frac{\pi}{2}<ka+\delta-2n\pi<0$	| $-\pi<\delta<-\frac{\pi}{2},~-\frac{\pi}{2}<ka+\delta-2n\pi<0$


全体の正負は関係ないので$c_1>0$に限って考えればよい．このとき$c_2$は正負どちらもアリだが，普通$\arcsin$の値域が$-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}$なので，$\sin(ka+\delta) = -\frac{k\hbar}{\sqrt{2mU_2}}$の場合を採用して，そこから$\pm \pi$ずれた解もOKとする．これより$\delta$を消去して，$k$の満たすべき式を作る．

$$
\begin{gather}
ka = -\arcsin \left( \frac{kh}{\sqrt{2mU_2}} \right) - \arcsin \left( \frac{kh}{\sqrt{2mU_1}} \right) + n\pi
\end{gather}
$$
$$
\begin{equation*}
\mathrm{where}~ n= 1,2,3, \cdots
\end{equation*}
$$

系のエネルギー$E=\frac{k^2 \hbar^2}{2m}$は離散的であることがわかる．

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977