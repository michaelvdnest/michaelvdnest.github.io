---
title: "Rename"
permalink: /useful-pandas-recipes/rename/
excerpt: "Rename column names."
last_modified_at: 2021-02-01
toc: true
---

A common operation on a `DataFrame` is to rename row or column names. On this page, some of the ways 
pandas renames rows and columns are covered.

* Set the `columns` attribute to a list of column names.
* Use the `rename` method to rename specific rows and columns.
* Use the `set_axis` method to set the names of a row or column
* Use the `rename_axis` to set the names of the axes (instead of the labels).  

## columns

Us the `columns` attribute to set the names of the columns.

<iframe src="/assets/notebooks/rename-columns.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>


## rename

The `rename` method can rename columns and rows using a mapping (a dict or Series) 
or a function applied to each column.

<iframe src="/assets/notebooks/rename-rename.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## set_axis

Use the `set_axis` method to the change the names of the rows or columns. 

<iframe src="/assets/notebooks/rename-set_axis.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>


## rename_axis

Use the `rename_axis` to specify the name of the axis as opposed to the labels.

<iframe src="/assets/notebooks/rename-rename_axis.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

