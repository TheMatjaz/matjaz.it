+++
aliases = []
categories = ["Blog"]
date = "2016-07-13T01:30:51+00:00"
description = "Hugo and its themes by default don't always offer the best settings to make your website friendly for search engines to index or for browsers to understand or for humans to wrap their heads around. Let's make a checklist of technical but easy things to change for the first group: make it machine-friendly."
draft = false
highlight = true
slug = "hugo-power-user-make-it-web-friendly-1"
tags = ["Hugo power user", "Hugo", "Blog", "Standard"]
title = "#HugoPowerUser: make it web friendly pt. 1"
type = "post"
weight = 0

+++

Welcome to the third post of the series
**[Hugo Power User](/tags/hugo-power-user/)**. Today we'll explore some ways to
make your website a little more compatible with some technical web standards and
best practices with the final goal to make your website more understandable for
browsers and search engines.

Note: whenever I mention any Hugo directory such as `layouts/`, use the Hugo
website root directory or the one in the theme directory accordingly to your
setting. Usually Hugo tries the root directories first and then the theme ones,
if nothing is found.


## Choose a Hugo theme first

If you are a web developer you may know better tricks than me, but my line of
work is: **pick a theme you like and customize it**. The theme was developed by
somebody with more experience and will probably be responsive, elegant and have
some design guidelines. Changing and tweaking something already stable is easier
than writing it from scratch. After that, you can share your changes with the
theme author! Let's keep it open source!

> **After the choice of the theme** you may proceed to the next steps because
> they are chaining some files (like the header file) which is part of the theme
> itself.


## UTF-8 encoding

What is this? Google is your friend, there are tons of articles about this, but
let me break it down in one sentence: it's a character encoding standard that
**let's you write any character in a file and make it readable anywhere** -
Latin alphabet, Greek, Cyrillic, Chinese, ancient Egyptian, anything. **There is
no reason NOT to use it**.

> Use it always, not just for this website.

How to use it? Ensure all your files are saved with UTF-8 encoding (not ANSI or
some other things). That's it! If possible set your text editor to _always_ save
them that way.


### Explicitly state UTF-8 in HTML files

At the start of the `<head>` section of your HTML files, put the following line

```html
<meta charset="utf-8"/>
```

which states that the file is UTF-8 encoded. This is an explicit statement that
browsers may find useful in rendering the content.


### Explicitly state UTF-8 in HTTP reply headers

Web a web server, the program that sends you a webpage when you request it,
sends you a file using the HTTP protocol, it states in the HTTP header of the
reply (basically metadata) the encoding of the file (the data itself you asked
for). This speeds up the process of understanding how to interpret the file.

**After setting every text content of your website to UTF-8** encoding, access
the [.htaccess](https://varvy.com/pagespeed/htaccess.html) file of your
website. Of course this works if you or your hosting provider are using Apache
as a web server. Adapt this solution to your case, if not.

If there is none yet, put one in the `static/` directory of your Hugo
website. It's a configuration file for the web server; Google it for more info.

You'll need to add this lines (if you don't know where, at the end of the file
is fine):

```nginx
# Set HTTP headers for Charset
AddDefaultCharset UTF-8
```


## Content language

As for the encoding, stating the language of your content is useful for a
browser, especially for multilingual sites. A browser may state a preferred
language and get the website in that language, if available.

