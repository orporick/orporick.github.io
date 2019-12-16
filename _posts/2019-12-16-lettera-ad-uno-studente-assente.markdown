---
layout: post
title: "Lettera ad uno studente assente"
tags: [matematica]
categories: Lettere
---

<div class="right"><i>Sapiente è chi getta luce nell'oscurità,<br>
chi scioglie i nodi, chi manifesta l'ignoto,<br>
chi precisa l'incerto.</i><br>
<b>Giorgio Colli</b></div>

<br>
<hr class="style-eight">
<br>


Caro R, ti scrivo poche righe in questi giorni di assenza, mia e tua. Ho parlato
con i tuoi genitori, ho visto le mani di tuo padre e gli occhi di tua madre,
luoghi senza pace, testimoni anche loro del tuo mancare. Quando il tuo banco è
vuoto non preoccupa la necessaria giustificazione, ma la motivazione a tornare.
Ed alle volte, caro R., è vuoto il banco anche se ci sei tu. Lo so che non è
semplice, ma da qualche parte dobbiamo ricominciare un dialogo interrotto, come
ho detto ai tuoi non mi sottraggo, queste parole sono un tentativo di
convincerti a non farlo nemmeno tu. Recentemente ho letto un bel libro di Roland
Barthes sulla differenza tra udire ed ascoltare, l'ho trovato per caso, un
ricongiungimento inatteso. Ascoltare non è forse il primo passo di tutto questo?
Per educare, formare, valutare, preparare? Sapessi R. i dubbi che ogni singolo
giorno (e notte) mi divorano. Senza sosta. Non siete solo voi a poter
inciampare, costruisco interi continenti con la mia insonnia passata ad
arrovellarmi, imperi del dubbio, dinastie del ripensamento. Ascoltare, dicevamo.
E udire. Ecco, posso udirti tutti i giorni, ma
mi manca ascoltarti. Quindi eccomi qui a provare, come tante altre volte, a
colmare lo spazio nell'unico modo che conosco, parlandoti di matematica sperando
tu possa ascoltare me in questo asimmetrico luogo di condivisione.

Anticipo alcune cose che vedremo nel dettaglio, ma te le scrivo perché tempo fa
hai dimostrato curiosità sulla serie di Fibonacci, a cui arriverò in un attimo.
Immagina di avere un punto $P$ sul piano con coordinate intere $(x,y)$. Immagina
quindi di trasformare questo punto in un nuovo punto $P'$ di coordinate
$(x',y')$ secondo questa legge

$$
\begin{cases} 
x' = ax + by \\
y' = cx + dy  
\end{cases}
$$

Limitiamoci a considerare i numeri $a b c d$ come interi; questo è un caso
particolare di *trasformazione lineare* del piano. L'ideale sarebbe usare le
matrici (tolte ormai da tempo dalle indicazioni nazionali per i licei), ma per
questo nostro breve ascoltarci possiamo farne a meno. Questa trasformazione si
chiama lineare perché è facile vedere (ci risiamo, una frase che andrebbe
abolita, prova a vedere se riesci, se no chiedimi in classe) che se le
coordinate di $P$ vengono moltiplicate per una costante anche le coordinate di
$P'$ vengono moltiplicate per la stessa costante (suggerimento, distribuzione
del prodotto sulla somma). Inoltre se sommiamo le coordinate di due punti (ti
ricordi i vettori visti in prima? Spero di sì) il punto ottenuto con la
trasformazione risulta la somma dei due punti trasformati separatamente. 

Siccome la trasformazione che abbiamo scritto sopra è generica, possiamo
applicarla nuovamente al punto $P'$ ottenendo un terzo punto $P''$; e ovviamente
la cosa può andare avanti, si può trasformare ciascun punto ottenuto al passo
precedente. Si viene così a creare una sequenza di punti sul piano (nel nostro
caso tutti di coordinate intere) che prende il nome di *orbita* della
trasformazione. Ad ogni punto di partenza $P$ corrisponde una sua orbita; come
esercizio sapresti trovare l'orbita dell'origine del piano?

Bene, cosa ha a che fare tutto questo con Fibonacci? Arriviamo al punto centrale
del nostro discorso, considera la trasformazione lineare data da 

$$
\begin{cases} 
x' = y \\
y' = x + y  
\end{cases}
$$

dunque con $a=0$, $b=c=d=1$; studiamo l'orbita che parte dal punto $P$ di
coordinate $(1,1)$. Otteniamo (indovina? Esatto, esercizio)

$$ (1,1) \rightarrow (1,2) \rightarrow (2,3) \rightarrow (3,5) \rightarrow (5,8)
\rightarrow \ldots
$$

Notiamo due cose evidenti (sicuro lo siano?): primo l'orbita risulta senza fine,
possiamo andare avanti senza tornare mai indietro, secondo le coordinate dei
punti dell'orbita seguono in modo evidente la successione di Fibonacci vista in
classe

$$ 1\quad 1\quad 2\quad 3\quad 5\quad 8 \ldots$$

dove ogni termine è la somma dei due precedenti; questo dovrebbe renderti
chiaro perché la nostra trasformazione lineare genera proprio tale successione
con la $x$ e la $y$ sfasate di un termine. Se ricordi quando vi ho parlato della
successione di Fibonacci vi ho detto che i termini sono tali che il rapporto

$$ \frac{F_{i+1}}{F_i} $$

