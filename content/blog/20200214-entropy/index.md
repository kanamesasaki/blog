---
title: "[統計力学] エントロピー"
date: "2020-02-13T00:00:00.000Z"
description: "Entropy from the statistical mechanics view point"
tags: ["Statistical mechanics"]
---

ある閉じた系が平衡状態にあるとする．いま$\Gamma(E)$はその系でエネルギーが$E$以下であるような量子状態の数を表すとすると，あるエネルギー$E$幅$dE$に含まれる状態数は$\frac{d\Gamma(E)}{dE} dE$と表される．これまでの議論から，ある量子状態$n$の見つかる確率$w_n$はその状態のエネルギー$E_n$のみの関数として$w_n = w(E_n)$のように表されるはずだ．つまりエネルギーの確率分布関数は，エネルギー$E$幅$dE$の状態数と量子状態に関する確率分布関数の積として次のように表される．

$$
\begin{equation}
% \label{landau1980statistical_7.1}
W(E) = \frac{d\Gamma(E)}{dE} w(E)
\end{equation}
$$

この関数は正規化条件をみたす．

$$
\begin{equation*}
\int W(E) dE = 1
\end{equation*}
$$

この分布関数$\Gamma(E)$は非常に急峻なピークを$E=(\overline{E})$に持つので，正規化条件を満たすように，長方形の領域で近似することが出来る．

$$
\begin{equation}
% \label{landau1980statistical_7.2}
W(\overline{E}) \Delta E = 1
\end{equation}
$$

これを，$\Delta E$の範囲に入る量子状態の数$\Delta \Gamma$，状態ひとつひとつの発生する確率$w(\overline{E})$を用いて書きなおすと(3)のようになる．

$$
\begin{equation}
% \label{landau1980statistical_7.3}
w(\overline{E}) \Delta \Gamma = 1, ~\mathrm{where}~ \Delta \Gamma = \frac{d\Gamma (\overline{E})}{dE} \Delta E
\end{equation}
$$

(3)は統計力学においてエントロピーは次のように定義される（ボルツマンの関係式）．

$$
\begin{equation}
% \label{landau1980statistical_7.7}
S = k_\mathrm{B} \log \Delta \Gamma
\end{equation}
$$

特に古典的な系においては

$$
\begin{equation}
% \label{landau1980statistical_7.8}
S = k_\mathrm{B} \log \frac{\Delta p \Delta q}{(2\pi \hbar)^s}
\end{equation}
$$

## ボルツマンの関係式

ある閉じた系が部分系1と部分系2からなっているとしよう．これらの部分系はある体積$V_1, V_2$を持ち，分子の行き来が可能で十分な時間の後，平衡状態になっているものとする．このとき系のエネルギーは$E=E_1+E_2$で$E$はgiven，$E_1, E_2$は未知である．可能な状態数は(6)のように表すことができる．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.28}
W(E) = \sum_{E_1} W_1(E_1) W_2(E - E_1)
\end{equation}
$$

ここで，系のエネルギーが$E$であるとき，部分系1のエネルギーがある値$E_1$である確率$\Theta_1(E_1)$は，単純に状態数の比で表される．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.29}
\Theta_1(E_1) = \frac{W_1(E_1) W_2(E - E_1)}{W(E)} 
\end{equation}
$$

部分系1の量子状態をエネルギーについて見れば，ある平衡値$E_1$にのみ急峻なピークを持っており，そこで$\Theta_1(E_1)$は最大値をとっているはずである．なので，(7)の対数を取って，停留の条件を求めよう．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.30}
\ln \Theta_1(E_1) = \ln W_1(E_1) + \ln W_2(E - E_1) - \ln W(E) 
\end{equation}
$$

$$
\begin{align*}
\frac{\partial}{\partial E_1} \ln \Theta_1(E_1)
&= \frac{\partial}{\partial E_1} \ln W_1(E_1) + \frac{\partial}{\partial E_1} \ln W_2(E - E_1) \\
&= \frac{\partial}{\partial E_1} \ln W_1(E_1) - \frac{\partial}{\partial E_2} \ln W_2(E_2)
\end{align*}
$$

よって(\ref{eq:Shimizu2015_4.32})が平衡値の条件（停留条件）である．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.32}
\frac{\partial}{\partial E_1} \ln W_1(E_1) = \frac{\partial}{\partial E_2} \ln W_2(E_2)
\end{equation}
$$

一方で，熱力学より平衡状態では，逆温度（あるいは温度）が等しくなる．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.33}
\frac{\partial}{\partial E_1} S_1(E_1) = \frac{\partial}{\partial E_2} S_2(E_2)
\end{equation}
$$

(9)，(10)を満たすような関係式として，以下のようなものを考える．

$$
\begin{equation}
% \label{eq:Shimizu2015_4.37}
S_i = \mathrm{coeff} \times \ln W_i + \mathrm{offset}
\end{equation}
$$

offsetはゼロ，coeffは熱力学の単位系と整合するように定めるとボルツマンの関係式が得られる．

$$
\begin{gather}
% \label{eq:Shimizu2015_4.39}
S = k_\mathrm{B} \ln W \\
k_\mathrm{B} \simeq 1.38 \times 10^{-23} ~\mathrm{J/K}
\end{gather}
$$

## まとめと参考文献

前半の議論は[^1]を，後半の議論は[^2]を参考にした．[2]は”執筆中断中のやさしいバージョン”とのことだが，同じく清水明先生著の"熱力学の基礎"とあわせて読むと，熱力学・統計力学の理解が整理されていく気がする（とはいえ，きちんと理解できたと言うにはほど遠いが...）．

[^1]: L.D. Landau, E.M. Lifshitz, “Statistical Physics, 3rd Edition Part1”, Pergamon Press, 1980
[^2]: 清水 明, "統計力学の基礎", 平成27年6月12日 バージョン, http://as2.c.u-tokyo.ac.jp/lecture_note/statmech.pdf
