+++
aliases = []
categories = ["Blog"]
date = "2016-07-09T09:22:24+02:00"
description = "I tried Hugo before and had a great time. After some more tweaking I moved my blog from Wordpress to Hugo for a variety of reasons. Some are security, speed, customizability and content control. Here I start a series about my steps on empowering my blog the static way."
draft = false
highlight = false
slug = "hugo-power-user-reasons-to-choose-hugo"
tags = ["Hugo power user", "Blog", "Hugo", "Wordpress", "Design"]
title = "Hugo power user: reasons to choose Hugo"
type = "post"
weight = 0

+++


I'm more of a _settings_ person than a _content_ person. I really like to tweak
this blog as much as I can, even more than I like to write some new posts on
it. It's a bit of a playground and a sandbox for new technologies.

This is one of the reasons I switched to [Hugo](https://gohugo.io), the static
website engine. I'll write a series of posts on how I switched from Wordpress
and how I customized the website to suit me.

Welcome to why did I change my blog's design and structure for the 4th time.


## Wordpress is nice for beginners but can be a mess

I'm not a web developer and I get easily lost in nested CSS files. So when I
started my blog (about 2014), I chose [Wordpress](https://wordpress.org) as the
obvious solution. It's a nice engine/CMS, very user-friendly, but requires a lot
of tweaking to make it work decently, especially on a poor hosting as the one I
had first, while updating the Wordpress core, themes, plugins and backups
becomes tedious. If you are a beginner, consider the (free) hosting on
[wordpress.com](https://wordpress.com).

Whenever I wanted to tweak something specific, for instance add an HTML line in
the header I had two choises: install a plugin that does it or learn how to
become a Wordpress developer. After too many plugins changing the content and
database their way, the nested changes were just to much for my hosting to
handle while the quality of the resulting HTML just fell.

I needed something simple that works fast, simply without all the fuzz.


## Why a static website engine?

Think about it: what does a blog offer? **Text**, maybe some images, in a nice
formatted way. The content is mostly static and there is no specific reason to
have a dynamic generator underneath or even a database to handle the content
that could be easily stored in those same HTML files that are served directly.

My reasons for a static website:

- Static websites are **faster**, especially on cheap hosting services. With a
  few tweaks I'll show you in future posts I was able to **minimize the blog
  size** and increase it's speed exponentially. The speed ratings of this
  website reached 100% on some measurements.
- I like Hugo more than like Wordpress, _I love Markdown_ and using my
  editor. Hugo is a kind of software that gives an amazing UX, although is just
  a command line program.
- **No security holes!** There are no dynamic parts and nothing any attacker
  could do. No login forms, no databases, just nothing!
- **No engine, plugins or themes to update**: the Hugo command get's updated
  occasionally but the upgrade is straight forward.
- I can version all my content with **Git** and use other programming best
  practices such as a [Changelog](http://keepachangelog.com/)
- Using Git, the backup of all my content is as simple as a `git push` to a
  (free) remote repository like on BitBucket (private) or GitHub (public) or
  even a local git-remote to an USB key. There is absolutely **no need for
  exports, database dumps, www-folder backups** and so on.

> Basically: once the website is up, there is no managment of it anymore, except
> for content changes.


## Should you use Hugo?

The cons, for any non-tech-savvy user could be:

- You have to write everything with your editor: there is no WYSIWYG writing. On
  the other hand once the website is set up (an expert can help for this part),
  writing the content is just Markdown, which is bloody easy, while Hugo can
  generate and refresh the website locally blazingly fast.
- Using Git is not _that_ user friendly and many people complain about that. Of
  course using Git is not required although it's a mayor advantage.
- The theme needs to be customized manually (footer, header, CSS parts). Againg
  an expert can help for this part.

If those are not a problem for you, then use
[Hugo](https://gohugo.io). Now. Go. Click that link!


{{< series "Hugo power user" >}}
