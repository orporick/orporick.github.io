---
layout: post
title: "Lettera su un piccolo codice"
published: true
tags: [matematica, code, J]
categories: Lettere
---

Caro L., rispondo solo ora alla tua gentile richiesta, sono giorni un po'
impegnativi. Nella tua lettera hai detto di aver visto il mio [tweet](https://twitter.com/orporick/status/1199829863093407746)
іn cui proponevo uno strano codice in [linguaggio J](https://www.jsoftware.com/#/)

```j
((] , +/&(_2&{.))^:10) 1 1
```


Provo a spiegarti in queste poche righe, prendila come una piccola introduzione
ad un sistema per fare matematica sperimentale. 
Il mio interesse per questo strano, ma potente, linguaggio di
programmazione è di natura sentimentale; da giovane laureando in Fisica presso 
l'Istituto di Astronomia di Pisa, tanti tanti anni fa, iniziai ad avvicinarmi 
seriamente al
mondo della programmazione (dopo il basic del Sinclari ZX-80 e del Commodore 64,
nomi che non ti diranno molto) con il classico Pascal e, soprattutto, con APL, un
programma orientato agli array molto particolare, denso e complesso. J è, per
certi versi, il successore di APL, entrambi ideati da K.E.Iverson. Ultimamente,
riprendendo in mano la strana programmazione orientata agli array di J, mi
sembra di camminare di nuovo tra i corridoi di Piazza Torricelli a Pisa in
un'epoca in cui il World Wide Web doveva ancora arrivare.

Passando oltre questi stupidi e personali sentimentalismi, torniamo alla strana
riga. In J le funzioni si chiamano "verbi" (la metafora della grammatica è molto
usata nella comunità di J) e possono essere monadici, ovvero applicati ad un
solo argomento (a destra) o diadici, ovvero applicati a due argomenti (uno a
destra ed uno a sinistra). Per esempio il verbo % se usato in modo monadico
restituisce il reciproco in un numero

```j
%n --> 1/n
```

se usato in modo diadico restituisce la frazione

```j
n%m --> n/m
```

Tre verbi racchiusi da parentesi fanno un "fork": dunque

```j
(a b c)
```

è un fork. Se applicato ad un nome (che può essere un numero, ma anche un array
come vedremo), si ottiene il seguente effetto

```j
(a b c) n --> an b cn 
```

ovvero si applicano i verbi monadici a e c al nome n e i due risultati si passano al
verbo diadico b.

Incominciamo dunque a districare la strana riga del mio tweet; abbiamo applicato
un fork di tre verbi (che ora discuteremo) ad un array di numeri, ovvero 1 1
(vediamo dopo cosa significa poi il simbolo ^:10).

I tre verbi che costituiscono il fork sono

```j
]
```
che non fa altro che duplicare il nome a cui è applicato

```j
] 11 -> 11
```

Abbiamo a destra qualcosa di più elaborato:

```j
+/&(_2&{.)
```

Il termine a destra (in J si parte da destra) è specifico del linguaggio ed
estrae gli ultimi due elementi di un array, ad esempio

```j
_2&{. 1 2 3 4 5 --> 4 5
```

A questo si aggancia (con l'&) un secondo verbo

```j
+/
```

che applica la somma + tra ogni elemento dell'array, nell'esempio tra 4 e 5

```j
+/&(_2&{.) 1 2 3 4 5 --> 9
```

Infine il verbo in mezzo del fork è una semplice , che implica concatenazione,
ovvero costruisce un nuovo array mettendo insieme il risultato a sinistra ed il
risultato a destra. A questo punto dovrebbe esserti chiaro cosa faccia il nostro
fork all'array 1 1

```j
(] , +/&(_2&{.)) 1 1
```

A sinistra replica l'array di ingresso 1 1, a destra calcola la somma degli
ultimi due elementi (quindi 1+1=2) ed infine crea un nuovo array concatenandoli

```j
(] , +/&(_2&{.)) 1 1 --> 1 1 2
```

Ti sarà a questo punto evidente che stiamo costruendo la successione di
Fibonacci. Se applichiamo di nuovo il nostro fork al risultato otteniamo

```j
(] , +/&(_2&{.)) 1 1 2 --> 1 1 2 3
```

e così via. Ecco l'ultimo mistero, l'operazione ^:10 non fa altro che applicare
10 volte il fork, ottenendo la sequenza con i primi 12 (10 + i due iniziali)
elementi della successione di Fibonacci

```j
1 1 2 3 5 8 13 21 34 55 89 144
```

Bene, questo era un semplice esempio di uso di questo particolare linguaggio,
come vedi la potenza simbolica si paga con  una leggibilità ridotta del
codice. Ma ti assicuro che una volta che ti ci appassionerai non tornerai più
indietro. 

Ti lascio come esercizio capire (ed eventualmente sperimentare) cosa significa

```j
 % %/ _2&{. ((] , +/&(_2&{.))^:10) 1 1
```

Cosa succede se aumento quel 10.

Un caro saluto, prof.

P.S. Mi son reso conto scrivendo questo post che Jekyll, il sistema con cui
mantengo questo mio piccolo spazio sulla rete, non supporta il linguaggio J per
il syntax highlight del codice. Solo per questo sarebbe il caso di passare ad un
altro sistema, ma adesso son troppo stanco.
