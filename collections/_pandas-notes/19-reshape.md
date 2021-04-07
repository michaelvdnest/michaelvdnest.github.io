---
title: "Reshape Data"
permalink: /pandas-notes/reshape/
excerpt: "Change the structure of datasets"
last_modified_at: 2021-02-16
toc: true
---

## Melt

Gather columns into rows.

![melt]({{ site.url }}{{ site.baseurl }}/assets/images/pandas_melt.png){: .centre-image }

<iframe src="/assets/notebooks/reshape-melt.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Pivot

Spread rows into columns.

![pivot]({{ site.url }}{{ site.baseurl }}/assets/images/pandas_pivot.png){: .centre-image }

<iframe src="/assets/notebooks/reshape-pivot.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Reshape the layout of tables](https://pandas.pydata.org/docs/getting_started/intro_tutorials/07_reshape_table_layout.html)
* [Reshaping and pivot tables](https://pandas.pydata.org/docs/user_guide/reshaping.html)
* [Cookbook Pivot](https://pandas.pydata.org/docs/user_guide/cookbook.html#cookbook-pivot)
* [Tidy Data](http://vita.had.co.nz/papers/tidy-data.pdf)