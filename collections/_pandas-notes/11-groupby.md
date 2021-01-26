---
title: "Group Data"
permalink: /pandas-notes/groupby/
excerpt: "Groups rows that have the same values into summary rows."
last_modified_at: 2021-01-25
toc: true
---

Groups rows that have the same values into summary rows.

![groupby]({{ site.url }}{{ site.baseurl }}/assets/images/groupby.png)

The following operations can be applied to groups.

- **Aggregation:** Compute a summary statistic about each group.
- **Transformation:** Perform some group-specific computations and return a like-indexed.
- **Filtration:** Discard data with some condition.

## Split into groups

<iframe src="/assets/notebooks/groupby.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Aggregatikon

Compute a summary statistic about each group.

<iframe src="/assets/notebooks/groupby-aggregation.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Transformation

Perform some group-specific computations and return an object that is the same size as the one being grouped.

<iframe src="/assets/notebooks/groupby-transformation.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Filtration

Discard data with some condition.

<iframe src="/assets/notebooks/groupby-filtration.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Group by](https://pandas.pydata.org/pandas-docs/stable/user_guide/groupby.html) in the 
  [panda User Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html).





