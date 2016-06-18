+++
aliases      = []
categories   = ["Software"]
date         = "2015-11-30T20:51:48+00:00"
description  = "Wget alias to make it retry the download infinite times until it's done"
draft        = false
highlight    = true
slug         = "wget-retry-until-completed-alias"
tags         = ["Wget", "Shell", "Linux", "Download", "Software", "Connection"]
title        = "Wget retry-until-completed alias"
type         = "post"
weight       = 0
+++


`wget` is a great tool and may be used also in case of a low bandwidth. It works
also when the connection with a server is unstable for some reason and the
download of a file simply fails way to many times.

With this parameters `wget` tries and retries to download a specific file from
an URL until it is completely finished. Also it does not restart the download
from the beginning but continues from where it has stopped, if possible.

```bash
wget \
  --tries=0 \
  --retry-connrefused \
  --continue \
  --progress=bar \
  --show-progress \
  --timeout=30 \
  --dns-timeout=30 \
  --random-wait \
  --background \
  --append-output=/var/log/wget_background \
  URL
```

It is most useful as an alias in your `~/.bashrc` or `~/.zshrc` or whatever
shell you're using:

```bash
alias wget-infinite="wget --tries=0 --retry-connrefused --continue --timeout=30 --random-wait --background --append-output=/tmp/wget_background"
```

Note for OS X: if you installed `wget` through Homebrew, you may need the
`--with-iri` installation option.

To check the current status of your download (if there is only one simultaneous
download), run:

```bash
tail -2 /var/log/wget_background | head -1
```

which can be saved as an alias as well:

```bash
alias wget-infinite-status="tail -2 /tmp/wget_background | head -1"
```

