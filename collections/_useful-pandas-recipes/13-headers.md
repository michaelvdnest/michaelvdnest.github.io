---
title: "Headers"
permalink: /useful-pandas-recipes/headers/
excerpt: "Working with column headers."
last_modified_at: 2021-01-29
toc: true_false
---

## CSV Header Row

Select the rows to skip and which row to use for the column names with the `skiprows` and
`header` parameters of `read_csv`.

<iframe src="/assets/notebooks/headers-csv.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

Working with column headers.

## First Row as Headers

Promotes the first row of values as the new column headers.

<iframe src="/assets/notebooks/headers-promote.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Headers as First Row

Demotes the column headers to the first row of values.

<iframe src="/assets/notebooks/headers-demote.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## See also

* [Replacing header with top row](https://stackoverflow.com/questions/31328861/python-pandas-replacing-header-with-top-row)