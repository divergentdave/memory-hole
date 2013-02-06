Memory Hole
===========
> "The power to destroy a thing is the absolute control over it." -- Paul-Muad'Dib, Dune by Frank Herbert

Memory Hole is a bookmarklet that makes it easy to delete items from your Facebook activity log. You can use it to remove your personal information from your account, so it won't appear in your Timeline or the upcoming Graph Search interface.

Using it
--------
To install Memory Hole, drag this link into your browser's bookmarks.

<a href="javascript:%28function%28%29%7Bfor%28var%20d%3D%5B%5B%22a%22%2C%22contains%28%40class%2C%20%27uiPopoverButton%27%29%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dremove_content%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunlike%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunvote%27%29%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dhide%27%29%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27/ajax/report.php%3Fcontent_type%3D2%27%29%22%5D%2C%5B%22input%22%2C%22%40type%3D%27checkbox%27%20and%20%40name%3D%27untag%27%22%5D%2C%5B%22input%22%2C%22%40type%3D%27submit%27%20and%20%40value%3D%27Continue%27%22%5D%2C%5B%22input%22%2C%22%40type%3D%27button%27%20and%20%40name%3D%27ok%27%20and%20%28%40value%3D%27Unlike%27%20or%20%40value%3D%27Delete%27%20or%20%40value%3D%27Unvote%27%29%22%5D%2C%5B%22a%22%2C%0A%22contains%28%40class%2C%20%27layerCancel%27%29%20and%20%40role%3D%27button%27%20and%20contains%28span/text%28%29%2C%20%27Okay%27%29%22%5D%5D%2Cl%3Dfunction%28%29%7Bfor%28var%20b%3Ddocument.body.clientHeight%2Cj%3Db%21%3Dh%2Cc%3D0%3Bc%3Cd.length%3Bc%2B%2B%29%7Bvar%20a%3Ba%3Ddocument.evaluate%28%22//%22%2Bd%5Bc%5D%5B0%5D%2B%22%5B%28%22%2Bd%5Bc%5D%5B1%5D%2B%22%29%20and%20not%28%40data-mh-visited%29%5D%22%2Cdocument%2Cnull%2CXPathResult.UNORDERED_NODE_SNAPSHOT_TYPE%2Cnull%29%3Bfor%28var%20f%3D0%3Bf%3Ca.snapshotLength%3Bf%2B%2B%29%7Bvar%20g%3Da.snapshotItem%28f%29%3Bg%26%26%28g.setAttribute%28%22data-mh-visited%22%2C%22%22%29%2Cg.click%28%29%29%7Da%3Da.snapshotLength%3Be%5Bc%5D%2B%3Da%3B0%3Ca%26%26%28j%3D%210%29%7Dif%28j%29h%3Db%2Cwindow.scrollTo%280%2Cb%29%3Belse%20if%28k%2B%2B%2C%0A5%3D%3Dk%29%7Balert%28%22Done%5Cn%22%29%3Breturn%7Dwindow.setTimeout%28l%2C1E3%29%7D%2Ch%3D0%2Ck%3D0%2Ce%3DArray%28d.length%29%2Cb%3D0%3Bb%3Ce.length%3Bb%2B%2B%29e%5Bb%5D%3D0%3Bl%28%29%7D%29%28%29%3B%0A">Memory Hole</a>

Next, go to your Facebook profile, and click on Activity Log. From the menu on the left, pick which category of information you would like to delete. ("Likes" is a good place to start, "All" is reserved for only the bravest) Click on the category label, take a deep breath, and then click on "Memory Hole" from your bookmarks. Your browser will then scroll down the page, automatically clicking delete on every item. Once this is done, you will get a report of how many items were removed or hidden.

Disclaimers
-----------
Memory Hole is not produced by, endorsed by, or in any way related to Facebook. Memory Hole will not ask for your login credentials, post to or with your account, communicate with third-party servers, or collect or store your personal information. Read the source if you don't believe me.

Inspiration
-----------
http://suicidemachine.org/download/Web_2.0_Suicide_Machine.pdf

https://www.facebook.com/about/graphsearch
