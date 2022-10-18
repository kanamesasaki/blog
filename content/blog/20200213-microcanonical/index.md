---
title: "[統計力学] ミクロカノニカル分布"
date: "2020-02-13T00:00:00.000Z"
description: "Microcanonical ensemble"
tags: ["Statistical mechanics"]
---

量子的な多自由度系についても，前回（[[統計力学] Liouvilleの定理と確率密度関数](https://kanamesasaki.github.io/blog/20200422-schroedinger/)）に倣った議論をして，あるべき確率密度関数の形を考えてみよう．

まず，ある孤立した量子系がある瞬間に波動関数$\psi$によって完全に表されたとしよう．
これは何かしらの正規直行関数たちで次のように分解して書くことができるはずだ．
ここでは，以下で用いる物理量$f$の固有関数ではなく，エネルギーの固有関数になっていると考えよう．

$$
\begin{equation}
\psi = \sum_n c_n \psi_n
\end{equation}
$$

ある物理量$f$の平均値は，$\overline{f}=\int \Psi^* \hat{f} \Psi~dq $と定義された（[[量子力学] 波動関数と物理量の演算子](https://kanamesasaki.github.io/blog/20200417-wave-function/)）ので，これは次のように整理できる．

$$
\begin{align*}
% \label{eq:LaudauLifshitzStatistical_5.1}
\overline{f}&=\int \Psi^* \hat{f} \Psi~dq 
= \int \left( \sum_n c_n \Psi_n \right)^* \hat{f} \left( \sum_m c_m \Psi_m \right)~dq \\
&= \sum_n \sum_m c_n^* c_m \int \Psi_n^* \hat{f} \Psi_m~dq
\end{align*}
$$
$$
\begin{gather}
% \label{eq:LaudauLifshitzStatistical_5.2}
\overline{f} = \sum_n \sum_m c_n^* c_m f_{nm} \\
% \label{eq:LaudauLifshitzStatistical_5.3}
\mathrm{where}~~f_{nm} = \int \Psi_n^* \hat{f} \Psi_m~dq
\end{gather}
$$

さらに$c_n^*c_m$を$w_{mn}$と置けば，物理量$f$の平均値は次のように表せる．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_5.4}
\overline{f} = \sum_n \sum_m w_{mn} f_{nm}
\end{equation}
$$

これらを行列形式で考えてみよう．
作用素$\hat{f},~\hat{w}$がそれぞれ次のような行列に対応すると考える．

$$
\begin{equation*}
\hat{w}: \left[ \begin{array}{c} 
w_{11} & w_{12} & \cdots & w_{1n} \\ 
w_{21} \\
\vdots & & & \vdots\\
w_{m1} & & \cdots & w_{mn} 
\end{array} \right], ~~~~~
\hat{f}: \left[ \begin{array}{c} 
f_{11} & f_{12} & \cdots & f_{1m} \\ 
f_{21} \\
\vdots & & & \vdots \\
f_{n1} & & \cdots & f_{nm}  
\end{array} \right]
\end{equation*}
$$

すると，作用素$\hat{w}\hat{f}$であれば次のような行列になる．

$$
\begin{equation*}
(\hat{w}\hat{f}): \left[ \begin{array}{c} 
w_{11}f_{11} + w_{12}f_{21} + \cdots + w_{1n}f_{n1} & w_{11}f_{12} + w_{12}f_{22} + \cdots + w_{1n}f_{n2} & \cdots & w_{11}f_{1m} + w_{12}f_{2m} + \cdots + w_{1n}f_{nm} \\ 
w_{21}f_{11} + w_{22}f_{21} + \cdots + w_{2n}f_{n1} & w_{21}f_{12} + w_{22}f_{22} + \cdots + w_{2n}f_{n2}\\
\vdots & & & \vdots \\
w_{m1}f_{11} + w_{m2}f_{21} + \cdots + w_{mn}f_{n1} & & \cdots & w_{m1}f_{1m} + w_{m2}f_{2m} + \cdots + w_{mn}f_{nm}
\end{array} \right]
\end{equation*}
$$

これを眺めると，$\sum_m \sum_n w_{mn} f_{nm}$は，作用素$\hat{w}\hat{f}$に対応する行列の対角項を全て足し合わせたものになっていることが分かる．なので，物理量$f$は作用素$\hat{w}\hat{f}$のトレースである．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_5.5}
\overline{f} = \sum_n (\hat{w}\hat{f})_{nn} = \mathrm{tr} (\hat{w}\hat{f})
\end{equation}
$$

