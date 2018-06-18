---
layout: post
title: "Seconda lettera del conforto"
published: true
tags: [lettera, matematica]
---

Carissima A.

rispondo volentieri alla tua nuova lettera di aiuto; non ti devi preoccupare, 
la matematica richiede pazienza e tempi lunghi.

Inizio con la prima domanda, trovare il volume del solido generato dalla rotazione attorno alla
retta $x = 2$ della parte di piano delmitata dalla parabola $y^2 = 8x $ e dalla retta stessa. Intanto
notiamo che la retta è verticale e la parabola ha asse orizzontale, se riflettiamo il tutto rispetto
alla bisettrice del primo e terzo quadrante non cambia nulla. Possiamo quindi sostituire il problema 
con quello ottenuto scambiando tra loro $x$ e $y$, ovvero la retta diventa $y=2$ e la parabola $x^2
= 8y$ che possiamo scrivere anche come $ y = \frac{1}{8}x^2$. Il volume inoltre non cambia se
trasliamo tutto il piano di $2$ unità verso il basso in modo da portare la retta $y=2$ a coincidere
con l'asse delle $x$; in questo modo abbiamo il classico volume di rotazione di un solido rispetto
all'asse delle $x$, calcolo che sappiamo fare

$$ V = \pi \int_a^b f^2(x) {\rm d}x $$

La parabola traslata risulta

$$ y = \frac{1}{8}x^2 - 2 $$

Ci servono infine i punti di intersezione della parabola con l'asse, ovvero dobbiamo risolvere

$$ \frac{1}{8}x^2 - 2 = 0$$

da cui

$$ x^2 = 16$$

le cui soluzioni sono $\pm 4$.

Il volume del solido di rotazione sarà allora dato dall'integrale

$$ V = \pi \int_{-4}^{4} \left(\frac{1}{8}x^2 - 2\right)^2{\rm d}x $$

integrale polinomiale che ti lascio come esercizio (vista la simmetria rispetto all'asse $y$ si può
anche calcolare l'integrale da $0$ a $4$ e moltiplicare il risultato per $2$).

La seconda domanda è più complessa e quindi più interessante, mi chiedi di riassumere in poche
parole il principio di induzione. Io ne parlo sempre in prima quando faccio gli assiomi di Peano, ma
non essendo tu una mia studentessa non posso sapere cosa avete fatto in classe, quindi provo a darti
il principio senza discuterne le basi (peccato).

L'idea è semplice, supponiamo di voler dimostrare che una certa proposizione sui numeri naturali sia
vera per ogni numero; per esempio supponi che io voglia dimostrare che la somma dei primi $n$
naturali è data dalla formula

$$ \frac{n(n+1)}{2}$$

Posso provare con alcuni valori di $n$ ed effettivamente verificare che la formula funziona: per
esempio la somma dei primi due numeri naturali ($n=2$) è pari a $2+1 = 3$ e la formula sembra
funzionare. Proviamo un caso più complicato, la somma dei primi cinque ($n=5$) numeri naturali
dovrebbe essere $5+4+3+2+1 = 15$; usando la formula scritta sopra otteniamo

$$ \frac{5(5+1)}{2} = \frac{5\cdot6}{2} = 15 $$

e di nuovo sembra funzionare. Risulta però chiaro che questo modo di procedere non può portarci ad
una dimostrazione valida per ogni numero naturale, dovremmo provarla per infiniti casi e non ci
basterebbero i giorni mortali che ci sono stati assegnati. Ecco che possiamo usare la dimostrazione
per induzione basata, appunto, sul principio di induzione. Per dimostrare la validità di una
affermazione sui numeri naturali servono due passi

1. l'affermazione deve essere vera per un valore di partenza, normalmente $0$ o $1$ (ma potrebbe
   essere anche più grande);
2. dall'ipotesi che l'affermazione sia vera per $n$ deve seguire che è vera per $n+1$ (questo si
   chiama passo induttivo)

La dimostrazione per induzione a volte confonde un po' perché sembra quasi utilizzare l'affermazione
che vogliamo dimostrare nelle ipotesi, ma se ti fermi un attimo a ragionare non è così: noi non
stiamo ipotizzando che l'affermazione da dimostrare sia vera per ogni $n$ (altrimenti sarebbe un
circolo vizioso), stiamo usando il fatto che se ipotizziamo che sia vera per $n$ (qualsiasi) allora
ne discende che è vera per $n+1$. Provo a fare un esempio con la formula della somma dei primi $n$
numeri naturali vista sopra. Ecco i due passi:

1. la formula è chiaramente vera per $n=1$; la somma del primo numero naturale contiene solo $1$,
   risultato ottenuto dalla formula;
2. ipotizziamo che la formula sia vera per $n$, ovvero che la somma dei primi $n$ numeri naturali
   sia data dalla formula vista sopra. Dimostro ora che allora è vera anche per $n+1$; infatti per
   $n+1$ otteniamo (con alcune semplici manipolazioni algebriche)

   $$ \frac{(n+1)(n+2)}{2} = \frac{n(n+1) + 2(n+1)}{2} = \frac{n(n+1)}{2} + (n+1) $$

   il primo termine dopo l'uguale è, per ipotesi, la formula per $n$ ovvero la somma dei primi $n$
   numeri naturali; aggiungendo il secondo termine $n+1$ ottengo quindi la somma dei primi $n+1$
   numeri naturali e quindi il passaggio di induzione risulta soddisfatto.

Con la dimostrazione per induzione siamo quindi in grado di dimostrare senza alcuna ombra di dubbio
che una proposizione è vera in una infinità di casi (per tutti i numeri naturali). Se non è poesia
questa non so cosa lo sia.

Un caro saluto, prof.

