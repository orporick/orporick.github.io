---
layout: post
title: "Lettera irrazionale"
published: true
tags: matematica
categories: Lettere
---

Carissimo P, ti scrivo poche righe, come promesso, per aggiornarti sulla
dimostrazione di cui ti parlavo in classe. Come ti ho accennato, la lettura 
di un [libro interessante](https://www.cambridge.org/it/academic/subjects/mathematics/abstract-analysis/orthogonal-polynomials-and-continued-fractions-eulers-point-view?format=HB&isbn=9780521854191) mi ha fatto scoprire una dimostrazione
dell'irrazionalità della lunghezza della diagonale di un quadrato che trovo
particolarmente bella, soprattutto perché legata alle frazioni continue che,
come sai, sono uno dei miei argomenti didattici preferiti. Questa costruzione è
dovuta a Ippaso di Metaponto che, leggenda vuole, fu punito dagli dei con la morte
per aver portato la conoscenza dell'irrazionalità agli uomini.

Considera dunque il quadrato qui rappresentato e sia la lunghezza di $DA$ pari a
$a$ e di $DB$ pari a $i$; siamo interessati al rapporto $i/a$. 

![My helpful screenshot]({{ site.url }}/images/irra.svg)


Per trovarlo seguiamo 
questa costruzione: sulla diagonale $DB$ individua un punto $E$ tale che $DE$
abbia lunghezza $a$ e poi traccia il segmento $EF$ perpendicolare a $DB$.
Dovresti riuscire a dimostrare facilmente che i segmenti $AF$, $EF$ e $EB$ sono
tutti congruenti; indichiamo con $b$ la loro lunghezza. Sia infine $G$ un punto
di $AB$ tale che $FG$ abbia lunghezza $b$ e indichiamo con $c$ la lunghezza di
$GB$. Bene, da tutto questo si evince che

$$ i = a + b $$

$$ a = 2b + c $$

Il rapporto cercato è dunque

$$ \dfrac{i}{a} = 1 + \dfrac{b}{a} = 1 + \dfrac{1}{\dfrac{a}{b}} $$

da cui

$$ \dfrac{i}{a} = 1 + \dfrac{1}{2 + \dfrac{c}{b}} = 1 + \dfrac{1}{2 + \dfrac{1}{\dfrac{b}{c}}} $$

Ora, se guardi il triangolo $BEF$ è simile al triangolo $BDA$ e $G$ è il punto
analogo a $E$. Questo significa che possiamo ripetere la costruzione
ricorsivamente e quindi esisterà un certo valore $d$ tale che

$$ b = 2c + d$$

Il nostro rapporto diventa allora

$$ \dfrac{i}{a} = 1 + \dfrac{1}{2 + \dfrac{1}{2+\dfrac{d}{c}}} $$

A questo punto la procedura può essere reiterata all'infinito, ottenendo

$$ \dfrac{i}{a} = 1 + \dfrac{1}{2 + \dfrac{1}{2+\dfrac{1}{2+\dfrac{1}{2+\ldots}}}} $$


dove i puntini indicano, appunto, che la frazione continua all'infinito. Siccome
abbiamo visto in classe che le frazioni continue infinite sono irrazionali,
abbiamo appena dimostrato, seguendo le orme di Ippaso, che il rapporto tra la
diagonale del quadrato ed il lato è un numero irrazionale. Con un piccolo trucco
(visto in classe per la sezione aurea, se ricordi), possiamo anche trovarne
esplicitamente il valore. Guardando l'ultima espressione ottenuta, infatti, è facile
verificare che, indicando con $x$ il rapporto $i/a$,

$$ x = 1 + \dfrac{1}{1+x} $$

Risolvendo algebricamente questa equazione troverai che $x$ è uguale a
$\sqrt{2}$, come ci si aspetta dal buon vecchio teorema di Pitagora.

Sono contento di averti scritto questa piccola dimostrazione, ovviamente avremo
modo di riparlarne in classe, se vorrai.

Un caro saluto, prof.

