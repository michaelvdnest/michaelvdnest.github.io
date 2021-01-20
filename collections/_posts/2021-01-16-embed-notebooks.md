---
layout: single
classes: wide
title:  "Embed Jupyter Notebooks in Jekyll"
date:   2021-01-16 17:18:45 +0200
category: jupyter
tags: post jupyter
---

It is possible to embed Jupyter notebooks into a post. 

**Step 1:** Create a js script file in `assets/js/` containing the following 
function.

```js
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 50 + 'px';
}
```

**Step 2:** Add the script file to the `head_scripts` array in `_config.yml`.

```yaml
head_scripts:
  - /assets/js/notebook-script.js
```

**Step 3:** Place the jupyter notebooks ('.ipynb' files) into a notebooks 
directory in your sites project directory.

```bash
your-project
└── _ipynb/
    ├── sample-dataframe.ipynb
    ├── sample-plot.ipynb
```

**Step 4:** Create a notebooks directory in the assets directory. The converted
notebook html files are stored in this notebooks directory.

```bash
your-project
└── assets/
    └── notebooks/
```

**Step 5:** Execute and convert the jupyter notebook to html.

```bash
jupyter nbconvert sample-plot.ipynb --execute --to html --output-dir=../assets/notebooks/
```

**Step 6:** Add the following line where you want to the embed the
notebook.

```html
<iframe src="/assets/notebooks/sample-dataframe.html" frameBorder="0" 
 width="100%" height="100%" scrolling="no" onload="resizeIframe(this)"></iframe>
```

## Examples

Below are some examples of embedded notebooks.

### Embedded Dataframe

An example of an embedded pandas dataframe.

<iframe src="/assets/notebooks/sample-dataframe.html" frameBorder="0"
 width="100%" height="100%" scrolling="no" onload="resizeIframe(this)"></iframe>

### Embedded Plot

An example of an embedded matplotlib plot.

<iframe src="/assets/notebooks/sample-plot.html" frameBorder="0"
 width="100%" height="100%" scrolling="no" onload="resizeIframe(this)"></iframe>


## References

[https://cduvallet.github.io/posts/2018/03/ipython-notebooks-jekyll](https://cduvallet.github.io/posts/2018/03/ipython-notebooks-jekyll)
[https://gist.github.com/dkmehrmann/3fd9e8b89a6e442fdc8787a4c1dbf4f2/](https://gist.github.com/dkmehrmann/3fd9e8b89a6e442fdc8787a4c1dbf4f2/)
[https://salihmarangoz.github.io/How-to-Embed-Jupyter-Notebooks-to-Jekyll/](https://salihmarangoz.github.io/How-to-Embed-Jupyter-Notebooks-to-Jekyll/)
