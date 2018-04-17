---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>Xingyu Su</h1>
        <a href="http://github.com/SuXY15/" target="_blank"><img src="http://github.com/SuXY15/SuXY15.github.io/sss.ico" alt="" width="18"/></a>
      </div>
      <div id="particles-js"></div>
    </div>
    <div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.blog %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</body>
