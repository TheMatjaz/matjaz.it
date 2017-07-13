+++
aliases      = []
categories   = ["Software"]
changefreq   = "monthly"
date         = "2017-07-13T20:09:31+02:00"
description  = "Should we use tabs or spaces to indent the code? An eternal dilemma. The most valid points I've ever heard that made me actually think twice."
draft        = false
lastmod      = "2017-07-13T20:09:31+02:00"
priority     = 0.5
slug         = "valid-points-for-the-tabs-vs-spaces-dilemma"
tags         = ["whitespace", "code", "clean", "software", "opinion"]
title        = "Valid points for the tabs vs. spaces dilemma"
type         = "post"
weight       = 0
highlight    = true
+++

Should we use tabs or spaces to indent the code? An eternal dilemma.

Some weeks ago our team at work had to take this decision and the consequences
were obviously that we were not able to decide without a discussion. The debate
spawned a some valid points I never heard before, so here are my favorites.


## For tabs

1. Developers with impaired vision may prefer bigger indentations (4+ spaces) to
   read better. Tabs are perfect because anyone can set his/her own IDE to show
   them as any desired amount of spaces.


## For spaces

1. As the tabs are only one character on-disk but may be displayed as more, they
   make it impossible to follow the 80-characters-per-line rule. A developer
   tries to respect the rule by having the tabs shown as 2 spaces but the same
   lines will be longer on another developer's IDE rendering tabs as 4 or 8
   spaces. The rule is still useful to have an IDE window with a vertical split
   showing two documents in parallel on the same monitor.
1. For the same reason any vertical alignment of the code could not be done with
   tabs. Examples are initializations or list elements or SQL code when
   formatted like in the [sqlstyle.guide](http://sqlstyle.guide/), especially
   when embedding a query in a program written in another language
   e.g. Python.


## My choice

When I have a choice, I go for spaces (please don't hate me) mostly because of
the SQL code as in the last point and the 80 characters rule.
