(function(){
function main()
{
  var totalDelete = 0;
  var totalHide = 0;
  var totalPhotoUntag = 0;
  var lastHeight = 0;
  var stallCount = 0;
  function check()
  {
    var currentHeight = document.body.clientHeight;
    var countMenu = clickElements('a', "contains(@class, 'uiPopoverButton')");
    var countDelete = clickElements('a', "contains(@ajaxify, 'action=remove_content') or contains(@ajaxify, 'action=unlike') or contains(@ajaxify, 'action=unvote')");
    var countHide = clickElements('a', "contains(@ajaxify, 'action=hide')");
    var countPhotoUntag = clickElements('a', "contains(@ajaxify, '/ajax/report.php?content_type=2')");
    var countCheckbox = clickElements('input', "@type='checkbox' and @name='untag'");
    var countContinue = clickElements('input', "@type='submit' and @value='Continue'");
    var countOk1 = clickElements('input', "@type='button' and @name='ok' and (@value='Unlike' or @value='Delete' or @value='Unvote')");
    var countOk2 = clickElements('a', "contains(@class, 'layerCancel') and @role='button' and contains(span/text(), 'Okay')");

    totalDelete = totalDelete + countDelete;
    totalHide = totalHide + countHide;
    totalPhotoUntag = totalPhotoUntag + countPhotoUntag;
    if (currentHeight == lastHeight &&
        countMenu == 0 &&
        countDelete == 0 &&
        countHide == 0 &&
        countPhotoUntag == 0 &&
        countCheckbox == 0 &&
        countContinue == 0 &&
        countOk1 == 0 &&
        countOk2 == 0)
    {
      stallCount++;
      if (stallCount == 5)
      {
        alert('Done, deleted ' + countDelete + ' items, hid ' + countHide + ' items, and untagged ' + countPhotoUntag + ' items');
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
