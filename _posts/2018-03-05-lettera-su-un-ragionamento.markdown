---
layout: post
title: "Lettera su un ragionamento"
published: true
tags: [matematica]
categories: Lettere
---

Caro M,
scusami per il ritardo con cui rispondo alla tua gentile lettera, sono stati giorni un po' in
salita. Ti ringrazio per l'interesse per quanto abbiamo detto alla mia conferenza di qualche
settimana fa, esperienza che mi ha permesso di parlarvi di molte cose, probabilmente senza la dovuta
precisione per mancanza di tempo. Cerco di rimediare almeno in parte qui con una descrizione meno
frettolosa di uno dei modelli che abbiamo visto in quella occasione.

L'argomento, come sai, era come si può descrivere matematicamente la propagazione di una falsa
notizia all'interno di una comunità; durante la conferenza ho mostrato vari modelli, sia in teoria
dei grafi sia in teoria della probabilità. Vorrei qui riprendere ed approfondire leggermente il
modello di ispirazione biologica: abbiamo infatti visto come in letteratura (vedi in fondo a questa
lettera qualche riferimento di partenza) si sia riscontrata una particolare efficacia in modelli di
propagazione delle notizie false mutuati dai modelli di propagazione di malattie infettive. In poche
parole la notizia falsa sembra, in molti contesti, comportarsi come un virus. Tralascio tutta la
discussione che abbiamo fatto alla conferenza e le implicazioni pratiche per concentrarmi sul
modello matematico più semplice, il cosiddetto modello SIR, un modello molto semplice (e
semplificato) che pero' in diversi contesti sembra funzionare bene.

In tale modello abbiamo essenzialmente tre popolazioni ad ogni istante:

* i **suscettibili**, ovvero la popolazione che può contrarre la malattia;
* gli **infetti**, ovvero la popolazione che è ammalata;
* i **rimossi**, ovvero la popolazione che risulta immune alla malattia, o perché si è ammalata ed è
    guarita o per una qualche forma di immunità naturale o per una campagna di vaccinazioni.

Indichiamo il numero di persone appartenenti a ciascuna delle tre categorie con le lettere $S$, $I$
e $R$ (da cui il nome SIR del modello). Si avrà inoltre che $S+I+R = N$ con $N$ la popolazione
totale (che è come dire che le tre variabili non sono indipendenti, basta studiarne due e la terza
discende dall'equazione appena scritta). Come ho fatto durante la conferenza analizziamo qui un
modello matematica discreto, ovvero immaginiamo di partire ad un certo istante iniziale con le tre
popolazioni $S_0$, $I_0$ ed $R_0$ e facciamo evolvere il sistema con passi discreti (la scala
temporale, ovvero la durata di ciascun passo, qui è irrilevante, siamo interessati all'andamento
generale del modello). Di solito si usa un modello continuo, ma avrei bisogno del concetto di
derivata che ancora non avete fatto, quando sarai in quinta ne riparliamo, promesso. 

Il modello SIR prevede le seguenti equazioni di evoluzione, ovvero equazioni
che legano le popolazioni delle tre categorie all'istante $i+1$ alle popolazioni all'istante
precedente $i$

$$ S_{i+1} = S_i - a S_iI_i $$

$$ I_{i+1} = I_i + a S_iI_i - b I_i $$

$$ R_{i+1} = R_i + b I_i $$

Discutiamo queste equazioni. Intanto ciascun valore all'istante $i+1$, come detto sopra, è legato ai
valori all'istante precedente $i$. Il processo è rappresentato schematicamente in questo modo: i
suscettibili possono diventare infetti (si ammalano) e a loro volta gli infetti possono diventare rimossi (guariscono).

La prima equazione ci dice che il numero di suscettibili decresce
in modo proporzionale al prodotto del numero di suscettibili per il numero di infatti; in questo
semplice modello tale prodotto ci dice quanti incontri tra infetti e suscettibili avvengono in media
in un intervallo temporale (le coppie infetti-suscettibili sono proprio pari al prodotto dei loro
numeri). La costante di proporzionalità $a$ dipende dal modello di malattia ed è essenzialmente
legata alla probabilità che un suscettibile che incontra un infetto si ammali. Più $a$ è alto e più
la malattia si propaga rapidamente. La seconda equiazione dice che gli infetti aumentano dello
stesso fattore visto sopra e diminuiscono che un fattore proporzionale al numero di infetti; questo
rappresenta, tramite il parametro $b$, la possibilità che un infetto guarisca e si immunizzi (nei
modelli virali realistici nei rimossi si possono anche considerare i decessi). La proporzionalità
nella diminuizione degli infetti, come abbiamo visto durante la conferenza, rappresenta il tipico
andamento esponenziale decrescente e $b$ è legato alla probabilità nel tempo di guarigione.
L'ultima equazione infine ci dice che il numero di rimossi aumenta a causa della guarigione degli
infetti con lo stesso fattore.

In questo modello se sommiamo le tre popolazioni all'istante $i+1$ otteniamo (per costruziuone) la
somma delle tre popolazioni all'istante $i$, ovvero il numero totale di persone $N$ si conserva
(esercizio per casa, molto semplice).

Le equazioni del modello si possono in modo semplice riscrivere in questo modo

$$ S_{i+1} - S_i = - a S_iI_i $$

$$ I_{i+1} - I_i =  a S_iI_i - b I_i $$

$$ R_{i+1} - R_i = b I_i $$

Dove a sinistra si trovano le variazioni per unità di tempo della popolazione relativa a quella
categoria (tra un paio di anni queste variazioni le studieremo in modo più adeguato introducento il
concetto di derivata, questa analisi diventerà ancora più semplice).

Soffermiamoci sulla seconda equazioni e trasformiamola, con un raccoglimento, in

$$ \Delta I_{i+1} = (a S_i - b) I_i $$

dove con $\Delta$ si indica appunto la variazione della grandezza. Si vede subito che questa
equazione ha il seguente significato: se $aS_i -b$ è positivo la popolazioni di infetti cresce,
altrimenti decresce. L'epidemia dunque parte se all'istante iniziale vale la seguente equazione

$$ a S_0 -b > 0 $$

ovvero

$$ S_0 > \frac{b}{a} $$

Se immaginiamo che all'istante iniziale il numero di infetti $I_0$ sia molto basso rispetto ai
suscettibili ed ai rimossi, possiamo scrivere approssimativamente che $ S_0 = N - R_0 $, dunque
l'epidemia per partire richiede che

$$ N - R_0 > \frac{b}{a} $$ 

ovvero

$$ R_0 < N - \frac{b}{a} $$

Se non ci sono immunità naturali per cui $R_0$ è piccolo o nullo, l'epidemia sicuramente parte. Ma
se possiamo inizialmente aumentare $R_0$ in modo da portarlo sopra la soglia critica $N-\frac{b}{a}$
allora l'epidemia non parte. Trovo interessante in questo modello il fatto che non è necessario che
tutta la popolazione inizilamente sia immune, ma a seconda del modello di malattia (la scelta di $a$
e $b$) basta una percentuale della popolazione che sia immune per impedire l'epidemia.

Come abbiamo discusso brevemente alla conferenza si può ottenere questo
risultato, per esempio, con una campagna di vaccinazioni. Il recente dibattito pubblico sul tema,
lungi dall'essere esaurito da semplici modelli matematici come questo, può sicuramente beneficiare
da un'analisi modellistica di questo tipo (anche più complessa e realistica, ma credimi, da quel che
ho potuto vedere, con tutti i limiti che ho da non esperto, nella letteratura corrente,  già queste poche 
equazioni risultano soddisfacenti in molti casi reali). Quando le
organizzazioni nazionali e transnazionali preposte alla sanità pubblica propongono campagne vaccinali, a
volte anche in termini legislativi, lo fanno di solito sulla base di modelli simili a questo. Non
sono decisioni campate in aria, ma tendono ad usare modelli razionali per massimizzare il benessere
di tutti. Il tutto è ovviamente migliorabile all'interno del dibattito scientifico, raramente,
purtroppo, all'interno del dibattito pubblico che di razionale ha ormai poco.

