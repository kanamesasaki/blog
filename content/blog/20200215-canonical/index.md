---
title: "[統計力学] カノニカル分布"
date: "2020-02-15T00:00:00.000Z"
description: "Canonical ensemble"
tags: ["Statistical mechanics"]
---

今回は，ある大きな孤立系の一部分に注目して，その部分系の分布関数がどうあらわされるかについて考えよう．

まず，出発点となるミクロカノニカル分布の式(1)について確認しておこう．$dw$はある系がある量子状態$d\Gamma$の範囲で見つかる確率を表す．$\mathrm{const} \times \delta (E - E_0)$の部分は，系が$E - E_0$を満たすあるひとつの状態が見つかる確率を表しており，それに後ろから状態数がかけあわされている．状態数は$\prod_a d \Gamma_a$という形で表されているが，これは系がたくさんの部分系からなり，それぞれの相互作用は無視するという仮定が置かれているからである．

$$
\begin{equation}
% \label{eq:landau1980statistical_6.6}
dw = \mathrm{const} \times \delta (E - E_0) \prod_a d \Gamma_a
\end{equation}
$$

ここで，2つの部分bodyとmedium（body以外の全て）からなる閉じた系について考えよう．このとき(1)は(2)のように書き換えることが出来る．ただし$E,~d\Gamma$はbody，$E',~d\Gamma'$はmediumのエネルギーと量子状態を表し，あるべき$E^{0}$は系のエネルギーを表す．
つまり，このデルタ関数はbodyとmediumのエネルギーの合計が$E^{0}$のときにピークを持つ．

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
&= \mathrm{const} \times \int \frac{e^{\frac{S'}{k_\mathrm{B}}}}{\Delta E'} \delta(E' + E_n - E^{0})~dE' \\
&= \mathrm{const} \times \left( \frac{e^{\frac{S'}{k_\mathrm{B}}}}{\Delta E'} \right)_{E'=E^{0}-E_n}
\end{align*}
$$

mediumのエントロピーは，エネルギーの一次近似として以下のように表す．
熱力学を思い出せば，エントロピーのエネルギーによる微分は逆温度であった．

$$
\begin{equation}
S'(E^0 - E_n) = S'(E^0) - \frac{dS'(E^0)}{dE^0} E_n = S'(E^0) - \frac{E_n}{T}
\end{equation}
$$

いま系は平衡状態にあって，bodyとmediumは同じ温度なので，カノニカル分布は以下のように表される．

$$
\begin{equation}
% \label{eq:landau1980statistical_28.3}
w_n = \mathrm{const} \times \frac{1}{\Delta E'} e^{\frac{S'(E^0)}{k_\mathrm{B}}-\frac{E_n}{k_\mathrm{B}T}} = A e^{-\frac{E_n}{k_\mathrm{B}T}}
\end{equation}
$$

ここで，$A$は規格化のための係数で，$\sum_n w_n = 1$となるように決めてやる必要がある．
なので，最終的に次のような形で表される．

$$
\begin{equation}
w_n = \frac{e^{-\frac{E_n}{k_\mathrm{B}T}}}{\sum_m e^{-\frac{E_m}{k_\mathrm{B}T}}}
\end{equation}
$$

出現頻度を決める$e^{-\frac{E_n}{k_\mathrm{B}T}}$はボルツマン因子（Boltzmann factor）と呼ばれており，分母の規格化係数は分配関数（partition factor）と呼ばれる．