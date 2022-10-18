---
title: 球面調和関数
date: "2022-07-13T00:00:00.000Z"
description: ""
tags: ["Thermal"]
---

## 調和的な斉次多項式

d変数のn次斉次多項式全体の空間を$\mathbb{H}^d_n$と表そう．
この空間は以下のような形で表される多項式全体からなる．

$$
\begin{equation}
\sum_{|\boldsymbol{\alpha}|=n} a_{\boldsymbol{\alpha}} \boldsymbol{x}^{\boldsymbol{\alpha}}, ~~
a_{\boldsymbol{\alpha}} \in \mathbb{C}
\end{equation}
$$

この空間の次元は，d変数n次の条件を満たすような項の数を数えれば良い．
これはn個のモノとd-1個の仕切りを並べる問題として考えればOKだ．
例えば$d=2,~n=2$の場合，モノと仕切り並びは以下のような項に対応させられる．

$$
｜〇〇 \rightarrow x_2^2, ~~~~~
〇｜〇 \rightarrow x_1 x_2, ~~~~~
〇〇｜ \rightarrow x_1^2
$$

なので，$\mathbb{H}^d_n$の次元は次のように表される．

$$
\begin{equation}
\mathrm{dim}~\mathbb{H}^d_n = \binom{n+d-1}{d-1}
\end{equation}
$$

さて，いま特に興味があるのは，$\mathbb{H}^d_n$のうち調和的なもの，つまり$\Delta f = 0$となるようなものだ．これを$\mathbb{Y}_n(\mathbb{R}^d)$と表そう．
このような多項式について，次元$N_{n,d} = \mathrm{dim}~\mathbb{Y}_n(\mathbb{R}^d)$を求めておこう．
任意のd変数のn次斉次多項式は次のような形で書くことができる．

$$
\begin{equation}
H_n(x_1, \cdots, x_d) = \sum_{j=0}^n (x_d)^j h_{n-j}(x_1, \cdots, x_d-1), ~~
h_{n-j} \in \mathbb{H}^{d-1}_{n-j}
\end{equation}
$$

これにラプラシアンを作用させる．

$$
\begin{align*}
&\Delta H_n(x_1, \cdots, x_d) = \Delta \sum_{j=0}^n (x_d)^j h_{n-j}(x_1, \cdots, x_{d-1}) \\
&= \Delta \left\{(x_d)^0 h_{n} + (x_d)^1 h_{n-1} + \cdots 
+ (x_d)^{n-1} h_{1} + (x_d)^n h_{0} \right\} \\
&= (x_d)^0 \Delta h_{n} + (x_d)^1 \Delta h_{n-1} + \left\{2 \times 1 \times (x_d)^0 h_{n-2} + (x_d)^2 \Delta h_{n-2} \right\} + \cdots \\
&\hspace{20pt}+ \left\{(n-2) (n-3) (x_d)^{n-4} h_{2} + (x_d)^{n-2} \Delta h_{2} \right\} 
+ (n-1) (n-2) (x_d)^{n-3} h_{1}
+ n (n-1) (x_d)^{n-2} h_{0} \\
&= \sum_{j=0}^{n-2} (x_d)^j \left[ \Delta h_{n-j} + (j+2)(j+1) h_{n-j-2} \right]
\end{align*}
$$

これより，$H_n$が調和多項式になるには，以下の式が必要十分．

$$
\begin{equation}
h_{n-j-2} = - \frac{1}{(j+2)(j+1)} \Delta h_{n-j}
\end{equation}
$$

$h_n \in \mathbb{H}^{d-1}_{n}$と$h_{n-1} \in \mathbb{H}^{d-1}_{n-1}$が決まると，残りの$h_{n-2} \dots h_0$は全て決定できて，$H_n$が一意に決まる．このことから，調和的な斉次多項式の空間の次元は次のように表される．

$$
\begin{equation}
N_{n,d} = \mathrm{dim}~\mathbb{H}^{d-1}_{n} + \mathrm{dim}~\mathbb{H}^{d-1}_{n-1}
\end{equation}
$$