Ti lascio, se hai voglia di sporcarti un po' le mani, [un piccolo programma in
Python](https://drive.google.com/file/d/1aL9sYIFeFZfSJx--mT0Ue-_uNa8rKdMx/view?usp=sharing)
con cui puoi divertirti ad analizzare il modello SIR discreto.


Il codice non è molto bello (stasera non sono proprio riposatissimo), ma dovrebbe essere
comprensibile. Esercizi: trova il livello di vaccinazione necessario per non far partire l'epidemia,
se l'epidemia parte determina il picco massimo di contagio (si trova facilmente dai ragionamenti
contenuti in questa lettera, verifica con la simulazione),
determina cosa succede se $b = 0$ (nessuna possibilità di guarigione una volta infetti) e l'epidemia
parte. In questo ultimo caso  la curva che ottieni ti ricorda qualcosa? (Suggerimento: la curva
logistica).

Come ho sottolineato  alla conferenza questo modello si adatta bene, con le dovute cautele, anche ad alcuni regimi di
propagazione di notizie false; i suscettibili sono le persone che potrebbero credere alla notizia,
gli infetti quelli che ci credono ed i rimossi quelli che non ci credono da subito o che ci hanno
creduto, ma poi hanno cambiato idea. Anche in questo caso un numero elevato di $R_0$ (persone che
non cascano nel tranello della notizia falsa) impedisce la propagazione della notizia (la diffusione
della "malattia"). In questo
caso, a mio avviso, la vaccinazione si chiama "istruzione", quel delicato meccanismo che dovrebbe
mettere tutti nella condizione di valutare ed informarsi in modo serio, anche con fatica, 
prima di prendere posizione su un argomento. E come abbiamo capito non è necessario che sia
vaccinata l'intera popolazione, basta che lo sia un numero di persone superiore ad una soglia
critica.

L'intento di questa lettera rimane invariato rispetto alla conferenza di qualche settimana fa a cui
tu gentilmente hai partecipato; non ho pretese di verità e non sono esperto di nulla, ma spero di
averti mostrato che si può ragionare sulle cose. Immagino di non aver risposto a tutti i tuoi dubbi e sicuramente ho tralasciato molti aspetti
interessanti, se vuoi sono disponibile ad ulteriori iterazioni. 

Saluti, prof.
 
P.S.
Per approfondire puoi partire dall'ottimo libro di Giuseppe Gaeta "Modelli Matematici in Biologia"
edito dalla Springer. Per l'uso di questi modelli per la  propagazione di notizie false puoi partire da 
[questo articolo](http://people.cs.vt.edu/naren/papers/news-rumor-epi-snakdd13.pdf) per esempio (il modello che loro
propongono è però più complesso di quello che ti ho raccontato qui, l'idea di base è la stessa).


