---
title: "[量子力学] ブラケット記法と行列表記"
date: "2020-04-18T00:00:00.000Z"
description: "Bra-ket notation and matrix notation"
tags: ["Quantum physics"]
---

## ブラケット記法

基本的にブラケット記法と，積分による表記は次のように対応する．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_11.18}
\langle \Psi|\Phi \rangle = \int \Psi^* \Phi dq 
\end{equation}
$$

これはヒルベルト空間における内積の定義に対応しているのだが，数学では普通$(\Phi, \Psi)=\int \Phi \Psi^* dq$（$\Psi$と$\Phi$の位置が入れ替わっている）と書くはずだ．内積が満たすべき条件は以下の通りで，(1)がこれらを満たすことが分かる．

$$
\begin{align*}
\begin{array}{ll}
(\mathrm{H}.1) & \langle \Psi|\Phi \rangle = \langle \Phi|\Psi \rangle^* \\
(\mathrm{H}.2) & \langle \Psi|\alpha \Phi \rangle = \alpha \langle \Psi|\Phi \rangle,~ \mathrm{where}~\alpha \in  \mathbb{C}\\
(\mathrm{H}.3) & \langle \Psi + \Phi |\Theta \rangle = \langle \Phi|\Theta \rangle + \langle \Psi|\Theta \rangle \\
(\mathrm{H}.4) & \langle \Psi|\Psi \rangle \ge 0 \\
(\mathrm{H}.5) & \langle \Psi|\Psi \rangle = 0 \Leftrightarrow \Psi = 0 \\
\end{array}
\end{align*}
$$

次に(1)の間に演算子$X$を入れた表記について定義しておこう．

$$
\begin{equation}
\langle \Psi|X|\Phi \rangle = \int \Psi^* X \Phi dq 
\end{equation}
$$

数学で作用素$X$の随伴作用素$X^\dag$は（おおまかに）次のようなものだ．

$$
\begin{equation}
(X\Phi, \Psi) = (\Phi, X^\dag \Psi)
\end{equation}
$$

これをブラケット記法で書き直してみる．

$$
\begin{align}
\langle \Psi | X\Phi \rangle &= \langle X^\dag \Psi | \Phi \rangle \\
&= \langle \Phi | X^\dag \Psi \rangle^* \\
\langle \Psi | X| \Phi \rangle &= \langle \Phi | X^\dag| \Psi \rangle^*
\end{align}
$$

これより，もし$X$がエルミート演算子であれば，以下のように書いてしまってよいことが分かる．

$$
\begin{gather}
\langle \Psi | X| \Phi \rangle = \langle \Phi | X| \Psi \rangle^* \\
\int \Psi^* X \Phi dq = \left( \int \Phi^* X \Psi dq \right)^* = \int \Phi X^* \Psi^* dq
= \int (X^* \Psi^*) \Phi dq
\end{gather}
$$

## 行列表記

ある物理量fに対応する演算子は行列によって表すことができる．ここで物理量fは離散的なエネルギースペクトルを持ち，任意の波動関数を$\Psi = \sum_n a_n \Psi_n$のように分解することができるものとしよう．物理量fの平均は$\bar{f} = \int \Psi^* (f \Psi) dq$と定義されたが，これをスペクトルに分解した形で書き直すと次のように表される．

$$
\begin{align}
% \label{eq:LandauLifshitzQuantum_11.1}
\bar{f} &= \int \Psi^* (\hat{f} \Psi) dq = \int \left( \sum_n a_n^* \Psi_n^* \right) \hat{f} \left( \sum_m a_m \Psi_m \right) dq \\
&= \sum_n \sum_m a_n^* a_m \left( \int \Psi_n^* \hat{f} \Psi_m dq  \right) 
= \sum_n \sum_m a_n^* a_m f_{nm}(t)
\end{align}
$$

このとき$f_{nm}$は物理量fの行列である．ブラケット記法との対応は以下のように表される．

$$
\begin{equation}
% \label{eq:LandauLifshitzQuantum_11.17}
f_{nm} = \langle n | f | m \rangle
\end{equation}
$$