---
layout: post
title: "Lettera su un gioco polinomiale"
published: true
tags: [matematica]
categories: Lettere
---


*Lo ricordo nell'atrio dell
albergo con un libro di matematica in mano, guardando
a volte i colori irrecuperabili del cielo.
Una sera, stavamo parlando del sistema di
numerazione duodecimale (in cui il dodici si scrive dieci).*

**Jorge Luis Borges**


Caro B, ti scrivo queste poche righe per dirti che sono contento di aver
sentito la tua voce in classe, qualche giorno fa. Ci vuole coraggio ad
accettare una propria fragilità, condividerla davanti a tutti noi è stato
un atto eroico che ho apprezzato molto. Spero che i consigli che ho provato
a darti stiano sevendo a qualcosa, nel caso sai sempre dove trovarmi. Per
rendere più dolce il sentiero che ti aspetta ecco un piccolo gioco che puoi provare alle feste per avere successo garantito (ad essere onesto non garantisco nulla, non frequento feste da molto tempo).

Chiedi ad un amico o ad una amica di pensare, senza dirtelo, ad un polinomio $p(x)$ di grado qualsiasi, che soddisfi le seguenti condizioni:

1. i coefficienti siano tutti interi non negativi;
2. non sia un monomio[^1].

Tra lo stupore generale del pubblico sarai in grado di determinare in modo univoco ed esatto il polinomio pensato chiedendo soltanto due valori 
particolari; questa cosa sembra impossibile, un polinomio di grado $n$ può avere fino a $n+1$ coefficienti, come
è possibile determinarli tutti con soli due valori del polinomio? Fai colpo su tutti e tutte chiedendo i due seguenti valori:
$p(1)$ e $p(p(1))$. Il trucco a questo punto è semplice: esprimi il numero $p(p(1))$ (che per le condizioni del gioco sarà un 
numero intero e positivo) in base $p(1)$ e il gioco è fatto, i coefficienti nello sviluppo delle potenze di $p(1)$ sono
esattamente i coefficienti del polinomio da indovinare. Prima di discutere brevemente il perché (sono sicuro che hai già capito), facciamo
un esempio; supponiamo che ti siano stati dati i valori $p(1) = 7$ e $p(7)=17845$. Esprimi il secondo numero in base $7$; ovviamente per
numeri così alti avrai bisogno di un po' di tempo (o di un piccolo aiuto informatico), ma alla fine otterrai il seguente risultato

$$ 17845 = 1\cdot 7^5+3\cdot 7^3+ 1\cdot 7^1 + 2\cdot 7^0$$

che è appunto lo sviluppo di $17845$ in base $7$. Allora il polinomio cercato è

$$ p(x) = x^5 + 3x^3+x+2 $$

Et voilà. 

Qualche breve commento. La richiesta di $p(1)$, che è la somma dei coefficienti del polinomio, serve ad ottenere una base
più grande di ciascun coefficiente del polinomio. Una volta ottenuta tale base, $p(p(1))$ è un numero la cui espansione nella
base $p(1)$ fornisce i coefficienti cercati; per completare, il **teorema di rappresentazione in base** garantisce che lo sviluppo di $p(p(1))$ in base $p(1)$ esiste ed è unico[^2]. 

Non mi resta che augurarti tutto il bene di cui sono capace, sono certo che tutto si risolverà.

[^1]: In realtà ci sono molte versioni di questo gioco e si può fare in modo di estenderlo facilmente anche al caso di monomi, ma facciamo la 
versione più semplice.

[^2]:Vedi ad esempio pagina 8 in **Number Theory** di G.E.Andrews, Dover Publications.



