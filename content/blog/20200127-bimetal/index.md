---
title: "[構造力学] バイメタル変形の解析解"
date: "2020-01-27T00:00:00.000Z"
description: "Basics of the bimetal deformation"
tags: ["structural mechanics"]
---

材質の異なる薄板を張り合わせると，例えば常温ではまっすぐ平らだったものが，高温・低温の状態にすると”そり”が生じてしまうことがある．これは，それぞれの材質が異なる熱膨張率を持っていることに起因する変形で，バイメタル効果と呼ばれる．

このような特性を積極的に利用した製品として，バイメタル温度計，サーモスタットのスイッチなどが挙げられる．宇宙での使用例としては，宇宙機の熱制御に用いられるサーマルルーバがある．これは，ブラインドの開閉によって宇宙機からの放熱を調節する機器で，ブラインドを回転させるアクチュエータにバイメタルが用いられる．アクチュエータそのものの温度によって自動的に開閉され，かつモーターやベアリングといった摺動部を持った部品を使わずに駆動できるのが利点である．一方で，ブラインドのブレード，アクチュエータ，それらを保持するフレームなどが必要になるので，ある程度の重量となることは避けられない．近年，使用例はそれほど多くない印象だが，彗星探査機のRosettaや，月周回衛星「かぐや」などに用いられているのは記憶に新しい．

## 曲率半径の解析解

外力・モーメントがなく均一な温度変化の下で，バイメタルの変形（曲率半径$\rho$）は解析的に表すことができるので，これを導出してみよう．図に示すように，ひずみの生じていない中立軸の位置をZ方向原点，物体底面の位置を$R$とする．

<div align="center"><img src=".\bimetal.svg" width="350" title="Deformation of Bi-metal Beam"></div>

このとき，軸力およびモーメントは次のように表される．

$$
\begin{align*}
N_x &= \int^{R+h_1}_{R} \sigma_1 b\ dz + \int^{R+h_1+h_2}_{R+h_1} \sigma_2 b\ dz \\
&= \int^{R+h_1}_{R} E_1 \left( \frac{z}{\rho} - \alpha_1 \Delta T \right) b\ dz + \int^{R+h_1+h_2}_{R+h_1} E_2 \left( \frac{z}{\rho} - \alpha_2 \Delta T \right) b\ dz \\
&= E_1 b \left[ \frac{z^2}{2\rho} - \alpha_1 \Delta T z \right]^{R+h_1}_{R} + E_2 b \left[ \frac{z^2}{2\rho} - \alpha_2 \Delta T z \right]^{R+h_1+h_2}_{R+h_1} \\
&= E_1 b \left( \frac{2Rh_1 + h_1^2}{2\rho} - \alpha_1 \Delta T h_1 \right) + E_2 b \left( \frac{2(R+h_1)h_2 + h_2^2}{2\rho} - \alpha_2 \Delta T h_2 \right)
\end{align*}
$$
$$
\begin{align*}
M_y &= \int^{R+h_1}_{R} \sigma_1 zb\ dz + \int^{R+h_1+h_2}_{R+h_1} \sigma_2 zb\ dz \\
&= \int^{R+h_1}_{R} E_1 \left( \frac{z}{\rho} - \alpha_1 \Delta T \right) zb\ dz + \int^{R+h_1+h_2}_{R+h_1} E_2 \left( \frac{z}{\rho} - \alpha_2 \Delta T \right) zb\ dz \\
&= E_1 b \left[ \frac{z^3}{3\rho} - \frac{\alpha_1 \Delta T z^2}{2} \right]^{R+h_1}_{R} + E_2 b \left[ \frac{z^3}{3\rho} - \frac{\alpha_2 \Delta T z^2}{2} \right]^{R+h_1+h_2}_{R+h_1} \\
&= E_1 b \left( \frac{3R^2h_1 + 3Rh_1^2 + h_1^3}{3\rho} - \frac{\alpha_1 \Delta T (2Rh_1 + h_1^2)}{2} \right) \\
&+ E_2 b \left( \frac{3(R+h_1)^2h_2 + 3(R+h_1)h_2^2 + h_2^3}{3\rho} - \frac{\alpha_2 \Delta T (2(R+h_1)h_2 + h_2^2)}{2} \right)
\end{align*}
$$

ただし式変形には，ひずみと曲率半径の関係(1)を用いた．

$$
\begin{equation}
% \label{eq:curvature}
\epsilon(z) = \frac{(\rho - z)d\theta - \rho d\theta}{\rho d\theta} = \frac{-z}{\rho}
\end{equation}
$$

いま外力なしの状態を考えているので，断面に生じる応力の合計（軸力）はゼロである．このことから(2)の関係が得られる．

$$
\begin{equation}
% \label{eq:force}
R (E_1 h_1 + E_2 h_2) + E_2 h_1 h_2 + \frac{1}{2} (E_1 h_1^2 + E_2 h_2^2)= \rho \Delta T (E_1 \alpha_1 h_1 + E_2 \alpha_2 h_2)
\end{equation}
$$

同様に，モーメントも断面全体でゼロとなるので以下の関係が得られる．

