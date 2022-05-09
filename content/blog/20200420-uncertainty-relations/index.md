---
title: "[量子力学] 不確定性原理"
date: "2020-04-20T00:00:00.000Z"
description: "Uncertainty relations"
tags: ["Quantum physics"]
---

x, y, z座標系において，偏微分は各軸独立な操作なので，次のようなcommuteな関係が成り立つ．

$$
\begin{gather}
% \label{eq:LandauLifshitzQuantum_16.1}
\hat{p}_x y - y \hat{p}_x = 0, ~~ \hat{p}_x z - z \hat{p}_x = 0 \\
\hat{p}_y z - z \hat{p}_y = 0, ~~ \hat{p}_y x - x \hat{p}_y = 0 \\
\hat{p}_z x - x \hat{p}_z = 0, ~~ \hat{p}_z y - y \hat{p}_z = 0
\end{gather}
$$

一方，$\hat{p}_x$と$x$の間の交換関係は次のように表される．

$$
\begin{equation}
(\hat{p}_x x - x \hat{p}_x) \psi = -i\hbar \frac{\partial x\psi}{\partial x} + i\hbar x \frac{\partial \psi}{\partial x} = -i\hbar \psi
\end{equation}
$$

他の軸についても同様の関係が成り立つので，

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_16.2}
\hat{p}_x x - x \hat{p}_x = -i \hbar,~~ \hat{p}_y y - y \hat{p}_y = -i \hbar, ~~\hat{p}_z z - z \hat{p}_z = -i \hbar,
\end{equation}
$$

(1)，(3)の関係は，互いに異なる軸上の位置と運動量であれば同時に確定値を取ることができるが，同じ軸上の位置と運動量は同時に確定値を取れないことを示している．

このことを1次元の場合に限って，もう少し深く考察してみよう．ある粒子が領域$\Delta x$にあり，運動量が$p_0$（周りの非常に狭い幅に収まる）とする．このとき波動関数を$\psi = u(x) e^{(i/\hbar)p_0 \cdot x}$とおいて，運動量領域にフーリエ変換してみよう．

$$
\begin{equation}
a(p_x) = \int_{-\infty}^\infty u(x) e^{i\frac{p_0 - p_x}{\hbar}x} dx
\end{equation}
$$

いま$u(x)$は領域$\Delta x$にのみピークを持つような関数なので，周波数（運動量）として有意な値を持つのは，対応する半波長（$\omega = \frac{2\pi}{\lambda}$）が$\Delta x$とそう変わらない場合のみであろう．このことから，以下のような不確定性原理が予想できる．

$$
\begin{gather}
% \label{eq:LandauLifshitzQuantum_16.6}
\frac{2 \pi}{2\Delta x} \sim \frac{\Delta p}{\hbar} ~\rightarrow~
\Delta p_x \Delta x \sim \hbar
\end{gather}
$$