For monolingual websites, you'll need to put a line like this in the Hugo
configuration file with your
[language code](http://www.lingoes.net/en/translator/langcode.htm ):

```
languageCode = "en-US"
```

Verify if your HTML header file, which will probably be in the
`layout/partials` directory, has a line such as:

```html
<html lang="{{ with .Site.LanguageCode }}{{ . }}{{ else }}en-US{{ end }}">
```

If there is just some `<html>`, substitute is with the one above and will insert
the language of the HTML document at the very start of the document. It's
similar to the UTF-8 process.

I'm not experienced in plurilingual websites with Hugo, although there are
[some guidelines](https://gohugo.io/tutorials/create-a-multilingual-site/).


### Explicitly state content language in HTTP reply header

Just as for the UTF-8 configuration of HTTP transmission metadata, do the same
for content language by adding the following lines to the `.htaccess` file:

```nginx
# Set HTTP headers for Content language
DefaultLanguage en-US
```


## Meta tags in the HTML head

The HTML `<head>` section contains usually many `<meta>` tags which store some
metadata about the document or the website. There are
[many of those](http://www.w3schools.com/tags/tag_meta.asp). We saw the one
about encoding before, now we dive into some others that may help search engines
to understand what your website is about to be able to place it in the correct
search results.

There are four tags we need to cover:

- _author:_ name of the author of the page
- _keywords:_ comma-separated list of keywords relevant to the page
- _description:_ a description of the page
- _generator:_ software used to generate the page

The example of my meta tags should make it clear for you

```html
<meta name="author" content="Matjaž Guštin"/>
<meta name="keywords" content="Matjaž, Guštin, blog, software, sysadmin, database, security, privacy, Unix, Linux"/>
<meta name="description" content="Software, privacy and system administration"/>
<meta name="generator" content="Hugo 0.16" />
```


## Sitemap for search engines

A sitemap is a file containing links to all pages, posts and content of your
website with their publishing/updating date and time. This is useful **for
search engines to know if there is something new** on your website for them to
update their results. It's **not a file for humans, but for computers and
programs**.

[Hugo generates a sitemap](https://gohugo.io/templates/sitemap/) XML file
automatically and puts it in your website's root, such as
`http(s)://yourdomain.com/sitemap.xml`.  You can check mine on
[matjaz.it/sitemap.xml](/sitemap.xml). Remember this file is for a program, not
a human.

Enable the sitemap option in the Hugo configuration file:

```
[sitemap]
    changefreq = "weekly"
    priority = 0.5
```

You'd probably desire to tell Google about your website so they can index it and
show it in the results. Just access to
[Google Webmaster Tools](https://www.google.com/webmasters/), add your website
and post a link to your `sitemap.xml` there.


## robots.txt

The _robots.txt_ is a very simple configuration file that specifies to web
crawlers and other web-exploring programs which areas of the website should not
be processed or scanned. Check
[the Wikipedia page](https://en.wikipedia.org/wiki/Robots_exclusion_standard)
for more information about it.

Please note this file **does not make a part of your website private**. It will
still be published and publicly reachable. It's just a suggestions for (mostly)
search engines about what should they show or not in their results. Creating one
**explicitly tells that search engines may index your website**, which is
probably what you desire.

The _robots.txt_ is a simple text file you should put in the website's root
directory, so it will available on `http(s)://yourdomain.com/robots.txt`. You
can check mine on [matjaz.it/robots.txt](/robots.txt).

With Hugo you have two choices:

- create a static `robots.txt` in the `static/` directory
- let [Hugo generate one](https://gohugo.io/extras/robots-txt/) for you based on
  a template you write in `layouts/robots.txt`. Enable the option
  `enableRobotsTXT = true` in the Hugo configuration file

For instance my _robots.txt_ is generated by Hugo because it includes the
(absolute) URL to the website's sitemap which makes it portable on any website:

{{< code text >}}
User-agent: *
Disallow: /directory-not-to-track/
Sitemap: {{ .Site.BaseURL }}sitemap.xml
{{< /code >}}


## Linking the RSS feed in the HTML head

[Web feeds](https://en.wikipedia.org/wiki/Web_feed) are a powerful tool to find
out if a website has some new content we haven't seen yet. Simple and awesome.

Huge generates a RSS web feed automatically! Isn't that awesome? It's placed in
the `index.xml` file in the website's root. You can find mine at
[matjaz.it/index.xml](/index.xml), for instance.

The problem is that feed readers will not find it if you don't publicly declare
the link to it. Do it by adding the following line to your header file in the
`<head>` section:

```html
{{ if .Site.RSSLink }}<link rel="alternate" href="{{ .Site.RSSLink }}" type="application/rss+xml" title="{{ .Site.Title }}"/>{{ end }}
```

Now scanning your home page with a feed reader will offer some results!


### Bonus tip: redirection from old feed reader links

Since Wordpress has a different feed link `yourdomain.com/feed/`, after the
switch to Hugo, the feed subscription to my website broke. I fixed it adding a
301-Permanent HTTP redirection to the `.htaccess` file by adding the line:

```nginx
# Redirect Wordpress RSS feed URL to Hugo RSS feed URL
RedirectMatch 301 (?i)^/feed/?(index.xml)?$ http://matjaz.it/index.xml
```


## More to come

That was it about making your website better for search engines and browsers. In
the next post we'll make it a little better for humans.

{{< series "Hugo Power User" >}}
