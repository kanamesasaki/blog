---
title: "ベッセルの微分方程式"
date: "2019-12-19T00:00:00.000Z"
description: "Bessel's differential equation and its solutions"
tags: ["Thermal"]
---

今回は，円筒座標系において熱伝導方程式を解くための前準備として，[^1]を参考にベッセルの微分方程式についてまとめておく．

## 確定特異点

$$
\begin{equation}
% \label{eq:1983Terasawa_754}
\frac{d^2 u}{dz^2} + P(z) \frac{du}{dz} + Q(z) u = 0
\end{equation}
$$

(1)において，$P(z)$または$Q(z)$が$z=a$において極(pole)をもち，かつその点において$(z-a)P(z)$および$(z-a)^2 Q(z)$は正則であるとする．このとき極$z=a$を(1)の確定特異点(Regular Singular Point)と呼ぶ．（複素平面上ある変域内のいずれの点においても$f'(z)$が存在する場合には、関数$f(z)$はその変域内において正則であるといい、このような関数を正則関数という。また、ある変域内で正則な関数は、その辺域内において何回微分しても正則である。これをGoursatの定理という）

$p(z-a)=(z-a)P(z)$および$q(z-a)=(z-a)^2 Q(z)$とおくと，(1)は次のように書き換えられる．

$$
\begin{equation}
\frac{d^2 u}{dz^2} + \frac{p(z-a)}{z-a} \frac{du}{dz} + \frac{q(z-a)}{(z-a)^2} u = 0
\end{equation}
$$

また，$p(z-a)$および$q(z-a)$は$z=a$の周りで正則なので，以下のようにTaylor展開できる．

$$
\begin{align*}
p(z-a) &= p_0 + (z-a) p_1 + (z-a)^2 p_2 + ... \\
q(z-a) &= q_0 + (z-a) q_1 + (z-a)^2 q_2 + ...
\end{align*}
$$

(1)の解として以下の無限級数を仮定し、$\lambda$および$A_n$を定める．

$$
\begin{equation}
u=(z-a)^{\lambda}\left\{ A_0 + \sum_{n=1}^{\infty} A_n (z-a)^n \right\}
\end{equation}
$$

ただし，$u$の一階微分，二階微分はそれぞれ以下のように表される．

$$
\begin{align*}
\frac{du}{dz} &= \lambda (z-a)^{\lambda-1} \left\{ A_0 + \sum_{n=1}^{\infty} A_n (z-a)^n \right\} + (z-a)^{\lambda} \left\{ \sum_{n=1}^{\infty} n A_n (z-a)^{n-1} \right\} \\
&= (z - a)^{\lambda-1} \left\{ \lambda A_0 + \sum_{n=1}^{\infty} (\lambda + n) A_n (z-a)^n \right\} \\
\frac{d^2 u}{dz^2} &= (\lambda - 1) (z-a)^{\lambda-2} \left\{ \lambda A_0 + \sum_{n=1}^{\infty} (\lambda + n) A_n (z-a)^n \right\} + (z - a)^{\lambda-1} \left\{ \sum_{n=1}^{\infty} n (\lambda + n) A_n (z-a)^{n-1} \right\} \\
&= (z-a)^{\lambda-2} \left\{ (\lambda - 1) \lambda A_0 + \sum_{n=1}^{\infty} (\lambda + n - 1)(\lambda + n) A_n (z-a)^n \right\}
\end{align*}
$$
$$
\begin{align*}
&(z-a)^{\lambda-2} \left\{ (\lambda - 1) \lambda A_0 + \sum_{n=1}^{\infty} (\lambda + n - 1)(\lambda + n) A_n (z-a)^n \right\} \\
&~~~~+ (z - a)^{\lambda-2} p(z-a) \left\{ \lambda A_0 + \sum_{n=1}^{\infty} (\lambda + n) A_n (z-a)^n \right\} 
+ (z-a)^{\lambda-2} q(z-a) \left\{ A_0 + \sum_{n=1}^{\infty} A_n (z-a)^n \right\} = 0
\end{align*}
$$

$(z-a)$について低次の項から，整理すると以下のように表される．

