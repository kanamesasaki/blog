---
title: 拡散反射と鏡面反射のモデル化
date: "2022-01-30T00:00:00.000Z"
description: "Modeling of the diffuse and specular reflection"
tags: ["Ray tracing"]
---

## 光のモデリング

レイトレーシングを用いてコンピュータグラフィックを生成する場合，
それらしく見せることが目的であれば，Phongの反射モデルなどを用いると，より少ない計算コストでグラフィックを生成できる．ただ，今回はある程度計算コストがかかっても，現実の物理現象に合うようなモデル化をしたいので，まずは光の物理現象について少し考えてみよう．

光がある物体の表面にぶつかった時，そのうち一部は透過され，一部は吸収され，その他は反射される．反射については理想的な鏡面反射と拡散反射の組み合わせとして表現するものとする．ここで，以下のようなパラメタを考えることで，それぞれの割合を表そう．

- $\alpha$ (absorptance) : 吸収される割合
- $\rho^d$ (diffuse reflectance) : 拡散反射される割合  
- $\rho^s$ (specular reflectance) : 鏡面反射される割合
- $\sigma$ (specularity) : 反射光のうち鏡面反射される割合
- $\tau$ (transmittance) : 透過される割合

これらのパラメタには以下の関係が成り立つ．

$$
\begin{equation}
\alpha + \rho^d + \rho^s + \tau = 1
\end{equation}
$$

$$
\begin{equation}
\sigma = \frac{\rho^s}{\rho^d + \rho^s}
\end{equation}
$$

本来，これらのパラメタをスペクトルの関数として定義して，スペクトルごとにレイトレースをすれば物理現象に沿ったシミュレーションができるはずだが，これは計算量が膨大になってしまうので現実的でない．
そこで，シミュレーションをする場合には表面特性のパラメタとしては，$\sigma$，$\tau$，およびRGBを用いることとして，$\sigma$，$\tau$はスペクトルによらないパラメタと仮定する．
absorptanceおよびスペクトル依存性に関しては，RGBを0.0&ndash;1.0の範囲で表したパラメタで代用し，反射光のRGBを，入射光と反射面のRGBを成分ごとに掛け算することで決定する．以下にいくつか例を示しておこう．

- 白い光$[1.0,~1.0,~1.0]$が赤い物体$[1.0,~0.0,~0.0]$にぶつかって反射された場合には，赤い光$[1.0,~0.0,~0.0]$が出てくる．
- 青い光$[0.0,~0.0,~1.0]$が白い物体$[1.0,~1.0,~1.0]$にぶつかって反射された場合には，青い光$[0.0,~0.0,~1.0]$が出てくる．
- 赤い光$[0.0,~0.0,~1.0]$が黒い物体$[0.0,~0.0,~0.0]$にぶつかって反射された場合には，黒い光$[0.0,~0.0,~0.0]$が出てくる．

## 鏡面反射（Specular Reflection）

鏡面反射の場合，入射光の方向が$\boldsymbol{r}_\mathrm{in}$, 反射面の垂直方向が$\boldsymbol{n}$と表されれば，
反射光の方向$\boldsymbol{r}_\mathrm{out}$は(3)のように表される．

<div align=center><img src=".\specular_reflection.svg" width="500"></div>

$$
\begin{equation}
\boldsymbol{r}_\mathrm{out} = \boldsymbol{r}_\mathrm{in} - 2 \boldsymbol{n} (\boldsymbol{r}_\mathrm{in} \cdot \boldsymbol{n})
\end{equation}
$$

## 拡散反射（Diffuse / Lambertian Reflection）

拡散反射の仮定の下では，反射光の分布はランベルトの余弦則に従い，単位立体角に対して$I \cos \theta$と表される．
このとき反射光の方向は入射光に独立で，次のようにモデル化できる．

まず微小表面上に，ローカル基底$~(\boldsymbol{R}_\mathrm{X},~\boldsymbol{R}_\mathrm{Y},~\boldsymbol{R}_\mathrm{Z})~$をとる．
微小表面の垂直方向$\boldsymbol{n}=(n_x, n_y, n_z)$は与えられており，
ローカル基底のZ軸$\boldsymbol{R}_\mathrm{Z}$を$\boldsymbol{n}$に一致させるものとする．
このとき$\boldsymbol{R}_\mathrm{X}, \boldsymbol{R}_\mathrm{Y}$は以下のようにとればよい．

$$
\begin{equation}
\boldsymbol{R}_\mathrm{X} = \frac{1}{n_x^2+n_z^2} \left[ \begin{array}{c} n_z \\ 0 \\ -n_x \end{array} \right], ~~
\boldsymbol{R}_\mathrm{Y} = \boldsymbol{R}_\mathrm{Z} \times \boldsymbol{R}_\mathrm{X} 
= \frac{1}{n_x^2+n_z^2} \left[ \begin{array}{c} n_y n_x \\ n_z^2 - n_x^2 \\ -n_y n_z \end{array} \right]
\end{equation}
$$

ただし$\boldsymbol{n}=(0, 1, 0)$の場合は以下のようにとる．

$$
\begin{equation}
\boldsymbol{R}_\mathrm{Z} = \left[ \begin{array}{c} 0 \\ 1 \\ 0 \end{array} \right], ~~
\boldsymbol{R}_\mathrm{X} = \left[ \begin{array}{c} 0 \\ 0 \\ 1 \end{array} \right], ~~
\boldsymbol{R}_\mathrm{Y} = \left[ \begin{array}{c} 1 \\ 0 \\ 0 \end{array} \right].
\end{equation}
$$

