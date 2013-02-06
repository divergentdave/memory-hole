Memory Hole
===========
> "The power to destroy a thing is the absolute control over it." -- Paul-Muad'Dib, Dune by Frank Herbert

Memory Hole is a bookmarklet that makes it easy to delete items from your Facebook activity log. You can use it to remove your personal information from your account, so it won't appear in your Timeline or the upcoming Graph Search interface.

Using it
--------
To install Memory Hole, drag this link into your browser's bookmarks.

<a href="javascript:%28function%28%29%7Bfor%28var%20f%3D%5B%5B%22a%22%2C%22contains%28%40class%2C%20%27uiPopoverButton%27%29%22%2C%22Menus%20opened%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dremove_content%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunlike%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunvote%27%29%22%2C%22Items%20deleted%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dhide%27%29%22%2C%22Items%20hidden%22%5D%2C%5B%22a%22%2C%22contains%28%40ajaxify%2C%20%27/ajax/report.php%3Fcontent_type%3D2%27%29%22%2C%22Photos%20untagged%22%5D%2C%5B%22input%22%2C%22%40type%3D%27checkbox%27%20and%20%40name%3D%27untag%27%22%2C%22Untag%20boxes%20checked%22%5D%2C%5B%22input%22%2C%22%40type%3D%27submit%27%20and%20%40value%3D%27Continue%27%22%2C%22Continue%20buttons%20clicked%22%5D%2C%0A%5B%22input%22%2C%22%40type%3D%27button%27%20and%20%40name%3D%27ok%27%20and%20%28%40value%3D%27Unlike%27%20or%20%40value%3D%27Delete%27%20or%20%40value%3D%27Unvote%27%29%22%2C%22OK%20buttons%20clicked%20%28part%201%29%22%5D%2C%5B%22a%22%2C%22contains%28%40class%2C%20%27layerCancel%27%29%20and%20%40role%3D%27button%27%20and%20contains%28span/text%28%29%2C%20%27Okay%27%29%22%2C%22OK%20buttons%20clicked%20%28part%202%29%22%5D%5D%2Cl%3Dfunction%28%29%7Bfor%28var%20b%3Ddocument.body.clientHeight%2Ce%3Db%21%3Dj%2Ca%3D0%3Ba%3Cf.length%3Ba%2B%2B%29%7Bvar%20c%3Bc%3Ddocument.evaluate%28%22//%22%2Bf%5Ba%5D%5B0%5D%2B%22%5B%28%22%2Bf%5Ba%5D%5B1%5D%2B%22%29%20and%20not%28%40data-mh-visited%29%5D%22%2Cdocument%2Cnull%2CXPathResult.UNORDERED_NODE_SNAPSHOT_TYPE%2Cnull%29%3Bfor%28var%20g%3D0%3Bg%3Cc.snapshotLength%3Bg%2B%2B%29%7Bvar%20h%3D%0Ac.snapshotItem%28g%29%3Bh%26%26%28h.setAttribute%28%22data-mh-visited%22%2C%22%22%29%2Ch.click%28%29%29%7Dc%3Dc.snapshotLength%3Bd%5Ba%5D%2B%3Dc%3B0%3Cc%26%26%28e%3D%210%29%7Dif%28e%29j%3Db%2Cwindow.scrollTo%280%2Cb%29%3Belse%20if%28k%2B%2B%2C5%3D%3Dk%29%7Bb%3D%22Done%22%3Bfor%28a%3D0%3Ba%3Cd.length%3Ba%2B%2B%29b%2B%3D%22%5Cn%22%2Bf%5Ba%5D%5B2%5D%2B%22%3A%20%22%2Bd%5Ba%5D%3Balert%28b%29%3Breturn%7Dwindow.setTimeout%28l%2C1E3%29%7D%2Cj%3D0%2Ck%3D0%2Cd%3DArray%28f.length%29%2Ce%3D0%3Be%3Cd.length%3Be%2B%2B%29d%5Be%5D%3D0%3Bl%28%29%7D%29%28%29%3B%0A">Memory Hole</a>

Next, go to your Facebook profile, and click on Activity Log. From the menu on the left, pick which category of information you would like to delete. ("Likes" is a good place to start, "All" is reserved for only the bravest) Click on the category label, take a deep breath, and then click on "Memory Hole" from your bookmarks. Your browser will then scroll down the page, automatically clicking delete on every item. Once this is done, you will get a report of how many items were removed or hidden.

Disclaimers
-----------
Memory Hole is not produced by, endorsed by, or in any way related to Facebook. Memory Hole will not ask for your login credentials, post to or with your account, communicate with third-party servers, or collect or store your personal information. Read the source if you don't believe me.

Inspiration
-----------
http://suicidemachine.org/download/Web_2.0_Suicide_Machine.pdf

https://www.facebook.com/about/graphsearch