ここまでに考えてきた調和的な斉次多項式にさらに条件を加えて，該当する式を絞っていこう．
ここで導入するのが，$x_d$軸に関する対称性と正規性の条件だ．

$$
\begin{align}
&L_{n,d} \in \mathbb{Y}_n (\mathbb{R}^d)\\
&L_{n,d} (A \boldsymbol{x}) = L_{n,d} (\boldsymbol{x}),~~ \forall A \in \mathbb{O}^{d}(\boldsymbol{e}_d),~~ \forall \boldsymbol{x} \in \mathbb{R}^d \\
&L_{n,d} (\boldsymbol{e}_d) = 1
\end{align}
$$

ここで，$\mathbb{O}^{d}$はd次の実直行行列（ちなみに直行行列の定義は正規性を含む）の集合を表す（ちなみに，$A \in \mathbb{O}^{d}$ならば$\det(A) = \pm 1$となるが，特に1のものの集合は$\mathbb{SO}^{d}$と表す）．特に直行行列のうち，あるベクトル$\boldsymbol{\eta} \in \mathbb{R}^{d}$方向について不変なものを取り出して，次のように表す．

$$
\begin{equation}
\mathbb{O}^{d}(\boldsymbol{\eta}) \coloneqq \left\{ A \in \mathbb{O}^{d} ~\mathrm{and}~ A\boldsymbol{\eta} = \boldsymbol{\eta} \right\}
\end{equation}
$$

さて，$\mathbb{O}^{d}(\boldsymbol{e}_d)$という集合を考えると，最後の次元が不変なので行列の形は以下のようになることが分かる．

$$
\begin{equation}
A = \left( \begin{array}{cc} A_1 & \boldsymbol{0} \\ \boldsymbol{0} & 1 \end{array} \right),~~
A_1 \in \mathbb{O}^{d-1}
\end{equation}
$$

 任意のd変数のn次斉次多項式を(3)のように表せること，$x_d$が不変であることを考慮すると，対称性の条件(7)は次のように書き換えることができる．

 $$
 \begin{equation}
 h_{n-j}(A_1 \boldsymbol{x}_{d-1}) = h_{n-j}(\boldsymbol{x}_{d-1}),~~
 \forall A_1 \in \mathbb{O}^{d-1},~\boldsymbol{x}_{d-1} \in \mathbb{R}^{d-1},~ 0 \le j \le n  
 \end{equation}
 $$

一般に$f_A(\boldsymbol{x}) = f(\boldsymbol{x}),~ \forall A \in \mathbb{O}^{d}$であれば，$f(\boldsymbol{x})$は実は$|\boldsymbol{x}|$で十分表されることが分かる．

このことは次のように理解できる．大きさの等しい2つのベクトル$\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^{d},~ |\boldsymbol{x}| = |\boldsymbol{y}|$があったとき，ある直行行列$A \in \mathbb{O}^{d}$を見つけて，$A\boldsymbol{x} = \boldsymbol{y}$とすることができる．なので，任意の$A \in \mathbb{O}^{d}$について$f_A(\boldsymbol{x}) = f(\boldsymbol{x})$であれば，$f(\boldsymbol{x}) = f(\boldsymbol{y})$となることが分かる．

いま，$h_{n-j}$は斉次多項式に含まれる前提なので，これは$|\boldsymbol{x}_{d-1}|$の偶数乗からなるはずだ．

$$
\begin{equation}
h_{n-j} (\boldsymbol{x}_{d-1}) = 
\left\{ \begin{array}{ll} 
c_k |\boldsymbol{x}_{d-1}|^{2k} & \mathrm{if}~n-j = 2k \\ 
0 & \mathrm{if}~n-j = 2k + 1
\end{array} \right.
\end{equation} 
$$

これを用いれば，$L_{n,d}$は次のように表される．

$$
\begin{equation}
L_{n,d}(\boldsymbol{x}) = \sum_{k=0}^{[n/2]} c_k |\boldsymbol{x}_{d-1}|^{2k} (x_d)^{n-2k}
\end{equation}
$$
















