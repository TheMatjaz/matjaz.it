+++
aliases      = []
categories   = ["Software"]
date         = "2016-04-14T17:21:49+00:00"
description  = "Implementing a deck of Poker cards in a SQL database: my solution for it is just a simple table of cards with a lot of columns in it."
draft        = false
highlight    = false
lastmod      = "2016-07-08T18:03:09+02:00"
slug         = "french-playing-cards-for-poker-in-postgresql-mysql-and-sqlite"
tags         = ["Software", "Development", "Database", "SQL", "MySQL", "PostgreSQL", "SQLite", "Poker"]
title        = "French playing cards for Poker in PostgreSQL, MySQL and SQLite"
type         = "post"
weight       = 0
+++


Not much to tell. I thought a nice SQL-programming exercise would be to see how
a deck of cards could be implemented in a database. It's simple and
straightforward but got me thinking a bit.

[Check it out on GitHub](https://github.com/TheMatjaz/sql-playcard). I
programmed different versions of the same solution for PostgreSQL, MySQL and
SQLite (this one in 2 versions). Everything is BSD licensed, use it as you wish.

At first I thought about a _user defined data type_ (yay PostgreSQL!), but then
I realized that the instances of the problem were limited, thus a simple
relation would suffice. A lesson for the future:

> Check for the simplest solution first. If none is found, complicate it a
> little. Repeat.

A standard french playing deck (yes, that's the official name for the _Poker
cards_) contains 52 cards, 13 for each suit, and two jokers. In my solution I
added an additional _Covered card_ for a card with unknown value.

