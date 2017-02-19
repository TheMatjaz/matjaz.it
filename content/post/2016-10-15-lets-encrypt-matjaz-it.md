+++
categories = ["Blog", "Privacy and Security"]
aliases = []
tags = ["Blog", "Security", "Privacy", "Encryption", "Hosting", "Header", "HTTPS", "HTTP"]
title = "Let's Encrypt matjaz.it"
type = "post"
changefreq = "monthly"
highlight = true
date = "2016-10-15T13:30:10+02:00"
priority = 0.5
slug = "lets-encrypt-matjaz-it"
lastmod = "2017-02-19T18:53:44+01:00"
draft = false
description = "matjaz.it is now available over HTTPS only! This is my short journey about setting it up along with some extra security headers and redirects from the plaintext-HTTP version."
weight = 0

+++


My hosting provider now offers free TLS certificates thanks to
[Let's Encrypt](https://letsencrypt.org), the free, automated and open
Certificate Authority. Since part of my life's mission is to annoy everyone
about security, it was inevitable for me to serve my website over HTTPS rather
than plaintext HTTP sooner or later.


## The provider

I had to open a ticket to change my hosting plan to another one including Let's
Encrypt. The annoying part was the long discussion with the assistance operator
who was stubborn about selling me extra features I don't need, like 1 GB of
database (my website is static, duh!).

Finally I have a cPanel menu for Let's Encrypt certificates which is
automatically generated without even asking. My website is already available
over HTTPS, but now the real setup begins to enforce it.


## Hugo

Hugo makes the job extremely easy: if you have been using relative URLs in your
content Markdown files, just replace the `http://` in the `baseurl` variable in
the Hugo configuration file with `https://` and rebuild the website.

After rebuilding be sure to verify if the `http://` is hardcoded anywhere else
in the website. I did it with the `grep` command:

```bash
# Run in the base Hugo directory, where the config.toml file is.
grep -Ri 'href="http://matjaz.it' public
```
 

## Redirecting from HTTP to HTTPS without the `www`

It is very user friendly to keep the HTTP version active on port 80 just to make
the web server redirect the user to the HTTPS version on port 443. This makes it
easy for anyone just typing the domain instead of the full URL in the search bar
or anywhere else (`matjaz.it` instead of `https://matjaz.it/`).

To achieve the 301 "Moved permanently" redirection while still removing any
`www.` (which I don't like), the following rules were enough in the `.htaccess`
file:

{{< code htaccess >}}
## Redirect www to non-www URL (plain domain) over HTTPS
## --------------------------------------------------------
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://matjaz.it/$1 [R=301,L]


## Redirect HTTP request to HTTPS
## --------------------------------------------------------
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
{{< /code >}}

Plus I had to change manually every other pre-existing redirection in the
`.htaccess` file to `https://` as well.

The first rule removes the `www.` but I had to make it point to `https://`. The
second rule redirects any URL starting with `http://` to the same URL starting
with `https://`. The combination of both always sends any URL to the non-www
version over a secure connection.


#### Why not `www`

I personally don't like the `www.` part in the URLs. The plain domains have the
problem of getting the cookies of the plain domain in every subdomain, which is
not a problem for me, since my website does not use cookies.

Result: [matjaz.it](/) is
[ranked as Class B](http://no-www.org/verify.php?u=https%3A%2F%2Fmatjaz.it) by
the [no-www.org](http://no-www.org/) website checker. Class B, as
[they state](http://no-www.org/faq.php) is:

> the optimal no-www compliance level. In Class B, `www.example.net` is a valid
> address, but it redirects all traffic to `example.net`. This classification
> actively reminds users that, while the `www` subdomain is accepted, it is not
> necessary.


## Extra security headers

[securityheaders.io](https://securityheaders.io/) is a very nice website that
verifies if your webserver is sending some extra HTTP headers in the response
over HTTPS to enforce the security of the website. The most important ones are
the [HSTS](https://scotthelme.co.uk/hsts-the-missing-link-in-tls/) and the
[CSP](https://scotthelme.co.uk/content-security-policy-an-introduction/)
headers. To make it short those two make the browser remember to ask the HTTPS
version instead of the HTTP from now on and to load resources only from
specified domains and protocols, respectively.

My headers now contain:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src https://matjaz.it:443
```

These two lines mean: hey browser, remember that [matjaz.it](/) prefers HTTPS
for one year, do not load any resource that is originating from anything else
than `https://matjaz.it` and don't execute any inline CSS or JavaScript code.

Everything was done in the `.htaccess` file again:

{{< code htaccess >}}
## Security headers: HSTS, CSP etc.
## --------------------------------------------------------
<ifModule mod_headers.c>
    # Make browsers remember that this website prefers HTTPS over HTTP
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains" env=HTTPS
    # Allowed domains to load scripts, style sheets, images etc.
    Header set Content-Security-Policy "default-src https://matjaz.it:443"
    # Don't allow the website to be iframed
    Header always set X-Frame-Options "DENY"
    # Disable MIME type sniffing, which can e.g. make IE execute an innocent looking .img URL as a javascript.
    Header always set X-Content-Type-Options nosniff
    # Enable the built in reflective XSS protection in some browsers
    Header always set X-Xss-Protection "1; mode=block"
    # When navigating within this website, send full URL as referrer,
    # when from this to another HTTPS website send only home URL,
    # when from this to another HTTP website, send nothing.
    Header always set Referrer-Policy strict-origin-when-cross-origin
</ifModule>
{{< /code >}}

Result: [matjaz.it](/) is ranked:

- [A on securityheaders.io](https://securityheaders.io/?q=https%3A%2F%2Fmatjaz.it%2F)
- [A- on SSLlabs.com](https://www.ssllabs.com/ssltest/analyze.html?d=matjaz.it&hideResults=on).
  This is mostly dependant on my hosting provider's server settings, but for a
  blog, hey, that's pretty OK!
- [A+ on Mozilla's Observatory](https://observatory.mozilla.org/analyze.html?host=matjaz.it)

    
## HTTPS is not THE solution

We have to remember that the connection from the hosting server to the client is
protected, but nothing guarantees that the hosting provider is not changing the
content _before_ sending it to the client or when the website owner uploads the
web pages/files. This is why I sign with GnuPG the commits of the website's
source code before uploading them to GitHub. Same for [signing my Signal
fingerprint](/contact/#signal) and for verifying it on Twitter.

HTTPS is good but does not solve every security problem. Please be aware of it
when surfing the web.

****

_Edit 2017-02-19_: added Referrer-Policy rule header to `.htaccess` snippet.
