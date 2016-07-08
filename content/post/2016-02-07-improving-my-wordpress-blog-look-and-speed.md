+++
aliases      = []
categories   = ["Blog"]
date         = "2016-02-07T15:13:20+00:00"
description  = "Another improvement of my website: a Wordpress theme change to make it more minimal, some custom theme modifications and .htaccess tweaks to make it faster."
draft        = false
highlight    = true
slug         = "improving-my-wordpress-blog-look-and-speed"
tags         = ["Blog", "Performance", "Wordpress"]
title        = "Improving my Wordpress blog look and speed"
type         = "post"
weight       = 0
+++


## Theme change! Why? Because yes!

My blog switched from the [Matheson](https://wordpress.org/themes/matheson/)
theme to [Decode](https://wordpress.org/themes/decode/), mainly to fix the ugly
features images, but also to keep up with a more mobile-friendly design and a
one-column design. Still there is a sidebar, but it's hidden on default. I must
say that Decode offers a really nice design!


## Infinite scroll

By activating [Jetpack by Automattic](https://wordpress.org/plugins/jetpack/)
there are many many nice options and tweaks available. One in particular is
_Infinite scroll_ to allow users to just scroll down on the home page to load
more posts instead of clicking on the boring _Older posts_ button/link.

But I had a problem: on default _Infinite scroll_ loads 7 posts each time, which
was too much for me and there is no possible customization.

Just add this snippet at the end of the _functions.php_ file:

```php
/*
 * Change the posts_per_page Infinite Scroll setting from 7 to 3
 */
function my_theme_infinite_scroll_settings( $args ) {
    if ( is_array( $args ) )
        $args['posts_per_page'] = 3;
    return $args;
}
add_filter( 'infinite_scroll_settings', 'my_theme_infinite_scroll_settings' );
```

Source:
[http://themeshaper.com/2013/10/08/how-to-override-jetpack-infinite-scroll-settings-in-a-child-theme/](http://themeshaper.com/2013/10/08/how-to-override-jetpack-infinite-scroll-settings-in-a-child-theme/)


## Adding a custom PGP social icon in the header

Since the theme was missing a social icon for a PGP public key (although it has
like 40000 other icons!!), I created one myself, as you can see in the header -
a quick copy paste of a function in a php file and some Inkscape editing.

I proposed this icon to the authors and
[they added it to the theme](https://github.com/MachoThemes/decode/issues/52). Later
it was [renamed](https://github.com/MachoThemes/decode/issues/82) to be an icon
for the [Keybase](https://keybase.io) of the user.


## AdBlock blocking the social icons

My AdBlock was hiding the social icons, because it was "afraid" of the word
"social" in the code of the website. The issue was solved by renaming the
"social-icon" into a "contact-icon", a solution
[accepted](https://github.com/MachoThemes/decode/issues/51) by the theme
develpers.


## Improving the site speed

By testing my blog's speed with [tools.pingdom.com](http://tools.pingdom.com/)
and [WebPageTest](http://webpagetest.org/), it was clear that something had to
be improved.


#### Leverage browser caching

By adding the following text at the end of the _.htaccess_ file on the Wordpress
root folder, the server "tells" the browser to keep static content in cache for
a certain period.

```
# BEGIN Browser caching expires
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType text/css "access 1 month"
ExpiresByType text/html "access 1 month"
ExpiresByType image/gif "access 1 year"
ExpiresByType image/png "access 1 year"
ExpiresByType image/jpg "access 1 year"
ExpiresByType image/jpeg "access 1 year"
ExpiresByType text/plain "access plus 1 month"
ExpiresByType image/svg+xml "access 1 month"
ExpiresByType image/x-icon "access 1 year"
ExpiresByType application/pdf "access 1 month"
ExpiresByType application/javascript "access 1 month"
ExpiresByType application/x-javascript "access plus 1 month"
ExpiresByType text/x-javascript "access 1 month"
ExpiresByType application/x-shockwave-flash "access 1 month"
ExpiresDefault "access 1 month"
</IfModule>
# END Browser caching expires
```

Source:
[http://notlaura.com/wp-super-cache-and-browser-caching/](http://notlaura.com/wp-super-cache-and-browser-caching/)


#### Enable HTTP Connection: keep-alive

Again by adding this snippet in the _.htaccess_ file, the server will keep the
connection active after the file passing through it is completely
downloaded. This will improve speed since the connection may be reused instead
of being closed and reopened. Watch out: this configuration depends on the
Apache Web Server configuration. If you are on a shared hosting, it may not work
since you won't have access to the Apache settings.

```
# BEGIN keep alive
<IfModule mod_headers.c>
Header set Connection keep-alive
</IfModule>
# END keep alive
```

Source:
[https://varvy.com/pagespeed/keep-alive.html](https://varvy.com/pagespeed/keep-alive.html)


#### Combine and minify JS and CSS

The [Autoptimize](https://wordpress.org/plugins/autoptimize/) Wordpress plugin
solved the problem for me. It also integrates well with WP Super Cache.

