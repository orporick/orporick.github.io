---
layout: post
title: "Alcune equazioni dell'elettromagnetismo"
tags: [fisica]
categories: Lettere
---

Cara R,
nella tua ultima lettera mi chiedi se posso tornare brevemente su
alcune questioni legate all'elettromagnetismo viste in classe, in
particolare sulle prime due equazioni di Maxwell, quelle sui flussi
dei campi. In particolare mi chiedi quali sono i punti importanti e
fondanti, ripuliti da tutti i dettagli tecnici, di tali
equazioni. L'argomento che mi chiedi è vasto ed importante ed è
difficile riuscire a farlo stare nel poco spazio concesso da una
lettera.  Ci provo, come sempre in modo incompleto e probabilmente
impreciso, senza pretendere di aiutare se non donandoti un po' del mio
tempo e quel poco che conosco.

Partirei prima di tutto dai campi elettrico e magnetico. Se ricordi
abbiamo introdotto il concetto di campo per evitare di parlare di
interazione a distanza tra corpi carichi. In breve la situazione è la
seguente: anziché dire che una carica elettrica $A$ in un certo punto
dello spazio esercita una forza a distanza su un'altra carica
elettrica $B$ posta in un altro punto dello spazio possiamo pensare
che $A$ generi un campo elettrico ed un campo magnetico
localmente. Questi campi elettrici e magnetici si propagano poi nello
spazio secondo leggi ben precise e quando arrivano nella regione che
contiene $B$ esercitano su tale carica un'azione. Dunque ci sono due
aspetti:

1. le cariche elettriche generano dei campi elettrici e magnetici;
2. i campi elettrici e magnetici esercitano un'azione sulle cariche
elettriche presenti nello spazio.

Partiamo dal secondo punto; come ricorderai possiamo dare
l'espressione della forza esercitata su una carica di prova $q$ posta
in un punto dello spazio dove sono presenti un campo elettrico ${\bf
E}$ ed uno magnetico ${\bf B}$

$$ {\bf F}  = q {\bf E} + q{\bf v}\times{\bf B} $$

(ti ricordo che i campi sono vettori). L'espressione data per la forza
può essere usata in modo operativo per definire, se vuoi, i campi
elettrici e magnetici. Se metto una piccola carica $q$ ferma in un
punto dello spazio, il termine con il campo magnetico (forza di
Lorentz) si annulla e quindi la forza sarà solo eletrica. Misurando
quindi l'accelerazione di $q$ posso determinare (definire) il campo
elettrico. Una volta trovato ${\bf E}$ posso poi procedere con una
carica $q$ in moto per determinare operativamente il campo ${\bf B}$
(come abbiamo visto in classe). Dunque i campi ${\bf E}$ e ${\bf B}$
non sono particolarmente misteriosi, sono solo dei nuovi enti fisici
che agiscono con una forza ben determinata sulle cariche elettriche,
sia ferme che in moto.

Questo per quanto riguarda l'azione dei campi sulle cariche, rimane
però il problema di determinare come vengono generati (e poi in
seconda istanza come si propagano) i campi elettrici e magnetici. Le
equazioni che ci dicono come vengono generati ${\bf E}$ e ${\bf B}$
sono appunto le quattro equazioni di Maxwell. Come abbiamo visto in
classe sono abbastanza complicate nella loro forma generale, ma se ci
accontentiamo di capirne il significato concettuale e di poter
studiare qualche caso particolare allora le equazioni sono senza
dubbio di semplice scrittura. Analizzo in questa lettera le prime due
che mi hai chiesto, le altre (quelle sulla circuitazione) le tratterò
eventualmente in un'altra lettera.

Entrambe le equazioni che voglio scrivere e commentare fanno uso del
concetto di flusso di un campo vettoriale attraverso una superficie,
quindi fammi riprendere in modo molto breve il concetto.

Dato un campo vettoriale uniforme ${\bf V}$ definito in una certa
regione dello spazio (uniforme ricorderai significa che in ogni punto
il campo è lo stesso come modulo, direzione e verso) e considerata una
superficie piana di area $S$ perpendicolare alla direzione del campo,
definiamo il flusso del campo attraverso la superficie come

$$ \Phi_S({\bf V}) = S V $$

(quando scrivo il vettore non in grassetto intendo indicare il suo
modulo). Molto semplice. Se la superficie piana è parallela al campo il flusso
invece viene definito come nullo. E nei casi intermedi? Sia $\theta$
l'angolo che la normale alla superficie fa con la direzione positiva
del campo, allora il flusso è dato da

