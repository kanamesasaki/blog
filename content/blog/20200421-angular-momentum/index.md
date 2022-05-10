---
title: "[量子力学] 角運動量"
date: "2020-04-21T00:00:00.000Z"
description: "Angular momentum"
tags: ["Quantum physics"]
---

## 角運動量

$\delta \varphi$を微小回転を表すベクトルとすれば，$r_a$の微小変化は$\delta r_a = \delta \varphi \times r_a$と表される．これを，任意の波動関数$\psi(r_1, r_2, \cdots)$に適用すると，

$$
\begin{align*}
&\psi(r_1+\delta r_1, r_2+\delta r_2, \cdots) = \psi(r_1, r_2, \cdots) + \sum_a \delta r_a \cdot \nabla_a \psi \\
&= \psi(r_1, r_2, \cdots) + \sum_a \delta \varphi \times r_a \cdot \nabla_a \psi
= (1 + \sum_a \delta \varphi \times r_a \cdot \nabla_a) \psi(r_1, r_2, \cdots) \\
&= (1 + \delta \varphi \cdot \sum_a r_a \times \nabla_a) \psi(r_1, r_2, \cdots)
\end{align*}
$$

つまり，$1 + \delta \varphi \cdot \sum_a r_a \times \nabla_a$は微小回転の演算子を表す．ちなみに，3次元ベクトル$a, b, c$に関して以下の関係が成り立つ．いずれも$a, b, c$がつくる平行六面体の体積になることを意識すれば納得できるはずだ．

$$
\begin{equation*}
(a \times b) \cdot c = (b \times c) \cdot a = (c \times a) \cdot b
\end{equation*}
$$

微小回転によってハミルトニアンは変化しないので，平行移動の場合と同様，微小回転の演算子はハミルトニアンとcommuteである．1をかける操作，ある定数ベクトル$\varphi$と内積を取る操作は，任意の演算子とcommuteなので，それらは除外してしまってよい．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.1}
\left(\sum_a r_a \times \nabla_a \right) \hat{H} - \hat{H} \left(\sum_a r_a \times \nabla_a \right) = 0
\end{equation}
$$

ハミルトニアンとcommuteなので，$\sum_a r_a \times \nabla_a$に対応する物理量は保存量である（[[量子力学] シュレーディンガー方程式](https://kanamesasaki.github.io/blog/20200422-schroedinger/)）．ここで（係数はひとまずおいておいて），$\sum_a r_a \times \nabla_a$に対応する物理量を系の角運動量，$r_a \times \nabla_a$に対応する物理量を各粒子の角運動量と呼ぼう．いま運動量の演算子が$\hat{p}=-i\hbar \nabla$であることを思い出して，係数を$-i\hbar$付け加えれば，古典力学における角運動量と対応した形で，$-i\hbar r \times \nabla = r \times \hat{p}$と書き表すことが出来る．以上の考察から，角運動量の演算子を以下のように定義しよう．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.2}
\hbar \hat{\boldsymbol{l}} = \boldsymbol{r} \times \hat{\boldsymbol{p}} = - i\hbar \boldsymbol{r} \times \nabla
\end{equation}
$$
$$
\begin{equation}
\left[ \begin{array}{c} \hbar \hat{l}_x \\ \hbar \hat{l}_y \\ \hbar \hat{l}_z \end{array} \right] = 
\left[ \begin{array}{c} x \\ y \\ z \end{array} \right] \times 
\left[ \begin{array}{c} \hat{p}_x \\ \hat{p}_y \\ \hat{p}_z \end{array} \right] = 
\left[ \begin{array}{c} y \hat{p}_z - z \hat{p}_y \\ z \hat{p}_x - x \hat{p}_z \\ x \hat{p}_y - y \hat{p}_x \end{array} \right]
\end{equation}
$$

$\hat{l}_x, \hat{l}_y, \hat{l}_z$と$x, y, z$の交換関係は以下の通り．

$$
\begin{gather}
% \label{eq:LandauLifshitzQuantum_26.3}
\begin{array}{lll}
[ \hat{l}_x, x ] = 0, & [ \hat{l}_x, y ] = iz, & [ \hat{l}_x, z ] = -iy \\ \relax
[ \hat{l}_y, x ] = -iz, & [ \hat{l}_y, y ] = 0, & [ \hat{l}_y, z ] = ix \\ \relax
[ \hat{l}_z, x ] = iy, & [ \hat{l}_z, y ] = -ix, & [ \hat{l}_z, z ] = 0
\end{array}
\end{gather}
$$

また，$\hat{l}_x, \hat{l}_y, \hat{l}_z$同士の交換関係は次のように求められる．

$$
\begin{align*}
&\hbar (\hat{l}_x \hat{l}_y - \hat{l}_y \hat{l}_x) = \hat{l}_x (z \hat{p}_x - x \hat{p}_z) - (z \hat{p}_x - x \hat{p}_z) \hat{l}_x \\
&= (\hat{l}_x z - z \hat{l}_x) \hat{p}_x - x (\hat{l}_x \hat{p}_z - \hat{p}_z \hat{l}_x)
= -iy \hat{p}_x + ix \hat{l}_y = i\hbar \hat{l}_z
\end{align*}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.6}
\begin{array}{lll}
[ \hat{l}_y, \hat{l}_z ] = i\hat{l}_x & [ \hat{l}_z, \hat{l}_x ] = i\hat{l}_y & [ \hat{l}_x, \hat{l}_y ] = i\hat{l}_z \\
\end{array}
\end{equation}
$$

