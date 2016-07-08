Change Log
===============================================================================

All notable changes to the structure and content of the blog
[matjaz.it](http://matjaz.it/) will be documented in this file.

This changelog tries to adhere to the
[Keep a Changelog](http://keepachangelog.com) format as much as possible. The
notable exceptions are:

- no [Semantic versioning](http://semver.org): the version numbers are simply
  dates in ISO format since each version of the blog means a new post/page or a
  change of the content, not a new feature, bugfix or compatibility break, since
  the website is completely static.
- no `Deprecated` and `Security` group changes for the same reason as in the 
  previous point.




2016-06-18
----------

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
- A [humans.txt](http://matjaz.it/humans.txt) file


### Changed

- The home page now lists just the titles of the posts instead of the full
  content for the sake of simplicity and less bandwidth.
- The RSS feed has a new link: <http://matjaz.it/index.xml> instead of
  <http://matjaz.it/feed/>.
- The website content I wrote is now under the
  [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
- The [robots.txt](http://matjaz.it/robots.txt) file is much simplier.
- Simplified the 404 error page.
- Customized footer content and date format for each post.
- The images in the content have now a title and caption where needed, using 
  the `<figure>` tag


##### Speedup

- Loaded images are now thumbnails of the full-sized images available when
  clicking on the image
- CSS files are unified into one minified file for faster website loading
- Highlighting CSS and JavaScript are loaded only when a post requires it and 
  not on any page, including the home page
- The home page loads only the post titles to make it super fast and simple


### Removed

- My second published post
- Some uneccessary images from the
  [Standing desk for 8 € tutorial](http://matjaz.it/diy-standing-desk-for-8-euro/)
- All _featured images_ which were kind of needed in Wordpress

### Fixed

- Simplified all old content, especially the language and formatting: the
  message of each post stays the same.
