---
title: SMA（形状記憶合金）ワイヤのモデル化：Traditional M-A-S Model
date: "2022-07-08T00:00:00.000Z"
description: ""
tags: ["Statistical physics"]
---

非常にいい加減な説明だが，SMA（形状記憶合金）材料は適当な温度下で変形させたとき，弾性変形よりもずっと大きなひずみを生じて，除荷してもそのままのひずみが残る．その後，変形したSMA材料を加熱してやると，シュッと元の形に戻るというような不思議な材料だ．実用例としては，ステントとか曲げても元に戻るメガネとかがよく知られていて，宇宙分野ではFrangibolt®というアクチュエータが有名だったりする．
SMAの熱と機械的な特性をある程度理解するには，熱力学，統計力学と弾性力学あたりにそこそこ明るい必要があるので結構大変だ．今回は，比較的単純な1次元の場合（なので弾性力学はあんまりいらない）について考えて，SMAワイヤのモデルを作ってみよう．

## ヘルムホルツの自由エネルギー（HFE）
唐突だが，熱力学においてヘルムホルツの自由エネルギーは，エネルギー$U(S,V,N)$をエントロピー$S$についてルジャンドル変換したもので，次のように定義された．

$$
\begin{gather}
F \equiv U(S,V,N) - ST, \mathrm{~at~} S \mathrm{~such~that~} T(S,V,N) = T \\
\mathrm{where~~} \frac{\partial U(S,V,N)}{\partial S} = T(S,V,N)
\end{gather}
$$

SMAについて考える場合，熱力学でよく扱われる気体と異なる点として，単位体積または微小体積に注目して議論を進める．これは，SMAの物体全体に働く仕事ではなく，ひずみエネルギーと整合性がとれるように，エネルギーの議論を進めたいからからだ．
なので，エネルギーの変数として体積ではなくとひずみをとり，さらにエントロピーを扱うのは不便なので，温度とひずみの関数として表されたヘルムホルツの自由エネルギー$F(T,\epsilon)$が重要なエネルギーの量となる．

SMAのエネルギー$U$は，雰囲気としては，ひずみエネルギーと熱力学的なエネルギーの和で，それらがSMAの結晶構造に関連した関数になっていそうなのだが，ミクロな考察からはそう簡単に形は推定できない．
なので，SMAの実験的な特徴から，エネルギーの関数がどのような形であるべきかを考てみよう．これは，いわゆるランダウ理論のアプローチだ．エネルギーの関数は扱いやすさから，温度とひずみの関数としてヘルムホルツの自由エネルギー$F(T,\epsilon)$を考える（ランダウ関数といった方が適切なのかもしれない）．このとき，例えば以下のような特徴が考えられる（See also [^4]）．

1. 高温では無変形のオーステナイトが安定で，$F$はひとつ極小をもつ
2. 低温ではマルテンサイトが安定で，伸びてる状態と縮んでる状態のふたつの極小値をとる
3. 中間的な温度では，オーステナイトの安定状態もマルテンサイトの安定状態もあって，三つの極小値を持つことがある
4. ひずみの絶対値が大きくなれば，$F$もいくらでも大きくなる

このような特徴を持つ$F(T,\epsilon)$を構成する方法はいくつも提案されているが，今回はM-A-S(Müller, Aschenbach, and Seelecke)モデルについて見ていこう．

