---
layout: post
title: "Equazioni differenziali, la via corretta per la 5C"
tags: [matematica, imperfezioni]
---

Cari studenti e care studentesse di 5C, stamane ho fatto un errore
piuttosto grave durante la spiegazione sulle equazioni
differenziali. Ho poi rimediato, ma mi è rimasto il dispiacere per una
imperfezione evitabile. Non ho scusanti se non un po' di stanchezza e
l'aver voluto seguire la notazione del vostro libro su due piedi
invece di usare quella a cui sono abituato. Risultato
disastroso. Aveva ragione Hardy quando diceva che superati i 40 anni
sarebbe meglio non dedicarsi più alla matematica. Vabbè, cosa fatta
capo ha, il risultato è che, a parziale risarcimento, adesso avete
tutti un caffè pagato al bar della scuola. Inoltre provo qui in poche
righe a riscrivere in modo dettagliato quanto stamane ho fatto in modo
così confuso alla lavagna così che vi possa essere utile in
seguito. Come sempre impariamo dalle imperfezioni, soprattutto dalle
mie (le vostre sono scusabili).

Stiamo parlando di equazioni differenziali lineari del primo ordine,
ovvero, con la notazione usata stamane in classe, equazioni del tipo

$$ y' + a(x) y = b(x) $$

dove $y=f(x)$ è una funzione della variabile $x$ e $a(x)$ e $b(x)$ sono
funzioni reali. Ricordo che risolvere l'equazione differenziale
significa trovare la famiglia di funzioni (le curve integrali) che la
soddisfa.

Si parte dal caso omogeneo, ovvero $b(x) = 0$; l'equazione allora
diventa

$$ y' = -a(x) y $$

e si vede subito che è un'equazione differenziale a variabili
separabili la cui soluzione trovata in classe (questa era giusta) è

$$ y = e^{-\int a(x){\rm d}x} $$

Immaginiamo che $a(x)$ sia integrabile e dunque scriviamo

$$ \int a(x) {\rm d} x = A(x) + c $$

dove $A(x) + c$ è la generica primitiva di $a(x)$. Quindi la soluzione
dell'omogenea si può scrivere come

$$ y = e^{-(A(x) + c)} $$

Bene, questo per l'equazione omogenea. Per l'equazione non omogenea ho
fatto il disastro, rieccovi il ragionamento completo questa volta
corretto (spero).

Si parte dalla soluzione dell'omogenea, ma si considera la costante di
integrazione $c$ come una funzione di $x$. Ovvero si prende la
seguente funzione 

$$ y = e^{-(A(x) + c(x))} $$

e si prova a vedere se è soluzione dell'equazione di
partenza. Inserendola e facendo le opportune derivate otteniamo

$$ -(A'(x) + c'(x))e^{-(A(x) + c(x))} + a(x)e^{-(A(x) + c(x))} = b(x)
$$

Ma siccome $A(x)$ è una primitiva di $a(x)$ si ha $A'(x) = a(x)$ per
definizione di primitiva. Dunque


$$ -(a(x) + c'(x))e^{-(A(x) + c(x))} + a(x)e^{-(A(x) + c(x))} = b(x) $$

Si vede che il termine che contiene $a(x)$ si semplifica e otteniamo

$$ -c'(x)e^{-(A(x) + c(x))} = b(x) $$

Questa è un'equazione differenziabile alle variabili separabili per la
funzione $c$. Con semplice passaggio algebrico diventa

$$ -c'(x)e^{-c(x)} = b(x) e^{A(x)} $$

Inegrando rispetto a $x$

$$ \int -c'(x)e^{-c(x)} {\rm d}x = \int b(x) e^{A(x)} {\rm d} x $$

Il primo membro è immediato e si ottiene

$$ e^{-c(x)} = \int b(x) e^{A(x)} {\rm d} x $$

(come ho detto in classe non metto qui la costante di integrazione
potendola sempre riassorbire nella costante di inegrazione
dell'integrale nel membro di destra).

Si può a questo punto usare questo risultato e rimetterlo dentro la
soluzione $y$ che abbiamo provato all'inizio del ragionamento,
ottenendo

$$ y = e^{-A(x)} \int b(x) e^{A(x)} {\rm d} x $$

Ecco, questa è la soluzione dell'equazione differenziale lineare che
abbiamo affrontato (se volete potete dimenticare tutti i passaggi,
questa è la soluzione da ricordare). Notate che la soluzione
contiene un integrale, quindi una costante di inegrazione: le
soluzioni costituiscono una famiglia infinita di funzioni (le curve
integrali dell'equazione).

Faccio un esempio. Si voglia risolvere la seguente equazione
differenziale

$$ y' + ky = h $$

con $k$ e $h$ numeri reali. In questo caso si ha

$$ a(x) = k $$

$$ b(x) = h $$

$$ A(x) = kx $$

$$ \int b(x) e^{A(x)} {\rm d} x = \int h e^{kx} {\rm d} x = \frac{h}{k} e^{kx}
+ c $$

Da cui la soluzione

$$ y = e^{-kx}(\frac{h}{k}e^{kx} + c) $$

ovvero

$$ y = \frac{h}{k} + c e^{-kx} $$

dove $c$ è la costante di integrazione. Esercizio per casa: dimostrare
che questa equazione descrive per esempio il moto di caduta verticale
di un corpo soggetto ad una forza di gravità costante e ad una forza
di attrito proporzionale alla velocità. Cosa si può dedurre dalla
soluzione? 

Va bene, vi ho tediati abbastanza. Spero di essere stato un po' meno
impreciso in queste poche righe, mi scuso ancora per l'errore di
stamane. Alla prossima imperfezione.


