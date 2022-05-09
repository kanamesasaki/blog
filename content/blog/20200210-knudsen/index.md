---
title: "[流体力学] クヌッセン数"
date: "2020-02-10T00:00:00.000Z"
description: "Knudsen number"
tags: ["Fluid dynamics"]
---

扱っている流体現象が非常に低密度な領域に入ってしまった場合，まだ通常の流体力学の範囲で考えていいのか，それとも分子動力学や希薄流体の力学と呼ばれるような分野の現象になっているのかは，よくよく注意しないといけない．このときに指標となるのがクヌッセン数と呼ばれる無次元量だ．今回はクヌッセン数の紹介と，その中で用いられる平均自由行程（mean free path）の評価方法について解説する．

## クヌッセン数（Knudsen Number）の定義

クヌッセン数は(1)のように定義され，$\lambda$は平均自由行程（mean free path），$L$は代表長さである．

$$
\begin{equation}
% \label{eq:Bird1994_1.1}
\mathrm{Kn} = \frac{\lambda}{L}
\end{equation}
$$

平均自由行程は，ある分子が他の分子と衝突するまでに進む平均距離で，分子が周囲に密にあれば短く，分子が少なくスカスカであれば長くなる．クヌッセン数はこの値と，流れの代表長さ（例えば円管流れであれば，管の直径）の比として表されており，クヌッセン数が1より十分小さければ，分子の衝突が頻繁に起こり，流れを連続的な流体として扱うことが出来る．

さて，$N$を単位体積あたりの分子数とすると，分子数$N$が半分になれば平均自由行程$\lambda$は倍になるという関係がある．

$$
\begin{equation}
% \label{eq:total_collision_cross-section}
\sigma_\mathrm{T} \lambda \propto \frac{1}{N}
\end{equation}
$$

この式のtotal collision cross-section $\sigma_\mathrm{T}$は衝突に関わる面積で，衝突に関わる分子の種類によって決まる．直径$d$の同種の分子が衝突する場合は，図のように2つの分子の距離が$d$以下に入るような場合に衝突となるので，(3)のように表される．

<div align="center"><img src=".\total_collision_cross-section.svg" width="350" title="Collision of Molecules"></div>

$$
\begin{equation}
% \label{eq:Bird1994_1.8}
\sigma_\mathrm{T} = \pi d^2
\end{equation}
$$

つまり(2)の左辺は分子が運動することで掃く領域の体積，右辺は分子1個あたりに割り当てられた体積，というイメージだ．これらが等しい場合が平均自由行程になるかというと，実はそうではない．なので，この間に成り立つ関係をきちんと議論していこう．

## 平均自由行程（Mean Free Path）

まずはある分子tに注目して，その分子が他の分子に衝突する平均頻度（mean collision rate）を求めていく．速度$\boldsymbol{v}_i$を持つような分子たちを分子iと表すことにしよう．分子iに対する分子tの相対速度を$\boldsymbol{v}_\mathrm{r} = \boldsymbol{v}_\mathrm{t} - \boldsymbol{v}_\mathrm{i}$と表して，止まった分子iたちの中を分子tが速度$\boldsymbol{v}_\mathrm{r}$で飛んでいる状況を考えると，単位時間に分子tが掃く領域は$\sigma_\mathrm{T} {v}_\mathrm{r}$と表される．いま速度$\boldsymbol{v}_i$を持つ分子が単位体積内にある数は$\Delta N_i$個と表されるとする．これを可能な速度分布全体に関して足し合わせてやると，単位時間当たりに衝突する分子の個数を求められる．

$$
\begin{equation}
\nu = \sum_i \Delta N_i \sigma_\mathrm{T} \bm{v}_\mathrm{r}
= N \sum_i \frac{\Delta N_i}{N} \sigma_\mathrm{T} \bm{v}_\mathrm{r}
\end{equation}
$$

総和内を平均値として書き直せば，mean collision rateは次のように表される．

$$
\begin{equation}
% \label{eq:Bird1994_1.10}
\nu = N \overline{\sigma_\mathrm{T} \bm{v}_\mathrm{r}}, ~~
\mathrm{where}~~ \overline{\sigma_\mathrm{T} \bm{v}_\mathrm{r}} = \frac{1}{N} \sum_i \Delta N_i \sigma_\mathrm{T} \bm{v}_\mathrm{r}
\end{equation}
$$