系全体の角運動量に対応する演算子$\hat{L}_x, \hat{L}_y, \hat{L}_z$に関しても同様の関係(6)が成り立つ．例えば，$[ \hat{L}_y, \hat{L}_z ]$に関しては，各演算子$\hat{l}_{ax}, \hat{l}_{ay}, \hat{l}_{az}$が粒子$a$のみに対して作用することに注意して，(5)を用いて整理すると，以下の関係が得られる．

$$
\begin{equation*}
[ \hat{L}_y, \hat{L}_z ] = \sum_a \hat{l}_{ay} \sum_a \hat{l}_{az} - \sum_a \hat{l}_{az} \sum_a \hat{l}_{ay} = \sum_{a} (\hat{l}_{ay} \hat{l}_{az} - \hat{l}_{az} \hat{l}_{ay}) = i \sum_a \hat{l}_x
\end{equation*}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.8}
\begin{array}{lll}
[ \hat{L}_y, \hat{L}_z ] = i\hat{L}_x & [ \hat{L}_z, \hat{L}_x ] = i\hat{L}_y & [ \hat{L}_x, \hat{L}_y ] = i\hat{L}_z \\
\end{array}
\end{equation}
$$

演算子$\hat{L}_x, \hat{L}_y, \hat{L}_z$をもとにさらに以下のような演算子を定義しておく．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.9}
\hat{L}_2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.11}
\hat{L}_+ = \hat{L}_x + i \hat{L}_y, ~~\hat{L}_- = \hat{L}_x - i \hat{L}_y
\end{equation}
$$

これらの演算子に関する交換関係は以下の通り．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.10}
\begin{array}{lll}
[ \hat{L}_2, \hat{L}_x ] = 0 & [ \hat{L}_2, \hat{L}_y ] = 0 & [ \hat{L}_2, \hat{L}_z ] = 0 \\
\end{array}
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_26.12}
\begin{array}{lll}
[ \hat{L}_+, \hat{L}_- ] = 2 \hat{L}_z &
[ \hat{L}_z, \hat{L}_+ ] = \hat{L}_+ &
[ \hat{L}_z, \hat{L}_- ] = -\hat{L}_- \\
\end{array}
\end{equation}
$$

以下の関係も成り立つ．

$$
\begin{gather*}
\hat{L}_+ \hat{L}_- = \hat{L}_x^2 + \hat{L}_y^2 - i (\hat{L}_x \hat{L}_y - \hat{L}_y \hat{L}_x)
= \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z \\
\hat{L}_- \hat{L}_+ = \hat{L}_x^2 + \hat{L}_y^2 + i (\hat{L}_x \hat{L}_y - \hat{L}_y \hat{L}_x)
= \hat{L}_x^2 + \hat{L}_y^2 - \hat{L}_z
\end{gather*}
$$
$$
\begin{align}
% \label{eq:LandauLifshitzQuantum_26.13}
\hat{L}_2 &= \hat{L}_+ \hat{L}_- + \hat{L}_z^2 - \hat{L}_z
= \hat{L}_- \hat{L}_+ + \hat{L}_z^2 + \hat{L}_z
\end{align}
$$

## 極座標系での角運動量演算子

ここでは定義に従って，極座標表示での角運動量演算子を導出しておく．まずデカルト座標と極座標のパラメタの関係は以下の通り．

