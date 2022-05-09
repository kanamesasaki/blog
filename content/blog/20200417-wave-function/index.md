---
title: "[量子力学] 波動関数と物理量の演算子"
date: "2020-04-17T00:00:00.000Z"
description: "Wave function"
tags: ["Quantum physics"]
---

## 波動関数

任意の量子状態は，ある瞬間において，相空間上の波動関数（wave function）$\Psi(q)$によって表される．これの意味するところは「量子状態$\Psi(q)$を観測したとき，ある具体的な状態$q$で幅$dq$の中に現れる確率は$|\Psi(q)|^2 dq$である」となる．つまり$|\Psi|^2$は生じうる様々な量子状態に関する確率密度となっている．確率分布であるということは，この値の相空間全体での積分は(1)のように正規化されているべきだ．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_2.2}
\int |\Psi|^2 dq = 1
\end{equation}
$$

ある系の状態を表す物理量$f$の情報は，波動関数に含まれているはずだ．これを取り出すための装置として演算子$\hat{f}$を用いる．ここで$f$は離散スペクトルを持つものとし，対応する固有値$f_n$，固有関数$\Psi_n$を持つものとする．固有関数$\Psi_n$はいずれも正規化されており，直交性を満たし，完全系を作っているものとしよう．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.6}
\int \Psi_m \Psi_n^* dq = \delta_{mn}
\end{equation}
$$

すると一般に波動関数は次のように表される．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.2}
\Psi = \sum a_n \Psi_n
\end{equation}
$$

固有関数$\Psi_n$に演算子$\hat{f}$に作用させれば，$\hat{f} \Psi_n = f_n \Psi_n$という関係が成り立つが，これは状態$\Psi_n$に対応する物理量$f$の具体的な値が固有値$ f_n$であるということを意味している．一般の波動関数$\Psi$に演算子$\hat{f}$を作用させれば，次のように表される．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.9}
(\hat{f} \Psi) = \sum a_n f_n \Psi_n
\end{equation}
$$

(1)に(3)を代入すれば，波動関数$\Psi$の正規化条件は(5)のように書き換えられる．ここで，各$|a_n|^2$は対応する固有値$f_n$が得られる確率になっていることが分かる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.3}
\sum_n |a_n|^2 = 1
\end{equation}
$$

このことから，一般の状態$\Psi$における物理量$f$の平均値$\overline{f}$を次のように定義しておく．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.7}
\overline{f} =  \sum_n f_n |a_n|^2
\end{equation}
$$

これは，$a_n$を用いずに以下のように表すことができる．

$$
\begin{align}
% \label{eq:LandauLifshitz_Quantum_3.8}
\overline{f} &=  \int \Psi^* (\hat{f} \Psi) dq \\
&= \int \left( \sum_m a_m \Psi_m \right)^* \left( \sum_n a_n f_n \Psi_n \right) dq
= \sum_n a_n^* a_n f_n
\end{align}
$$

## 連続スペクトル

ここまではまず物理量の固有値が離散スペクトルを持つ場合について議論したが，物理量$f$が連続スペクトルを持つ場合についても，対応する定義づけができる．

（To Be Written）

## エルミート演算子

物理量に対応する演算子$\hat{f}$はなんでもOKというわけではなく，いくつか条件がある．$\hat{f}$が線形な演算子で，固有関数$\Psi_n$が正規直交な完全系を作ること，などをすでに仮定してしまったが，ここでは物理的な要求として，各固有状態$\Psi_n$に対応する固有値（物理量$f$の具体的な値）が実数になること，また任意の状態$\Psi$に対応する物理量の平均値が実数になることを仮定しよう．この条件は次のように表すことができる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.13}
\int \Psi^* (\hat{f} \Psi) dq = \int \Psi (\hat{f}^* \Psi^*) dq 
\end{equation}
$$

演算子の複素共役$\hat{f}^*$の意味はあまり明らかではない気がするが，とりあえずは行列とその複素共役をイメージしておこう．ところで，任意の演算子$\hat{f}$に対して，(10)を満たすような随伴作用素（Adjoint Operator）$\hat{f}^\dag$を見つけることが出来る．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.14}
\int (\hat{f} \Psi) \Phi^* dq = \int \Psi (\tilde{\hat{f}} \Phi)^* dq
~~\Leftrightarrow~~
\langle \hat{f} \Psi|\Phi \rangle = \langle \Psi|\hat{f}^{\dag} \Phi \rangle
\end{equation}
$$

ここで，$\Phi = \Psi$を(10)に代入して，(9)と比較してみよう．

$$
\begin{gather*}
\int \Psi^* \hat{f} \Psi dq = \int \Psi {\hat{f}^\dag}^* \Psi^* dq 
\end{gather*}
$$

これを見ると随伴作用素$\hat{f}^\dag$が，演算子$\hat{f}$に対応することが分かる．このような条件(11)を満たすものをエルミート演算子（Hermitian），または自己随伴（self-adjoint）と呼ぶ．つまり物理量$f$が実数値のみを取る場合，物理量の演算子$\hat{f}$はエルミート演算子となることが分かる．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_3.15}
\hat{f}^\dag = \hat{f}
\end{equation}
$$

すでに直交性の仮定はおいてしまっているが，エルミート演算子の固有関数はそれぞれ直交することが示せる．

## 可換（commute）な演算子

ここでは，2種類の演算子$\hat{f}$と$\hat{g}$について次の3つの条件が同値であることを（ざっくり）確認しておこう．

$$
\begin{gather*}
\hat{f} \mathrm{~and~} \hat{g} \mathrm{~are~commute} \\
\Updownarrow \\
\hat{f} \mathrm{~and~} \hat{g} \mathrm{~have~the~common~eigenfunctions~} \Psi_n \\
\Updownarrow \\
\mathrm{physical~quantity~} f \mathrm{~and~} g \mathrm{~are~simultaneously~measurable}
\end{gather*}
$$

交換子（commutator）を次のように定義しておく．

$$
\begin{equation}
% \label{eq:LandauLifshitz_Quantum_4.8}
\{ \hat{f}, \hat{g} \} = \hat{f} \hat{g} - \hat{g} \hat{f} 
\end{equation}
$$

（To Be Written）

[^1]: L D Landau, E.M. Lifshitz, “Quantum Mechanics (Non-relativistic Theory), Third Edition”, Butterworth-Heinemann, 1977