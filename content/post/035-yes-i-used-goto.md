+++
type = "post"
slug = "yes-i-used-goto"
draft = false
date = "2018-05-31T21:46:35+02:00"
title = "Yes, I used goto"
highlight = true
lastmod = "2018-05-31T21:46:35+02:00"
priority = 0.5
changefreq = "monthly"
aliases = []
tags = ["software", "development", "goto", "code", "clean code", "c"]
description = "The stigma surrounding the `goto` instruction in C is strong, but it can be useful nevertheless for cleaner code in for error handling as exceptions are not available."
weight = 0
categories = ["Software"]

+++

Yes, I confess my crime: I used the `goto` instruction in my C code. Heresy!

Seriously though, it can be really useful for nicer code in some situations,
namely error handling. In C there are no exception that could be raised/thrown
and caught somewhere else. The `try-catch` block is a very neat way to
distinguish between regular execution and failed execution cleanup/handling.
Pretty much like a transaction, as Robert C. Martin puts it in his book
[Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?ie=UTF8&qid=1527796412&sr=8-1&keywords=clean+code).

As this feature is completely absent in C, it's common practice to use functions
that return an error code. A nice solution is to use an enum with the value `0`
indicating no error and other values the type of error.  Some standard library
functions return pointers or indices to indicate errors as well. Some typical
code looks like this:

```C
status_code_t run(void)
{
    status_code_t status;
    
    status = do_something();
    if (status != STATUS_OK)
    {
        return status;
    }
    status = more_stuff();
    if (status != STATUS_OK)
    {
        return status;
    }
    status = finalize();
    return status;
}
```

As you can see, it is much harder to read than a try-catch block.  In the code
there are multiple operations that could go wrong and the execution has to be
checked and stopped after the first error occurs.


## Single return point

Many coding standards and policies require a single `return` statement per C
function. This complicates the code above as we need a way to remove the
multiple return points.

A colleague of mine showed me and elegant solution using the `do-while(0)`
block. This is a scope that is always executed only once and can be "broken"
from.

```C
status_code_t run(void)
{
    status_code_t status;

    do 
    {
        status = do_something();
        if (status != STATUS_OK)
        {
            break;
        }
        status = more_stuff();
        if (status != STATUS_OK)
        {
            break;
        }
        status = finalize();
    } while(0);   
    return status;
}
```

Sweet! Now we have the same logic with only one `return` statement.

I think it's much better than previously but I'm still unsatisfied for the
following reasons:

1. The indentation level is increased by one. This means that longer lines of
   code reach the line-length limit (say 80 characters) faster, producing more
   wraps and harder legibility.
2. Some linters and code analyzers will complain that the `while(0)` condition
   is always false and could be removed. This happens with the JetBrains CLion
   IDE at the time of writing, for example.
3. A beginner can be confused about the syntax (I admit I was).
4. Nested cycles cannot be broken to the outermost level.

An example for the last point:

```C
status_code_t run(void)
{
    status_code_t status;
    uint8_t i;

    do 
    {
        for (i = 0; i < 100; i++)
        {
            status = do_something();
            if (status != STATUS_OK)
            {
                break;  // This break exits the for, not the do-while.
                        // and `finalize()` will be executed anyway.
                        // `goto termination` would do the trick.
            }
            status = more_stuff();
            if (status != STATUS_OK)
            {
                break;  // This break exits the for, not the do-while.
                        // and `finalize()` will be executed anyway.
                        // `goto termination` would do the trick.
            }
        }
        status = finalize();
    } while(0);
    return status;
}
```


## The solution with `goto`

Mostly for the last point this is the syntax I personally prefer:


```C
status_code_t run(void)
{
    status_code_t status;

    status = do_something();
    if (status != STATUS_OK)
    {
        goto termination;
    }
    status = more_stuff();
    if (status != STATUS_OK)
    {
        goto termination;
    }
    status = finalize();
    termination:
    {
        return status;
    }
}
```

To improve readability, the code-style could be adapted to something like:

```C
status_code_t run(void)
{
    status_code_t status;

    status = do_something();
    if (status != STATUS_OK) {goto termination;}
    status = more_stuff();
    if (status != STATUS_OK) {goto termination;}
    status = finalize();
    termination:
    {
        return status;
    }
}
```

In any case, always use curly brackets for scopes like `if` and `for` blocks as
you never know, when the need arises to add another line to the scope.


## Some rules to avoid abusing of `goto`

First of all, I understand that people may be wary of using `goto`. It also
depends on the coding and industry standard one is forced to use. My personal
rules to not abuse of the `goto` are:

1. If possible, replace it with `if-elseif-else` constructs where the `if`
   conditions check for all error cases and the else is the regular execution. A
   `switch-case-default` is probably even more readable.
1. If possible, replace it with a `do-while(0)` and break from it in case of
   error.
1. use only one label per function.
1. choose a clear label name, so that reading the statement `goto labelname` out
   loud makes it clear what it does. `goto termination` or `goto error_handling`
   are better alternatives to `goto failure` (it goes to a failing point or to
   failure handling?).
1. only jump downwards in the code (i.e. skip some instruction, don't cycle
   them).
1. whenever possible, just use it as a replacement for multiple return points.

And now you can burn me on a stick.

In all seriousness, I hope this helps you make your code cleaner. Given that
`if-elseif-else`, `switch-case-default`, `do-while(0)` constructs or `goto`s
mostly creates the same effect, I would aim for code readability first.