$$
\begin{equation*}
x = r \sin \theta \cos \phi, ~~ y = r \sin \theta \sin \phi, ~~ z = r \cos \theta
\end{equation*}
$$

少し天下り的だが，次のように書き換えられることが分かる．

$$
\begin{align}
% \label{eq:LandauLifshitzQuantum_26.14}
\hat{l}_z &= -i \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right)
= -i \left( - r \sin \theta \sin \phi \frac{\partial}{\partial x} + r \sin \theta \cos \phi \frac{\partial}{\partial y} \right) \\
&= -i \left( \frac{\partial x}{\partial \phi} \frac{\partial}{\partial x} + \frac{\partial y}{\partial \phi} \frac{\partial}{\partial y} + \frac{\partial z}{\partial \phi} \frac{\partial}{\partial z} \right)
= -i \frac{\partial}{\partial \phi}
\end{align}
$$
$$
\begin{align*}
\hat{l}_x &= \frac{1}{\hbar}(y \hat{p}_z - z \hat{p}_y)
= -i \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right)
= -i \left( r \sin \theta \sin \phi \frac{\partial}{\partial z} - r \cos \theta \frac{\partial}{\partial y} \right) \\
&= i \left[ \frac{\cos \phi \cos \theta}{\sin \theta} \left( -r \sin \theta \sin \phi \frac{\partial}{\partial x} + r \sin \theta \cos \phi \frac{\partial}{\partial y} + 0 \times \frac{\partial}{\partial z} \right) \right. \\
&\left. \hspace{100pt} + \sin \phi \left( r \cos \theta \cos \phi \frac{\partial}{\partial x} + r \cos \theta \sin \phi \frac{\partial}{\partial y} - r \sin \theta \frac{\partial}{\partial z} \right) \right] \\
&= i \left[ \frac{\cos \phi \cos \theta}{\sin \theta} \left( \frac{\partial x}{\partial \phi} \frac{\partial}{\partial x} + \frac{\partial y}{\partial \phi} \frac{\partial}{\partial y} + \frac{\partial z}{\partial \phi} \frac{\partial}{\partial z} \right) + \sin \phi \left( \frac{\partial x}{\partial \theta} \frac{\partial}{\partial x} + \frac{\partial y}{\partial \theta} \frac{\partial}{\partial y} + \frac{\partial z}{\partial \theta} \frac{\partial}{\partial z} \right) \right] \\
&= i \left( \frac{\cos \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + \sin \phi \frac{\partial}{\partial \theta} \right)
\end{align*}
$$
$$
\begin{align*}
\hat{l}_y &= \frac{1}{\hbar}(z \hat{p}_x - x \hat{p}_z)
= -i \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right)
= -i \left( r \cos \theta \frac{\partial}{\partial x} - r \sin \theta \cos \phi \frac{\partial}{\partial z} \right) \\
&= i \left[ \frac{\sin \phi \cos \theta}{\sin \theta} \left( -r \sin \theta \sin \phi \frac{\partial}{\partial x} + r \sin \theta \cos \phi \frac{\partial}{\partial y} + 0 \times \frac{\partial}{\partial z} \right) \right. \\
&\left. \hspace{100pt} - \cos \phi \left( r \cos \theta \cos \phi \frac{\partial}{\partial x} + r \cos \theta \sin \phi \frac{\partial}{\partial y} - r \sin \theta \frac{\partial}{\partial z} \right) \right] \\
&= i \left[ \frac{\sin \phi \cos \theta}{\sin \theta} \left( \frac{\partial x}{\partial \phi} \frac{\partial}{\partial x} + \frac{\partial y}{\partial \phi} \frac{\partial}{\partial y} + \frac{\partial z}{\partial \phi} \frac{\partial}{\partial z} \right) - \cos \phi \left( \frac{\partial x}{\partial \theta} \frac{\partial}{\partial x} + \frac{\partial y}{\partial \theta} \frac{\partial}{\partial y} + \frac{\partial z}{\partial \theta} \frac{\partial}{\partial z} \right) \right] \\
&= i \left( \frac{\sin \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} - \cos \phi \frac{\partial}{\partial \theta} \right)
\end{align*}
$$

これより，$\hat{l}_\pm$は次のように表される．