$$
\begin{gather*}
A_0 \left\{ (\lambda - 1)\lambda + p_0 \lambda + q_0 \right\} = 0 \\
A_0 ( p_1 \lambda + q_1 ) + A_1 \left\{ \lambda(\lambda+1) + p_0 (\lambda+1) + q_0 \right\} = 0 \\
A_0 ( p_2 \lambda + q_2 ) + A_1 \left\{ \lambda(p_1 (\lambda+1) + q_1 \right\} + A_2 \left\{ (\lambda+1)(\lambda+2) + p_0 (\lambda+2) + q_0 \right\}= 0 \\
\vdots
\end{gather*}
$$

これは一般に次のように表すことができる．

$$
\begin{gather*}
A_0 \phi(\lambda) = 0 \\
A_1 \phi(\lambda+1) + A_0 \phi_1 (\lambda) = 0 \\
A_2 \phi(\lambda+2) + A_1 \phi_1 (\lambda+1) + A_0 \phi_2 (\lambda) = 0 \\
\vdots \\
A_n \phi(\lambda+n) + \cdots + A_0 \phi_n (\lambda) \\
\vdots
\end{gather*}
$$
$$
\begin{gather}
% \label{eq:1983Terasawa_757}
\mathrm{where} \hspace{10pt} \left\{
\begin{array} {l}
\phi(\lambda) = \lambda^2 + (p_0 - 1)\lambda + q_0 \\
\phi_n(\lambda) = \lambda p_n + q_n \hspace{10pt} (n=1,2,3,\cdots)
\end{array}
\right.
\end{gather}
$$

$(z-a)$についてゼロ次の項から，確定特異点$z=a$における指数を定める式が得られる．

$$
\begin{equation}
% \label{eq:1983Terasawa_758}
\phi(\lambda) \equiv \lambda^2 + (p_0 - 1)\lambda + q_0 = 0
\end{equation}
$$

ここでの目的は，(1)の特解を得ることなので$A_0=1$とおいてよい．$\phi(\lambda + n)$がゼロでない限りそれぞれの$\lambda$に対して，$A_1, A_2, ...$が一義的に定まり，以下の特解が得られる．一般解はこれらの線形結合として表される．

$$
\begin{align*}
u_1 &= (z-a)^{\lambda_1} \left\{ 1+ \sum_{n=1}^{\infty} A_n^{1} (z-a)^n \right\} \\
u_2 &= (z-a)^{\lambda_2} \left\{ 1+ \sum_{n=1}^{\infty} A_n^{2} (z-a)^n \right\}
\end{align*}
$$

## ベッセルの微分方程式

$$
\begin{equation}
% \label{eq:1983Terasawa_771}
\frac{d^2 y}{dz^2} + \frac{1}{z} \frac{dy}{dz} + \left( 1 - \frac{n^2}{z^2} \right) y = 0
\end{equation}
$$

ベッセルの微分方程式は(6)のように表され，$x=0$はその確定特異点である．$p(x)=1$および$q(x)=x^2-n^2$とおけて，(5)より$\lambda$が以下の式より得られる．

$$
\begin{equation}
\phi(\lambda) \equiv \lambda^2 - n^2 = 0
\end{equation}
$$

$\lambda_1=n$のとき，以下の形の特解が存在する．

$$
\begin{equation}
y = x^n (1 + A_1 x + \cdots + A_m x^m + \cdots)
\end{equation}
$$

(4)より$\phi_1=0, \phi_2=1, \phi_3=0, \phi_4=0, \cdots$なので，係数$A_0, A_1, \cdots$は以下のように求められる．

$$
\begin{equation*}
A_m = - \frac{A_{m-2}}{\phi(\lambda + m)}
= \frac{-1}{\phi(\lambda + m)} \frac{-A_{i-4}}{\phi(\lambda + m - 2) }
= \frac{-1}{\phi(\lambda + m)} \frac{-1}{\phi(\lambda + m - 2) } \cdots \frac{-A_0}{\phi(\lambda + 2) }
\end{equation*}
$$
$$
\begin{equation}
A_{2m} = \frac{(-1)^m}{m! 2^{2m} (n+1)(n+2) \cdots (n+m)}
\end{equation}
$$

このように得られた解に定数$1/2^n \Gamma(n+1)$をかけたものを，Bessel Function of the first kindと呼ぶ．$\lambda_2=-n$の解は，$n$の符号を変えれば得られて，それぞれ以下のように表される．

$$
\begin{align}
J_n(x) &= \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma (n+m+1)} \left( \frac{x}{2} \right)^{n+2m} \\
J_{-n}(x) &= \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma (-n+m+1)} \left( \frac{x}{2} \right)^{-n+2m}
\end{align}
$$

