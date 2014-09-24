# octicons-glyphsearch-crawler [![Build Status](http://img.shields.io/travis/matiassingers/octicons-glyphsearch-crawler.svg?style=flat-square)](https://travis-ci.org/matiassingers/octicons-glyphsearch-crawler) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/octicons-glyphsearch-crawler.svg?style=flat-square)](https://gemnasium.com/matiassingers/octicons-glyphsearch-crawler)
> Creates JSON file of all [Octicons](http://octicons.github.com/) for [GlyphSearch](http://glyphsearch.com/)

See [GlyphSearch PR #25](https://github.com/thomaspark/glyphsearch/pull/25) for how this crawler was used.


## Usage

```sh
$ git clone git@github.com:matiassingers/octicons-glyphsearch-crawler.git && cd octicons-glyphsearch-crawler/
$ npm install
$ node octicons.js path-to-glyphsearch
```

If no argument is supplied, it'll output in current working directory as `icons-octicons.json`.

## Example

```sh
$ node octicons.js ../glyphsearch/
writing file to ../glyphsearch/data/icons-octicons.json
```

## License
MIT © [Matias Singers](http://mts.io)
