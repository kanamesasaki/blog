---
title: ECEF座標からgeodetic座標への変換
date: "2023-04-24T00:00:00.000Z"
description: "Transformation from ECEF to geodetic coordinates"
tags: ["Programming", "Mechanics"]
---

人工衛星の軌道を計算した後，緯度・経度・高度に変換したいとき，ざっくりでよければ地球を球体と仮定して適当にarctanとかを使って求めることはできる．ただ，もう少しきちんと求める場合には，地球を回転楕円体として考えるべきで，この場合の変換はそれほど簡単ではない．
ECEF（Earth Centered Earth Fixed）座標からgeodetic（測地）座標への効率的な変換方法の開発は，多くの研究者の興味を集めてきたトピックで，何十年も前から最近まで多くの論文が発表されている．

## ECEF座標とgeodetic座標の関係

まず地球表面上の点$\boldsymbol{r}_\mathrm{site}$を式で表すことを考えよう．地球はおおよそ回転楕円体Spheroid（楕円体Ellipsoidのうち1軸に関しては軸対称なもの）で，地軸回りで対称，南北方向に少し押しつぶしたような形をしているので，以下のように表すことができる．ここで$\phi_\mathrm{rd}$はreduced latitudeと呼ばれるもので，geodetic latitude $\phi_\mathrm{gc}$ではないことに注意しよう．

<div align=center><img src=".\spheroid.svg" width="380"></div>

$$
\begin{gather}
\boldsymbol{r}_\mathrm{site} = \left[ \begin{array}{c} 
R_\oplus \cos\phi_\mathrm{rd} \cos\lambda \\ 
R_\oplus \cos\phi_\mathrm{rd} \sin\lambda \\ 
b_\oplus \sin\phi_\mathrm{rd} \end{array} \right]
\end{gather}
$$

一方で，geodetic latitude $\phi_\mathrm{gc}$を使って表すこともできるはずで，$r_\mathrm{site}$は何かしらの緯度の関数になる．

$$
\begin{gather}
\boldsymbol{r}_\mathrm{site} = \left[ \begin{array}{c} 
r_\mathrm{site} \cos\phi_\mathrm{gc} \cos\lambda \\ 
r_\mathrm{site} \cos\phi_\mathrm{gc} \sin\lambda \\ 
r_\mathrm{site} \sin\phi_\mathrm{gc} \end{array} \right]
\end{gather}
$$

これらの式を見比べると，以下の関係が得られる．

$$
\begin{gather}
\tan \phi_\mathrm{gc} = \frac{b_\oplus}{R_\oplus} \tan \phi_\mathrm{rd}
\end{gather}
$$

次に，$\phi_\mathrm{rd}$と$\phi_\mathrm{gd}$の関係を導く．
$\boldsymbol{r}_\mathrm{site}$での接面の方向は，$\phi_\mathrm{rd}$と$\lambda$について微分してやると分かる．

$$
\begin{gather}
\frac{d}{d\phi_\mathrm{rd}} \boldsymbol{r}_\mathrm{site} = \left[ \begin{array}{c} 
-R_\oplus \sin\phi_\mathrm{rd} \cos\lambda \\ 
-R_\oplus \sin\phi_\mathrm{rd} \sin\lambda \\ 
b_\oplus \cos\phi_\mathrm{rd} \end{array} \right], \\
\frac{d}{d\lambda} \boldsymbol{r}_\mathrm{site} = 
\left[ \begin{array}{c} 
-R_\oplus\cos\phi_\mathrm{rd} \sin\lambda \\ 
+R_\oplus\cos\phi_\mathrm{rd} \cos\lambda \\ 
0 
\end{array} \right]. \\
\end{gather}
$$

で，これをよく見ると，法線方向が分かる．

$$
\begin{gather}
\boldsymbol{n} = \left[ \begin{array}{c}
b_\oplus \cos\phi_\mathrm{rd} \cos\lambda \\
b_\oplus \cos\phi_\mathrm{rd} \sin\lambda \\
R_\oplus \sin\phi_\mathrm{rd}
\end{array} \right]
\end{gather}
$$

法線方向が分かると，reduced latitudeとgeodetic latitudeの関係を求めることができる．

$$
\begin{gather}
\tan \phi_\mathrm{gd} = \frac{R_\oplus}{b_\oplus} \tan \phi_\mathrm{rd}
\end{gather}
$$

これより，geocentric latitudeとgeodetic latitudeの関係は以下のようになる．

