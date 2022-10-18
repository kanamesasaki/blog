---
title: 剛体の運動方程式
date: "2019-11-17T00:00:00.000Z"
description: "Equation of motion for a rigid body"
tags: ["Mechanics"]
---

剛体の運動を考えるためにまず必要となるのは，やはり運動方程式を立てることである．方針としては，並進・回転運動する剛体の運動エネルギーを求めて，これをもとにLagrangeの運動方程式を立てることとする．このように進めると，角運動量・慣性モーメントに対応する量が自然と現れるので，慣性モーメントは回転のしにくさを表す量，みたいなふわふわした話からスタートせずにすむ．

## 剛体の運動エネルギー

<div align=center><img src=".\rigid_body.svg" width="300" title="Reference Coordinate and Body Fixed Coordinate"></div>

ある剛体に固定されたローカルな正規直交座標系を$\mathcal{F}_\mathrm{b}$として，基底ベクトルを並べたもの（ベクトリクス）を用いて次のように表す．ここで$\vec{~}$は，基準となるような正規直交慣性座標系のベクトルであることを表す．

$$
\begin{equation}
% \label{eq:Hughes2004_B.2.3}
\mathcal{F}_\mathrm{b} \equiv 
\left[ \begin{array}{c}
\vec{b_1} \\ \vec{b_2} \\ \vec{b_3}
\end{array} \right]
\end{equation}
$$

剛体内の質点$n$の位置は，基準座標系で次のように表すことができる．$\vec{r_n}$は$\mathcal{F}_\mathrm{b}$原点から質点$n$へのベクトルで，$\boldsymbol{r}_n$はこれを$\mathcal{F}_\mathrm{b}$でのパラメタとして表したもの．ただし，今のところ$\mathcal{F}_\mathrm{b}$原点は剛体の重心である必要はないし，剛体と一緒に動いていれば別に剛体内になくてもかまわない．

$$
\begin{equation*}
\vec{R_n} = \vec{R_\mathrm{o}} + \vec{r_n} = \vec{R_\mathrm{o}} + \mathcal{F}_b^\mathrm{T} \boldsymbol{r}_n
\end{equation*}
$$

これを時間微分すれば質点の速度が得られる．

$$
\begin{align*}
\vec{V_n} &= \vec{V_\mathrm{o}} + \mathcal{F}_b^\mathrm{T} \dot{\boldsymbol{r}}_n + \dot{\mathcal{F}}_b^\mathrm{T} \boldsymbol{r}_n \\
&= \vec{V_\mathrm{o}} + \mathcal{F}_b^\mathrm{T} \dot{\boldsymbol{r}}_n + (\vec{\omega} \times {\mathcal{F}}_b^\mathrm{T}) \boldsymbol{r}_n
\end{align*}
$$

剛体では，$\mathcal{F}_\mathrm{b}$内での質点の位置は変化しないので$\dot{\boldsymbol{r}_n} = 0$．よって，質点$n$の速度は次のように表される．

$$
\begin{equation*}
\vec{V_n} = \vec{V_\mathrm{o}} + \vec{\omega} \times \vec{r_n}
\end{equation*}
$$

剛体内全ての質点について運動エネルギーを足し合わせて，剛体の運動エネルギー$T$を求める．ただし，剛体の質量は$m = \sum_n m_n$，重心は$\vec{c} = \sum_n m_n \vec{r_n}$のように表される．

