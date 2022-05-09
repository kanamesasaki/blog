---
title: "[流体力学] 一次元定常等エントロピー流れ"
date: "2019-11-27T00:00:00.000Z"
description: "One-dimensional isentropic flow"
tags: ["Fluid dynamics"]
---

今回は一次元流れでも最も基本的な場合，定常かつ等エントロピーな流れについて考える．まずは準備として等エントロピーを表す式と音速の導出を行い，その後で一次元定常等エントロピー流れについて議論する．

## 等エントロピーの式

等エントロピー流れに限っては，前記事で導出したエネルギーの式の変わりに，より簡単な等エントロピーの式を用いることが出来るので，ここで導出しておこう．

$$
\begin{equation}
% \label{eq:Matsuo_1.74}
ds = ds_e + ds_i = \frac{dq_e}{T} + \frac{dq_i}{T} \ge \frac{dq_e}{T}
\end{equation}
$$

(1)のように，系のエントロピー変化を系と外部との熱の授受に伴う輸送エントロピー$ds_e$と系の内部の変化に伴う生成エントロピー$ds_i$に分ける．断熱変化(adiabatic change)では$ds_e=0$で、等エントロピー変化(isentropic change)では$ds_e=ds_i=0$である．エントロピー変化と，エネルギー変化，仕事の関係は(2)によって表される．

$$
\begin{equation}
% \label{eq:Shimizu_5.25}
dU = \frac{\partial U}{\partial S} dS + \frac{\partial U}{\partial V} dV + \frac{\partial U}{\partial N} dN  = T dS - P dV + \mu dN
\end{equation}
$$

物質の増減がないとすれば

$$
\begin{equation*}
Tds = dU + PdV = dh - VdP
\end{equation*}
$$

これを比熱を用いて変形すると

$$
\begin{align*}
ds &= C_p \frac{dT}{T} - \frac{VdP}{T} = C_p \frac{dT}{T} - R \frac{dP}{P} \\
&= C_p \left( \frac{dP}{P} - \frac{d\rho}{\rho} \right) - R \frac{dP}{P} = C_v \frac{dP}{P} - C_p \frac{d\rho}{\rho}
\end{align*}
$$

等エントロピー変化$ds=0$の場合，以下の式が得られる．

$$
\begin{equation}
% \label{eq:Matsuo_1.80}
\frac{dp}{p} = \gamma \frac{d\rho}{\rho} \hspace{10pt} \mathrm{or} \hspace{10pt} \frac{dp}{p} = \frac{\gamma}{\gamma - 1} \frac{dT}{T}
\end{equation}
$$

## 音速とマッハ数

次に音速とマッハ数について簡単に確認しておこう．理想的な非圧縮性流体では、微小な圧力変動は一瞬で流体全体に伝わることになるが，現実には流体の圧縮性により微小擾乱は有限の速度$c$で流体内を伝わっていく．
流体に微小擾乱が生じたときの圧力と密度変化を次のように表し，これによって生じる流体の速度$v$は非常に小さいと仮定する

$$
\begin{equation}
p = p_0 + p', ~~\rho = \rho_0 + \rho'
\end{equation}
$$

2次以上の微小量を無視すれば，連続の式およびオイラーの方程式は次のように表される．

