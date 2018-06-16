---
layout: post
title: "Lettera del conforto"
published: true
tags: [matematica, lettera]
---

Carissima A.

rispondo volentieri alla tua lettera prima dell'esame, avere dubbi in matematica non solo è normale, è salutare
(secondo me). I due esercizi che mi chiedi sono applicazioni del teorema di Torricelli-Barrow (detto
anche teorema fondamentale del calcolo integrale): data  una funzione definita in questo modo

$$ F(x) = \int_a^x f(t){\rm d} t $$ 

allora $F(a) = 0$ e $F'(x) = f(x)$. In pratica $F$ è una primitiva di $f$ e questo mostra
l'importanza fondamentale del teorema: è il punto di unione tra l'integrale definito e l'integrale
indefinito. Il teorema ha un'estensione (che ci servirà) al caso

$$ F(x) = \int_a^{g(x)} f(t){\rm d} t $$ 

dove $g(x)$ è  una funzione derivabile (detta funzione interna). In tal caso, usando le proprietà delle funzioni
composte, si dimostra che 

$$ F'(x)  = f(g(x))\cdot g'(x) $$

Nota di colore: Torricelli è stato allievo di Galileo, Barrow è stato maestro di Newton.

Iniziamo con il primo esercizio che chiede di trovare la derivata rispetto a $x$ della seguente
funzione

$$ f(x) = \int_x^{x+1} \ln(t) {\rm d}t $$

per $x>0$.

Non è possibile applicare immediatamente il teorema di Torricelli-Barrow, quindi trasformiamo la
funzione usando le note (hem) proprietà degli integrali definiti:

$$ f(x) = \int_a^{x+1} \ln(t) {\rm d}t - \int_a^{x} \ln(t){\rm d}t$$

dove $a$ è un qualunque numero reale positivo.

A questo punto, per il teorema di Torricelli-Barrow

$$ f'(x) = \ln(x+1) - \ln(x) $$

(il primo termine viene da una funzione composta e quindi andrebbe moltiplicato per la derivata
della funzione interna, ovvero $x+1$, ma tale derivata è pari a $1$) da cui, per le proprietà del logaritmo naturale,

$$ f'(x) = \ln\left(\frac{x+1}{x}\right) $$



Passiamo al secondo esercizio che chiede di trovare la retta tangente al grafico della funzione $f$

$$ f(x) = \int_e^{x^2} \frac{t}{\ln(t)} {\rm d}t $$


nel punto di ascissa $\sqrt{e}$. Per trovare il grafico della retta tangente ci servono due cose: un
punto di passaggio ed il coefficiente angolare. Per il primo si vede subito che $f(\sqrt{e}) = 0 $
(viene un integrale definito da $e$ a $e$ che è nullo) e dunque sappiamo che la retta passa per il
punto di coordinate $(\sqrt{e}, 0)$. Per il coefficiente angolare si può trovare facendo la derivata
della funzione $f$. Per quanto visto prima possiamo ottenere tale derivata usando il teorema di
Torricelli-Barrow per le funzioni composte:

$$ f'(x) = \frac{x^2}{\ln(x^2)} \cdot 2x $$

(il termine $2x$ è dato dalla derivata della funzione interna $x^2$). Si vede con facili (hem)
passaggi che

$$ f'(\sqrt{e}) = \frac{e}{\ln(e)} = e $$ 

A questo punto possiamo trovare la retta passante per il
punto di coordinate $(\sqrt(e), 0)$ e con coefficiente angolare $e$ usando la nota (hem) espressione

$$ y - y_0 = m (x - x_0) $$

da cui

$$ y - 0 = e (x - \sqrt{e}) $$

e quindi

$$ y = ex - e\sqrt{e} $$


Spero di averti (almeno un po') confortata con questa breve lettera, se hai altri problemi scrivimi pure. Ricorda
inoltre che l'esame è qualcosa di transitorio, la meraviglia di fronte alla matematica ha
sicuramente un valore più permanente. 

Un caro saluto, prof.

P.S.
Ho recuperato un vecchio video fatto due anni fa sul teorema di Torricelli-Barrow. Se ti può essere
utile eccoti il [link](https://www.youtube.com/watch?v=6uR7oq5w_3o&lc=z233h5qqwy3jj3goa04t1aokghe1n1h2oh50qvmbafxubk0h00410)
