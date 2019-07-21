---
layout: post
title: "Lettera alla rovescia"
published: true
tags: [matematica]
categories: Lettere
---

Carissimo P,
spero tu stia bene in questa calda e forzata pausa estiva, la tua ultima lettera mi ha fatto piacere e mi ha
ricordato di un discorso lasciato in sospeso; nell'assordante rumore di questo mondo, come
ritagliarsi piccoli spazi di stupore? Non ho ricette in tal senso e gli avvenimenti recenti di questo nostro
paese mi spingono sempre più verso un esilio volontario. Però, come spesso vi dico in classe, la
matematica può darci qualche esempio; semplice e banale quanto vuoi, ma pur sempre un'indicazione. 

Se ricordi l'ultima volta abbiamo parlato di equazioni
e di tecniche risolutive e allora ti dissi che alle volte può essere più interessante (e avvincente)
procedere alla rovescia, anziché prendere un'equazione e trovare una soluzione, prendere una
soluzione e determinarne una equazione. Provo a mostrarti un esempio; supponiamo di voler trovare il
valore di $\sqrt{2}$ che, come ricorderai, è un numero irrazionale. Ovviamente ci sono molti modi di
trovarne un valore approssimato, basta ricordare che è quel numero che elevato al quadrato diventa
$2$. Può essere però interessante una via diversa, cerchiamo un'equazione la cui soluzione ci porti
a $\sqrt{2}$. Per farlo definisco $x = \sqrt{2} + 1$ e vedo cosa succede elevando $x$ al quadrato;
usando le usuali tecniche algebriche si vede che

$$ x^2 = 2 + 1 + 2\sqrt{2}$$

Ma siccome $\sqrt{2} = x - 1$, si ottiene

$$ x^2 = 3 + 2x - 2 $$

e quindi

$$ x^2 = 2x + 1$$

Se ora dividiamo per $x$ (che sicuramente non può essere pari a $0$, sapresti dire perché?)
otteniamo questa
bellissima equazione

$$ x = 2 + \frac{1}{x} $$

La particolarità di questa equazione (in questa forma) è che definisce $x$ in termini di $x$ ed è
dunque ricorsiva. Se adesso nel membro di destra sostituiamo al posto di $x$ tutta l'espressione otteniamo

$$ x = 2+\dfrac{1}{2+\dfrac{1}{x}} $$

Iterando infinite volte e ricordando che, per definizione iniziale, $x-1$ è
$\sqrt{2}$ si ottiene il seguente risultato.

$$ \sqrt{2} = 1+\dfrac{1}{2+\dfrac{1}{2+\dfrac{1}{2+\dfrac{1}{2+\cdots}}}} $$

Riconoscerai una frazione continua, questi particolari ed interessanti oggetti matematici di cui vi
ho parlato tempo fa a lezione. 

Riassumendo, a partire dalla soluzione $\sqrt{2}$ abbiamo trovato un'equazione, viaggiando alla
rovescia rispetto a quanto siamo abituati. Questo ci ha permesso non solo di vedere la matematica da
un'angolazione nuova e diversa, ma ci ha fornito un risultato elegante, un particolare numero
irrazionale sotto forma di frazione continua infinita. Concludo notando che la soluzione, oltre al
valore teorico, ha anche un aspetto pratico, permette infatti di approssimare molto bene il valore
di $\sqrt{2}$. Per esempio se mi fermo al livello "zero" ottengo per $\sqrt{2}$ il valore
approssimato (piuttosto malamente) pari a $1$. Se vado avanti di un livello ottengo

$$ \sqrt{2} = 1+\dfrac{1}{2} = 1.5 $$

Se vado avanti ancora ottengo

$$ \sqrt{2} = 1+\dfrac{1}{2+\dfrac{1}{2}} = 1.4  $$

ed ancora

$$ \sqrt{2} = 1+\dfrac{1}{2+\dfrac{1}{2+\dfrac{1}{2}}} = 1.41666666667 $$


Come piccolo esercizio ti lascio da scrivere un programma che fornisca,
tramite lo sviluppo in frazione continua visto qui, un valore approssimato di $\sqrt{2}$ sempre
migliore. In J per esempio con questa stringa si ottiene il valore fino alla decima frazione

{% highlight c %}
{% raw %}
(+%) / 1,10 $ 2
{% endraw %}
{% endhighlight %}

Si aprirebbe qui un interessante discorso sui numeri irrazionali e le loro approssimazioni
razionali, ma comincia ad essere tardi. Rimane un suggerimento, non per forza legato alla
matematica: quando è normale per tutti prendere una strada, prova ogni tanto ad andare alla rovescia rispetto agli altri.
Gioverà alla costruzione del tuo carattere ed alla capacità che avrai di scegliere strade diverse,
diversi panorami.

Un caro saluto, prof.

P.S.
L'equazione 

$$ x = 2 + \frac{1}{x} $$

che abbiamo ottenuto può essere anche interpretata geometricamente come l'intersezione tra la retta
bisettrice del primo e terzo quadrante $y=x$ e la curva omografica $y = 2 + \frac{1}{x}$ che, come
ricorderai, altri non è che un'iperbole equilatera riferita ai propri asintoti e traslata. Questo
tipo di intersezioni possono cercarsi con la tecnica del punto fisso che ho accennato in classe,
ricordami di mostrarti come la prossima volta che ci vediamo. O vuoi provare a ricavare per conto
tuo? In ogni caso una bella traduzione geometrica del problema algebrico da cui siamo partiti.
