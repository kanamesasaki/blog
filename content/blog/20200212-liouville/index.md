---
title: "[統計力学] Liouvilleの定理と確率密度関数"
date: "2020-02-12T00:00:00.000Z"
description: "Liouville's theorem"
tags: ["Statistical mechanics"]
---

## Liouvilleの定理の導出

位置と運動量について$1, \cdots, s$ずつ自由度のある系について考えよう．この系においてある状態$(q_1, \cdots, q_s, p_1, \cdots p_s)$であるような確率を次のように表す．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_1.3}
dw = \varrho (q_1, \cdots, q_s, p_1, \cdots p_s) dp dq 
\end{equation}
$$

ただし$\varrho$は位置と運動量の相空間で定義されており，確率密度関数と呼ばれる．ある位置と運動量のパラメタを与えると，系がその状態である可能性の密度を返すような関数である．

確率密度関数は時刻にそって変化していくと考えられるが，この変化は自由に好き勝手起こるものではなく，何らかのルールがあるはずだ．このルールとして相空間内での連続性を与える．つまり，確率密度という量は，相空間内のある場所で唐突に湧き出したり，消失したりすることはなく，流体の質量が空間を移動するように変化する，というルールだ．このように仮定すると，確率密度関数は次のような連続の式を満たすはずだ（ただ個人的には，N次元でのガウスの発散定理をちゃんと確認したことがないので，そこらへんはごまかしがある）．流体力学の連続の式の導出は別記事（[[流体力学] 連続の式](https://kanamesasaki.github.io/blog/20191121-continuity/)）を見てもらいたい．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_3.0}
\frac{\partial \varphi}{\partial t} + \nabla \cdot (\varphi \boldsymbol{v}) = 0
\end{equation}
$$

定常流れを仮定すれば，$\nabla \cdot (\varphi \boldsymbol{v}) = 0$が成り立つ．ここで，速度$\boldsymbol{v}$は相空間の座標（つまり位置と運動量）の時間微分$\dot{q}, \dot{p}$である．これより，以下のように書き直すことが出来る．

$$
\begin{gather}
\sum_{i=1}^s \left[ \frac{\partial}{\partial q_i} (\varrho \dot{q_i}) + \frac{\partial}{\partial p_i} (\varrho \dot{p_i}) \right] = 0 \\
\sum_{i=1}^s \left[ \dot{q_i} \frac{\partial \varrho}{\partial q_i} + \dot{p_i} \frac{\partial \varrho}{\partial p_i} \right] + \varrho \sum_{i=1}^s \left[ \frac{\partial \dot{q}}{\partial q_i} + \frac{\partial \dot{p}}{\partial p_i} \right] = 0
% \label{eq:LaudauLifshitzStatistical_3.1}
\end{gather}
$$

ハミルトニアンを用いると次の関係が成り立つ（とりあえず今回はそういうものとしておこう）．

$$
\begin{equation}
% \label{eq:LaudauLifshitzMechanics_40.4}
\dot{q}_i = \frac{\partial H}{\partial p_i}, ~~~ \dot{p}_i = -\frac{\partial H}{\partial q_i}, 
\end{equation}
$$

これより，(4)の2項目はゼロになることが分かる．

$$
\begin{equation}
\frac{\partial \dot{q}_i}{\partial q_i} = \frac{\partial H}{\partial q_i \partial p_i} = -  \frac{\partial \dot{p}_i}{\partial p_i}
\end{equation}
$$

(4)の1項目は$\varrho$の時間に関する全微分の形になっているので，最終的に以下の式が得られる．

$$
\begin{equation}
\frac{d\varrho}{dt} = \sum_{i=1}^s \left[ \dot{q_i} \frac{\partial \varrho}{\partial q_i} + \dot{p_i} \frac{\partial \varrho}{\partial p_i} \right] = 0
\end{equation}
$$

この式の意味を考えてみよう．系がある状態で与えられたときに，すべての自由度$(q, p)$は物理法則にしたがって時間発展していくはずだが，定常状態においては，$(q, p)$が時々刻々と変化しても，確率密度が変化しないということを言っている．これをLiouvilleの定理と呼ぶ．

## 準古典的な系の確率密度関数

ある独立な部分系1と部分系2があるとしよう，それぞれの確率密度関数は$\varrho_{1},  \varrho_{2}$とする．部分系1と部分系2を合わせた全体の確率密度関数を$\varrho_{12}$とすれば，（確率分布の組み合わせなので）$\varrho_{12} = \varrho_{1} \varrho_{2}$という関係が成り立つはずだ．これの$\log$をとれば加算の形で書くことが出来る．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.1}
\log \varrho_{12} = \log \varrho_{1} + \log \varrho_{2}
\end{equation}
$$

(8)は任意の部分系$a$で，$\log \varrho_a$が相加的だということを言っているので，$\log \varrho_a$は示量変数のみを用いて線形な形で表されるべきだ．具体的にはエネルギー$E_a$，運動量$\boldsymbol{P}_a$，角運動量$\boldsymbol{M}_a$を用いて次のような形だと予想できる．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.2}
\log \varrho_{a} = \alpha_a + \beta E_a + \boldsymbol{\gamma} \cdot \boldsymbol{P}_a + \boldsymbol{\delta} \cdot \boldsymbol{M}_a
\end{equation}
$$

最終的に系全体の確率密度関数は，示量変数のみによって表され，かつLiouvilleの定理を満たすような形であってほしい．系の状態としてエネルギー$E_0$，運動量$\boldsymbol{P}_0$，角運動量$\boldsymbol{M}_0$が与えられたとき，系がこれらの量を保存しつつ，自由度$(q, p)$があちこち動き回るとすると，この動き回る範囲で確率密度が一定であればLiouvilleの定理を満たす．これをデルタ関数を用いて次のように表そう．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.4}
\varrho = \mathrm{const} \times \delta(E-E_0) \delta(\boldsymbol{P}-\boldsymbol{P}_0) \delta(\boldsymbol{M}-\boldsymbol{M}_0)
\end{equation}
$$

(10)は「あるエネルギー$E_0$，運動量$\boldsymbol{P}_0$，角運動量$\boldsymbol{M}_0$を実現するような任意の$(q, p)$が等確率で起こる」と主張しており，つまり準古典的な系におけるミクロカノニカル分布を表している．系が全体として並進，回転運動しているのでなければ常に$\boldsymbol{P}_0=0, \boldsymbol{M}_0=0$なので，これらを(9)，(10)から，取り除いてしまえばより単純な以下の表式が得られる．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.5}
\log \varrho_{a} = \alpha_a + \beta E_a
\end{equation}
$$
$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.6}
\varrho = \mathrm{const} \times \delta(E-E_0) 
\end{equation}
$$

## まとめと参考文献

今回は準古典的な系を対象に，確率密度関数がどのような形であるべきかを議論した．簡単にまとめると「確率密度関数への要求には，確率の基本的な性質(8)とLiouvilleの定理があり，系全体の確率密度関数はエネルギーを変数にもつデルタ関数として表すと話の辻褄が合う」といったところだ．参考文献には[^1]を用いている．

[^1]: L.D. Landau, E.M. Lifshitz, "Statistical Physics, 3rd Edition Part1", Pergamon Press, 1980