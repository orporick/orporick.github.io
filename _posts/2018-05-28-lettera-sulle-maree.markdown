---
layout: post
title: "Lettera sulle maree"
published: true
tags: [fisica, lettera]
---

Carissimo E.

ti scrivo per riassumere, con qualche dettaglio, il discorso iniziato qualche giorno fa sulle maree.
Se ricordi il tutto era partito da una imprecisione comune nei libri di testo scolastici, ovvero che
le maree siano dovute all'attrazione gravitazionale della Luna tout court. In realtà, come ti ho
detto, l'effetto di marea è dovuto non tanto al campo gravitazionale, ma al moto di caduta libera in tale campo.

Provo a spiegarmi in un contesto apparentemente diverso da quello terrestre. Immagina un ascensore
in caduta libera in un campo gravitazionale ed al cui interno siano posizionate cinque palline, di
cui una coincidente con il centro di massa dell'ascensore. Siano le masse delle palline e
dell'ascensore talmente piccole da trascurare qualsiasi effetto gravitazionale reciproco.

<p align="center"> 
<img src="{{ site.url }}/images/lift.jpg">
</p>


Immaginiamo per un momento un campo gravitazionale uniforme, ovvero uguale e costante in ogni punto
come ad esempio il campo in prossimità della superficie terrestre. In tal caso l'accelerazione
dell'ascensore sarebbe $g$ e coincide con l'accelerazione di ogni corpo al suo interno (come
ricorderai non dipende dalla massa ed essendo il campo uniforme non dipende nemmeno dalla
posizione). Il risultato è che se ascensore e palline partono da fermi, avendo la stessa
accelerazione si muoveranno esattamente allo stesso modo e dunque un osservatore all'interno
dell'ascensore vedrà le cinque palline ferme rispetto all'ascensore. 

Cosa succede però se il campo gravitazionale non è uniforme? Prendiamo per esempio il campo
gravitazionale generato da un corpo sferico come la Terra senza fare l'approssimazione di campo
uniforme; allora l'accelerazione sarà diretta verso il centro della Terra ed avrà una intensità data
da 

$$ \frac{GM}{r^2} $$

dove $r$ è la distanza dal centro. Si vede subito in questo caso che l'accelerazione dei cinque
corpi nell'ascensore non è più la stessa. Il corpo $C$, essendo nel centro di massa dell'ascensore,
cadrà solidale con esso e quindi, per l'osservatore in caduta libera, rimarrà fermo. 
Prendendo in esame invece i due corpi $A$ e $B$ si vede che $B$ è più vicino alla Terra e quindi
avrà un'accelerazione maggiore ed $A$ è più lontano e quindi un'accelerazione minore. Se prendiamo
un asse verticale, poniamo il centro in $C$ e chiamiamo $R$ la distanza di $C$ dal centro della
Terra e $z$ quella di $A$ da $C$ si vede subito che le accelerazioni sono 

$$ g_C = \frac{GM}{R^2} $$

$$ g_A = \frac{GM}{(R+z)^2} $$

Facendo un'approssimazione al primo ordine per $z$ piccolo (ovvero consideriamo la dimensione
dell'ascensore piccola rispetto alla distanza $R$ dal centro della Terra) si ottiene facilmente
(esercizio)

$$ g_A = \frac{GM}{R^2} - 2\frac{GM}{R^3}z $$

Se immaginiamo di considerare un tempo di osservazione del moto piccolo possiamo prendere queste
accelerazioni costanti; allora avremo un moto uniformemente accelerato. Dunque la distanza tra $C$ e
$A$ varia con un'accelerazione relativa di

$$ 2\frac{GM}{R^3}z $$

Alcuni commenti: l'espressione così ottenuta è positiva per $z$ positivo, quindi per il punto $A$,
ma si vede facilmente che per il punto $B$ il discorso è del tutto simile solo con $z$ negativo.
Dunque abbiamo una forza netta, nel riferimento in caduta libera, repulsiva, ovvero $A$ tende ad
allontanarsi verso l'alto da $C$ (che ricordo è al centro) e $B$ tende ad allontanarsi verso il
basso da $C$. Questa accelerazione può essere pensata come generata da una forza inerziale che 
si chiama "forza di marea" e come si vede è lineare con la dimensione del
riferimento in caduta libera ($z$ per intenderci) e dipende dalla massa del pianeta e inversamente
proporzionale alla distanza dal centro del pianeta al cubo. Per sistemi in caduta libera
sulla Terra la forza di marea è molto piccola (prova), ma se prendo un corpo con $M$ molto più grande e $R$
molto più piccolo gli effetti di stiramento che abbiamo visto diventano importanti; questo avviene,
per esempio, in determinate condizioni nei buchi neri, ma ci stiamo allontanando dal punto di
partenza. Ti lascio dimostrare che per i punti $D$ ed $E$ ci sono forze di marea però attrattive
verso il punto $C$ la cui accelerazione, nelle approssimazioni viste prima e chiamando con $x$ l'asse
che contiene i punti, è pari a 

$$ -\frac{GM}{R^3}x $$

(il segno meno rappresenta appunto la natura attrattiva della forza di marea trasversale). 

In definitiva, se i quattro punti $A$, $B$, $D$ ed $E$ sono posizionati all'inizio su un cerchio
verticale centrato nel centro $C$ del riferimento in caduta libera, dopo un po' vedremo tale cerchio
deformarsi in una ellisse con asse maggiore lungo la direzione di caduta e asse minore in direzione
trasversale.

Bene, cosa c'entra tutto questo con le maree? Il fatto è che la Terra è in caduta libera nel campo
gravitazionale della Luna; non cade verticalmente, ma orbita intorno al baricentro comune (che è
all'interno del raggio terrestre). Ma questo non cambia la sostanza (la complica solo un po').
Dunque sulla terra agiscono delle forze di marea simili a quelle che abbiamo visto nell'esempio
dell'ascensore in caduta. Le forze di marea sono piccole per avere effetti rilevanti sulla parte
solida della terra, ma sugli oceani, che sono liberi, diventano evidenti. Nota che questo spiega
perché l'acqua si innalza non solo dalla "parte" della Luna, ma anche dalla parte opposta. E' un
effetto di stiramento simile a quello che abbiamo visti per i punti $A$ e $B$; non solo $B$ si
abbasta rispetto a $C$ nella direzione del pianeta, ma $A$ se ne allontana. Stessa cosa per le maree
sulla Terra, l'acqua si alza non solo dalla parte "in caduta" verso la Luna, ma anche dalla parte
opposta. 

Ci sarebbero molte cose da poter discutere su quanto abbiamo visto qui; a causa delle maree la Luna
ci mostra sempre la stessa faccia, il satellite Io di Giove ha una intensa attività vulcanica,
Saturno ha un meraviglioso sistema di anelli, la caduta in un buco nero di piccola massa può essere molto 
pericolosa e gli effetti di marea sono importantissimi per introdurre la Relatività Generale.

Magari in una prossima lettera. 

Un caro saluto, R.

P.S.
La prima volta che ho visto queste considerazioni ero studente di  Elio Fabri a cui devo molto  per avermi
fatto scoprire una parte consistente di universo.




