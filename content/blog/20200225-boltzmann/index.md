---
title: "[統計力学] ボルツマン方程式"
date: "2020-02-25T00:00:00.000Z"
description: "Boltzmann equation"
tags: ["Statistical mechanics"]
---

引き続き蒸発・凝縮が起こっているようなliquid-vapor interfaceについて考えよう．これまで分子の速度分布としてマクスウェル・ボルツマン分布をもとに議論してきたが，これは平衡状態にある系において成り立つものである．実際の蒸発・凝縮が起こっている領域では，局所平衡状態にある液相と局所平衡状態にある気相の間に，（非常に薄い）遷移層とKnudsen Layerと呼ばれる非平衡な領域があり，とくにKnudsen Layerでの物理は全体としての蒸発・凝縮現象を理解する上で無視できない．非平衡な領域における速度分布を知るためには，速度分布関数が満たすべき偏微分方程式を物理的な考察をもとに立てて，解いてやらなければならない．そこで最初の目標は，そのような偏微分方程式を導出することである．

今回は，先にゴールとなる式の形を示しておく．ボルツマン方程式(1)は流体を構成する分子の速度分布関数が満たすべき方程式で，粒子同士の衝突の影響を表す衝突項$C(f)$を含んでいる．

$$
\begin{gather}
% \label{eq:Boltzmann}
\frac{\partial f}{\partial t} + \boldsymbol{v} \cdot \nabla f + \boldsymbol{F} \cdot \frac{\partial f}{\partial p} = C(f) \\
C(f) = \int w' (f'f_1' - ff_1)~d\Gamma_1 d\Gamma' d\Gamma_1'
\end{gather}
$$

## ボルツマン方程式の導出

分子の確率分布関数$f(t, q, p)$を時間，位置，運動量の関数として全微分を取ると，(3)式が得られる．

$$
\begin{equation}
% \label{landau1981kinetics_3.3}
\frac{df}{dt} = \frac{\partial f}{\partial t} + \boldsymbol{v} \cdot \nabla f + \boldsymbol{F} \cdot \frac{\partial f}{\partial p}
\end{equation}
$$

確率分布関数$f(t, q, p)$の全微分について式変形を確認しておこう．

$$
\begin{gather*}
df = \frac{\partial f}{\partial t}dt + \frac{\partial f}{\partial q_i} dq_i + \frac{\partial f}{\partial p} dp \\
\frac{df}{dt} = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial q_i} \frac{dq_i}{dt} + \frac{\partial f}{\partial p} \frac{dp}{dt}
= \frac{\partial f}{\partial t} + \boldsymbol{v} \cdot \nabla f - \nabla U \cdot \frac{\partial f}{\partial p}
\end{gather*}
$$

ただし，運動量の微分とポテンシャルのgradientの関係は以下の通りである．

$$
\begin{gather*}
E = K + U = \frac{p_i^2}{2m} + U(q_i) \\
\frac{p_i}{m} dp_i + \frac{\partial U}{\partial q_i} dq_i = 0 \\
p_i \frac{dp_i}{dt} + \frac{\partial U}{\partial q_i} \left( m \frac{dq_i}{dt} \right) = 0 \\
\frac{dp_i}{dt} + \frac{\partial U}{\partial q_i} = 0
\end{gather*}
$$

もし平衡状態であれば，確率分布関数は一定で$df/dt=0$となるべきだが，今回は確率分布関数が一定とはならず，分子の衝突の影響分$df/dt=C(f)$だけ変化する，と考えよう．これを表しているのが(1)の1式目である．次に2式目の衝突項$C(f)$について考えよう．

2つの分子が衝突する状況を考える．一方が状態$\Gamma$もう一方が状態$\Gamma_1$で，それぞれ$d\Gamma, d\Gamma_1$の幅を持つとする．$f(t,\boldsymbol{r},\Gamma)d\Gamma$はある時間，ある位置，状態$\Gamma$幅$d\Gamma$内の，単位体積内の分子数を表す．これより，単位時間，単位体積あたり，$\Gamma, \Gamma_1 \to \Gamma', \Gamma_1'$という状態変化を伴う衝突が起こる回数は次のように表される．

$$
\begin{equation}
% \label{landau1981kinetics_2.1}
w(\Gamma, \Gamma_1 \to \Gamma', \Gamma_1')~f f_1~d\Gamma d\Gamma_1 d\Gamma' d\Gamma_1'
\end{equation}
$$

衝突により値$\Gamma$幅$d\Gamma$からいなくなる分子の個数を"losses"と呼ぶことにすると

$$
\begin{equation*}
\mathrm{losses} = dV d\Gamma \int w(\Gamma, \Gamma_1 \to \Gamma', \Gamma_1')~ff_1~d\Gamma_1 d\Gamma' d\Gamma_1'
\end{equation*}
$$

逆に，衝突により値$\Gamma$幅$d\Gamma$に入ってくる分子の個数を"gains"と呼ぶことにする．

$$
\begin{equation*}
\mathrm{gains} = dV d\Gamma \int w(\Gamma', \Gamma_1' \to \Gamma, \Gamma_1)~f'f_1' d\Gamma_1 d\Gamma' d\Gamma_1'
\end{equation*}
$$

これらの差をとると，衝突による個数分布の変化がわかる．

$$
\begin{gather*}
dV d\Gamma \int (w'f'f_1' - wff_1)~d\Gamma_1 d\Gamma' d\Gamma_1' \\
\mathrm{where} \hspace{10pt} w = w(\Gamma, \Gamma_1 \to \Gamma', \Gamma_1'), ~ w' = w(\Gamma', \Gamma_1' \to \Gamma, \Gamma_1)
\end{gather*}
$$

$w(\Gamma_1,\Gamma_2 \to \Gamma_1',\Gamma_2')$は衝突に伴って状態$(\Gamma_1,\Gamma_2)$から$(\Gamma_1',\Gamma_2')$に移行する条件付確率を表すが，古典的な衝突に限って議論すると衝突に伴う状態変化は一意に定まる．つまり，衝突前状態をある値$(\Gamma_{1a},\Gamma_{2a})$と固定すると，$w(\Gamma_{1a},\Gamma_{2a} \to \Gamma_1',\Gamma_2')$は古典力学によって定まる衝突後状態$(\Gamma_{1a}',\Gamma_{2a}')$にピークを持つ$\delta$関数となる．また，衝突後状態を$(\Gamma_{1a}',\Gamma_{2a}')$に固定すると，$w(\Gamma_1,\Gamma_2 \to \Gamma_{1a}',\Gamma_{2a}')$は衝突前状態$(\Gamma_{1a},\Gamma_{2a})$にピークを持つ$\delta$関数となる．

## まとめと参考文献

導入部分の議論は[^1] [^2]を参考に，ボルツマン方程式の導出は[^3]を参考にした．

[^1]: Shigeo Fujikawa, Takeru Yano, Masao Watanabe, "Vapor-Liquid Interfaces, Bubbles and Droplets Fundamentals and Applications", Springer-Verlag Berlin Heidelberg, 2011
[^2]: 藤川 重雄, "気液界面での質量・運動量・エネルギーの輸送 : 分子動力学,分子気体力学,実験の融合(第1章)蒸発・凝縮の研究の意義と課題", ながれ : 日本流体力学会誌 = Nagare : journal of Japan Society of Fluid Mechanics 33(2), 171-178, 2014-04, https://ci.nii.ac.jp/naid/110009816396/en/
[^3]: E.M. Lifshitz, L.P. Pitaevskii, "Physical Kietics" Elsevier Ltd, 1981