#!/bin/python
import urllib
minified = open('memory-hole.min.js', 'r').read()
quoted = urllib.quote(minified)
template = open('../memory-hole-gh-pages/index.template.html', 'r').read()
substituted = template.replace('REPLACEME', quoted)
open('../memory-hole-gh-pages/index.html', 'w').write(substituted)

