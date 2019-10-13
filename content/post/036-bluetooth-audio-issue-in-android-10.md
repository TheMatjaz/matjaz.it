+++
type = "post"
slug = "simple-fix-for-bluetooth-audio-not-working-on-android-10"
draft = false
date = "2019-10-13T16:29:54+02:00"
title = "Simple fix for Bluetooth audio not working on Android 10"
highlight = false
lastmod = "2019-10-13T16:29:54+02:00"
priority = 0.5
changefreq = "monthly"
aliases = []
tags = ["android", "smartphone", "trick", "bluetooth", "tutorial"]
description = "After upgrading my phone to Android 10, my Bluetooth speakers and earphones stopped working. Luckily the fix is very simple."
weight = 0
categories = ["Software"]
+++

I just upgraded my Nokia 8.1 to Android 10 and my Bluetooth audio devices
stopped working. This includes listening to music on Bluetooth earphones,
Bluetooth speakers and receiving phone calls with them.

I tried rebooting the phone, resetting the network settings (Wi-Fi, Bluetooth
etc.) and pairing the devices again to no avail.

The solution is much easier and I found it in [this Nokia forum
thread](https://community.phones.nokia.com/discussion/52642/no-bluetooth-audio-after-android-10-update)
which states simply to **disable the A2DP option in developer settings**.
Here are the steps if you are not familiar with the procedure:

1. Enable the developer options
   1. Open your phone _Settings_
   1. _About phone_ section
   1. Find the _Build number_ at the bottom
   1. Tap it a about 10 times to unlock the _Developer Options_. A small 
      notification on the bottom of the screen will let you know when you
      succeeded. It may also ask you to confirm your password
1. Search for _Developer options_ in the search bar in the phone _Settings_.
   Click on the second result.
1. Enable them in the global slider on the top if they are not already on
1. Find the option _Disable Bluetooth A2DP hardware offload_ option (at
   about half of the list) and **deactivate it**. If you have trouble finding
   it, again use the search bar instead to make a lookup for "A2DP" for
   example. It may ask you to reboot the phone.
1. After the reboot the audio streaming should work.
1. You don't need to keep the developer options active (the global slider on
   the top) in order to have this functionality working and it's also
   recommended not to do so. Deactivate them unless you really know that you
   need them.

