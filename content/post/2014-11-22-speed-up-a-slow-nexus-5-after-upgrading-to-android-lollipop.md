+++
aliases      = []
categories   = ["Software"]
date         = "2014-11-22T17:35:44+00:00"
description  = "The first post of this blog"
draft        = false
hidefromhome = false
slug         = "speed-up-a-slow-nexus-5-after-upgrading-to-android-lollipop"
tags         = ["Android", "Smartphone", "Cache", "Wipe", "Trick"]
title        = "Speed up a slow Nexus 5 after upgrading to Android Lollipop"
type         = "post"
weight       = 0
+++


Right after upgrading my phone from Android Kitkat 4.4.4 to Lollipop 5.0 my face was:

[caption id="" align="aligncenter" width="200"][![](http://i0.kym-cdn.com/photos/images/masonry/000/259/943/694.png)](http://knowyourmeme.com/memes/are-you-fucking-kidding-me) Are you kidding me?[/caption]

because of the new design and the UI lag.

I already complained (yes, I really like to do that!) about [the design of the new Google Calendar App](http://matjaz.it/revert-google-calendar-android-app-to-previous-version/), but after the update the UI got a new design. I like the new notification menu and the settings menu, but I really preferred the app-switching menu, the bottom and top bar, the apps screen and the transparency of Kitkat.

Also the phone was incredibly slow!


### Simple cache wipe


The quite simple and effective solution I found [on this thread](https://productforums.google.com/d/msg/nexus/to2BHjmhh-I/PIsu1r64ugoJ) was to wipe the system cache. A fast way to clean the cache of all apps is:


<blockquote>

> 
> _Settings > Memory > Tap on Cache_
> 
> 
</blockquote>


which is also useful in many cases, but I tried to perform this cache cleaning **with no results about swiftness**.


### Complete cache wipe


To clean completely the cache of your phone, in my case for a Nexus 5 (look it up for your phone), [these steps are good](http://www.androidsnap.com/nexus-5/331-perform-wipe-cache-partition-google-nexus-5-a.html), but I added a few points to them. If you want some images of the process, check [this page out](http://www.robschmuecker.com/how-to-wipe-cache-partition-nexus-7/).



	
  1. Switch off your Nexus 5.

	
  2. Long press on the **VOLUME UP** + **VOLUME DOWN** + **POWER keys** at the same time for about 4 seconds until the phone vibrates.

	
  3. You should then see an image of an Android lying on its back pops up.

	
  4. Hit the **VOLUME DOWN** twice until you see "Recovery mode" is displayed on the upper part of the screen.

	
  5. Hit the **POWER** key to restart in "Recovery mode."

	
  6. You should then see an image of an Android with a red triangle appears.

	
  7. Hold down the **POWER** key and shortly press the **VOLUME UP** key. Release all keys when the Android System Recovery screen shows up.

	
  8. Use the **VOLUME** keys to navigate to _Wipe cache partition. _**Be very careful NOT to select the _Wipe data/factory reset_** option which performs a complete reset and ["deletes"](http://matjaz.it/how-to-erase-your-android-before-selling-it/) all your data.

	
  9. Press the **POWER** key to confirm.

	
  10. The wiping will take about 5 minutes. The Nexus 5 will then restart.


As stated [here](http://www.androidpit.com/forum/608606/how-to-clear-the-system-cache-for-the-google-nexus-5)


<blockquote>

> 
> In fact, doing a system cache will NOT delete any of your personal info, but only the background and application cache. Cache is stored data on the phone which allows apps to load quicker, it's like the data is on standby until you need it again. Wiping it simply means that the app will have to reload the data.
> 
> 
</blockquote>


Remember that wiping your cache may speed up your Android in any occasion. Try it on some older phone to bring it back to life a bit ;)


### Bonus for those keeping Kitkat


To remove the annoying notification about the available system upgrade, just


<blockquote>long press on the notification > open the app info > disable notifications</blockquote>


and if you change your mind, to perform the upgrade just go


<blockquote>Settings > About phone (at the very bottom) >System updates</blockquote>
