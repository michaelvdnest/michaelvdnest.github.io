---
title: "Tidy Data"
permalink: /useful-pandas-recipes/tidy-data/
excerpt: "Tidy Data"
last_modified_at: 2021-02-09
toc: true
---


## Columns containing values, not variables

In the pew dataset column headers are values and not variable names.

<iframe src="/assets/notebooks/tidy-data-pew.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>


## Columns containing multiple variables

In the tuberculosis (TB) dataset columns contain multiple values: sex and age.

<iframe src="/assets/notebooks/tidy-data-tb.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Variables in both rows and columns

In the weather dataset variables are stored in individual columns (id, year, month), spread across columns (day, d1-d31) 
and across rows (tmin, tmax).

<iframe src="/assets/notebooks/tidy-data-weather.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Multiple observational units in a table (normalization)

Each type of observational unit should be stored in its own table. The billboard dataset needs to
be broken down into two datasets: a song dataset which stores artist, song name and time, and a
ranking dataset which gives the rank of the song in each week.

<iframe src="/assets/notebooks/tidy-data-billboard.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## A single observational unit is stored in multiple tables.


