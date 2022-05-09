---
title: "[流体力学] 連続の式"
date: "2019-11-21T00:00:00.000Z"
description: "Derivation of the continuity equation"
tags: ["Fluid dynamics"]
---

## 連続の式の導出

連続の式は流体力学における基礎式の1つで「流体の質量は突然出てきたり，突然消えたりしないよ」というごく自然なことを言っている．導出には，空間内に立方体の絵を描いて，$x$から入ったものと，$x+dx$から出て行ったものの差を取って...というようなことも出来るようだ．ただ，ごちゃごちゃして混乱のもとなので，ガウスの発散定理を使ってすっきり導出する．

<div align="center"><img src=".\continuity.svg" width="350" title="Mass Conservation in a Certain Region in 3D-space"></div>

空間内の任意の領域$\Omega$について考えよう．まず，この領域内にある流体の質量は$\int_{\Omega} \rho dV$と表せる．またこの領域の微小表面$ds$から流れ出る流体質量は$\rho \boldsymbol{v} \cdot \boldsymbol{n} ds$と表せる．この領域内の質量変化は領域の表面から流入・流出した質量を集計したものに等しいはずである．このことを式で表すと次のようになる．

$$
\begin{equation}
\frac{\partial}{\partial t} \int_{\Omega} \rho~ dV = - \int_{\partial \Omega} \rho \boldsymbol{v} \cdot \boldsymbol{n}~ds
\end{equation}
$$

着目する空間内の領域は時間について一定なので，左辺の時間微分は密度のみにかかる．右辺にはガウスの発散定理を適用して以下のように変形する．

$$
\begin{gather}
\int \frac{\partial \rho}{\partial t} dV = - \int \mathrm{div} (\rho \boldsymbol{v}) dV \\
\int \left[ \frac{\partial \rho}{\partial t} + \mathrm{div} (\rho \boldsymbol{v}) \right] dV = 0
\end{gather}
$$

この関係が任意の領域について成り立つので，以下のように連続の式が得られる．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_1.2}
\frac{\partial \rho}{\partial t} + \mathrm{div}(\rho \boldsymbol{v}) = 0
\end{equation}
$$

圧縮性を考慮しない場合，$\rho=\mathrm{const}$で以下の関係式が成り立つ．

$$
\begin{equation}
% \label{eq:LandauLifshitzVol6_10.2}
\mathrm{div}~ \boldsymbol{v}= 0
\end{equation}
$$