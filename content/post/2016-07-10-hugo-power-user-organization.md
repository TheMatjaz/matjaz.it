+++
aliases = []
categories = ["Blog"]
date = "2016-07-10T20:10:37+02:00"
description = "Today we dive into how to organize the Hugo folder and the structure of the content you are going to publish on the web after a potential export from the previous CMS."
draft = false
highlight = true
slug = "hugo-power-user-organization"
tags = ["Hugo Power User", "Hugo", "Blog", "Git", "Wordpress"]
title = "#HugoPowerUser: content organization"
type = "post"
weight = 0

+++


## Prelude: exporting from other CMS, we need Markdown

The Hugo Documentation has a [list of tools](https://gohugo.io/tools/) you may
use to export and convert the content from your current blogging/website system
(CMS) to Hugo.

In my case it was from Wordpress and the
[Wordpress to Hugo Exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter)
failed miserably. What worked was [ExitWP](https://github.com/thomasf/exitwp), a
tool to migrate from Wordpress to Jekyll. My steps were

- Export Wordpress to an XML file in the _Export_ section in the settings of
  your admin panel
- Use ExitWP to convert it to Jekyll content.
- Import this into Hugo as stated in the docs (link above). I did not import
  automatically but manually edited each Markdown file (there was not much
  content in my case).

Be aware that:

- You need to set to _true_ the download of the images in the ExitWP
  configuration if you want any image from the posts' body.
- The featured images are not downloaded, only the ones in the body of the post.
- Drafts are not converted. Do them manually.
- Notice that ExitWP has some dependency problems. I managed to make it work
  nice in my Linux VM where I don’t care if I install too many things with the
  package manager.
 
Once we have a bunch of Markdown files more or less organized and cleaned, it's
time to think how to keep our blog source code organized.


## Make it a Git repository

I strongly suggest using Git (Mercurial also works fine) to version your content
and any change on the website. This makes it very very easy to rollback whenever
you break some CSS code somewhere, for instance. It also comes handy when more
than one author writes for the same Hugo website, for backups (just `git push`
somewhere) or publishing (same `git push` in some cases).

The [Git-Flow workflow](http://nvie.com/posts/a-successful-git-branching-model/)
is also great and highly recommended. A _feature_ may be just a new post, a
_release_ is whatever you do before updating the website and pushing/rsyncing
the changes.

- Choose a folder where to store the source files of the website.
- Run `git init` in it.
- Initialized the Hugo folder structure with `hugo new site .`
- Follow any on-screen instructions to download a
  [theme](https://themes.gohugo.io/), basically you need to run something like
  `git clone https://github.com/spf13/hyde themes/`


### Optional: don't use the `themes` folder

I moved the theme files from any subfolder of the `themes` directory in the
folders with the same name in the root of your website. For instance anything in
the `hugo-website-root/themes/layout` directory went to the
`hugo-website-root/layout/` directory.

**Pro**: you don't have to deal with any Git subrepo/subtree/submodule to keep
the theme versioned.

**Con**: you need to choose your theme before you start.


## Add a Readme, License and Changelog

If you want to make your website's source code open,
[add a License](http://choosealicense.com/) now! It
[helps](https://blog.codinghorror.com/pick-a-license-any-license/) anyone else
that will see your code in the future.

Even for non-open source projects, write a Readme file as if it were to
understand what the repository is about.

And finally [keep an organized changelog](http://keepachangelog.com/) of your
website. It helps you understand the work you have done. If you are in doubt
about this one, check
[my changelog of this website](https://github.com/TheMatjaz/matjaz.it/blob/master/CHANGELOG.md).


## Choose the content types and create the archetypes

Thinks about what your website will be about. Is it a blog? Then maybe you need
something like _posts_. Is it a professional website? What about _pages_? Those
are just _names_, they don't matter on their own, but their appearence on the
website can be heavily customized.

For my blog I use _posts_ and _pages_: the difference is that pages are more
static and don't get published regularly, like the About page or a CV page or a
Legal notice/Disclaimer page. I will use those two as examples.

- Create the required subfolders in the `content/` directory. Example:
  `content/page` and `content/post`
- Create the required archetype files in the `archetypes/` directory. Example:
  `archetypes/page.md` and `archetypes/post.md`

The archetypes define the frontmatter (content metadata) that will be copied and
partially filled in a new content file whenever `hugo new post/a-post-title.md`
is called (works for any content type, obviously). Try to put a lot of
information in the archetypes. Here is my `post` archetype:

```
+++
aliases      = []
categories   = []
date         = ""
description  = ""
draft        = true
highlight    = false
slug         = ""
tags         = []
title        = ""
type         = "post"
weight       = 0
+++
```

The `page` one is basically the same without `tags` and `categories`. The
`highlight` option is a tweak of mine I use to load the code highlighting
library Highlight.js only on posts that require it (faster loading). Please
notice the `type`: this is no Hugo default, I added it. **You can add any option
you desire and think it may be useful.** I use the `type` field to easily sort
the posts from the pages.

For instance, creating a shortcode to list the pages looks something like this:

```html
<ul>
{{ range (where .Site.Pages.ByTitle ".Type" "post") }}
    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
{{ end }}
</ul>
```


## Content filenames

I add the current date in ISO format at the beginning of each content filename
to keep them sorted and to understand what is newer without opening the files
and looking at the frontmatter.

```
content/post
├── 2014-01-16-hi-out-there.md
├── 2014-04-26-cool-time-saving-tech-tips-everybody-should-know.md
├── 2014-05-19-diy-standing-desk-for-8-euro.md
...
└── 2016-07-10-hugo-power-user-organization.md
```


## Be sure to have lists, singles and terms layouts

What are those?

- A `single.html` layout is a file in `layouts/` that is used as a template to
  render a single post or page.
- A `list.html` is the same for a list of posts, which happens when you click on
  a tag or category.
- A `terms.html` is the page that get's rendered when you visit the page on
  `/your-taxonomy-name/`, in my case [`/tags/`](/tags/) or
  [`/categories`](/categories/).

If you don't have any of those, check the
[documentation about templates](https://gohugo.io/templates/overview/) and
create the required files.


## Set all possible options in the configuration file

Hugo supports
[a lot of variables](https://gohugo.io/overview/configuration#configuration-variables)
for the configuration file. Set them, a lot of them at your desire. Here are
some musts, in my opinion:

- `canonifyURLs = true` transforms all URLs to absolute using the `baseURL`
  setting. This is very handy to be explicit about the content position and
  enforce `HTTPS` if you use it in the `baseURL` setting.
- `copyright = "Creative Commons Attribution 4.0 International License"` or
  whatever your copyright notice is. It get's written also in the RSS Feed.
- `enableRobotsTXT = true` to get an dynamically generated `robots.txt` file
  (more about it in a later post).
- `languageCode = "en-us"` explicit language declatarion.
- `log = true`, `logFile = "hugo.log"`, `verboseLog = true` are all setting that
  could come handy whenever something does not work. I keep them active all the
  time.
- `metaDataFormat = "toml"` you may be explicit about this as well.
- `verbose = true` the output of the Hugo command adds a lot of information and
  warnings when this option is active.

Also enable the sitemap option:

```
[sitemap]
    changefreq = "weekly"
    priority = 0.5
```


## Configure the permalinks

You may want to configure the permalinks of your new website's content with the
same format as they were with the previous CMS. Use the permalinks option in the
configuration file to achieve it. My settings are:

```
[permalinks]
    post = "/:slug/"
    page = "/:slug/"
```

The result is visible in the address bar in your browser.


## More to come

That was it about organizing your content folder and structure of the website.
More about themes and web tweaks to come in the future posts of the series.

{{< series "Hugo Power User" >}}
