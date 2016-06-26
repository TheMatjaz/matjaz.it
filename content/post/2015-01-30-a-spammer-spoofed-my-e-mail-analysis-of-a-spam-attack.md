+++
aliases      = []
categories   = ["Privacy and Security"]
date         = "2015-01-30T12:47:05+00:00"
description  = "Some math and thoughts about the hundreds of spam e-mails I recieved"
draft        = false
highlight    = true
slug         = "a-spammer-spoofed-my-e-mail-analysis-of-a-spam-attack"
tags         = ["E-mail", "Security", "Spam", "Spoofing"]
title        = "A spammer spoofed my e-mail: analysis of a spam attack"
type         = "post"
weight       = 0
+++


Spam, spam, spam everywhere. We all know that our mailboxes are filled with it,
but usually the anti-spam filter takes care of most of it. But who is sending
those e-mails filled with ads, scams and viruses?

Well, when I opened my inbox this week, I was surprised to discover, **I sent
them** apparently!

Only _apparently!_ I've never sent spam in my life and never will, no
reason for that. But the 800+ e-mails in my inbox were telling a different
story.


## They spoofed my address

My first thought was:_"Holy cow, somebody cracked in my inbox, stole my identity
and sent 1000 e-mails from my account!"_ but it was not that - fortunately,
because any consequences of an identity theft are really complicated.

