---
title: Second Surface Mirrorをモデル化する
date: "2022-07-08T00:00:00.000Z"
description: ""
tags: ["Thermal"]
---

## Second Surface Mirror

FEPやクオーツガラスは可視光に対しては非常に透過性が高く，一方で赤外領域では吸収率を持つ．
この片面に銀またはアルミ蒸着を施すと，高いEmissivityかつ低いAbsorptivityを持った放熱面を作ることができる．これがSecond Surface Mirrorの主なコンセプトだ．

例えば，片面アルミ蒸着のFEP（51&micro;m）では，FEP側とアルミ側それぞれの光学特性はおおよそ次のような値になる．確かにFEPは可視光領域ではほぼ透明で，どちらの面でもアルミの表面特性が現れているようだ．

<div align=center><img src=".\alu-fep.svg" width="400"></div>

一方で，肉眼でも色のついて見えるポリイミドのSecond Surface Mirrorの場合，
Emissivity，Absorptivityの両方に対して影響があることが分かる．

<div align=center><img src=".\alu-polyimide.svg" width="400"></div>

## Second Surface Mirrorのモデル化

Second Surface Mirrorの表面を熱モデルで表す場合，Second Surface Mirrorとして測定された光学特性をそのまま適用すればよい．ただ，いまいち釈然としないのが，FEP層やポリイミド層そのものの光学特性（Transmittanceも含めて）はいくつで，それらとアルミ層をどうモデル化するとSecond Surface Mirrorとしての光学特性が得られるのかという点だ．







