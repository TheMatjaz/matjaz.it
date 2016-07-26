+++
aliases      = []
categories   = ["Computer"]
date         = "2015-08-29T17:04:26+00:00"
description  = "My checklist of things to perform periodically to cleanup my computer, from hardware to software. Especially for Macs but not necessary, most apply to any OS, just adapt them a bit."
draft        = false
highlight    = false
lastmod      = "2016-07-26T01:00:41+02:00"
slug         = "macbook-regular-maintenance"
tags         = ["Backup", "Calibration", "Cleanup", "Wipe", "Software", "Mac", "Tip"]
title        = "MacBook regular maintenance (also for other machines)"
type         = "post"
weight       = 0
+++


Those are the steps I usually do to cleanup, verify and recalibrate a MacBook
regularly. Those steps should work for iMacs too (except the battery
recalibration and similar stuff) and can be used as a general guideline for other
operating systems too but with other software tools than the mentioned
ones. Perform them in this order if unsure.

A note about the battery calibration: verify if your laptop model requires it at
your vendor, including Macs.


## Steps

1. Close all running programs and applications, if possible
1. Perform a backup of the whole machine. On a Mac: use [TimeMachine](https://support.apple.com/en-us/HT201250)
1. Empty the trash can
1. Check for unused and removable apps; use
   [AppCleaner](http://www.freemacsoft.net/appcleaner/)
1. Check for unused files and remove them or move them to another machine or
   disk
1. Perform a backup of all the e-mails in your e-mail client. Export
   your mailbox with Apple Mail or, if Thunderbird user, consider the add-on
   [ImportExportTools](https://addons.mozilla.org/en-US/thunderbird/addon/importexporttools/).
1. Vacuum Apple Mail database to improve it's performance by running this
   command in a terminal: `sqlite3 ~/Library/Mail/V2/MailData/Envelope\ Index
   vacuum;`
1. Update the packages with your favorite package manager; if you use Homebrew:
   `brew update; brew upgrade; brew cleanup`
1. Update the software installed with any market or store; AppStore updates
1. Perform a disk integrity check. Run _verify disk_ with _disk
    utility.app_
1. Still using _disk utility.app,_ verify and correct the disk permissions
1. Perform a full-system scan with your favorite antivirus
1. Recalibrate the battery of your laptop; follow
   [this guide](http://support.apple.com/kb/ht1490) for MacBooks (see below for
   short version)
1. Perform an [SMC reset](http://support.apple.com/kb/HT3964) and a
   [NVRAM (a.k.a. PRAM) reset](https://support.apple.com/kb/HT1379) (see below
   for short version)
1. Add a log entry in
    [CoconutBattery.app](http://www.coconut-flavour.com/coconutbattery/)
1. Clean the computer screen with a clean cloth
1. [Clean the keyboard, touchpad, laptop case, charger, mouse and other peripherals with alcohol](http://matjaz.it/your-phone-is-infected-not-only-computer-viruses-also-real-bacteria/)
1. Perform a reboot


### [MacBook battery calibration](http://support.apple.com/kb/ht1490)

Be sure to take the right time to do it, since it forces your MacBook to be
charging without interruptions and shut down for some hours.

1. **Fully charge** your MacBook's battery
1. Let it rest in the fully charged state for **at least two hours**
1. Prevent the sleeping of the computer using
   [Caffeine](https://itunes.apple.com/us/app/caffeine/id411246225)
1. Disconnect the power adapter
1. Use the MacBook until the battery dies (save your work first!)
1. Let the MacBook sleep discharged for **at least five hours**
1. Charge it **until it's full again**

CoconutBattery helps take track of the improvement this process does to the
battery capacity.


### [SMC reset](http://support.apple.com/kb/HT3964)
	
1. Shut down
1. Plug in the MagSafe power adapter, if its not already connected
1. On the built-in keyboard, press the (left side) `Shift+Control+Option` keys
   and the `power` button at the same time for about 3-4 seconds. Release them
   together. If you see the MagSafe LED blink or change color, then you've done
   it right, but sometimes the LED stays still
1. Power on


### [NVRAM (a.k.a. PRAM) reset](https://support.apple.com/kb/HT1379)
	
1. Shut down
1. Locate the following keys on the keyboard: `Command`, `Option`, `P`, and
   `R`. You will need to hold these keys down simultaneously in the next step
1. Turn on the computer and quickly press and hold the `Command+Option+P+R` keys
   before the Apple logo appears
1. Hold the keys down until the computer restarts and you hear the startup sound
1. Release the keys
1. Reconfigure speaker volume, screen resolution, startup disk selection and
   time zone information if needed

