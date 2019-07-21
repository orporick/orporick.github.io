---
layout: post
title: "Lettera su una soluzione approssimata"
published: true
---

Carissimo P,
ti ringrazio per la tua ultima lettera, i mari in tempesta si placano, te lo avevo detto. Riguardo
alla tua domanda, purtroppo devo parzialmente deluderti: non è possibile, con la matematica fatta
fino ad ora, vedere nel dettaglio l'equazione di un razzo a reazione. In quinta, quando faremo le
equazioni differenziali per bene, ti prometto che ti mostrerò l'equazione di Tsiolkovsky in tutta la
sua semplice bellezza. Non voglio però eludere la tua curiosità, quindi ti propongo una via
alternativa con gli strumenti che hai a disposizione. Immagina di avere una massa iniziale $M_i$ che
vuoi mettere in moto usando il principio di azione e reazione visto l'anno scorso: per semplificare
inizialmente il discorso immagina di riuscire a spezzare in due parti uguali questa massa e di
lanciare a velocità $w$ una delle due metà; l'altra si muoverà, per reazione, nel verso opposto con
velocità $v$. La
cosa più semplice da fare è applicare la conservazione della quantità di moto nel riferimento di
quiete della massa (ovviamente il tutto lo facciamo nel caso non relativistico): allora abbiamo
(fissata una direzione positiva opportuna)

$$ \frac{M_i}{2} w = \frac{M_i}{2} v $$

da cui, come intuibile, $v = w$ che non dipende dalla massa. Immagina adesso di ripetere la procedura $n$ volte: possiamo
ripetere il ragionamento nel riferimento istantaneo di quiete della massa ottenendo sempre lo stesso
risultato, ad ogni scissione della massa la velocità aumenta di $w$. Dopo $n$ scissioni la velocità
totale della massa residua sarà dunque

$$ V = n w $$

La massa residua $M_f$ sarà la metà della metà della metà etc. per $n$ volte, dunque

$$ M_f = \left(\frac{1}{2}\right)^n M_i$$

da cui

$$ 2^n = \frac{M_i}{M_f}$$

Usando il logaritmo naturale (ti ricordi le sue proprietà) su entrambi i membri dell'eguaglianza si
ottiene

$$ n \ln{2} = \ln{\frac{M_i}{M_f}} $$

da cui

$$ n = \frac{1}{\ln{2}}\ln{\frac{M_i}{M_f}} $$

Sostituendo il valore di $n$ ottenuto nella relazione per la velocità finale, otteniamo infine

$$ V = \frac{w}{\ln{2}}\ln{\frac{M_i}{M_f}} $$

Questa espressione di $V$ ottenuta ipotizzando un processo di reazione con divisione della massa è
piuttosto vicina alla soluzione dell'equazione del razzo a reazione di cui ti parlavo, di diverso 
ha il fattore numerico $\ln{2}$. La cosa importante è che, sebbene approssimata, 
rappresenta la giusta dipendenza della
velocità finale dal rapporto tra massa iniziale e massa finale; per ottenere una velocità finale
alta o si aumenta $w$, che è la velocità con cui siamo in grado di espellere la massa dal nostro
sistema a reazione, o il rapporto tra $M_i$ e $M_f$ deve essere grande, che significa che la massa
finale del razzo deve essere molto piccola rispetto a quella iniziale. Questo è il motivo (in parole
povere) per cui per mandare in orbita una piccola capsula serve un razzo piuttosto grande in termini
di massa. Ovviamente questo discorso vale se il sistema è nello spazio vuoto senza altre forze, per
un razzo che parte da terra bisogna tener conto dell'attrito con l'aria e della forza di gravità.
Qui però interessava un discorso approssimato.

A proposito di approssimazione, possiamo immaginare di migliorare il discorso se invece di dividere
la massa in due (poco realistico), dividiamo ad ogni passo la massa in due porzioni asimmetriche.
Immaginiamo di espellere quindi una porzione $k$-esima della massa iniziale; allora, per
conservazione della quantità di moto,

$$ \frac{M_i}{k} w = \frac{(k-1)M_i}{k} v $$

da cui

$$ v = \frac{w}{k-1}$$

che, come prima, non dipende dalla massa. Ad ogni espulsione di una frazione $k$-esima di massa questo
è l'aumento di velocità: dunque alla fine la velocità, dopo $n$ espulsioni, sarà

$$ V = \frac{n}{k-1} w $$

(se provi con $k=2$ ottieni ovviamente il risultato di prima).

Ad ogni espulsione la massa si riduce della stessa proporzione ed alla fine si ottiene per la massa
finale

$$ M_f = \left(\frac{k-1}{k}\right)^n M_i $$

da cui, con analogo ragionamento fatto prima con il logaritmo, si ottiene

$$ n = \frac{1}{\ln{\frac{k}{k-1}}} \ln{\frac{M_i}{M_f}} $$

Sostituendo, come prima, $n$ nella relazione per la velocità finale si ottiene questa volta

$$ V = \frac{w}{(k-1)\ln{\frac{k}{k-1}}}\ln{\frac{M_i}{M_f}} $$

(di nuovo verifica facilmente che con $k=2$ si ottiene la relazione vista prima). In un razzo la
parte espulsa istantaneamente è molto piccola rispetto al resto, possiamo allora immaginare di fare
il limite per $k$ che tende a infinito. Ti lascio verificare per via numerica (per via analitica
faremo l'anno prossimo, promesso) che in tale limite il fattore

$$ (k-1)\ln{\frac{k}{k-1}} $$ 

tende a $1$, ottenendo così la soluzione

$$ V = w \ln{\frac{M_i}{M_f}} $$

che è esattamente la soluzione dell'equazione di Tsiolkovsky per il razzo a reazione nel vuoto e
senza altre forze.

Questo era solo un accenno, come promesso in quinta vedremo i dettagli da un punto di vista più
formale. Un caro saluto, prof.

P.S.
Esercizio; ricordandoti le espressioni per la velocità orbitale e per la velocità di fuga dalla
Terra viste quest'anno ed ipotizzando una velocità di espulsione dei gas di qualche migliaio di
metri al secondo (se vuoi puoi trovare in rete dati più realistici), trova i rapporti tra massa
iniziale e finale e prova a confrontarli con quelli di missioni reali. Fammi sapere.

