---
layout: page
title:  "Articles"
author: Yuexi Tan
date:   2016-02-03 14:03:00 +0800
permalink: /Articles/
---

{% include tagsByName.html %}

{% for tag in tagsByName %}+ [{{ tag }}](#{{ tag }})
{% endfor %}
<br>

{% for tag in site.tags %}
  <h3 id="{{ tag[0] }}">{{ tag[0] }}</h3>
  <ul class="post-list-compact">
    {% for post in tag[1] %}
      <li>
      	<p>
          <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        </p>
      </li>
    {% endfor %}
  </ul>

{% endfor %}
