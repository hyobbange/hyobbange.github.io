---
title:
description: HFX Lab makes small games and handy tools for iPhone and Android, from puzzle games to stock and surveying calculators.
---

<section class="intro">
  <h1>HFX Lab</h1>
  <p>Small games and handy tools for iPhone and Android. Easy to pick up, useful to come back to.</p>
  <p class="muted" lang="ko">아이폰·안드로이드용 작은 게임과 쓸모 있는 도구 앱을 만들어요.</p>
</section>

<h2>Apps</h2>

<div class="app-list">
{%- for app in site.data.apps %}
{%- if app.page %}{% assign href = app.page | relative_url %}{% else %}{% assign href = app.google_play | default: app.app_store %}{% endif %}
<article class="app-card">
  <a class="app-icon" href="{{ href }}"><img src="{{ app.icon | relative_url }}" alt="{{ app.name.en }} icon" width="72" height="72"></a>
  <div class="app-info">
    <h3><a href="{{ href }}">{{ app.name.en }}</a></h3>
    <p class="app-name-ko" lang="ko">{{ app.name.ko }}</p>
    <p class="app-tagline">{{ app.tagline.en }}</p>
    {% include store-links.html app=app.id %}
  </div>
</article>
{%- endfor %}
</div>

<h2>Contact</h2>

Questions, bug reports or privacy requests: [hfx.lab@gmail.com](mailto:hfx.lab@gmail.com)
