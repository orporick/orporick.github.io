+++
title = "Distrazione Aritmetica"
author = ["Riccardo Giannitrapani"]
publishDate = 2022-04-30T00:00:00+02:00
lastmod = 2024-10-15T18:26:12+02:00
tags = ["math"]
categories = ["distrazioni"]
draft = false
+++

> O è banale, o è già stato fatto, o è sbagliato
>
> -- Anonimo

Nelle poche righe che seguono cercherò di dimostrare in modo
semplice&nbsp;[^fn:1] alcune proprietà dei numeri razionali che portano ad
un risultato piuttosto noto. L'intento è pedagogico e non di ricerca e
l'epigrafe riportata ne rappresenta lo spirito; esistono in
letteratura e sui libri scolastici dimostrazioni dello stesso fatto
molto più brevi. L'idea è però che alle volte una passeggiata su
strade non battute possa distrarre dal quotidiano (come ci insegna
Robert Frost). Non vi è pretesa di originalità, l'unico valore di
questa minuscola fatica è proporre spunti di possibile approfondimento
e di esercizio personale a studenti e studentesse.

Definiamo due particolari funzioni su \\(\mathbb{R}\\), nel seguente modo

\\[ D(x) = x + 1 \\]
\\[ S(x) = \frac{x}{x+1} \\]

Se le restringiamo ai numeri razionali positivi non nulli&nbsp;[^fn:2]
\\(p/q\\) assumeranno questa forma:

\\[ D\left(\frac{p}{q}\right) = \frac{p+q}{q} \\]
\\[ S\left(\frac{p}{q}\right) = \frac{p}{p+q} \\]

Si vede facilmente che entrambe le funzioni sono chiuse su \\(\mathbb{Q}^+\_0\\),
ovvero il loro risultato se calcolate su un numero razionale positivo
non nullo è ancora un numero razionale positivo non nullo.

Valgono allora le seguenti proposizioni[^fn:3]:

****Proposizione 1****

Se \\(x\in\mathbb{Q}^+\_0\\) è ai minimi termini, allora anche \\(D(x)\\) e \\(S(x)\\) lo sono.

**Dim**
Il numero razionale positivo non nullo \\(p/q\\) è ai minimi termini se
\\(p\\) e \\(q\\) sono primi tra loro, ovvero \\(1\\) è l'unico divisore comune.
Si vede subito che se \\(p\\) e \\(q\\) sono primi tra loro allora lo sono
anche con la loro somma. Infatti supponiamo che \\(p+q\\) e \\(q\\), per esempio, abbiano
un divisore comune \\(b\\) diverso da \\(1\\); allora \\(p+q = bk\\) e \\(q=bh\\) e
dunque \\(p+bh=bk\\) da cui segue \\(p = b(k-h)\\).  Ma allora \\(b\\) è anche divisore di \\(p\\),
contraddicendo l'ipotesi che \\(p\\) e \\(q\\) sono primi tra loro. Da questo risultato ne discende che
\\(D(p/q)\\) e \\(S(p/q)\\) sono ridotti ai minimi termini se lo è
\\(p/q\\).

QED

Immaginiamo adesso di comporre le funzioni \\(D\\) e \\(S\\) tra di
loro in una sequenza arbitraria; per esempio \\(D(S(S(x)))\\)
è una sequenza in cui si calcola \\(S\\) sul numero \\(x\\), il risultato lo
si usa come argomento di \\(S\\) e il risultato di quest'ultima si
usa come argomento di \\(D\\). Si possono immaginare sequenze
arbitrariamente lunghe.

****Proposizione 2****

Se \\(x\in\mathbb{Q}^+\_0\\) e \\(T\\) è una qualsiasi sequenza di \\(D\\) e \\(S\\),
allora \\(T(x) \neq x\\).

**Dim**
Intanto è facile verificare che la somma di numeratore e denominatore
di un numero razionale positivo non nullo aumenta se applichiamo
\\(D\\) o \\(S\\). Infatti, per esempio,

\\[ D\left(\frac{p}{q}\right) = \frac{p+q}{q} \\]

e \\(p+q+q > p+q\\). Analogamente per \\(S\\). Quindi se applichiamo a \\(x\\)
una sequenza \\(T\\) di \\(D\\) e \\(S\\) avremo che la somma di
numeratore e denominatore di \\(T(x)\\) sarà strettamente maggiore della
somma di numeratore e denominatore di \\(x\\). Ma allora \\(T(x)\\) non può
essere uguale a \\(x\\) in quanto essendo entrambi razionali positivi non
nulli ai minimi termini (per la Proposizione 1), se fossero uguali
dovrebbero avere numeratori e denominatori uguali ma con somme
differenti, cosa impossibile.

QED

Per inciso questo significa che se applichiamo una sequenza
arbitrariamente lunga di \\(S\\) e \\(D\\) a partire da un numero
razionale positivo non nullo \\(x\\), la sequenza di risultati
non è periodica, ovvero non passa mai due volte sullo stesso valore.

****Proposizione 3****

\\[\sqrt{2} \notin \mathbb{Q}^+\_0\\]

**Dim**
Supponiamo che \\(\sqrt{2}\\) sia un numero razionale positivo non nullo.
Si vede da calcolo diretto che \\(D(S(S(D(\sqrt{2})))) = \sqrt{2}\\), ma
questo contraddice la Proposizione 2. Dunque \\(\sqrt{2}\\) non è un
numero razionale.

QED

Analoga dimostrazione vale probabilmente per ogni irrazionale algebrico.

[^fn:1]: Ho già parlato in modo più esteso di questa idea usando
    l'albero di Calkin-Wilf in un post del mio blog in cui sono presenti alcuni spunti bibliografici;
    in questa nota ho cercato di asciugare quel discorso all'essenziale. Il post del blog si trova qui:

    <http://orporick.github.io/posts/lettera-sull-irrazionalita/>
[^fn:2]: Vale forse la pena ricordare che se \\(p/q\in \mathbb{Q}\_0^+\\)
    allora \\(p\\) e \\(q\\) sono entrambi numeri naturali diversi da \\(0\\).
[^fn:3]: Teorema sembrava una parola eccessiva.
