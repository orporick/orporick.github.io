+++
title = "Lettera sull'irrazionalità"
author = ["Riccardo Giannitrapani"]
publishDate = 2021-07-30T00:00:00+02:00
lastmod = 2024-02-03T14:53:23+01:00
tags = ["math"]
categories = ["lettere"]
draft = false
+++

Carissima A, ti scrivo queste poche righe in questa lunga pausa dal
reale che molti chiamano estate. Ci sei mancata a scuola, abbiamo a
lungo guardato il tuo banco temporaneamente vuoto, lo abbiamo
immaginato abitato, siamo rimasti serenamente in attesa. Mi piace la
parola **temporaneamente**, odora di futuro, di cambiamento, di
risalita.  Settembre è vicino, non abbiamo fretta, quando tornerai
riprenderemo il discorso nel punto esatto in cui lo abbiamo
interrotto.

Nella mia ultima email ti avevo promesso di scriverti qualcosa di
bello. Ci ho pensato a lungo e quando qualche giorno fa mi sono
imbattuto per caso (che è l'unica bandiera che sento mia) in una
dimostrazione, ho pensato a te. Non è una dimostrazione
particolarmente bella, a dire il vero. E non è nemmeno una scoperta
originale, come ho scoperto poco dopo esserci arrivato. Ma come tutte
le strade meno battute ha il merito di costare un po' di fatica e di
regalare orizzonti più ampi.

Voglio quindi dimostrarti che \\(\sqrt{2}\\) è un numero irrazionale. Per
farlo dovrò introdurre alcune idee che non fanno parte dell'usuale
matematica di seconda. Ma siccome non sono tuo insegnante di
matematica mi sento libero dal peso di dover seguire strade
consolidate; possiamo per un attimo liberarci dei vincoli (reali o
immaginari) di un percorso scolastico e parlare liberamente per il
solo piacere di scoprire cose nuove.

L'irrazionalità della radice di \\(2\\) è un passaggio fondamentale nella
storia della matematica, esistono tantissime (infinite forse)
dimostrazioni a partire da quella storica di Ippaso di Metaponto che
per qualche motivo a me oscuro non viene quasi mai proposta a scuola
(la mia preferita rimane quella di
[Estemann](<https://www.cambridge.org/core/journals/mathematical-gazette/article/abs/593-the-irrationality-of-2/18BADD0AB7114F1809B9F3EF6F82D20F>)).

La dimostrazione che ti propongo in questa lettera non è la migliore, non è
la più elegante, non è la più semplice o la più breve. Ma non la
troverai facilmente (era sfuggita anche a me in un primo momento tanto
da essermi stupidamente convinto di aver trovato qualcosa di nuovo) e
questo la rende ricca di possibili (mi auguro) approfondimenti e
suggestioni.

Ma andiamo con calma. Cosa sia la radice quadrata di \\(2\\) dovresti
saperlo da un po', è quel numero positivo che moltiplicato per sé
stesso restituisce \\(2\\). O, è la stessa cosa, è quel numero positivo
che elevato al quadrato fa \\(2\\). Niente di più semplice. Cosa significa
che \\(\sqrt{2}\\) è irrazionale (che è esattamente quello che voglio
dimostrarti)? Significa semplicemente che non è razionale, cioè non
può essere espresso come rapporto (ratio) tra due numeri naturali
(interi positivi, se preferisci). Una conseguenza di questo fatto, che
studierai quest'anno, è che da questo si dimostra che lo sviluppo
decimale di \\(\sqrt{2}\\) è infinito non periodico, quindi
sostanzialmente è un numero inconoscibile (alogoi, li chiamavano i
greci antichi). Studierai anche che di numeri irrazionali ce ne sono
infiniti e giocano un ruolo fondamentale nell'architettura della
matematica.

Qui però siamo interessati a questo semplice fatto, non è possibile
esprimere \\(\sqrt{2}\\) come rapporto tra interi positivi. Cioè non è
possibile scrivere

\\[ \sqrt{2} = \frac{a}{b}\\]

con \\(a\\) e \\(b\\) numeri naturali.

Per farlo ti mostrerò una struttura matematica molto semplice e
affascinante, detta **albero di Calkin-Wilf**, che contiene esattamente
tutti i numeri razionali e ti dimostrerò che \\(\sqrt{2}\\) non può
appartenere a tale struttura e dunque non è razionale.

Pronta? Iniziamo. Dato un qualunque numero razionale positivo \\(a/b\\) (d'ora
in poi ometterò di specificare positivo, lavoreremo esclusivamente con
numeri positivi) definiamo due operazioni nel seguente modo:

\\[ D\left(\frac{a}{b}\right) = \frac{a+b}{b} \\]

\\[ S\left(\frac{a}{b}\right) = \frac{a}{a+b}\\]

Entrambe queste due operazioni (tecnicamente si chiamano funzioni,
studierai a breve) prendono un numero razionale e restituiscono un
nuovo numero razionale. Possiamo rappresentarle visivamente in questo
modo (\\(D\\) va a destra e \\(S\\) a sinistra):

{{< figure src="/ox-hugo/calkin2.png" >}}

Questo è quello che in matematica si chiama un **albero** costituito da
alcuni **nodi** (in questo caso tre) collegati da dei **rami** (in questo caso
due). Dunque dal nodo \\(a/b\\) partono due rami che portano ai due nodi
\\(a/(a+b)\\) e \\((a+b)/a\\). In gergo questi due nodi si chiamano **figli**
mentre il nodo di partenza si chiama **padre**.

Un primo risultato facile da verificare è che \\(D(x)>x\\) e \\(S(x)<x\\) da cui si deduce
immediatamente che i due figli di un nodo sono diversi tra loro
(ricorda questo risultato perché ci servirà tra poco).

A questo punto è possibile estendere l'albero partendo dai figli ed
applicando le operazioni \\(D\\) e \\(S\\) viste sopra; questa estensione può
essere fatta quante volte si vuole, al limite anche all'infinito. Se
il numero di partenza da cui far partire l'albero è la frazione \\(1/1\\)
(cioè il numero \\(1\\)), si ottiene un albero infinito che prende il nome
di **albero di Calkin-Wilf**. Eccone i primi livelli:

{{< figure src="/ox-hugo/calkin.png" >}}

Perché è importante tale struttura (se sei interessata, [qui trovi
l'articolo
originale](<https://www2.math.upenn.edu/~wilf/website/recounting.pdf>))?
Semplice, si dimostra facilmente (lo farò tra un attimo) che tale
albero contiene esattamente tutti i numeri razionali. Inoltre questa
particolare disposizione possiede molte proprietà interessanti, se ci
sarà modo e tempo ne parleremo in futuro.

Per poterti mostrare che ogni razionale appartiene all'albero conviene
introdurre un'ulteriore operazione su razionali che in qualche modo è
l'inversa delle operazioni \\(D\\) e \\(S\\) introdotte prima. Chiamiamola
\\(\phi\\) e definiamola nel seguente modo

\\[ \phi(\frac{a}{b}) = \begin{cases}
                  \dfrac{a}{b-a} & se & b>a \\\\
		  & & \\\\
		  \dfrac{a-b}{b} & se & a>b
		  \end{cases}
\\]

Penso ti sarà facile convincerti che effettivamente \\(\phi\\) risale
l'albero a ritroso, calcolandola su un numero razionale positivo
diverso da \\(1\\) ne restituisce il padre. Fai pure qualche prova tu
stessa, vedrai che è così.

A questo punto è possibile mostrare un risultato fondamentale e che ci
permetterà di ottenere tutti gli altri. Se applico \\(\phi\\) ad un
razionale \\(a/b\\) ottengo un nuovo razionale in cui o il numeratore o il
denominatore è più piccolo. Se continuo ad applicare \\(\phi\\),
numeratore e denominatore continuano a diminuire e siccome sono interi
positivi ad un certo punto dovranno arrivare a \\(1\\) (questo risultato
si può ottenere in modo rigoroso con il limite di successioni, ma sono
cose che farai in quarta, per ora ti chiedo di fidarti dell'idea
intuitiva che ti ho qui proposto). Riassumendo, applicando \\(\phi\\) un
certo numero di volte partendo da un razionale positivo si arriva
sempre a \\(1\\).

A questo punto possiamo dimostrare che l'albero di Calkin-Wilf
contiene tutti i razionali. Supponiamo infatti per assurdo che non
contenga un particolare razionale \\(a/b\\). Applicando \\(\phi\\) otteniamo
un nuovo razionale che non deve essere contenuto nell'albero,
altrimenti ci sarebbe anche \\(a/b\\) che ne è uno dei figli. Applicando
il ragionamento a questo nuovo numero razionale e al successivo e così
via arriviamo prima o poi al numero \\(1/1\\) ottenendo il risultato che
\\(1\\) non deve appartenere all'albero. Ma noi sappiamo che \\(1\\)
appartiene all'albero (è il nodo di partenza), quindi abbiamo appena
trovato un assurdo. Se ipotizziamo che esista un \\(a/b\\) che non
appartiene all'albero ne discende che nemmeno \\(1/1\\) deve appartenere;
siccome questo non è possibile, non ci possono essere razionali che
non siano contenuti nell'albero di Calkin-Wilf.

Non solo, si può anche dimostrare che tutti i razionali sono contenuti
nell'albero nella loro forma ridotta ai minimi termini (puoi provare
tu come esercizio, ti lascio un indizio: nella frazione \\(a/b\\) il MCD
tra \\(a\\) e \\(b\\) non viene cambiato se applico \\(\phi\\).)

Infine possiamo dimostrare che non ci sono duplicati, cioè che non
solo l'albero di Calkin-Wilf contiene tutti i razionali positivi, ma
li contiene una ed una sola volta. La dimostrazione non è difficile,
ma per non appesantire il contenuto di questa lettera lascio a te
pensarci autonomamente, non dovesse riuscirti basta che me lo fai
sapere e ti scrivo ancora.

Bene, siamo quasi arrivati all'irrazionalità di \\(\sqrt{2}\\), fammi
prima riassumere quanto abbiamo ottenuto. Esiste un albero di numeri
razionali, detto albero di Calkin-Wilf, che contiene tutti i numeri
razionali positivi una ed una sola volta come propri nodi.

Adesso ti dimostrerò che \\(\sqrt{2}\\) non può appartenere a questo
albero. Per farlo fammi riscrivere in forma più comoda i due operatori
\\(D\\) e \\(S\\); infatti

\\[D\left(\frac{a}{b}\right) = \frac{a+b}{b} = \frac{a}{b} + 1 \\]

da cui possiamo scrivere

\\[ D(x) = x + 1 \\]

Analogamente per l'altra operazione è facile mostrare che si ottiene

\\[ S(x) = \frac{x}{x+1} \\]

Adesso ipotizziamo che \\(\sqrt{2}\\) sia un numero razionale. Dunque si
trova da qualche parte nell'albero di Calkin-Wilf. Applichiamo \\(D\\) per
trovare il suo figlio a destra; otteniamo

\\[D(\sqrt{2}) = \sqrt{2}+1\\]

Adesso troviamo il figlio a sinistra di questo numero:

\\[ S(\sqrt{2}+1)= \frac{\sqrt{2}+1}{\sqrt{2}+2}=\frac{\sqrt{2}}{2}\\]

dove l'ultimo passaggio (la razionalizzazione) l'ho ottenuto
moltiplicando e dividendo la frazione per \\(2-\sqrt{2}\\). Cerchiamo il
figlio sinistro di questo nuovo numero:

\\[S(\sqrt{2}/2) = \frac{\sqrt{2}/2}{\sqrt{2}/2+1}=
\frac{\sqrt{2}}{\sqrt{2}+2} = \sqrt{2}-1\\]

dove nuovamente l'ultimo passaggio si ottiene con razionalizzazione.
Infine (promesso), cerchiamo il figlio a destra di quest'ultimo
numero:

\\[ D(\sqrt{2}-1) = \sqrt{2}\\]

Abbiamo un problema: ipotizzando che \\(\sqrt{2}\\) sia razionale e quindi
si trovi da qualche parte sull'albero, abbiamo trovato che muovendosi
lungo i rami dell'albero (a destra, poi due volte a sinistra, infine
di nuovo a destra) troviamo nuovamente \\(\sqrt{2}\\). Ma questo è
impossibile, significherebbe che l'albero ci Calkin-Wilf contiene  due
copie dello stesso numero (anzi infinite perché posso ripetere di
nuovo tutto il ragionamento). Dunque \\(\sqrt{2}\\) non può appartenere
all'albero e quindi non è un numero razionale. Siamo di fronte ad un
numero irrazionale (alogoi), che non può essere scritto come frazione
\\(a/b\\).

Ci sarebbero ancora tantissime cose da dire, vedere, dimostrare. Ma
temo di essermi già dilungato troppo. Ti lascio solo con un risultato
che sembra interessante: se scrivo anche la funzione \\(\phi\\) in modo
più generico come ho fatto per \\(D\\) e \\(S\\) (ti lascio i dettagli
algebrici)

\\[ \phi(x) = \begin{cases}
                  \dfrac{x}{1-x} & se & x<1 \\\\
		  & & \\\\
		  x-1 & se & x>1
		  \end{cases}
\\]

allora si vede che se applico \\(\phi\\) ripetutamente a \\(\sqrt{2}\\) torno
ad un certo punto al valore di partenza \\(\sqrt{2}\\). Dunque sembra che
\\(\phi\\) applicata ripetutamente ai razionali arrivi prima o poi a \\(1\\)
(come abbiamo già discusso prima), se invece la applico agli
irrazionali questo non succede. Una funzione che in qualche modo può
essere usata (lo abbiamo fatto in un certo senso anche noi qui sopra)
per determinare se un numero sia razionale o irrazionale (o almeno
sia un irrazionale sotto forma di radicale).

Ho davvero esagerato e ti chiedo scusa. Dimentica pure tutta la
matematica di cui ti ho parlato, l'unico valore che attribuisco a
questa lettera, cara A, è che ho il desiderio di raccontarti
cose. Non vedo l'ora di riaverti in classe.

Un caro saluto, prof.
