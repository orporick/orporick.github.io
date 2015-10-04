---
layout: page
exclude: true
title: Lettere a Studenti e Studentesse
permalink: /lettere/
---

A volte inventati, a volte ricordati a malapena, altre volte ben
presenti nelle mie ore notturne dedicate alle lezioni che non farò
più. Studenti e studentesse che ho avuto, che avrei voluto avere, che
non ho meritato. A loro scrivo qualche lettera, più per forzare
un'abitudine al ricordo che per una vera e propria necessità. Di
matematica e di fisica, il resto lo tengo per me.

<br><br>

<hr class="style-eight">

<br>

<article class="post-content">
  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.tags contains 'lettera' %}
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