$$
\begin{align*}
T &= \frac{1}{2} \sum_n m_n \vec{v_n} \cdot \vec{v_n}
= \frac{1}{2} \sum_n m_n (\vec{V_\mathrm{o}} + \vec{\omega} \times \vec{r_n}) \cdot (\vec{V_\mathrm{o}} + \vec{\omega} \times \vec{r_n}) \\
&= \frac{1}{2} \sum_n m_n \vec{V_\mathrm{o}} \cdot \vec{V_\mathrm{o}} + \sum_n \vec{V_\mathrm{o}} \cdot (\vec{\omega} \times m_n \vec{r_n}) + \frac{1}{2} \sum_n m_n (\vec{r_n} \times \vec{\omega})^T (\vec{r_n} \times \vec{\omega}) \\
&= \frac{1}{2} m \vec{V_\mathrm{o}} \cdot \vec{V_\mathrm{o}} + \vec{V_\mathrm{o}} \cdot (\vec{\omega} \times \vec{c}) + \frac{1}{2} \vec{\omega}^T \left[ \sum_n m_n (\vec{r_n}^\times)^T (\vec{r_n}^\times) \right] \vec{\omega} \\
&= \frac{1}{2} m \vec{V_\mathrm{o}} \cdot \vec{V_\mathrm{o}} + \vec{V_\mathrm{o}} \cdot (\vec{\omega} \times \vec{c}) + \frac{1}{2} \vec{\omega}^T \left[ \sum_n m_n (\boldsymbol{I}(\vec{r_n} \cdot \vec{r_n}) - \vec{r_n} \vec{r_n}^T) \right] \vec{\omega} \\
\end{align*}
$$

ここで，3項目の角速度ベクトルに挟まれた部分を，慣性モーメント$\vec{J}$と定義してやれば，剛体の運動エネルギーは次のような形で表すことが出来る．

$$
\begin{equation}
% \label{eq:kinetic_energy}
T= \frac{1}{2} m \vec{V_\mathrm{o}} \cdot \vec{V_\mathrm{o}} + \vec{V_\mathrm{o}} \cdot (\vec{\omega} \times \vec{c}) + \frac{1}{2} \vec{\omega}^T \vec{\boldsymbol{J}} \vec{\omega}
\end{equation}
$$

ちなみに，$\boldsymbol{u}^\times$はあるベクトル$\boldsymbol{u} = [u_1~u_2~u_3]$について，反対称行列（skew symmetric matrix）を作るような操作を表す．具体的な成分は(3)のようになっており，左からベクトルに作用させると外積と同様の結果を返すので，外積を行列の形に変換したものと思えばよい．

$$
\begin{equation}
% \label{eq:Hughes2004_B.2.13}
\boldsymbol{u}^\times \equiv \left[ \begin{array}{ccc} 0 & -u_3 & u_2 \\ u_3 & 0 & -u_1 \\ -u_2 & u_1 & 0 \end{array} \right]
\end{equation}
$$

剛体のエネルギーは，任意の正規直交で静止した座標系$\mathcal{F}_\mathrm{a}$で，同等な形に書くことが出来るので確認しておこう．まず，$\mathcal{F}_\mathrm{a}$と基準座標系の間には次のような関係があるものとする．

$$
\begin{equation*}
\vec{r} = \boldsymbol{r}^T \mathcal{F}_\mathrm{a}, ~~~\mathrm{where}~ \mathcal{F}_\mathrm{a} = [\vec{a_1}~\vec{a_2}~\vec{a_3}]^T
\end{equation*}
$$

また，$\vec{V_\mathrm{o}}$の$\mathcal{F}_\mathrm{a}$でのパラメタは$\boldsymbol{v}_\mathrm{o}$と表すことにする．（小文字にしたのは，見た目的に大文字が鬱陶しい気がしたのと，最終的に原点を剛体のCoMに一致させるのを見越して）

$$
\begin{equation*}
\vec{V_\mathrm{o}} = \boldsymbol{v}_\mathrm{o}^T \mathcal{F}_\mathrm{a} = \mathcal{F}_\mathrm{a}^T \boldsymbol{v}_\mathrm{o}
\end{equation*}
$$

これを(2)に代入する．

