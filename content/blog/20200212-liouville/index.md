---
title: "[統計力学] Liouvilleの定理と確率密度関数"
date: "2020-02-12T00:00:00.000Z"
description: "Liouville's theorem"
tags: ["Statistical mechanics"]
---

大量の分子・原子が相互作用するような，非常に多くの自由度を持つ系について考えよう．
系に含まれる対象が古典力学のような決定論的なルールに従っている場合，
原理的には大量の方程式を解いて，系の挙動を予測することができる．
ただ現実的には，アボガドロ数（$6.02214076 \times 10^{23}$）みたいな数の方程式を解いたり数値計算したりすることは，不可能と言っていいだろう．
統計力学ではこういった対象を考える際，系に含まれるひとつひとつの対象の挙動を調べる代わりに，
状態が相空間内でどういった確率密度分布を持つかということを考える．
今回はまず，確率密度がどんな形の関数で表されるかを準古典的な系をもとに考えていこう．

## Liouvilleの定理の導出

位置と運動量について$1, \cdots, s$ずつ自由度のある系について考えよう．この系においてある状態$(q_1, \cdots, q_s, p_1, \cdots p_s)$であるような確率を次のように表す．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_1.3}
dw = \varrho (q_1, \cdots, q_s, p_1, \cdots p_s) dp dq 
\end{equation}
$$

ただし$\varrho$は位置と運動量の相空間で定義されており，確率密度関数と呼ばれる．ある位置と運動量のパラメタを与えると，系がその状態である可能性の密度を返すような関数である．

確率密度関数は時刻にそって変化していくと考えられるが，この変化は自由に好き勝手起こるものではなく，何らかのルールがあるはずだ．このルールとして相空間内での連続性を与える．つまり，確率密度という量は，相空間内のある場所で唐突に湧き出したり，消失したりすることはなく，既に存在する状態から連続的に変化する，というルールだ．このように仮定すると，確率密度関数は次のような連続の式を満たすはずだ（ただ個人的には，N次元でのガウスの発散定理をちゃんと確認したことがないので，そこらへんはごまかしがある）．流体力学の連続の式の導出は別記事（[[流体力学] 連続の式](https://kanamesasaki.github.io/blog/20191121-continuity/)）を見てもらいたい．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_3.0}
\frac{\partial \varrho}{\partial t} + \nabla \cdot (\varrho \boldsymbol{v}) = 0
\end{equation}
$$

ここで，$\boldsymbol{v}$は相空間の座標（つまり位置と運動量）の時間微分$\dot{q}, \dot{p}$である．これより，以下のように書き直すことが出来る．

$$
\begin{gather}
\frac{\partial \varrho}{\partial t} + \sum_{i=1}^s \left[ \frac{\partial}{\partial q_i} (\varrho \dot{q_i}) + \frac{\partial}{\partial p_i} (\varrho \dot{p_i}) \right] = 0 \\
\frac{\partial \varrho}{\partial t} + \sum_{i=1}^s \left[ \dot{q_i} \frac{\partial \varrho}{\partial q_i} + \dot{p_i} \frac{\partial \varrho}{\partial p_i} \right] + \varrho \sum_{i=1}^s \left[ \frac{\partial \dot{q}}{\partial q_i} + \frac{\partial \dot{p}}{\partial p_i} \right] = 0
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

これより，(4)の3項目はゼロになることが分かる．

$$
\begin{equation}
\frac{\partial \dot{q}_i}{\partial q_i} = \frac{\partial H}{\partial q_i \partial p_i} = -  \frac{\partial \dot{p}_i}{\partial p_i}
\end{equation}
$$

(4)の1，2項目は$\varrho$の時間に関する全微分の形になっているので，最終的に以下の式が得られる．

$$
\begin{equation}
\frac{d\varrho}{dt} = \frac{\partial \varrho}{\partial t} + \sum_{i=1}^s \left[ \dot{q_i} \frac{\partial \varrho}{\partial q_i} + \dot{p_i} \frac{\partial \varrho}{\partial p_i} \right] = 0
\end{equation}
$$

この式の意味を考えてみよう．
$t_0$である系が与えられたときに，自由度$(q, p)$があるひとつの状態$(q_0, p_0)$に特定されていれば，その後その系は物理法則に従って時間発展していき，$t_1$での状態も原理的にはひとつ$(q_1, p_1)$に特定されるはずだ．
これを確率密度分布と併せて考えると，$\varrho(q, p, t_0)$は$(q_0, p_0)$にピークを持つデルタ関数になっていて，これを時間発展させると$\varrho(q, p, t_1)$は$(q_1, p_1)$にピークを持つデルタ関数になっていると考えられる．(7)は$t_0$でピークになっている相空間内の位置$(q_0, p_0)$は，時間がたてば相空間内の別の位置に移動しているが同じ大きさのピークを作っているよ，という至極当然のことを言っている．

いま，自由度$(q, p)$の状態がはっきりとはわからず，相空間内に確率密度$\varrho(q, p, t_0)$がある領域に分布しているものとしよう．それぞれの可能な状態は物理法則に従って時間発展していき，確率密度も分布を変えて$\varrho(q, p, t_1)$となるはずだ．このとき(7)の主張は「$t_0$において可能な状態のひとつが$(q_{0a}, p_{0a})$だったとしてこれに対応する密度が$\varrho_a$としよう．この状態が時間発展して$t_0$において$(q_{1a}, p_{1a})$となったとしても，これに対応する確率密度は$\varrho_a$のままである」ということを言っている．

これをLiouvilleの定理と呼ぶ．
時間発展に伴って，急に確率密度がどこかで増えたり減ったりしないよ，という当たり前のようなことを言っているようでもあるし，どんな多自由度の系でも状態が混ざりあって区別できなくなったりしないのか...という少し不思議な感じもする．

さて特に，系の定常状態として，確率密度関数の時間偏微分がゼロになるような場合を考えてみよう．
このとき，ある状態から時間発展して生じうる状態の確率密度は全て同じだし，さらにある状態の確率密度は時間によらず同じになる．これらを考慮すると，あるマクロなパラメタによって指定される定常状態として，ありうる全てのミクロな状態は全て同じ確率密度を持つと考えるといろいろ都合が良さそうだ．


## 準古典的な系の確率密度関数

ある独立な部分系1と部分系2があるとしよう，それぞれの確率密度関数は$\varrho_{1},  \varrho_{2}$とする．部分系1と部分系2を合わせた全体の確率密度関数を$\varrho_{12}$とすれば，（確率分布の組み合わせなので）$\varrho_{12} = \varrho_{1} \varrho_{2}$という関係が成り立つはずだ．これの$\log$をとれば加算の形で書くことが出来る．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.1}
\log \varrho_{12} = \log \varrho_{1} + \log \varrho_{2}
\end{equation}
$$

