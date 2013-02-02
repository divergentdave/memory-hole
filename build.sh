#!/bin/sh
if [ ! -d "compiler-latest" ]; then
  curl -O "http://closure-compiler.googlecode.com/files/compiler-latest.zip"
  unzip compiler-latest.zip -d compiler-latest && rm compiler-latest.zip
fi
java -jar compiler-latest/compiler.jar --js memory-hole.js --js_output_file memory-hole.min.js

cat << 'END' > README.md
Memory Hole
===========
> "The power to destroy a thing is the absolute control over it." -- Paul-Muad'Dib, Dune by Frank Herbert

Memory Hole is a bookmarklet that makes it easy to delete items from your Facebook activity log. You can use it to remove your personal information from your account, so it won't appear in your Timeline or the upcoming Graph Search interface.

Using it
--------
To install Memory Hole, drag this link into your browser's bookmarks.

END

echo -n '<a href="javascript:' >> README.md
python -c "import urllib; open('README.md', 'a').write(urllib.quote(open('memory-hole.min.js', 'r').read()))"
echo '">Memory Hole</a>' >> README.md

cat << 'END' >> README.md

Next, go to your Facebook profile, and click on Activity Log. From the menu on the left, pick which category of information you would like to delete. ("Likes" is a good place to start, "All" is reserved for only the bravest) Click on the category label, take a deep breath, and then click on "Memory Hole" from your bookmarks. Your browser will then scroll down the page, automatically clicking delete on every item. Once this is done, you will get a report of how many items were removed or hidden.

Disclaimers
-----------
Memory Hole is not produced by, endorsed by, or in any way related to Facebook. Memory Hole will not ask for your login credentials, post to or with your account, communicate with third-party servers, or collect or store your personal information. Read the source if you don't believe me.

Inspiration
-----------
http://suicidemachine.org/download/Web_2.0_Suicide_Machine.pdf

https://www.facebook.com/about/graphsearch
END
