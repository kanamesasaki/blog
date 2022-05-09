---
title: "[統計力学] Hertz-Knudsen Equation"
date: "2020-02-21T00:00:00.000Z"
description: "Derivation of Hertz-Knudsen equation"
tags: ["Statistical mechanics"]
---

今回は凝縮・蒸発による質量流量を表すモデルとしてしばしば用いられる，Hertz-Knudsen Equationを導出する．マクスウェル・ボルツマン分布からスタートして，凝縮・蒸発の質量流量ををそれぞれ式で書き表す．これらを足し合わせれば全体としての流量を推定できるだろう，というのが大まかな方針だ．

## マクスウェル・ボルツマン分布

まずはマクスウェル・ボルツマン分布の表記式を確認しておく．

$$
\begin{equation}
% \label{eq:M-B}
dw_v = \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2+v_y^2+v_z^2)}{2k_\mathrm{B}T} \right] dv_x dv_y dv_z
\end{equation}
$$

速度に関する確率分布である(1)に，単位体積あたりの分子数をかけてやれば，ある速度を持った粒子が何個見つかるか，という分布が得られる．

$$
\begin{equation}
dN_v = \frac{N}{V} \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2+v_y^2+v_z^2)}{2k_\mathrm{B}T} \right] dv_x dv_y dv_z
\end{equation}
$$

このマクスウェル・ボルツマン分布に基づく個数分布の式を用いて，liquid-vapor interfaceに衝突する分子がどれだけあるかを見積もっていこう．

## 蒸発・凝縮にともなう質量流量の推定

速度$v_z$かつ$z=0$にある壁面から$v_z \Delta t$以下の距離にある分子は，$\Delta t$以内に壁面に衝突する．このことから，単位面積・単位時間に壁面に衝突する分子の数は次のように表すことができる．

$$
\begin{align*}
\nu_z &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \int_{-\infty}^{0}
\frac{N}{V} \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2 + v_y^2 + v_z^2)}{2k_\mathrm{B}T} \right]
|v_z|~dv_x dv_y dv_z \\

&= \frac{N}{V} \sqrt{\frac{m}{2\pi k_\mathrm{B} T}} \int_{-\infty}^{0}
\exp \left[ -\frac{m v_z^2}{2k_\mathrm{B}T} \right] |v_z|~dv_z
= \frac{N}{V} \sqrt{\frac{m}{2\pi k_\mathrm{B} T}}
\left[ \frac{k_{B}T}{m} \exp \left[ - \frac{m v_z^2}{2k_\mathrm{B}T} \right] \right]_{-\infty}^{0} \\

&= \frac{Nk_\mathrm{B}T}{mV} \sqrt{\frac{m}{2\pi k_\mathrm{B} T}}
= \frac{P}{\sqrt{2\pi m k_\mathrm{B} T}}
\end{align*}
$$

ただし，$v_x,~v_y$の積分にはガウス積分の結果(3)を用いた．

$$
\begin{equation}
% \label{eq:gauss}
\int_{-\infty}^{\infty} \exp \left[ -\alpha x^2 \right] dx = \sqrt{\frac{\pi}{\alpha}}
\end{equation}
$$

壁面に衝突する分子数$\nu_z$が求められたので，これに分子の質量をかければ質量流量(Mass Flux)が得られる．

$$
\begin{equation}
j = m\nu_z = P \sqrt{\frac{m}{2\pi k_\mathrm{B} T}}
\end{equation}
$$

これは自由に飛びまわっている気体分子が平衡状態にあるとき，という前提条件があることに注意しよう．liquid-vapor interface付近はそもそも気体分子が自由に飛び回っている状態ではないし，さらに全体として凝縮・蒸発があれば非平衡な状態なので，本来マクスウェル・ボルツマン分布を用いるのは適切ではない．ただしここでは，蒸発・凝縮現象が平衡状態にある気体の運動に近いものと想定する．さらにliquid-vapor interfaceに衝突した分子のうちどれだけが，実際に凝縮または蒸発したのかを表す係数，凝縮係数$\sigma_c$と蒸発係数$\sigma_e$を導入する．すると凝縮・蒸発にともなう質量流量は次のように表されるだろう．ただし，蒸発方向を正としている．

$$
\begin{gather}
j_e = \sigma_e \sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{p_\mathrm{sat}(T_l)}{\sqrt{T_l}}, ~~
j_c = - \sigma_c \sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{P_v}{\sqrt{T_v}}
\end{gather}
$$

## Hertz-Knudsen Equation

凝縮・蒸発の流量を足し合わせれば，全体としての質量流量を表すHerz-Knudsen Equation (6)が得られる．

$$
\begin{equation}
% \label{eq:hertz-knudsen}
j^{LV} = \sqrt{\frac{m}{2\pi k_\mathrm{B}}} \left( \sigma_e \frac{p_{sat}(T_l)}{\sqrt{T_l}} - \sigma_c \frac{p_v}{\sqrt{T_v}} \right)
\end{equation}
$$

平衡状態においては$\sigma_e = \sigma_c$であるが，凝縮または蒸発が進んでいる場合には$\sigma_e = \sigma_c$となるとは限らない．基本的に蒸発係数$\sigma_e$は液体温度$T_l$のみに依存すると仮定される一方で，凝縮係数$\sigma_c$は蒸気と液体双方の温度に依存するものとして扱われる．ちなみに[^1]（日本語の記事は[^2]）では，異なる種類の流体（Argon, Water, Methanol）に関して，蒸発係数$\sigma_e$が(7)のように近似できると報告している．蒸発・凝縮の特性は分子の形，構成原子によって決まってくるはずだが，臨界温度$T_\mathrm{critical}$を基準として無次元化された温度を用いると，異なる分子でも同様な式で蒸発係数$\sigma_e$を推定できるというのは面白い特徴だ．

$$
\begin{gather}
% \label{eq:Ishiyama2013_A2}
\alpha_e = \log_{10} (B_1 - B_2(T^* - B_3)) + B_4
\end{gather}
$$
$$
\begin{equation*}
\mathrm{where} ~B_1 = 0.6795, B_2 = 1.9757, B_3 = 0.6608, B_4 = 0.9403, ~\mathrm{and}~ T^* = \frac{T_l}{T_\mathrm{critical}}
\end{equation*}
$$

## まとめと参考文献

本来は平衡状態における速度分布であるMaxwell-Boltzmann分布を，非平衡状態にあるliquid-vapor interfaceの現象に（なかば無理やり）適用することで，凝縮・蒸発による質量流量を表現した．これがHertz-Knudsen Equationである．適用の都合上，2つの未知パラメタを導入せざるを得なくなっているまった点がこの式のデメリットで，これらのパラメタは実験的に決めてやる必要がある．一方でこれまでに広く用いられてきた表記式なので，実験に基づくデータも多く存在する．

[^1]: Ishiyama, T., Fujikawa, S., Kurz, T., Lauterborn, W., 2013. Nonequilibrium kinetic boundary condition at the vapor-liquid interface of argon. Phys. Rev. E 88, 042406. URL: https://link.aps.org/doi/10.1103/PhysRevE.88.042406, doi:10.1103/PhysRevE.88.042406.
[^2]: 石山 達也,藤川 重雄, "気液界面での質量・運動量・エネルギーの輸送 : 分子動力学,分子気体力学,実験の融合(第2章)蒸発・凝縮への分子動力学の適用(平面状界面) : 分子気体力学境界条件", ながれ : 日本流体力学会誌 = Nagare : journal of Japan Society of Fluid Mechanics 33(3), 299-306, 2014-06, https://ci.nii.ac.jp/naid/110009839005/en/