$$
\begin{align*}
\hat{l}_+ &= \hat{l}_x + i \hat{l}_y = i \left( \frac{\cos \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + \sin \phi \frac{\partial}{\partial \theta} \right) - \left( \frac{\sin \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} - \cos \phi \frac{\partial}{\partial \theta} \right) \\
&= i (\cos \phi + i \sin \phi) \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + (\cos \phi + i \sin \phi) \frac{\partial}{\partial \theta}
= i e^{i\phi}\frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + e^{i\phi} \frac{\partial}{\partial \theta}
\end{align*}
$$
$$
\begin{align*}
\hat{l}_- &= \hat{l}_x - i \hat{l}_y = i \left( \frac{\cos \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + \sin \phi \frac{\partial}{\partial \theta} \right) + \left( \frac{\sin \phi \cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} - \cos \phi \frac{\partial}{\partial \theta} \right) \\
&= i (\cos \phi - i \sin \phi) \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} - (\cos \phi - i \sin \phi) \frac{\partial}{\partial \theta}
= -i e^{-i\phi}\frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} - e^{-i\phi} \frac{\partial}{\partial \theta}
\end{align*}
$$
$$
\begin{align*}
\hat{l}_+ \hat{l}_- &= -\left( i e^{-i\phi}\frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + e^{-i\phi} \frac{\partial}{\partial \theta} \right) \left( i e^{i\phi}\frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + e^{i\phi} \frac{\partial}{\partial \theta} \right) \\
&= - i e^{-i\phi}\frac{\cos \theta}{\sin \theta} \left( - e^{i\phi} \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \phi} + ie^{i\phi} \frac{\cos \theta}{\sin \theta} \frac{\partial^2}{\partial^2 \phi} + i e^{i\phi} \frac{\partial}{\partial \theta} + e^{i\phi} \frac{\partial^2}{\partial \theta \partial \phi}\right) \\
&\hspace{12pt}+ i \frac{-1}{\sin^2 \theta} \frac{\partial}{\partial \phi} + i \frac{\cos \theta}{\sin \theta} \frac{\partial^2}{\partial \phi \partial \theta} + \frac{\partial^2}{\partial^2 \theta} \\
&= -i \frac{\partial}{\partial \phi} + \frac{\cos^2 \theta}{\sin^2 \theta} \frac{\partial^2}{\partial^2 \phi} + \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \theta} + \frac{\partial^2}{\partial^2 \theta}
\end{align*}
$$

最終的に角運動量の2乗に対応する演算子は次のように表される．これは極座標系におけるラプラシアンの，$\theta, \phi$に関する項と同じ形になっていることに注目しておこう．

$$
\begin{align*}
\hat{l}_2 &= -\hat{l}_+ \hat{l}_- +\hat{l}_z^2 + \hat{l}_z \\
&= i \frac{\partial}{\partial \phi} + \left(1 - \frac{1}{\sin^2 \theta}\right) \frac{\partial^2}{\partial^2 \phi} - \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \theta} - \frac{\partial^2}{\partial^2 \theta} - \frac{\partial^2}{\partial^2 \phi} - i \frac{\partial}{\partial \phi} \\
&= - \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial^2 \phi}- \frac{\cos \theta}{\sin \theta} \frac{\partial}{\partial \theta} - \frac{\partial^2}{\partial^2 \theta}
\end{align*}
$$

## 角運動量の固有値・固有関数

まず極座標系における$\hat{l}_z$の固有値について議論しよう．$\hat{l}_z \psi = l_z \psi$を(12, 13)を用いて極座標系で書き直すと以下の通り．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.1}
-i \frac{\partial \psi}{\partial \phi} = l_z \psi
\end{equation}
$$

(14)の解は以下の通り．

$$
\begin{equation*}
\psi = f(r, \theta) e^{i l_z \phi}
\end{equation*}
$$

波動関数の位置パラメタ1点に対して，1状態を対応させるためには，$\phi$に関して$2\pi$で周期的であるべきだ．つまり$l_z$は以下の値をとりうる．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.2}
l_z = m, ~~m = 0, \pm 1, \pm 2, \cdots
\end{equation}
$$

よって固有値$l_z$はゼロを含む正負の整数で，固有関数は(16)となる．定数係数は(17)のように規格化条件を満たすように決めてある．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.3}
\Phi_m(\phi) = \frac{1}{\sqrt{2\pi}} e^{im\phi}
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.4}
\int_0^{2\pi} \Phi_m^*(\phi) \Phi_{m'}(\phi) d\phi = \delta_{mm'}
\end{equation}
$$

