# octicons-glyphsearch-crawler [![Build Status](https://api.shippable.com/projects/53b6a55e03574b62009906e0/badge/master)](https://www.shippable.com/projects/53b6a55e03574b62009906e0/builds/7)
> Create JSON file of all [Octicons](http://octicons.github.com/) for [GlyphSearch](http://glyphsearch.com/)

Useful when you have a thing that only works with specific versions of a binary.

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