(8)は任意の部分系$a$で，$\log \varrho_a$が相加的だということを言っているので，$\log \varrho_a$は示量変数のみを用いて線形な形で表されるべきだ．具体的にはエネルギー$E_a$，運動量$\boldsymbol{P}_a$，角運動量$\boldsymbol{M}_a$を用いて次のような形だと予想しよう．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.2}
\log \varrho_{a} = \alpha_a + \beta E_a + \boldsymbol{\gamma} \cdot \boldsymbol{P}_a + \boldsymbol{\delta} \cdot \boldsymbol{M}_a
\end{equation}
$$

最終的に系全体の確率密度関数は，示量変数のみによって表され，かつLiouvilleの定理を満たすような形であってほしい．系の状態としてエネルギー$E_0$，運動量$\boldsymbol{P}_0$，角運動量$\boldsymbol{M}_0$が与えられたとき，系がこれらの量を保存しつつ，自由度$(q, p)$がとりうる範囲を考えると，この範囲で確率密度が一定であれば先ほどの議論と辻褄が合う．これをデルタ関数を用いて次のように表そう．

$$
\begin{equation}
% \label{eq:LaudauLifshitzStatistical_4.4}
\varrho = \mathrm{const} \times \delta(E-E_0) \delta(\boldsymbol{P}-\boldsymbol{P}_0) \delta(\boldsymbol{M}-\boldsymbol{M}_0)
\end{equation}
$$

系が全体として並進，回転運動しているのでなければ常に$\boldsymbol{P}_0=0, \boldsymbol{M}_0=0$なので，これらを(9)，(10)から，取り除いてしまえばより単純な以下の表式が得られる．

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

(12)は「あるエネルギー$E_0$を実現するような任意の$(q, p)$が等確率で起こる」と主張している．
なので，ここでのデルタ関数は$E$の関数で$E=E_0$にピークを持つというよりは，自由度$(q, p)$の作る相空間内で$E=E_0$という条件を満たす領域にある一定の値を持っている（それ以外はゼロ），というイメージだ．で，自由度$(q, p)$に関してこれを積分してやれば全体で1になるはずなので，次のように言い換えることもできる．

$$
\begin{equation}
\varrho = \left\{
\begin{array}{c} 
\frac{1}{\mathrm{the~number~of~states~which~satisfy~}E=E_0}, & \mathrm{where}~~E=E_0 \\
0, & \mathrm{anywhere~else}
\end{array} \right.
\end{equation}
$$
これは準古典的な系におけるミクロカノニカル分布を表している．

## まとめと参考文献

今回は準古典的な系を対象に，確率密度関数がどのような形であるべきかを議論した．簡単にまとめると「確率密度関数への要求には，確率の基本的な性質(8)とLiouvilleの定理があり，系全体の確率密度関数はエネルギーを変数にもつデルタ関数として表すと話の辻褄が合う」といったところだ．参考文献には[^1]を用いている．

[^1]: L.D. Landau, E.M. Lifshitz, "Statistical Physics, 3rd Edition Part1", Pergamon Press, 1980