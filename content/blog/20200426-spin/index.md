---
title: "[量子力学] スピン"
date: "2020-04-26T00:00:00.000Z"
description: "Spin"
tags: ["Quantum physics"]
---

## スピン

ある粒子（1粒子でも多粒子でもよい）が内在的に持つ角運動量をスピンと呼び$s$でこれを表そう．このとき粒子の状態（波動関数）は，3つの座標変数と1つのスピン変数によって表される．スピン演算子$\hat{s}_x, \hat{s}_y, \hat{s}_z$の交換関係は角運動量の場合と同様に(1)と表される．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_54.5}
\{ \hat{s}_y, \hat{s}_z \} = i \hat{s}_x, ~~\{ \hat{s}_z, \hat{s}_x \} = i \hat{s}_y, ~~\{ \hat{s}_x, \hat{s}_y \} = i \hat{s}_z
\end{equation}
$$

演算子の交換関係から，スピンの2乗の演算子は(2)の関係が得られ，$\hat{s}_z$の固有値は最大・最小値が$\pm s$で，1ずつ飛び飛びの値をとることがわかる．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_54.2}
s_2 = s(s+1)
\end{equation}
$$

一方でスピンは，空間の中を粒子が運動することによる軌道角運動量とは別物なので，スピン演算子の表式は$\hat{s}_z = -\frac{\partial}{\partial \phi}$にはならない．このため，$\hat{s}_z$の固有値は整数である必要はない．これらのことを合わせると$s$がとりうる値は，$0, \frac{1}{2}, 1, \frac{3}{2}, \cdots$となる．多くの粒子（電子，陽電子，陽子，中性子，etc.）はスピン$\frac{1}{2}$を持つことが実験的に知られている．スピン$0$の粒子としてはπ中間子，K中間子などが知られている．

## スピン演算子

波動関数$\psi(x,y,z; \sigma)$がある粒子の状態を表すものとする．$\sigma$はスピンのz成分を表し，-sから+sの値をとる．$\int |\psi(\sigma)|^2 dV$はスピンのz成分が値$\sigma$をとる確率，$dV \sum_{s=-s}^s |\psi(\sigma)|^2$は微小領域$dV$に（任意のスピンを持った）粒子が存在する確率を表す．スピン演算子の行列成分は角運動量の場合と同様に以下のように表される．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_55.5}
\begin{array}{l}
(s_x)_{\sigma, \sigma-1} = (s_x)_{\sigma-1, \sigma} = \frac{1}{2} \sqrt{(s+\sigma)(s-\sigma+1)} \\
(s_y)_{\sigma, \sigma-1} = -(s_y)_{\sigma-1, \sigma} = - \frac{1}{2} i \sqrt{(s+\sigma)(s-\sigma+1)} \\
(s_z)_{\sigma, \sigma} = \sigma
\end{array}
\end{equation}
$$

特に重要な場合として，スピン$\frac{1}{2}\left(s=\frac{1}{2}, \sigma=\pm \frac{1}{2}\right)$の場合について行列形式で書き表したものをパウリ行列と呼ぶ．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_55.6}
\hat{s}_x = \frac{1}{2} \sigma_x, ~~ \hat{s}_y = \frac{1}{2} \sigma_y, ~~ \hat{s}_z = \frac{1}{2} \sigma_z
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_55.7}
\hat{\sigma}_x = \left( \begin{array}{cc} 0 & 1 \\ 1 & 0 \end{array} \right), ~~
\hat{\sigma}_y = \left( \begin{array}{cc} 0 & -i \\ i & 0 \end{array} \right), ~~ 
\hat{\sigma}_z = \left( \begin{array}{cc} 1 & 0 \\ 0 & -1 \end{array} \right)
\end{equation}
$$

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977