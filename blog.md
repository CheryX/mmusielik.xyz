---
layout: default
title: Blog
important: false
site: blog
---

{% include rss.html %}

# Latest Posts

{% for post in site.posts %}

<div class="post">

<h2> <a href="{{ post.url }}">{{ post.title }}</a> </h2>
<p>{{ post.excerpt }}</p>

</div>

{% endfor %}