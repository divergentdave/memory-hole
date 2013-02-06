Memory Hole
===========
> "The power to destroy a thing is the absolute control over it." -- Paul-Muad'Dib, Dune by Frank Herbert

Memory Hole is a bookmarklet that makes it easy to delete items from your Facebook activity log. You can use it to remove your personal information from your account, so it won't appear in your Timeline or the upcoming Graph Search interface.

Using it
--------
To install Memory Hole, drag this link into your browser's bookmarks.

<a href="javascript:%28function%28%29%7Bfunction%20a%28a%2Cf%29%7Bfor%28var%20b%3Ddocument.evaluate%28%22//%22%2Ba%2B%22%5B%28%22%2Bf%2B%22%29%20and%20not%28%40data-mh-visited%29%5D%22%2Cdocument%2Cnull%2CXPathResult.UNORDERED_NODE_SNAPSHOT_TYPE%2Cnull%29%2Cc%3D0%3Bc%3Cb.snapshotLength%3Bc%2B%2B%29%7Bvar%20d%3Db.snapshotItem%28c%29%3Bd%26%26%28d.setAttribute%28%22data-mh-visited%22%2C%22%22%29%2Cd.click%28%29%29%7Dreturn%20b.snapshotLength%7Dvar%20j%3Dfunction%28%29%7Bvar%20e%3Ddocument.body.clientHeight%2Cf%3Da%28%22a%22%2C%22contains%28%40class%2C%20%27uiPopoverButton%27%29%22%29%2Cb%3Da%28%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dremove_content%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunlike%27%29%20or%20contains%28%40ajaxify%2C%20%27action%3Dunvote%27%29%22%29%2C%0Ac%3Da%28%22a%22%2C%22contains%28%40ajaxify%2C%20%27action%3Dhide%27%29%22%29%2Cd%3Da%28%22a%22%2C%22contains%28%40ajaxify%2C%20%27/ajax/report.php%3Fcontent_type%3D2%27%29%22%29%2Ck%3Da%28%22input%22%2C%22%40type%3D%27checkbox%27%20and%20%40name%3D%27untag%27%22%29%2Cl%3Da%28%22input%22%2C%22%40type%3D%27submit%27%20and%20%40value%3D%27Continue%27%22%29%2Cm%3Da%28%22input%22%2C%22%40type%3D%27button%27%20and%20%40name%3D%27ok%27%20and%20%28%40value%3D%27Unlike%27%20or%20%40value%3D%27Delete%27%20or%20%40value%3D%27Unvote%27%29%22%29%2Cn%3Da%28%22a%22%2C%22contains%28%40class%2C%20%27layerCancel%27%29%20and%20%40role%3D%27button%27%20and%20contains%28span/text%28%29%2C%20%27Okay%27%29%22%29%3Bif%28e%3D%3Dg%26%260%3D%3Df%26%260%3D%3Db%26%260%3D%3Dc%26%260%3D%3Dd%26%260%3D%3Dk%26%260%3D%3Dl%26%260%3D%3Dm%26%260%3D%3Dn%29%7Bif%28h%2B%2B%2C5%3D%3Dh%29%7Balert%28%22Done%2C%20deleted%20%22%2B%0Ab%2B%22%20items%2C%20hid%20%22%2Bc%2B%22%20items%2C%20and%20untagged%20%22%2Bd%2B%22%20items%22%29%3Breturn%7D%7Delse%20g%3De%2Cwindow.scrollTo%280%2Ce%29%3Bwindow.setTimeout%28j%2C1E3%29%7D%2Cg%3D0%2Ch%3D0%3Bj%28%29%7D%29%28%29%3B%0A">Memory Hole</a>

Next, go to your Facebook profile, and click on Activity Log. From the menu on the left, pick which category of information you would like to delete. ("Likes" is a good place to start, "All" is reserved for only the bravest) Click on the category label, take a deep breath, and then click on "Memory Hole" from your bookmarks. Your browser will then scroll down the page, automatically clicking delete on every item. Once this is done, you will get a report of how many items were removed or hidden.

Disclaimers
-----------
Memory Hole is not produced by, endorsed by, or in any way related to Facebook. Memory Hole will not ask for your login credentials, post to or with your account, communicate with third-party servers, or collect or store your personal information. Read the source if you don't believe me.

Inspiration
-----------
http://suicidemachine.org/download/Web_2.0_Suicide_Machine.pdf

https://www.facebook.com/about/graphsearch
