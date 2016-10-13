Change Log
================================================================================

All notable changes to the structure and content of the blog
[matjaz.it](https://matjaz.it/) will be documented in this file.

This changelog tries to adhere to the
[Keep a Changelog](http://keepachangelog.com) format as much as possible. The
notable exceptions are:

- no [Semantic versioning](http://semver.org): the version numbers are simply
  dates in ISO format since each version of the blog means a new post/page or a
  change of the content, not a new feature, bugfix or compatibility break, since
  the website is completely static.
- no `Deprecated` and `Security` group changes for the same reason as in the 
  previous point.



2016-08-08
---------------------------------------

A new blog post about why I chose my new blog Hugo theme in a minimalist style.


### Added

- New post on why a minimalist-looking blog may be a good choice for your
  visitors. The guidelines from my experience.
  

### Changed

Nothing.


### Removed

Nothing.


### Fixed

Nothing.



2016-07-27
---------------------------------------

My slides are online on a page, there is a new post of the #HugoPowerUser series
and my Signal fingerprint is available.


### Added

- New post on how to make your Hugo website even faster by configuring the
  web server and minifying the content.
- Slides/talks page with my presentations and link on the home page.
- Contact page now has Signal fingerprint as clear text, GPG signed text and QR
  code and the link to my pgp public key on the pgp.mit.edu keyserver.
- Last modification date, if any, of a post next to the publishing date in the
  home page, in post listings and in the post itself.
 

### Changed

- Improved the legal notice page, removing redundancy and clarifying how the
  website is privacy oriented.
- Added HTML meta keywords without carons.
- Taxonomies URLs with singular taxonomies get 301-redirected to the plural
  ones.


### Removed

Nothing.


### Fixed

- Run spellchecker `ispell` on all previous posts and pages, fixing typos.
- Redirections from `gustin.it` and `www.` domains now work correctly,
  transferring the whole path.
- Improved browser caching times.
- Fixed browser returning cached version of a page instead of checking for a new
  one for too long periods.



2016-07-19
---------------------------------------

New post of the #HugoPowerUser series, new shortcode, minor fixes on previous
post and 2 pages.


### Added

- New post on how to make your Hugo website better understandable by humans,
  the second part of the previous post.
- Add `{{< code >}}` shortcode for code block with correct highlighting.


### Changed

- Suggestion about CTRL+F in human sitemap.
- Link to sitemap in 404 error page.
- Highlighting and content fixes in previous post _"#HugoPowerUser: make it web
  friendly pt. 2"_: improved highlighting, regex and sitemap content.


### Removed

Nothing.


### Fixed

- Permissions of font files.
- Spellcheck of this changelog file.



2016-07-13
---------------------------------------

New post of the #HugoPowerUser series, small web server fixes.


### Added

- New post on how to make your Hugo website better accessible and understandable
  for search engines and browsers.
- MIME type for Woff2 font files in the web server configuration.


### Changed

- All 301-Redirections are now case insensitive.
- Switched Apache compression method from `mod_gzip` to `mod_deflate`.


### Removed

Nothing.


### Fixed

- Website language code from `en-us` to `en-US`.



2016-07-10
---------------------------------------

Small fixes on the web server, fonts and other stuff and the second post of the
#HugoPowerUser series.


### Added

- New post on how to organize your Hugo content, second of the series
  #HugoPowerUser.
- HTTP 301-Redirection from old RSS feed URL to new one to avoid problems with
  feed readers.
- HTTP Reply headers with content language (en-US) and encoding (UTF-8).


### Changed

- Link to BSD license in the footer now points to the local BSD license page
  instead of Wikipedia.
- Improved `humans.txt` file and added the `<link>` tag to it in the HTML head.
- Last post title uses the hashtag `#HugoPoweruser` and the tag `hugo power
  user` is capitalized in `Hugo Power User`.
  

### Removed

Nothing.


### Fixed

- Added missing bold, italic, bold+italic font faces for Roboto and Inconsolata,
  resulting in simulated boldness in the body text of post and pages (thanks to
  [Lorenzo](https://twitter.com/j0ined/status/751757449191952384) for the heads
  up!)
- Header size for `Speedup` in this Changelog.
- Added anchors in regexes for 301-Redirections to avoid redirection of URL with
  the regex inside of them instead of the exact URL match.
- Title with ` :` on `/page/` and `/post`/ URLs.
- Added missing Gzip compression for Woff2 file types used for fonts.



2016-07-08
---------------------------------------

A lot of improvements, optimizations and fixes from the previous versions
while keeping the looks mostly similar except for some slight difference of the
home page.


### Added

- New post on why to choose [Hugo](https://gohugo.io/) for your blog/website 
  instead of Wordpress.
- Favicons for every device, browser and shortcut icon thanks to the 
  [Real Favicon Generator](https://realfavicongenerator.net/).
- KeyBase verification file (same as used in previous version of the blog).
- HTML head meta tags for website description, keywords, author, license.
- [Site map for humans](https://matjaz.it/sitemap/) as suggested by 
  [varvy.com](https://varvy.com/).
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) is the monospaced
  font whenever `<pre>` or `<code>` tags are used.
- Pages with list of [tags](https://matjaz.it/tags/) and 
  [categories](https://matjaz.it/categories/) sorted by number of posts
- A [list](THANKS.md) of all software used to create the blog.
- `series` shortcode to list the posts sharing a tag, useful for listing all
  posts of a series


### Changed

- The website content is now under the
  [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)
  so the _ShareAlike_ part is removed and anyone is more free to use it.
- The source code parts and snippets published on the website are licensed 
  under the [BSD 3-Clause License](https://matjaz.it/bsd-3-clause-license/).
- Enabled highlighting in 
  [The spam analysis post](matjaz.it/a-spammer-spoofed-my-e-mail-analysis-of-a-spam-attack/) 
  otherwise the verbatim text was too wide for the content column and not
  scrollable horizontally.
- The home page provides some metadata under each post title:
    - published date, as before but smaller
    - category of the post, so the reader get's an idea what it will be about
    - the post description, as specified in the frontmatter, is printed as 
      a synopsis of the post
- Improved pages that list the content for a specified tag or category: the 
  taxonomy name is in the title and some post metadata is listed under each
  entry
- More space around each title and subtitle in the posts
- Increased contrast in code highlighting for code snippets
- Code snippets license changed to BSD 3-Clause instead of MIT or Mozilla 
  Public License v2.0.


#### Speedup

- Website logo and contact icons are inline-SVG to avoid extra connections and
  to be sharp on any display (retina and non-retina). They were also optimized
  with Inkscape and compressed with 
  [Inline SVG Optimizer](https://petercollingridge.appspot.com/svg-optimiser).
- The link to the CSS file is moved to bottom of `<body>` to reduce the time to
  show something on the screen and improve the Google PageSpeed rank.
- The fonts required for the website are served from the same domain to improve
  speed (less DNS lookups and better performance if HTTP/2 is used) and reduce
  user tracking
- Highlight.js, the JavaScript file required for code highlighting, is also 
  served from the same domain. It's CSS components are incorporated in the same
  unified CSS file for the whole website since they are very small (600 B).
- Added `.htaccess` file with directives for 404, gzip, connection keep-alive, 
  browser cache usage and 301 redirects (to avoid the HTML redirects Hugo does)


### Removed

- Embedded TED talk since uses cookies
- Website background from [About](https://matjaz.it/about/) page


### Fixed

- RSS Feed `<link>` tag contained a wrong attribute
- Reordered and improved [Legal notice](https://matjaz.it/legal-notice/) page
- Singular and plural of the word `minute` in the reading time subtitle
- Content column is a little bit wider (no more limitation at 90%) so it's more
  readable on portrait smartphones
- Tags and categories names: merged "Life hack" and "Lifehacks" and so on.



2016-06-18
---------------------------------------

This is the first version of my blog made with Hugo so it has a lot of changes
compared to my previous Wordpress-based one. Some changes are in the code (e.g.:
the RSS feed is different), some are in the content (e.g.: the blog has now a
footer).


### Added

- Blog structure made with [Hugo](https://gohugo.io). The content is imported
  from my previous version of the blog, **URLs should mostly be the same**.
- Custom theme based on the [Hugo Zen](https://themes.gohugo.io/hugo-zen/) theme
  with contact icons from [Decode](https://www.machothemes.com/themes/decode/)
  theme for Wordpress.
- This Changelog, the Readme and the License of the project.
- A contact page link in the footer
- A legal notice page for the Copyright, Privacy and Disclaimer
- A [humans.txt](https://matjaz.it/humans.txt) file


### Changed

- The home page now lists just the titles of the posts instead of the full
  content for the sake of simplicity and less bandwidth.
- The RSS feed has a new link: <https://matjaz.it/index.xml> instead of
  <https://matjaz.it/feed/>.
- The website content I wrote is now under the
  [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
- The [robots.txt](https://matjaz.it/robots.txt) file is much simpler.
- Simplified the 404 error page.
- Customized footer content and date format for each post.
- The images in the content have now a title and caption where needed, using 
  the `<figure>` tag thanks to the Hugo shortcode `{{< figure >}}`


#### Speedup

- Loaded images are now thumbnails of the full-sized images available when
  clicking on the image
- CSS files are unified into one minified file for faster website loading
- Highlighting CSS and JavaScript are loaded only when a post requires it and 
  not on any page, including the home page
- The home page loads only the post titles to make it super fast and simple


### Removed

- My second published post
- Some unnecessary images from the
  [Standing desk for 8 € tutorial](https://matjaz.it/diy-standing-desk-for-8-euro/)
- All _featured images_ which were kind of needed in Wordpress


### Fixed

- Simplified all old content, especially the language and formatting: the
  message of each post stays the same.
