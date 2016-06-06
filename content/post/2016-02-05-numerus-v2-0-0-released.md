+++
aliases      = []
categories   = ["Privacy and Security"]
date         = "2015-12-02T15:47:19+00:00"
description  = "The first post of this blog"
draft        = false
hidefromhome = false
slug         = "simplesecurity-tips-for-non-techies"
tags         = ["Encryption", "Password", "Security", "Tip"]
title        = "#SimpleSecurity tips for non-techies"
type         = "post"
weight       = 0
+++
---
author: matjaz_admin
comments: true
date: 2016-02-05 08:49:53+00:00
layout: post
link: http://matjaz.it/numerus-v2-0-0-released/
slug: numerus-v2-0-0-released
title: Numerus v2.0.0 released
wordpress_id: 561
categories:
- Development
- Software
tags:
- Development
- GitHub
- Library
- numerals
- Numerus
- roman
- Software
---

[Numerus](https://github.com/TheMatjaz/Numerus), my roman numerals library has been completely updated!



### Java Numerus becomes jNumerus



First of all, the Java library for roman numerals has been renamed from _Numerus_ to _[jNumerus](https://github.com/TheMatjaz/jNumerus)_ and it's development is discontinued. There are some potential improvements in some _feature/_ branches, but they will probably stay there.



### 





### Rewritten in C, more features and optimizations



On the other hand, the project has been ported and **completely rewritten in C**. Some careful optimization has been done with many added features like support for numerals with values outside `[-3999, 3999]` and float values and numerals. For more info, check out the [changelog](https://github.com/TheMatjaz/Numerus/blob/master/CHANGELOG.md). Also bugfixeeees!



### More documentation and clean code



[Doxygen generated documentation](http://thematjaz.github.io/Numerus/) of the code tries to help as much as possible any library user.



### Still available as a command line utility



The C version also support a command line interface (CLI) useful for on-the-fly conversions and pipelining, since every main argument is parsed as a command of the internal Numerus shell.