複数の粒子からなる系で，$\hat{L}_z$の固有値も同様にゼロを含む正負の整数値を取る．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.5}
L_z = M, ~~M = 0, \pm 1, \pm 2, \cdots
\end{equation}
$$

次に，$\hat{L}_z$の固有関数$\psi_M$に$\hat{L}_z\hat{L}_{\pm}$を作用させてみる．ただし，交換関係(10)を用いる．

$$
\begin{equation*}
[\hat{L}_z, \hat{L}_\pm] = (\hat{L}_z \hat{L}_\pm - \hat{L}_\pm \hat{L}_z) = \pm \hat{L}_\pm
\end{equation*}
$$
$$
\begin{equation}
\hat{L}_z \hat{L}_{\pm} \psi_M = (\pm \hat{L}_{\pm} + \hat{L}_{\pm} \hat{L}_z) \psi_M
= \pm \hat{L}_{\pm} \psi_M + \hat{L}_{\pm} (M \psi_M)
= (M \pm 1) \hat{L}_{\pm} \psi_M
\end{equation}
$$

関数$\hat{L}_{\pm} \psi_M$は固有値$M \pm 1$で$\hat{L}_z$の固有関数になっている．つまり，固有関数$\psi_M$に$\hat{L}_{\pm}$を作用させると，（定数係数を除いて）固有値1だけ上げ下げした固有関数$\psi_{M\pm1}$に変換することが出来る．このことから，$\hat{L}_{\pm}$は昇降演算子(ladder operator)と呼ばれる．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.7}
\psi_{M+1} = \mathrm{const} \times \hat{L}_+ \psi_M, ~~
\psi_{M-1} = \mathrm{const} \times \hat{L}_- \psi_M
\end{equation}
$$

運動量の2乗を与える演算子$\hat{L}_2$の固有値は，ladder operatorを介して求めることができる．ある具体的な状態について考えれば，$L_z$の取りうる値には範囲がある（古典的な角運動量をイメージすれば，$L_2$は向きによらず一定の値を取るが，$L_z$は向きに依存して値を変える）．その最大値を$L$として，$M=L$の場合を考えれば，以下の関係が成り立つべきだ．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.8}
\hat{L}_+ \psi_L = 0
\end{equation}
$$

(21)に(11)を適用すると以下の関係式が得られる．

$$
\begin{equation*}
\hat{L}_- \hat{L}_+ \psi_L = (\hat{L}_2 - \hat{L}_z^2 - \hat{L}_z) \psi_L = 0
\end{equation*}
$$

それぞれの演算子とその固有値に関しては以下の関係が成り立つはずなので，最終的に(24)関係が成り立つ．

$$
\begin{equation*}
\hat{L}_2 \psi_L = L_2 \psi_L, ~~\hat{L}_z^2 \psi_L = L^2 \psi_L, ~~\hat{L}_z \psi_L = L \psi_L
\end{equation*}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.9}
L_2 = L (L+1)
\end{equation}
$$

ある状態で$L_z$の最大値が$L$であれば，このとき$L_z = M$の取りうる値は，以下のように$2L+1$だけ存在する．あるエネルギー状態と$L$が1対1に対応し，これに対して$2L+1$だけ状態が存在する，つまり$2L+1$重に縮退していることがわかる．

$$
\begin{equation}
M = -L, -L+1, \cdots, 0, \cdots, L-1, L
\end{equation}
$$

1粒子の系に関しては(22)を次のように書き直せる．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.11}
l_2 = l (l+1)
\end{equation}
$$

## 角運動量演算子の行列表示

角運動量演算子を行列表示した場合についても確認しておこう．(11)に$\psi_{M}$を適用すると，以下のように表される．

$$
\begin{equation*}
L(L+1) = (L_+)_{M,M-1} (L_-)_{M-1,M} + M^2 - M
\end{equation*}
$$

$(L_+)_{M,M-1}, (L_-)_{M-1,M}$は物理量$L_z$の固有関数に昇降演算子を作用させた場合の定数係数である．$(L_-)_{M-1,M}$は$\hat{L}_{-}$を行列表示した場合の$M-1$行$M$列の要素と言ってもよいし，ブラケット記法を用いて$(L_-)_{M-1,M} = \langle M-1 |L_-| M \rangle$と表してもよい．$(L_+)_{M,M-1}$についても同様である．

