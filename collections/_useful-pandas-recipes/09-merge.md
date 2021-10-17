---
title: "Merging"
permalink: /useful-pandas-recipes/merge/
excerpt: "Merge datasets with a database-style join."
last_modified_at: 2021-01-25
toc: true
---

Merge DataFrame or named Series objects with a database-style join. The join is done on columns or indexes.

## Inner Join

Inner join produces a data set that includes rows from the left table which have matching rows from the right table.

![inner-join]({{ site.url }}{{ site.baseurl }}/assets/images/inner-join.png)

<iframe src="/assets/notebooks/merge-inner-join.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Left Join

Left join produces a dataset that includes all rows from the left table and the matching rows from the right table.

![left-outer-join]({{ site.url }}{{ site.baseurl }}/assets/images/left-outer-join.png)

<iframe src="/assets/notebooks/merge-left-join.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

Select the rows that are available only in the left table but not in the right table.

![left-outer-join-exclusive]({{ site.url }}{{ site.baseurl }}/assets/images/left-outer-join-exclusive.png)

<iframe src="/assets/notebooks/merge-left-join-exclusive.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>


## Right Join

Right join produces a dataset that includes all rows from the right table and the matching rows from the left table.

![right-outer-join]({{ site.url }}{{ site.baseurl }}/assets/images/right-outer-join.png)

<iframe src="/assets/notebooks/merge-right-join.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

Select the rows that are available only in the right table but not in the left table.

![right-outer-join-exclusive]({{ site.url }}{{ site.baseurl }}/assets/images/right-outer-join-exclusive.png)

<iframe src="/assets/notebooks/merge-right-join-exclusive.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Outer Join

Outer join produces a dataset that contains all rows from both left and right tables.

![full-outer-join]({{ site.url }}{{ site.baseurl }}/assets/images/full-outer-join.png)

<iframe src="/assets/notebooks/merge-full-outer-join.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

Select the rows that exist either in the left or right table and exclude the rows that are common to both tables.

![full-outer-join-exclusive]({{ site.url }}{{ site.baseurl }}/assets/images/full-outer-join-exclusive.png)

<iframe src="/assets/notebooks/merge-full-outer-join-exclusive.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Merging](https://pandas.pydata.org/pandas-docs/stable/user_guide/merging.html#merging-join)
in the [pandas User Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html).

* [Comparison with SQL](https://pandas.pydata.org/pandas-docs/stable/getting_started/comparison/comparison_with_sql.html#compare-with-sql-join)
