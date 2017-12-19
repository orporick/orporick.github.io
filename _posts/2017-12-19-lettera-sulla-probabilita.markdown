---
layout: post
title: "Lettera sulla probabilità"
published: true
tags: [matematica, lettera]
---


Carissima Rebecca

mi ha fatto piacere ricevere tue notizie da Vienna, la tua lettera, come sempre, mi ha ricordato con
parole gentili il tempo passato in classe con tutti voi. Da tempo avrei voluto rispondere, se non
l'ho fatto prima è per quel flusso costante che voi chiamate tempo e che per me è sempre più un caos
indistinto di impegni e confusione. Sono felice che i tuoi studi proseguano bene, si legge la
meraviglia nelle righe che mi hai mandato. Lo stupore, come deve essere. In questi giorni mi è
capitato di ripensare alle nostre discussioni sulla probabilità, i dubbi, le domande, i problemi. Ricordi quanto ne abbiamo parlato
in quarta, con te ed il resto della classe?  Ho sempre trovato interessante la teoria della
probabilità per vari motivi, non ultimo il fatto che è forse l'unica parte di matematica "moderna"
(parliamo del '900) inserita nei programmi ministeriali. Ma soprattutto per le implicazioni e le
discussioni che i problemi di probabilità invariabilmente generano. Fammi ricordare due aspetti che
ritengo interessanti. Il primo riguarda il fatto che quando parliamo di probabilità di un evento
dobbiamo includere la nostra conoscenza del sistema, ovvero le informazioni di cui siamo a
disposizione (o non siamo a disposizione) influenzano il calcolo delle probabilità. Un esempio
banale, ma paradigmatico: metto un gesso in una delle mie mani e poi ti mostro i pugni chiusi
chiedendoti qual è la probabilità che il gesso sia nella mano sinistra. Ovviamente sarà $1/2$ (il
cinquanta per cento). Se io però ti faccio vedere il palmo vuoto della mia mano destra, questa
probabilità diventa improvvisamente pari a $1$ (la certezza che il gesso sia nalle mano sinistra
chiusa). Dunque aggiungendo informazione, cambio la probabilità. Nota inoltre che io potrei fare lo
stesso gioco a due persone diverse, ad una mostrare il palmo vuoto della destra ed ad un'altra no;
in tal caso le due persone farebbero calcoli con probabilità diverse, a seconda delle conoscenza che
hanno del sistema. Questo aspetto mi ha sempre affascinato perché ci coinvolge, come esseri
senzienti, direttamente nella struttura matematica di base. Il nostro grado di conoscenza altera i
valori di probabilità degli eventi. Il secondo motivo di interesse è che le probabilità, per loro
natura e definizione, non dicono nulla. Dire che il lancio di una moneta darà come esito testa al
cinquanta per cento non mi dice nulla su quello che succederà nel singolo lancio. E nemmeno sull'esito di due
lanci, non mi aspetto una testa e una croce (magari poi succede, ma non è detto). 
Potrei tranquillamente lanciare $100$ volte la moneta ed ottenere sempre croce, anche se è poco
probabile. Il punto è proprio questo: la teoria mi dice che è poco probabile, non che è impossibile.
Dunque è una matematica molto diversa da quella a cui siamo abituati ($2+2$ è uguale a $4$ sempre,
per esempio).

Insomma, come sai è una parte che mi piace svolgere, mostrare, discutere in classe. Una recente chiaccherata con alcuni colleghi ha portato
alla mia attenzione il vecchio paradosso di Monty-Hall in una forma interessante; vorrei parlartene
perché sono sicuro ricorderai le accese discussioni che abbiamo avuto in classe su questo problema,
i vostri dubbi, i miei tentativi di spiegarvi, la meraviglia finale nel vedere un risultato a cui
non si crede (per usare le parole di Cantor).

Ricorderai gli estremi del paradosso (che, come tutti i paradossi, non ha nulla di strano, è solo un
veicolo di approfondimento e discussione), ma nel dubbio te li riscrivo. 

Immagina il seguente gioco: un giocatore viene posto davanti a tre porte chiuse e sa che dietro una
di queste c'è una macchina e dietro le altre ci sono due capre. Ovviamente non sa a priori quale
sia la porta con la macchina e quali quelle con le capre e deve fare una scelta a scatola chiusa.
Una volta che ha scelto la porta, un presentatore, che conosce perfettamente e senza dubbi quale
porta contiene la macchina, apre una delle due porte non scelte dal giocatore e mostra una capra
(siccome le capre sono due il presentatore può sempre aprire una porta che contiene una capra). A
questo punto il giocatore viene posto davanti a questa decisione: può mantenere la porta che ha scelto
inizialmente oppure può cambiare con l'altra porta rimasta chiusa (ovviamente quella aperta dal
presentatore con la capra non viene nemmeno proposta). Cosa conviene fare? Se ricordi quando vi
parlai in classe di questo problema tutti voi (come molte persone) avete risposto che siccome ora la
situazione presenta due porte, una con una macchina ed una con una capra, la probabilità di
indovinare la porta con la macchina è esattamente pari ad 1/2 (cinquanta per cento), quindi è
ininfluente la scelta di mantenere la porta o di cambiarla. In realtà, come ben sai, le cose non
stanno così. Ricordiamo insieme il calcolo: per esplicitare meglio la situazione immagina che il
giocatore abbia scelto la porta $1$ e che il presentatore abbia aperto la porta $3$ mostrando una
capra. Qual è la probabilità che la macchina sia dietro la porta $2$? Definiamo i seguenti due
eventi

  * $A$ = "La macchina è dietro la porta $2$"
  * $B$ = "Il presentatore apre la porta $3$ con dietro una capra"
 