$$
\begin{align*}
T &= \frac{1}{2} m (\mathcal{F}_\mathrm{a}^T \boldsymbol{v}_\mathrm{o})^T \mathcal{F}_\mathrm{a}^T \boldsymbol{v}_\mathrm{o}
+ (\mathcal{F}_\mathrm{a}^T \boldsymbol{v}_\mathrm{o})^T (\mathcal{F}_\mathrm{a}^T (\boldsymbol{\omega \times \boldsymbol{c}}))
+ \frac{1}{2} (\mathcal{F}_\mathrm{a}^T \boldsymbol{\omega})^T (\mathcal{F}_\mathrm{a}^T \boldsymbol{J} \mathcal{F}_\mathrm{a}) (\mathcal{F}_\mathrm{a}^T \boldsymbol{\omega}) \\
&= \frac{1}{2} m \boldsymbol{v}_\mathrm{o}^T \mathcal{F}_\mathrm{a} \mathcal{F}_\mathrm{a}^T \boldsymbol{v}_\mathrm{o}
+ \boldsymbol{v}_\mathrm{o}^T \mathcal{F}_\mathrm{a} \mathcal{F}_\mathrm{a}^T (\boldsymbol{\omega \times \boldsymbol{c}})
+ \frac{1}{2} \boldsymbol{\omega}^T \mathcal{F}_\mathrm{a} \mathcal{F}_\mathrm{a}^T \boldsymbol{J} \mathcal{F}_\mathrm{a} \mathcal{F}_\mathrm{a}^T \boldsymbol{\omega} \\
&= \frac{1}{2} m \boldsymbol{v}_\mathrm{o}^T \boldsymbol{v}_\mathrm{o}
+ \boldsymbol{v}_\mathrm{o}^T (\boldsymbol{\omega \times \boldsymbol{c}})
+ \frac{1}{2} \boldsymbol{\omega}^T \boldsymbol{J} \boldsymbol{\omega}
\end{align*}
$$

上の式変形で用いた慣性モーメントの座標変換は，次のように導くことが出来る．

$$
\begin{align*}
\vec{\boldsymbol{J}} &=  \sum_n m_n (\boldsymbol{I} (\vec{r}_n \cdot \vec{r}_n) - \vec{r}_n \vec{r}_n^T)
= \sum_n m_n (\boldsymbol{I} (\boldsymbol{r}_n \cdot \boldsymbol{r}_n) - (\mathcal{F}_\mathrm{a}^T \boldsymbol{r}_n) (\mathcal{F}_\mathrm{a}^T \boldsymbol{r}_n)^T) \\
&= \sum_n m_n (\boldsymbol{I} (\boldsymbol{r}_n \cdot \boldsymbol{r}_n) - \mathcal{F}_\mathrm{a}^T \boldsymbol{r}_n \boldsymbol{r}_n^T \mathcal{F}_\mathrm{a}) \\
&= \mathcal{F}_\mathrm{a}^T \sum_n m_n (\boldsymbol{I} (\boldsymbol{r}_n \cdot \boldsymbol{r}_n) -  \boldsymbol{r}_n \boldsymbol{r}_n^T) \mathcal{F}_\mathrm{a} = \mathcal{F}_\mathrm{a}^T \boldsymbol{J} \mathcal{F}_\mathrm{a}
\end{align*}
$$

## Lagrangeの運動方程式

ここで，座標が剛体に固定されて原点が重心にある（ただし，瞬間瞬間で静止している）とすれば，運動エネルギーは並進エネルギーと回転エネルギーの和というきれいに分離された形で書ける．

$$
\begin{equation}
T = \frac{1}{2} m \boldsymbol{v}_\mathrm{o}^T \boldsymbol{v}_\mathrm{o} + \frac{1}{2} \boldsymbol{\omega}^T \boldsymbol{J} \boldsymbol{\omega}
\end{equation}
$$

ポテンシャルを$U(\boldsymbol{r}, \boldsymbol{\theta})$とすると，ラグランジアン$L = T - U$を用いて次のように回転と並進の運動方程式が得られる．

$$
\begin{align*}
\frac{d}{dt} \frac{\partial L}{\partial \boldsymbol{v_\mathrm{o}}} = \frac{\partial L}{\partial \boldsymbol{r}} &: \mathrm{Equation~of~Motion~for~Translation} \\
\frac{d}{dt} \frac{\partial L}{\partial \boldsymbol{\omega}} = \frac{\partial L}{\partial \boldsymbol{\theta}} &: \mathrm{Equation~of~Motion~for~Rotation}
\end{align*}
$$

