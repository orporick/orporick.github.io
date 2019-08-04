---
layout: page
title: Problemi
permalink: /problemi/
---

In questa pagina raccolgo e colleziono problemi di matematica e fisica che periodicamente (con
cadenza che non posso garantire) propongo a studentesse e studenti. Per ogni problema indico
l'eventuale fonte (RG se il problema è mio, altrimenti link o riferimento bibliografico). I problemi
variano in difficoltà ed argomento.


<ul>
  {% for p in site.problemi %}
    <li>
      <a href="{{ p.url }}">Problema {{p.number}}: {{ p.title }}</a>
    </li>
  {% endfor %}
</ul>