What happened to me is called **_spoofing_**. Let me cite the almighty [Wikipedia](https://en.wikipedia.org/wiki/Email_spoofing) here:

> Email spoofing is the creation of email messages with a forged sender
> address. [...] Spam and phishing emails typically use such spoofing to mislead
> the recipient about th origin of the message.

In other words one or more spammers used their accounts and their e-mail servers
to send an awful lot of virus-containing e-mails and wrote on them that the
sender was I, even if it was not true. As explained clearly by user
_HopelessN00b_ in
[this](http://serverfault.com/questions/415533/how-to-stop-people-from-using-my-domain-to-send-spam)
thread:

> They're using spoofed sender data to generate an email that looks like it's
> from your domain. It's about as easy as putting a fake return address on a
> piece of postal mail, so no, there's really no way to stop it. [...] just like
> you can't stop me from putting your postal address as the return address on
> all the death threats I mail, you can't stop someone from putting your domain
> as the reply-to address on their spam.


The advantage? They hide their identity, at least a little, and a
normal-looking e-mail address is far more suspicious than something like
_nfb0u8324nxfc0q3r@nb8w0tn.grr8r.com_. Also the same technique may be used to
fake the sender identity as somebody the receiver knows from scams.


## Why was my inbox full?

So ok, the spammer sends an e-mail and on it is written, that I am sender. But
since the real sender was not my account, I had no spam e-mails in my _Sent_
folder. **My account was untouched, I just had 823 new e-mails in the inbox.**

Those were **83% automatic mail-server replies**. Since the spam e-mails had a
malware attachment (such a classic!), a lot of server anti-virus scanners
refused the spam and answered with _"Banned contents alert"_ or _"Delivery
Failure Notification"_ warnings. Please note that I don't know any of those
users, since they are not from my address book; the spammers found them
elsewhere.

The remaining **17% were answers of people who got the spam**. I'll come back on
this later in the response analysis section.


## Appearance of the spam e-mail

From the various user replies I could see the text of the spam message. It had
small changes each time, like the signature or the list of products, but the
template was one of the two:

- _"Thank you for your purchase"_ with a transaction code and a list of bought
  prducts or
- _"We confirm we received the products you returned"_ with same other data as
  above.

A rough translation/adaptation of one of them could be the following. Some
details are made up by me (company name, signature etc.) in this example:

```nohighlight
Hello,

thank you for your purchase! We confirm you your transaction!

Your transaction code is: U99414725D3407F0
Company: NATIONAL RUGBY FEDERATION

The following objects were part of your purchase:
===
1 x KIT POE VIVOTEK 12V INJECTOR+SPLITTER: 68.55 EUR
1 x UPS KRAUN POWER HUB K-600: 62.8 EUR
1 x HP SW OFFICE 2007 MLK SBE TOP VALUE GE318T: 239.94 EUR
2 x CTRL PROMISE RAID SATA FASTTRAK TX4310: 204.87*2 = 409.74 EUR
1 x NETWORK CARD KRAUN WIRELESS 54MBPS PCMCIA: 17.62 EUR
3 x NB SONY VAIO VGN-NR38M/S: 503.71*3 = 1511.13 EUR
1 x HDD EXTERNAL WD PASSPORT 2.5 120GB: 78.65 EUR
1 x PDA HP IPAQ 114 CLASSIC HANDHELD: 273.47 EUR
1 x MOUSE APC BIOMETRIC BIOM34-EC: 44.12 EUR
1 x FOLDER KRAUN 13,3 GRAY: 13.31 EUR
===
Total: 2719.33 EUR

Please open the attachment for more information.

===
Tom Colombo
+12 3456 78 910
```

## So what? Could also be an authentic seller writing!

Actually... No. Just pay some attention to those details:

- **nobody was expecting this e-mail** which is really strange;
- no mention of **your name**. The company would probably know your name if you
  bought anything online from their store;
- it was really nothing more than in the example. Pure text! No images, no
  **logos**, no professional **signatures**. No professional reseller would ever
  send an e-mail like this.
- I don't even know for **which company does mr. Tom Colombo work for**! Just
  his phone number. Isn't this strange?
- high total amount to **make you anxious** and stop your rational thinking (at
  least a little)
- **invitation** to open the attachment
- strange attachment name
- `.cab` attachment format - do you really use a program that opens `.cab`?
  Wouldn't a `.pdf` be more logical for a receipt?

Now **compare it to any real receipt** or order confirmation from any online
reseller (_eBay_, _Amazon_, whatever).


## Analysis of the responses

**I do not know how many e-mails were sent.** I would say a lot since some
friends of mine and even my personal account got the same spam, but apparently
sent from another unlucky spoofed user. The national police department for
web-crimes also wrote a
[warning (italian)](https://www.commissariatodips.it/notizie/articolo/attenzione-invio-email-con-allegato-virus.html) [[here](https://translate.googleusercontent.com/translate_c?act=url&depth=1&hl=en&ie=UTF8&prev=_t&rurl=translate.google.com&sl=it&tl=en&u=https://www.commissariatodips.it/notizie/articolo/attenzione-invio-email-con-allegato-virus.html&usg=ALkJrhhDL2okPLcFlbriha5x1fZjrT-Y1Q)
the translation by Google] about this spam attack on their home page - which
means **it reached many users**.

The only number I have is the how many _replies_ I received back. My postmaster
account **received 823 e-mails**. Analyzing them I got the following data:


### Mail server responses

**686** e-mails (83.3% of the total) containing the following errors:

- 210 user's mailbox quota exceeded: 192 from the same e-mail provider
- 164 maximum message size exceeded: all from the same provider (I didn't even
  know this was possible for e-mails that small!)
- 191 refused executable attachment for security reasons: executable or `.cab`
  attachments are refused _a priori_, even before the antivirus scanned them
- 61 mailbox/recipient not found: wrong address
- 19 malware found: the server's antivirus or antispam found malicious content
- 13 mailbox unavailable: not sure if is the same as wrong address, I'm putting
  it here

And some more unusual errors:

- 13 generic unspecified error: just _"SMTP error 550"_, e-mail refused with no
  reasons
- 5 mailbox disabled
- 2 maximum hop number exceeded
- 2 access denied
- 2 recipient address rejected
- 1 couldn't create or rename temp file
- 1 unauthenticated sender
- 1 unknown alias
- 1 delivery time expired


### Automatic mailbox responses

**22** e-mails (2.7% of the total) with two kind of pre-set automatic answers:

- 14 _"I'm busy at the moment, I'll answer ASAP"_
- 8 _"This address is old, please refer my new one `xyz@example.com`"_


### Manual user replies

**110** e-mails (14.0% of the total) where:

- **85 users said** to the fake seller (spammer) that **there was a mistake**,
  that the receipt was send to the wrong address and that they have not ordered
  anything.
- **15 said the same** as in the point above, specifying that they will (or
  already have) notify the police about it or **sue the fake seller** (spammer)
- **5 asked for clarification**, they have not understood at all what the spam
  e-mail was about
- **5 understood it was spam** and joked about it by insulting the spammer or
  asking for the refund's money

It was really fun to read the replies: some were very polite and
professional explaining they never ordered anything and that the fake seller
(spammer) probably wrote on the wrong address. Some answer back really angry
with CAPS LOCK yelling, with awful netiquette and grammar. Stuff like:

```nohighlight
goodevening
WUAAAAATTTT??????!???!??!
```

or even better

```nohighlight
DO NOT SELL ME  STAFF I DId NT BUY NOTHING STOP WRT ME
I SUE YOU YOU IDIOT!!!!!1
```

_[Grammar nazi rant section: The punctuation! The capital letters and caps lock!
The grammar!! Aargh! A cat walking on the keyboard writes better than this!
What do schools teach these days? People are not even able to write a dot at
the end of a sentence?]_


## What I did about it

I called my domain provider and opened a ticket. They helped me pretty fast and
**activated [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) on the
e-mails I send**, which is nice! There is not much anyone could do about it,
since the real sender is hiding pretty well.

**I answered manually** to all those 14% who answered the spammer a.k.a. "me"
with an apology since my account got spoofed and explaining that the mail they
got is spam carrying malware and not to open the attachment. **Only 4 users
thanked me** (real me, not the fake address) for the warning. Only 4! I was
really disappointed, that people are so rude.


## The sad part: leveraging people's naïvety

Think about this example:

1. 100 e-mails are sent from the spammer
2. 50 of them gets refused by the mails servers since the attachment has a
   malware (automatic reply)
3. 10 of the remaining 50 meet a dead-end since the user does not exists or has
   moved to another account (automatic reply)
4. 30 of the remaining 40 are blocked by the spam filter of the user's account
   and moved in a _spam_ folder
5. 5 of the remaining 10 are blocked by some anti-virus software when downloaded
   or opened.
6. 4 of the remaining 5 are deleted by the user by hand, because it understood
   that is spam (clever guys/girls!)

**1% reached its goal**: the user was fooled by the scam and **thought the
e-mail was real!** Some of them may even open the attachment while trying to
find out what the e-mail is about and get **infected**.

Now think about sending **10.000.000 e-mails** instead of 100 or even more,
since
[70% of the e-mail traffic is spam](http://mashable.com/2013/08/09/70-percent-email-is-spam/). How
many infected computers you got? And there is basically nothing to stop it,
except defending your self with spam filters and antivirus software and be aware
of what are you reading, trying to think before clicking anything.

But of course 100% of computer users are doing that, right? _Right??_ [ref. [PEBCAK](https://en.wikipedia.org/wiki/User_error) error]


## The fun part: my spoofed address... does not exist!

The spoofed address was not even mine, just another e-mail account from my
domain. A non-existing one. The spammers just found my domain name somewhere
somehow (it's online, duh!) and attached a fake username in front of it. So the
addresses (yes, plural) they put on the spam were something like:
_notification@matjaz.it,_ _notice@matjaz.it_ or _instance@matjaz.it_ which do
not exist and never did!

The answers and automatic replies to those spam e-mails were redirected to the
postmaster account of my domain, that collects all the e-mails that point to
some non-existing user on this domain. Thus I was able to get them.


## TL;DR and moral of the story

I received 823 reply e-mails on my spoofed address, since the victims thought I
sent them. 86% were server errors, 14% of them where humans replying that
something is wrong, believing to the content.

I don't know how many e-mails the spammer sent so I don't know who has seen the
spam, but **some thought the e-mail was legit**. Please be aware of what you
read in your inbox!

> Some crimes, small or big can not be stopped, but still the human
> stupidity/naïvety is astonishing. _Memento pensare!_
