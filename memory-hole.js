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

function openMenus()
{
  var a = document.evaluate("//a[contains(@class, 'uiPopoverButton')]",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < a.snapshotLength; i++) {
    var obj = a.snapshotItem(i);
    if (obj) obj.click();
  }
}

function deleteOrHide()
{
  var b1 = document.evaluate("//a[contains(@ajaxify, 'action=remove_content') or contains(@ajaxify, 'action=unlike') or contains(@ajaxify, 'action=unvote')]",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < b1.snapshotLength; i++) {
    var obj = b1.snapshotItem(i);
    if (obj) obj.click();
  }
  var b2 = document.evaluate("//a[contains(@ajaxify, 'action=hide')]",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < b2.snapshotLength; i++) {
    var obj = b2.snapshotItem(i);
    if (obj) obj.click();
  }
  var b3 = document.evaluate("//a[contains(@ajaxify, '/ajax/report.php?content_type=2')]",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < b3.snapshotLength; i++) {
    var obj = b3.snapshotItem(i);
    if (obj) obj.click();
  }
  return [b1.snapshotLength, b2.snapshotLength, b3.snapshotLength];
}

function clickConfirm()
{
  var c1 = document.evaluate("//input[@type='checkbox' and @name='untag']",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < c1.snapshotLength; i++) {
    var obj = c1.snapshotItem(i);
    obj.click();
  }
  var c2 = document.evaluate("//input[@type='submit' and @value='Continue']",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < c2.snapshotLength; i++) {
    var obj = c2.snapshotItem(i);
    obj.click();
  }
  var c3 = document.evaluate("//input[@type='button' and @name='ok' and (@value='Unlike' or @value='Delete' or @value='Unvote')]",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < c3.snapshotLength; i++) {
    var obj = c3.snapshotItem(i);
    obj.click();
  }
}

function clickOkay()
{
  var d = document.evaluate("//a[contains(@class, 'layerCancel') and @role='button']",
      document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < d.snapshotLength; i++) {
    var obj = d.snapshotItem(i);
    if (obj.firstChild && obj.firstChild.firstChild && obj.firstChild.firstChild.nodeValue && obj.firstChild.firstChild.nodeValue == "Okay")
    {
      obj.click();
    }
  }
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