$$
\begin{align}
% \label{eq:LandauLifshitzQuantum_27.12a}
\hat{L}_+ \psi_{M-1} &= (L_+)_{M,M-1}~ \psi_M = \langle M |L_+| M-1 \rangle \psi_M \\
\hat{L}_- \psi_M &= (L_-)_{M-1,M}~ \psi_{M-1} = \langle M-1 |L_-| M \rangle \psi_{M-1}
\end{align}
$$

$\hat{L}_\pm = \hat{L}_x \pm i \hat{L}_y$で，$\hat{L}_x$と$\hat{L}_y$はエルミート演算子なので次の関係が成り立つ．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.12b}
\langle M-1 | L_- | M \rangle = \langle M | L_+ | M-1 \rangle^*
\end{equation}
$$

ぱっと見よく分からないので式変形を確認しておこう．

$$
\begin{align*}
&\langle M-1 | L_- | M \rangle = \langle M-1 | L_x - i L_y | M \rangle \\
&= \langle M-1 | L_x | M \rangle - \langle M-1 | i L_y | M \rangle
= \langle M-1 | L_x | M \rangle - i \langle M-1 | L_y | M \rangle \\
&= \langle M | L_x | M-1 \rangle^* - i \langle M | L_y | M-1 \rangle^*
= \langle M^* | L_x^* | M-1^* \rangle - i \langle M^* | L_y^* | M-1^* \rangle \\
&= \langle M^* | L_x^* | M-1^* \rangle - \langle M^* | i L_y^* | M-1^* \rangle
= \langle M^* | L_x^* - i L_y^* | M-1^* \rangle \\
&= \langle M^* | (L_x + i L_y)^* | M-1^* \rangle
= \langle M | L_x + i L_y | M-1 \rangle^*
= \langle M | L_+ | M-1 \rangle^*
\end{align*}
$$

(25, 26), (27)から以下の関係を導ける．

$$
\begin{align}
| \langle M-1 | L_- | M \rangle |^2 &= L(L+1) - M^2 + M \\
&= (L-M+1)(L+M)
\end{align}
$$
$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_27.12}
\langle M | L_+ | M-1 \rangle =\langle M-1 |L_-| M \rangle = \sqrt{(L+M)(L-M+1)}
\end{equation}
$$

もともとの定義式に代入すれば，$L_x, L_y$の行列はおおよそ次のような形になる．（ただしこれは物理量$L_z$の固有関数を小さいものから順に並べた場合であることに注意しよう．スピン演算子の場合は，逆に$+\frac{1}{2}, -\frac{1}{2}$の順で並べるのが普通．）

$$
\begin{align}
&[L_x] = \frac{1}{2} ([L_+] + [L_-]) \\
&= \frac{1}{2} \left( \left[ \begin{array}{cccccc}
0 & ~ & ~ & ~ \\
(L_+)_{2,1} & 0 & ~ & ~ \\
~ & (L_+)_{3,2} & 0 & ~ \\
~ & ~ & ~ & \ddots \\
\end{array} \right] + 
\left[ \begin{array}{cccc}
0 & (L_-)_{1,2} & ~ & ~ \\
~ & 0 & (L_-)_{2,3} & ~ \\
~ & ~ & 0 & ~ \\
~ & ~ & ~ & \ddots \\
\end{array} \right] \right)
\end{align}
$$
$$
\begin{align}
&[L_x] = \frac{-i}{2} ([L_+] - [L_-]) \\
&= \frac{-i}{2} \left( \left[ \begin{array}{cccc}
0 & ~ & ~ & ~ \\
(L_+)_{2,1} & 0 & ~ & ~ \\
~ & (L_+)_{3,2} & 0 & ~ \\
~ & ~ & ~ & \ddots \\
\end{array} \right] - 
\left[ \begin{array}{cccccc}
0 & (L_-)_{1,2} & ~ & ~ \\
~ & 0 & (L_-)_{2,3} & ~ \\
~ & ~ & 0 & ~ \\
~ & ~ & ~ & \ddots \\
\end{array} \right] \right)
\end{align}
$$

行列要素として書き直せば次のように表される．

$$
\begin{gather}
% \label{eq:LandauLifshitzQuantum_27.13}
(L_x)_{M,M-1} = (L_x)_{M-1,M} = \frac{1}{2} \sqrt{(L+M)(L-M+1)} \\
(L_y)_{M,M-1} = -(L_y)_{M-1,M} = -\frac{1}{2} i \sqrt{(L+M)(L-M+1)}
\end{gather}
$$

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977