---
layout: post
title: "Un'altra imperfezione"
published: true
tags: [matematica]
categories: Imperfezioni
---

Di nuovo una imperfezione, se non proprio un errore. Mi sono accorto di essere rimasto lontano da [questo posto](http://orporick.github.io/imperfezioni/)
per molto tempo, non per improvvisa precisione (che non mi appartiene), ma per mancanza di tempo. Qualche
tempo fa però, durante una conferenza sui paradossi in matematica, ho presentato un argomento a me
caro in modo così superficiale ed approssimativo che me ne sono vergognato per giorni. A parziale
risarcimento e per chiedere scusa agli studenti ed alle studentesse che quel giorno erano presenti
provo a rispiegare qui sperando in una rinnovata pace.

Ciò di cui ho parlato e di cui vorrei parlare di nuovo è il paradosso di Littlewood (non sono sicuro
che sia questo il nome dell'argomento, ma visto che io lo conosco per averlo letto [qui](https://www.amazon.it/Littlewoods-Miscellany-John-Littlewood-2008-01-12/dp/B01K0UT56E/ref=sr_1_2?s=books&ie=UTF8&qid=1520979116&sr=1-2&keywords=littlewood+miscellany&dpID=41vBF9nmQFL&preST=_SY264_BO1,204,203,200_QL40_&dpSrc=srch) provo a
proporne un'origine).

Si consideri il seguente esperimento concettuale (sarà chiaro da quel che segue che non è possibile
replicare quanto qui descritto nella realtà, siamo nell'ambito puro della matematica): si prenda una
scatola (capiente) ed un numero infinito, ma numerabile, di palline da ping pong. Numerabile
significa che ogni pallina reca inciso sopra un numero naturale, $1, 2, 3, 4, \ldots$. Quando manca
un minuto a mezzanotte mettiamo nella scatola la prima decina di palline, quelle numerate da $1$ a
$10$, e contestualmente togliamo la numero $1$. Tutto chiaro? Nella scatola rimangono $9$ palline,
dalla $2$ alla $10$. Quando manca $1/2$ minuto alla mezzanotte mettiamo nella scatola la seconda
decina, dalla $11$ alla $20$, e togliamo la numero $2$. Ci sono ora $18$ palline nella scatola,
dalla $3$ alla $20$. Fin qui tutto bene. Quando manca $1/3$ di minuto mettiamo dentro la scatola la
terza decina, dalla $21$ alla $30$, e togliamo la numero $3$. A questo punto dovrebbe essere chiaro
il modo di procedere: quando manca $1/n$ di minuto alla mezzanotte mettiamo nella scatola l'ennesima
decina e togliamo la pallina numero $n$. Dunque ad ogni passo mettiamo dieci palline e ne togliamo
una, per un totale di nove palline ad ogni passaggio. Ed ora la domana (ed il paradosso): quante
palline ci saranno nella scatola a mezzanotte? La risposta è zero. Esatto, nessuna. Risulta
piuttosto semplice convincersi di questo risultato, anche se molto controintuitivo (da qui il
paradosso). Supponiamo che a mezzanotte ci sia ancora qualche pallina nella scatola, per esempio la
numero $k$; ma questo è impossibile, perché la pallina numero $k$ è stata buttata via quando mancava
$1/k$ di minuto alla mezzanotte. E siccome questo ragionamento lo si può fare per qualunque valore
di $k$ non ci resta che concludere che dentro la scatola alla fine non rimane alcuna pallina. 

Alcuni commenti. L'intuizione porterebbe ad immaginare che dentro la scatola ci siano alla fine
infinite palline: in fondo ad ogni passaggio ne mettiamo dentro $10$ e ne togliamo $1$, quindi in
totale inseriamo $9$ palline e siccome i passaggi per arrivare alla mezzanotte sono infiniti, alla
fine devono esserci infinite palline. Questo ragionamento (sbagliato) si basa sull'uso improprio
della seguente somma infinita:

$$ 10 - 1 + 10 - 1 + 10 - 1 + \ldots $$

Si può infatti dimostrare che questa somma non converge. Per rendersi conto di questo basta
riordinare i termini (la somma è commutativa ed associativa) in modo da avere nella somma un $10$
seguito da dieci $-1$, poi un $10$ seguito nuovamente da dieci $-1$ e così via. La somma così
riscritta sembra fare $0$. Questo fatto (la somma infinita sembra avere valori diversi a seconda di
come si riordinano i suoi termini) è proprio sintomo che la somma non converge ad un valore. Si
potrebbe pensare che questa obiezione non regga in quanto ci sono tanti $10$ quanti $-1$, ma essendo
un numero infinito di entrambi si possono riarrangiare in tutti i modi che ci vengono in mente,
ottenendo risultati diversi. Non sempre ovviamente è così; per esempio la somma infinita delle
potenze di $1/2$ 

$$ 1 + 1/2 + 1/4 + 1/8 + \ldots $$ 

converge a $2$, e questo in qualsiasi modo si riarrangino i termini (ne abbiamo discusso alla
conferenza parlando del paradosso di Zenone). Una somma infinita non convergente nota dall'antichità
(che ha creato in passato non pochi grattacapi) è

$$ 1 - 1 + 1 - 1 + 1 - 1 + \ldots $$ 

che come nella somma infinita del paradosso di Littlewood può fare zero, ma anche $1$ (ed in
generale qualsiasi numero). Questo perché in realtà non fa alcun numero non convergendo.

Un'ultima considerazione: è chiaro, come accennato all'inizio, che questo esperimento con le palline
è solo concettuale. Non solo dovremmo compiere un numero infinito di operazioni, ma le dovremmo
compiere tutte in un minuto, con un tempo di esecuzione che decresce come $1/n$ man mano che $n$
cresce. Questo tipo di operazioni sono spesso associate a qualche forma di paradosso; per una
rassegna interessante che tocca anche gli aspetti filosofici consiglio, tra tanti, la lettura del libro di
[Graham Oppy](https://www.amazon.it/Philosophical-Perspectives-Infinity-Graham-2009-01-29/dp/B01FKRF6V0/ref=sr_1_13?ie=UTF8&qid=1520978935&sr=8-13&keywords=graham+oppy).

Alla fine di tutto cosa possiamo dire (le conclusioni tratte alla conferenza); questo paradosso (ed
altri simili, come quelli di Zenone) mostra che quando si sommano infiniti numeri l'intuizione non
aiuta più e bisogna stare attenti. I paradossi (para doxa, contro l'opinione) non segnalano quasi
mai errori di una teoria, ma una sbagliata interpretazione che ne abbiamo noi. Tutto qui.



