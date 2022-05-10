---
title: "[統計力学] Hertz-Knudsen-Schrage Equation"
date: "2020-02-23T00:00:00.000Z"
description: "Transform Hertz-Knudsen equation to Hertz-Knudsen-Schrage equation"
tags: ["Statistical mechanics"]
---

前回導出した[Hertz-Knudsen Equation](https://kanamesasaki.github.io/blog/20200221-hertz-knudsen/)は，蒸発・凝縮の流量を表す式にはなっていたものの凝縮係数$\sigma_c$と蒸発係数$\sigma_e$という未知パラメタが含まれているという点が不便であった（基本的には様々な物質・状態について実際に測定するしかない）．Schrageは蒸発．凝縮がある場合に，liquid-vapor interfaceに衝突するような平均流速がある，という仮定をすることで，Hertz-Knudsen Equationを修正した．今回はこの修正の手順を追って，Hertz-Knudsen-Schrage Equationを導出する．

## Hertz-Knudsen Equationの修正

まずMaxwell-Boltzmann分布による速度分布で，z方向の平均流速が$\overline{v}_z$にずれている場合を想定する．このとき，単位時間・単位面積当たりに衝突する粒子数は以下のように推定する．

$$
\begin{align}
% \label{eq:velocity_distribution}
\nu_z &= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \int_{-\infty}^{0}
\frac{N}{V} \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(v_x^2 + v_y^2 + (v_z - \overline{v}_z)^2)}{2k_\mathrm{B}T} \right]
|v_z|~dv_x dv_y dv_z \\
&= - \frac{N}{V} \sqrt{\frac{m}{2\pi k_\mathrm{B} T}} \int_{-\infty}^{0}
\exp \left[ -\frac{m (v_z - \overline{v}_z)^2}{2k_\mathrm{B}T} \right] v_z~dv_z
\end{align}
$$

$w = v_z - \overline{v}_z$に関する積分は次のように評価できる．

$$
\begin{align*}
&\int_{-\infty}^{-\overline{v}_z} (w + \overline{v}_z)
\exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw
= \int_{-\infty}^{-\overline{v}_z} w
\exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw + \overline{v}_z \int_{-\infty}^{-\overline{v}_z}
\exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw \\
&= - \frac{k_\mathrm{B}T}{m}
\left[ \exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right] \right]_{-\infty}^{-\overline{v}_z} + \overline{v}_z \int_{-\infty}^{0}
\exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw + \overline{v}_z \int^{-\overline{v}_z}_{0} \exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw \\
&= - \frac{k_\mathrm{B}T}{m} \exp \left[- \frac{m \overline{v}_z^2}{2k_\mathrm{B}T} \right]
+ \frac{\overline{v}_z}{2} \sqrt{\frac{2\pi k_\mathrm{B}T}{m}} - \overline{v}_z \int^{\overline{v}_z}_{0} \exp \left[ -\frac{m w^2}{2k_\mathrm{B}T} \right]dw \\
&= - \frac{k_\mathrm{B}T}{m} \exp \left[ -\frac{m \overline{v}_z^2}{2k_\mathrm{B}T} \right] + \frac{\overline{v}_z}{2} \sqrt{\frac{2\pi k_\mathrm{B}T}{m}}
\left[1 - \mathrm{erf} \left( \overline{v}_z \sqrt{\frac{m}{2k_\mathrm{B}T}} \right) \right]
\end{align*}

$$

ただしerf(x)はerror functionと呼ばれ，(3)のように定義される．$x: -\infty \to +\infty$で$\mathrm{erf}(x): -1 \to +1$と変化する関数で，シグモイド関数のような形をしている．

$$
\begin{equation}
% \label{eq:erf}
\mathrm{erf}(x) = \frac{2}{\sqrt{\pi}} \int^x_0 \exp \left[ -t^2 \right] dt
\end{equation}
$$

$t = \alpha t'$として置換すれば，パラメタを含んだ形に書き換えることも出来る．

