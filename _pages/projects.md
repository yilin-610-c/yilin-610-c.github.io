---
layout: page
title: research
permalink: /projects/
description: Efficient LLM inference, quantization, and agents for systems development and evaluation.
nav: true
published: true
nav_order: 1
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-2">
{% for project in sorted_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>
</div>
