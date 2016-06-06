+++
aliases      = []
categories   = ["Privacy and Security"]
date         = "2014-10-09T10:07:20+00:00"
description  = "The first post of this blog"
draft        = false
hidefromhome = false
slug         = "open-question-to-my-mobile-internet-provider"
tags         = ["Smartphone", "Encryption", "Privacy", "Security", "VPN", "Provider"]
title        = "Open security questions to my mobile internet provider"
type         = "post"
weight       = 0
+++

After some burocra**z**y with my mobile network provider (which I will not mention), I finally enabled my smartphone to have internet access. Yeey! I waited way too much for this, but now I'm enjoying being able to find any information, be reachable or connect home wherever I want.

But, I'm sure many of you know that feeling. I'm also sure that many of you haven't asked yourselves how (and if) is your privacy protected by your mobile network provider.

I know that I'm a freaky paranoid, but cell towers act like a giant wi-fi antenna - it's a simple approximation for an easier representation of the problem. The questions are:


### Is the radio signal encrypted?


Is the signal I send from my smartphone to the cell tower of the provider encrypted? If yes, how? It really should be, otherwise Man In The Middle attacks are really easy, all it takes is to get a signal repeater and make it work like a proxy: intercept the signal and resend it to the cell tower and vice versa.


### What about DNS server logs?


My provider automatically assigns its servers for domain name lookups, which is ok since they are near and fast. But: do they keep logs of my activities online, in particular of the websites I visited? Is it possible to have those logs deleted? Our privacy law should allow me to do it, but the real life situation and burocra**z**y makes it complicated.


### Still no answer


I asked those information at their store and to their operators at the call center, but nobody knows anything, since the information I'm looking for is "too technical". Ok, that's true, but is not my fault that you, provider, haven't published this information on your website!


### Possible solution


VPN! It grants an encrypted connection and a tunnel through the VPN server, so it solves both problems at once.

If you pay a VPN service, check their Privacy Policy and Terms of Service first. Else, if you created a VPN server at home (if you are lucky enough to have a fast connection at home), check your cabled internet provider's Policy and Terms - also change DNS, if necessary.
