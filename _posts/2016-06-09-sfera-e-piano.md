---
layout: post
title: "Un esercizio di interesezione tra una sfera ed un piano"
tags: [matematica]
categories: Imperfezioni
---

Cari studenti e studentesse di 5C, stamane ho risolto parzialmente un
esercizio di geometria analitica nello spazio che mi avete
chiesto. Sono qui per concluderlo, scusandomi tantissimo per non
averlo finito stamane, ma l'idea (ovviamente banale) per il terzo
punto dell'esercizio, quello mancante, mi è venuta in mente solo
stasera.

Riassumo il resto dell'esercizio visto che mi serve. Sia dato nello
spazio un punto $P(2,-2,0)$ ed il piano $\alpha$ di equazione

$$ x+y-3z+3 = 0  $$

Abbiamo trovato stamane la retta $r$ passante per $P$ e perpendicolare
al piano che in forma parametrica si scrive (occhio che sul libro c'è
un refuso nella soluzione di questo punto)

$$ x = 2 + t; y = -2 + t; z = -3t $$

Abbiamo inoltre trovato (secondo punto) la sfera di raggio $3$
centrata in $P$, la cui equazione non ci serve qui.

Il punto non svolto in classe è il seguente: verificare che
l'intersezione tra la sfera ed il piano $\alpha$ è una circonferenza e
trovarne il raggio. Se uno mette a sistema l'equazione del piano e
della sfera non risolve facilmente il quesito, come abbiamo visto
stamane in classe. Mi è venuta in mente allora la seguente soluzione.

1. Si trova il punto $H$ di intersezione tra la retta $r$ ed il piano
   $\alpha$. Ve lo lascio come esercizio, ma è molto semplice. La
   lunghezza di $PH$ anche è facilmente calcolabile ed è
   fissata. Inoltre il segmento $PH$ è perpendicolare al piano.

2. Si prenda un punto $Q$ dello spazio e si consideri il triangolo
   $QPH$. Se $Q$ appartiene al piano, allora il segmento $QH$ ed il
   segmento $HP$ sono perpendicolari, dunque il triangolo $QPH$ è
   rettangolo in $H$. Se $Q$ appartiene alla sfera allora, per
   definizione, $QP$ è lungo $3$. In definitiva i punti $Q$ che
   appartengono sia al piano che alla circonferenza (la loro
   intersezione) danno luogo ad un triangolo $QPH$ che è
   rettangolo in $H$ e che ha l'ipotenusa $QP$ pari a $3$ ed il cateto
   $PH$ fissato. Dunque $QH$ è fissato ed uguale per ogni possibile
   scelta di $Q$.

Abbiamo quindi dimostrato che i punti di intersezione tra sfera e
piano giacciono tutti su un piano (per costruzione) e sono tutti
equidistanti da un punto fisso $H$. Questa è proprio la definizione di
una circonferenza su un piano. Il raggio della circonferenza sarà pari
a $\overline{QH}$ che per il teorema di pitagora è dato da

$$ \overline{QH} = \sqrt{\overline{QP}^2 - \overline{HP}^2} $$

ed essendo $\overline{QP}=3$ e $\overline{HP}$ noto (vedi punto 1), si
ottiene il raggio.

Immagino che scritto così e senza disegno non si sia capito un tubo,
ma ho comunque voluto buttar giù due righe per non lasciare in sospeso
l'esercizio e per chiedervi scusa di non averlo finito stamane. Un
caro saluto, prof.

