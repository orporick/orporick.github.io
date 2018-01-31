---
layout: post
title: "Lettera su una poesia"
published: true
tags: [lettera, matematica]
---


Caro D

sono alcuni giorni che ho in mente di scriverti, stasera trovo il tempo in una rara pausa del
giorno, sul bordo della sera. Non abbiamo più avuto modo di parlarci, non sono riuscito dall'ultima
volta a chiederti come stai, a sapere di te. Provo a leggere ogni mattina qualche segnale, ma il
tempo corre veloce e lo spazio di una classe è troppo stretto a volte per un semplice saluto.

Vorrei aiutarti, ma ne sono incapace, temo. Non ho alcun potere, alcuna giurisdizione sullo spazio bianco che a volte mi fai trovare nei compiti
in classe, non ho doti da carpentiere, non posso, da solo, costruire strade per te. Aspetto un tuo
segnale, un tuo passo avanti; queste poche righe che so che leggerai sono il mio.

Ricordi quando l'anno scorso ti rubarono la bicicletta e tu, da solo e a piedi, riuscisti a
recuperarla? Lo scatto, la corsa, la determinazione. Le ricordi? Credo che la scuola, noi
insegnanti, un sistema che a volte, non con cattiveria, macina la strada senza tener conto
dell'andatura del piede di chi cammina, credo che tutti noi ti abbiamo rubato qualcosa. Ora ci
vorrebbe un tuo scatto, una corsa. Se ti scrivo queste poche righe è perché so che hai in te il
traguardo, perché ho stima del tuo essere studente, che sono contento di averti in classe e vorrei
tanto continuare a vederti la mattina. 

In ognuno di noi vi è luce, persino nelle lunghe e noiose ore
di matematica. Se hai voglia, ecco i versi iniziali di una poesia a me molto cara di Laureano Alban,
"Gli infimi crepuscoli". Anni fa me la lesse mia moglie in un momento di assoluta tenebra per me, ti
regalo l'incipit:


>*Amo le cose che consumate brillano  
>come se i crepuscoli fossero   
>fermi in esse ardendo per sempre*  

Ardendo per sempre, caro D. Il mio sforzo quotidiano è tutto qui, cercare di mostrarvi questi crepuscoli ogni mattina. 

Per chiudere te ne propongo uno molto semplice, in fondo la matematica è uno dei tanti volti poetici
che possiamo cogliere.

Immagina di voler trovare la somma delle prime $n$ potenze crescenti di un numero positivo $a$,
ovvero

$$ a^0 + a^1 + a^2 + a^3 + \ldots + a^{n-1} $$

Nota che partendo da $0$ arriviamo ad $n-1$ per averne $n$. Inoltre ricorda che $a^0 = 1$ per
definizione e che $a^1 = a$; dunque stiamo cercando la seguente somma, che chiameremo $S_{n}$

$$ S_{n} = 1 + a + a^2 + a^3 + \ldots + a^{n-1} $$  

Come fare? L'idea è talmente semplice ed elegante che sembra far scaturire la soluzione
letteralmente dal nulla. Raccogliamo un fattore $a$ in questo modo

$$ S_{n} = 1 + a(1 + a + a^2 + \ldots + a^{n-2}) $$

Ma la somma tra parentesi è, se ci pensi un attimo, $ S_{n-1}$. Dunque 

$$ S_{n} = 1 + a S_{n-1} $$

Questa formula si dice ricorsiva perché lega il valore di $S_n$ a quello di $S_{n-1}$. Possiamo fare
di più però. Sappiamo infatti che $ S_{n-1} = S_n - a^{n‐1} $ (riesci a vederlo?). Da cui

$$ S_{n} = 1 + a (S_n - a^{n-1}) $$

Lo vedi ora caro D? Abbiamo una equazione che ci permette di trovare $S_n$, un infimo, meraviglioso
crepuscolo; con facili passaggi si ottiene (prova)

$$ S_{n} =\frac{a^n - 1}{a-1} $$

Come ti dicevo la soluzione è saltata fuori dal nulla, dalla semplice definizione e con pochi
passaggi algebrici. Funziona? Si, lascio a te fare delle prove, ti mostro solo alcune connessioni.
Dalla formula appena trovata si ottiene la seguente relazione

$$ (a^n - 1) = (a-1)(a^{n-1} + a^{n-2} + \ldots + a^2 + a + 1) $$

relazione interessante di cui ti ricorderai abbiamo visto l'anno scorso due casi particolari quando
abbiamo parlato di prodotti notevoli

$$ (a^2 - 1) = (a - 1)(a+1) $$

$$ (a^3 - 1) = (a - 1)(a^2 + a + 1) $$

Se inoltre prendi come numero $a$ il numero $2$, trovi che la somma delle prime $n$ potenze di $2$ è
pari a $2^n - 1$, risultato che abbiamo usato l'anno scorso quando abbiamo affrontato la numerazione
in base due.

Non volevo tediarti con della matematica al di fuori di quella che ci compete in classe, prendi
queste poche righe come un maldestro tentativo del tuo insegnante di riaccendere una luce
intravista.

Un caro saluto, prof.
