+++
aliases      = []
categories   = ["Privacy and Security"]
date         = "2014-05-31T21:55:46+00:00"
description  = "The first post of this blog"
draft        = false
hidefromhome = false
slug         = "how-to-erase-your-android-before-selling-it"
tags         = ["Android", "Security", "Privacy", "Delete", "Data", "Wipe"]
title        = "How to securely and truly erase your Android before selling it"
type         = "post"
weight       = 0
+++


Let's say you just bought a new mobile device and want to sell the old Android phone or tablet to get some extra money. It's a cool idea, right?


<blockquote>Did you know that a lot of your personal information is still stored inside the old phone EVEN if you performed a factory reset and deleted all the files?</blockquote>




### Deleted files are not deleted at all!


I'll try to put it in a simple way: when you write a new file on your disk or memory card, let's say a video you made with your phone's camera, it occupies a certain amount of space - e.g. 100 MB. The file is stored as a series of 0 an 1 in your hard disk or memory card or phone's internal memory. This applies to basically device. When you trash your file, it's simply moved to a _Trash_ directory, but when the Trash is emptied or you "permanently delete" your file, it's still there!

Why? The computer or phone or whatever device you have does not overwrite the file with a list full of 0, this is actually writing empty space over your file. Instead it flags the file as _deleted_. And no, it's not a hack form the NSA to get your data. It's simply a time saving technique (and also life saving for your disk or memory card).

When you write another file to the disk, the device will use the space flagged as _deleted_ as it was empty an just then the file will actually be overwritten.

There are many tools like [Recuva](http://www.piriform.com/recuva) (for Windows) to scan your disk for _deleted_ files and recover them. It's the same for any device, including you phone. Now, do you _really_ want somebody else to find your pictures, your notes, a list of your accounts, contacts, sms conversations? If yes, you wouldn't be here, right?


### Preparation & backup


Remove the SIM card and any microSD card: they are not going to be sold with the device, right?

**Backup ALL your data** from the Android device you are selling to another device, like a computer, since **everything will be deleted permanently **from your Android starting from the next step. Backup them to your Google account, copy the files on your computer, ... there are way to many guides on Android backups. If you need them, Google is your friend.


### Flag files as deleted


Normally delete every file, picture, contact, whatever you don't want to be seen from your device. You may also remove some apps in case of extra paranoia.


### Overwrite them


Install [SecureWipe](https://play.google.com/store/apps/details?id=com.pinellascodeworks.securewipe). It's a free tool that actually overwrites the files flagged as _deleted_ and all the empty space. Check _Sanitize System Space_ and _Sanitize SD Card_ and _Start wiping. _It could take some time, like an hour or two, depending on the speed of your device and the amount of free space left. Be patient.

[![](https://lh5.ggpht.com/VnjsAfp9s5IbTPrRgFnq29Cd7n84_J5eKjEP91uzQx-0iWgeqlNyZMbgdKcotH6qLNOg=h900)](https://play.google.com/store/apps/details?id=com.pinellascodeworks.securewipe)


### Encryption


Change the device lock PIN or gesture or whatever do you use to a STRONG and unique password (not PIN), if you haven't done it yet - don't worry, you will use it just once ;) By strong I mean as long and complex as you can: 16 characters (maximum length for Android), small and capital letters, numbers and symbols. An example (but don't use this one) could be: _HeyAzna490LOL2!__

_Attention: you need a **full battery** and the device must be **charging** while encrypting the storage._

Go to _Settings -> Security -> Encrypt phone._ Enter the password you chose. This may also take some time, something between 10 and 40 minutes.


### Factory reset


Now anything on your storage memory is deleted, overwritten, encrypted and won't be accessible if you don't know the password. It's finally the moment for a factory reset:

Go to _Settings -> Backup & reset -> Factory data reset_.

When the reset is complete, you will be prompted the beginning setting screen of your Android, asking for settings like language, timezone, Google account and so on. Don't insert anything, just power off the device. Now it's ready to be sold securely.


### Result


Now the factory-reset device contains encrypted free space which is recognized by the device as normally usable free space.

Oh, and forget the encryption password or burn the piece of paper, if you wrote it down ;)
