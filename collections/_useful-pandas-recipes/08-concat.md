---
title: "Concatenation"
permalink: /useful-pandas-recipes/concat/
excerpt: "Append rows and columns of DataFrames."
last_modified_at: 2021-01-21
toc: true
---

Append rows and columns of DataFrames.

## Rows

Combine DataFrames vertically.

```python
pd.concat([df1, df2])
```

![concat-rows]({{ site.url }}{{ site.baseurl }}/assets/images/concat-rows.png)

<iframe src="/assets/notebooks/concat-rows.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Columns

Combine DataFrames horizontally.

```python
pd.concat([df1, df2], axis=1)
```

![concat-cols]({{ site.url }}{{ site.baseurl }}/assets/images/concat-cols.png)

<iframe src="/assets/notebooks/concat-cols.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Concatenating objects](https://pandas.pydata.org/pandas-docs/stable/user_guide/merging.html#concatenating-objects)