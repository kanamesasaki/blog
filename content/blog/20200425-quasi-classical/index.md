---
title: "[量子力学] 準古典的な系"
date: "2020-04-25T00:00:00.000Z"
description: "Quasi-classical case"
tags: ["Quantum physics"]
---

## 準古典的な系の波動関数

多数の粒子からなる準古典的な系について議論しよう．シュレーディンガー方程式を以下のように表す．

$$
\begin{equation}
\sum_a \frac{\hbar^2}{m_a} \Delta_a \psi + (E - U) \psi = 0
\end{equation}
$$

これに波動関数$\psi = e^{iS/\hbar}$を代入する．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.2}
\sum_a \frac{1}{m_a}(\nabla_a S)^2 - \sum_a \frac{i\hbar}{2m_a} \Delta_a S = E - U
\end{equation}
$$

ただし波動関数のラプラシアンは以下のように整理した．以前の議論で「$S$は作用（action）でラグランジアンの汎関数である」ということを仮定したが，今の時点ではそのことを前提としていないことに注意しよう．

$$
\begin{align*}
&\Delta \psi = \Delta e^{\frac{i}{\hbar}S} = \nabla \cdot \nabla e^{\frac{i}{\hbar}S}
= \nabla \cdot \left[ \begin{array}{l}
\frac{\partial}{\partial x} e^{\frac{i}{\hbar}S} \\
\frac{\partial}{\partial y} e^{\frac{i}{\hbar}S} \\
\frac{\partial}{\partial z} e^{\frac{i}{\hbar}S}
\end{array} \right]
= \nabla \cdot \left[ \begin{array}{l}
\frac{i}{\hbar} \frac{\partial S}{\partial x} e^{\frac{i}{\hbar}S} \\
\frac{i}{\hbar} \frac{\partial S}{\partial y} e^{\frac{i}{\hbar}S} \\
\frac{i}{\hbar} \frac{\partial S}{\partial z} e^{\frac{i}{\hbar}S}
\end{array} \right] \\
&=
\frac{i}{\hbar} \left[ \frac{\partial^2 S}{\partial x^2} e^{\frac{i}{\hbar}S} +  \frac{i}{\hbar} \left( \frac{\partial S}{\partial x} \right)^2 e^{\frac{i}{\hbar}S} \right] +
\frac{i}{\hbar} \left[ \frac{\partial^2 S}{\partial y^2} e^{\frac{i}{\hbar}S} +  \frac{i}{\hbar} \left( \frac{\partial S}{\partial y} \right)^2 e^{\frac{i}{\hbar}S} \right] +
\frac{i}{\hbar} \left[ \frac{\partial^2 S}{\partial z^2} e^{\frac{i}{\hbar}S} +  \frac{i}{\hbar} \left( \frac{\partial S}{\partial z} \right)^2 e^{\frac{i}{\hbar}S} \right] \\
&= \left[ \frac{i}{\hbar} \Delta S - \frac{1}{\hbar^2} (\nabla S \cdot \nabla S) \right] e^{\frac{i}{\hbar}S}
\end{align*}
$$

ここで$S$として，$\hbar$より十分大きい項，$\hbar$程度の項，$\hbar^2$程度の項，…の和という形を仮定する．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.3}
S = S_0 + \frac{\hbar}{i} S_1 + \left( \frac{\hbar}{i} \right)^2 S_2 + \cdots
\end{equation}
$$

