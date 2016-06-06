+++
aliases      = []
categories   = ["Privacy and Security"]
date         = "2016-02-12T15:35:32+00:00"
description  = "My tutorial on creating a PGP keypair with GPG and using Keybase"
draft        = false
slug         = "creating-a-strong-new-pgp-keypair-and-post-it-on-keybase"
tags         = ["GnuPG", "PGP", "Keybase", "Privacy", "Security", "E-mail"]
title        = "Creating a strong new PGP keypair and post it on Keybase"
type         = "post"
weight       = 0
+++


The learning curve for PGP is steep. It took me a while to get the basics and understand how to use `gpg`, but the real problem was: I was afraid to do something the wrong way and end up with, you know, my private key published. Ups!

I still am, but some really good tutorials helped me to create a new better PGP keypair. **Yes, I removed the old one**. Also [Keybase](https://keybase.io) makes many things easier and I wanted to create something nice and clean this time.

**My [Keybase profile](https://keybase.io/TheMatjaz) now holds my new [public key](https://keybase.io/TheMatjaz/key.asc).**



### Hmm, what is this PGP/GPG?



[Check this comprehensive tutorial!](https://futureboy.us/pgp.html)



### Creating a new keypair with subkeys and strong hashes



[This excellent post](https://alexcabal.com/creating-the-perfect-gpg-keypair/) by Alex Cabal explains really clearly how to create a keypair known as your _master keypair_ that generates the subkeys you will actually use on your computer/phone. This allows revoking just the subkeys instead of the master keypair if your machine gets stolen. Check it out, it's not that hard, actually.

The article is based on the [Debian Wiki page about subkeys](https://wiki.debian.org/Subkeys?action=show&redirect=subkeys) which holds a little more information but not so clearly explained.



### Inserting a small enough picture in the public key



[Simon Josefsson explains](https://blog.josefsson.org/2014/06/19/creating-a-small-jpeg-photo-for-your-openpgp-key/) the way he did to drastically cut the size of the picture he inserted in his public PGP key. It helped me a lot to reduce mine to avoid the _"The image is really big"_ error.



### Adding UID (email addresses) on the key



Since I use more than one e-mail address, to simplify the whole PGP thing, I use one key for many addresses. [Kate's comment](https://www.katescomment.com/how-to-add-additional-email-addresses-to-your-gpg-identity/) has a nice post about adding more addresses into on key while the [StackExchange answer](http://superuser.com/questions/293184/one-gnupg-pgp-key-pair-two-emails) is obviously more direct.

Remember to choose the correct primary address. To rearrange the many addresses in a nice order (but it has no value for the protocol), follow [this trick](http://unix.stackexchange.com/questions/153309/rearrange-uids-in-gpg).



### More PGP best practices



There is a [huge list](https://help.riseup.net/en/security/message-security/openpgp/best-practices) of things one should or should not do with the PGP keypair, such as not relying on the key ID but on the fingerprint. Completely worth reading!



### Using the `gpg` command or... create OS X shortcuts



The [Digital Ocean guide](https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages-on-an-ubuntu-12-04-vps) is pretty clear on how to use the `gpg` command, while [this really nice Gangi article](http://notes.jerzygangi.com/the-best-pgp-tutorial-for-mac-os-x-ever/) explains how to set up some OS X keyboard shortcuts to encrypt/decrypt/sign/verify a PGP text as easily as performing a copy-paste.



### Setting `AES256` as the default symmetric encryption cypher for `gpg`



It's as easy as adding the line `cipher-algo AES256` at the end of the `gpg` configuration file, which is in `~/.gnupg/gpg.conf`.



### Putting all on Keybase and on a keyserver



Keybase offers a PGP keyserver that cross-check and confirms your identity _"the social way"_, while keeping the whole website and command line tool [open source](https://github.com/keybase) which is a huge plus. Also, they always ask you: if you want to give them your _private key_ to use advanced functionalities of their website, no problem - they will encrypt it. But if you don't trust them enough, just don't do it and it's completely fine!! To use their site, just follow their tutorials.

My [Keybase profile](https://keybase.io/TheMatjaz) now holds my new [public key](https://keybase.io/TheMatjaz/key.asc).

[Upload the key](https://futureboy.us/pgp.html#UploadingViaGPG) also to a keyserver. I suggest this one: `hkps.pool.sks-keyservers.net`
