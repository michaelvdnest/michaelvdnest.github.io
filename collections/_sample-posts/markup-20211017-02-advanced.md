---
title:  "Advanced Formatting"
permalink: /sample-posts/advanced-formatting/
excerpt: "Advanced text formatting."
last_modified_at: 2021-10-17 10:26:02
tags: [markup,syntax highlighting, embed, documentation,sample]
toc: true
toc_sticky: true
categories:
image:
---

Formatting like syntax highlighting and embedding other sites allows you to arrange complex information.

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers - like GitHub or most Jekyll themes - support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. You can find the full list of supported programming languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers). Also, it is possible to do `fenced code blocks`, by wrapping the text in ` ` ` quotations.

### Fenced code blocks

{% highlight plaintext %}
```
No language indicated, so no syntax highlighting.
```
{% endhighlight %}

```
No language indicated, so no syntax highlighting.
```

### Markdown syntax highlighting

Add an optional language identifier to enable syntax highlighting in your fenced code block.

{% highlight plaintext %}
```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```
{% endhighlight %}


```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

### Rouge syntax highlighting

{% highlight plaintext %}
{% raw %}
{=% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}
{% endraw %}
{% endhighlight %}

{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

### Embed Gist

Another option is to embed your code through [Gist](https://gist.github.com/).


{% highlight js %}
{% raw %}
<script src="https://gist.github.com/mojombo/19.js"></script>
{% endraw %}
{% endhighlight %}

<script src="https://gist.github.com/mojombo/19.js"></script>

## Embedding

Plenty of social media sites offer the option of embedding certain parts of their site on your own site, such as YouTube and Twitter:

### Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/w3jLJU7DT5E" frameborder="0" allowfullscreen></iframe>

### Twitter

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Jekyll 4.2.1 has been released! This is a bug fix release for the 4.2 release series and more info on the included fixes can be found on the announcement post! <a href="https://t.co/jo0yl3Q8wI">https://t.co/jo0yl3Q8wI</a></p>&mdash; jekyll (@jekyllrb) <a href="https://twitter.com/jekyllrb/status/1442477550429671429?ref_src=twsrc%5Etfw">September 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Inline HTML elements

HTML defines a long list of available inline tags, which you can mix with Markdown if you like. A complete list of which can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## Useful Resources

More information on Markdown can be found at the following links:

- [Markdown Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#code)
- [Quick Markdown Example](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)
- [Markdown Basics](https://daringfireball.net/projects/markdown/basics)
- [GitHub Flavoured Markdown Spec](https://github.github.com/gfm/)
- [Basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/#lists)
