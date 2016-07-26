+++
aliases      = []
categories   = ["Software"]
date         = "2014-11-14T14:21:28+00:00"
description  = "The Android Google Calendar App has just been updated but it has bad design: here is how you switch to the old version."
draft        = false
highlight    = false
lastmod      = "2016-07-26T01:00:41+02:00"
slug         = "revert-google-calendar-android-app-to-previous-version"
tags         = ["Android", "Smartphone", "Google", "Calendar"]
title        = "Revert Google Calendar Android app to previous version"
type         = "post"
weight       = 0

+++


> **EDIT**: since the update of the graphical design of the Google Calendar app
> into a much more suitable one, with more space for the events, zooming
> ability, week view and more, reverting to the older version is not necessary
> anymore. If possible **keep the most updated version**, which is the most
> secure.

The update of the Google Calendar app for Android as for today doesn't simply
fit my needs and I decided to return to the earlier version of the app.

{{< figure 
    src="/images/calendar/thumbnails/Comparison.png" 
    link="/images/calendar/Comparison.png"
    alt="Before and after" 
    title="Before and after"
>}}


## I don't like the new Calendar because

- I don't need the events from Gmail or the pictures, I need a calendar
- my week is 7 days long, not 5 and I hate to turn the phone to landscape mode
  every time
- the month view disappeared
- I really need the zoom function a lot
- the bars on the upper and left border and even the "all day events" bar got so
  bigger that the rest of the calendar is way too small and I can't see
  anything.

I really didn't expect a failure like this from Google. Usually they
never disappoint.


## The solution

On Android 4.4.4 Kitkat it's possible to uninstall any updates to the apps that
were included in the original stock operative system, like Google+, Camera and
Calendar. It should work on every other version of Android, but I'm not sure
about Lollipop since it may have the new version of Calendar installed by
default.

**Warning!** Your data may get deleted if you haven't done a sync with
Google. Perform a sync first and everything should be OK.

**Warning 2!** The rollback goes quite back in time so every update of the
Calendar app between the release of your version of Android and the last
version is irretrievable. This includes **security updates**.


## The Procedure

The steps are really simple. Open the apps menu, find the Calendar app and drag
it to the top of the screen on the _App info_ icon. This will open the
properties of the app.

{{< figure 
    src="/images/calendar/thumbnails/Open_app_info.png" 
    link="/images/calendar/Open_app_info.png"
    alt="Open app info" 
    title="Open app info"
>}}

In the _App info_ screen press the _Uninstall upgrades_ button and confirm
twice.

{{< figure 
    src="/images/calendar/thumbnails/Uninstall_app_updates.png" 
    link="/images/calendar/Uninstall_app_updates.png"
    alt="Uninstall app updates" 
    title="Uninstall app updates"
>}}

The upgrades are gone! You may already see the old calendar and check the
version number. Wait for a minute or two so the app downloads your calendar
events back. If you had a problem with the widget, a reboot of the phone should
fix it.

