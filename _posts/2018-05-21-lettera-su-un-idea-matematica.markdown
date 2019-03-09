---
layout: post
title: "Lettera su un'idea matematica"
published: true
tags: [matematica]
categories: Lettere
---

Caro F,
dopo la nostra ultima chiaccherata sull'infinito ho deciso di proporti un percorso che possa in
qualche modo mostrarti la nascita di un'idea matematica, ovviamente tenendo la questione su un
terreno estremamente semplificato. Avrei voluto dimostrarti che il numero di punti su una retta è
uguale al numero di punti nel piano, come discusso geometricamente in classe, ovvero che la
cardinalità di $\mathbb{R}\times \mathbb{R}$ è uguale alla cardinalità di $\mathbb{R}$; ma purtroppo la
dimostrazione esula di molto dalle nostre conoscenze di terza, ti chiedo di accontentarti della
suggestione che ti ho dato in classe usando la geometria delle rette. Ho pensato però di ripiegare su un
risultato più semplice, ma altrettanto evocativo: dimostriamo che la cardinalità di $\mathbb{N}\times \mathbb{N}$ è
uguale alla cardinalità di $\mathbb{N}$, ovvero che $\mathbb{N}\times \mathbb{N}$ è numerabile. Ricorderai che
diciamo che due insiemi hanno la stessa cardinalità se esiste una funzione bigettiva
(iniettiva e suriettiva) da uno all'altro. Se uno dei due insiemi è $\mathbb{N}$ diremo allora che
sono numerabili. Dobbiamo quindi trovare una applicazione che associ ad ogni coppia di numeri naturali in 
$\mathbb{N}\times \mathbb{N}$ un numero naturale in $\mathbb{N}$; ingenuamente potremmo pensare che
le coppie di numeri naturali siano "di più" dei singoli numeri naturali, ma non è così. La cosa bella degli insiemi
infiniti, come abbiamo più volte notato, è che un'impresa che sembra impossibile diventa invece
piuttosto semplice.

Per cercare la nostra funzione bigettiva dobbiamo in qualche modo ordinare le coppie di numeri
naturali in una sequenza numerabile. Potrei pensare di rappresentarle così

$$ (0,0) $$

$$ (1,0) $$

$$ (2,0) $$

$$ (3,0) $$

$$ \ldots $$

Il problema in questo modo è che devo andare avanti per un numero infinito di righe prima di
poter far scattare a $1$ il secondo numero della coppia. Più interessante sembra cercare un'altra
strada: per esempio possiamo elencare prima tutte le coppie la cui somma di elementi sia $0$, poi
tutte le coppie la cui somma sia $1$, poi $2$ etc etc. Sembra un ordinamento naturale (e coincide, se
ci pensi, all'ordinamento per diagonali che abbiamo visto in classe).


$$ (0,0) $$

$$ (1,0) $$

$$ (0,1) $$

$$ (2,0) $$

$$ (1,1) $$

$$ (0,2) $$

$$ (3,0) $$

$$ (2,1) $$

$$ (1,2) $$

$$ (0,3) $$

$$ \ldots $$ 

Questa sequenza sembra interessante. Si parte con l'unica coppia la cui somma è $0$, poi
abbiamo due coppie la cui somma è $1$, poi tre coppie la cui somma è $2$ etc. Si vede subito
(dimostra per esercizio) che il numero di coppie la cui somma è $n$ è pari a $n+1$. Abbiamo quasi
finito, abbiamo raggruppato le coppie in gruppetti il cui numero è in corrispondenza con
$\mathbb{N}$; si può dimostrare che l'unione numerabile di insiemi finiti è numerabile, ma ti
propongo un'altra strada ancor più semplice. Associo a ciascuna coppia vista sopra un numero
naturale, partendo da $0$.


$$ (0,0) \rightarrow 0$$

$$ (1,0) \rightarrow 1$$

$$ (0,1) \rightarrow 2$$

$$ (2,0) \rightarrow 3$$

$$ (1,1) \rightarrow 4$$

$$ (0,2) \rightarrow 5$$

$$ (3,0) \rightarrow 6$$

$$ (2,1) \rightarrow 7$$

$$ (1,2) \rightarrow 8$$

$$ (0,3) \rightarrow 9$$

$$ \ldots $$


Si vede subito che stiamo associando a ciascuna coppia di numeri naturali un unico numero naturale,
da cui $\mathbb{N}\times \mathbb{N}$ è numerabile. Ma voglio andare oltre e trovare esplicitamente
la funzione bigettiva. Parto avvantaggiato perché da ragazzo mi è capitato di lavorare, durante la
tesi di laurea, con degli oggetti matematici chiamati "simplessi" che sono, grosso modo, la
generalizzazione di un triangolo. Se prendo un punto ottengo una figura che ha $0$ lati. Se aggiungo
un punto e lo unisco al primo ottengo un segmento, una figura che ha $1$ lato. Se prendo un altro
punto (esterno al segmento) e lo unisco ai primi due ottengo un triangolo che ha $3$ lati. Se prendo
un quarto punto (esterno al piano del triangolo) e lo unisco ai primi tre ottengo un tetraedro,
figura in tre dimensioni che ha $6$ lati. Se prendo un quinto punto e lo unisco agli altri quattro
ottengo una figura quadrimensionale che ha $10$ lati. Posso andare avanti all'infinito. Cosa c'entra
con il nostro discorso? Guardando la sequenza scritta sopra mi sono accorto che mi ricordava
qualcosa; alla prima coppia associo $0$, il secondo gruppo di due coppie parte da $1$, il terzo
gruppo di tre coppie parte da $3$, il quarto gruppo di quattro coppie parte da $6$, il successivo
parte da $10$ etc. La sequenza $0,1,3,6,10\ldots$ è esattamente la sequenza dei lati dei simplessi
di dimensione via via più grande. Il numero $n$ della sequenza è 

$$ \frac{n(n+1)}{2} $$

che non è altro che la somma dei primi $n$ numeri naturali (dimostra per esercizio). A questo punto
la funzione che mi è venuta in mente è questa; ogni gruppo è caratterizzato dalla somma degli
elementi della coppia ed è poi numerato al suo interno dal secondo
elemento della coppia. Per esempio il terzo gruppo


$$ (3,0) $$

$$ (2,1) $$

$$ (1,2) $$

$$ (0,3) $$


è caratterizzato dal fatto che le sue coppie danno tutte somma $3$ ed è ordinato dal secondo numero
della coppia, da $0$ a $3$.

Questo mi ha fatto venire in mente la funzione da usare

$$ f(n,m) = \frac{(n+m)(n+m+1)}{2} + m $$

dove $n$ è il primo numero della coppia ed $m$ il secondo numero. Puoi verificare facilmente che la
sequenza vista prima è riprodotta da questa funzione. Ti lascio come esercizio dimostrare che $f$ è
una funzione iniettiva e suriettiva (quindi bigettiva) da $\mathbb{N}\times \mathbb{N}$ a
$\mathbb{N}$, dunque i due insiemi hanno la stessa cardinalità.


Si potrebbero a questo punto dire molte cose su questo risultato, le sue applicazioni e la sua
generalizzazione, ma è tardi e temo che Anna Wislawa si stia svegliando. Mi piace però l'idea che tu
possa leggere questa mia lettera, pensare al percorso che mi ha portato alla funzione $f$ e provare
a vedere se riesci ad immaginare un tuo percorso personale nei paesaggi della matematica. Ovviamente
se c'è qualcosa di poco chiaro (temo molto) o di errato (spero poco) sai dove trovarmi.





