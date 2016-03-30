---
layout: page
title:  "Article List"
author: Yuexi Tan
date:   2016-02-03 14:03:00 +0800
permalink: /Article-List/
---

{% include tagsByName.html %}

<fieldset>
<legend id="taglist">Jump to tag</legend>

{% for tag in tagsByName %}<a href="#{{ tag }}">{{ tag }}</a><br>{% endfor %}

</fieldset>

{% for tag in site.tags %}
  <h1>{{ tag[0] }}<a name="{{ tag[0] }}"></a></h1>
  <ul class="post-list-compact">
    {% for post in tag[1] %}
      <li>
      	<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
  [[Tags](#taglist)]
{% endfor %}
