---
layout: post
title: "Seconda lettera ad una studentessa sulla matematica"
published: true
tags: [matematica]
categories: Lettere
---

Cara P,
mi scuso prima di tutto per il lungo silenzio dovuto non a volontà o dimenticanza, ma alla vita che
a volte ha modi strani (ma sempre delicati) per imporci un po' di silenzio. Vorrei riprendere il
discorso [della nostra ultima lettera](http://orporick.github.io/2016/11/24/lettera-sulla-matematica/), 
cercando di rispondere a due domande (legittime) 
che mi avete fatto in classe e su cui abbiamo già parlato molto davanti alla lavagna. Come al solito non
pretendo di essere esaustivo, esatto e preciso, vorrei solo suggerire un'idea (insegnare mi sembra
una parola così enorme a volte, suggerire mi è decisamente più simpatica). Sono sicuro che un
matematico di professione potrebbe inorridire di fronte a tante semplificazioni che stiamo facendo,
perdonerà il mezzo impreciso con il fine ultimo di mostrare un'idea diversa di matematica.

La prima domanda è la piu' semplice: esiste un modello di oggetti che soddisfano gli assiomi di
Peano? Gli assiomi sono sicuramente interessanti, come abbiamo visto, ma è possibile calarli in
qualcosa di più pratico, tangibile? La risposta è affermativa e tra tutti i modelli te ne propongo
uno basato sulla teoria degli insiemi che abbiamo visto in classe. Siano dati dunque degli insiemi
partendo dall'insieme vuoto $\emptyset$ e definendo un'operazione $S$ sugli insiemi nel seguente modo

$$ S(A) = A \cup \{A\} $$