Indichiamo infine con $P(E)$ la probabilità che un certo evento $E$ avvenga e con $P(E|F)$ la
cosiddetta probabilità condizionata, ovvero la probabilità che un certo evento $E$ avvenga sapendo
che è avvenuto l'evento $F$.

Allora possiamo rispondere alla nostra domanda calcolando

$$ P(A|B)$$

Per fare questo calcolo usiamo il noto teorema di Bayes (o meglio una sua versione semplificata), ricordi?

$$ P(A|B) = \frac{P(B|A)\cdot P(A)}{P(B)} $$

Dunque, 

  * $P(B|A) = 1 $ in quanto la probabilità che il presentatore apra la porta $3$ con dietro la capra
      sapendo che la macchina è dietro la porta $2$ è $1$ non potendo lui aprire la porta $2$.
  * $P(A) = 1/3 $ in quanto la macchina si trova casualmente dietro una delle tre porte con ugual
      probabilità
  * $P(B) = 1/2 $ in quanto il presentatore, in assenza di ulteriori conoscenze, apre una delle due
      porte con ugual probabilità

Mettendo insieme questi valori scopriamo che

$$ P(A|B) = 2/3 $$

Dunque la probabilità che la macchina sia dietro la seconda porta, avendo visto il presentatore
aprire la terza porta con una capra, è pari a $2/3$. La probabilità che la macchina allora sia
dietro la prima porta, quella scelta inizialmente, è $1/3$ (ricorda che la normalizzazione richiede
che la somma delle probabilità faccia $1$). Dunque cambiare porta raddoppia le probabilità di
successo.

Questo era il Monty-Hall classico, ora la variante interessante che mi hanno sottoposto alcuni
colleghi qualche giorno fa in sala insegnanti. Supponi che ad aprire la porta con
la capra non sia il presentatore, ma una folata di vento. Ovvero, supponi che dopo aver scelto la
prima porta (che viene in qualche modo bloccata) una folata di vento apra la porta tre e da essa
spunti una capra. A prima vista potresti pensare che non cambi nulla dal discorso precedente, ma in
realtà non è così. Che le due situazioni non siano equivalenti è chiaro dalla seguente
considerazione: immagina di ripetere il gioco molte volte, nel caso in cui la porta venga aperta dal
presentatore tu vedrai sempre dietro una capra (lui sa dove si trova la macchina e non aprirà mai
quella porta), nel caso che la porta venga aperta casualmente dal vento, a volte potresti vedere la
macchina (e quindi automaticamente avresti perso). Ma facciamo il calcolo. Definiamo adesso


  * $A$ = "La macchina è dietro la porta $2$"
  * $B$ = "Il vento apre la porta $3$ e dietro c'è una capra"

Nota come l'evento $B$ adesso sia composto dall'evento "il vento apre la porta $3$ (casualmente)" e
l'evento "dietro la porta $3$  c'è una capra". Ricorderai che per eventi composti indipendenti come
questi si moltiplicano le probabilità. Usiamo sempre Bayes considerando che

  * $P(B|A) = 1/2\cdot 1 = 1/2 $ in quanto la probabilità che il vento apra la porta $3$ è pari a $1/2$ e la probabilità che dietro ci sia la 
      capra sapendo che la macchina è dietro la porta $2$ è $1$.
  * $P(A) = 1/3 $ in quanto la macchina si trova casualmente dietro una delle tre porte con ugual
      probabilità
  * $P(B) = 1/2\cdot 2/3 = 1/3 $ in quanto il vento apre una delle due porte con ugual probabilità e, non
      sapendo altro, la probabilità che dietro ci sia una capra è di $2/3$ (due capre su tre porte).

Mettendo insieme otteniamo questa volta

$$ P(A|B) = 1/2 $$

Questa volta, con il vento, la probabilità di vincere cambiando porta è uguale alla probabilità di
vincere non cambiando porta, quindi non vi è una strategia migliore, possiamo decidere di cambiare o
non cambiare.

Interessante questa variante: se io vedo la porta con la capra che si apre per una scelta voluta
(il presentatore), allora ho una strategia, se invece la porta con la capra si apre casualmente (il
vento), la
strategia è diversa. Sapere che un certo evento è voluto o casuale cambia il calcolo; considerazione
tutto sommato non molto paradossale ed abbastanza intuitiva.

Bene, sono arrivato in fondo, mi rendo conto di aver scritto più di quello che avrei dovuto,
perdonerai l'entusiasmo del tuo vecchio professore per dipanare una questione tutto sommato
marginale. Salutami Vienna e se puoi visita per me la lapide di Ludwig Boltzmann, figura a cui sono
molto legato.

Con affettuoso ricordo, tuo (ex)prof.

