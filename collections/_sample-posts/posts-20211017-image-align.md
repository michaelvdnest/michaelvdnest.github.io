---
title:  "Image Alignment"
permalink: /sample-posts/image-alignment/
excerpt: "Basic text formatting."
last_modified_at: 2021-10-17
categories:
  - markup
tags:
  - markup
  - sample post
  - image
  - content
toc: true
toc_sticky: true
image:
---

Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let's get started.

## Center

```markdown
![image-center](/assets/images/image-500x300.png){: .align-center}
```

![image-center](/assets/images/image-500x300.png){: .align-center}

The image above happens to be **centered**.

And just when you thought we were done, we're going to do them all over again with captions!

```html
<div style="align: left; text-align:center;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-500x300.png" alt="">
  <figcaption>Look at 580 x 300 getting some love.</figcaption>
</div>
```

<div style="align: left; text-align:center;">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-500x300.png" alt="">
  <figcaption>Look at 580 x 300 getting some love.</figcaption>
</div>

## Left

```markdown
![image-left](/assets/images/image-150x150.png){: .align-left}
The rest of of this paragraph is filler for the sake of see the text wrap around the ...
```

![image-left]({{ site.url }}{{ site.baseurl }}/assets/images/image-150x150.png){: .align-left} The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**.

As you can see there should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we'll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it's thing. Mission accomplished!

```html
<figure style="width: 150px" class="align-left">
  <img src="/assets/images/image-150x150.png" alt="">
  <figcaption>Itty-bitty caption.</figcaption>
</figure>
```

<figure style="width: 150px" class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-150x150.png" alt="">
  <figcaption>Itty-bitty caption.</figcaption>
</figure>

The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**.

As you can see there should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we'll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it's thing. Mission accomplished!

## Right

```markdown
![image-right](/assets/images/image-300x200.png){: .align-right}

And now we're going to shift things to the right align. Again, there should be plenty of ...
```

![image-right](/assets/images/image-300x200.png){: .align-right}

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah --- Just like that. It never felt so good to be right.

{% highlight html %}
{% raw %}
<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-300x200.png" alt="">
  <figcaption>Feels good to be right all the time.</figcaption>
</figure>
{% endraw %}
{% endhighlight %}

<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-300x200.png" alt="">
  <figcaption>Feels good to be right all the time.</figcaption>
</figure>

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah --- Just like that. It never felt so good to be right.

## No alignment

And now for a **massively large image**. It also has **no alignment**.

```markdown
![no-alignment](/assets/images/image-1440x300.png)
```

![no-alignment](/assets/images/image-1440x300.png)

The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.

And now for a **massively large image**. It also has **no alignment**.

```html
<figure style="width: 1200px">
  <img src="/assets/images/image-1440x300.png" alt="">
  <figcaption>Massive image comment for your eyeballs.</figcaption>
</figure>
```

<figure style="width: 1200px">
  <img src="/assets/images/image-1440x300.png" alt="">
  <figcaption>Massive image comment for your eyeballs.</figcaption>
</figure>

The figure element above has an inline style of `width: 1200px` set which should break it outside of the normal content flow.

## Next to each other

If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Two

Apply the `half` class like so to display two images side by side that share the same caption.

```html
<figure class="half">
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <figcaption>Caption describing these two images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="half">
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <figcaption>Two images.</figcaption>
</figure>

### Three

Apply the `third` class like so to display three images side by side that share the same caption.

```html
<figure class="third">
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <a href="/assets/images/image-1200x300.png"><img src="/assets/images/image-1200x300.png"></a>
  <figcaption>Three images.</figcaption>
</figure>

And that's a wrap, yo! You survived the tumultuous waters of alignment. Image alignment achievement unlocked!