$$ \Phi_S({\bf V}) = S V \cos(\theta) $$

Come vedi con $\theta = 0$ e $\theta = 90^\circ$ si riottengono i due
casi particolari. C'è un piccolo dettaglio: devo decidere
un'orientamento della superficie, ovvero devo decidere in quale dei
due semispazi definiti dalla superficie si trova il suo vettore
normale. Una volta stabilito questo il calcolo del flusso di un campo
uniforme attraverso una superficie piana è molto semplice.

Cosa rappresenta il flusso di un campo vettoriale? Mi dice, grosso
modo, come il campo "taglia" la superficie; un flusso positivo
significa che il campo taglia la superficie nel verso concorde alla
sua normale, un flusso negativo invece che il campo taglia la
superficie nel verso opposto. Un flusso zero è associabile ad un campo
che non taglia la superficie, ovvero ne è tangente. Ma cosa significa
taglia? Immagina di immergere una bottiglia nel flusso di acqua
corrente di un fiume e considera la superficie piana del foro di
entrata della bottiglia. Se tengo la bottiglia in modo che tale foro
sia perpendicolare al flusso dell'acqua, la bottiglia si riempie in
fretta. Se tengo la bottiglia in modo che il foro di entrata sia
parallelo all'acqua la bottiglia non si riempie affatto (più o
meno). Inoltre più il foro della bottiglia è grande, più la bottiglia
si riempie velocemente. Il paragone non è del tutto calzante, ma può
darti un'idea visiva di cosa sia il flusso di un campo (per inciso non
è un caso che la terminologia dei campi sia piena di riferimenti a
casi di idrodinamica, come flusso, sorgente etc.).

E se la superficie non è piana? Pensa ad esempio alla superficie di un
cubo. In questo caso il flusso attraverso la superficie del cubo è
definito come la somma dei sei flussi attraverso le sue sei facce
(orientate tutte nello stesso modo, ovvero o tutte uscenti o tutte
entranti). E se la superficie non è piana e non è riconducibile
all'unione di un certo numero di facce piane, come nel caso del cubo?
Allora la cosa diventa un po' complicata. Ricorderai che a lezione
abbiamo visto come sia sempre possibile dividere una superficie curva
nell'unione di tante piccole facce piane che la approssimano, un po'
come le facce di un pallone da calcio approssimano una sfera. Con un
processo di limite si può definire anche in questo caso il concetto di
flusso, ma come abbiamo visto la cosa normalmente è molto complicata e
non l'abbiamo trattata in classe.

E se il campo non è uniforme? Il problema è simile al precedente, una
definizione rigorosa e formale diventa complicata, ma intuitivamente
posso dividere la superficie in tante piccole facce piane così piccole che
su ciascuna io possa considerare il campo come approssimativamente
uniforme. Calcolo tutti i flussi su tutte le facce e poi sommo (è solo
in linea teorica, nella pratica non si fa se non in casi semplici come
quello del cubo a sei facce di cui abbiamo parlato prima).

Bene, torniamo a Maxwell. Le prime due equazioni si possono scrivere
così

$$ \Phi_S({\bf E}) = \frac{1}{\epsilon_0} Q $$

$$ \Phi_S({\bf B}) = 0 $$

dove $S$ è una qualunte superficie chiusa orientata verso l'esterno,
$Q$ è la carica elettrica totale contenuta dentro la superficie $S$ ed
$\epsilon_0$ è una costante di natura (poco interessante).

Scritte così sembrano semplici, vediamo il loro significato.

La prima (normalmente conosciuta come teorema di Gauss per il campo
elettrico) dice che se una superificie chiusa $S$ contiene una carica,
allora il flusso del campo che l'attraversa è proporzionale alla
carica totale. Attenzione che la carica $Q$ è quella totale contenuta
in $S$; dunque se in $S$ ci sono un certo numero di cariche elettriche
di entrambi i segni può benissimo essere che la loro somma sia zero e
quindi anche il flusso di ${\bf E}$. Un flusso nullo del campo
elettrico non mi diche che non ci sono cariche dentro $S$, ma solo che
la somma di tutte le cariche è nulla. Dunque le cariche positive
generano un flusso uscente, quelle negative un flusso entrante.