$$
\begin{gather}
\tan \phi_\mathrm{gc} = \frac{b_\oplus^2}{R_\oplus^2} \tan \phi_\mathrm{gd}
\end{gather}
$$

これで，地表面でgeocentricなパラメタからgeodeticへ変換することができた．
ただ，今知りたいのは，軌道上の点$(x,y,z)$からgeodeticなパラメタを求めることで，これにはもうひと手間いる．目標は$(x,y,z)$をgeodeticなパラメタのみで表して，逆に解くことである．
そのためにradius of curvature in the prime vertical $C_\oplus$を$\phi_\mathrm{gd}$を用いて表す．

$$
\begin{gather}
r_\delta 
= r_\mathrm{site} \cos \phi_\mathrm{gc} 
= R_\oplus \cos \phi_\mathrm{rd}
= C_\oplus \cos \phi_\mathrm{gd} \\
r_\mathrm{k} 
= r_\mathrm{site} \sin \phi_\mathrm{gc} 
% = R_\oplus \frac{b_\oplus}{R_\oplus}\sin \phi_\mathrm{rd}
= R_\oplus \sqrt{1-e_\oplus^2}\sin \phi_\mathrm{rd}
= S_\oplus \sin \phi_\mathrm{gd}
\end{gather}
$$

これより$C_\oplus = R_\oplus \frac{\cos\phi_\mathrm{rd}}{\cos\phi_\mathrm{gd}}$なのだが，$\cos\phi_\mathrm{rd}$が邪魔なので，以下の関係を用いて整理する．

$$
\begin{gather}
\tan^2\phi_\mathrm{gd} = \frac{R_\oplus^2}{b_\oplus^2} \left(\frac{1}{\cos^2\phi_\mathrm{rd}} - 1 \right) \\
\frac{1}{\cos^2\phi_\mathrm{rd}} = \frac{b_\oplus^2}{R_\oplus^2} \tan^2\phi_\mathrm{gd} + 1 \\
\cos\phi_\mathrm{rd} = \frac{1}{\sqrt{\frac{b_\oplus^2}{R_\oplus^2} \tan^2\phi_\mathrm{gd} + 1}}, ~~\mathrm{where} ~~ -\frac{\pi}{2} \le \phi_\mathrm{rd} \le \frac{\pi}{2}
\end{gather}
$$

すると，$C_\oplus$は以下のように表せる．

$$
\begin{gather}
C_\oplus = \frac{R_\oplus}{\cos\phi_\mathrm{gd}} \frac{1}{\sqrt{\frac{b_\oplus^2}{R_\oplus^2} \tan^2\phi_\mathrm{gd} + 1}}
= \frac{R_\oplus}{\sqrt{\frac{b_\oplus^2}{R_\oplus^2} \sin^2\phi_\mathrm{gd} + \cos^2\phi_\mathrm{gd}}} \\
= \frac{R_\oplus}{\sqrt{(1-e_\oplus^2) \sin^2\phi_\mathrm{gd} + \cos^2\phi_\mathrm{gd}}}
= \frac{R_\oplus}{\sqrt{1 - e_\oplus^2 \sin^2\phi_\mathrm{gd}}}
\end{gather}
$$

$S_\oplus$も同様に整理できて，以下のように表される．

$$
\begin{gather}
S_\oplus = \frac{R_\oplus(1-e_\oplus^2)}{\sqrt{1 - e_\oplus^2 \sin^2 \phi_{\mathrm{gd}}}}
\end{gather}
$$

これより，$(x,y,z)$座標とgeodeticなパラメタの関係は以下のようになる．
ここまでの議論は主に参考文献[^1]を参考にした．

$$
\begin{gather}
\left[ \begin{array}{c} x \\ y \\ z \end{array} \right] = 
\left[ \begin{array}{c}
    (C_\oplus + h_\mathrm{ellp}) \cos\phi_\mathrm{gd} \cos\lambda \\
    (C_\oplus + h_\mathrm{ellp}) \cos\phi_\mathrm{gd} \sin\lambda \\
    (S_\oplus + h_\mathrm{ellp}) \sin\phi_\mathrm{gd}
\end{array} \right]
\end{gather}
$$

## 数値計算による変換

ここで具体的な変換方法について考えてみよう．
基準となる楕円体としてWGS84を用いることとし，これは長半径(semi-major axis)$R_\oplus$および扁平率(flattening)$f_\oplus$で表される．

$$
\begin{gather}
R_\oplus = 6378.137~\mathrm{km}, ~~~
f_\oplus = \frac{1}{298.257223563}
\end{gather}
$$

