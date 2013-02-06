(function(){
function scrollToBottom(callback)
{
  function check(callback, lastHeight, count)
  {
    var currentHeight = document.body.clientHeight;
    if (document.body.clientHeight == lastHeight)
    {
      count++;
      if (count == 5)
      {
        callback();
        return;
      }
    }
    else
    {
      window.scrollTo(0, currentHeight);
    }
    window.setTimeout(function() {
      check(callback, currentHeight, count);
    }, 1000);
  }
  check(callback, 0, 0);
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

function openMenus()
{
  clickElements('a', "contains(@class, 'uiPopoverButton')");
}

function deleteOrHide()
{
  var count1 = clickElements('a', "contains(@ajaxify, 'action=remove_content') or contains(@ajaxify, 'action=unlike') or contains(@ajaxify, 'action=unvote')");
  var count2 = clickElements('a', "contains(@ajaxify, 'action=hide')");
  var count3 = clickElements('a', "contains(@ajaxify, '/ajax/report.php?content_type=2')");
  return [count1, count2, count3];
}

function clickConfirm()
{
  clickElements('input', "@type='checkbox' and @name='untag'");
  clickElements('input', "@type='submit' and @value='Continue'");
  clickElements('input', "@type='button' and @name='ok' and (@value='Unlike' or @value='Delete' or @value='Unvote')");
}

function clickOkay()
{
  clickElements('a', "contains(@class, 'layerCancel') and @role='button' and contains(span/text(), 'Okay')");
}

function main()
{
  scrollToBottom(function() {
    openMenus();
    window.setTimeout(function() {
      var count = deleteOrHide();
      window.setTimeout(function() {
        clickConfirm();
        window.setTimeout(function() {
          clickOkay();
          window.setTimeout(function() {
            alert('Done, deleted ' + count[0] + ' items, hid ' + count[1] + ' items, and untagged ' + count[2] + ' items');
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);
  });
}

main();
})();