次に，設定したローカル座標上で光線の方向を極座標パラメタ$~(\theta, \varphi)~$を用いて表す．
極座標パラメタ$~(\theta, \varphi)~$はランベルトの余弦則に従った確率分布になるように発生させる必要がある．
一様乱数からランベルトの余弦則に従った確率分布への変換については後ほど解説するので，
ここではある極座標パラメタ$~(\theta, \varphi)~$が与えられたものとしよう．
このとき，ローカル座標系における光線の方向$~(X,~Y,~Z)~$は次のように表される．

$$
\begin{equation}
\left[ \begin{array}{c} X \\ Y \\ Z \end{array} \right] 
= \left[ \begin{array}{c} 
\sin \theta \cos \varphi \\ 
\sin \theta \sin \varphi \\ 
\cos \theta \cos \end{array} \right]
\end{equation}
$$

ローカル座標系$~(X,~Y,~Z)~$からグローバル座標系$~(x,~y,~z)~$への変換は次のように表される．
これにより，拡散反射による光線方向を表すことが出来た．

$$
\begin{equation}
\left[ \begin{array}{c} x \\ y \\ z \end{array} \right] 
= \left[ \begin{array}{ccc} 
\boldsymbol{R}_\mathrm{X} & \boldsymbol{R}_\mathrm{Y} & \boldsymbol{R}_\mathrm{Z} \end{array} \right]
\left[ \begin{array}{c} X \\ Y \\ Z \end{array} \right]
\end{equation}
$$

## 球面上の一様分布

Lambertの余弦則に基づいた分布について議論する前に，単位球面上に一様に点を分布させる方法について考えよう．
単位球面上の位置を極座標$~(\theta, \varphi)~$で表すとき，各パラメタに対応する微小表面（微小立体角）は$~\sin \theta d\varphi d\theta~$で表される．
この微小な表面積は$~\theta~$に応じて変化する（北極・南極付近で小さくなり，赤道付近で大きくなる）ため，
球面上に一様に点をばらまくためには，表面積に比例するよう緯度方向について密度を調整する必要がある．
一様にばらまかれた点から1つ選んで，それが$~0\le \theta \le \theta~$の範囲に含まれている確率$p$は次のように求められる．

$$
\begin{equation}
p = \frac{\int_0^{\theta} \int_0^{2\pi} \sin \theta d\varphi d\theta}{\int_0^{\pi} \int_0^{2\pi} \sin \theta d\varphi d\theta } 
= \frac{[-\cos \theta]_{0}^{\theta}}{[-\cos \theta]_{0}^{2\pi}} = \frac{1-\cos \theta}{2}
\end{equation}
$$

この式を逆に解いてやると，0&ndash;1の値に対して球面上のパラメタ$~\theta~$を対応させることが出来る．

$$
\begin{equation}
\theta = \arccos (1-2p)
\end{equation}
$$

ただ球面上の一様分布は，逆三角関数を使わないもっと雑な方法でも作ることが出来る．
具体的には，$~[-1:1]^3~$の立方体内にランダムに点を発生させて，点が単位球の外部であればやり直し，内部であれば正規化して値を返す，という手順を行えばよい．

## 半球面上のコサイン分布

Lambertの余弦則に基づいた分布を得るには，微小表面に$~\cos \theta~$の重みをのせた$~\sin \theta \cos \theta d\varphi d\theta~$を確率密度関数と考えればよい．
今回は半球上での分布を考えたいので，以下のように確率分布を求める．

$$
\begin{equation}
p = \frac{\int_0^{\theta} \int_0^{2\pi} \sin \theta \cos \theta d\varphi d\theta}{\int_0^{\pi/2} \int_0^{2\pi} \sin \theta \cos \theta d\varphi d\theta } 
= \frac{[-\cos 2\theta]_{0}^{\theta}}{[-\cos 2\theta]_{0}^{\pi/2}} = \frac{1-\cos 2\theta}{2}
\end{equation}
$$

この式を逆に解いてやると，0&ndash;1の値に対して半球上のパラメタ$~\theta~$を対応させることが出来る．

$$
\begin{equation}
\theta = \frac{\arccos (1-2p)}{2}
\end{equation}
$$

Lambertの余弦則に基づいた分布を得たい場合，光の反射する点上に単位球面（単位半球ではない）を描いて，球面上一様にばらまかれた点からランダムに1点選び反射方向を決める，という方法も可能である．
実際，単位球面の緯度方向パラメタ$~\theta'~$と半球状の緯度方向パラメタ$~\theta~$の関係式(12)を用いて，式(9)を式(11)に変形出来る．

<div align=center><img src=".\angles.svg" width="400"></div>

$$
\begin{equation}
\frac{\sin \theta'}{\cos \theta' + 1} = \tan \theta
\end{equation}
$$

式(9)より$\cos \theta' = 1-2p$なので，これを式(12)に代入して全体2乗すると次のように整理できる．

$$
\begin{equation}
\frac{p}{1-p} = \tan^2 \theta
\end{equation}
$$

$\tan^2 \theta = \frac{1}{\cos^2 \theta} - 1$と，倍角の公式$~2\cos^2 \theta - 1 = \cos 2\theta~$を用いて変形すると以下の式が得られる．

$$
\begin{equation}
\cos 2\theta = 1-2p
\end{equation}
$$

先ほど述べたように，球面上の一様分布は逆三角関数を使わなくても作れるので，
Lambertの余弦則に従った分布も逆三角関数を使わずに作ることが出来る．