$$
\begin{align*}
% \label{eq:moment}
&R^2 (E_1 h_1 + E_2 h_2) + R (E_1 h_1^2 + 2 E_2 h_1 h_2 + E_2 h_2^2) + \frac{1}{3} E_1 h_1^3 + E_2 h_1^2 h_2 + E_2 h_1 h_2^2 + \frac{1}{3} E_2 h_2^3 \\
&= E_1 \alpha_1 \Delta T \rho R h_1 + E_2 \alpha_2 \Delta T \rho (R + h_1)h_2 + \frac{1}{2} E_1 \alpha_1 \Delta T \rho h_1^2 + \frac{1}{2} E_2 \alpha_2 \Delta T \rho h_2^2
\end{align*}
$$

軸力の式(2)を用いて，モーメントの式から$R$の次数を下げる．

$$
\begin{align*}
& \frac{1}{2} R (E_1 h_1^2 + 2 E_2 h_1 h_2 + E_2 h_2^2) + \frac{1}{3} E_1 h_1^3 + E_2 h_1^2 h_2 + E_2 h_1 h_2^2 + \frac{1}{3} E_2 h_2^3 \\
&= \rho E_2 \alpha_2 \Delta T h_1 h_2 + \frac{1}{2} \rho E_1 \alpha_1 \Delta T h_1^2 + \frac{1}{2} \rho E_2 \alpha_2 \Delta T h_2^2
\end{align*}
$$

以下の2式から$R$を消去すれば，曲率半径$\rho$が求められる．

$$
\begin{align*}
&R (E_1 h_1 + E_2 h_2) (E_1 {h_1}^2 + 2 E_2 h_1 h_2 + E_2 {h_2}^2) + \frac{2}{3} (E_1 h_1 + E_2 h_2) ( E_1 {h_1}^3 + 3 E_2 {h_1}^2 h_2 + 3 E_2 h_1 {h_2}^2 + E_2 {h_2}^3 ) \\
&~~= \rho \Delta T (E_1 h_1 + E_2 h_2) (2 E_2 \alpha_2 h_1 h_2 + E_1 \alpha_1 {h_1}^2 + E_2 \alpha_2 {h_2}^2) \\
&R (E_1 h_1 + E_2 h_2) (E_1 {h_1}^2 + 2 E_2 h_1 h_2 + E_2 {h_2}^2) + \frac{1}{2} (E_1 {h_1}^2 + 2 E_2 h_1 h_2 +E_2 {h_2}^2)^2 \\
&~~= \rho \Delta T (E_1 \alpha_1 h_1 + E_2 \alpha_2 h_2)(E_1 {h_1}^2 + 2 E_2 h_1 h_2 + {E_2}^2)
\end{align*}
$$

ごちゃごちゃしていますが，がんばって整理しましょう．

$$
\begin{gather*}
\rho \Delta T (E_1 h_1 + E_2 h_2) (2 E_2 \alpha_2 h_1 h_2 + E_1 \alpha_1 {h_1}^2 + E_2 \alpha_2 {h_2}^2) - \frac{2}{3} (E_1 h_1 + E_2 h_2) ( E_1 {h_1}^3 + 3 E_2 {h_1}^2 h_2 + 3 E_2 h_1 {h_2}^2 + E_2 {h_2}^3 ) \\
= \rho \Delta T (E_1 \alpha_1 h_1 + E_2 \alpha_2 h_2)(E_1 {h_1}^2 + 2 E_2 h_1 h_2 + {E_2}^2) -
\frac{1}{2} (E_1 {h_1}^2 + 2 E_2 h_1 h_2 +E_2 {h_2}^2)^2 \\
\rho \Delta T E_1 E_2 (\alpha_2 {h_1}^2 h_2 - \alpha_1 {h_1}^2 h_2 + \alpha_2 h_1 {h_2}^2 - \alpha_1 h_1 {h_2}^2)
= \frac{1}{6} ({E_1}^2 {h_1}^4 + 4 E_1 E_2 {h_1}^3 h_2 + 6 E_1 E_2 {h_1}^2 {h_2}^2 + 4 E_1 E_2 h_1 {h_2}^3 + {E_2}^2 {h_2}^4 )
\end{gather*}
$$

最終的に曲率半径$\rho$は以下のように表される．

$$
\begin{equation}
\frac{1}{\rho} = \frac{6(\alpha_2 - \alpha_1) \Delta T E_1 E_2 h_1 h_2 (h_1 + h_2)}{{E_1}^2 {h_2}^4 + 2 E_1 E_2 h_1 h_2 (2 {h_1}^2 + 3 h_1 h_2 + 2{h_2}^2) + {E_2}^2 {h_2}^4}
\end{equation}
$$

## まとめと参考文献

熱構造について書かれた教科書は少ないが，[^1]は構造に関わる幅広いトピックを扱っており，例題・コード例も豊富なので非常に参考になる．[^2]はバイメタルの変形について解析的に扱っている（おそらく）最初の論文だ．

[^1]: 小松 敬治, "機械構造弾性力学-弾性力学の基礎とMATLABによる有限要素解析-", 森北出版, 2013
[^2]: Timoshenko S,''Analysis of bimetal thermostats'', J.Opt.Sac.Am.11 233-56, 1925