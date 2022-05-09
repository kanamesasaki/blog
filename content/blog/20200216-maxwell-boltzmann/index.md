---
title: "[統計力学] マクスウェル・ボルツマン分布"
date: "2020-02-16T00:00:00.000Z"
description: "Maxwell-Boltzmann distribution"
tags: ["Statistical mechanics"]
---

エネルギーが位置と運動量によって表されるような古典的な系では，相空間の微小部分に関するカノニカル分布は以下のように表される．

$$
\begin{equation}
dw_n(p, q) = A e^{-E_n(p, q) / T}~dpdq
\end{equation}
$$

エネルギー$E(p, q)$は運動エネルギー$K(p)$と位置エネルギー$U(q)$の和として表され，それぞれの分布が正規化されているはずだ．

$$
\begin{gather}
dw_p = ae^{-K(p)/T}~dp \\
dw_q = be^{-U(q)/T}~dq
\end{gather}
$$

ある質量$m$の分子，運動量に関する確率分布は次のように表される．

$$
\begin{equation}
dw_p = \left( \frac{1}{2\pi m k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{p_x^2+p_y^2+p_z^2}{2mk_\mathrm{B}T} \right] dp_x dp_y dp_z
\end{equation}
$$

運動量を速度に書き換えれば，マクスウェル・ボルツマン分布が得られる．

$$
\begin{equation}
% \label{eq:M-B}
dw_v = \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2+v_y^2+v_z^2)}{2k_\mathrm{B}T} \right] dv_x dv_y dv_z
\end{equation}
$$

単位体積内の分子の個数をかければ，個数分布に書き換えることが出来る．

$$
\begin{equation}
dN_v = \frac{N}{V} \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2+v_y^2+v_z^2)}{2k_\mathrm{B}T} \right] dv_x dv_y dv_z
\end{equation}
$$