---
layout: post
title: "Lettera su Farey"
published: true
tags: [matematica, code, J]
categories: Lettere
---

Caro L., mi spiace per il ritardo con cui rispondo alla tua domanda, provo a
farmi perdonare cercando di essere il più esaustivo e sintetico possibile.
Mi chiedi di un mio [recente
tweet](https://twitter.com/orporick/status/1231721647603933185) abbastanza, lo
ammetto, criptico. Ricorderai che in una [precedente lettera](http://orporick.github.io/lettere/2019/11/29/lettera-su-un-piccolo-codice/) ti ho parlato del linguaggio J e delle sue potenzialità come linguaggio di
esplorazione matematica. Recentemente in classe vi ho parlato delle sequenze
di Farey e mi è venuto in mente di provare ad ottenerla con un piccolo
codice J come esercizio personale.

Ti ricordo che la sequenza di Farey di ordine $n$ è definita come l'insieme
ordinato delle frazioni ridotte ai minimi termini comprese tra $0$ e $1$ il cui denominatore non
supera $n$. Per esempio la sequenza di ordine $4$ è

$$ \frac{0}{1} \quad \frac{1}{4} \quad \frac{1}{3} \quad \frac{1}{2} \quad
\frac{2}{3} \quad \frac{3}{4} \quad \frac{1}{1} $$

Notiamo subito che la sequenza ha una certa simmetria, $1/2$ si trova al centro
(dimostra per esercizio che questo succede per ogni ordine $n$) e gli elementi a
destra di $1/2$ si possono ottenere sottraendo a $1$ gli elementi che si trovano
a sinistra. Tutto questo (e altro di cui vi ho parlato) 
potrebbe essere usato per costruire un codice più efficiente di quello che ti propongo, 
se hai voglia di pensarci ne parliamo poi in classe.

Seguendo la strada bovina e dando un'occhiata a quel paradiso del codice che è
[rosettacode.org](https://rosettacode.org/wiki/Farey_sequence), 
ecco la mia proposta (cambiata nel frattempo rispetto
al tweet che ti ha incuriosito e sicuramente ulteriormente  migliorabile)  
per ottenere la sequenza di ordine $4$ (ovviamente generalizzabile):

```j
/:~ (#~<:&1) ~. ,x: (i. %/ i.) 5
```

Analizziamola nel dettaglio (farò riferimento alla mia precedente lettera per
alcuni costrutti di J, se non ti ricordi ti consiglio di andartela a rileggere).

Prima di tutto abbiamo un fork:

```j
(i. %/ i.)
```

A sinistra e a destra genera una sequenza crescente di numeri naturali

```j

i.5 --> 0 1 2 3 4
```

che vengono passati all'operatore di divisione %/ che non fa altro che
restituire la divisione di ciascun elemento della lista di sinistra con ciascun
elemento della lista di destra. Dunque il costrutto

```j
(i. %/ i.) 5
```

restituisce la matrice con tutte le divisioni

```j
0 0   0        0    0
_ 1 0.5 0.333333 0.25
_ 2   1 0.666667  0.5
_ 3 1.5        1 0.75
_ 4   2  1.33333    1
```

Per inciso nota come J tratta tranquillamente le divisioni per zero, il simbolo
_ rappresenta infinito. Siccome vogliamo trattare i razionali come frazioni e
non come sviluppo decimale, concateniamo con l'operatore x: che, appunto,
restituisce di un numero la sua frazione; quindi

```j
x: (i. %/ i.) 5
```

restituisce la matrice di frazioni

```j
0 0   0   0   0
_ 1 1r2 1r3 1r4
_ 2   1 2r3 1r2
_ 3 3r2   1 3r4
_ 4   2 4r3   1
```

(ti ricordo che in J arb indica a fratto b). Ci interessano tutte queste
frazioni (alcune in realtà), dunque mettiamo gli elementi in sequenza
concatenando le righe della matric con l'operatore ,

Con
```j
,x: (i. %/ i.) 5
```

otteniamo

```j
0 0 0 0 0 _ 1 1r2 1r3 1r4 _ 2 1 2r3 1r2 _ 3 3r2 1 3r4 _ 4 2 4r3 1
```

Siamo quasi alla fine, a noi di questa lista interessa non avere ripetizioni e
tenere solo le frazioni minori o uguali a $1$. Per eliminare le frazioni ripetute
usiamo l'operatore ~. mentre per tenere solo quelle più piccole di $1$ facciamo un
"hook" di due opreatori; in J un hook funziona così

(A B) C --> C A (BC)

ovvero l'argomento C viene passato all'operatore B e il risultato passato a
destra all'opreatore A mentre a sinistra viene passato direttamente l'argomento
C. Per questo hook usiamo a destra l'operatore di confronto (<:&1) che
restituisce una lista con $1$ nelle posizioni minori o uguali a $1$ e $0$
altrove. A sinistra (per il gancio) usiamo l'operatore diadico #~ che prende gli
elementi della lista alla sua sinistra solo nelle posizioni in cui c'è un $1$
nella lista di destra. Per esempio

```j
1 2 3 #~ 1 0 0 --> 1 3
```

Bene, mettendo tutto insieme, con il codice

```j
(#~<:&1) ~. ,x: (i. %/ i.) 5
```

si ottiene

```j
0 1 1r2 1r3 1r4 2r3 3r4
```

La sequenza così ottenuta non è ordinata, per quest'ultimo passo basta
usare l'operatore /:~

```j
/:~ (#~<:&1) ~. ,x: (i. %/ i.) 5
```

ottenendo, infine, la sequenza di Farey di ordine $4$:

```j
0 1r4 1r3 1r2 2r3 3r4 1
```

Ovviamente possiamo a questo punto usare il codice per ottenere sequenze di
Farey di ordine qualsiasi; per esempio

```j
 /:~ (#~<:&1) ~. ,x: (i. %/ i.) 8
0 1r7 1r6 1r5 1r4 2r7 1r3 2r5 3r7 1r2 4r7 3r5 2r3 5r7 3r4 4r5 5r6 6r7 1
```

Bene, come abbiamo già visto J non è un linguaggio semplice, ma una volta che
entri nei suoi meccanismi (io sono solo alla superficie, per questo sto
studiando) diventa veramente uno strumento di esplorazione unico.

Con questo è tutto, come vi ho promesso in classe (mondo permettendo) vi
scriverò di alcune applicazioni veramente interessanti delle sequenze di Farey,
ma la prossima volta niente codice J, promesso.

Un caro saluto, prof.
