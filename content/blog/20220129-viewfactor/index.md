---
title: 形態係数（View Factor）とは
date: "2022-01-29T00:00:00.000Z"
description: "What is view factor?"
tags: ["Thermal"]
---

View Factorの具体的な値が知りたい方はこちらへ：
[View Factor Calculation: Analytical and Monte Carlo Method](https://kanamesasaki.github.io/viewfactor/)

## 熱輻射と形態係数（View Factor）の関係

どんな物体も，表面から常に電磁波としてエネルギーを放射している．
ある物体Aからエネルギーが放射され別の物体Bに当たって吸収されれば，輻射によって熱が伝えられた，ということになる．
このときどれだけのエネルギーが伝わったのかを推定するためには，ざっくり以下の3点を知りたい．

- 物体Aからどれだけエネルギーが放射されているのか？
- 物体Aから放射されたエネルギーのうちどれだけの量が，物体Bに当たったのか？
- 物体Bに当たったエネルギーのうちどれだけが（反射したり透過したりせずに）吸収されたのか？

このうち2点目の「物体Aから放射されたエネルギーのうちどれだけの量が，物体Bに当たったのか？」に関しては，
物体ABの物質の特性やその時の温度に依らず，純粋に形と位置関係によってのみ決まる．
これを事前に計算しておいて，何度も使えるパラメタとして準備しておこうというのがView Factorのアイデアだ
（一方で，それぞれの物体が変形したり，位置関係が変わってしまった場合は，計算しなおさないといけない）．
注意点として，ここでは理想的な粗面（diffusive surface）についてのみ考えるものとする．

## 立体角

View Factorの議論をする前に立体角の定義について確認しておこう．
立体角とは感覚的には「ある点から物体を見たときに，その物体が視野のうちどれだけの割合を占めるか」を表す．もう少し具体的には次のような量である．

ある微小表面$dA_i$とそれを取り囲むような，半径1の半球を考える．
ある物体を微小表面$dA_i$から見たときに，半径1の半球上に投影して面積Aだけの領域を占めるのであれば，立体角を$A$とする．
もし，微小表面$dA_i$の視野全体を占めるような物体があれば，微小表面からその物体への立体角は半径1の半球の表面積$2\pi$となる．

<div align="center"><img src=".\solidangle.svg" width="300"></div>

では，微小表面$dA_i$から微小表面$dA_j$への立体角をきちんと数式で定義しよう．
2つの微小表面間の距離を$S$，微小表面の法線ベクトルを視線方向とのなす角をそれぞれ$\theta_i$, $\theta_j$とする．
このとき，微小表面$dA_i$から微小表面$dA_j$を見たとき，半径1の半球上への投影面積は次のように表すことが出来る．

$$
\begin{equation}
d\Omega = \frac{dA_j \cos \theta_j}{S^2}
\end{equation}
$$

微小表面$dA_i$から，何かしらの広さを持った領域への立体角は(1)を積分すればよい．

$$
\begin{equation}
\Omega = \int_A \frac{dA_j \cos \theta_j}{S^2}
\end{equation}
$$

ある微小表面$dA_i$とそれを取り囲むような，半径1の半球を考える．
ある物体を微小表面$dA_i$から見たときに，半径1の半球上に投影して面積Aだけの領域を占めるのであれば，立体角を$A$とする．
もし，微小表面$dA_i$の視野全体を占めるような物体があれば，微小表面からその物体への立体角は半径1の半球の表面積$2\pi$となる．

## 形態係数（View Factor）の定義

最も基本的な場合として，微小表面$dA_i$から$dA_j$へのView Factorを(3)のように定義する．
これは微小表面$dA_i$から放射された熱と，そのうち微小表面$dA_j$へ当たった熱の比を表している．

$$
\begin{equation}
dF_{dA_i-dA_j} \equiv \frac{\mathrm{diffuse~energy~directly~hitting~} dA_j}{\mathrm{total~diffuse~energy~from~} dA_i}
\end{equation}
$$

粗面から放射される熱は，放射方向に依存して単位立体角当たり$I \cos \theta$という形に表される（ランベルトの余弦則）．
これを用いると，$dA_i$から放射される熱の合計は次のようになる．ただし，$\varphi$はazimuth方向（周方向）の角度を表す．

$$
\begin{equation}
dA_i \int_0^{2\pi} \int_0^\frac{\pi}{2} I \cos \theta d\Omega = dA_i \int_0^{2\pi} \int_0^\frac{\pi}{2} I \cos \theta \sin \theta d\theta d\phi = \pi I dA_i
\end{equation}
$$

次に$dA_i$から放射されて，$dA_j$に当たる熱は次のように表される．ただし$S$は微小表面$dA_i$から微小表面$dA_j$への距離を表している．

$$
\begin{equation}
I \cos \theta_i dA_i d\Omega = I \cos \theta_i dA_i \frac{dA_j \cos \theta_j}{S^2} \tag{4}
\end{equation}
$$

よって定義から，微小表面$dA_i$から$dA_j$へのView Factorは次のように表される．

$$
\begin{equation}
dF_{dA_i-dA_j} = \frac{\cos \theta_i \cos \theta_j}{\pi S^2} dA_j
\end{equation}
$$

## ランベルトの余弦則 / Lambert’s Law

ここまでの議論で分かるように，View Factorは粗面（ランベルトの余弦則）の仮定の下でのみ有用なパラメタである．
ランベルトの余弦則の主張は「粗面から放射される熱は，放射方向に依存して単位立体角当たり$I \cos \theta$という形に表される」だが，
この法則をより直感的に理解するために，次のように言い換えてみよう．

大きさ$A$の面があったときに，その面をいろいろな方向からのぞいてみる．
正面から見ればその面の大きさは確かに$A$だが何らかの角度をつけて見れば，見かけの面積は$A \cos \theta$となる．
つまりランベルトの余弦則は「ある面から放射される熱は見かけの面積に比例する」と言い換えることも出来る．
逆にもし，放射熱量が方向に依存せず一定だとすると，ある面を斜めから見た方が，正面から見た場合よりもエネルギー密度（輝度）が高い．
平たく言えばより明るく見えるということになってしまう．このように考えると，ランベルトの余弦則は感覚的にも自然な主張と言えそうだ．

さらに理解を進めるため，理想的に次のような状況を考えよう．
ある微小表面$dA$とそれを取り囲むような内部が真空で半径$R$の球があるとする．
球の内側表面にはある一部分$dA_s$だけ黒体部分があり，残りは理想的な鏡面反射面とする．
$dA_s$の外側表面は断熱で，$dA_s$と球面のほかの部分とは熱伝導はない．
また，微小表面$dA$は$\boldsymbol{n}$方向は黒体で，反対側は断熱とする．
つまり，$dA$と$dA_s$との間にのみ輻射熱交換があるような状況を作ったわけである．

<div align="center"><img src=".\lambert.svg" width="340"></div>

ある面から放射される熱量が，温度に依存した関数と角度に依存した関数の積で表されるとして$E(T) I(\theta)$と書こう．
このとき$dA$から$dA_s$へ移動する熱は(6)となる．ただし，$d\Omega_{dA \to dA_s}$は$dA$から$dA_s$を見た場合の立体角だ．

$$
\begin{equation}
E(T) I (\theta) dA d\Omega_{dA-dA_s} = E(T) I (\theta) dA \frac{dA_s}{R^2}
\end{equation}
$$

一方，$dA_s$から$dA$へ移動する熱は(7)となる．ちなみに，放射された熱のうち相手面に直接当たらなかったものについては，全て反射されて自分に戻ってくるような問題設定になっている．

$$
\begin{equation}
E(T_s) I \left( \frac{\pi}{2} \right) dA_s d\Omega_{dA_s-dA} = E(T_s) I \left( \frac{\pi}{2} \right) dA_s \frac{\cos \theta dA}{R^2}
\end{equation}
$$

十分な時間この系を放置して平衡状態になったとする．すると(6)と(7)は等しいので，以下の関係が成り立つはずだ．

$$
\begin{equation}
E(T)I(\theta) = E(T_s) I \left( \frac{\pi}{2} \right) \cos \theta
\end{equation}
$$

よって平衡状態で微小面の温度が常に等しくなるのであれば，次の関係が成り立つ．
これは期待していたランベルトの余弦則である．

$$
\begin{equation}
I(\theta) = I \left( \frac{\pi}{2} \right) \cos \theta
\end{equation}
$$