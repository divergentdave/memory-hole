#!/bin/sh
if [ ! -d "compiler-latest" ]; then
  curl -O "http://closure-compiler.googlecode.com/files/compiler-latest.zip"
  unzip compiler-latest.zip -d compiler-latest && rm compiler-latest.zip
fi
java -jar compiler-latest/compiler.jar --js memory-hole.js --js_output_file memory-hole.min.js
python escape.py
dos2unix --u2d memory-hole.min.js
