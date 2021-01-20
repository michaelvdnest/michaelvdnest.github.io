---
layout: archive
---

{{ content }}

{% if site.collections.size > 2 %}
  <ul class="taxonomy__index">
      {% for coll in site.collections %}
        {% unless coll.output == false or coll.label == "posts" or coll.label == 'drafts' %}
          <li>
            <a href="#{{ coll.label | slugify }}">
              <strong>{{ coll.label }}</strong>
            </a>
          </li>
        {% endunless %}
      {% endfor %}
  </ul>
{% endif %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" %}
    {% capture label %}{{ collection.label }}{% endcapture %}
    {% if label != written_label %}
      <h2 id="{{ label | slugify }}" class="archive__subtitle">{{ label }}</h2>
      {% capture written_label %}{{ label }}{% endcapture %}
    {% endif %}
  {% endunless %}
  {% for post in collection.docs %}
    {% unless collection.output == false or collection.label == "posts" %}
      {% include archive-single.html %}
    {% endunless %}
  {% endfor %}
{% endfor %}