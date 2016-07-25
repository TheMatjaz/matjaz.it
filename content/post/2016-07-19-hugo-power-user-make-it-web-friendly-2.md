a+++
aliases = []
categories = ["Blog"]
date = "2016-07-19T08:10:00+00:00"
description = "There are some things any website may easily have to make visitors feel more at home. Is your favicon all right on all devices? Do you have a human readable sitemap? What about some classic pages like the About page, the Legal notice/Privacy page? The second pare of the checklist of technical but easy things to change, this time to make the website human-friendly."
draft = false
highlight = true
slug = "hugo-power-user-make-it-web-friendly-2"
tags = ["Hugo power user", "Hugo", "Blog", "Standard"]
title = "#HugoPowerUser: make it web friendly pt. 2"
type = "post"
weight = 0

+++

Welcome to the fourth post of the series
**[Hugo Power User](/tags/hugo-power-user/)**. Today we'll explore some ways to
make your website a little more comprehensible for human visitors and meet their
expectations about what they find on your website.

Note: whenever I mention any Hugo directory such as `layouts/`, use the Hugo
website root directory or the one in the theme directory accordingly to your
setting. Usually Hugo tries the root directories first and then the theme ones,
if nothing is found.


## Sitemap for humans

[Varvy.com](https://varvy.com/sitemaps.html) suggests creating a sitemap for
users, for humans, something human-readable in addition to the XML file we've
created in [pt. 1](/hugo-power-user-make-it-web-friendly-1/) of this tutorial.

> Site maps should be a useful way for your visitors to quickly and easily find
> the information they are seeking on your website.
> 
> Often site maps look like an outline. An effective site map typically has only
> text links and does not need to point to every page of your site but it can if
> you feel it is helpful for navigation.

So&hellip; why not?

I created mine with a simple
[Hugo shortcode](https://gohugo.io/extras/shortcodes/), by creating the file
`layouts/shortcodes/human-sitemap.html` containing:

```html
{{/*
    Generates a site map for humans where pages and posts are listed in
    alphabetical order.
*/}}

<h2>Pages</h2>
<ul>
{{ range (where .Site.Pages.ByTitle ".Type" "page") }}
    <li><article itemscope itemtype="http://schema.org/Blog">
        <a href="{{ .Permalink }}">{{ .Title }}</a>
    </article></li>
{{ end }}
</ul>

<h2>Blog posts</h2>
<ul>
{{ range (where .Site.Pages.ByTitle ".Type" "post") }}
    <li><article itemscope itemtype="http://schema.org/Blog">
        <a href="{{ .Permalink }}">{{ .Title }}</a>
    </article></li>
{{ end }}
</ul>
```

and then calling this shortcode in a page in the `content/` folder with `{{</*
human-sitemap */>}}`, same as the filename above. My actual [sitemap](/sitemap/)
is linked in the footer of the website.

You may want to add a redirection rule from `/sitemap.html` to your actual
sitemap (`/sitemap/` in my case) to your web server. I used the `.htaccess` file
by adding:

```nginx
# Site map for humans
RedirectMatch 301 (?i)^/sitemap.html? http://matjaz.it/sitemap/
```


## humans.txt

No, I'm not kidding, it's not a joke. A
[proposal of a web standard](http://humanstxt.org/) exists to spread
`humans.txt` files the same way `robots.txt` files are created but just to
create a simple and standard way to find out who are the people behind a
website.

Again: why not?

To create one, just follow
[their directives](http://humanstxt.org/Standard.html). I'll suggest that you
save the file with Windows newline characters `\r\n` instead of a Unix one `\n`
because it will be readable on more devices with default configurations. Don't
forget to save the file with UTF-8 encoding!

To add the `<link rel="author" href="/humans.txt"/>` to your website's `<head>`
section of the HTML code, edit the header file, which will probably be in the
`layout/partials` directory.

Hugo does not (yet) support a generation of this kind of file, so just make a
static one. Here is [my humans.txt file](/humans.txt).


## Favicon done the perfect way

The Favicon is the small icon/logo of the website you may see in the browser
tab, in the address bar or in the entry in your bookmarks/favorites in your
browser. It may be very simple to create a basic one: a 16x16 `.ico` file - but
the simple is not perfect.

[Real Favicon Generator](https://realfavicongenerator.net/) is the web tool for
your. Just post a high-resolution raster image (PNG, JPG) or a SVG file of the
logo you want to have as your favicon. This tool will create versions for any
mobile and desktop device, browser and operating system in order to have a
cross-compatible icon anywhere.

At the end of the process (check carefully all the settings) choose to place the
image files in the `static/` folder, not in a subfolder, to make them available
as `yourdomain.com/favicon.ico`.

Paste the code the generator gives you in the header partial file and you are
good to go!


## 404 error custom page

Hugo generates a custom 404 error page for you, upon providing a template for it
in `layouts/404.html`. The template may be very simple, check mine here:

```html
{{ partial "header.html" . }}

    <main role="main">
	  <h1 class="entry-title" itemprop="headline">...aaand that's a broken link!</h1>
      <span class="entry-meta"></span>
		<section itemprop="entry-text">
          <p>Technically it's called an <strong>HTTP Error 404</strong>.</p>
          <p>The link you used does not point to anything. Please check it for any typing errors. If you think I have misplaced it, be a kind person and <a href="{{ .Site.BaseURL }}contact/">contact me</a> so I'll fix it. Thanks!</p>
        </section>
    </main>

{{ partial "footer.html" . }}
```

To see my 404 error page, just type any random string after `matjaz.it/`, such
as [matjaz.it/mboNF94nFj983](/mboNF94nFj983).

On some hostings the 404.html generated page is picked automatically for 404
errors. When using an Apache web server, just add the following line to the
`.htaccess` file to make it happen:

```nginx
# 404 custom error page
ErrorDocument 404 /404.html
```


## Choose a license for your content and state it

The content you post on your website should be copyrighted or free for anyone to
use?
[Make your decision early](https://blog.codinghorror.com/pick-a-license-any-license/)
and explicitly state it in the website, for instance in the footer.

If you don't know about [Creative Commons](https://creativecommons.org/), check
their website. Those are licenses for open content providing many variations on
the conditions: only for non-profit, keeping the content free, modify it or
not. On the other hand there is copyright where nobody can use your content
without asking prior permission.

My blog is under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/)
which makes my content free for anyone - they just need to cite my name. That's
it. I've stated it also in my [legal notice](/legal-notice/) page.

You may want to add a link to your content license page or the Creative Commons
page in the HTML head of your pages:

```
<link rel="license" href="https://yourdomain.com/content-license/" />
```


## About page

For a blog a page about the author is very simple to do and needed for any user
who may desire to understand a little about the blog's author.

For a non-blog website, say a local business website, an about page is very
useful for the visitor who didn't really get what the company provides (in that
case, fix the description of why, how and what you do in the homepage) or just
needs some more information.

Nothing complicated. Just place it (or put a redirection link) in
`yourdomain.com/about` which anyone may type in the address bar for simplicity's
sake.


## Contact page

This is the key for any local business website and still important for any blog,
even mine despite having the contact icons in the header of any page. It's great
to link it around to others.

Again, keep the URL simple such as `yourdomain.com/contact`.


## Disclaimer, legal notice, privacy policy, terms of service, cookie law

**I am not a lawyer** but all those statements are important for any business
and may be useful for blogs too. What I did was take some ideas around from some
other websites (especially
[EQAR](https://www.eqar.eu/about/topnav/legal-notice.html)) and blend them
together in [my legal notice](/legal-notice/) page. You may do the same, but for
businesses I suggest getting some information from your lawyer before.

Another time: simple URLs. My legal notice page is placed on `/legal-notice/`
but you will be redirected to it from `/info`, `/tos`, `/terms`, `/privacy` and
more.


## More to come

That was it about making your website a little better for humans by adding some
common content anybody may be looking on any website. More about website
optimizations to come in the next days.

{{< series "Hugo Power User" >}}