その他のパラメタは次のように計算できる．
 
$$
\begin{gather}
e_\oplus = \sqrt{2f_\oplus - f_\oplus^2} = 0.0818191908426215, \\
b_\oplus = R_\oplus \sqrt{1-e_\oplus^2} = R_\oplus(1-f_\oplus) = 6356.75231424518~\mathrm{km}, \\
\end{gather}
$$

経度に関しては，特に問題なく次のように計算できる．

$$
\begin{gather}
\lambda = \arctan (y,x)
\end{gather}
$$

緯度と高度に関してはexplicitに解けなさそうなので，数値的に求めることを考えてみる．
まず，仮に$\phi_\mathrm{gd}$が分かっていた場合には，$h_\mathrm{ellp}$は簡単に決定できる．

$$
\begin{gather}
h_\mathrm{ellp} = \frac{\sqrt{x^2+y^2}}{\cos\phi_\mathrm{gd}} - C_\oplus 
= \frac{\sqrt{x^2+y^2}}{\cos\phi_\mathrm{gd}} - \frac{R_\oplus}{\sqrt{1 - e_\oplus^2 \sin^2\phi_\mathrm{gd}}} \\
h_\mathrm{ellp} = \frac{z}{\sin\phi_\mathrm{gd}} - S_\oplus
= \frac{z}{\sin\phi_\mathrm{gd}} - \frac{R_\oplus(1-e_\oplus^2)}{\sqrt{1 - e_\oplus^2 \sin^2 \phi_{\mathrm{gd}}}}
\end{gather}
$$

これらが等しくなるように，以下の関係を満たす$\phi_\mathrm{gd}$を数値的に求めればよい．

$$
\begin{gather}
z - \sqrt{x^2+y^2} \tan \phi_\mathrm{gd} + \frac{e_\oplus^2 R_\oplus \sin\phi_\mathrm{gd}}{\sqrt{1 - e_\oplus^2 \sin^2 \phi_{\mathrm{gd}}}} = 0
\end{gather}
$$

$$
\begin{gather}
\phi_0 = \arctan \left( \frac{z}{\sqrt{x^2 + y^2}} \right)
\end{gather}
$$

初期値はgeocentricなパラメタを用いることとして，
例えばPythonで以下のようなスクリプトを書くと，実際にgeodetic latitudeを求めることができる．


```python

# WGS84 parameters
flattening = 1/298.257223563
semimajor = 6378.137
eccentricity = np.sqrt(2*flattening - flattening**2)

def geodetic_latitude(x, y, z):
    """ calculate the geodetic latitude 
    
    # Args:
        x(ndarray): x coordinate in ECEF, km
        y(ndarray): y coordinate in ECEF, km
        z(ndarray): z coordinate in ECEF, km
    
    # Returns:
        latitude(ndarray): geodetic latitude, rad
    """
    params = (x, y, z)
    latitude = np.arctan(z/ np.sqrt(x**2 + y**2))
    return optimize.fsolve(latitude_equation, latitude, args=params)
    
def latitude_equation(x: np.ndarray, *args) -> np.ndarray:
    """ equation to be solved
    
    # Args:
        *args(tuple): (x, y, z)

    # Returns:
        latitude(ndarray): latitude
    """
    return args[2] - np.sqrt(args[0]**2 + args[1]**2) * np.tan(x) + eccentricity**2 * semimajor * np.sin(x) / np.sqrt(1 - eccentricity**2 * np.sin(x)**2)

```

さて，これでECEF座標からgeodeticなパラメタへの変換の基本は理解できた．
ただこの方法で解を探すと，データ量が増えるにつれてかなりの計算量が必要になってしまうので，できればより効率的な方法が欲しくなってくる．

## Vermeilleの解析的な変換手法

より効率的な変換手法で，論文としてもよく引用されているものに，Vermeilleの手法がある[^2]．この方法では，かなりアクロバットな変数の置き換えをすることで，解析的に解を求めることができる．

まず，次のような変数$k$を定義する．これは常に$k>0$となる．

$$
\begin{gather}
k = \frac{QS}{PR} = \frac{h_\mathrm{ellp} + C_\oplus - e_\oplus^2 C_\oplus}{C_\oplus} \\
h_\mathrm{ellp} = (k + e_\oplus^2 - 1) C_\oplus = k C_\oplus - S_\oplus
\end{gather}
$$

この$k$を用いた関係式を作るために，$C_\oplus$を$k$で表す．

$$
\begin{align}
\sin\phi_\mathrm{gd} = \frac{z}{S_\oplus + h_\mathrm{ellp}}
= \frac{z}{k C_\oplus}
\end{align}
$$