$$
\begin{equation*}
% \label{eq:perturbation}
\frac{\partial \rho'}{\partial t} + \rho_0\ \mathrm{div}\ \boldsymbol{v} = 0
\end{equation*}
$$
$$
\begin{equation}
\frac{\partial \boldsymbol{v}}{\partial t} + \frac{1}{\rho_0}\ \mathrm{grad}\ p' = 0
\end{equation}
$$

ここで速度ポテンシャル$\boldsymbol{v} = \mathrm{grad}\ \phi$を導入すると，オイラー方程式から次の関係が得られる．

$$
\begin{equation}
p' = -\rho_0 \frac{\partial \phi}{\partial t}
\end{equation}
$$

$$
\begin{gather*}
- \frac{\partial}{\partial t} (\nabla \phi) = \frac{1}{\rho_0} \nabla p' ~ \to ~
\nabla \left( - \rho_0 \frac{\partial}{\partial t} \phi \right) = \nabla p'
\end{gather*}
$$

音波のような微小圧力変動では流体の粘性や熱伝導性の影響は無視でき，等エントロピー変化と考えられるとする．すると$p$が$\rho$のみの関数となり，以下の関係が成り立つ．

$$
\begin{equation}
% \label{eq:p'}
p' = \rho' \frac{\partial p}{\partial \rho}
\end{equation}
$$

速度ポテンシャルと(7)を用いて，連続の式を変形する．

$$
\begin{equation*}
\frac{\partial}{\partial t} \left( - \rho_0 \frac{\partial \phi}{\partial t} \right) + \rho_0 \left( \frac{\partial p}{\partial \rho} \right)_s \nabla \cdot \nabla \phi = 0
\end{equation*}
$$
$$
\begin{equation}
- \rho_0 \frac{\partial^2 \phi}{\partial t^2} + \rho_0 \left( \frac{\partial p}{\partial \rho} \right)_s \Delta \phi = 0
\end{equation}
$$

結果として以下の波動方程式の形が得られるので，音波の速度が$c$で表されることがわかる．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_64.7}
\frac{\partial^2 \phi}{\partial t^2} - c^2 \Delta \phi = 0, ~~ \mathrm{where}\ c = \sqrt{\left(\frac{\partial p}{\partial \rho}\right)_s}
\end{equation}
$$

マッハ数は流速$u$と音速$c$の比として定義される．

$$
\begin{equation}
% \label{eq:Matsuo_2.18}
M \equiv \frac{u}{c}
\end{equation}
$$

## 等エントロピー流れの特徴

一次元定常等エントロピー流れの支配方程式は次のように書き表せる．

$$
\begin{equation}
% \label{eq:Matsuo_1.39}
\mathrm{State~Equation:}\ \frac{dp}{p} = \frac{d\rho}{\rho} + \frac{dT}{T} 
\end{equation}
$$

$$
\begin{equation}
% \label{eq:Matsuo_3.5}
\mathrm{Equation~of~Continuity:}\ \frac{d \rho}{\rho} + \frac{du}{u} + \frac{dA}{A} = 0
\end{equation}
$$

$$
\begin{equation}
% \label{eq:Matsuo_3.15}
\mathrm{Equation~of~Motion:}\ v_z d v_z + \frac{1}{\rho} dp = 0
\end{equation}
$$

$$
\begin{equation}
\mathrm{Equation~of~Energy:}\ \frac{dp}{p} - \gamma \frac{d \rho}{\rho} = 0
\end{equation}
$$

断面積変化$dA/A$に対する，流体のパラメータ変化について考える．(9)を用いて(13)を次のように変形する．

$$
\begin{equation*}
v_z d v_z = - \frac{dp}{\rho} = - \frac{dp}{d\rho} \frac{d\rho}{\rho} = - c^2 \frac{d\rho}{\rho}
\end{equation*}
$$

両辺を$c^2$でわると，マッハ数の定義より次の関係が得られる．

$$
\begin{equation*}
\frac{d\rho}{\rho} = -M^2 \frac{d v_z}{v_z}
\end{equation*}
$$

上式を連続の式(12)に代入して$d\rho/\rho$および$d v_z/v_z$を消去する．

$$
\begin{equation}
% \label{eq:Matsuo_4.7}
\frac{d v_z}{v_z} = \frac{1}{M^2 - 1} \frac{dA}{A}
\end{equation}
$$
$$
\begin{equation}
% \label{eq:Matsuo_4.8}
\frac{d \rho}{\rho} = - \frac{M^2}{M^2 - 1} \frac{dA}{A}
\end{equation}
$$

(16)に等エントロピーの式(3)を用いる．

$$
\begin{equation}
% \label{eq:Matsuo_4.9}
\frac{d p}{p} = - \frac{\gamma M^2}{M^2 - 1} \frac{dA}{A}
\end{equation}
$$

(16)と(17)を状態方程式(11)に代入する．

$$
\begin{equation}
% \label{eq:Matsuo_4.10}
\frac{d T}{T} = - \frac{(\gamma - 1) M^2}{M^2 - 1} \frac{dA}{A}
\end{equation}
$$

音速の式$c^2 = \gamma R T$の対数微分と(18)より

$$
\begin{equation}
\frac{dc}{c} = - \frac{(\gamma - 1)M^2}{2 (M^2 - 1)} \frac{dA}{A}
\end{equation}
$$

マッハ数の式$M = v_z/c$の対数微分と(15)より

$$
\begin{equation}
\frac{dM}{M} = - \frac{2+ (\gamma - 1)M^2}{2 (1- M^2)} \frac{dA}{A}
\end{equation}
$$

音速の式$c^2 = \gamma R T$の対数微分

$$
\begin{equation}
2 \frac{dc}{c} = \frac{dT}{T}
\end{equation}
$$

マッハ数の式$M = v_z/c$の対数微分

$$
\begin{equation}
\frac{dM}{M} = \frac{dv_z}{v_z} - \frac{dc}{c}
\end{equation}
$$

以上の式を用いると，断面積変化$dA$とマッハ数$M$をもとに，各物理量が流れに沿って増加するか，減少するかを予測することが出来る．例えば，$0<M<1$の流れでは，$dA<0$のノズルを用いると流れを加速でき，$0<M<1$の流れでは，$dA>0$ノズルを用いると流れを加速できる．これらをつなげた先細末広ノズル（convergent-divergent nozzle, Laval nozzle）と呼び気体を静止状態から加速して超音速にするために用いる．

|Parameter|$dA<0$, $M<1$ |$dA<0$, $M>1$ | $dA>0$, $M<1$ | $dA>0$, $M>1$|
|:------|:-----:|:-----:|:-----:|:-----:|
|Velocity $v_z$ | increase | decrease | decrease | increase |
|Mach Number $M$ | increase | decrease | decrease | increase |
|Pressure $p$ | decrease | increase | increase | decrease |
|Density $\rho$ | decrease | increase | increase | decrease |
|Temperature $T$ | decrease | increase | increase | decrease |
|Sound $c$ | decrease | increase | increase | decrease |

## まとめと参考文献

今回の内容は[^1], [^2]を参考にした．[^1]は一次元流れに関して，より詳しい例や演習問題も豊富なので参照してもらいたい．

[^1]: 松尾一泰，"圧縮性流体力学，内部流れの理論と解析"，理工学社，1994
[^2]: L.D. Landau, E.M. Lifshitz, "Fluid Mechanics, Second Edition", Pergamon Press, 1987