(indico con $F_i$ l'i-esimo termine della successione) tende ad un valore
storicamente importante, la sezione aurea

$$ \frac{1+\sqrt{5}}{2}$$

In classe abbiamo visto un ragionamento plausibile, anche se non rigoroso;
usando le proprietà della successione abbiamo

$$ \frac{F_{i+1}}{F_i} = \frac{F_i + F_{i-1}}{F_i}$$

da cui, con alcuni passaggi algebrici

$$ \frac{F_{i+1}}{F_i} = 1 + \frac{1}{\frac{F_i}{F_{i-1}}}$$

Ipotizzando che il rapporto tra un termine ed il precedente tenda ad un valore
$\phi$ quando $i$ tende all'infinito (l'anno prossimo vedremo tutto con i dettagli
giusti), si ottiene l'equazione

$$ \phi = 1 + \frac{1}{\phi}$$

Quanto tempo abbiamo dedicato a questa equazione ed alla nascita degli alogoi?
Spero tu possa ricordare, di fatto la soluzione di questa equazione di secondo
grado fornisce due valori, la sezione aurea e l'opposto del suo reciproco.

Possiamo chiederci se riusciamo a dare una dimostrazione geometrica di quanto
abbiamo detto, ed ovviamente la risposta è sì. Disegniamo infatti i punti dell'orbita di
cui abbiamo parlato prima e la retta passante per l'origine di coefficiente
angolare $\phi$ (in blu l'orbita, in nero la retta)

<p align="center"> 
<img src="{{ site.url }}/images/aureo-1.svg">
</p>


Come vedi i punti sembrano tendere rapidamente verso la retta, mostrando
geometricamente come il rapporto tra $y$ e $x$ (che ti ricordo sono elementi
successivi di Fibonacci) tende al coefficiente della retta, ovvero $\phi$. La
cosa interessante è che se faccio il grafico con un'altra orbita ottenuta
partendo da un altro punto, $(2,1)$ per esempio, l'andamento appare simile
(in rosso l'orbita, in nero sempre la retta)

<p align="center"> 
<img src="{{ site.url }}/images/aureo-2.svg">
</p>


Sembra dunque che la sequenza di Fibonacci non sia l'unica che fornisca al
limite la sezione aurea; ogni sequenza di interi in cui un elemento è la somma
dei due precedenti ha il rapporto tra elementi successivi che tende alla sezione
aurea $\phi$. Risultato notevole. 
Riusciamo a dimostrarlo un po' meglio? Ti chiedo un ultimo sforzo, l'idea è semplice. 

Intanto notiamo che i punti della retta $y=\phi x$ vengono trasformati in punti che
giacciono ancora sulla retta (si dice che la retta è unita o anche che è un
sottospazio invariante); infatti il punto $ (k, \phi k)$, che appartiene alla
retta, viene trasformato (esercizio) nel punto $\phi(k,\phi k)$ ed è immediato
verificare che anche questo appartiene alla retta. Siccome $\phi$ è maggiore di
$1$, il punto trasformato si allontana dall'origine. Possiamo riassumere dicendo
che le orbite per punti che appartengono alla retta sono interamente
appartenenti alla retta e tendono ad allontanarsi dall'origine.

Un analogo ragionamento si può fare con la retta perpendicolare a quella data,
ovvero $y=-\frac{1}{\phi} x$; i punti su questa retta generano orbite che
giacciono sulla retta stessa, ma questa volta tendono ad avvicinarsi
all'origine. Infatti il punto $(k,-\frac{1}{\phi}k)$ della retta viene
trasformato nel punto $-\frac{1}{\phi}(k, -\frac{1}{\phi}k)$ che appartiene
evidentemente ancora alla retta; siccome $-\frac{1}{\phi}$ è un numero in modulo
minore di $1$, il punto si avvicina all'origine (il segno meno significa che
inoltre il punto salta dalla parte opposta dell'origine rispetto al punto di
partenza).

Siamo finalmente arrivati in fondo, possiamo mettere tutto insieme quel che
abbiamo visto. Prendi un punto $P$ del piano e proiettalo sulle due rette
perpendicolari $y=\phi x$ e $y=-\frac{1}{\phi}$; per quanto visto all'inizio
sulla linearità, trasformare
$P$ significa trasformare le due proiezioni ottenendo che quella perpendicolare
alla retta $y=\phi x$ diventi più vicina all'origine; d'altra parte la lunghezza
di questa proiezione è la distanza dalla retta stessa e diventando questa sempre 
più piccola (ricordi il fattore $-\frac{1}{\phi}$ i punti dell'orbita si 
avvicinano sempre di più alla retta con coefficiente
angolare $\phi$ e quindi il rapporto tra la loro $y$ e la loro $x$ tende al
rapporto aureo, indipendentemente dal punto di partenza.

Mi fermo qui, abbiamo visto un risultato importante dandone un'interpretazione
in termini di orbite sul piano di trasformazioni lineari. Come ti accennavo il
linguaggio corretto sarebbe quello delle matrici (abbiamo essenzialmente parlato
di nascosto della diagonalizzazione di una matrice e dello studio della dinamica sui suoi
autovettori); questo è un ambito
della matematica molto interessante e vasto, purtroppo quasi del tutto escluso
da quel che si fa a scuola. Per questo ho voluto parlartene, un piccolo dono
(ingenuo, son d'accordo) che difficilmente troverai altrove sul tuo percorso. 

Tu hai letto me, rendimi il favore, cercami per parlare (non di matematica
necessariamente) e rendi simmetrico questo semplice e
meraviglioso gesto dell'ascolto. Sai dove trovarmi, in ogni momento.

Un caro saluto, prof.
