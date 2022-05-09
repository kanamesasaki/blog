---
title: "[量子力学] 運動量"
date: "2020-04-19T00:00:00.000Z"
description: "Momentum"
tags: ["Quantum physics"]
---

## 運動量の演算子

外部場のない粒子について考えよう．このとき，系が平行移動したとしてもハミルトニアンは変化しない．演算子$\hat{O}$を平行移動の演算子とすると，このことは$\hat{O} (\hat{H} \psi) = \hat{H} (\hat{O} \psi)$と表せる．つまり，ハミルトニアンと$\hat{O}$はcommute（可換）である．

$$
\begin{equation}
\hat{O} \hat{H} - \hat{H} \hat{O} = 0
\end{equation}
$$

ここで，移動量を微小とすれば次の関係が成り立つことが分かる．ただし$a$は粒子の番号である．(2)は量子系における運動量の保存を表している．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_15.1}
(\sum_a \nabla_a) \hat{H} - \hat{H} (\sum_a \nabla_a) = 0
\end{equation}
$$

ここで，運動量の演算子を$\hat{\boldsymbol{p}}=c\nabla$とおいて，準古典的な系の波動関数$\Psi=ae^{iS/\hbar}$に作用させてみる．

$$
\begin{equation}
\hat{\boldsymbol{p}} \Psi = c\nabla (a e^{iS/\hbar}) = c\frac{i}{\hbar} a e^{iS/\hbar} \nabla S = c\frac{i}{\hbar} \Psi \nabla S
\end{equation}
$$

解析力学から$\nabla S$は運動量$p$なので，$c=\hbar/i=-i\hbar$となる．よって運動量の演算子は次のように表される．

$$
\begin{gather}
\hat{\boldsymbol{p}} = - i \hbar \nabla \\
\hat{p}_x = - i\hbar \frac{\partial}{\partial x}, ~~\hat{p}_y = - i\hbar \frac{\partial}{\partial y}, ~~ \hat{p}_z = - i\hbar \frac{\partial}{\partial z}
\end{gather}
$$

## 運動量の固有関数

運動量演算子に対応する固有関数をみつけよう．

$$
\begin{equation}
-i\hbar \frac{\partial \psi}{\partial x} = p_x \psi, ~~
-i\hbar \frac{\partial \psi}{\partial y} = p_y \psi, ~~
-i\hbar \frac{\partial \psi}{\partial z} = p_z \psi
\end{equation}
$$

ためしに，一つ目の式に$\psi = Ce^{ax}$を代入してみると，以下の関係が得られる．

$$
\begin{equation*}
-i\hbar a C e^{ax} = p_x C e^{ax} ~\to~ a = \frac{ip_x}{\hbar}, ~ \psi = C(y,z) e^{\frac{i}{\hbar}p_x x} 
\end{equation*}
$$

同様の関係が$y, z$にも成り立つので，固有関数は次のような形になるはずだ．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_15.5}
\psi = C e^{\frac{i}{\hbar} (p_x x + p_y y + p_z z)} = C e^{\frac{i}{\hbar} \boldsymbol{p} \cdot \boldsymbol{r}}
\end{equation}
$$

また，波動関数は正規化条件を満たすべきなので，これをもとに(6)の定数$C$を決定する．ただし$dV = dxdydz$である．

$$
\begin{align*}
&\int \psi_{p'} \psi_{p}^* ~dV = C^2 \int e^{\frac{i}{\hbar} (\boldsymbol{p}'-\boldsymbol{p}) \cdot \boldsymbol{r}} dV
= C^2 \left( \int e^{\frac{i}{\hbar}(p'_x - p_x)x}dx \right)
\left( \int e^{\frac{i}{\hbar}(p'_y - p_y)y}dy \right)
\left( \int e^{\frac{i}{\hbar}(p'_z - p_z)z}dz \right) \\
&= C^2 (2\pi \hbar)^3 \delta(p'_x - p_x) \delta(p'_y - p_y) \delta(p'_z - p_z)
= C^2 (2\pi \hbar)^3 \delta (\boldsymbol{p}' - \boldsymbol{p})
\end{align*}
$$

これより$C^2 (2\pi\hbar)^3 = 1$であるべきである．ただし，デルタ関数に関しては以下の表式を用いて変形している．

$$
\begin{align}
% \label{eq:LandauLifshitzQuantum_15.7}
\delta (x) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikx} dk \\
&= \frac{1}{2\pi\hbar} \int_{-\infty}^{\infty} e^{i\frac{k'}{\hbar}x} dk', ~~ \mathrm{where}~~ k = \frac{k'}{\hbar}
\end{align}
$$

よって規格化された固有関数は以下の通り．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_15.5}
\psi_p = \frac{1}{(2\pi \hbar)^{3/2}} e^{\frac{i}{\hbar} \boldsymbol{p} \cdot \boldsymbol{r}}
\end{equation}
$$

これを位置$\boldsymbol{r}$の関数としてみれば，運動量$\boldsymbol{p}/\hbar$が周波数となっている．これを用いると，ある位置のみを変数にもつ波動関数$\psi(\boldsymbol{r})$をフーリエ変換して，運動量領域での表示に変換することが出来る．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_15.5}
a(\boldsymbol{p})
\end{equation}
$$

これを用いてフーリエ逆変換してやれば，波動関数$\psi(\boldsymbol{r})$を再構成できて，運動量の固有関数で（連続的に）展開した形と見ることが出来る．

$$
\begin{equation}
\psi(r) = \int a(p) \psi_p(r) d^3p, ~~\mathrm{where}~~ a(p) = \int \psi(r) \psi_p^*(r) dV
\end{equation}
$$

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977