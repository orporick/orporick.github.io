---
layout: post
title: "Lettera ai miei studenti ed alle mie studentesse sul voto del 4 marzo"
published: true
tags: [matematica]
categories: Lettere
---

Cari ragazzi e care ragazze,
ora che avete aperto questa mia lettera ed ho ottenuto con un sotterfugio la vostra attenzione,
vorrei parlarvi di matematica. Lo so, non è la prima volta che ricorro a questi piccoli inganni, 
perdonate se potete la necessità che provo di parlarvi di panorami diversi dal consueto.

Immaginate di avere il problema di determinare l'intersezione di due rette nel piano. Abbiamo
studiato in questi giorni la rappresentazione algebrica di tale problema, si tratta di mettere a
sistema le due equazioni che rappresentano sul piano cartesiano le due rette. In termini formali

$$
\begin{cases}
ax + by + c = 0 \\
a'x + b'y + c' = 0
\end{cases}
$$

dove le due equazioni lineari in $x$ e $y$ rappresentano, appunto, le due rette. Abbiamo visto come
risolvere nella pratica il problema (metodo di sostituzione), vediamo però una strada leggermente
diversa, ne varrà la pena. 

Moltiplichiamo la prima equazione per $b'$ e la seconda per $b$, ottenendo

$$
\begin{cases}
b'ax + b'by + b'c = 0 \\
ba'x + bb'y + bc' = 0
\end{cases}
$$

A questo punto sottriamo le due equazioni (è equivalente ad eguagliare i due membri di destra visto
che entrambi sono uguali a $0$ e poi portare tutto a sinistra, provate).


$$ b'ax + b'by + b'c - ba'x -bb'y -bc' = 0 $$

Si vede che il termine che contiene la $y$ si elimina e possiamo raccogliere i due termini che
contengono la $x$ e portare a destra gli altri, ottenendo

$$ (b'a - ba') x = bc' - b'c $$

Guardiamo il risultato. Se il termine $ b'a - ba'$ è diverso da zero, possiamo dividere per tale
termine l'equazione ed ottenere la soluzione per $x$

$$ x = \frac{bc'-b'c}{b'a - ba'} $$

Questa cosa è identica a quanto abbiamo visto in classe, ma si vede subito che ci fornisce un
criterio affinché il sistema abbia una soluzione, il termine $b'a - ba'$ deve essere diverso da
zero. Siccome tale termine determina se il sistema ha una soluzione o meno, prende il nome di
"determinante". Abbiamo dunque un criterio molto semplice per capire (determinare) se le due rette
si intersecano, ovvero se il sistema ha una soluzione. Notate che questo criterio può essere usato
senza risolvere il sistema. 


E se il determinante è nullo? Allora non è possibile dividere e l'equazione ottenuta prima diventa

$$ 0 = bc' -b'c $$

Questa eguaglianza può essere vera, nel qual caso lo è per ogni valore della $x$ e dunque le due
rette sono coincidenti (sistema indeterminato visto a lezione) oppure può essere falsa, nel qual
caso le due rette non si incontrano in nessun punto (sistema impossibile). 

Questo criterio che usa il determinante prende il nome di regola (o criterio) di Cramer. Se ve ne ho
parlato qui è perché da diverso tempo si tende a non farlo più a scuola, qualcuno ha scritto sulle
Indicazioni Nazionali che in matematica vanno evitate inutili astrazioni (sic) e quindi via. Mi
sembrava brutto non parlarvene. Primo perché è un bel criterio molto semplice, secondo perché è
possibile generalizzarlo (non temete, non lo farò). Visto che ci siamo fatemi mostrare ancora due
cose.

Primo, se prendiamo i coefficienti delle variabili e li mettiamo in un quadrato in questo modo

$$
\begin{pmatrix}
a & b \\
a' & b'
\end{pmatrix}
$$

si vede che il determinante si calcola moltiplicando i termini di una diagonale e sottraendo il
prodotto dei termini sull'altra diagonale, una tecnica molto rapida. Un quadrato di questo tipo in
matematica si chiama "matrice", altro argomento che è stato tolto e che invece sarebbe molto bello
da approfondire.

Chiudo infine con un accenno ad una interpretazione geometrica del determinante. Immaginiamo che le
due rette non siano verticali, dunque siano scrivibili in forma esplicita. Se vi ricordate il
coefficiente angolare di una retta si definisce come $m = -\frac{a}{b}$. Si vede subito (esercizio
per casa) che il determinante è pari a $(m' - m)\cdot bb'$ e dunque è proporzionale alla differenza
dei coefficienti angolari delle due rette.. Dunque il determinante è diverso da zero
(e dunque le due rette si incontrano in un solo punto) se $m\neq m'$, che conferma l'interpretazione
geometrica che abbiamo dato in classe a $m$, ovvero per incontrarsi le due rette non devono essere
parallele. Esercizio per il week-end, dimostrate che il
determinante è proporzionale a $\sin(\theta)$ dove $\theta$ è l'angolo che formano le due rette. 

Le cose da dire su Cramer, sul determinante, sulle matrici e sull'intepretazione geometrica
saraebbero ancora tante, ma direi che vi ho ingannati ed inagannate abbastanza, un caro saluto.

P.S.
Nessuno di voi vota quest'anno. Ma visto il titolo della lettera vi lascio solo un suggerimento per
quando avrete modo di esercitare la vostra cittadinanza attiva in futuro (è solo il suggerimento di una persona più vecchia di voi, non 
ha alcun valore apodittico, credetemi): abbiate sempre come faro, anche
nell'occasione del voto, la vostra razionalità, intesa qui non in termini spregiativi di
"freddezza", come qualcuno vorrebbe ridurla, ma come quel delicato equilibrio tra curiosità, ricerca
del vero e ragionamento, strumenti necessari per guidare il vostro (e nostro) senso civico.
Ricordate sempre che fate parte di una comunità di pari, abbiate a cuore non gli interessi
particolari, ma il più ampio benessere di tutti. Siate esigenti e generosi al tempo stesso,
accogliete, ascoltate, valutate, poi scegliete, mai per sentito dire o per dovere di uniformità, ma
per quel profondo senso di equità che ognuno di voi coltiva. Ricordate inoltre che voi siete
speranza, che nei momenti più bui del mio sconforto nell'osservare il mondo io vi guardo (lo
sapete, lo faccio spesso) e mi piace quel che vedo. Idealmente affiderò i miei figli alla vostra
generazione ed in tutta sincerità quel che vedo ogni mattina mi rasserena un po'. 

Siete spesso la causa dei miei sorrisi, non dimenticate mai questo ruolo.


