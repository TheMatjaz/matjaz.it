+++
aliases      = []
categories   = ["Blog"]
date         = "2016-07-29T11:40:43+02:00"
description  = "The #HugoPowerUser series explains a few tricks I learned by converting my blog to Hugo. At the same time I minimized my whole website, cleaning up the theme, removing images, simplifying the home page: I think minimalism works best for a blog where content is much more important than the appearance of the website. Wanna hear why?"
draft        = false
highlight    = false
lastmod      = "2016-07-29T11:40:43+02:00"
slug         = "minimalist-blog-design"
tags         = ["Hugo", "Design", "Blog", "Minimalism"]
title        = "Minimalist blog design: reachable content over looks"
type         = "post"
weight       = 0

+++


> "A designer knows he has achieved perfection not when there is nothing left to
> add, but when there is nothing left to take away."  
> ~ Antoine de Saint-Exupéry

I know, I know, the quote may be overused but I still like it. I think that
keeping a minimal website is great because it gives the visitors whatever they
need and nothing more.


## Why minimalism?

It may not be your design choice, it may not suit you for many reasons (think of
a minimalist, mostly text Disney website - it just doesn't work out, does
it?), but minimalism as a _way of thinking about your website_ forces you to
care about the content and if that content is visible and easily reachable. You
have to think about the utilitaristic design, the content design.

Why do users need my website for? What do they search on it? Who is my audience?


## An example of bad content design: a restaurant's website

Any restaurant's website needs mostly these 3-4 things:

- location information: the address, maybe a map (Google Maps)
- contact information: the phone number for reservations, social media links
  (with Tripadvisor), maybe an e-mail
- opening time: especially on which weekdays is the restaurant is closed
- optional: the menu

Personally I never need anything else when browsing a restaurant's website - any
comment from the customers is usually on third party platforms like
Tripadvisor. Yet I've found a restaurant's website offering everything,
including webcams of their hall but _not any opening time_. I had to call them to
find out that they were closed on Mondays. What the hell do you have a website
for?

**Lesson: think about what do users need on your website.**


## My blog went minimal

> The center of any blog is its content, not its look.

Some photographers post their pictures on their blog, some artists may link and
comment their creations posted elsewhere (Soundcloud, Deviantart etc.),
developers/IT-people share their code and software solutions but mostly blogs
are for textual content. Written words. So that's the key point: **text**.

It should be **simple, readable** without distractions, ads, animated stuff and
anything else.

My blog went through a few theme changes:
[Customizr](https://wordpress.org/themes/customizr/),
[Matheson](https://wordpress.org/themes/matheson/), and then
[Decode](https://wordpress.org/themes/decode/). As you may notice from the
screenshots, the design went steadily from a standard poorly made corporate-like
page to a minimalist blog.

{{< figure 
    src="/images/hugo/thumbnails/matjaz_it_themes.jpg"
    link="/images/hugo/matjaz_it_themes.jpg"
    alt="The four themes the matjaz.it blog had so far"
    title="The four themes the matjaz.it blog had so far"
    caption="Left to right and top down: Customizr, Matheson, Decode and Hugo Zen. Click for full resolution."
>}}

Now with the
[switch from Wordpress to Hugo](/hugo-power-user-reasons-to-choose-hugo/), I've
experimented with even more minimalism, since the website was completely rebuilt
from the very foundation. I've customized the awesome and simple
[Hugo Zen](http://themes.gohugo.io/hugo-zen/) theme with the social/contact
icons of Decode and minified it as much as possible.


## Minimalist blog guidelines

I kept in mind that my blog's **content** should look nice:

- **even without CSS**
- **could work without Javascript**, for instance when using the Tor Browser
- in a command line browser like _links_, _elinks_, _lynx_ or _w3m_
- when printed on paper or PDF
- with [F.lux](https://justgetflux.com/) activated (a great software, BTW) which
  converts your screen colors into orange-yellowish to reduce eye-strain during
  the night
- with F.lux's Darkroom mode activated, which makes your screen black and red
  only, no other colors
- in black and white only
- in negative (inverted colors)
- in browser readers (Firefox and Safari have one integrated)
- while using a screen reader (I'm still working to improve that) - this
  is important for blind visitors or anybody who wants to listed to your last
  post while driving their car

{{< figure 
    src="/images/hugo/thumbnails/matjaz_it_colors.jpg"
    link="/images/hugo/matjaz_it_colors.jpg"
    alt="How matjaz.it looks through color and hue changing programs"
    title="How matjaz.it looks through color and hue changing programs"
    caption="Left to right and top down: normal, black and white, negative, F.lux Darkroom mode. Click for full resolution."
>}}

{{< figure 
    src="/images/hugo/thumbnails/matjaz_it_readers.jpg"
    link="/images/hugo/matjaz_it_readers.jpg"
    alt="How matjaz.it looks with style variations or no styling"
    title="How matjaz.it looks with style variations or no styling"
    caption="Left to right: without CSS, in the Firefox Reader View, in the command line browser w3m. Click for full resolution."
>}}

When all/most of this worked, at least in a decent way, I was reassured that
**my website's content could be reached and read with ease**. Please note that
we are not talking about responsiveness, screen sizes etc. It's quite obvious
that should always be included anyway!

> "But I can't live with all that Javascript and ads and iframes and fonts and 7
> CSS files!!!!"

I do realize it may seem limiting but take it as a challenge or just about a
critical point of view that helps creating a better blog: **it's about the
content, nothing more nothing less**. Why should I develop and administrate more
stuff my users are not visiting my website for?

A simple example: nobody needs featured images of the posts on the home page,
where visitors are still trying to figure out what the website is about and what
article to read. Show them just in the post's webpage. In my case, I removed all
of them completely, since they were mostly meaningless. In case I need a
picture, it will be part of the post body, not a featured one.


## Don't exaggerate!

Of course I'm not posting pure plain _txt_ files on the web. I mean, we are not
in the 1980's, some graphic and typographic design is needed to make the
text readable. Choose a good font, limit the column width so your eyes move just
the right amount while reading and there are text sizes, whitespacing, line
sizes. Oh, and
[never ever justify](http://designforhackers.com/blog/never-justify-type-on-the-web/).

[Here](http://webdesign.tutsplus.com/articles/9-quick-wins-for-halfway-decent-design--cms-19444)
are some guidelines on keeping it simple but nice at the same time.


## Customizing an existing theme for your CMS/blogging platform

If you are a web developer you may know better tricks than me, but my line of
work is: **pick a theme you like and customize it**. The theme was developed by
somebody with more experience and will probably be responsive, elegant and have
some design guidelines. Changing and tweaking something already stable is easier
than writing it from scratch. After that, you can share your changes with the
theme author! Let's keep it open source!

Happy blogging!