$$
\begin{gather}
C_\oplus^2 = \frac{R_\oplus^2}{(1 - e_\oplus^2 \sin^2\phi_\mathrm{gd})} \\
C_\oplus^2 (1 - e_\oplus^2 \sin^2\phi_\mathrm{gd}) = R_\oplus^2 \\
C_\oplus^2 = R_\oplus^2 + \frac{e_\oplus^2 z^2}{k^2}
\end{gather}
$$

これらを用いて，$x^2+y^2$を書き換えていく．

$$
\begin{gather}
x^2 + y^2 
= (h_\mathrm{ellp} + C_\oplus)^2 \cos^2\phi_\mathrm{gd}
= (k + e_\oplus)^2 C_\oplus^2 (1 - \sin^2\phi_\mathrm{gd}) \\
\frac{x^2+y^2}{(k+e_\oplus^2)^2} - C_\oplus^2 \left( 1 - \frac{z^2}{k^2 C_\oplus^2} \right) = 0 \\
\frac{x^2+y^2}{(k+e_\oplus^2)^2} - \left( R_\oplus^2 + \frac{e_\oplus^2 z^2}{k^2} - \frac{z^2}{k^2} \right) = 0 \\
\frac{x^2+y^2}{(k+e_\oplus^2)^2} + \frac{(1 - e_\oplus^2) z^2}{k^2} = R_\oplus^2
\end{gather}
$$

ここで，$p, q$を以下のようにおく．

$$
\begin{align}
p = \frac{x^2 + y^2}{R_\oplus^2}, ~~ q = \frac{1-e_\oplus^2}{R_\oplus^2} z^2
\end{align}
$$

これらを用いて，$k$について4次の代数方程式を作る．
4次の代数方程式は一般に解くことが可能で，Ferrariの解法をはじめ様々な手法があるようだ．ただ，Vermeilleはそれらの手法をそのまま用いるのではなく，ところどころに式変形のアイデアを取り入れて，因数分解していっている．

$$
\begin{align}
k^4 + 2e_\oplus^2 k^3 - (p+q-e_\oplus^4) k^2 - 2e_\oplus^2 q k - e_\oplus^4 q = 0
\end{align}
$$

ここで謎のパラメタ$u$を導入する．$u$が任意の値の場合について，次の式が成り立つ．

$$
\begin{align}
(k^2 + e_\oplus^2 k - u)^2 - \left[ (p+q-2u) k^2 + 2e_\oplus^2(q-u)k + u^2 + e_\oplus^4 q \right] = 0
\end{align}
$$

カギ括弧の中身は$k$の2次方程式になっているが，
これについて判別式がゼロになるように要求すると，以下の関係式が得られる．
この式が満たされるときカギ括弧の中は$(\cdots)^2$の形で書けて，式全体が因数分解できることが分かる．形は少し異なるものの，謎パラメタを導入しつつ，判別式ゼロを要求することで，因数分解できる形にする，というのはFerrariの解法のアイデアを取り入れたものじゃないかと思われる．

$$
\begin{align}
e_\oplus^4 (q-u)^2 - (p+q-2u)(u^2 + e_\oplus^4 q) = 0
\end{align}
$$

さらに，変数$r, s$を以下のように置く．

$$
\begin{align}
r = \frac{p+q-e_\oplus^4}{6}, ~~ s = e_\oplus^4 \frac{pq}{4r^3}
\end{align}
$$

これらを用いて，さらに全体を$2r^3$で割ると以下の関係式が得られる．

$$
\begin{align}
\frac{u^3}{r^3} - 3\frac{u^2}{r^2} - 2s = 0
\end{align}
$$

これは，$\frac{u}{r}$の3次方程式になっている．ここで以下のように置いて，$t$の式に書き換える．$t>0$の範囲では，$t=1$で$1+t+\frac{1}{t}$は極小値3をとり，(41)の左辺は$-2s$になる．$t$が動けば，$\frac{u}{r}$は増加し，$0<t<1$の範囲でひとつ，$t>1$の範囲でもひとつ解を持つはずだ．（ちなみに，相反方程式と呼ばれる形の代数方程式は，$x+\frac{1}{x}=t$という変形をすることで，うまく因数分解できるらしい．ちょっと形は違うがその辺からインスピレーションを受けているのかもしれない．）

$$
\begin{align}
\frac{u}{r} = 1 + t + \frac{1}{t}
\end{align}
$$

