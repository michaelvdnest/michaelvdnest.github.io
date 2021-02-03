---
title: "Choose Rows"
permalink: /pandas-notes/choose-rows/
excerpt: "Select rows in the dataset."
last_modified_at: 2021-01-19
toc: true
header:
  teaser: /assets/images/choose-rows.png
---

Select rows in the dataset.

![dataframe]({{ site.url }}{{ site.baseurl }}/assets/images/choose-rows.png)

## Top and Bottom Rows

Return the first or last *n* rows.

<iframe src="/assets/notebooks/choose-rows.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Range of Rows

Return a range of rows from the dataset. The **indexers** `.loc` and `.iloc` have the ability to 
select data from the dataset by label and location respectively.

<iframe src="/assets/notebooks/choose-rows-range.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### See also

* [pandas.DataFrame.loc](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html)
* [pandas.DataFrame.iloc](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html)

## Filter Rows

### Boolean indexing

Use of boolean vectors to filter the data. The operators are: `|` for or, `&` for and, and `~` for not.

<iframe src="/assets/notebooks/choose-rows-filter.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### Using isin

Combine DataFrame’s `isin` with the `any()` and `all()` methods to quickly select subsets of your
data that meet a given criteria. This is useful for the cases when you don’t know which of the sought
labels are in fact present.

<iframe src="/assets/notebooks/choose-rows-isin.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### Using query

The `query()` method allows selection using an expression.

<iframe src="/assets/notebooks/choose-rows-query.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### See also

* [Boolean indexing](https://pandas.pydata.org/docs/user_guide/indexing.html#boolean-indexing)
  in the [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html).

* [Indexing with isin](https://pandas.pydata.org/docs/user_guide/indexing.html#indexing-with-isin)
  in the [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html).

* [The query() method](https://pandas.pydata.org/docs/user_guide/indexing.html#the-query-method)
  in the [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html).

## Duplicates

The methods `duplicated` and `drop_duplicates` identify and remove duplicate rows in a DataFrame.
A subset of columns can be used to identify duplicates. 

<iframe src="/assets/notebooks/choose-rows-dupl.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### See also

* [Duplicate data](https://pandas.pydata.org/docs/user_guide/indexing.html#duplicate-data)
  in the [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html).