並進の運動方程式は，(5)のように運動量の微分と力を等置した形をしている．

$$
\begin{equation}
% \label{eq:LandauLifschitz1974_34.1}
m\frac{d\boldsymbol{v}_\mathrm{o}}{dt} = - \frac{\partial U}{\partial \boldsymbol{r}}
\end{equation}
$$

回転の運動方程式は，(6)のように角運動量の微分とモーメントを等置した形になる．

$$
\begin{equation}
% \label{eq:LandauLifschitz1974_34.3}
\frac{d}{dt} (\boldsymbol{J} \boldsymbol{\omega}) = - \frac{\partial U}{\partial \boldsymbol{\theta}}
\end{equation}
$$

最終的にシミュレーションを行うために，角速度ベクトルの微分方程式の形にしたいので(6)をさらに変形しよう．角度に依存したポテンシャル（モーメント）がないとすると右辺はゼロで，左辺は次のように変形できる．

$$
\begin{equation*}
\frac{d}{dt} \frac{\partial L}{\partial \boldsymbol{\omega}} = \frac{d}{dt} (\boldsymbol{J} \boldsymbol{\omega})
= \frac{d\boldsymbol{J}}{dt} \boldsymbol{\omega} + \boldsymbol{J} \frac{d \omega}{dt} = \boldsymbol{\omega}^\times \boldsymbol{J} \boldsymbol{\omega} + \boldsymbol{J} \frac{d \omega}{dt}
\end{equation*}
$$

ちなみに，$\boldsymbol{J}$の時間微分は$\boldsymbol{\omega}^\times \boldsymbol{J}$ではないのだが，以下のように$\frac{d\boldsymbol{J}}{dt} \boldsymbol{\omega} = \boldsymbol{\omega}^\times \boldsymbol{J} \boldsymbol{\omega}$となることを確認できる．

$$
\begin{equation*}
\boldsymbol{J} + d\boldsymbol{J} = \sum_n m_n [I \{ (\boldsymbol{r}_n + \boldsymbol{\omega}^\times \boldsymbol{r}_n dt) \cdot (\boldsymbol{r}_n + \boldsymbol{\omega}^\times \boldsymbol{r}_n dt) \} - (\boldsymbol{r}_n + \boldsymbol{\omega}^\times \boldsymbol{r}_n dt) (\boldsymbol{r}_n + \boldsymbol{\omega}^\times \boldsymbol{r}_n dt)^T]
\end{equation*}
$$

$$
\begin{align*}
d\boldsymbol{J} &= \sum_n m_n [I \{ \boldsymbol{r}_n \cdot (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt) + (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt) \cdot \boldsymbol{r}_n \} - \boldsymbol{r}_n (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt)^T - (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt) \boldsymbol{r}_n^T] \\
&= \sum_n m_n [I \{ \boldsymbol{r}_n^T (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt) + (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt)^T \boldsymbol{r}_n \} - \boldsymbol{r}_n (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt)^T - (\boldsymbol{\omega}^\times \boldsymbol{r}_n dt) \boldsymbol{r}_n^T] \\
&= \sum_n m_n [I \{ \boldsymbol{r}_n^T \boldsymbol{\omega}^\times \boldsymbol{r}_n dt - \boldsymbol{r}_n^T \boldsymbol{\omega}^\times \boldsymbol{r}_n dt \} + \boldsymbol{r}_n \boldsymbol{r}_n^T \boldsymbol{\omega}^\times dt - \boldsymbol{\omega}^\times \boldsymbol{r}_n \boldsymbol{r}_n^T dt] \\
&= \sum_n m_n (\boldsymbol{r}_n \boldsymbol{r}_n^T \boldsymbol{\omega}^\times - \boldsymbol{\omega}^\times \boldsymbol{r}_n \boldsymbol{r}_n^T)dt
\end{align*}
$$