1次元の場合に限れば以下のように書き直せる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.4}
\frac{S'^2}{2m} - i \hbar \frac{S''}{2m} = E - U(x)
\end{equation}
$$

最初の近似として$\hbar$について1次以上の項を無視すると，次の関係が得られる．

$$
\begin{gather}
\frac{{S'_0}^2}{2m} = E - U(x) \\
S'_0 = \pm \sqrt{2m [E - U(x)]}
\end{gather}
$$

積分の中身は運動量$p(x)$になっている（$\sqrt{2m K} = mv$）．古典的な系であれば$E \le U(x)$の範囲での運動しか実現しないので，ルートの中は正である．

$$
\begin{align}
S_0 &= \pm \int \sqrt{2m [E - U(x)]} dx \\
&= \pm \int p dx, ~~ p = \sqrt{2m[E - U(x)]}
\end{align}
$$

この関係が成り立つためには，(4)の2項目が1項目に比べて十分小さくなければならない．

$$
\begin{gather}
% \label{eq:LandauLifshitz_Quantum_46.6}
\left| \frac{d}{dx} \left( \frac{\hbar}{S'} \right) \right|  \ll 1, ~~ \mathrm{where}~ \frac{d}{dx} \left( \frac{\hbar}{S'} \right) = - \frac{\hbar S''}{S'^2}
\end{gather}
$$

$S' = p$と代入してやれば(9)は次のように書き換えられる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.7}
\frac{m \hbar |F|}{p^3} \ll 1
\end{equation}
$$

ただし変形には以下の関係を用いた．

$$
\begin{align*}
\frac{dp}{dx} &= \frac{d}{dx} \sqrt{2m[E - U(x)]} = \frac{1}{2\sqrt{2m[E - U(x)]}} \frac{d}{dx} \left( 2m[E - U(x)] \right) \\
&= - \frac{m}{p} \frac{dU(x)}{dx} = \frac{mF}{p}
\end{align*}
$$

(10)から，運動量が非常に小さい時は近似が成り立たないことがわかる．特に$p(x)=0$あるいは，$E=U(x)$となる点においては明らかに不成立である．そこで次に，$\hbar$の1次の項まで含めた場合について考える．$S = S_0 + \frac{\hbar}{i} S_1$を(4)に代入し，2次以上の項は無視して整理すると以下の通り．

$$
\begin{gather}
\left( S'_0 + \frac{\hbar}{i} S'_1 \right)^2 - i\hbar \left( S''_0 + \frac{\hbar}{i} S''_1 \right) = 2m [E - U(x)] \\
{S'_0}^2 + \frac{2\hbar}{i} S'_0 S'_1 - i\hbar S''_0 = 2m [E - U(x)] \\
2 S'_0 S'_1 + S''_0 = 0
\end{gather}
$$
$$
\begin{gather}
S'_1 = -\frac{S''_0}{2 S'_0} \\
S_1 = -\frac{1}{2} \log (S'_0) = -\frac{1}{2} \log p
\end{gather}
$$

よって$\hbar$の1次の項まで考慮した$S$は以下の通り．

$$
\begin{equation}
S = \pm \int p dx - \frac{1}{2} \log p
\end{equation}
$$

これをもともと仮定した波動関数$\psi = e^{iS/\hbar}$に代入すると，以下の形で一般解を表すことができる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.9}
\psi = \frac{c_1}{\sqrt{p}} e^{\frac{i}{\hbar} \int p dx} + \frac{c_2}{\sqrt{p}} e^{-\frac{i}{\hbar} \int p dx}
\end{equation}
$$
$$
\begin{equation}
e^{\frac{i}{\hbar}S} = \exp \left[ \frac{i}{\hbar} \left( \pm \int p dx - \frac{1}{2} \log p  \times \frac{\hbar}{i} \right) \right]
= \exp \left[ \pm \frac{i}{\hbar} \int p dx \right] \times \exp \left[ - \frac{1}{2} \log p \right]
\end{equation}
$$

一方で古典的には生じない$E < U(x)$の範囲については，以下のように表すことができる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_46.10}
\psi = \frac{c_1}{\sqrt{|p|}} e^{\frac{1}{\hbar} \int |p| dx} + \frac{c_2}{\sqrt{|p|}} e^{-\frac{1}{\hbar} \int |p| dx}
\end{equation}
$$

## 準古典的な系の境界条件

$x=a$を$U(a)=E$となるポテンシャルの境界とする．このとき境界の右側と左側での解は次のように表される．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_47.1}
\psi = \frac{c}{\sqrt{|p|}} \exp\left[ -\frac{1}{\hbar} \int_x^a |p| dx \right],
~~ \mathrm{for}~ x>a
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_47.2}
\psi = \frac{c_1}{\sqrt{p}} \exp \left[\frac{i}{\hbar} \int_a^x p dx \right] + \frac{c_2}{\sqrt{p}} \exp \left[-\frac{i}{\hbar} \int_a^x p dx \right], 
~~ \mathrm{for}~ x<a
\end{equation}
$$

これらの係数を決定するために，境界$x=a$で接続するための条件を考えよう．まず，$x=a$付近でのポテンシャルを次のように近似する．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_47.3}
E - U(x) = F_0(x-a),~~ \mathrm{where}~ F_0 = - \left.\frac{dU}{dx}\right|_{x=a} < 0
\end{equation}
$$

