---
title: "Concatenation"
permalink: /pandas-notes/concat/
excerpt: "Append rows and columns of DataFrames."
last_modified_at: 2021-01-21
toc: true
---

## Rows

Combine DataFrames vertically.

![concat-rows]({{ site.url }}{{ site.baseurl }}/assets/images/concat-rows.png)

```python
pd.concat([df1, df2])
```

<iframe src="/assets/notebooks/concat-rows.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Columns

Combine DataFrames horizontally.

![concat-cols]({{ site.url }}{{ site.baseurl }}/assets/images/concat-cols.png)

```python
pd.concat([df1, df2], axis=1)
```

<iframe src="/assets/notebooks/concat-cols.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Concatenating objects](https://pandas.pydata.org/pandas-docs/stable/user_guide/merging.html#concatenating-objects)