---
layout: post
title: "Lettera a studenti e studentesse sui jeans strappati"
published: true
tags: matematica
categories: Lettere
---

Cari ragazzi e care ragazze, ormai che avete aperto questa mia brevissima
lettera vorrei parlarvi di un interessante risultato matematico, il [teorema di
Zeckendorf](https://math.osu.edu/sites/math.osu.edu/files/henderson_zeckendorf.pdf)
(il link è uno dei tanti che si possono trovare in rete, una semplice formulazione del
teorema, insieme ad alcune interessanti applicazioni,  l'ho trovata su [Concrete
Mathematics](https://www.pearson.ch/HigherEducation/Addison-Wesley/EAN/9780201558029/Concrete-Mathematics) ).

Non vi arrabbiate, non è la prima volta che uso questo trucco con voi.

Sia data quindi la successione di Fibonacci che, come ricorderete, è formata dai
numeri naturali $F_i$ tali che $F_{i+2} = F_i + F_{i+1}$ e con $F_0=0$ e
$F_1=1$. Ne abbiamo parlato molto in classe e abbiamo visto insieme la
connessione meravigliosa con la sezione aurea ed in generale con gli alogoi
greci. Ebbene, il teorema di Zeckendorf dice che ogni numero naturale $n$ può
essere visto in modo unico come somma di numeri di Fibonacci non consecutivi e
diversi da $F_0$ e $F_1$. In questa somma inoltre ciascun numero di Fibonacci
compare al più una volta sola. Questo teorema risulta particolarmente
interessante perché permette di rappresentare i numeri naturali in una forma
diversa dall'usuale forma decimale. Vediamo un esempio; il numero $10$ può
essere visto come

$$ 10 = 8 + 2 $$

cioè come somma di $F_6$ ed $F_3$. Si potrebbe anche usare la scomposizione

$$ 10 = 5 + 3 + 2 $$

ma in questo caso non sono rispettate le ipotesi del teorema in quanto $5$ e $3$
sono numeri di Fibonacci consecutivi. In questo modo si può rappresentare un
qualsiasi numero naturale con una serie di $1$ e $0$ (da non confondere con lo
sviluppo in base binaria) che indicano quali numeri di Fibonacci costituiscono
il suo sviluppo (a partire da $F_2$). Nel caso di $10$ si ottiene per esempio $10010$ (una
variante di questa rappresentazione è molto utile in ambito informatico).

La dimostrazione del teorema non è
particolarmente difficile (potete provare a seguire i due riferimenti che vi ho
messo all'inizio) ed anzi è istruttiva: suggerisco una possibilità, se $n$ è un naturale, si può prendere il massimo numero di
Fibonacci più piccolo o uguale a $n$, lo si sottrae ad $n$ e si prosegue
iterativamente nello stesso modo con il risultato della sottrazione fino a
quando non si ottiene $0$. Provate con qualche esempio e vedrete che funziona
(così non è una dimostrazione, sto solo suggerendo una strada).

Se ne avete voglia uno di questi giorni riprendiamo il discorso. Un caro saluto,
prof.


P.S.
Riguardo ai jeans strappati ed alla polemica sul decoro che nei giorni scorsi si
è alimentata per qualche tempo, sapete come la penso sulla forma esteriore. Le
mode (con il loro corollario su ciò che è conveniente e sconveniente, decente o indecente) sono accidenti del tempo la cui durata riguarda una singola generazione e forse meno; per questo
sono più interessato all'universalità delle idee e dell'anima (in senso
platonico). Ad essere sincero mi preoccupano molto di più gli
strappi nel tessuto sociale e nel vissuto di voi ragazzi e ragazze che non
quelli che a volte si trovano sui vostri pantaloni. Ma ovviamente è solo un pensiero
mio, non lo elevo a credo rivoluzionario, ognuno darà importanza alla parola
decoro al meglio della propria sensibilità. Per quel poco che mi riguarda
entrate in classe vestiti come meglio credete, con la misura, l'onestà e lo sguardo sereno
che vi contraddistingue; il compito complesso che ci attende ogni giorno è di dare un abito 
degno alle idee.
