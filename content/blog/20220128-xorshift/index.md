---
title: Xorshiftをざっくり理解する
date: "2022-01-28T00:00:00.000Z"
description: "Get an idea of Xorshift"
tags: ["Programming"]
---

## はじめに

擬似乱数を発生させるアルゴリズムとして，線形合同法，Xorshift，メルセンヌ・ツイスタ，などいくつか有名なものがある．
その中でも操作が単純で高速なXorshiftについて，ざっくり何をやっているのかを元論文[^1] [^2]を参照しながら考えてみたい．証明やパラメタの詳細は元論文を見てもらうことにして，ここでは大まかな考えかたを追っていこう．

<details><summary></summary>
Es gibt mehrere Algorithmen, Pseudozufallszahlen zu generieren, z.B. Lineare Kongruenzgenratoren, Xorshift, Mersenne Twister und so weiter. 
In diesem Blogartikel disktirern wir über das Konzept des Xorshift Algorithms.
</details>

## 行列による擬似乱数の生成

擬似乱数を発生させる方法には様々なアプローチがあり得るが，大きな方向性として，
n次のバイナリ$\beta$に対して，$n \times n$バイナリ行列$T$を作用させていき，$\beta T,~\beta T^2,~\cdots$という数列を作ることで，擬似乱数を発生させる方法を考えよう．

このとき，以下の主張は同値になる．

1. ゼロでない任意のn次バイナリに対して，$n \times n$バイナリ行列$T$を作用させていくと，ゼロ以外のn次バイナリを全て作ってくれる．
2. $n \times n$バイナリ行列$T$の周期は$2^n-1$

同値性に関して，元の論文[^2]では固有多項式を用いたりして議論しているが，感覚的には自然に納得できると思う．

1 $\Leftarrow$ 2 に関して：

$T$の周期が$k = 2^n-1$ということは，あるバイナリ$\beta$に対して$\beta T^k= \beta$で，当然それまで($\beta T,~\beta T^2,~\cdots$)に$\beta$は踏んでいない．
なのでその間，n次バイナリのとりうる元が$2^n$個あるうち，ゼロと初期バイナリを除いたすべての元を踏んでいかないといけないことが分かる（途中で同じものを踏むと，そこでループする）．

1 $\Rightarrow$ 2 に関して：

行列$T$を作用させると，あるバイナリ$\beta$に対して，一意にバイナリ$\beta T$を与えるので，とりうるバイナリを全て発生させていくには，毎回異なるバイナリを発生させ続けなければならない．なので，$2^n-1$回の操作で元のバイナリに戻るという周期になるはずだ．

<details><summary></summary>
Jetzt denken wir über eine Methode nach, bei der wir eine binäre n×n Matrix auf eine n-th binäre Vektor anwenden und die Folge von binären Vektoren erstellen. 
Um möglichst viele untershiedliche Zahlen zu erzeugen, sollten wir eine Matrix wählen, deren Periode 2&#8319;&minus;1 ist.
</details>

## Xorshiftを使う理由

では，周期$2^n-1$の$n \times n$バイナリ行列$T$はどうやって見つければいいだろうか．
すぐにわかる特徴として，行列$T$は正則でなければならない（もし正則でないとすると，どこかでつぶれてゼロになってしまう）．
ただこれだけでは行列の形は絞れないし，実際，周期の条件を満たすような行列は大量に存在する．

むしろ方針としては，どのような行列の作り方をすれば行列計算のコストがかからないか，という視点から行列の候補を出していき，それらが周期の条件を満たすかチェックしていきたい．そこで出てくるのがXorshiftという操作だ．

ビットシフトの操作は行列では，shift matrixとして表される．
例えば$4 \times 4$の行列では，左に1ビットシフトさせる行列$L^1$，右に1ビットシフトさせる行列$R^1$，はそれぞれ次のように表される．

$$
R^1 = 
\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
\end{bmatrix}, 
\hspace{20pt}
L^1 = 
\begin{bmatrix}
0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
\end{bmatrix}
$$

これらは正則でないので，xor（排他的論理和）の操作を加えることで$T=I+L^a$または$T=I+R^b$とすると，正則かつ計算コストが少ない操作を作ることが出来る．Cコードではそれぞれ次のように表される．

```c
y ^ (y << a)
```

```c
y ^ (y >> b)
```

なので，これらを組み合わせることで，行列$T$の候補を作って，周期の条件を満たすか確認すればよい．

元論文[^1]によれば，$n=32$のとき，$T=(I+L^a)(I+R^b)$または$T=(I+R^b)(I+L^a)$という形で，周期の条件を満たすものはなく，$T=(I+L^a)(I+R^b)(I+R^c)$の形であれば，条件を満たす$(a, b, c)$の組み合わせが多数存在するそうだ．

これまでの議論で分かるように，Xorshiftのアルゴリズムは，$2^n-1$個のバイナリが出現することは保証するものの，どのようなばらつき方で出てくるかについては言及していないので，その点については別途テストする必要がある．
$n=32$の場合は$(a,b,c) = (13,17,15)$という組み合わせが良く用いられており，特に理由がなければこのパラメタを用いるのが良さそうだ．

<details><summary></summary>
Nun die Frage ist, wie man eine Matrix mit einer Periode von 2&#8319;&minus;1 finden.
Eine notwendige Eigenschaft ist, dass die Matrix regelmäßig sein muss.
Das reicht jedoch nicht aus, um die Form der Matrix zu bestimmen.
Daher suchen wir zunächst nach Matrixoperation, die mit geringem Rechenaufwand durchgeführt werden kann. Und dann prüfen wir, ob diese Matrix die Periode-Anforderung erfüllt.
Für solche Matrixoperation ist xor-Shift ein guter Kandidat.
Bit-Shift Operation kann als eine Shift-Matrix beschrieben werden.
Da eine Shift-Matrix nicht regulär ist, führen wir eine zusätzliche xor-Operation durch. Auf diese Weise kann ein regulär Matrixoperation mit geringem Rechenaufwand erstellt werden.
Für n=32 ist es möglich, eine Matirx mit der Periode von 2&#8319;&minus;1 aus drei (oder mehr) xor-Shift Operationen zu erstellen, und normalerweise wird (a, b, c) = (13, 17, 15) verwendet.
</details>


[^1]: Marsaglia, G. (2003). Xorshift RNGs. Journal of Statistical Software, 8(14), 1–6. https://doi.org/10.18637/jss.v008.i14

[^2]: George Marsaglia, Liang-Huei Tsay, Matrices and the structure of random number sequences, Linear Algebra and its Applications, Volume 67, 1985, Pages 147-156, ISSN 0024-3795, https://doi.org/10.1016/0024-3795(85)90192-2.