---
title: SMA（形状記憶合金）ワイヤのモデル化：Extended M-A-S Model
date: "2022-07-08T00:00:00.000Z"
description: ""
tags: ["Statistical physics"]
---

前回紹介したM-A-S Modelの改良版が[^1] [^2]に詳しく説明されているので，これについて見てみよう．
もともとのM-A-S Modelに，以下の特徴を組み込んだものになっている．
- 引っ張り・圧縮の非対称な特性
- ヒステリシスの温度依存性
- 転移応力に関する相の不均一性の影響

## ヘルムホルツの自由エネルギー（HFE）
今回は引っ張り・圧縮の非対称性を表現したいので，マルテンサイト相に関するパラメタは引っ張り・圧縮で独立なものとする．CFEに関しても$\beta_{\pm}(T)$は別の関数になるので，オーステナイト相のCFEを基準にして，マルテンサイト相にそれぞれ$\beta_{\pm}(T)$の項を追加する．

$$
\begin{equation}
\psi(\epsilon, T) = \left\{ \begin{array}{ll} 
    \psi_{-}(\epsilon, T) \coloneqq \frac{E_{-}}{2}(\epsilon - \epsilon_R^{-})^2 + \beta_{-}(T) & 
    -\infty < \epsilon \le \epsilon_{-a}(T) + \beta_{\pm}(T) \\
    \psi_{-}^B(\epsilon, T) \coloneqq A^{-}(T) \epsilon^2 - B^{-}(T) \epsilon + C^{-}(T) & 
    \epsilon_{-a}(T) < \epsilon < \epsilon_{a-}(T) \\ 
    \psi_{a}(\epsilon, T) \coloneqq \frac{E_{a}}{2} \epsilon^2 & 
    \epsilon_{a-}(T) \le \epsilon \le \epsilon_{a+}(T) \\
    \psi_{+}^B(\epsilon, T) \coloneqq A^{+}(T) \epsilon^2 + B^{+}(T) \epsilon + C^{+}(T) & 
    \epsilon_{a+}(T) < \epsilon < \epsilon_{+a}(T) \\
    \psi_{+}(\epsilon, T) \coloneqq \frac{E_{+}}{2}(\epsilon - \epsilon_R^{+})^2 + \beta_{+}(T) & 
    \epsilon_{+a}(T) \le \epsilon < \infty
  \end{array} \right.
\end{equation}
$$

これに伴って，必要なパラメタも増加する．

| Parameter  | Description |
|----------|:-------------|
| $E_a$ | Elastic modulus while in the austenite phase |
| $E_\pm$ | Elastic modulus while in the martensite phase (+: tension, -: compression) |
| $\epsilon_R^{+}$ | Residual strain for the martensite + phase |
| $\epsilon_R^{-}$ | Residual strain for the martensite - phase |
| $T_H$ | The higher test temperature |
| $T_L$ | The lower test temperature |
| $\sigma_{a+}^H$ | Forward tensile transformation stress at $T_H$ |
| $\sigma_{+a}^H$ | Reverse tensile transformation stress at $T_H$ |
| $\sigma_{a-}^H$ | Forward compressive transformation stress at $T_H$ |
| $\sigma_{-a}^H$ | Reverse compressive transformation stress at $T_H$ |
| $\sigma_{a+}^L$ | Forward tensile transformation stress at $T_L$ |
| $\sigma_{+a}^L$ | Reverse tensile transformation stress at $T_L$ |
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
\Delta G_{-a} = G_{-a}(\sigma, T) - G_{-}(\sigma, T) \\
\Delta G_{a-} = G_{a-}(\sigma, T) - G_{a}(\sigma, T) \\
\Delta G_{a+} = G_{a+}(\sigma, T) - G_{a}(\sigma, T) \\
\Delta G_{+a} = G_{+a}(\sigma, T) - G_{-}(\sigma, T)
\end{array} \right.
\end{gather}
$$

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















