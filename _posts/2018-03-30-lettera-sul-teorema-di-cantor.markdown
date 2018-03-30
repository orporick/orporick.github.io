---
layout: post
title: "Lettera sul teorema di Cantor"
published: true
tags: [lettera, matematica]
---

Cara A.

prima di tutto vorrei ringraziarti per le belle parole che hai avuto in classe pochi giorni fa dopo
la consegna della verifica, mi rincuora sapere che non stai perdendo interesse per la matematica per
causa mia. La fatica di questi mesi renderà più agile il percorso successivo, ne sono certo. In
realtà ti scrivo principalmente per un altro motivo: se ricordi, a causa della piccola porzione di
spaziotempo che le nostre lezioni occupano, abbiamo dovuto tagliare alcune parti del nostro percorso
con la promessa che avrei in qualche modo rimediato. Stasera vorrei dunque parlarti del teorema di
Cantor; non vi è altro motivo se non quello estetico, è un risultato semplice e maestoso,
accessibile con la matematica che abbiamo fatto l'anno scorso ed è un peccato che vada perso.

Per poterti dare l'enunciato del teorema e la sua dimostrazione è bene che prima ricordiamo alcune
definizioni elementari (sono tutte cose viste l'anno scorso ed all'inizio di quest'anno, controlla
sugli appunti, qui sarò molto schematico). Se $A$ è un insieme diremo che $B$ è un sottoinsieme di $A$ se ogni elemento
di $B$ appartiene anche ad $A$. Inoltre si considera che l'insieme vuoto è sottoinsieme di qualsiasi
insieme e che l'insieme $A$ è sottoinsieme di se stesso. Diremo che $f$ è una biiezione dell'insieme
$A$ sull'insieme $B$ se è una funzione che associa ad ogni elemento di $A$ uno ed un solo elemento
di $B$ in modo che a due elementi di $A$ distinti vengano associati due elementi di $B$ distinti
(iniettività) e che ogni elemento di $B$ sia immagine per $f$ di un elemento di $A$ (suriettività). 

In pratica $f$ è una biiezione se

$$ x_1, x_2 \in A | x_1 \neq x_2 \longrightarrow f(x_1) \neq f(x_2) $$

$$ \forall y \in B \, \exists x \in A | y = f(x) $$

Due insiemi si dicono equipotenti (o di uguale cardinalità) se esiste una biiezione tra loro. Per
insiemi finiti questo si traduce nella proprietà di avere lo stesso numero di elementi. Se tra
l'insieme $A$ e l'insieme $B$ esiste una applicazione iniettiva, ma non suriettiva, allora la
cardinalità di $B$ è maggiore di quella di $A$; detta in parole povere $B$ è "più grande" di $A$
(metto le virgolette perché per insiemi non finiti questo chiaramente va interpretato non in termini
di numero di elementi visto che in questo caso sono infiniti).

Bene, sia $A$ un insieme e $\cal{P}(A)$ l'insieme potenza di $A$, ovvero l'insieme di tutti i suoi sottoinsiemi.
Il teorema di Cantor afferma allora che la cardinalità di $\cal{P}(A)$ è maggiore di quella di $A$.
Per insiemi finiti si può dimostrare (esercizio, prova) che la cardinalità di $\cal{P}(A)$ è pari a
$2^n$ dove $n$ è la cardinalità di $A$ (suggerimento, prova a pensare al triangolo di Tartaglia ed ai
coefficienti binomiali).

L'importanza del teorema è nel garantire l'esistenza di insiemi di cardinalità sempre maggiore anche
quando si ha a che fare con insiemi non finiti. La
cosa non è scontata, se ti ricordi il percorso che avevamo fatto sulla numerabilità: i numeri
naturali, interi e razionali sono tutti equipotenti, ma il teorema garantisce che sicuramente c'è un
insieme più che numerabile.

Vediamo la dimostrazione che è bellissima. Procediamo per assurdo, ipotizzando che esista una
applicazione suriettiva $f$ da $A$ a $\cal{P}(A)$; dunque per ogni $x\in A$ abbiamo che $f(x)$ è un
sottoinsieme di $A$. Se $x$ non appartiene a tale sottoinsieme lo chiamiamo (nome di fantasia)
"solitario". Definiamo allora l'insieme $B$ come l'insieme di tutti gli elementi di $A$ che sono
solitari, ovvero 

$$ B = \{ x \in A | x\notin f(x) \}$$

Chiaramente $B$ è un sottoinsieme di $A$, dunque appartiene a $\cal{P}(A)$ e quindi, visto che per
ipotesi $f$ è suriettiva, deve esserci un elemento $b\in A$ tale che $B = f(b)$. Chiediamoci se $b$
è solitario o no. Se è solitario, per definizione, deve appartenere a $B$, ma allora $b\in f(b)$ che
è assurdo perché deve essere solitario. Se non è solitario allora $b\notin B$ e quindi deve
appartenere a $f(b)$, che di nuovo è assurdo. In pratica abbiamo ottenuto che se $b\in B$ allora
$b\notin B$ e se $b\notin B$ allora $b\in B$. Visto l'assurdo in entrambi i casi deduciamo che la
premessa che esista un $b$ tale che $B = f(b)$ è falsa e dunque $f$ non può essere suriettiva.

Ti lascio come esercizio dimostrare che invece esiste un'applicazione iniettiva da $A$ a
$\cal{P}(A)$. Dunque si possono trovare applicazioni iniettive, ma non suriettive tra $A$ ed il suo
insieme potenza e quindi la cardinalità di $\cal{P}(A)$ è maggiore di quella di $A$ in generale, non
solo nel caso finito.

Come vedi la dimostrazione è piuttosto breve e tutto sommato semplice (se hai difficoltà prova a
rileggerla un paio di volte, vedrai che si chiarirà). Se hai inoltre la sensazione di averla già
vista sappi che questa è una versione più generale dell'argomento diagonale di Cantor che abbiamo
usato per mostrare la diversa cardinalità dei reali dai naturali. L'ho sempre trovata molto bella per l'uso
della dimostrazione per assurdo e per una certa somiglianza con il paradosso del mentitore che
abbiamo discusso recentemente in classe; lascio a te la possibilità di investigare ulteriormente
questa suggestione, se ne avrai voglia.

Un caro saluto, prof.

