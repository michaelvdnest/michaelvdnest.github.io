---
title:  "Basic Formatting"
permalink: /sample-posts/basic-formatting/
excerpt: "Basic text formatting."
last_modified_at: 2021-10-17 10:28:13
tags: [documentation,sample]
toc: true
toc_sticky: true
categories:
image:
---

Jekyll offers support for GitHub Flavored Markdown, which allows you to format your posts using the [Markdown syntax](https://guides.github.com/features/mastering-markdown/).

## Styling text

With Markdown, it is possible to emphasize words by making them *italicized*, using *astericks* or _underscores_, or making them **bold**, using **double astericks** or __double underscores__. Of course, you can combine those two formats, with both _**bold and italicized**_ text, using any combination of the above syntax. You can also add a strikethrough to text using a ~~double tilde~~.

| Style                  | Syntax             | Example                                  | Output                                 |
| ---------------------- | ------------------ | ---------------------------------------- | -------------------------------------- |
| Italic                 | `* *` or `_ _`     | `*This text is italicized*`              | *This text is italicized*              |
| Bold                   | `** **` or `__ __` | `**This is bold text**`                  | **This is bold text**                  |
| Bold and nested italic | `** **` and `_ _`  | `**This text is _extremely_ important**` | **This text is _extremely_ important** |
| All bold and italic    | `*** ***`          | `***All this text is important***`       | ***All this text is important***       |
| Strikethrough          | `~~ ~~`            | `~~This was mistaken text~~`             | ~~This was mistaken text~~             |

## Paragraphs

This is what a paragraph looks like. For the purpose of demonstration, the rest of this paragraph and the next paragraph after will mean absolutely nothing. Proin eget nibh a massa vestibulum pretium. Suspendisse eu nisl a ante aliquet bibendum quis a nunc. Praesent varius interdum vehicula. Aenean risus libero, placerat at vestibulum eget, ultricies eu enim. Praesent nulla tortor, malesuada adipiscing adipiscing sollicitudin, adipiscing eget est. Praesent nulla tortor, malesuada adipiscing adipiscing sollicitudin, adipiscing eget est.

Proin eget nibh a massa vestibulum pretium. Suspendisse eu nisl a ante aliquet bibendum quis a nunc. Mauris lobortis nulla et felis ullamcorper bibendum. Phasellus et hendrerit mauris. Proin eget nibh a massa vestibulum pretium. Suspendisse eu nisl a ante aliquet bibendum quis a nunc. Praesent varius interdum vehicula. Aenean risus libero, placerat at vestibulum eget, ultricies eu enim. Praesent nulla tortor, malesuada adipiscing adipiscing sollicitudin, adipiscing eget est.


## Headings

Sometimes it is useful to have different levels of headings to structure your documents. Start lines with `#` to create headings. Multiple `##` in a row denote smaller heading size. The following demonstrate the full range of heading sizes:

```markdown
# Heading One (h1)

## Heading Two (h2)

### Heading Three (h3)

#### Heading Four (h4)

##### Heading Five (h5)

###### Heading Six (h6)
```

# Heading One (h1)

## Heading Two (h2)

### Heading Three (h3)

#### Heading Four (h4)

##### Heading Five (h5)

###### Heading Six (h6)

## Links

You can create an inline link by wrapping link text in square brackets `[ ]`, and then wrapping the URL in parentheses `( )`. 

```markdown
For example, it is very easy to [link to Google!](http://google.com).`
```

For example, it is very easy to [link to Google!](http://google.com).

## Blockquotes

Blockquotes are useful for denoting quotes, or highlighting a large block of text. You can quote text with a `>`.

**Single line blockquote:**

```
> This quote will change your life.`
```

> This quote will change your life.

**Multi line blockquote with a cite reference:**

```
> People think focus means saying yes to the thing you've got to focus on. But that's not what
it means at all. It means saying no to the hundred other good ideas that there are. You have
to pick carefully. I'm actually as proud of the things we haven't done as the things I have
done. Innovation is saying no to 1,000 things.
```

> People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I'm actually as proud of the things we haven't done as the things I have done. Innovation is saying no to 1,000 things.

## Images

To add an image, use `![alt text](<Image url> "Image meta title")`:

{% highlight markdown %}
{% raw %}
![alt text](https://myoctocat.com/assets/images/base-octocat.svg "Example")
{% endraw %}
{% endhighlight %}

![alt text](https://myoctocat.com/assets/images/base-octocat.svg "Example")

## Unordered and Numbered Lists

You can make an unordered list by preceding one or more lines of text with `-`, `*`, or `+`.

{% highlight markdown %}
{% raw %}
- List item 1
* List item 2
+ List item 3
{% endraw %}
{% endhighlight %}

- List item 1
* List item 2
+ List item 3


Numbered lists are made by using numbers instead of bullet points.

{% highlight markdown %}
{% raw %}
1. List item 1
2. List item 2
3. List item 3
{% endraw %}
{% endhighlight %}

1. List item 1
2. List item 2
3. List item 3

### Nested lists

{% highlight markdown %}
{% raw %}
1. First list item
   - First nested list item
     - Second nested list item
{% endraw %}
{% endhighlight %}

1. First list item
   - First nested list item
     - Second nested list item

## Tables

Create tables with pipes `|` and hyphens `-`.

{% highlight markdown %}
{% raw %}
| Title 1           |      Title 2      | Title 3           |           Title 4 |
| ----------------- | :---------------: | :---------------- | ----------------: |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
{% endraw %}
{% endhighlight %}

Align text to the left, right, or center of a column by including colons `:`.

| Title 1           |      Title 2      | Title 3           |           Title 4 |
| ----------------- | :---------------: | :---------------- | ----------------: |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |

{% highlight markdown %}
{% raw %}
| Not-aligned       | Left-aligned      |  Center-aligned   |     Right-aligned |
| ----------------- | :---------------- | :---------------: | ----------------: |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
{% endraw %}
{% endhighlight %}

| Not-aligned       | Left-aligned      |  Center-aligned   |     Right-aligned |
| ----------------- | :---------------- | :---------------: | ----------------: |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |
| lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor | lorem ipsum dolor |

## Horizontal Rule

Can be created by having three or more hyphens `---`, asterisks `***`, or underscores `___`:

``` markdown
---
```

---

## Useful Resources

More information on Markdown can be found at the following links:

- [Markdown Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#code)
- [Quick Markdown Example](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)
- [Markdown Basics](https://daringfireball.net/projects/markdown/basics)
- [GitHub Flavoured Markdown Spec](https://github.github.com/gfm/)
- [Basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/#lists)
