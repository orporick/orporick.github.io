---
layout: page
title: Tracce
permalink: /tracce/
redirect_from: "/problemi"
---

In questa pagina raccolgo e colleziono problemi di matematica e fisica che periodicamente (con
cadenza che non posso garantire) propongo a studentesse e studenti. Sono tracce, sentieri accennati,
occasioni per trovare strade nuove o per riscoprire panorami consueti. Per ogni traccia indico
l'eventuale fonte (link o riferimento bibliografico). Le tracce variano in difficoltà ed argomento,
per alcune fornisco una soluzione (una delle tante); che siano una scusa per camminate
personali, personali esplorazioni.


<ul>
  {% for p in site.tracce %}
    <li>
      <a href="{{ p.url }}">Traccia {{p.number}}: {{ p.title }}</a>
    </li>
  {% endfor %}
</ul>

