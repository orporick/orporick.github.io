---
layout: post
title: "Un integrale per la 5G"
published: true
tags: [imperfezioni, matematica]
---

Doveva succedere anche con voi, era inevitabile. Credo di aver fatto un errore giovedi nell'ultimo
integrale svolto alla lavagna. A dire la verità non sono sicurissimo perché il suono della
campanella ha interrotto la lezione e mi sono perso gli ultimi passaggi nella confusione generale,
ma credo di aver sbagliato da qualche parte. In ogni caso lo metto in [questo piccolo museo degli
errori](http://orporick.github.io/imperfezioni) che sto costruendo e merita dunque un post in cui ve lo rifaccio, questa volta in modo
corretto; un modo come un altro per chiedere scusa (se solo gli errori di un uomo si limitassero 
ad un integrale sbagliato).

L'integrale fatto in classe è il seguente


$$
	\int \frac{1}{\sqrt{(x^2 - 9)^3}}\, {\rm d}x
$$

Iniziamo a riorganizzarlo raccogliendo un $x^2$ dentro il cubo e portandolo fuori

$$
	\int \frac{1}{\sqrt{x^6\left(1 - \frac{9}{x^2}\right)^3}}\, {\rm d}x
$$

$$
	\int \frac{1}{x^3\sqrt{\left(1 - \left(\frac{3}{x}\right)^2\right)^3}}\, {\rm d}x
$$

A questo punto facciamo la sostituzione (che vi ho proposto in classe)

$$
	\frac{3}{x} = \cos t
$$

da cui, per il differenziale,

$$ 
	-\frac{3}{x^2}\, {\rm d}x = - \sin t\, {\rm d}t
$$

che riscriviamo come

$$
	\frac{ {\rm d} x}{x^2} = \frac{\sin t}{3}\, {\rm d} t
$$

Sostituendo l'integrale diventa

$$
	\int \frac{\cos t}{\sqrt{\left(1 - \cos^2 t\right)^3}} \frac{\sin t}{9}\, {\rm d}t
$$

Ricordando che $1-\cos^2 t = \sin^2 t$ si ottiene

$$
	\frac{1}{9}\int \frac{\cos t \sin t}{\sin^3 t} \, {\rm d}t
$$

e semplificando

$$
	\frac{1}{9}\int \frac{\cos t}{\sin^2 t} \, {\rm d}t
$$

Questo integrale è in una forma elementare per funzione composta del tipo

$$
	\int f^\alpha (x)\cdot D(f(x))\, {\rm d}x = \frac{f^{\alpha +1}(x)}{\alpha +1} + c 
$$

infatti si può riscrivere come 

$$
	\frac{1}{9} \int \sin^{-2} t \cdot D(\sin t)\, {\rm d} x
$$

Integrando otteniamo dunque

$$ -\frac{1}{9\sin t} + c $$

e quindi

$$ -\frac{1}{9\sqrt{1-\cos^2 t}} + c $$

Tornando indietro alla variabile $x$ si ottiene

$$ -\frac{1}{9\sqrt{1-\frac{9}{x^2}}} + c $$
 
e con un semplice passaggio algebrico otteniamo infine il risultato 

$$ -\frac{x}{9\sqrt{x^2-9}} + c $$

Tada', come dico sempre in classe. Buon fine settimana, ragazzi e ragazze, ci vediamo alla prossima
imperfezione.