$$
\begin{equation}
\psi(\epsilon, T) = \left\{ \begin{array}{ll} 
    \psi_{-}(\epsilon, T) \coloneqq \frac{E_{m}}{2}(\epsilon + \epsilon_R)^2 & -\infty < \epsilon \le \epsilon_{-a}(T) + \beta_{\pm}(T)\\
    \psi_{-}^B(\epsilon, T) \coloneqq A(T) \epsilon^2 - B(T) \epsilon + C(T) & \epsilon_{-a}(T) < \epsilon < \epsilon_{a-}(T) \\ 
    \psi_{a}(\epsilon, T) \coloneqq \frac{E_{a}}{2} \epsilon^2 + \beta(T)& \epsilon_{a-}(T) \le \epsilon \le \epsilon_{a+}(T) \\
    \psi_{+}^B(\epsilon, T) \coloneqq A(T) \epsilon^2 + B(T) \epsilon + C(T) & \epsilon_{a+}(T) < \epsilon < \epsilon_{+a}(T) \\
    \psi_{+}(\epsilon, T) \coloneqq \frac{E_{m}}{2}(\epsilon - \epsilon_R)^2 & \epsilon_{+a}(T) \le \epsilon < \infty
  \end{array} \right.
\end{equation}
$$

| Parameter  | Description |
|----------|:-------------|
| $E_a$ | Elastic modulus while in the austenite phase |
| $E_m$ | Elastic modulus while in the martensite phase |
| $\epsilon_R$ | Residual strain |
| $T_H$ | The higher test temperature |
| $T_L$ | The lower test temperature |
| $\sigma_{a+}^H$ | Forward tensile transformation stress at $T_H$ |
| $\sigma_{+a}^H$ | Reverse tensile transformation stress at $T_H$ |
| $\sigma_{a+}^L$ | Forward tensile transformation stress at $T_L$ |
| $\sigma_{\Delta}$ | Hysteresis width (difference between the forward and reverse transformation stress at $T_H$) |

基本的なアイデアは，純粋なマルテンサイト相・オーステナイト相の自由エネルギーをそれぞれ作って，それらを$C_1$連続になるように，ひずみに関して2次の関数でつなげてみよう，というものだ．
マルテンサイト相は引っ張り圧縮について対称と仮定して，CFE(chemical free energy)は相対量のみに注目することでオーステナイト相のみに$\beta(T)$として付加されている．

温度特性に関する仮定について確認しておこう．
オーステナイトからマルテンサイトへの転移の起こる応力$\sigma_{a+}$を温度に関して1次関数として表す．
逆向きの転移が起こる応力$\sigma_{+a}$は，$\sigma_{a+}$より$\sigma_{\Delta}$だけ大きいものとし，$\sigma_{\Delta}$の温度特性は考慮しない．これらをまとめると以下のように表される．

$$
\begin{gather}
\sigma_{a+}(T) = \mathrm{max} \left( \sigma_{a+}^L + \frac{\sigma_{a+}^H - \sigma_{a+}^L}{T_H - T_L} (T-T_L),~0 \right) \\
\sigma_{+a}(T) = \sigma_{a+}(T) - \sigma_{\Delta},~~ 
\mathrm{where} ~~\sigma_{\Delta} =  \sigma_{+a}^H - \sigma_{a+}^H
\end{gather}
$$

転移の起こる応力に対応するひずみは以下のように表される．

$$
\begin{gather}
\epsilon_{a+}(T) = \frac{\sigma_{a+}(T)}{E_a} \\
\epsilon_{+a}(T) = \frac{\sigma_{+a}(T)}{E_m} + \epsilon_R
\end{gather}
$$

$C_1$連続の仮定から，条件を書き出して$A(T),~B(T),~C(T),~\beta(T)$を決めることができる．対称性を仮定しているので，引っ張り側についてのみ考える．

$$
\begin{gather*}
\begin{array}{cl}
\psi_{a}(\epsilon_{a+},T) = \psi_{+}^B(\epsilon_{a+},T) &
\frac{E_a}{2} \epsilon_{a+}^2 + \beta(T) = A(T) \epsilon_{a+}^2 + B(T) \epsilon_{a+} + C(T) \\
\psi_{+}^B(\epsilon_{+a},T) = \psi_{+}(\epsilon_{+a},T) &
\frac{E_{m}}{2}(\epsilon_{+a} - \epsilon_R)^2 = A(T) \epsilon_{+a}^2 + B(T) \epsilon_{+a} + C(T) \\
\frac{\partial \psi_{a}}{\partial \epsilon}(\epsilon_{a+},T) = \frac{\partial \psi_{+}^B}{\partial \epsilon}(\epsilon_{a+},T) &
E_a \epsilon_{a+} + \beta(T) = 2A(T) \epsilon_{a+} + B(T) \\
\frac{\partial \psi_{+}^B}{\partial \epsilon}(\epsilon_{+a},T) = \frac{\partial \psi_{+}}{\partial \epsilon}(\epsilon_{-a},T) &
E_{m}(\epsilon_{+a} + \epsilon_R) = 2A(T) \epsilon_{+a} + B(T)
\end{array}

\end{gather*}
$$

これを整理すると以下のようになるらしい．

$$
\begin{align}
A(T) &= \frac{\sigma_{\Delta}}{2(\epsilon_{a+}(T) - \epsilon_{+a}(T))} \\
B(T) &= \frac{\sigma_{+a}\epsilon_{a+}(T) - \sigma_{a+}\epsilon_{+a}(T)}{\epsilon_{a+}(T) - \epsilon_{+a}(T)} \\
C(T) &= \beta(T) + \frac{\epsilon_{a+} B(T)}{2} \\
\beta(T) &= - \frac{\sigma_{a+}(T) \epsilon_{+a}(T) + \sigma_{+a}(T) (\epsilon_R - \epsilon_{a+}(T))}{2}
\end{align}
$$

これでHFEの形が定まったのだが，間をつなげている$A(T),~B(T),~C(T)$はまだしも，$\beta(T)$について物理的な考察が何もない点については．本当にこれでいいのか感が拭えない．なので，CFEの物理的な要求に関してもう少し考えてみよう．

まず内部エネルギーを以下のように表す．$\phi_i(\epsilon_i)$はひずみエネルギー，$\hat{u}_i^R$はある温度$T^R$での内部エネルギー，そして$c_i$は比熱で$c_i(T - T_R)$によって，$T^R$を基準にして熱の流入出を表している．

$$
\begin{equation}
\hat{u}_i = \phi_i(\epsilon_i) + \hat{u}_i^R + c_i(T - T_R)
\end{equation}
$$

これをもとにヘルムホルツの自由エネルギーを次のように書き表す．
エントロピー$\hat{s}_i$の変形は微妙にあやしいが，ひずみは一定として，$d\hat{s}_i = \frac{\partial \hat{s}_i}{\partial \hat{u}_i} d\hat{u}_i = \frac{d\hat{u}_i}{T}$，および$d\hat{u}_i = c_i dT$としているようだ．

$$
\begin{align}
\hat{\psi}_i &= \phi_i(\epsilon_i) + \hat{u}_i^R + c_i(T - T_R) - T \hat{s}_i \\
&= \phi_i(\epsilon_i) + \hat{u}_i^R + c_i(T - T_R) - T\left( c_i \log \left( \frac{T}{T_R} \right) + \hat{s}_i^R \right)
\end{align}
$$

この表記のうち，CFEの絶対量に対応するのが以下の部分だ．

$$
\begin{equation}
\hat{\beta}_i(T) = \hat{u}_i^R + c_i(T - T_R) - T c_i \log \left( \frac{T}{T_R} \right) - T \hat{s}_i^R
\end{equation}
$$

ここで，マルテンサイトは引っ張り圧縮について対称と仮定したこと，さらに比熱は相によらず一定$c_{-}=c_a=c_{+}$であることも仮定すれば．相対的なCFEは次のように表せる．

$$
\begin{gather}
\beta(T) = \beta_a(T) - \beta_m(T) = u^R - s^R T \\
\mathrm{where}~~ u^R = u_a^R - u_m^R, ~~~ s^R = s_a^R - s_m^R
\end{gather}
$$

## Gibbsの自由エネルギー（GFE）
再び熱力学を思い出すと，Gibbsの自由エネルギーはヘルムホルツの自由エネルギーを体積$V$についてルジャンドル変換することで定義された．いま，微小体積に注目してひずみを変数として用いていることから，先ほどの$F(T,\epsilon)$を$\epsilon$についてルジャンドル変換して，SMA用のGibbsの自由エネルギーを求めてみよう．

## マルテンサイト相とオーステナイト相
SMAに含まれる，マルテンサイト相とオーステナイト相（圧縮・引っ張り）の割合を，次のように表そう．

$$
\begin{gather}
x_a + x_{-} + x_{+} = 1, ~~~
\mathrm{where~} \left\{
\begin{array}{cl}
- & \mathrm{compressive~martensite} \\
a & \mathrm{austenite} \\
+ & \mathrm{tensile~martensite}
\end{array} \right.
\end{gather}
$$

で，これらの時間変化の関係を以下のように表す．

$$
\begin{align}
\dot{x}_{-} &= x_a p_{a-} - x_{-} p_{-a} \\
\dot{x}_{+} &= x_a p_{a+} - x_{-} p_{+a}
\end{align}
$$

ここで$p_{ij}$はi相からj相に移る確率で，次のように推定する．
等温等応力な状態で状態変化の方向を知りたければGibbsの自由エネルギーを用いるのがよさそうだ．で，Gibbsの自由エネルギーがポテンシャルの壁の高さに到達したら，別の安定状態に移ってしまうと考えて，TP分布をもとにエネルギーの確率分布を考える．

$$
\begin{gather}
p_{ij} = \frac{1}{\tau} e^{-\frac{1}{\gamma} \Delta G_{ij} (\sigma, T)}, ~~~
\mathrm{where~} \left\{
\begin{array}{l}
\Delta G_{-a} = G_{-}^B(\sigma, T) - G_{-}(\sigma, T) \\
\Delta G_{a-} = G_{-}^B(\sigma, T) - G_{a}(\sigma, T) \\
\Delta G_{a+} = G_{+}^B(\sigma, T) - G_{a}(\sigma, T) \\
\Delta G_{+a} = G_{+}^B(\sigma, T) - G_{+}(\sigma, T)
\end{array} \right.
\end{gather}
$$

<div align=center><img src=".\gfe.svg" width="400"></div>

各相での応力とひずみの関係についてまとめておこう．
$\epsilon_R^{\pm}$はマルテンサイト相それぞれでの残留ひずみを表す．

$$
\begin{gather}
\epsilon_{\pm}(\sigma) = \frac{\sigma}{E_{\pm}} + \epsilon_R^{\pm} \\
\epsilon_a(\sigma) = \frac{\sigma}{E_a}
\end{gather}
$$

マクロなパラメタとしてのひずみは，各相で重みをつけて次のように表す．

$$
\begin{equation}
\epsilon = \epsilon_{-} x_{-} + \epsilon_{a} x_{a} + \epsilon_{+} x_{+}
\end{equation}
$$



$$
\begin{align*}
\epsilon &= \left( \frac{\sigma}{E_{-}} + \epsilon_R^{-} \right) x_{-} + \frac{\sigma}{E_a} x_{a} + \left( \frac{\sigma}{E_{+}} + \epsilon_R^{+} \right) x_{+} \\
&= \sigma \left( \frac{x_{-}}{E_{-}} + \frac{x_{a}}{E_{a}} + \frac{x_{+}}{E_{+}} \right) + \epsilon_R^{-} x_{-} + \epsilon_R^{-} x_{+}
\end{align*}
$$

$$
\begin{equation}
\sigma(\epsilon,x_i) = \frac{\epsilon - \epsilon_R^{-} x_{-} - \epsilon_R^{-} x_{+}}{\frac{x_{-}}{E_{-}} + \frac{x_{a}}{E_{a}} + \frac{x_{+}}{E_{+}}}
\end{equation}
$$

## 潜熱

もうひとつの時間変化の関係は，温度とエネルギーの出入りの関係だ．右辺の3項目は対流による放熱を表し，1項目2項目は潜熱を表している．
（ちなみに潜熱はエンタルピー変化に対応するが，これは例えば気液相転移であれば定圧で熱を出入りさせていることから来ている）

$$
\begin{equation}
\dot{T} = \frac{1}{\rho c} \left( \dot{x}_{+}h_{+}(\sigma) + \dot{x}_{-}h_{-}(\sigma) - \alpha h_c (T-T_0) \right)
\end{equation}
$$

GFEのマルテンサイト相とオーステナイト相の差をとって$F_{a\pm}$と表そう．

$$
\begin{align*}
F_{a\pm} &= G_a - G_{\pm} \\
&= g_a(\epsilon_a(\sigma), T; \sigma) - g_\pm(\epsilon_{\pm}(\sigma), T; \sigma) \\
&= \left\{ \frac{E_a}{2} \left( \frac{\sigma}{E_a} \right)^2 - \sigma \left( \frac{\sigma}{E_a} \right) \right\} - \left[ \frac{E_{\pm}}{2} \left\{ \left( \frac{\sigma}{E_{\pm}} + \epsilon_R^{\pm} \right) - \epsilon_R^{\pm} \right\}^2 + \beta_{\pm}(T) - \sigma \left( \frac{\sigma}{E_{\pm}} + \epsilon_R^{\pm} \right) \right] \\
&= \frac{\sigma^2}{2E_{\pm}} - \frac{\sigma^2}{2E_a} - \beta_{\pm}(T) + \sigma \epsilon_R^{\pm} \\
&= \frac{\sigma^2}{2} E_{\Delta}^{\pm} - \beta_{\pm}(T) + \sigma \epsilon_R^{\pm}, ~~ \mathrm{where}~~E_{\Delta}^{\pm} = \frac{1}{E_{\pm}} - \frac{1}{E_a}
\end{align*}
$$

## まとめと参考文献



[^1]: Wesley Ballew, Stefan Seelecke, "Mesoscopic free energy as a framework for modeling shape memory alloys", Journal of Intelligent Material Systems and Structures, Volume 30, Issue 13, 2019, https://doi.org/10.1177/1045389X19844330
[^2]: Wesley Ballew, "Mesoscopic Free Energy Model for Shape Memory Alloys Under Complex Loading", Dissertation zur Erlangung des Grades des Doktors der Ingenieurwissenschaften der Naturwissenschaftlich-Technischen Fakultät der Universität des Saarlandes, 2021
[^3]: Ralph C. Smith, "Smart Material Systems", Society for Industrial and Applied Mathematics, 2005, ISBN:978-0-89871-583-5
[^4]: Falk, F., "One-dimensional model of shape memory alloys", Archives of Mechanics, 1983
[^5]: Falk, F., "Model free energy, mechanics, and thermodynamics of shape memory alloys", Acta Metallurgica, Volume 28, Issue 12, 1980, Pages 1773-1780, https://doi.org/10.1016/0001-6160(80)90030-9.















