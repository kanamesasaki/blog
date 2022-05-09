---
title: "[統計力学] カノニカル分布"
date: "2020-02-13T00:00:00.000Z"
description: "Canonical ensemble"
tags: ["Statistical mechanics"]
---

ミクロカノニカル分布は(1)のように表される．ただし，$dw$はある系がある量子状態$d\Gamma$の範囲で見つかる確率である．

$$
\begin{equation}
% \label{eq:landau1980statistical_6.6}
dw = \mathrm{const} \times \delta (E - E_0) \prod_a d \Gamma_a
\end{equation}
$$

ここで，2つの部分bodyとmedium（body以外の全て）からなる閉じた系について考えよう．このとき(1})は(2)のように書き換えることが出来る．ただし$E,~d\Gamma$はbody，$E',~d\Gamma'$はmediumのエネルギーと量子状態を表し，$E^{0}$は系のエネルギーを表す．

$$
\begin{equation}
% \label{eq:landau1980statistical_28.1}
dw = \mathrm{const} \times \delta (E + E' - E^{0})~d\Gamma d\Gamma'
\end{equation}
$$

いまbodyがある量子状態$n$であるような確率$w_n$を知りたいので，bodyの量子状態を$n$ （$d\Gamma = 1$）で固定して，medium $d\Gamma'$について積分する．

$$
\begin{align*}
w_n &= \mathrm{const} \times \int \delta (E_n + E' - E^{0})~d\Gamma' \\
&= \mathrm{const} \times \int \frac{e^{S'}}{\Delta E'} \delta(E' + E_n - E^{0})~dE' \\
&= \mathrm{const} \times \left( \frac{e^{S'}}{\Delta E'} \right)_{E'=E^{0}-E_n}
\end{align*}
$$

mediumのエントロピーは，エネルギーの一次近似として以下のように表す．

$$
\begin{equation}
S'(E^0 - E_n) = S'(E^0) - \frac{dS'(E^0)}{dE^0} E_n
\end{equation}
$$

熱力学を思い出せば，エントロピーのエネルギーによる微分は逆温度であった．いま系は平衡状態にあって，bodyとmediumは同じ温度なので，カノニカル分布は以下のように表される．

$$
\begin{equation}
w_n = A e^{-E_n/k_\mathrm{B}T}
\end{equation}
$$