$$
\begin{gather}
t^6 - 2(1+s)t^3 + 1 = 0
\end{gather}
$$

実際，以下のような解を見つけることができる．

$$
\begin{gather}
t^3 = 1 + s \pm \sqrt{s(2+s)} \\
t = \sqrt[3]{1 + s \pm \sqrt{s(2+s)}}
\end{gather}
$$

で，いずれの$t$の解が得られても$\frac{u}{r}$の値は同じなので，どっちか好きな方を選べばよい．とりあえず，ここではプラスの方を選ぶことにしよう．
これで，(38)のカギ括弧内を2乗の形で表せるような$u$を求めることができた．

$$
\begin{gather}
(k^2 + e_\oplus^2 k - u)^2 - \left( e_\oplus^2 \frac{q-u}{v}k + v \right)^2 = 0 \\
\left( k^2 + \frac{v-u+q}{v}e_\oplus^2k + v - u\right)\left( k^2 + \frac{v-u+q}{v}e_\oplus^2k - v - u\right) = 0 \\
\mathrm{where}~~ v = \sqrt{u^2 + e_\oplus^4 q}
\end{gather}
$$

(47)のひとつ目の括弧内は，$v-u, v, q$がいずれも正なので，$k>0$に解は持たない．
なので，興味があるのはふたつ目の括弧内の方である．$u+v$が正なので，$k>0$の解はひとつだけで，これは以下のように書ける．

$$
\begin{gather}
k = \sqrt{u+v+w^2} - w, ~~ \mathrm{where} ~~ w = e_\oplus^2\frac{u+v-q}{2v}
\end{gather}
$$

これで$k$が一意に求まったので，緯度も高度も求めることができる．

$$
D = \frac{k\sqrt{x^2+y^2}}{k+e_\oplus^2}, ~~
C_\oplus = \frac{\sqrt{D^2+z^2}}{k} \\
h_\mathrm{ellp} = \frac{k+e_\oplus^2-1}{k}, ~~
\phi_\mathrm{gd} = 2 \arctan \frac{z}{D+\sqrt{D^2+z^2}}
$$

元論文[^2]には変換に最低限必要な式がリストアップされているので，
それらをもとに簡単なスクリプトを書くと，ECEF座標からgeodeticなパラメタへの変換を実行できる．

```python
# WGS84 parameters
flattening = 1/298.257223563
semimajor = 6378.137
eccentricity = np.sqrt(2*flattening - flattening**2)

def geodetic_vermeille(x, y, z):
    """ calculate the geodetic latitude and altitude based on 
    H. Vermeille, "Direct transformation from geocentric to geodetic coordinates", 2002, Journal of Geodesy, 76:451-454
    
    # Args:
        x(ndarray): x coordinate in ECEF, km
        y(ndarray): y coordinate in ECEF, km
        z(ndarray): z coordinate in ECEF, km
    
    # Returns:
        lat(ndarray): geodetic latitude, rad
        lon(ndarray): geodetic longitude, rad
        h(ndarray): geodetic altitude, km
    """
    p = (x**2 + y**2)/semimajor**2
    q = (1 - eccentricity**2) * z**2 / semimajor**2
    r = (p + q - eccentricity**4)/6
    s = eccentricity**4 * p * q / (4 * r**3)
    t = (1 + s + np.sqrt(s * (2 + s)))**(1/3)
    u = r * (1 + t + 1/t)
    v = np.sqrt(u**2 + eccentricity**4 * q)
    w = eccentricity**2 * (u + v - q)/(2 * v)
    k = np.sqrt(u + v + w**2) - w
    D = k * np.sqrt(x**2 + y**2)/(k + eccentricity**2)
    lat = 2 * np.arctan(z/(D+np.sqrt(D**2 + z**2)))
    lon = np.arctan2(y, x)
    h = (k + eccentricity**2 - 1)/k * np.sqrt(D**2 + z**2)
    return lat, lon, h
```

<!-- ちなみにこの方法を提案したVermeilleさんは，ECEF座標からgeodetic座標への変換方法についての論文を3本出しているだけで，他にPublicationはなく，大学等の研究機関に所属しているわけでもなさそうなのだが，3本とも単著でGeophysics分野の一流ジャーナルに通して，引用数も大ヒット，いったい何者なんだろう... -->

[^1]: David A. Vallado, Fundamentals of Astrodynamics and Applications Fourth Edition, 2013, Microsoft Press

[^2]: H. Vermeille, "Direct transformation from geocentric to geodetic coordinates", 2002, Journal of Geodesy, 76:451-454






