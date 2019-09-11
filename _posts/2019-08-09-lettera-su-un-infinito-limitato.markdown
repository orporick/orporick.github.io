---
layout: post
title: "Lettera su un infinito limitato"
published: true
tags: [matematica]
categories: Lettere
---

Carissimo F,
spero che tu stia bene e che questo nostro esilio forzato dai banchi e dalle nostre chiacchierate non
ti sia di troppo peso. Recentemente mi è capitato di leggere un interessante articolo sui [diagrammi di
Penrose-Carter](https://aaronswright.com/Wright2014AdvantagesBringingInfinity.pdf) di cui ti avevo
accennato tempo fa in classe e volevo parlarti di un'idea che mi è venuta. Come ti dissi sono uno
strumento, non semplicissimo a dire il vero, per rappresentare lo spaziotempo infinito su un diagramma finito,
tipicamente nel piano; l'idea di base, come ti dirò tra poco, non è complicata e si basa su una particolare
funzione che conosci bene, ma i dettagli in relatività non sono una passeggiata. Con questi diagrammi è possibile 
studiare le proprietà globali dello spaziotempo (connessioni, causalità, strutture conformi etc) in modo
visuale, ve ne farò un cenno (ma proprio un cenno) l'anno prossimo. Leggendo l'articolo mi è venuto in mente 
però che una tecnica simile, semplificata, potrebbe
essere usata per visualizzare il comportamento asintotico delle funzioni reali; ricorderai che
abbiamo iniziato a parlare di cosa succede alle funzioni reali quando $x$ tende all'infinito e che
tale studio è molto importante. Quel
che segue è una spiegazione semplificata dei diagrammi di Penrose-Carter ed un loro utilizzo
piuttosto banale (e probabilmente inutile) allo studio delle funzioni reali; prendilo per un
esercizio estivo ed un piccolo anticipo di alcune cose che vedremo in classe tra poco.

Iniziamo con il definire la seguente trasformazione dei punti $(x,y)$ del
piano reale in nuove coordinate $(u,v)$:

$$ u = y - x $$

$$ v = y + x $$

L'effetto è di ruotare il piano di $45^\circ$ e di dilatarlo. Successivamente definiamo due nuove
coordinate $(q,p)$ in questo modo

$$ q = \arctan(u) $$

$$ p = \arctan(v) $$ 

Questo è il punto saliente di tutta la trasformazione; ricorderai infatti che la funzione
arcotangente (l'inversa della tangente) ha la notevole proprietà di mandare i punti di una retta
infinita nei punti di un segmento, $[-\pi/2,\pi/2]$ in modo biunivoco. In questo modo riusciamo a
restringere tutto il piano in una regione limitata. Come ultimo passaggio effettuiamo la
trasformazione

$$ x' = p-q $$

$$ y' = p+q $$

che in pratica ruota indietro il piano ruotato con il passaggio alle coordinate $(u,v)$. In definitiva
abbiamo una trasformazione biunivoca che prende i punti del piano reale $(x,y)$ e li manda nei punti
$(x',y')$ di un quadrato finito. Per capire come è fatto questo quadrato vediamo alcuni punti
particolari; immagina di muoverti sull'asse delle $y$ verso valori sempre più grandi. Dalle
definizioni si vede subito che $u$ e $v$ tendono ad infinito, dunque $q$ e $p$ tendono entrambi a
$\pi/2$ e quindi $x'$ va  a $0$ e $y'$ va a $\pi$. Similmente si può far vedere (esercizio) che i
punti sull'asse $x$ che tendono all'infinito vanno, nel quadrato trasformato, verso il punto  con
$y'$ pari a  $0$ e $x'$ pari a $\pi$. Ti lascio i dettagli, tutto il piano di partenza è stato
compattificato nel quadrato di vertici $(-\pi,0)$,  $(0,\pi)$, $(\pi,0)$, $(0,-\pi)$. (In realtà i
vertici rappresentano punti del piano all'infinito, quindi propriamente non appartengono al
quadrato.)

Puoi dimostrare anche facilmente che le rette inclinate a $45^\circ$ gradi (in senso orario e
antiorario) vengono trasformate in rette con la stessa inclinazione. Questo è dovuto alla rotazione
iniziale in $u,v$ ed il motivo è che in relatività, come ricorderai, nel piano spaziotemporale i
raggi di luce hanno quell'inclinazione (in opportune unità di misura degli assi); quindi questa
trasformazione dello spaziotempo non cambia i coni luce, quindi la struttura causale rappresentata.
Al di là di queste motivazioni tecniche (che ti saranno più chiare tra qualche mese) e di molti
tecnicismi che ho qui nascosto (in relatività i diagrammi di Penrose-Carter ѕono usati normalmente
in simmetria sferica, quindi l'asse $x$ è in realtà radiale e quindi solo positivo, per esempio),
soffermiamoci un attimo sul risultato: abbiamo una trasformazione continua (andrebbe dimostrato) e
biunivoca tra l'intero piano reale infinito ed un quadrato di dimensione finita. Ad ogni punto del
primo corrisponde in modo univoco un punto del secondo, e viceversa. La cosa è meravigliosa (grazie
a Cantor non ci stupisce più di tanto) e ricorda i famosi versi di Shakespeare *"Io potrei viver confinato 
in un guscio di noce, e tuttavia ritenermi signore d'uno spazio sconfinato"* (versi che hanno ispirato il
titolo di un fortunato libro di Hawking).

Cosa c'entra tutto questo con il comportamento asintotico delle funzioni? Ecco l'applicazione banale
di cui ti parlavo ad inizio lettera. Possiamo studiare (analiticamente in casi semplici, altrimenti
con l'ausilio di qualche programma) come vengono trasformate le curve dal piano reale al quadrato
compattificato; in particolare può essere interessante vedere cosa succede al grafico di alcune
funzioni andando all'infinito (negli esempi considero quasi sempre infinito positivo, ma è chiaro
che si può vedere anche per infinito negativo).

Prendiamo come curva una retta verticale $x=a$. Si vede subito che quando $y$ tende ad infinito
tendono ad infinito anche $u$ e $v$ (essendo $a$ un valore finito); quindi, come prima, la curva
compattificata tende al punto $(0,\pi)$. Per esempio ecco come appare la retta verticale $x=2$
nel piano normale

![My helpful screenshot]({{ site.url }}/images/retta1.png)


e nel quadrato compattificato.

![My helpful screenshot]({{ site.url }}/images/retta2.png)

Forte vero? La curva viene distorta, ma rimane limitata nel quadrato (che per comodità ho disegnato
insieme alla curva). Similmente possiamo vedere cosa succede ad una retta orizzontale; siccome in
questo caso $y$ rimane costante quando $x$ tende all'infinito, si vede che $u$ tende a $-\infty$ e
v a $+\infty$, da cui $q$ e $p$ rispettivamente a $-\pi/2$ e $\pi/2$ e quindi il punto all'infinito
della curva diventa $(\pi, 0)$. Ecco infatti il grafico (ovviamente simmetrico rispetto al
precedente) della retta orizzontale $y=2$ 

![My helpful screenshot]({{ site.url }}/images/rettao1.png)

e della sua versione compattificata

![My helpful screenshot]({{ site.url }}/images/rettao2.png)

Chiaramente possiamo non limitarci a rette e considerare grafici di funzioni qualsiasi. Consideriamo
una funzione, per esempio, divergente, cioè che ha una $y$ che tende ad infinito (per esempio
positivo) quando $x$ tende ad infinito. Si vede subito che $v$ tenderà ad infinito e quindi $p$ a
$\pi/2$, mentre per $u$ dipenderà dalla funzione; se $y$ è più veloce a divergere di $x$ allora anche $q$
verrà $\pi/2$, viceversa se è più lento $q$ verrà $-\pi/2$ (ti lascio, come al solito, l'onere della
verifica). Infine se $y$ e $x$ divergono allo stesso modo (cioè se la funzione ha un asintoto
obliquo inclinato a $45^\circ$) si vede che $q$ viene un valore finito; in quest'ultimo caso è facile
vedere che la curva tende ad un punto che sta sul bordo del quadrato (suggerimento: tale bordo
soddisfa l'equazione $x'+y' = \pi$).

Facciamo tre esempi. Partiamo dalla funzione esponenziale che, come sai, cresce più rapidamente di
qualsiasi polinomio e quindi anche di $x$; questo è il grafico della funzione nel normale piano
reale

![My helpful screenshot]({{ site.url }}/images/esp1.png)

e questo è il grafico compattificato

![My helpful screenshot]({{ site.url }}/images/esp2.png)

che come vedi tende al vertice $(0,\pi)$ (esercizio: come mai la curva "parte" dal vertice
$(-\pi,0)$?).

Per simmetria la funzione logaritmica avrà questo aspetto nel piano reale

![My helpful screenshot]({{ site.url }}/images/log1.png)

e questo in quello compattificato

![My helpful screenshot]({{ site.url }}/images/log2.png)

Come vedi, divergendo più lentamente di $x$, la curva tende verso il vertice $(\pi,0)$ del quadrato.


Vediamo infine la funzione 

$$ y = \frac{x^2}{x+1}$$ 

che ha un asintoto orizzontale inclinato di $45^\circ$ (dimostralo per esercizio). Ecco la funzione
(per semplicità solo per $x$ positive) nel piano normale

![My helpful screenshot]({{ site.url }}/images/obl1.png)

ed ecco la versione compattificata. 

![My helpful screenshot]({{ site.url }}/images/obl2.png)

Noterai che, come anticipato, visto l'andamento asintotico di questa funzione la curva tende a
finire sul bordo del quadrato.

Riassumiamo questo strano quadrato compattificato: le funzioni che tendono ad infinito più
rapidamente di $x$ finiscono nel vertice $(0,\pi)$, quelle che tendono ad infinito meno rapidamente
di $x$ finiscono nel vertice $(\pi,0)$ e quelle che tendono ad infinito come $x$ finiscono sul lato
del quadrato. Abbiamo quindi un metodo visuale (anche se complicato, lo ammetto) per rappresentare
l'andamento asintotico delle funzioni reali. 

Mi fermo perché è tardi e son sicuro che avrai un po' su cui lavorare. Mi auguro che questa breve
camminata in un infinito racchiuso in un quadrato ti sia piaciuta come è piaciuta a me, ricorda
queste cose perché l'anno prossimo ne parlerò in classe quando faremo la relatività; in quel momento
i diagrammi di Penrose-Cartan saranno qualcosa di più di un semplice divertimento estivo.

Un caro saluto, prof.

P.S.
Dimenticavo, ti lascio da interpretare questo grafico nel quadrato compattificato, sei in grado di
capire da che tipo di funzione viene? Buon divertimento.

![My helpful screenshot]({{ site.url }}/images/mistero.png)

