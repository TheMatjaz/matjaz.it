+++
aliases      = []
categories   = ["Sysadmin"]
date         = "2014-06-05T19:09:29+00:00"
description  = "Apt-get commands in cron"
draft        = false
slug         = "automatically-update-a-debian-ubuntu-using-apt-get-and-cron"
tags         = ["apt-get", "cron", "Linux", "automatic", "Raspberry Pi", "Update"]
title        = "Automatically update a Debian/Ubuntu using apt-get and cron"
type         = "post"
weight       = 0
+++


Updating a home Ubuntu/Debian computer, a Raspberry Pi and especially a small server periodically is tedious. A quick solution: create a simple script and let the computer run it periodically with cron.


### Notes and alternative solutions


Of course there are already many solutions to this problem like using cron-apt but using a script may be very useful for tweaking and adding extra commands in between. Also check apt-cacher to keep a copy of the downloaded updates and redistribute them on other computer in your LAN running the same distro without downloading them again. Very useful on slow networks or mobile networks. And don't forget apt-mirror to clone whole repositories locally, which could be an overkill for simple home networks (yep... I've done that).

NOTE: the version A of the script installs any update automatically. On complex systems this may lead to problems and incompatibilities. If not sure, use the version B and manually check what do you install before upgrading. Still **check if the code is right** for your use case.


### The script


It's not perfect nor foolproof, but usually it does what it should do:



	
  1. updates the repository list

	
  2. checks for missing packages, broken dependencies and fixes them

	
  3. installs any available update

	
  4. frees up some disk space by removing unused packages and deleting all the downloaded .deb files

	
  5. logs the output (see the crontab part)


Of course you may change it as you like, but please leave a comment on how you adapted it. I'm curious :)


#### Version A



[bash]
#!/bin/bash
#
# apt-get updater script for cron automatization
# Copyright: www.matjaz.it
# Version: 0.6 of 2014-06-05
#
#This program is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.
#This program is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#GNU General Public License for more details.
#You should have received a copy of the GNU General Public License
#along with this program. If not, see http://www.gnu.org/licenses/

echo
echo "############################"
echo "Starting apt-get-autoupdater"
date
echo
apt-get update
apt-get --fix-broken install
apt-get --yes upgrade
apt-get autoremove
apt-get clean
apt-get autoclean
exit 0
[/bash]

As I told before, a script allows many modifications. E.g. another version could be the following one, which only downloads the new packages, but does not install them, so a system administrator could check later for unwanted updates, like still unsupported versions of some software. Here the cleaning part is on the beginning so apt-get is forced to download it again.


#### Version B



[bash]
#!/bin/bash
#
# apt-get update downloader script for cron automatization
# Copyright: www.matjaz.it
# Version: 0.6 of 2014-06-05
#
#This program is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.
#This program is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#GNU General Public License for more details.
#You should have received a copy of the GNU General Public License
#along with this program. If not, see http://www.gnu.org/licenses/

echo
echo "############################"
echo "Starting apt-get-autoupdater"
date
echo
apt-get clean
apt-get autoclean
apt-get update
apt-get --fix-broken install
apt-get --download-only --yes upgrade
apt-get autoremove
exit 0
[/bash]



### Put the script in cron


Whatever version do you choose (even your own), create a script file. To do it open a terminal and run the following command to open nano

[bash light="true"]nano /path/to/file/apt-get-autoupdater.sh[/bash]

paste the code into it (CTRL+SHIFT+V on Linux, CMD+V on Mac or right-click > paste on graphical interfaces), save it (CTRL+O) and close nano (CTRL+X).

Make it executable with the following command or it won't run:

[bash light="true"]sudo chmod +x /path/to/file/apt-get-autoupdater.sh[/bash]

A crontab is a file which has instructions for the cron daemon. You insert some commands in this file with their execution time and they will be executed on that time. That's it. Each user has a crontab, but since we run apt-get, we need root permissions; so open the root crontab (notice the sudo):

[bash light="true"]sudo crontab -e[/bash]

Add the following line at the bottom of the file:

[bash light="true"]30 4 * * 3 bash /path/to/file/apt-get-autoupdater.sh >> /var/log/apt/apt-get-autoupdater.log[/bash]

In this example the script is run every Wednesday on 04:30 during the night, since the first 5 numbers in the line indicate the time of execution of the command specified in this order: minute, hour, day of the month, month, day of the week. More information is found in the beginning of the crontab file itself.

Also the command in the crontab creates a basic log by appending the output of the script. The command date in the script is intended to help the search for a certain execution of the script in time.
