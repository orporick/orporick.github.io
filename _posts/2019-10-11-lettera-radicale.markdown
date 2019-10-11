---
layout: post
title: "Lettera radicale"
published: true
tags: matematica
categories: Lettere
---

Cara V. Spero che qualcuno abbia raccolto la tua lettera, spero tu stia meglio,
sono felice di averti in classe. Mi hai chiesto, con voce bassa, del "trucco"
che ho spiegato ieri in classe, approfitto di questo piccolo spazio 
di solitudine per riprovarci. L'idea risale al '500 e a Rafael Bombelli ed è particolarmente
interessante. Immagina di voler calcolare a mano la radice quadrata di un numero
naturale senza avere a disposizione una calcolatrice; se il numero è un quadrato la cosa
è banale

$$ \sqrt{a^2} = a $$

Immaginiamo però di dover fare il calcolo per un numero non quadrato il cui
valore può essere sempre scritto come $a^2 + r$ con $r$ positivo (praticamente
$a^2$ è il più grande numero quadrato più piccolo del numero che vogliamo
calcolare); vogliamo dunque calcolare

$$ \sqrt{a^2 + r}$$

Il numero cercato[^1] sarà maggiore di $a$ e quindi possiamo scrivere

$$ \sqrt{a^2+r} = a + x $$

con $x$ positivo. Per trovare $x$ eleviamo al quadrato la relazione scritta
sopra

$$ a^2 + r = a^2 + x^2 + 2ax $$

(ho usato il quadrato del binomio che sicuramente ricorderai). Si può
semplificare un $a^2$

$$ r = x^2 + 2ax$$

e dividendo per $x$ (che come abbiamo notato prima deve essere positivo e quindi
diverso da zero) si ottiene

$$ \frac{r}{x} = x + 2a $$

Facciamo infine il reciproco della relazione così ottenuta e moltiplichiamo per
$r$ ottenendo

$$ x = \frac{r}{2a + x} $$

Interessante, abbiamo trovato $x$, ma in funzione di se stesso; abbiamo già
parlato di frazioni continue e di alogoi (numeri innominabili), ricorderai che
il trucco a questo punto è sostituire nella $x$ a destra tutta l'espressione
(stiamo ovviamente violando l'ottava disposizione di Euclide, in questo caso una 
parte equivale al tutto) e siccome questa cosa si ripete infinite volte,
otteniamo una frazione di frazione di frazione senza fine

$$ x = \dfrac{r}{2a + \dfrac{r}{2a + \dfrac{r}{2a + \ldots}}} $$

Dunque la nostra radice quadrata diventa, mettendo tutto insieme,

$$\sqrt{a^2 + r} = a + \dfrac{r}{2a + \dfrac{r}{2a + \dfrac{r}{2a + \ldots}}} $$

Questo risultato ci dice due cose importanti: primo, la radice quadrata di un
numero intero non quadrato è un numero che non potremo mai conoscere esattamente
richiedendo infinite frazioni (alogoi, appunto). Secondo, abbiamo un metodo per
calcolare il numero approssimativamente, basta fermarsi ad un qualche livello
delle frazioni; per esempio supponi di voler calcolare la radice di $7$ che
possiamo scrivere come $2^2+3$; dunque $a=2$ e $r=3$ e, per quanto visto, 
otteniamo le seguenti approssimazioni consecutive

$$ 2 $$

$$ 2 + \frac{3}{4} = \frac{11}{4} = 2,75$$

$$ 2 + \dfrac{3}{4+\dfrac{3}{4}} = \frac{50}{19} \simeq 2,6316$$

$$ 2 + \dfrac{3}{4+\dfrac{3}{4+\dfrac{3}{4}}} = \frac{233}{88} \simeq 2,6477$$

$$ 2 + \dfrac{3}{4+\dfrac{3}{4+\dfrac{3}{4+\dfrac{3}{4}}}} = \frac{1082}{409} \simeq 2,6455$$

L'ultimo valore è "corretto" fino alla terza cifra decimale. Ovviamente
andando avanti si può aumentare la precisione del risultato, anche se, come
ricordato più volte, il risultato esatto rimane inconoscibile. 

Spero che questa spiegazione meno frettolosa di quella svolta in classe ti sia
utile, sono sicuro che esplorerai per conto tuo questo piccolo pezzetto di
infinito che ci è concesso.

Un caro saluto, prof.

[^1]: Questo esempio mi permette un piccolo inciso su un errore che trovo molto comune (e tutto sommato alle volte comprensibile): spesso pensate, sulla falsa riga della somma e del prodotto, che qualsiasi operazione sia distribuibile su qualsiasi altra operazione; per esempio è vero che $a(b+c)$ è $ab + bc$, si può distribuire appunto il prodotto sulla somma. Ma nel caso della radice non si può distribuire sulla somma, dunque $\sqrt{a+b} \neq \sqrt{a}+\sqrt{b}$. Ripeto, è un errore che capita per similitudine con operazioni più semplici, basta stare attenti.

