---
layout: default
permalink: /blog/
title: blog
description: Notes on research, learning, and the people along the way.
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">{{ site.blog_name }}</h1>
    <p class="post-description">{{ site.blog_description }}</p>
  </header>

  <ul class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}
    {% for post in postlist %}
      <li>
        <div class="row">
          <div class="{% if post.cover %}col-sm-9{% else %}col-12{% endif %}">
            <h2 class="h4"><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p>{{ post.description }}</p>
            <p class="post-meta">{% include post_date.liquid post=post %}</p>
          </div>
          {% if post.cover %}
            <div class="col-sm-3">
              {% include figure.liquid path=post.cover alt=post.cover_alt class="img-fluid blog-thumbnail" sizes="200px" %}
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>
  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>