これを$p = \sqrt{2m[E -U(x)]}$に代入すると，運動量の積分は次のように計算できる．

$$
\begin{align}
&\frac{1}{\hbar} \int_a^x p~dx = \frac{1}{\hbar} \int_a^x \sqrt{2m[E -U(x)]} dx
= \frac{1}{\hbar} \int_a^x \sqrt{2mF_0} (x-a)^\frac{1}{2} dx \\
&= \frac{\sqrt{2mF_0}}{\hbar} \frac{2}{3} \left[ (x-a)^\frac{3}{2} \right]^x_a
= \frac{2}{3\hbar} \sqrt{2mF_0} (x-a)^\frac{3}{2}
\end{align}
$$

## ボーア・ゾンマーフェルトの量子化条件

$$
\begin{align}
% \label{eq:LandauLifshitz_Quantum_48.1}
&\psi = \frac{c}{\sqrt{p}} \cos \left[ \frac{1}{\hbar} \int_b^x p dx - \frac{\pi}{4} \right] && \mathrm{right~side~of~} x=b \\
&\psi = \frac{c'}{\sqrt{p}} \cos \left[ \frac{1}{\hbar} \int_x^a p dx - \frac{\pi}{4} \right] && \mathrm{left~side~of~} x=a
\end{align}
$$

左側を基準に考えれば，$x=b$で位相が$-\frac{\pi}{4}$で，そこから$\frac{1}{\hbar} \int_b^x pdx$に従って位相が増えていく．$c=c'$の場合，$x=a$での位相が$\pm \frac{\pi}{4} + 2n\pi$になっていれば$x=a$での$\cos$の値は一致するが，その他の点でも一致するためには$\frac{\pi}{4} + 2n\pi$でなければならない．結局(25, 26)の2式が一致するためには，位相について次の関係が成り立つ必要がある．

$$
\begin{align}
&\mathrm{if~} c=c': &&\frac{1}{\hbar} \int^a_b p dx - \frac{\pi}{4} = \frac{\pi}{4} + 2n \pi \\
&\mathrm{if~} c=-c': &&\frac{1}{\hbar} \int^a_b p dx - \frac{\pi}{4} = \frac{\pi}{4}+ \pi + 2n \pi
\end{align}
$$

<div align="center"><img src=".\bohr_sommerfeld.svg" width="400" title=""></div>

まとめて書けば次のように表される．

$$
\begin{equation}
\frac{1}{\hbar} \int^a_b p dx - \frac{\pi}{2} = n \pi, ~~\mathrm{with}~ c = (-1)^n c'
\end{equation}
$$

周期的な運動の1周分の積分を$\oint p dx = 2 \int_b^a p dx$として書き直すと，(30)の関係が得られる．これはBohr-Sommerfeldの量子化条件に対応する．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_48.2}
\frac{1}{2\pi \hbar} \oint p dx = n + \frac{1}{2}
\end{equation}
$$

さて$\oint pdx$という積分は，xp平面上の面積と考えることもできる．この領域をn分割すると，分割された領域ひとつひとつの面積は（およそ）$2\pi\hbar$となる．一方でnという数は系のエネルギー状態に番号を付けたもの（量子数）に対応する．つまりひとつのエネルギー状態はxp平面上の$2\pi\hbar$の面積に対応している．さらに言い換えれば，xp平面上の$\Delta p \Delta x$の面積には(31)だけのエネルギー状態が対応している，と考えられる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_48.4}
\frac{\Delta p \Delta x}{2\pi \hbar}
\end{equation}
$$

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977