Questa equazione è importante per il discorso che stiamo facendo
perché effettivamente crea un legame tra le cariche contenute nello
spazio ed il campo elettrico che esse generano. Purtroppo nel caso
generale questa equazione non basta a determinare ${\bf E}$ conoscendo
le cariche nello spazio, ma in alcuni casi particolari si. Per esempio
in classe abbiamo visto il caso di una carica isolata $Q$; immagina
una superficie sferica di raggio $r$ con $Q$ al centro e calcola il
flusso del campo elettrico uscente. Per motivi di simmetria il campo
dovrà essere perpendicolare alla superficie e per quanto abbiamo visto
primo questo significa

$$ \Phi_S({\bf E}) = 4\pi r^2 E$$

dove $E$ è il modulo del campo elettrico. Mettendo questa espressione
del flusso nell'equazione di Maxwell si ottiene

$$ E = \frac{1}{4\pi\epsilon_0} \frac{Q}{r^2} $$

Questo è il campo elettrico generato dalla carica $Q$ a distanza $r$
(ricordo, questo è il modulo, per simmetria il campo sarà come vettore
radiale). Questo è un caso particolare in cui l'equazione di Maxwell
fa quello per cui è stata scritta: determinare il campo elettrico
sapendo la distribuzione nello spazio delle cariche. È un caso molto
semplice, ma intanto funziona (funziona per via dell'elevata simmetria
radiale e per l'assenza di movimento della carica $Q$, per questo non
c'è stato bisogno delle altre equazioni di Maxwell in questo
caso).

Ricorderai poi che se metto una carica $q$ ferma nel campo
elettrico questa subisce una forza pari a $q {\bf E}$, da cui
otteniamo nel nostro caso semplice

$$ F = \frac{1}{4\pi\epsilon_0} \frac{qQ}{r^2} $$

che è l'espressione della forza di Coulomb tra due cariche poste a
distanza $r$. Siamo tornati al punto di partenza: invece di parlare di
forza a distanza (Coulomb) possiamo dire che la carica $Q$ genera nei
punti intorno a se (per esempio a distanza $r$) un campo elettrico che
possiamo determinare grazie alle equazioni di Maxwell. È il campo
elettrico generato da $Q$ che poi agisce con una forza su una carica
$q$ che metto in quel punto. Dunque il campo media le forze
elettriche.

La seconda equazione di Maxwell è per il campo magnetico e dice che il
flusso di tale campo è sempre nullo attraverso qualunque superficie
orientata verso l'esterno. Il fatto che il flusso sia sempre nullo
significa che o il campo magnetico è parallelo in ogni punto alla
superficie o se in qualche punto il campo magnetico ha una componente
entrante, in altri punti avrà una componente uscente in modo che la
somma di tutti i contributi al flusso faccia sempre zero. In classe
abbiamo visto che questa equazione equivale a chiedere che non esista
un monopolo magnetico, ovvero un singolo polo nord o un singolo polo
sud magnetico, ma si trovano sempre a coppie (avevamo visto questo in
termini di linee di campo, ma lo spazio di questa lettera sta
finendo). La cosa importante da notare è che da questa equazione è
impossibile determinare il campo ${\bf B}$ sapendo come sono messe (e
come si muovono) le cariche nello spazio, ci vogliono le altre
equazioni (quelle con la circuitazione dei campi).

Concludo. L'elettromagnetismo, per come lo abbiamo introdotto, ha due
attori, ovvero le cariche elettriche (i corpi materiali) ed i
campi. Abbiamo bisogno quindi di due tipi diversi di equazioni:

1. equazioni che mi dicano come i campi agiscono sulla materia (le
cariche);
2. equazioni che mi dicano come la materia (le cariche) genera i
campi.

Le seconde sono le quattro equazioni di Maxwell, la prima è
l'equazione della forza che ho scritto all'inizio di questa nostra
chiaccherata. Non è affascinante questo eterno balletto tra campi e
materia? La materia crea i campi (equazioni di Maxwell), i campi
agiscono sulla materia (equazione della forza).

Direi che ho straparlato abbastanza, ci tenevo a scriverti un
riassunto di quanto abbiamo dettagliatamente visto in classe perché tu
possa prenderne spunto per ulteriori domande. Nel caso sai dove
trovarmi.

RG


P.S.

È tardi, Anna Wislawa continua a svegliarsi ed ho molte ore di sonno
arretrato. Ti sarò grato se mi segnalerai qualsiasi errore la mia
ignoranza o la mia stanchezza mi abbiano fatto commettere in queste
righe il cui scopo, ripeto, non è didattico (ci sono sempre i libri)
ma di vicinanza. Se hai bisogno, ci sono.
