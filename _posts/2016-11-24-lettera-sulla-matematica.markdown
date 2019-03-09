---
layout: post
title: "Lettera ad una studentessa sulla matematica"
published: true
tags: [matematica]
categories: Lettere
---

Cara P,
rispondo volentieri alla tua lettera immaginaria, ho fatto finta di riceverla proprio oggi. Mi
chiedi della matematica, di quello che in classe stiamo facendo, mi parli di come vivi i voti, le
difficoltà, le mie spiegazioni non sempre chiare. Non importa che tu questa lettera non me l'abbia
scritta veramente, l'ho letta più volte ed ho maturato l'idea di provare a risponderti in questo mio
piccolo spazio; prendi questa risposta per quel che è, il tentativo di un prof di approfondire, più
di quanto si possa fare in classe, la materia di cui parla. Con te, con i tuoi compagni e le tue
compagne. C'è così poco tempo in quella misera ora di sessanta minuti, le cose da dire sono così
tante che non basterebbero vite intere.

Premetto che non vi è alcuna pretesa di completezza in quanto ti scriverò qui, come non ve ne è in
classe. L'argomento che trattiamo è molto complesso e vasto, devo tralasciare tutta una serie di
problematiche e di dettagli, sperando che il taglio operato non recida il senso profondo del nostro
discorso. Ecco, questo vorrei fare qui con te, un discorso sulla matematica. Prendo spunto dagli
argomenti fatti in classe, ma vorrei allargare la visione per cercare di dare un senso a tutto il
nostro quotidiano parlare. Ultimamente ho l'impressione che mi guardiate dubbiosi, le cose che dico
non sempre ci sono sul libro, a volte mi sembra di parlare senza essere ascoltato. Ma non è colpa
vostra, la natura del problema da affrontare è incompatibile con le necessarie restrizioni di un
aula, di un banco, di quattro pareti. Allora provo qui, c'è più spazio per camminare quando si
scrive. 

Un'ultima avvertenza è necessaria; non prendere questa mia lettera, e quelle eventuali che
seguiranno se tu continuerai a scrivermi (o io ad inventarmi che tu lo faccia), come appunti, non lo
sono. Andrebbero espanse, riviste, discusse, aggiornate, corrette. Non sono appunti, ma un dialogo
tra me e te, lontano da verifiche e voti (che non piacciono ad entrambi), una passeggiata per
cercare di delineare un valore culturale (parola che oggi si usa raramente) a quel che facciamo in
classe. Non vi è utilità alcuna nella matematica che provo ad insegnarvi, solo il tentativo, forse
grossolano, di mostrarvi un discorso che possa risultare bello. Proviamo.

Siamo partiti dal concetto di numero. Cos'è un numero? Ve l'ho chiesto il primo giorno di scuola,
ricordi? Qualcuno mi faccia vedere il numero 3. Una foresta di mani alzate con tre dita. Quel
giorno ho insistito sul fatto che mi avete fatto vedere tre dita, non il numero tre. Dunque, cos'è
un numero? Possiamo formalizzare il concetto di numero? Gran parte della matematica più recente 
(non tutta) segue dal tentativo di rispondere a questa semplice domanda.

In classe abbiamo visto due approcci al problema. Partiamo dal primo, la formalizzazione assiomatica
di Peano. Ricorderai che in questo caso abbiamo essenzialmente tre ingredienti:

 - alcuni enti primitivi, ovvero concetti che non sono specificabili ulteriormente; 
     per Peano gli enti primitivi sono lo  zero, indicato con il simbolo $0$, ed il successore
     di un numero $a$, indicato con il simbolo $S(a)$. Nota come non abbiamo ancora definito cosa
     sia un numero, per ora questi sono solo simboli.
 - Alcuni assiomi, ovvero proposizioni sugli enti primitivi che si considerano vere senza alcuna
     dimostrazione.
 - Teoremi, ovvero proposizioni il cui valore di verità è garantito da una dimostrazione che può
     basarsi sugli assiomi o su altri teoremi già dimostrati.

Si viene così a creare una struttura che ha come suo fondamento gli assiomi e su cui poggiano tutti
i teoremi (le *verità matematiche*) successive. Chi sceglie gli assiomi? Perché? Questa domanda non
è semplice, la risposta la vedremo durante tutto il corso dei cinque anni che ci aspettano insieme.
Per ora accettiamo il fatto che qualcuno proponga degli assiomi (nel nostro caso Peano) e vediamo
che teoria ne viene fuori. Se la teoria avrà una qualche forma di interesse per noi, terremo gli
assiomi, altrimenti siamo sempre liberi di sceglierne altri. Bene, Peano sceglie i seguenti assiomi
per definire l'insieme dei numeri naturali $\mathbb{N}$:


1. $ 0 \in \mathbb{N} $
2. se $a \in \mathbb{N}$ allora $S(a) \in \mathbb{N} $
3. se $a, b \in \mathbb{N}$ tali che $a\neq b$ allora $S(a)\neq S(b)$
4. non esiste alcun $a \in \mathbb{N}$ tale che $0 = S(a)$
5. se $A\subseteq \mathbb{N}$ tale che $0\in A$ e $(a\in A \Rightarrow S(a) \in A)$ allora $A =
   \mathbb{N}$ (*assioma di induzione*)

