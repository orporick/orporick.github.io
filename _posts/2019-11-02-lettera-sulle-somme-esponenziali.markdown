---
layout: post
title: "Lettera sulle somme esponenziali"
published: true
tags: [matematica]
categories: Lettere
---

Cara S.

spero tu stia bene, mi ha fatto piacere ricevere tue notizie e sono sicuro che
in California ti troverai benissimo. Mi hai chiesto della strana immagine che
hai visto ieri sul mio profilo, te la ripropongo qui di seguito.

<p align="center"> 
<img src="{{ site.url }}/images/exp_1.png">
</p>

Ho generato questa immagine dopo aver letto un [interessante articolo online](https://www.maths.unsw.edu.au/about/exponential-sums) sulle *somme esponenziali*.
Ma andiamo per gradi. Ricorderai che in classe (quanti anni sono passati?)
abbiamo studiato i numeri complessi e la loro rappresentazione grafica sul piano
di Argand-Gauss dove in ascissa si mette la parte reale ed in ordinata la parte
immaginaria. Ricorderai inoltre che i numeri complessi di modulo $1$ (cioè la cui
distanza dall'origine del piano è pari a $1$) si possono scrivere in forma
esponenziale come $e^{i\theta}$ dove $\theta$ è l'angolo in senso antiorario
formato con l'asse delle $x$. Ricorderai infine che si chiamano radici ennesime
di $1$ tutti i numeri complessi $z$ tali che $z^n = 1$. Siccome $1$ è pari a
$e^{i0}$ e, per periodicità, a $e^{i2\pi}$ e più in generale a $e^{i2\pi k}$ con
$k$ intero, è facile vedere che le $n$ radici ennesime di $1$ sono nella forma

$$ e^{i\frac{2\pi}{n}k}$$

con $k\in [0,1,\ldots,n-1] $.

Se ricordi abbiamo dimostrato in classe che queste radici si dispongono secondo
i vertici di un poligono regolare centrato nell'origine. Per esempio le $8$
radici ottave di $1$ sono rappresentate dai vertici del seguente ottagono:

<p align="center"> 
<img src="{{ site.url }}/images/exp_2.png">
</p>

Cosa succede se sommiamo le radici di $1$? Intanto se le sommiamo tutte è facile
vedere (ricordi?) che si ottiene $0$. 

Come esercizio puoi dimostrare che le
somme parziali si dispongono di nuovo sui vertici di un poligono che parte e
ritorna in $0$; in figura l'esempio con le radici ottave.

<p align="center"> 
<img src="{{ site.url }}/images/exp_3.png">
</p>

Inoltre continuando a sommarle, siccome si riparte da zero, si ripassa attraverso gli stessi punti. 

Dunque, le somme parziali della seguente sommatoria

$$ \sum_{k=0}^N e^{i\frac{2\pi}{n} k} $$

si dispongono su un poligono regolare di $k$ lati. Cosa succede se invece di
moltiplicare per $k/n$ uso una funzione più complicata? Eccoci arrivati alle
somme esponenziali complesse, definite come

$$ \sum_{k=0}^N e^{i 2\pi f(k)} $$

con $f(k)$ una funzione sugli interi. La figura che si ottiene dalle somme
parziali, che in generale non sarà più un semplice poligono, 
dice molto sulla funzione $f$ scelta ed è uno strumento di analisi
molto interessante in teoria dei numeri. Ai fini dell'immagine di partenza ho
usato, come suggerito nel link che ti ho messo all'inizio, la seguente somma
esponenziale

$$ \sum_{k=0}^N e^{i 2\pi \left( \frac{k}{g} + \frac{k^2}{m} + \frac{k^3}{a} \right)} $$

con $g$ il giorno della mia nascita, $m$ il mese (in numero) e con $a$ l'anno.
Il risultato è la figura all'inizio di questa mia lettera. Ovviamente non c'è
nulla di particolare nella data del mio compleanno (dalla simmetria della figura
riesci a capire il giorno?), a titolo di esempio ecco cosa viene fuori per il 25
dicembre del 2019.

<p align="center"> 
<img src="{{ site.url }}/images/exp_4.png">
</p>


Spero ti venga voglia di esplorare autonomamente questo tipo di territorio, se
ti va prova a mandarmi la figura corrispondente alla tua data di nascita.

Un caro e sincero saluto, prof.