$n$が整数でない場合には，$J_n$と$J_{-n}$は別の関数となるので，(6)の一般解は次のように表される．

$$
\begin{equation}
y = C_1 J_n(x) + C_2 J_{-n}(x)
\end{equation}
$$

## 変形ベッセル関数

(6)の変数として$iz$をとると，以下のように変形できる．

$$
\begin{align*}
\frac{d^2 v(iz)}{d(iz)^2} + \frac{1}{iz} \frac{d v(iz)}{d(iz)} + \left( 1 - \frac{n^2}{(iz)^2} \right) v(iz) = 0 \\
- \frac{d^2 v(iz)}{dz^2} - \frac{1}{z} \frac{d v(iz)}{dz} + \left( 1 + \frac{n^2}{z^2} \right) v(iz) = 0
\end{align*}
$$

ただし，$i$を含む微分は次のように表すことができる．

$$
\begin{gather*}
\frac{d(iz)}{dz} \frac{d}{d(iz)} = \frac{d}{dz}, ~~~
\frac{d}{d(iz)} = - i \frac{d}{dz},~~~ \frac{d^2}{d(iz)^2} = - \frac{d^2}{dz^2}
\end{gather*}
$$

$u(z)=v(iz)$を新しくとると，Modified Bessel's Differential Equationが得られる．

$$
\begin{equation}
% \label{eq:1983Terasawa_1163}
\frac{d^2 u}{dz^2} + \frac{1}{z} \frac{d u}{dz} - \left( 1 + \frac{n^2}{z^2} \right) u = 0
\end{equation}
$$

Bessel Functionに$iz$を代入したものが特解となるが，一般的には$e^{-\frac{1}{2}\nu \pi i} J_{\nu} (iz)$を使用する．

$$
\begin{equation}
% \label{eq:1983Terasawa_1164}
I_{\nu} = \sum_{m=0}^{\infty} \frac{1}{m! \Gamma (\nu+m+1)} \left( \frac{z}{2} \right)^{\nu+2m}
\end{equation}
$$

また，$e^{\frac{1}{2}\nu \pi i} J_{\nu} (iz)$も(\ref{eq:1983Terasawa_1164})の解となる．

$$
\begin{equation}
I_{-\nu} = \sum_{m=0}^{\infty} \frac{1}{m! \Gamma (-\nu+m+1)} \left( \frac{z}{2} \right)^{-\nu+2m}
\end{equation}
$$

応用上は，$e^{\frac{1}{2}\nu \pi i} J_{\nu} (iz)$を(13)の特解としては採用せず，以下の関数を用いる．

$$
\begin{equation}
% \label{eq:1983Terasawa_1165}
K_{\nu}(z) = \frac{\pi}{2} \frac{I_{-\nu}(z) - I_{\nu}(z)}{\sin \nu \pi}
\end{equation}
$$

プログラム上で第1種変形ベッセル関数(14)，第2種変形ベッセル関数(16)を使用する場合，例えば以下のような関数を用いることが出来る．次数$\nu$は整数でなくてもよいが，実数でなくてはならない．変数$z$は複素数をとる．

$$
\begin{align*}
\mathrm{modified~Bessel~function~of~the~1st~kind,} ~~
&\mathrm{MATLAB:}\ besseli(\nu,z), ~~\mathrm{Python:}\ scipy.special.iv(\nu, z) \\
\mathrm{modified~Bessel~function~of~the~2nd~kind,} ~~
&\mathrm{MATLAB:}\ besselk(\nu,z), ~~\mathrm{Python:}\ scipy.special.kv(\nu, z)
\end{align*}
$$

[^1]: 寺沢寛一，"自然科学者のための数学概論 増訂版" ，岩波書店，1983