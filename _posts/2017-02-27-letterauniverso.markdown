---
layout: post
title: "Lettera ai miei figli su un piccolo pezzetto di universo"
published: true
tags: [fisica, lettera]
---

Miei cari Francesco ed Anna Wislawa,

vi scrivo nell'ora più breve della notte, da un'esilio che rinnovo ogni giorno. Ora che dormite i
vostri sogni di bambini ho deciso di scrivervi di un piccolo pezzetto di universo di cui si parla
tanto in questi giorni. La mia non è una lettera di spiegazioni precise, una lezione formale ed
esatta, è solo un invito alla curiosità. Non sono nemmeno sicuro che quanto io scrivo in queste mie
righe sia corretto, probabilmente un esperto troverà errori ed orrori (ho chiesto ad un mio vecchio
compagno di università di dare un'occhiata, spero mi faccia sapere presto). Ma il senso di questa
mia lettera non è la ricerca del vero, ma la ricerca. Quando da grandi forse la leggerete io spero
possiate cogliere il motivo del mio scrivere (e delle mie frequenti insonnie), la necessità di
provare a capire il meraviglioso universo che ci contiene. Se poi i calcoli e le idee che qui vi
accenno non saranno esatte poco importa, troverete magari nei miei errori lo stimolo a cercare
meglio, a capire meglio, a trovare quel che io non sono riuscito. Nel tentativo di rispondere alle
mie curiosità mi sono però divertito, ho rimosso (molto poco) quello strato di ruggine che gli anni
hanno regalato alla mia mente ed ho scoperto, ancora una volta, la bellezza del cercare risposte con
i pochi mezzi che ho.

Pochi giorni fa abbiamo letto sui giornali la scoperta di un elevato numero di pianeti rocciosi (ben
sette) di dimensioni simili alla nostra terra orbitanti a $40$ anni luce da noi intorno alla stella
Trappist-1. Che notizia meravigliosa, una ulteriore conferma che la formazione di pianeti è più la
regola che non l'eccezione. I giornali ne hanno parlato molto, usando titoli e parafrasi abbastanza
azzardate, parlando spesso di "pianeti come la terra", o addirittura "gemelli". In realtà le cose
non stanno del tutto così, ma magari ne parliamo un'altra volta. In questa lettera vorrei proporvi
una curiosità che mi è venuta immediatamente dopo aver letto la notizia, curiosità che mi ha spinto
a cercare, calcolare, provare a capire. 

Il sistema Trappist-1 è molto più piccolo, in termini di dimensioni, rispetto al nostro. Per
intenderci i sette pianeti vanno da una distanza minima di $0.011$ AU ad una massima di $0.06$ AU,
dove l'unità astronomica AU corrisponde al raggio (medio) dell'orbita terrestre, circa 150 milioni
di km (approssimo le orbite a circonferenze, per il senso del ragionamento che voglio fare poco
importa se in realtà non sono esattamente circolari). 
Il nostro sistema solare è decisamente più grande; limitandoci ai soli pianeti rocciosi (come
quelli di Trappist-1), andiamo da una distanza minima di $0.4$ AU (Mercurio) ad una massima di $1.6$
AU (Marte). Il sistema di Trappist-1 è grande approssimativamente un trentesimo del nostro, se li rappresentassimo
sovrapposti starebbe tutto ampiamente dentro l'orbita di Mercurio. Ecco, quando ho letto
queste informazioni non ho potuto fare a meno di chiedermi il perché, una semplice domanda da persona curiosa.
Ecco quello che ho scoperto.

La prima ipotesi a cui ho pensato riguarda la massa molto più piccola di Trappist-1 rispetto al
Sole, circa 0.08 masse solari. Trappist-1 è dunque una nana rossa più piccola rispetto al Sole, il
suo campo gravitazionale è meno intenso (a parità di distanza) e quindi i suoi pianeti tenderanno ad
assestarsi su un'orbita più piccola. Può essere questa la spiegazione  delle dimensioni ridotte 
del sistema di Trappist-1? Proviamo a fare due calcoli usando un concetto che ho scoperto essere
molto usato in astrofisica, il raggio di Hill. L'idea è semplice, a che distanza $r$ da un corpo di
massa $m$ il suo campo gravitazionale diventa trascurabile? In linea di principio la
distanza è infinita (la famosa legge dell'inverso del quadrato della distanza di Newton), 
ma se il corpo non è isolato la sua influenza cessa dove inizia l'influenza di un corpo vicino. 
Siano dunque tre corpi di masse $M$, $m$ e $\mu$ allineati come in figura. 


![My helpful screenshot]({{ site.url }}/images/lagrange-1.png)


Una prima stima di quanto stiamo cercando è data dal seguente ragionamento: se il corpo $\mu$ è sotto 
l'influenza del campo gravitazione di $m$ e basta, la sua velocità angolare deve soddisfare

$$
	\omega^2 = \frac{Gm}{r^3}
$$

Tale relazione si ottiene ponendo uguali la forza gravitazionale di $m$ su $\mu$ e l'accelerazione
centripeta necessaria a mantenere un orbita di raggio $r$

$$
	\mu\omega^2 r = \frac{Gm\mu}{r^2}
$$

Se viceversa è sotto l'influenza di $M$ e basta si deve avere, analogamente,

$$
	\omega^2 = \frac{GM}{(R+r)^3}
$$

Se ipotizziamo $r \ll R$ possiamo approssimare la precedente espressione

$$
	\omega^2 \simeq \frac{GM}{R^3}
$$

Dunque il campo gravitazionale di $m$ è predominante quando 

$$
	r < \left( \frac{m}{M} \right)^{1/3} R
$$

Un calcolo più preciso, che per ora vi risparmio, legato alla determinazione dei cosiddetti punti di
Lagrange porta ad un risultato molto simile

$$
	r < \left( \frac{m}{3M} \right)^{1/3} R
$$

che non è altro che una versione approssimata del cosiddetto raggio di Hill per la massa $m$.
Riassumendo, in presenza di una massa $M$ a distanza $R$ da una massa $m$, il campo gravitazionale
di quest'ultima diventa trascurabile quando $r$ supera il suo raggio di Hill. La relazione trovata
(approssimata o meno) mostra come tale raggio dipende dalla radice cubica della massa.

Immaginiamo adesso che $m$ sia il Sole ed $M$ sia la massa della galassia (la Via Lattea)
ipotizzando che tutta la massa sia concentrata nel centro galattico; $R$ rappresenta allora la
distanza del Sole dal centro della galassia. Considerare tutta la massa della galassia concentrata
nel suo centro rappresenta solo un'approssimazione, ma siamo interessati ad un ragionamento sugli
ordini di grandezza, non ad un calcolo preciso (esercizio per casa, se la galassia fosse sferica
l'approssimazione qui proposta sarebbe esatta; perché?).

Inserendo i valori approssimati 

$$M = 10^{12} M_\odot $$ 

$$R = 25000 {\rm al}$$

si ottiene un raggio di Hill di poco più di un anno luce. Sappiamo che questa è più o meno la
distanza dal Sole della nube di Oort, considerata l'estrema periferia del sistema solare. Nonostante
quindi l'approssimazione del calcolo, il risultato ci fornisce il giusto ordine di grandezza. Cosa
ci dice tutto questo su Trappist-1? Il rapporto del raggio di Hill per Trappist-1 con il raggio di
Hill del Sole è pari al rapporto delle loro masse alla un terzo; il risultato è poco meno di un
mezzo, un ordine di grandezza sbagliato rispetto a quanto abbiamo visto all'inizio di questa
lettera. La conclusione è che la dimensione ridotta del sistema di Trappist-1 non può essere
imputata solamente ad effetti gravitazionali diretti (il raggio di Hill). 

A questo punto, carissimi, mi sono appassionato al problema ed ho studiato un po' meglio la
letteratura, arrivando ad un secondo effetto che potrebbe concorrere alla dimensione ridotta di
Trappist-1. Il discorso di massima è più o meno questo: durante le fasi iniziali  di un sistema
solare la nube in rotazione intorno alla stella da cui si formeranno i pianeti ha un profilo di
temperatura (la dipendenza della temperatura dalla distanza dal centro) che caratterizza in modo
fondamentale la formazione planetaria. In particolare per la formazione di pianeti rocciosi (come
quelli di Trappist-1) la temperatura deve essere superiore ad una certa soglia, la cosiddetta
snow line o frost line (il perché è un argomento interessante, ma esula dallo scopo di questa lettera).

La snow line (linea di congelamento) è relativa alla nube stellare da cui si
sviluppa un sistema stellare; oltre tale linea la temperatura è abbastanza bassa
da consentire la formazione di ghiaccio. Si ritiene che i pianeti rocciosi si
formino in una zona all'interno della snow line, mentre all'esterno si formano
i giganti gassosi. Per il sistema solare si trova tra Marte e Giove. Per
calcolarla bisogna tenere conto di due fenomeni distinti che causano la curva di
temperature della nube: l'accrescimento di materia verso la stella (per il
teorema del viriale parte dell'energia gravitazionale persa finisce in energia
termica) e l'irraggiamento della stella centrale.

Il primo fattore è abbastanza complesso, mi riservo di parlarvene in una futura lettera; trattiamo quindi 
il secondo fenomeno. Per la legge di Stefan-Boltzmanni per i corpi neri

$$
	L = A \sigma T^4 
$$

dove $L$ è la luminosità (energia emessa per unità di tempo), $A$ è la superficie
della stella, $\sigma$ la costante di Stefan-Boltzmann e $T$ la temperatura
superificiale.

Tale energia emessa si distribuisce in modo isotropo, quindi a distanza $d$ darà
un flusso di energia per unità di tempo pari a

$$
	L = \frac{4\pi R^2 \sigma T^4}{4\pi d^2} = \sigma T^4 \left(\frac{R}{d}\right)^2
$$

dove $R$ è il raggio della stella. Un corpo (pianeta, granello di polvere etc)
approssimabile come una sfera di raggio $r$ riceve dunque nell'unità di tempo
l'energia pari a 

$$
	\pi r^2 \sigma T^4 \left(\frac{R}{d}\right)^2	
$$

Ipotizziamo che tutta l'energia ricevuta sia assorbita, cosa che non è del tutto
vera (vi è un fattore di assorbimento che dipende dal materiale; come sempre non ci interessano
i dettagli, ma gli andamenti quantitativi). All'equilibrio termico il corpo raggiunge una temperatura stabile 
$T_c$ e riemette l'energia pari a 

$$
	 4 \pi r^2 \sigma T_c^4	
$$

Uguagliando l'energia emessa e quella ricevuta si ottiene l'espressione per
$T_c$, ovvero

$$
	T_c = \frac{1}{\sqrt{2}} T \left( \frac{R}{d} \right)^{1/2}
$$

Da qui si vede che il profilo della temperatura decresce con la radice quadrata
della distanza e dipende principalmente dalla temperatura superficiale della
stella e dalla radice quadrata del suo raggio. Se ora invertiamo tale relazione ed esplicitamo 
$d$ otteniamo

$$
	d = \frac{T^2 R}{2T_c^2} 	
$$	

La frost line si trova ad una temperatura $T_c$ ben determinata e dalla relazione ora trovata
possiamo determinare la distanza di tale linea dalla stella. Usando i dati del Sole si ottiene una
frost line a circa $2 AU$, una distanza compresa tra l'orbita di Marte e quella di Giove. Il
risultato è sensato, all'interno della frost line si trovano i quattro pianeti rocciosi del sistema
solare, all'esterno i pianeti gassosi.

Come nel caso del raggio di Hill, avendo Trappist-1 un raggio più piccolo del sole ed una
temperatura superficiale minore, la posizione della frost line è più interna rispetto al sole. Di
quanto? Il rapporto tra la frost line del sole e quella di Trappist-1 dipende dal rapporto del
quadrato delle temperature e dal rapporto dei raggi. Inserendo i valori che si trovano disponibili
in letteratura si trova che la frost line di Trappist-1 si trova ad una distanza di circa 40 volte
più bassa rispetto al sole secondo la semplice formula ricavata sopra. 
Nonostante l'approssimazione del nostro ragionamento e le notevoli
semplificazioni, prima tra tutte l'aver trascurato l'accrescimento di massa durante la formazione
iniziale ed aver preso solo la temperatura per irraggiamento, l'ordine di grandezza è quello che ci si aspetta. 

Provo a riassumere. Per spiegare le dimensioni ridotte del sistema di Trappist-1 ho analizzato due
possibili strade; una minor intensità del campo gravitazionale (raggio di Hill) ed una frost line
più interna dovuta alla minor temperatura e dimensione della stella. Entrambi i fenomeni vanno nella
stessa direzione, ma il secondo sembra giustificare meglio la ridotta dimensione del sistema
Trappist-1. Il ragionamento seguito probabilmente non spiega del tutto le ridotte dimensioni del
sistema, vi sono sicuramente molte altre questioni legate all'evoluzione del sistema ed alla sua
nascita dalla nube protoplanetaria. Da quel che capisco oggi si considerano le dimensioni ridotte
soprattutto a causa di dinamiche migratorie, ovvero lo spostamento dei pianeti dalla loro orbita
iniziale ad un'orbita diversa (migrazioni importanti sono avvenute anche nel nostro sistema solare).
Il tutto è chiaramente molto complesso ed è fuori dalla portata di questa mia lettera (e dalla mia
portata probabilmente), magari ne riparleremo in futuro. Una cosa però è certa, dal calcolo sulla
frost line si vede come sia plausibile avere pianeti con temperature "terrestri" su orbite molto
ravvicinate alla stella centrale, argomento importante non tanto per la struttura del sistema
stellare, ma per la possibile presenza di condizioni di abitabilità dei pianeti. Argomento
vastissimo che in queste poche righe non ho affrontato.

Cari Francesco ed Anna Wislawa, è ormai tardi e questa lettera è diventata molto più lunga di quello che avrei
voluto. Mi fermo qui anche se ci sarebbero molte cose interessanti da dire su Trappist-1 ed il suo
seguito di pianeti. Magari in un'altra occasione vi parlerò ancora di questo piccolo pezzetto di
universo pieno di opportunità di stupore e meraviglia; nulla in confronto a voi, cari figli miei.

P.S.
Mentre vi scrivevo questa lettera sono rientrato in contatto con il prof.Paolo Paolicchi
dell'Università di Pisa. Molti anni fa è stato mio professore di Astrofisica e per le sue doti umane
e le sue competenze scientifiche ha avuto un ruolo importante nella mia formazione. Mi ha fatto
molto piacere ricevere un suo commento sulle idee espresse in questa lettera e grazie ai suoi
suggerimenti ho potuto rendere questa lettera un po' meno inesatta di quanto fosse in partenza.
Chiaramente ogni errore o imprecisione rimane mia completa responsibilità.