$$
\begin{equation}
% \label{eq:erfa}
\mathrm{erf}(x) = \frac{2 \alpha}{\sqrt{\pi}} \int^{\frac{x}{\alpha}}_0 \exp \left[ -(\alpha t')^2 \right] dt'
\end{equation}
$$

これより，liquid-vapor interfaceに衝突する質量流量は次のように表される．

$$
\begin{align*}
&j = m \nu_z \\
&= - \frac{mN}{V} \sqrt{\frac{m}{2\pi k_\mathrm{B} T}} \left\{
- \frac{k_\mathrm{B}T}{m} \exp \left[ -\frac{m \overline{v}_z^2}{2k_\mathrm{B}T} \right]
- \frac{\overline{v}_z}{2} \sqrt{\frac{2\pi k_\mathrm{B}T}{m}}
\left[1 - \mathrm{erf} \left( \overline{v}_z \sqrt{\frac{m}{2k_\mathrm{B}T}} \right) \right] \right\}  \\
&= \frac{N k_\mathrm{B}T}{V}
\sqrt{\frac{m}{2\pi k_\mathrm{B} T}} \exp \left[ -\frac{m \overline{v}_z^2}{2k_\mathrm{B}T} \right] - \frac{\overline{v}_z mN}{2V}
\left[1 - \mathrm{erf} \left( \overline{v}_z \sqrt{\frac{m}{2k_\mathrm{B}T}} \right) \right]  \\
&= P \frac{\beta}{\sqrt{\pi}} \exp \left[- \overline{v}_z^2 \beta^2 \right]
- P \overline{v}_z \beta^2 \left[ 1 - \mathrm{erf}(\overline{v}_z \beta) \right]  \\
&= \frac{\beta P}{\sqrt{\pi}} \left\{ \exp \left[- \overline{v}_z^2 \beta^2 \right] - \overline{v}_z \beta \sqrt{\pi} \left[ 1 - \mathrm{erf}(\overline{v}_z \beta) \right] \right\}
= \frac{\beta P}{\sqrt{\pi}} ~ \Gamma \left( \overline{v}_z \beta \right) 
= \frac{\rho}{2\sqrt{\pi} \beta} ~ \Gamma \left( \overline{v}_z \beta \right) 
\end{align*}
$$

$$
\begin{align*}
\mathrm{where}~~ &\beta = \sqrt{\frac{m}{2k_\mathrm{B}T}} = \sqrt{\frac{M}{2RT}} \\
&\Gamma \left( \overline{v}_z \beta \right) = \exp \left[ - \overline{v}_z^2 \beta^2 \right]
- \overline{v}_z \beta \sqrt{\pi} \left[ 1 - \mathrm{erf} \left( \overline{v}_z \beta \right) \right]
\end{align*}
$$

ただし$m$は分子一個の重さで，アボガドロ数を$N_\mathrm{A}$として分子量$M = m N_\mathrm{A}$である．気体の状態方程式についても確認しておく．$R$はモル気体定数で$R = k_\mathrm{B} N_\mathrm{A}$である．

$$
\begin{gather}
P[\mathrm{N}\mathrm{m}^{-2}] V[\mathrm{m}^3] = n[\mathrm{mol}] R[\mathrm{J}\mathrm{K}^{-1}\mathrm{mol}^{-1}] T[\mathrm{K}] \\
P = \frac{nmN_\mathrm{A}}{V} \frac{k_\mathrm{B}T}{m} = \rho \frac{k_\mathrm{B}T}{m}
\end{gather}
$$

よって全体の質量流量は(7)のように表され，これをHertz-Knudsen-Schrage Equationと呼ぶ．

$$
\begin{equation}
% \label{eq:schrage}
j^{LV} = \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{\Gamma P_v}{\sqrt{T_v}} \right)
\end{equation}
$$

ただし，平均流速$\overline{v}_z$は，熱流束$q$をもとにおおよそ(8)ように見積もることが出来る．一方で，最終的に得られる質量流量$j^{LV}$と熱流束$q$の間には(9)の関係があるので，これを満たすような温度・圧力となるはずである．つまり，熱流束$q$が質量流量$j^{LV}$とパラメタ$\Gamma$に関係しているので，熱流束$q$から温度（あるいはその逆）を陽に求めることは出来ない．

$$
\begin{equation}
% \label{eq:vz}
\overline{v}_z \rho_v h_\mathrm{fg} = q
\end{equation}
$$
$$
\begin{equation}
% \label{eq:qhfg}
q = j^{LV} h_\mathrm{fg}
\end{equation}
$$

## 穏やかな蒸発・凝縮の場合

蒸発・凝縮が穏やかで平均流速が十分小さい場合，(7)をさらに変形して，熱流束と温度の関係を陽に表すことが出来る．まず，先ほど導出した蒸発による流量を$j_l$と表すことにする．

$$
\begin{equation}
j_l = \sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{P_l}{\sqrt{T_l}}
\end{equation}
$$

$\overline{v}_z \beta_v$が十分小さい場合には$\Gamma$を以下のように近似できる．

$$
\begin{equation}
% \label{eq:gamma}
\Gamma ( \overline{v}_z \beta_v ) \simeq 1 - \overline{v}_z \beta_v \sqrt{\pi}
\end{equation}
$$

全体の質量流量$j^{LV}$と，平均流速$\overline{v}_z$との関係を(12)とおいて，$\overline{v}_z \beta$を$j_l,~ j^{LV}$を用いて書き換える．

$$
\begin{equation}
% \label{eq:Schrage1953_3.1-14}
j^{LV} = \rho_v \overline{v}_z
\end{equation}
$$

$$
\begin{equation}
% \label{eq:Schrage1953_3.1-15}
\overline{v}_z \beta_v 
= \frac{\rho_v \overline{v}_z}{2 \sqrt{\pi}} \frac{2\sqrt{\pi} \beta_l}{\rho_l} \left( \frac{\beta_v}{\beta_l} \right) \left( \frac{\rho_l}{\rho_v} \right)
= \frac{1}{2 \sqrt{\pi}} \frac{j^{LV}}{j_l} \frac{\sqrt{T_v}}{\sqrt{T_l}} \frac{P_l}{P_v} 
\end{equation}
$$

(11)，(13)を(7)に代入していく．

$$
\begin{align*}
j^{LV} &= \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left\{ \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \left( 1 - \overline{v}_z \beta_v \sqrt{\pi} \right) \right\} \\
&= \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left\{ \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \left( 1 - \frac{1}{2} \frac{j^{LV}}{j_l} \frac{\sqrt{T_v}}{\sqrt{T_l}} \frac{P_l}{P_v}  \right) \right\} \\
&= \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \right) + \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{P_v}{\sqrt{T_v}} \times \frac{1}{2} \frac{j^{LV}}{j_l} \frac{\sqrt{T_v}}{\sqrt{T_l}} \frac{P_l}{P_v} \\
&= \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \right) + \frac{\sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{P_v}{\sqrt{T_v}}}{\sqrt{\frac{m}{2\pi k_\mathrm{B}}} \frac{P_l}{\sqrt{T_l}}} \times \frac{\alpha}{2} j^{LV} \frac{\sqrt{T_v}}{\sqrt{T_l}} \frac{P_l}{P_v} \\
&= \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \right) + \frac{\alpha}{2} j^{LV} \\
&\hspace{30pt} \left( 1- \frac{\alpha}{2} \right) j^{LV} = \alpha \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \right)
\end{align*}
$$

