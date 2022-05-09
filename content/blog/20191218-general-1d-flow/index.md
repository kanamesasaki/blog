---
title: "[流体力学] 断面積変化・摩擦・流出入のある一次元定常流れ"
date: "2019-12-18T00:00:00.000Z"
description: "One-dimensional flow with variable cross-section, friction, and input/output"
tags: ["Fluid dynamics"]
---

前回は定常かつ等エントロピーという基本的な場合について議論したが，現実的には摩擦の影響や外部との熱の授受などのより複雑な影響がある．特に実用上重要なものには例えば以下のような流れがあり，[^1]などで詳しく解説されている．

- ファノー流れ（Fanno Flow）：断面積一定，断熱で摩擦を伴う定常流れ
- レイリー流れ（Rayleigh  Flow）：断面積一定 ，外部との熱の授受があり摩擦のない定常流れ

今回はヒートパイプへの応用も考えて，断面積変化あり，壁面摩擦による仕事を考慮，流体の流入出にともなう熱の授受あり，という定常な一次元流れとしては出来る限り一般的な場合について議論する．

定常状態でのエネルギー式は次のように表すことができた[（[流体力学] 一次元流れの基礎式）](https://kanamesasaki.github.io/blog/20191126-one-dimensional-flow/)．

$$
\begin{equation}
% \label{eq:Matsuo_3.36}
\frac{\partial}{\partial z} \left[ \rho A v_z \left( e + \frac{{v_z}^2}{2} + \frac{p}{\rho} \right) \right] = d\dot{Q} - dW
\end{equation}
$$

(1)より，エネルギーの式は次のように表すことができる．ただし，外部からの熱入力に関しては，流体の流入以外の熱入力はないものと考える．

$$
\begin{equation*}
(\dot{m} + d\dot{m}) \left(h + dh + \frac{{v_z}^2}{2} + d\left( \frac{{v_z}^2}{2} \right) \right) - \dot{m} \left( h + \frac{{v_z}^2}{2} \right) = dQ - dW + d\dot{m} \left( h_{in} + \frac{{v_{in}}^2}{2} \right)
\end{equation*}
$$
$$
\begin{equation}
% \label{eq:Shapiro_8.10}
- \dot{m} \frac{4f}{D} \frac{v_z^2}{2} dz = \dot{m} \left( dh + d\left( \frac{{v_z}^2}{2} \right) \right) + d\dot{m} \left( h - h_{in} + \frac{{v_z}^2}{2} - \frac{{v_{in}}^2}{2} \right)
\end{equation}
$$

運動量の式は次のように表される[（[流体力学] 一次元流れの基礎式）](https://kanamesasaki.github.io/blog/20191126-one-dimensional-flow/)．ただし、流体の流入出は流れに対して垂直かつ一様に起こるものと仮定して、$d\dot{m} \cdot v_{in} = 0$と考える。

$$
\begin{equation*}
d(\dot{m} v_z) = -A dp -\frac{1}{2} \rho {v_z}^2 \pi D f dz
\end{equation*}
$$
$$
\begin{equation}
\dot{m} \cdot dv_z + d\dot{m} \cdot v_z + A dp + \frac{1}{2} \rho {v_z}^2 \pi D f dz = 0
\end{equation}
$$

音速の式$c^2 = \gamma R T$の対数微分

$$
\begin{equation*}
2 \frac{dc}{c} = \frac{dT}{T}
\end{equation*}
$$

マッハ数の式$M = v_z/c$の対数微分

$$
\begin{equation*}
\frac{dM}{M} = \frac{dv_z}{v_z} - \frac{dc}{c}
\end{equation*}
$$

速度とマッハ数，温度の関係

$$
\begin{equation*}
v_z^2 = M^2 c^2 = \gamma R T M^2
\end{equation*}
$$

これより断面積変化・摩擦・流出入のある一次元定常流れの支配方程式は以下の通り．
$$
\begin{gather*}
\mathrm{State~Equation:}\ \frac{dp}{p} = \frac{d\rho}{\rho} + \frac{dT}{T} \\
\mathrm{Equation~of~Continuity:}\ \frac{d \rho}{\rho} + \frac{dv_z}{v_z} + \frac{dA}{A} = \frac{d\dot{m}}{\dot{m}} \\
\mathrm{Equation~of~Momentum:}\ \dot{m} \cdot dv_z + d\dot{m} \cdot v_z + A dp + \frac{1}{2} \rho {v_z}^2 \pi D f dz = 0 \\
\mathrm{Equation~of~Energy:}\ \dot{m} \left( dh + d\left( \frac{{v_z}^2}{2} \right) + \frac{4f}{D} \frac{v_z^2}{2} dz \right) + d\dot{m} \left( h - h_{in} + \frac{{v_z}^2}{2} - \frac{{v_{in}}^2}{2} \right) = 0
\end{gather*}
$$

状態方程式と連続の式を用いて，運動量の式を次のように変形する．

$$
\begin{gather*}
\left(1 - \frac{1}{\gamma M^2} \right) \frac{dM}{M} + \frac{1}{2} \left(1 + \frac{1}{\gamma M^2} \right) \frac{dT}{T} + \left(1 + \frac{1}{\gamma M^2} \right) \frac{d\dot{m}}{\dot{m}} - \frac{1}{\gamma M^2} \frac{dA}{A} + \frac{2f}{D}dz = 0 \\
(\gamma M^2 - 1) \frac{dM^2}{M^2} + (\gamma M^2 + 1) \frac{dT}{T} + 2 (\gamma M^2 + 1) \frac{d\dot{m}}{\dot{m}} - 2 \frac{dA}{A} + \gamma M^2 \frac{4f}{D}dz = 0 \\
\frac{dT}{T} = - \frac{\gamma M^2 - 1}{\gamma M^2 + 1} \frac{dM^2}{M^2} - 2 \frac{d\dot{m}}{\dot{m}} + \frac{2}{\gamma M^2 + 1} \frac{dA}{A} - \frac{\gamma M^2}{\gamma M^2 + 1} \frac{4f}{D}dz
\end{gather*}
$$
$$
\begin{equation*}
d\left( \frac{v_z^2}{2} \right) = v_z^2 \left( \frac{dv_z}{v_z} \right) = v_z^2 \left( \frac{dM}{M} + \frac{dc}{c} \right) = v_z^2 \left( \frac{dM}{M} + \frac{1}{2}\frac{dT}{T} \right)
\end{equation*}
$$
$$
\begin{equation*}
\frac{dh}{dT} = C_p
\end{equation*}
$$
$$
\begin{equation*}
v_z^2 = M^2 c^2 = M^2 \gamma R T = M^2 C_p (\gamma -1) T
\end{equation*}
$$

同様にエネルギーの式は次のように書き換えられる．
$$
\begin{gather*}
\left( C_p T + \frac{{v_z}^2}{2} \right) \frac{dT}{T} + {v_z}^2 \frac{dM}{M} + \frac{d\dot{m}}{\dot{m}} \left( h - h_{in} + \frac{v^2}{2} - \frac{{v_{in}^2}}{2} \right) + \frac{4f}{D} \frac{v_z^2}{2} dz = 0 \\
C_p T \left( 2 + M^2 (\gamma - 1) \right) \frac{dT}{T} + C_p T M^2 (\gamma - 1) \frac{dM^2}{M^2} 
+ \frac{d\dot{m}}{\dot{m}} \left( 2h - 2h_{in} + {v_z}^2 - {v_{in}^2} \right) + \frac{4f}{D} v_z^2 dz = 0 \\
\frac{dT}{T} = - \frac{M^2 (\gamma - 1)}{2+ M^2(\gamma - 1)} \frac{dM^2}{M^2} - \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{C_p T \left( 2 + M^2 (\gamma - 1) \right)} \frac{d\dot{m}}{\dot{m}} - \frac{\gamma R M^2}{C_p \left( 2 + M^2 (\gamma - 1) \right)} \frac{4f}{D} dz
\end{gather*}
$$

これらの式を等値して、流体の流入出、管の断面積変化、壁面との摩擦によって、マッハ数の変化を表すことができる。

$$
\begin{align*}
&\left( - \frac{\gamma M^2 - 1}{\gamma M^2 + 1} + \frac{M^2 (\gamma - 1)}{2+ M^2(\gamma - 1)} \right) \frac{dM^2}{M^2} + \left( -2 + \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{C_p T \left( 2 + M^2 (\gamma - 1) \right)} \right) \frac{d\dot{m}}{\dot{m}} \\
&+ \frac{2}{\gamma M^2 + 1} \frac{dA}{A} + \left(- \frac{\gamma M^2}{\gamma M^2 + 1} + \frac{\gamma R M^2}{C_p \left( 2 + M^2 (\gamma - 1) \right)} \right) \frac{4f}{D} dz = 0 \\
&\left[ - \frac{(\gamma M^2 - 1)(2 + M^2 (\gamma - 1))}{\gamma M^2 + 1} + M^2 (\gamma - 1) \right] \frac{dM^2}{M^2} + \left[ -2(2 + M^2 (\gamma - 1)) + \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{C_p T} \right] \frac{d\dot{m}}{\dot{m}} \\
&+ \frac{2(2 + M^2 (\gamma - 1))}{\gamma M^2 + 1} \frac{dA}{A} + \left[- \frac{\gamma M^2 (2 + M^2 (\gamma - 1))}{\gamma M^2 + 1} + \frac{\gamma R M^2}{C_p} \right] \frac{4f}{D} = 0 \\
&\frac{2 (1 - M^2)}{\gamma M^2 + 1} \frac{dM^2}{M^2} + \left[ -2(2 + M^2 (\gamma - 1)) + \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{C_p T} \right] \frac{d\dot{m}}{\dot{m}} \\
&+ \frac{2(2 + M^2 (\gamma - 1))}{\gamma M^2 + 1} \frac{dA}{A} + \left[- \frac{\gamma M^2 (2 + M^2 (\gamma - 1))}{\gamma M^2 + 1} + \frac{\gamma R M^2}{C_p} \right] \frac{4f}{D} = 0
\end{align*}
$$

最終的な関係式は以下の通り．
$$
\begin{align*}
% \label{eq:Shapiro_8.27}
\frac{dM^2}{M^2} &= \frac{\gamma M^2 + 1}{1-M^2} \left[ 2 + M^2 (\gamma - 1) - \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{2 C_p T} \right] \frac{d\dot{m}}{\dot{m}} \\
&~~~- \frac{2 + M^2 (\gamma - 1)}{1 - M^2} \frac{dA}{A} + \left[ \frac{\gamma M^2 (2 + M^2 (\gamma - 1))}{1 - M^2} - \frac{\gamma R M^2 (\gamma M^2 + 1)}{C_p (1 - M^2)} \right] \frac{2f}{D} dz \\
&= \frac{\gamma M^2 + 1}{1-M^2} \left[ 2 + M^2 (\gamma - 1) - \frac{2h - 2h_{in} + {v_z}^2 - {v_{in}}^2}{2 C_p T} \right] \frac{d\dot{m}}{\dot{m}}
- \frac{2 + M^2 (\gamma - 1)}{1 - M^2} \frac{dA}{A} + \frac{M^2(\gamma+1)}{1-M^2} \frac{2f}{D} dz
\end{align*}
$$

## まとめと参考文献

圧縮性流体の1次元流れに関しては[^1]が詳しいが，今回扱った一般的な条件に関しては扱っていない．[^2]はかなり近い条件を扱っているので，こちらを参考にして導出を行った．[^3]は断面積一定で摩擦なしの場合を扱っており，流入出に関する項が一致することが確認できる．

[^1]: 松尾一泰，”圧縮性流体力学，内部流れの理論と解析”，理工学社，1994
[^2]: Ascher H. Shapiro, "The Dynamics and Thermodynamics of Compressible Fluid Flow, Volume I", The Ronald Press Company, 1953
[^3]: Levy, E. K. (November 1, 1968). "Theoretical Investigation of Heat Pipes Operating at Low Vapor Pressures." ASME. J. Eng. Ind. November 1968; 90(4): 547–552., https://doi.org/10.1115/1.3604687