Secondo Peano questi assiomi definisicono l'insieme $\mathbb{N}$ dei numeri naturali. Analizziamoli
brevemente

1. Il primo assioma mi assicura che almeno un numero ci sia, lo zero. Quindi l'insieme dei numeri
   non è vuoto. Un assioma importante quindi.
2. Il secondo assioma mi dice poi che se ho trovato un numero, anche il suo successore è un numero.
   Qui vi è l'idea cardine di Peano, il successore di un numero è un numero. Sembra che questo porti
   immediatamente alla seguente idea. Si parte da zero, che è un numero per l'assioma 1; si
   considera poi il successore di zero, per l'assioma 2 anche questo è un numero. A questo punto,
   sempre per l'assioma due, possiamo prendere il successore del successore di zero e trovare un
   terzo numero. Si potrebbe pensare di poter andare avanti in modo indefinito e definire così
   infiniti numeri, uno successivo all'altro. Ma i primi due assiomi non bastano; pensa per esempio
   a tre numeri, lo zero ed altri due che chiamerò per convenzione $a$ e $b$. Posso immaginare la
   seguente struttura

   $$ S(0) = a$$
   
   $$ S(a) = b$$
   
   $$ S(b) = a$$

   In un certo senso si parte da zero, il successore è $a$, il successore è $b$, il successore è di
   nuovo $a$. A questo punto si finisce in un circolo vizioso in cui si oscilla tra $a$ e $b$. In
   definitiva ci sono solo tre numeri, un po' pochi. Questa struttura è del tutto possibile con i
   soli due assiomi. Ecco perché viene messo il terzo.
3. Con questo assioma due numeri diversi devono avere successori diversi. A questo punto il brutto
   circolo trovato al punto precedente non è possibile perché viola il terzo assioma: infatti $0$ e
   $b$ sono diversi, eppure il loro successore è $a$, ovvero lo stesso. Sembra che siamo salvi, con
   questo terzo assioma non si può tornare indietro e definire così dei numeri che non siano
   infiniti. Sicura? Cosa ne dici di questa nuova struttura?

   $$ S(0) = a $$
   
   $$ S(a) = b $$
   
   $$ S(b) = 0 $$

   adesso i tre numeri hanno successori diversi, 0 ha $a$, a ha $b$ e b ha $0$. Ci ritroviamo nello
   stesso problema di prima, i primi tre assiomi di Peano sono compatibili con una struttura di
   numeri che ci sembra troppo piccola, solo tre miseri numeri. Ecco perché viene messo il quarto
   assioma.
4. Con il quarto assioma si elimina il problema precedente in quanto lo zero non può essere il
   successore di nessun numero. Come dire, la sequenza di successori parte da zero e non può più
   tornarci.
5. Il quinto assioma (induzione) è molto importante, ma ne parleremo più avanti, per ora non serve 
   che approfondiamo il discorso. 
   
Bene, i cinque assiomi di Peano definiscono l'insieme dei numeri
naturali. Possiamo a questo punto fare un esempio di teorema, ovvero di proposizione vera
dimostrabile a partire dagli assiomi. Ti propongo il seguente esercizio: usando solo gli assiomi di
Peano dimostra che l'insieme $\mathbb{N}$ è infinito (lo so, lo so, non abbiamo ancora visto insieme
il concetto formale di infinito, ma puoi per ora usare la tua idea intuitiva di insieme infinito
come di insieme in cui la procedura di elencare i suoi elementi non termina mai; prometto che
torneremo presto sull'argomento infinito e lo sistemeremo un po' meglio).

A questo punto proviamo a rispondere: cos'è il numero 3? Usando una convenzione decidiamo di
chiamare con $3$ l'elemento di $\mathbb{N}$ dato da $S(S(S(0)))$. 

Insomma, tutta questa fatica per questo? Non era evidente che il numero tre fosse il successore del
successore del successore di $0$? Intanto qui non stiamo più parlando di dita, sassolini, penne,
tacchini etc etc, ma di enti matematici; un bel salto. Inoltre adesso abbiamo una teoria assiomatica
dei numeri (diciamo una bozza di teoria assiomatica), possiamo dimostrare teoremi sui numeri, cosa
che prima non avremmo potuto fare. Che poi questi numeri di cui parla Peano siano gli stessi numeri
di cui parliamo noi tutti i giorni in un discorso informale, questo è tutto da verificare (ma è
così). Per esempio possiamo dare una definizione formale di somma $+$ e dimostrare che $2+2 = 4$ o
che il successore di $a$ è $a+1$; tutto questo senza usare le dita (o i tacchini). 
Non trovi che questa possibilità della mente umana sia meravigliosa? 

Però lo vediamo un'altra volta,
mi rendo conto di aver scritto molto di più di quel che avrei voluto e dovuto, la lettera è
diventata lunghissima, è molto tardi ed Anna Wislawa continua a svegliarsi e a chiamarmi. Mi
riprometto di scriverti il seguito in un'altra lettera, intanto prova a vedere se questo primo
discorso che abbiamo impostato qui riesce a dissipare qualcuno dei dubbi che avevi in classe. Se
così non è o, peggio, se questa lettera ti ha confusa ancor di più, ti prego di scusarmi, è un
tentativo che volevo fare per cercare di aiutarti.

Ci vediamo in classe. Un caro saluto, prof.
 
