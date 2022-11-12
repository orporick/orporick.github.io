---
layout: post
title: "Lettera su un gioco polinomiale"
published: true
tags: [matematica]
categories: Lettere
---


<div class="right"><i>Ho sognato che avevo disegnato dei tasti<br>
di pianoforte sul tavolo di cucina.<br>
Io ci suonavo sopra, erano muti.<br>
I vicini venivano ad ascoltare.</i><br>
<b>Tomas Tranströmer</b></div>


Caro B, mi dispiace ..


Ecco un piccolo gioco che puoi provare ad una festa (non garantisco nulla però,
non frequento feste da molto tempo).

Chiedi ad un amico o ad una amica di pensare ad un polinomio $p(x)$ di grado qualsiasi, che
soddisfi le seguenti condizioni:

1. i coefficienti siano tutti interi non negativi;
2. non sia un monomio (si può modificare il gioco per farlo funzionare anche in caso di monomi).

Sarai in grado di determinare i maniera univoca ed esatta il polinomio chiedendo soltanto due valori 
particolari; questa cosa sembra impossibile, un polinomio di grado $n$ può avere fino a $n+1$ coefficienti, come
è possibile determinarli tutti con soli due valori del polinomio? Stupisci tutti e tutte chiedendo i due seguenti valori:
$p(1)$ e $p(p(1))$. Il trucco a questo punto è semplice: esprimi il numero $p(p(1))$ (che per le condizioni del gioco sarà un 
numero intero e positivo) in base $p(1)$ e il gioco è fatto, i coefficienti nello sviluppo delle potenze di $p(1)$ sono
esattamente i coefficienti del polinomio da indovinare. Prima di discutere brevemente il perché (sono sicuro che hai già capito), facciamo
un esempio; supponiamo che ti siano stati dati i valori $p(1) = 7$ e $p(7)=17845$. Esprimi il secondo numero in base $7$; ovviamente per
numeri così alti avrai bisogno di un po' di tempo (o di un piccolo aiuto informatico), ma alla fine otterrai il seguente risultato

$$ 17845 = 1\cdot 7^5+3\cdot 7^3+ 1\cdot 7^1 + 2\cdot 7^0$$

che è appunto lo sviluppo di $p(7)$ in base $p(1)$. Allora il polinomio cercato è

$$ p(x) = x^5 + 3x^3+x+2 $$

Et voilat. 

Qualche breve commento. La richiesta di $p(1)$, che è la somma dei coefficienti del polinomio, serve ad ottenere una base
più grande di ciascun coefficiente del polinomio. Una volta ottenuta tale base, $p(p(1))$ è un numero la cui espansione nella
base $p(1)$ fornisce i coefficienti cercati; per completare, il **teorema di rappresentazione in base** garantisce che lo sviluppo di $p(p(1))$ in base $p(1)$ esiste ed è unico[^2]



[^2]: Vedi ad esempio pagina 8 in **Number Theory** di G.E.Andrews, Dover Publications.