$$
\begin{gather*}
\frac{d\boldsymbol{J}}{dt} \boldsymbol{\omega} = \left( \sum_n m_n (\boldsymbol{r}_n \boldsymbol{r}_n^T \boldsymbol{\omega}^\times - \boldsymbol{\omega}^\times \boldsymbol{r}_n \boldsymbol{r}_n^T) \right) \boldsymbol{\omega} = \boldsymbol{\omega}^\times \left( -\sum_n m_n \boldsymbol{r}_n \boldsymbol{r}_n^T \right) \boldsymbol{\omega} \\
\boldsymbol{\omega}^\times \boldsymbol{J} \boldsymbol{\omega} =  \boldsymbol{\omega}^\times \left( \sum_n m_n (\boldsymbol{I} (\boldsymbol{r}_n \cdot \boldsymbol{r}_n) -  \boldsymbol{r}_n \boldsymbol{r}_n^T) \right) \boldsymbol{\omega}
= \boldsymbol{\omega}^\times \left( -\sum_n m_n \boldsymbol{r}_n \boldsymbol{r}_n^T \right) \boldsymbol{\omega}
\end{gather*}
$$

最終的に回転の運動方程式は次のように表される．

$$
\begin{equation}
% \label{eq:rotation}
\frac{d \omega}{dt} = - \boldsymbol{J}^{-1} \boldsymbol{\omega}^\times \boldsymbol{J} \boldsymbol{\omega}
\end{equation}
$$

## オイラーの運動方程式

特に，慣性モーメントが(8)のように表される時，(7)を成分ごとに分離した形(9)で表すことができる．これをオイラーの運動方程式（Euler's Motion Equations）と呼ぶ．

$$
\begin{equation}
% \label{eq:principle_axis}
\boldsymbol{J} = \left[ \begin{array}{ccc} J_{1} & 0 & 0 \\ 0 & J_{2} & 0 \\ 0 & 0 & J_{3} \end{array} \right]
\end{equation}
$$

$$
\begin{gather}
% \label{eq:LandauLifschitz1974_36.5}
\frac{d\omega_1}{dt} + \frac{J_3 - J_2}{J_1} \omega_2 \omega_3 = 0 \\
\frac{d\omega_2}{dt} + \frac{J_1 - J_3}{J_2} \omega_3 \omega_1 = 0 \\
\frac{d\omega_3}{dt} + \frac{J_2 - J_1}{J_3} \omega_1 \omega_2 = 0
\end{gather}
$$

## まとめと参考文献

以上で剛体の運動方程式を求めることが出来た．「角運動量の微分はモーメントに等しい」というようなことを前提にして，回転の運動方程式や慣性モーメントを説明していくこともあるようだが，そもそも力学である以上，並進だろうが回転だろうが同じ前提からスタートして説明できなければ，何かしらごまかしがある．ここを曖昧にして，並進運動と回転運動をばらばらに学んでしまうと，混乱の元になると思うのだ．ちなみに，前提をどう取るかはいくつか可能性があり，今回はラグランジュの運動方程式（あるいはラグランジアンを用いた最小作用の原理）を前提とした．ニュートンの運動方程式を前提としても別によいのだが「ラグランジアンを求めて一般化運動量で微分してやれば，並進も回転も同じように得られるよね」という議論のほうがより綺麗で見通しがよいと思う．このあたりの流れは[^1]を参考にしている．

もう一点．この記事では座標系を基底ベクトルを並べた形(1)で表しており，おそらくあまり馴染みのない書き方だと思う．テンソルと似てはいるのだが，姿勢運動に関しては基底ベクトルが3次元正規直交な場合だけで十分なので，その分だけ簡略化した表現というイメージだ．座標系をはっきりした形で書くので，座標系がいくつもあって相互に変換が必要な場合などには，混乱がおきにくい．この表現方法や計算のルールに関しては[^2]をもとにしているので，さらに詳しく知りたい場合には参照していただきたい．

[^1]: エリ・ランダウ, イェ・エム・リフシッツ, "力学 (増訂第3版) ランダウ=リフシッツ理論物理学教程", 東京図書, 1986

[^2]: Peter C. Hughes, "Spacecraft Attitude Dynamics", Dover Publications, 2004