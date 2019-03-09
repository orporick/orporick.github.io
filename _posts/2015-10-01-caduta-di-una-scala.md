---
layout: post
title: "Caduta di una scala"
tags: [matematica]
categories: Lettere
---

Caro Davide

come promesso ti scrivo poche righe sul problema di cui ti parlavo
qualche giorno fa. È un quesito classico con una soluzione anche
abbastanza semplice, ma provandolo in alcune classi quarte e quinte
ho avuto diverse sorprese. In particolare sembra che la risposta data
senza pensare o fare alcun tipo di ragionamento formale porti
regolarmente ad una soluzione intuitiva sbagliata. Il problema è il
seguente: una scala di lunghezza fissata $L$ appoggiata ad una parete
con un angolo iniziale $\theta$ con il pavimento (non è importante il
valore iniziale dell'angolo) comincia a scivolare, mantenendo però i
punti di contatto con la parete e ovviamente con il pavimento; che
traiettoria segue il punto medio $M$ della scala?

![My helpful screenshot](/images/scala1.png){: .center-image }

La prima risposta intuitiva di molti ragazzi e ragazze è "un ramo di
iperbole", tipicamente accompagnata da un gesto della mano che mostra
chiaramente una traiettoria con concavità rivolta verso destra (nella
figura qui sopra). Qualcuno azzarda un arco di parabola, qualcuno una
retta (o meglio un segmento). Tutte queste ipotesi sono
sbagliate. Prima di dare la dimostrazione formale, è possibile fare un
piccolo ragionamento. Immagina la scala in tre posizioni particolari,
ovvero verticale ($\theta = 90^\circ$), orizzontale ($\theta =
0^\circ$) e inclinata con $\theta=45^\circ$, come in figura:

![My helpful screenshot](/images/scala2.png){: .center-image }

È facile verificare (riesci?) che in tutti e tre i casi il punto medio
$M$ della scala si trova ad una distanza pari a $L/2$ dall'origine
degli assi (il punto di incontro tra pavimento e parete
verticale). Questo esclude a priori che la traiettoria possa essere un
segmento o un arco di iperbole con concavità rivolta verso destra e
sicuramente suggerisce la risposta corretta: la traiettoria è un arco
di circonferenza centrata nel punto di incontro tra parete verticale e
pavimento. Per vederlo analiticamente basta considerare le coordinate
dei punti di contatto della scala con la parete e con il pavimento che
sono, rispettivamente

$$ (0,L\sin\theta)$$

$$ (L\cos\theta, 0)$$

Dunque le coordinate del punto $M$ sono

$$ M (\frac{L}{2}\cos\theta,\frac{L}{2}\sin\theta) $$

Elevando queste coordinate al quadrato e sommandole si ottiene

$$ x_M^2 + y_M^2 = \frac{L^2}{4}(\cos^2\theta + \sin^2\theta) $$

che per note proprietà goniometriche fornisce

$$ x_M^2 + y_M^2 = \frac{L^2}{4} $$

Si vede quindi che le coordinate di $M$ soddisfano l'equazione di una
circonferenza centrata nell'origine di raggio $\frac{L}{2}$.

Ti lascio come esercizio la generalizzazione di questo problema: se
anziché il punto $M$ si cerca la traiettoria di un qualsiasi altro
punto della scala, questa sarà un arco di ellisse.

Buona dimostrazione. 