Alcune considerazioni su cui ho insistito anche in classe. L'insieme A e l'insieme {A} sono
due insiemi diversi; il primo è un insieme che contiene alcuni elementi (eventualmente nessuno se è
l'insieme vuoto), mentre il secondo è l'insieme che ha come unico elemento $A$. Dunque un insieme il
cui elemento è un insieme. L'insieme $S(A)$ è dunque l'unione di tutti gli elementi contenuti in $A$
con l'insieme che contiene $A$. La cosa all'inizio è un po' bizzarra, ma in realtà funziona
bene. Gli assiomi di Peano allora si applicano agli insiemi se conѕideriamo l'insieme vuoto
$\emptyset$
come lo zero e l'operazione $S$ definita sopra come "successore". Gli insiemi così formati
costituiscono i numeri naturali. Vediamo i primi numeri usando la rappresentazione degli insiemi per
elencazione (e ricordando che in tale rappresentazione l'insieme vuoto non compare mai come elemento
pur essendo sottoinsieme di qualunque insieme)

$$ 0 = \emptyset$$

$$ 1 = S(0) = \{\{\emptyset\}\}$$

$$ 2 = S(1) = \{\{\emptyset\},\{\{\emptyset\}\}\} $$ 

$$ 3 = S(2) = \{\{\emptyset\},\{\{\emptyset\}\}, \{\{\emptyset\},\{\{\emptyset\}\}\}\} $$ 

Lo so, ci si perde facilmente (ricorderai le risate in classe di fronte alla lavagna piena di
parentesi graffe). Di nuovo ricordati che

$$ \emptyset \neq \{\emptyset\} $$

in quanto il primo è l'insieme che non contiene nulla (vuoto, appunto), mentre il secondo è un
insieme che contiene qualcosa.

Non è importante seguire tutti i passaggi o andare avanti nella sequenza,
l'importante è rendersi conto che questo modello funziona. Per esempio potresti dimostrare che
valgono gli assiomi di Peano per questa strtuttura, non è difficile. Avrai anche sicuramente notato
che i numeri sopra elencati sono insiemi che contengono un certo numero di elementi. In particolare
il numero $0$ non contiene elementi, il numero $1$ è un insieme che contiene un solo elemento, il
numero $2$ è un un insieme che contiene due elementi e così via. La cosa sembra funzionare, abbiamo un
modello insiemistico dei numeri naturali che rispetta gli assiomi di Peano. Da questo punto di vista
allora i numeri non sono altro che insiemi particolari. La meravigliosa poesia di questa costruzione
è che si parte dall'insieme vuoto, tutto si basa sul nulla. Riusciamo a costruire infiniti numeri
partendo dal nulla, incredibile non trovi?

La seconda domanda a cui volevo rispondere in questa lettera è sulle operazioni sui numeri naturali,
ovvero come si introducono la somma e la moltiplicazione? Ricorderai che lo abbiamo fatto in classe
(ed anche nell'ultimo compito in classe). Ecco un riassunto privo di pretesa di completezza, come
sempre cerchiamo di capire il senso di quel che scriviamo. Definiamo l'operazione di somma tra
numeri naturali con due regole

$$ a + 0 = a$$

$$ a + S(b) = S(a+b)$$

Sembrano regole sensate (lo sono, i matematici sono persone sensate). In particolare la prima
sottolinea che lo $0$ è l'elemento neutro della somma. La seconda è un po' particolare in quanto
definisce la somma di due numeri con una somma. Non è un gatto che si morde la coda? No, abbiamo
visto in classe che questo tipo di definizione (si chiama ricorsiva) funziona. 

Vediamo alcuni esempi. Dimostriamo che $1+1 = 2$ (che banalità):

$$ 1 + 1 = 1 + S(0) = S(1 + 0) = S(1) = 2 $$

Ecco, fatto. Nota come abbiamo usato entrambe le regole di base e nient'altro. Altro esempio,
dimostriamo che $a + 1 = S(a)$

$$ a + 1 = a + S(0) = S(a + 0) = S(a) $$

Dunque se aggiungiamo $1$ ad un numero otteniamo il suo successore. Non c'è da stupirsi se queste
regole riproducono cose banali che diamo per scontate, sono state scelte apposta per riprodurre
l'operazione di somma che ci saremmo aspettati. Qui non è importante la procedura, ma di nuovo
abbiamo stabilito con un esempio semplice un fatto importante: l'operazione di somma si può
introdurre per via assiomatica, quel che chiamiamo $1+1$ non è necessariamente definibile in termini
pratici del tipo "prendo un sasso, ne prendo un altro, li metto insieme, ho due sassi". L'operazione
di somma definita qui in via formale non dipende da sassi, dita, rane, oggetti in generale. Non
dipende dal mondo reale, ma è una regola definita nel mondo assiomatico che abbiamo incominciato ad
intravedere.

Si può fare la stessa cosa con il prodotto, ricordi? Definendolo tramite due regole di base

$$ a \times 0 = 0 $$

$$ a \times S(b) = a \times b + a $$

Nota che di nuovo è un modo ricorsivo per definire il prodotto e che per la sua definizione abbiamo
bisogno di aver già definito una operazione di somma. Gli esercizi visti in classe ci hanno convinti
che questo prodotto formale riproduce fedelemente tutto quello che ci saremmo aspettati dalle nostre
conoscenze elementari. Ad esempio puoi provare a dimostrare che

$$ 2\times 1 = 1\times 2 $$

(in generale si dimostra che il prodotto definito formalmente come sopra  è commutativo, ma la
dimostrazione generale è piuttosto lunga).

Altro esempio, di nuovo con la somma:

$$ 2 + 2 = 2 + S(1) = S(2+1) = S(2 + S(0)) = S(S(2+0)) = S(S(2)) = S(3) = 4 $$

Certo, un sacco di fatica per dimostrare che $2+2=4$. Ma è proprio qui il punto, lo abbiamo
dimostrato a partire dalle regole date sopra. Nella vita pratica non ci sogniamo minimamente di fare
le somme in questo modo assiomatico, ma il fatto di sapere che è possibile farlo crea fiducia nelle
strutture matematiche di tutti i giorni. 

Cosa succede se cambio le regole? Sbaglio? No, semplicemente definisci un'operazione diversa e non
ti aspetti più i risultati a cui siamo abituati dall'aritmetica elementare. Ti ricordi che vi ho
parlato di Orwell e del suo romanzo "1984"? Com'è possibile che $2+2=5$ se fin da piccoli sappiamo
tutti che $2+2=4$? Credere ad una cosa falsa fino a farla diventare vera, questo è il triste destino
del protagonista del romanzo. Ma da un punto di vista matematico? Cambiamo le regole della somma,
usiamo le seguenti:

$$ a + 0 = S(a)$$

$$ a + S(b) = S(a + b) $$

Con queste regole ti lascio da dimostrare $2+2=5$. Questa somma non è la nostra, quella a cui siamo
abituati, quella delle nostre calcolatrici per intenderci. Non per questo è una operazione
illecita, la si può definire tranquillamente. A cosa serve? A sognare un modo diverso di intendere
la matematica, non come rappresentazione (linguaggio) del mondo reale, ma come mondo altro pieno di
meravigliose possibilità.

Mi sono dilungato anche troppo ed è tardi, spero di poterti scrivere presto, sempre che tu lo voglia; 
ci sono molte altre domande a cui dobbiamo dare risposta. Quale miglior commiato che la
consapevolezza che dobbiamo ancora capire tanto (non solo tu, anche io)? 

Un caro saluto, prof.


