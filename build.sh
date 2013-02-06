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

Memory Hole is a bookmarklet that makes it easy to erase your posts, comments, likes, and tags on Facebook. You can use it to remove your personal information from your account so that it won't appear in your Timeline or the upcoming Graph Search interface.

Using it
--------
To install Memory Hole, drag this link into your browser's bookmarks.

END

echo -n '<a href="javascript:' >> README.md
python -c "import urllib; open('README.md', 'a').write(urllib.quote(open('memory-hole.min.js', 'r').read()))"
echo '">Memory Hole</a>' >> README.md

cat << 'END' >> README.md

Go to your Facebook profile, click on "Memory Hole" from your bookmarks, and follow the directions from the overlay on the lower right corner of your screen.

From your Activity Log, pick a category of information you would like to delete. ("Likes" is a good place to start, "All" is reserved for only the bravest) Click on the category label, check the confirmation box, and click "Delete everything in this list." Your browser will then scroll down the page, automatically clicking delete on every item. The overlay will count up how many items have been clicked and tell you when deletion is done.

Disclaimers
-----------
Memory Hole is not produced by, endorsed by, or in any way related to Facebook. Memory Hole will not ask for your login credentials, post to or with your account, communicate with third-party servers, or collect or store your personal information. Read the source if you don't believe me.

Inspiration
-----------
http://suicidemachine.org/download/Web_2.0_Suicide_Machine.pdf

https://www.facebook.com/about/graphsearch
END

dos2unix --u2d README.md memory-hole.min.js
