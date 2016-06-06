+++
aliases      = []
categories   = ["Blog"]
date         = "2014-11-11T11:39:26+00:00"
description  = "New Wordpress theme and new hosting service"
draft        = false
slug         = "hosting-change-and-new-theme"
tags         = ["Domain", "Hosting", "MySQL", "Wordpress", "Blog"]
title        = "Hosting change and new theme"
type         = "post"
weight       = 0
+++


Yay! Better servers for this epic blog, my dear 3 readers! Yes, apparently this whole website is kind of a game I play alone. But that's not a problem; it's fun and I'm making experience for the future.


### A new hosting discovered: +10 EXP


About a month just got a yearly e-mail from my [hosting provider](http://www.aruba.it) as a reminder that I have to pay for another year of hosting. Since I discovered another quite [good hosting service](https://netsons.com) and I had the opportunity to try it, the result was obvious.

I moved this domain and switched hosting providers. For a few hours my e-mail addresses were unreachable, but apparently nobody wrote me in that time period, so no problems. I halved the yearly hosting price for a service that is somehow better: the database and www-folder access is faster, I have unlimited bandwidth and e-mail account. The only limits are 10 GB on the disk and 100 sent e-mails per hour. In my case it's more than enough.

Something very nice is the support for "naked" domain names of this new hosting service. Now my domain is _matjaz.it_ instead of _www.matjaz.it_ and the redirect from one to another takes way less time. There are some [suggestions](http://www.yes-www.org/why-use-www/) that I should use the _www_, but I'll ignore them because of the small scale of the website.


### The long export-import journey


I've backed up the files in the domain folder via FTP, exported the database using the PhpMyAdmin panel and saved all my e-mails to a _mbox_ file. It took me waaay longer than writing this sentence, sadly. After the domain transition to the new servers, my hosting account on the old server got deleted and my old domain folder aswell. The strange fact was that my old MySql server account and my old e-mail accounts were not. So I simply performed an erase of every table, database, e-mail and e-mail account via PhpMyAdmin and webmail. Everything should disappear in a few weeks, when the last pieces of my old hosting account will disappear.

Then I reinstalled [Wordpress](https://wordpress.org) from the new hosting's control panel (which did it neatly for me, yay!), installed the plugins and themes that were used on the previous servers, uploaded back the _wp-content/uploads_ folder, reimported the old tables to MySql with the PhpMyAdmin import tool and changed the database settings in _wp-config.php_. It seems to work correctly..


### New look


I've also tried to change the theme: is called _Matheson_ and is very simple, minimalistic, neat and clear. Sadly it's quite expensive when it comes to the pro version. I'll see if it is a good choice. A good alternative was Automattic's theme Minnow, which I didn't choose due to the lack of images.

Despite of that, there is still a lot of small work to do here and there. It may sound stupid, but it's kind of my hobby. Some prefer to go fishing, I go blogging.
