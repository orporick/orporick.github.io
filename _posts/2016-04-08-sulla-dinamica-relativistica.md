---
layout: post
title: "Sulla dinamica relativistica"
tags: [fisica, imperfezioni]
---

Carissimi ragazzi e ragazze di 5A. Di nuovo qui a scrivere perché non
sono soddisfatto della lezione di stamane, troppo confusa e con molte
imprecisioni. Vi chiedo scusa. Cerco di farmi perdonare provando a riassumere i punti
importanti in questo breve post.

Partiamo dalle motivazioni: abbiamo studiato in queste settimane la
cinematica relativistica ed abbiamo trovato vari risultati, tra cui

1. le misure di intervalli temporali dipendono dal riferimento (inerziale);
2. la velocità di qualunque corpo deve essere inferiore alla velocità
   della luce (vi ricordo che nel sistema di misura che usiamo noi la
   velocità della luce è pari a $1$).

Stamattina abbiamo visto che discutendo un po' su questi due punti si
arriva alla conclusione che anche la dinamica relativistica deve
essere leggermente modificata. In particolare vi ho fatto vedere
(senza dimostrazione però, sto meditando di proporvene una se ci sarà
tempo più avanti) che la definizione di quantità di moto va
rivista. In relatività la definiamo come

$$ p = m \frac{d x}{d \tau} $$

dove $x$ è la coordinato dell'oggetto nel riferimento inerziale
dell'osservatore, mentre $\tau$ (stamane in classe ho usato $t'$, ma
con gli apici ci si confonde, permettetemi questo cambio di notazione)
è il tempo misurato nel riferimento di quiete del corpo (e quindi in
moto rispetto all'osservatore) ed $m$ è la sua massa inerziale (come
sempre consideriamo un moto unidimensionale, quindi niente
vettori). Ho puntualizzato stamane e lo faccio anche qui che per me la
massa inerziale $m$ di un corpo non dipende dallo stato di moto del
corpo, ma è una grandezza invariante.

La definizione data è quasi uguale a quella classica

$$ p = m \frac{d x}{d t}$$

solo che la derivata è rispetto al tempo misurato dal corpo e
non dall'osservatore. Siccome abbiamo visto nelle lezioni precedenti
che

$$ \frac{d \tau}{d t} = \frac{1}{\sqrt{1-v^2}} $$

(fenomeno della dilatazione temporale) si ottiene subito

$$ p = \frac{1}{\sqrt{1-v^2}} m \frac{d x}{d t} $$

ovvero

$$ p = \frac{mv}{\sqrt{1-v^2}} $$

con $v$ la velocità del corpo misurata dall'osservatore.

Dalla formula si vede che $p$ dipende dalla velocità in modo diverso
dal caso classico $p = mv$. In ogni caso la quantità di moto è una grandezza
che dipende dal sistema di riferimento inerziale. Per esempio in
quello di quiete della particella, $v = 0$, la quantità di moto è
nulla. Con questa definizione si può dimostrare che il principio di
conservazione della quantità di moto è salvo anche in relatività.

Stamane abbiamo anche introdotto una seconda grandezza

$$ E = m \frac{d t}{d \tau} $$

ovvero, usando il risultato di prima sulla dilatazione temporale, 

$$ E = \frac{m}{\sqrt{1-v^2}} $$

L'interesse per questa grandezza viene dal fatto che è semplice
mostrare algebricamente che $E^2 - p^2$ non dipende dal riferimento
inerziale scelto; infatti si vede subito che

$$ E^2 - p^2 = m^2 $$

e siccome $m$ è la massa inerziale del corpo otteniamo il risultato
voluto.

Riassumendo abbiamo due grandezze, $p$ ed $E$, che dipendono
dal riferimento inerziale usato, mentre la loro combinazione $E^2 -
p^2$ è invariante. Nel riferimento di quiete, dove $p$ è zero, la
grandezza $E$ coincide con la massa del corpo.

Infine abbiamo visto che se faccio lo sviluppo in serie di Taylor di
$E$ al second'ordine in $v$ per valori vicini allo zero ottengo

$$ E \simeq m + \frac{1}{2} m v^2 $$

riconoscendo nel secondo termine a destra dell'uguale l'usuale energia
cinetica della meccanica classica. Sembra quindi plausibile attribuire
alla grandezza $E$ il significato di energia del corpo, posto di
accettare che un corpo a riposo possegga un'energia non nulla pari a
$m$. Senza fare l'approssimazione, possiamo allora dire che l'energia
cinetica relativistica di un corpo è pari a $E$ meno la sua energia a
riposo, ovvero

$$ K = \frac{m}{\sqrt{1-v^2}} - m $$

Bene, volevo solo riassumere e puntualizzare le cose confuse viste
stamane, i risultati che ho messo in questo post sono quello che alla
fin fine mi premeva passarvi. Questo sarà il punto di partenza per la
prossima lezione che concluderà il nostro viaggio nella relatività
ristretta. Altre spiagge (astrofisica e cosmologia) attendono le
nostre impronte.

Alla prossima imperfezione.


(Insegnare questa parte del programma mi porta indietro di molti
anni. Ho un grande debito nei confronti di Elio Fabri per il suo modo
di insegnare la relatività che in parte ha influenzato il mio modo di
parlarvene in classe, almeno su questa parte della
dinamica. Ovviamente ogni errore è mio.)
