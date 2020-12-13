# docs

## Minimalism

I believe most websites nowadays are heavily overengineered. This blog is as simple as is
possible while meeting my goals below.

## Structure

The output structure is a near direct clone of the src and so easily debuggable.

### index.html

Every page is just some HTML so each page should be the full index.html with some
templates. I think it's the most transparent approach at the cost of minor boilerplate.

The alternative is e.g. index.html = body.html and injecting the HEAD automatically but
at the cost of clarity. I think the overall pros/cons of full templated index.html in each
directory makes most sense. Does mean I can't use markdown as easily but I'm ok with that
tradeoff as well.

### Templating

An issue with environment variable templating is I can't configure the variable.

E.g. if I want to embed `$HTML_BASE_HEAD` but don't want some specific tag in there set,
there's no clean way to indicate that.

May be better to use a proper templating language as well instead then. That way I could
easily include a markdown file or specify flags for injecting the base head.

## Dashes vs Underscores?

I picked underscores on the filesystem for the hacker aesthetic but dashes in the output
as dashes look way better with a proportional font in the browser.

```
https://nhooyr.io/time-to-give-back
https://nhooyr.io/time_to_give_back

https://nhooyr.io/time-to-give-back.html
https://nhooyr.io/time_to_give_back.html
```

Dashes just look wrong with an extension as well. Underscores look right.

Most websites also use dashes in my experience.

Dashes are also easier to type as you don't need shift.

### Trailing Slashes

Aesthetics are a cost but it's more consistent with how the root path `/` behaves and I
think that's a worthy tradeoff for working under a subpath proxy.

### Assets

Assets for each page are in the same directory. There is no seperate assets
directory. Use relative paths as they is work correctly due to the use of
trailing slashes!

### Caching

Caching is based on filenames to avoid the browser ever having to ping the
server before rendering. Also prevents deployment from screwing up anyone's current
browsing session as the `index.html` will always reference valid resources.

Does mean an extra step in my build process but I believe it's justified.
I'll prune old assets after 24 hours.

Furthermore, the HTML itself is cached for 24 hours.

## Development

Live reload will make editing my text much easier as since I'll be writing HTML, it'll be
hard to read the source directly. Similar work flow to using LaTeX.

Going to write my HTTP server in C as an experience. Will help me become familiar
with the POSIX networking APIs and enable much better graceful restart than Go.
