---
layout: post
title: "Scorciatoia per la 5C"
tags: [matematica]
categories: Imperfezioni
---

Ci siamo, la prima imperfezione del nuovo anno scolastico. Carissimi
studenti e studentesse di 5C, stamattina abbiamo perso 45 minuti per
risolvere un esercizio alla lavagna mentre ne bastavano 2 di minuti
(prof, abbiamo perso? Ha perso, noi siamo stati zitti zitti ed
attoniti al nostro posto. Va bene, ho perso 45 minuti). Mentre buttavo
la spazzatura stasera mi è venuta in mente la soluzione banale al
problema di stamane, mi scuso tantissimo per avervi fatto perdere
tempo. A parziale risarcimento ecco la strada semplice, il disegno
riporta il problema geometrico


![My helpful screenshot](/images/prob1.png){: .center-image }

Se vi ricordate dovevamo calcolare

$$ \lim_{M\rightarrow B} \frac{\overline{MT}}{\overline{MC}} $$

Con la scelta dell'incognita $x$ proposta in classe siamo arrivati
perdendo un sacco di tempo ad un limite piuttosto complicato (lo avete
fatto? Io si, mentre pulivo la lettiera dei gatti; in realtà è
abbastanza semplice anche quello. Ne parliamo in classe.).

Invece bastava prendere come incognita $x$ l'angolo $M\widehat{B}T$. Infatti se

$$ x = M\widehat{B}T $$

si ha

$$ M\widehat{B}C = \frac{\pi}{4} - x $$

Inoltre, per le note proprietà dei triangoli rettangoli, considerando
i triangoli $MTB$ ed $MCB$ si poteva scrivere

$$ \overline{MT} = \overline{MB} \sin(x) $$

e

$$ \overline{MC} = \overline{MB} \sin(\frac{\pi}{4} - x) $$

Quando $M$ tende a $B$ l'angolo $x$ tende a zero ed in definitiva il
limite richiesto era

$$ \lim_{x\rightarrow 0} \frac{\overline{MB}\sin(x)}{\overline{MB}\sin(\frac{\pi}{4} - x)} =
\frac{\sin(x)}{\sin(\frac{\pi}{4} - x)}$$

che vale $0$ in quanto il numeratore si annulla ed il denominatore
tende a $\sin(\frac{\pi}{4}) = \frac{\sqrt{2}}{2}$.

Ecco, due minuti. Imperfezione temporale quella di stamattina. Alla prossima.
