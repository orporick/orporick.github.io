---
layout: post
title: "Eclissi di lancette"
tags: [matematica, lettera]
---

Cara Bianca

l'ultima volta che ci siamo visti mi hai chiesto del problema
dell'orologio, cerco di risponderti brevemente qui. È un problema
classico che propongo da anni nelle classi dove faccio supplenza, con
risultati abbastanza minimali (ovvero nessuno di solito mi sa dare la
soluzione). Non è un problema difficile, anzi, ma richiede di pensare
in modo diverso rispetto alle abitudini di uno studente o una
studentessa della nostra scuola. Il problema ha una formulazione molto
semplice: a mezzogiorno in punto la lancetta dei minuti e quella delle
ore di un orologio sono sovrapposte (eclisse); in quali altri momenti
(ora e minuti) si ha un'eclisse di lancette?

La maggior parte dei ragazzi e delle ragazze senza pensarci su
risponde qualcosa del tipo "All'una e cinque", senza pensare che
quando la lancetta dei minuti è sul cinque quella delle ore non puó
essere esattamente sul cinque (ovvero l'una), ma deve trovarsi un po'
oltre in quanto sono passati cinque minuti dal momento in cui c'era.

Esistono molti modi di rispondere, te ne propongo tre.

# Per simmetria

Dimostriamo per simmetria che le eclissi sono distanziate dal medesimo
intervallo di tempo. Si prenda per esempio la prima eclisse dopo
mezzogiorno, si troverá poco dopo l'una e cinque. Se ora si ruota
l'intero orologio in modo da far sì che le due lancette sovrapposte
risultino verticali, si torna ad una situazione equivalente a quella
che si aveva a mezzogiorno. Dunque la successiva eclisse, la seconda
eclisse dopo mezzogiorno, avverà dopo un'intervallo uguale a quello
che separa la prima eclisse da mezzogiorno, e così via. Siccome la
prima eclisse avviene dopo più di un'ora, e dopo meno di due, le
eclissi devono essere 11 (non possono essere 12 perché se no se ne
avrebbe una ogni ora, e abbiamo visto che questo non succede)
nell'arco delle 12 ore (un giro completo). Dunque basta dividere
l'angolo giro in 11 parti per sapere l'angolo che le lancette
percorrono tra un'eclisse e la successiva

$$ \theta = \frac{2\pi}{11} \mathrm{rad}$$

La lancetta delle ore si muove ad una velocità angolare pari a

$$ \omega = \frac{2\pi}{12} \mathrm{\frac{rad}{ora}} $$

Dunque le eclissi sono distanziate da un tempo dato da

$$ t = \frac{\theta}{\omega} = \frac{12}{11} \mathrm{ora} \simeq 1\,
\mathrm{ora}\quad 5\, \mathrm{minuti}\quad 27\, \mathrm{secondi} $$


# Inseguimento

Possiamo scrivere le leggi orarie del moto angolare delle due lancette
ed impostare il problema come un classico problema di inseguimento. La
lancetta delle ore ha una legge oraria data da

$$ \theta_o = \omega_o t$$

e quella dei minuti, analogamente, da

$$ \theta_m = \omega_m t$$

dove gli angoli sono presi rispetto all'asse passante per
mezzogiorno. Esprimendo le velocità angolari in rad/ora si ha

$$ \omega_o = \frac{2\pi}{12} \mathrm{\frac{rad}{ora}} $$

e

$$ \omega_m = 2\pi \mathrm{\frac{rad}{ora}} $$

Una eclisse avviene quando la differenza tra $\theta_o$ e $\theta_m$ è
un multiplo di $2\pi$, ovvero

$$ \theta_m - \theta_o = 2 n \pi $$

da cui

$$ t (\omega_m - \omega_o) = 2 n \pi $$

e quindi

$$ t(2\pi - \frac{2\pi}{12}) = 2 n \pi $$

Si ottiene infine, raccogliendo e semplificando

$$ t = n \frac{12}{11} $$

dove il risultato è espresso in ore. Si ottiene dunque lo stesso
risultato di prima (da notare che quando $n=11$ si ha $t=12$, ovvero
dopo 11 eclissi sono passate esattamente 12 ore, le lancette sono
tornate entrambe nella posizione verticale verso l'alto).

# Numeri complessi

Una variante del primo metodo consiste nell'accorgersi che le eclissi,
essendo 11, costituiscono intorno al centro dell'orologio i vertici di
un poligono regolare di 11 lati. Si può usare allora la nota proprietà
dei numeri complessi relativa alle radici ennesime di un numero
complesso. Ti lascio da dimostrare che effettivamente le eclissi si
posizionano come le radici undicesime di $i$ (unità immaginaria).


Spero di sentire presto tue notizie. Saluti, prof.
