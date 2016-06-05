---
author: matjaz_admin
comments: true
date: 2015-11-30 20:51:48+00:00
layout: post
link: http://matjaz.it/wget-retry-until-completed-alias/
slug: wget-retry-until-completed-alias
title: Wget retry-until-completed alias
wordpress_id: 525
categories:
- Computer Tricks
tags:
- alias
- bash
- connection
- download
- shell
- Software
- unstable
- wget
---

`wget` is a great tool and may be used also in case of a low bandwidth. It works also when the connection with a server is unstable for some reason and the download of a file simply fails way to many times.

With this parameters wget tries and retries to download a specific file from an URL until it is completely finished. Also it does not restart the download from the beginning but continues from where it has stopped.

[bash]
wget --tries=0 --retry-connrefused --continue --progress=bar --show-progress --timeout=30 --dns-timeout=30 --random-wait --background --append-output=/var/log/wget_background URL
[/bash]

It is most useful as an alias in your `~/.bashrc` or `~/.zshrc` or whatever shell you're using:

[bash]
alias wget-infinite="wget --tries=0 --retry-connrefused --continue --timeout=30 --random-wait --background --append-output=/tmp/wget_background"
[/bash]

Note for OS X: if you installed `wget` through `brew`, you may need the `--with-iri` installation option.

To check the current status of your download (if there is only one simultaneous download), run:

[bash]
tail -2 /var/log/wget_background | head -1
[/bash]

which can be saved as an alias as well:

[bash]
alias wget-infinite-status="tail -2 /tmp/wget_background | head -1"
[/bash]
