+++
aliases      = []
categories   = ["Software"]
date         = "2016-02-05T08:49:53+00:00"
description  = "Numerus is a library to convert from and to roman numerals. I rewrote it from Java to C, making it a lot better and faster"
draft        = false
highlight    = false
slug         = "numerus-v2-0-0-released"
tags         = ["Development", "Software", "GitHub", "Numerus", "Roman numerals", "Library", "C"]
title        = "Numerus v2.0.0 released"
type         = "post"
weight       = 0
+++


[Numerus](https://github.com/TheMatjaz/Numerus), my roman numerals library has
been completely updated!


## Java Numerus becomes jNumerus

First of all, the Java library for roman numerals has been renamed from
_Numerus_ to _[jNumerus](https://github.com/TheMatjaz/jNumerus)_ and it's
development is discontinued. There are some potential improvements in some
_feature/_ branches, but they will probably stay there.


## Rewritten in C, more features and optimizations

On the other hand, the project has been ported and **completely rewritten in
C**. Some careful optimization has been done with many added features like
support for numerals with values outside `[-3999, 3999]` and float values and
numerals. For more info, check out the
[changelog](https://github.com/TheMatjaz/Numerus/blob/master/CHANGELOG.md). Also
bugfixeeees!


## More documentation and clean code

[Doxygen generated documentation](http://thematjaz.github.io/Numerus/) of the
code tries to help as much as possible any library user.


## Still available as a command line utility

The C version also support a command line interface (CLI) useful for on-the-fly
conversions and pipelining, since every main argument is parsed as a command of
the internal Numerus shell.

