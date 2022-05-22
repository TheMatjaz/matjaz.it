+++
aliases      = ["sw", "numerus"]
date         = "2016-02-05 08:35:12+00:00"
description  = "A list of software I made."
draft        = false
hidefromhome = true
highlight    = false
lastmod      = "2022-05-22T15:56:48+02:00"
slug         = "software"
title        = "Software"
type         = "page"
weight       = 0
+++


I like to write open source programs, you can find all my code on
[GitHub](https://github.com/TheMatjaz).

## Cross-platform C

### [CAN Bus Security protocol and implementation](/cbs/)

The CAN Bus Security (CBS) protocol cryptographically secures the communication 
between microcontrollers connected via a CAN FD bus, providing protection
against sniffing, spoofing and replay attacks.

CBS offers a simple and centralised client-server architecture based solely on 
symmetric cryptographic primitives, inspired by the Kerberos protocol. This 
allows a fast communication start-up and a simple reconfiguration or 
replacementof clients, e.g., in case of hardware failures.


### [LibAscon](https://github.com/TheMatjaz/LibAscon)

LibAscon is an ISO C99/C11 cryptographic library based on the
[reference C implementation](https://github.com/ascon/ascon-c)
of the Ascon family of lightweight authenticated encryption 
schemes with associated data (AEAD) and hashing functions, but it also includes 
Init-Update-Final processing and variable tag length. Heavily tested and ready 
for embedded systems!


### [LibISAAC](https://github.com/TheMatjaz/LibISAAC)

LibISAAC offers the tiny and fast
[ISAAC](https://www.burtleburtle.net/bob/rand/isaacafa.html) cryptographically
secure pseudo random number generator (CSPRNG), in its 32-bit and 64-bit version
wrapped into a modern, ISO C11, documented API, ready for embedded usage.


### [Atto](https://github.com/TheMatjaz/atto)

Atto is the simplest-to-use C unit test framework, in just one header file, without malloc(), without fork(), without dependencies, ready for embedded systems that can at least call printf() - and even those who cannot, can easily adapt it!


### [Numerus](https://github.com/TheMatjaz/Numerus)

A comprehensive C library for conversion and manipulation of
**[roman numerals](https://en.wikipedia.org/wiki/Roman_numerals)**.

This library allows you to convert roman numerals to values and values to roman
numerals, adds some extensions to them to **support big and float values** that
other converters of the same kind usually don't, focuses on **optimization,
clean code and error handling**. Also offers a **Numerus shell** to convert
values on-the-fly or by pipelining (on Unix-like OS) without the need to include
the library in an existing project.

### [VCAN](https://github.com/TheMatjaz/VCAN)

VCAN is a tiny virtual CAN and CAN-FD bus in C

Especially useful for debugging and testing without using actual
CAN-connected devices, VCAN is a tiny C library that allows the user to connect
virtual nodes on a virtual bus and make them react whenever someone transmits a
message on the bus.



## Python

### [Rangeforce](https://github.com/TheMatjaz/Rangeforce)

Developer-friendly range checks with user-friendly error messages.

[Find it on Pypi.org!](https://pypi.org/project/Rangeforce/)


### [Contfrac](https://github.com/TheMatjaz/contfrac)

Continued fractions are a representation of numbers expressed as recursive sums 
of integer parts and reciprocals of other numbers. ContFrac is a pure-Python3 
lightweight module to compute and evaluate continued fractions, as well as 
using them to approximate any number.

[Find it on Pypi.org!](https://pypi.org/project/Contfrac/)


### [Minihit](https://github.com/TheMatjaz/minihit)

A Python solver for the minimal hitting set problem commonly found as part of 
model-based diagnosis problems.



## Other

### [My StoneScript](https://github.com/TheMatjaz/StoneScript)

My StoneScript code used in the **amazing** ASCII-art game [Stone Story
RPG](https://store.steampowered.com/app/603390/Stone_Story_RPG/)
to automate it.

### [SQL Playcard](/french-playing-cards-for-poker-in-postgresql-mysql-and-sqlite/)

A simple SQL script to represent and store **standard french playing cards**
(those used in Poker) **for a few RDBMS**.

### [My dotfiles](https://github.com/TheMatjaz/dotfiles)

Yet another **dotfiles repository** but now with **one git-branch per OS** each
with its own installer and updater scripts. Dotfiles are configuration files on
Unix-like OS for user customization for text editors, shells, aliases and so on
saved in the home directory as `.filename`.