いま分子が1種類の剛体球であれば，次のように書いてしまってよい．

$$
\begin{equation}
% \label{eq:Bird1994_1.10a}
\nu = \sigma_\mathrm{T} N \overline{\bm{v}_\mathrm{r}} = \pi d^2 N \overline{\bm{v}_\mathrm{r}}
\end{equation}
$$

平均自由行程（mean free path）$\lambda [\mathrm{m}]$は分子の平均速度$\overline{\bm{v}'}  [\mathrm{m} \mathrm{s}^{-1}]$を平均衝突頻度（mean collision rate）$\nu [\mathrm{s}^{-1}]$でわってやればよい．

$$
\begin{equation}
% \label{eq:Bird1994_1.12}
\lambda = \frac{\overline{\bm{v}'}}{\nu} = 
\frac{1}{N} \frac{\overline{v'}}{\overline{\sigma_\mathrm{T} \bm{v}_\mathrm{r}}}
\end{equation}
$$

分子が1種類の剛体球の場合は次のように表される．

$$
\begin{equation}
% \label{eq:Bird1994_1.12a}
\lambda = 
\frac{1}{N} \frac{\overline{v'}}{\pi d^2 \overline{\bm{v}_\mathrm{r}}}
\end{equation}
$$

## 平衡状態での平均自由行程（Mean Free Path）

分子が1種類の剛体球の場合について，平均自由行程の具体的な形を求めよう．(8)で未知なのは，分子の平均速度$\overline{{v}'} $と平均相対速度$\overline{{v}_r}$の比である．平衡状態の分子の速度分布であるマクスウェル・ボルツマン分布(9)ををもとに，これを求めていく．

$$
\begin{equation}
% \label{eq:Bird1994_4.1}
d\varrho_v = \left( \frac{m}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m(u^2+v^2+w^2)}{2k_\mathrm{B}T} \right] du dv dw
\end{equation}
$$

分子1の分子2に関して，平均速度$\boldsymbol{v}_\mathrm{m}$と相対速度$\boldsymbol{v}_\mathrm{r}$を次のように定義しておく．

$$
\begin{gather}
% \label{eq:average_velocity}
m_1 \boldsymbol{v}_1 + m_2 \boldsymbol{v}_2 = (m_1 + m_2) \boldsymbol{v}_\mathrm{m} \\
\boldsymbol{v}_\mathrm{r} = \boldsymbol{v}_1 - \boldsymbol{v}_2
\end{gather}
$$

ある相対速度$\boldsymbol{v}_\mathrm{r}$が現れる確率は，$\boldsymbol{v}_1$の現れる確率と$\boldsymbol{v}_2$の現れる確率の積で現される．これに相対速度の大きさ$v_\mathrm{r}$をかけて，分子1と分子2の速度分布全体で積分してやれば，相対速度（の大きさ）の平均が得られる．

$$
\begin{align}
% \label{eq:average_relative_velocity}
\overline{v_\mathrm{r}}
&= \int^\infty_{-\infty} \int^\infty_{-\infty} {v}_\mathrm{r} \left\{ \left( \frac{m_1}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m_1 {v}_1^2}{2k_\mathrm{B}T} \right] \right\}
\left\{ \left( \frac{m_2}{2\pi k_\mathrm{B} T} \right)^{\frac{3}{2}}
\exp \left[ -\frac{m_2 {v}_2^2}{2k_\mathrm{B}T} \right] \right\}
d\boldsymbol{v}_1 d\boldsymbol{v}_2 \\
&= \frac{(m_1 m_2)^{\frac{3}{2}}}{(2\pi k_\mathrm{B} T)^3} \int^\infty_{-\infty} \int^\infty_{-\infty} {v}_\mathrm{r} \exp\left[ \frac{-(m_1 {v}_1^2 + m_2 {v}_2^2)}{2k_\mathrm{B} T} \right] d\boldsymbol{v}_1 d\boldsymbol{v}_2
\end{align}
$$

これを計算するために，積分変数を$\boldsymbol{v}_1=(u_1, v_1, w_1), \boldsymbol{v}_2=(u_2, v_2, w_2)$から，$\boldsymbol{v}_\mathrm{r}=(u_\mathrm{r}, v_\mathrm{r}, w_\mathrm{r}), \boldsymbol{v}_\mathrm{m}=(u_\mathrm{m}, v_\mathrm{m}, w_\mathrm{m})$に変換したい．そのためには変換のためのヤコビアンを知る必要がある．まず(10, 11)をもとに，$\boldsymbol{v}_1, \boldsymbol{v}_2$を$\boldsymbol{v}_\mathrm{r}, \boldsymbol{v}_\mathrm{m}$で書き表しておく．

$$
\begin{gather}
% \label{eq:Bird1994_2.4a}
\boldsymbol{v}_1 = \frac{m_1 + m_2}{m_1} \boldsymbol{v}_\mathrm{m} - \frac{m_2}{m_1} (\boldsymbol{v}_1 -  \boldsymbol{v}_\mathrm{r}) \\
\frac{m_1 + m_2}{m_1} \boldsymbol{v}_1 = \frac{m_1 + m_2}{m_1} \boldsymbol{v}_\mathrm{m} + \frac{m_2}{m_1} \boldsymbol{v}_\mathrm{r} \\
\boldsymbol{v}_1 = \frac{m_2}{m_1 + m_2} \boldsymbol{v}_\mathrm{r} + \boldsymbol{v}_\mathrm{m}
\end{gather}
$$
$$
\begin{gather}
% \label{eq:Bird1994_2.4b}
\boldsymbol{v}_2 = \frac{m_2}{m_1 + m_2} \boldsymbol{v}_\mathrm{r} + \boldsymbol{v}_\mathrm{m} - \boldsymbol{v}_\mathrm{r}
= - \frac{m_1}{m_1 + m_2} \boldsymbol{v}_\mathrm{r} + \boldsymbol{v}_\mathrm{m}
\end{gather}
$$

以下ちまちま余因子展開しているが，結果ヤコビアンは$1$である．

$$
\begin{align*}

&\left| \frac{\partial (u_1, v_1, w_1, u_2, v_2, w_2)}{\partial (u_\mathrm{r}, v_\mathrm{r}, w_\mathrm{r}, u_\mathrm{m}, v_\mathrm{m}, w_\mathrm{m})} \right| =
\left| \begin{array}{ccc}
\frac{\partial u_1}{\partial u_\mathrm{r}} & \cdots & \frac{\partial u_1}{\partial w_\mathrm{m}} \\
\vdots & ~ & \vdots \\
\frac{\partial w_2}{\partial u_\mathrm{r}} & \cdots & \frac{\partial w_2}{\partial w_\mathrm{m}}
\end{array} \right|

= \left| \begin{array}{cccccc}
\frac{m_2}{m_1+m_2} & 0 & 0 & 1 & 0 & 0\\
0 & \frac{m_2}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & 0 & \frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1 & 0 & 0\\
0 & -\frac{m_1}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & 0 & -\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|\\

&= \frac{m_2}{m_1+m_2} 
\left| \begin{array}{ccccc}
\frac{m_2}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & \frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
0 & 0 & 1 & 0 & 0\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & -\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|
+\frac{m_1}{m_1+m_2} 
\left| \begin{array}{ccccc}
0 & 0 & 1 & 0 & 0\\
\frac{m_2}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & \frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1 & 0\\
0 & -\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right| \\

&= \left( \frac{m_2}{m_1+m_2} \right)^2 
\left| \begin{array}{cccc}
\frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|
+ \frac{m_1 m_2}{(m_1+m_2)^2}
\left| \begin{array}{cccc}
0 & 0 & 1 & 0\\
\frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
0 & 1 & 0 & 0\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|\\
&\hspace{30pt}- \frac{m_1 m_2}{(m_1+m_2)^2}
\left| \begin{array}{cccc}
0 & 1 & 0 & 0\\
\frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
0 & 0 & 1 & 0\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|
+ \left( \frac{m_1}{m_1+m_2} \right)^2
\left| \begin{array}{ccccc}
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
\frac{m_2}{m_1+m_2} & 0 & 0 & 1\\
-\frac{m_1}{m_1+m_2} & 0 & 0 & 1
\end{array} \right|\\

&= \left( \frac{m_2}{m_1+m_2} \right)^3
\left| \begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{array} \right|
+ \frac{m_1 m_2^2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
0 & 0 & 1\\
1 & 0 & 0\\
0 & 1 & 0
\end{array} \right|
- \frac{m_1 m_2^2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
0 & 1 & 0\\
1 & 0 & 0\\
0 & 0 & 1
\end{array} \right|
+ \frac{m_1^2 m_2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
0 & 1 & 0\\
0 & 0 & 1\\
1 & 0 & 0
\end{array} \right|\\

&\hspace{30pt}+ \frac{m_1 m_2^2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{array} \right|
- \frac{m_1^2 m_2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
1 & 0 & 0\\
0 & 0 & 1\\
0 & 1 & 0
\end{array} \right|
+\frac{m_1^2 m_2}{(m_1+m_2)^3}
\left| \begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{array} \right|
+ \left( \frac{m_1}{m_1+m_2} \right)^3
\left| \begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{array} \right|\\

&= \frac{m_2^3}{(m_1+m_2)^3} + \frac{m_1 m_2^2}{(m_1+m_2)^3} + \frac{m_1 m_2^2}{(m_1+m_2)^3} + \frac{m_1^2 m_2}{(m_1+m_2)^3} \\
&\hspace{30pt}+ \frac{m_1 m_2^2}{(m_1+m_2)^3} + \frac{m_1^2 m_2}{(m_1+m_2)^3} + \frac{m_1^2 m_2}{(m_1+m_2)^3} + \frac{m_1^3}{(m_1+m_2)^3} \\

&=1

\end{align*}
$$

もうひとつ，以下の変換も確認しておこう．ちなみに$m_\mathrm{r}$は古典力学で出てくる換算質量（reduced mass）と呼ばれる量である．

$$
\begin{align*}
&m_1 v_1^2 + m_2 v_2^2 \\
&= \frac{m_1 m_2^2}{(m_1 + m_2)^2} v_\mathrm{r}^2 + \frac{m_1 m_2}{m_1 + m_2} \boldsymbol{v}_\mathrm{r} \cdot \boldsymbol{v}_\mathrm{m} + m_1 v_\mathrm{m}^2
+ \frac{m_1^2 m_2}{(m_1 + m_2)^2} v_\mathrm{r}^2 - \frac{m_1 m_2}{m_1 + m_2} \boldsymbol{v}_\mathrm{r} \cdot \boldsymbol{v}_\mathrm{m} + m_2 v_\mathrm{m}^2\\
&= m_\mathrm{r} v_\mathrm{r}^2 + (m_1 + m_2) v_\mathrm{m}^2, ~~
\mathrm{where}~ m_\mathrm{r} = \frac{m_1 m_2}{m_1 + m_2}
\end{align*}
$$

これで，(13)は次のように書き換えられる．

$$
\begin{align}
\overline{v_\mathrm{r}}
= \frac{(m_1 m_2)^{\frac{3}{2}}}{(2\pi k_\mathrm{B} T)^3} \int^\infty_{-\infty} \int^\infty_{-\infty} {v}_\mathrm{r} \exp\left[ \frac{-(m_\mathrm{r} v_\mathrm{r}^2 + (m_1 + m_2) v_\mathrm{m}^2)}{2k_\mathrm{B} T} \right] d\boldsymbol{v}_\mathrm{r} d\boldsymbol{v}_\mathrm{m}
\end{align}
$$

これをさらに極座標に変換する．一般に，3次元のデカルト座標系から極座標系への変換は次のように行うことが出来た．

$$
\begin{gather}
[x, ~y, ~z] = [r \sin \theta \cos \varphi, ~r \sin \theta \sin \varphi, ~r \cos \theta] \\
dxdydz = r^2 \sin \theta ~dr d\theta d\varphi
\end{gather}
$$

今回，被積分関数は（$r$に対応する）$v_\mathrm{r}, v_\mathrm{m}$のみを変数に持つので，$\theta$と$\varphi$については先に積分してしまってよい．なので，変換は次のようになる．

$$
\begin{equation}
dxdydz = r^2 dr \int_0^{\pi} \sin \theta d\theta \int_0^{2\pi} d\varphi
= 4\pi r^2 dr
\end{equation}
$$
$$
\begin{align}
% \label{eq:Bird1994_4.41}
\overline{v_\mathrm{r}}
&= \frac{2(m_1 m_2)^{\frac{3}{2}}}{\pi (k_\mathrm{B} T)^3} \int^\infty_{0} \int^\infty_{0} {v}_\mathrm{r}^3 {v}_\mathrm{m}^2 \exp\left[ \frac{-(m_\mathrm{r} v_\mathrm{r}^2 + (m_1 + m_2) v_\mathrm{m}^2)}{2k_\mathrm{B} T} \right] d{v}_\mathrm{r} d{v}_\mathrm{m} \\
&= \frac{2(m_1 m_2)^{\frac{3}{2}}}{\pi (k_\mathrm{B} T)^3}
\int^\infty_{0} {v}_\mathrm{r}^3 \exp\left[ \frac{-m_\mathrm{r} v_\mathrm{r}^2}{2k_\mathrm{B} T} \right] d{v}_\mathrm{r}
\int^\infty_{0} {v}_\mathrm{m}^2 \exp\left[ \frac{-(m_1 + m_2) v_\mathrm{m}^2}{2k_\mathrm{B} T} \right] d{v}_\mathrm{m}
\end{align}
$$

$v_\mathrm{r}, v_\mathrm{m}$それぞれの積分はガンマ関数(24)を使って表すことができる．

$$
\begin{equation}
% \label{eq:Tasaki2008_A.1.7}
\Gamma(x) = \int^\infty_0 e^{-t} t^{x-1} dt
\end{equation}
$$
$$
\begin{gather}
\int^\infty_0 x^3 \exp(-\alpha^2 x^2) dx
= \int^\infty_0 \frac{X}{\alpha^2} \exp(-X) \frac{dX}{2\alpha^2}
= \frac{\Gamma(2)}{2\alpha^4} = \frac{1}{2\alpha^4}\\
\mathrm{where}~ X = \alpha^2 x^2, ~~ dX = 2\alpha^2 x dx
\end{gather}
$$
$$
\begin{gather}
\int^\infty_0 x^2 \exp(-\alpha^2 x^2) dx
= \int^\infty_0 \frac{X^{1/2}}{\alpha} \exp(-X) \frac{dX}{2\alpha^2}
= \frac{\Gamma(\frac{3}{2})}{2\alpha^3} = \frac{\sqrt{\pi}}{4 \alpha^3}\\
\mathrm{where}~ X = \alpha^2 x^2, ~~ dX = 2\alpha^2 x dx
\end{gather}
$$

これらを用いて(23)の値を求めよう．

$$
\begin{equation}
\overline{v_\mathrm{r}} = \frac{2(m_1 m_2)^{\frac{3}{2}}}{\pi (k_\mathrm{B} T)^3} 
\frac{2 (k_\mathrm{B} T)^2}{m_\mathrm{r}^2} 
\frac{\sqrt{\pi}}{4} \frac{(2 k_\mathrm{B} T)^{\frac{3}{2}}}{(m_1 + m_2)^{\frac{3}{2}}}
= \frac{2}{\sqrt{\pi}} \left( \frac{2k_\mathrm{B} T}{m_\mathrm{r}} \right)^\frac{1}{2}
\end{equation}
$$

2つの分子がいずれも質量$m$であれば，$m_\mathrm{r} = m/2$となる．

$$
\begin{equation}
\overline{v_\mathrm{r}} 
= \sqrt{\frac{16 k_\mathrm{B} T}{\pi m}}
\end{equation}
$$

一方で，シンプルな平均速度$\overline{v}'$は（ほぼほぼ似たような手法を用いれば）次のように評価される．

$$
\begin{equation}
\overline{v'} = \sqrt{\frac{8 k_\mathrm{B} T}{\pi m}}
\end{equation}
$$

これらを(8)に代入すれば，平均自由行程（mean free path）が求められる．

$$
\begin{equation}
% \label{eq:Bird1994_4.55}
\lambda = \frac{1}{\sqrt{2} \sigma_\mathrm{T} N} = \frac{1}{\sqrt{2} \pi d^2 N}
\end{equation}
$$

## まとめと参考文献

かなり長い手順となったが，平衡状態における平均自由行程を求めることが出来た．導出の手順は[^1]を参考にした．得られた結果(32)をクヌッセン数の定義(1)に代入してやれば，クヌッセン数の具体的な求め方が分かる．変形には理想気体の状態方程式$PV = Nk_\mathrm{B}T$（$N$は分子の個数）を用いている．

$$
\begin{equation}
\mathrm{Kn} = \frac{\lambda}{L} = \frac{1}{\sqrt{2} \pi d^2 N L} =  \frac{k_\mathrm{B} T}{\sqrt{2} \pi d^2 P L}
\end{equation}
$$

[^1]: G.A. Bird "Molecular Gas Dynamics and the Direct Simulation of Gas Flows", Oxford University Press, 1994