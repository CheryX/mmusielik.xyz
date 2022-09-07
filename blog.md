---
layout: default
title: Blog
important: false
site: blog
---

{% include rss.html %}

# Latest Posts

{% for post in site.posts %}

## [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}

{% endfor %}