#!/bin/sh
if [ ! -d "compiler-latest" ]; then
  curl -O "http://closure-compiler.googlecode.com/files/compiler-latest.zip"
  unzip compiler-latest.zip -d compiler-latest && rm compiler-latest.zip
fi
java -jar compiler-latest/compiler.jar --js memory-hole.js --js_output_file memory-hole.min.js

cat << 'END' > README.md
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
END
echo -n 'Hello world. <a href="javascript:' >> README.md
python -c "import urllib; open('README.md', 'a').write(urllib.quote(open('memory-hole.min.js', 'r').read()))"
echo '">Bookmarklet</a> Etcetera.' >> README.md