最終的に以下の関係式(14)が得られて，これもHertz-Knudsen-Schrage Equationと呼ばれる．

$$
\begin{gather}
% \label{eq:schrage2}
j^{LV} = \frac{2 \alpha}{2 - \alpha} \sqrt{\frac{m}{2\pi k_\mathrm{B}}}\left( \frac{P_l}{\sqrt{T_l}} - \frac{P_v}{\sqrt{T_v}} \right)
\end{gather}
$$

## まとめと参考文献

今回紹介したHertz-Knudsen-Schrage Equationは，比較的簡単に蒸発・凝縮をモデル化できるツールとして，たまに本や論文で出てくる．もちろんモデルの実装自体は式があれば出来る．だだ，どんな仮定をおいているかが不明では議論にならないので，一度きちんと導出を追っておこう，というのが本記事の趣旨だ．実際に式(2)を見てみると，平均流速を用いてマクスウェル・ボルツマン分布を修正していることが分かる．確かに蒸発・凝縮が進んでいる場合は，全体としてある平均流速で質量が移動しているのは間違いないのだが，その場合の分子の速度分布を(2)の形で表してよいか，に関しては物理的な説明がない．つまりこのモデル化は，平衡状態の速度分布を（物理的にきちんとした正当化はないけれども）非平衡な蒸発・凝縮現象に当てはめてみた，という手法であることに注意しなければならない．

[^1]: Schrage, R., 1953, "A theoretical study of interphase mass transfer", Columbia University Press.