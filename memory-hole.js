(function(){
var click_data = [
  ['a', "contains(@class, 'uiPopoverButton')", "Menus opened"],
  ['a', "contains(@ajaxify, 'action=remove_content') or contains(@ajaxify, 'action=unlike') or contains(@ajaxify, 'action=unvote')", "Items deleted"],
  ['a', "contains(@ajaxify, 'action=hide')", "Items hidden"],
  ['a', "contains(@ajaxify, '/ajax/report.php?content_type=2')", "Photos untagged"],
  ['input', "@type='checkbox' and @name='untag'", "Untag boxes checked"],
  ['input', "@type='submit' and @value='Continue'", "Continue buttons clicked"],
  ['input', "@type='button' and @name='ok' and (@value='Unlike' or @value='Delete' or @value='Unvote')", "OK buttons clicked (part 1)"],
  ['a', "contains(@class, 'layerCancel') and @role='button' and contains(span/text(), 'Okay')", "OK buttons clicked (part 2)"]
];

function main()
{
  var lastHeight = 0;
  var stallCount = 0;
  var totals = new Array(click_data.length);
  for (var i = 0; i < totals.length; i++) {
    totals[i] = 0;
  }

  function check()
  {
    var currentHeight = document.body.clientHeight;
    var anyChange = (currentHeight != lastHeight);

    for (var i = 0; i < click_data.length; i++) {
      var count = clickElements(click_data[i][0], click_data[i][1]);
      totals[i] += count;
      if (count > 0) {
        anyChange = true;
      }
    }

    if (!anyChange) {
      stallCount++;
      if (stallCount == 5)
      {
        var message = 'Done';
	for (var i = 0; i < totals.length; i++) {
	  message += '\n' + click_data[i][2] + ': ' + totals[i];
	}
        alert(message);
        return;
      }
    }
    else
    {
      lastHeight = currentHeight;
      window.scrollTo(0, currentHeight);
    }
    window.setTimeout(check, 1000);
  }
  check();
}

function clickElements(tagName, predicate)
{
  var elements = document.evaluate('//' + tagName +
      '[(' + predicate + ') and not(@data-mh-visited)]', document, null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < elements.snapshotLength; i++) {
    var obj = elements.snapshotItem(i);
    if (obj) {
      obj.setAttribute('data-mh-visited', '');
      obj.click();
    }
  }
  return elements.snapshotLength;
}

main();
})();
