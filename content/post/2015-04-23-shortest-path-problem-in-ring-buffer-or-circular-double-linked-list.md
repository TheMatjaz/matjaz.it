---
author: matjaz_admin
comments: true
date: 2015-04-23 23:09:42+00:00
layout: post
link: http://matjaz.it/shortest-path-problem-in-ring-buffer-or-circular-double-linked-list/
slug: shortest-path-problem-in-ring-buffer-or-circular-double-linked-list
title: Shortest path problem in ring buffer or circular double linked list
wordpress_id: 461
categories:
- Software
tags:
- Algorithm
- C
- Code
- List
- Path
- Ring
- Shortest path
- Software
---

Shortest path problems are everywhere with many algorithms and since I haven't (yet) found an algorithm for this particular one, well, here we go!





## Clockwise or counterclockwise?



A friend of mine was developing a microcontroller software and faced a particular shortest path problem: the microcontroller had to activate a [stepper motor](https://en.wikipedia.org/wiki/Stepper_motor) to turn a numbered disk from the current position A to the desired position B. There are of course two possible paths: clockwise and counterclockwise. But which is the shortest?



<blockquote>Think about an analogical clock and ignore the minute and second hand. Your hour hand is currently pointing to "11" and you want to move it to "3". Do you turn the hand clockwise or counterclockwise?</blockquote>



Easy to say, when you are human and visualize the clock/ring, right? But what about a computer?



## Problem hypotheses






    
  1. We are working on a **circular bidirectional ring-like data structure** (like in the cover image), where the _next_ of the last element is the first and vice-versa.

    
  2. The ring is divided in **finite equal parts**, like in the cover picture or like a clock.

    
  3. The ring parts are **enumerated sequentially starting from 0**. A start from 1 is also possible.

    
  4. The **current position** (part of the ring), the **desired position** (part of the ring) and the **circumference** of the ring are known _a priori._





## Algorithm in C



All the following source code forms are subject to the terms of the [Mozilla Public License, v. 2.0](http://mozilla.org/MPL/2.0/).



### Oriented arc



To travel along a ring we need a displacement vector, that is something that gives us the _length_ of the path we need to travel and in which _direction_ we have to move. A representation of this vector may be an oriented arc of the ring. Let's make it as a C struct:

[sourcecode lang="C"]
#include <stdbool.h>/* Allows usage of booleans */
#include <stdlib.h>/* Allows usage of abs() */

struct oriented_arc_struct {
    int lenght;
    bool clockwise;
};

typedef struct oriented_arc_struct oriented_arc;
[/sourcecode]

The length is expressed as the number of steps to perform, that is the parts of the ring we need to visit. The direction is expressed as a boolean, which is `true` if we move clockwise, else `false`. To use booleans we need the `stdbool.h` library first. We also add `stdlib.h` for the absolute value function `abs()` used in the next part. This struct could have been done with an array of two integers, but I've chosen this way since it's more adaptable to longs or even doubles while being more readable.



### Minimum path



The function that returns the shortest oriented arc between two points on a ring is the following. Note that the function that finds the shortest path is independent of the exact implementation of the structure. The computation is performed on index level.

[sourcecode lang="C"]
oriented_arc min_oriented_arc(int circumference, int start_point, int end_point) {
    int distance_1 = end_point - start_point;
    oriented_arc arc_1 = {abs(distance_1), (distance_1 >= 0) ? true : false};
    oriented_arc arc_2 = {circumference - abs(distance_1), !arc_1.clockwise};
    if (arc_1.lenght <= arc_2.lenght) {
        return arc_1;
    } else {
        return arc_2;
    }
}
[/sourcecode]

Let's break it down: between two points on a ring there are two arcs, where usually one is shorter or they are equal. To calculate the first one we calculate `distance_1` first. If it is negative, then we are moving counterclockwise and we save `false` in `arc_1.clockwise`. As `arc_1.length` we put the absolute value of the calculated distance (basically it's the taxi-cab distance).

The second arc, `arc_2`, is of course complementary to `arc_1`, which means has complementary length and opposite orientation. Of the two arcs, we return the one with the shortest length or the first one if they are equal.

Note that the orientation for a movement of 0 length (from `start_point` to `start_point`) has clockwise orientation. On the other hand the orientation of the arc with the complementary with same length may be clockwise or not, depending on the `start_point` and `end_point`, but it doesn't matter since the length of the path is the same in both directions (circumference/2).



### Full program with example path computations



[Here](https://github.com/TheMatjaz/Utilz/blob/master/ring_distance.c) is the whole C code with example computations performed for a 12-part ring, like the clock.



## Abstract data structure with this shortest path need: _Sequentially sorted circular double linked list_



I know, the title looks scary, but I'll explain it gradually. This is an example of what kind of abstract data structure may need this shortest path algorithm to find the necessary data faster. You know, theory stuff - and **it is not needed to understand and use the algorithm.**

Also probably the structure is not optimized in many ways, since and array or, even better, a **[hash table](https://en.wikipedia.org/wiki/Hash_table) would solve the problem faster and nicer**, but it can be an abstract representation of a physical constraint - like moving the hour hand of the clock.

Circular structures like the numbers of the clock or the cover image may be created in many ways in software. One is called [circular buffer (or ring)](https://en.wikipedia.org/wiki/Circular_buffer), is usually based on an array or a [dynamic array (a.k.a. arraylist)](https://en.wikipedia.org/wiki/Dynamic_array) and used for other purposes. A great advantage of arrays and dynamic arrays is the [random access](https://en.wikipedia.org/wiki/Random_access). Imagine you are in position 11 and want to reach position 3: just type `my_array[3]` and you're done, but this is not our case. Think again about the clock: **you are not able to "just jump"** to another position with the hour hand, but you need to travel along a path step by step.

Now let's imagine that our array has no random access, but only [sequential](https://en.wikipedia.org/wiki/Sequential_access): from my current position I can reach only the next one and from that the next one and so on. [Linked lists](https://en.wikipedia.org/wiki/Linked_list) are an example of that. We can then make the list _bidirectional_ or _double,_ as usually called. On a structure like this, we are allowed to move in two directions, _left_ or _right_ as on the _Image 1_, usually referred as _next_ and _previous_.

[caption id="" align="aligncenter" width="610"][![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png) Image 1: Bidirectional (double) linked list[/caption]

If you add the circularity on this list (the last connects to the first and vice versa), you'll get a _circular double linked list_ like on _Image 2_. On this structure we may move still in two opposite directions, but it's better to call them _clockwise_ and _counterclockwise_ since _left_ and _right_ have no sense on a circle (no pun intended).

[caption id="attachment_493" align="aligncenter" width="610"][![Image 2: Circular Double Linked List [click for source .svg image]](http://matjaz.it/wp-content/uploads/2015/04/Circular-Double-Linked-List-800x151.png)](http://matjaz.it/wp-content/uploads/2015/04/Circular-Double-Linked-List.svg) Image 2: Circular Double Linked List [click for source .svg image][/caption]Now we have the structure to represent **a ring with finite positions **(hypotheses 1 and 2, check!). On this kind of structures we are able to reach any point using two different paths and of course we need the shortest one.

We are still missing the third hypothesis: **sequential numbers**, just like the numbers on our clock or the numbered disk of the microcontroller. _Image 3_ shows a structure that implements this.

Depending on the problem, just the sequential numbers on their own may be of no use (since they give no information). To improve that, each block on the list may point to a data block. _Example:_ each number on the clock points to its string description, so _12_ points to _"Noon"_.

[caption id="attachment_492" align="aligncenter" width="610"][![Sequentially-Sorted-Circular-Double-Linked-List](http://matjaz.it/wp-content/uploads/2015/04/Sequentially-Sorted-Circular-Double-Linked-List-800x262.png)](http://matjaz.it/wp-content/uploads/2015/04/Sequentially-Sorted-Circular-Double-Linked-List.svg) Image 3: Sequentially Sorted Circular Double Linked List [click for source .svg file][/caption]This is one of the possible abstract structures that satisfies the hypotheses.



* * *



**Images sources**: [Circular Buffer](https://en.wikipedia.org/wiki/File:Circular_buffer.svg) (cover), [Circular linked list](https://en.wikipedia.org/wiki/File:Circularly-linked-list.svg) (Image 1) from Wikipedia. [Double circular linked list](http://matjaz.it/wp-content/uploads/2015/04/Circular-Double-Linked-List.svg) (Image 2) and [Sequentially Sorted Circular Double Linked List](http://matjaz.it/wp-content/uploads/2015/04/Sequentially-Sorted-Circular-Double-Linked-List.svg) (Image 3) by me based upon [this](https://en.wikipedia.org/wiki/File:Circularly-linked-list.svg) and [this](https://en.wikipedia.org/wiki/File:Doubly-linked-list.svg) by Lasindi. Image 2 and 3 are licensed under [CC SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/).

**Edit**: on 2015-04-28 to add Image 3, hypothesis (now) 1, change chapters order and modify text to include the sequentiality of the numbers.
