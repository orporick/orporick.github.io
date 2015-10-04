---
layout: page
exclude: true
title: La Fiera delle Imperfezioni
permalink: /imperfezioni/
---

Succede che nel fare lezione, distratto, stanco o per destino io commetta degli errori alla lavagna. Non succede spesso, ma succede. Sono sviste, errori in un calcolo, teoremi citati inappropriatamente. Succede che poi a casa il pensiero torna sull'errore, a volte per ore, spesso la sera. Mi dispiace sbagliare, non per vantare perfezione che non ho, ma perché nel cercare di parlare di matematica bisognerebbe essere precisi. Come dire, dare l'esempio. Spesso faccio esercizi sul momento, senza prepararli, non per incuria, il contrario. E' un modo per partire da zero insieme ai miei ragazzi, per esplorare senza conoscere in anticipo il sentiero del giorno. E a volte succede l'inciampo.

Come forma di risarcimento ecco questo piccolo spazio, non so quanto durevole o assiduo sarà il mio frequentarlo, ma l'intenzione c'è. Quando faccio un errore in classe mi piacerebbe poi scriverne qui, dare la versione corretta per i miei studenti e le mie studentesse e prendere spunto dalla deviazione del percorso involontaria per camminare su nuovi sentieri.

Un diario di errori, una fiera dell'imperfezione, un modo per rimediare allo sbadato corso delle cose.


<br><br>

<hr class="style-eight">

<br>

<article class="post-content">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.tags contains 'imperfezioni' %}
        <li><span>{{ post.date | date_to_string }}</span>
        <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{post.title }}</a></h2></span>
      tags: <span class="post_meta">{% for tag in post.tags %}<a href="/tags/#{{ tag }}">{{ tag }}</a>{% if forloop.last != true %}, {% endif %}{% endfor %}<br>
        </li>

        {{ post.content | strip_html | truncatewords:35}}<br>
        <a href="{{ post.url }}">Read more...</a><br><br>
	  {% endif %}
        {% endfor %}
  </ul>


</article>



