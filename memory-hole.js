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

function setupCounters()
{
  var container = document.getElementById('mh-ui');
  var counters = document.createElement('div');
  var status = document.createElement('div');
  status.setAttribute('id', 'mh-status');
  status.appendChild(document.createTextNode('Processing...'));
  counters.appendChild(status);
  for (var i = 0; i < click_data.length; i++) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(click_data[i][2] + ': '));
    var span = document.createElement('span');
    span.setAttribute('id', 'mh-counter-' + i);
    span.appendChild(document.createTextNode('0'));
    div.appendChild(span);
    counters.appendChild(div);
  }
  container.appendChild(counters);
}

function buildUi()
{
  if (document.getElementById('mh-ui') != null) return;

  var container = document.createElement('div');
  container.setAttribute('id', 'mh-ui');
  container.style.zIndex = '9000';
  container.style.position = 'fixed';
  container.style.right = '20px';
  container.style.bottom = '20px';
  container.style.width = '20em';
  container.style.borderStyle = 'solid';
  container.style.borderWidth = '1px';
  container.style.borderColor = 'red';
  container.style.borderRadius = '10px';
  container.style.padding = '10px';
  container.style.backgroundColor = 'white';
  container.style.opacity = 0.7;

  var h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('Memory Hole'));
  container.appendChild(h1);

  var homepage = document.createElement('a');
  homepage.setAttribute('href', 'https://github.com/divergentdave/memory-hole');
  homepage.setAttribute('target', '_blank');
  homepage.appendChild(document.createTextNode('Visit homepage'));
  container.appendChild(homepage);

  container.appendChild(document.createElement('p'));

  container.appendChild(document.createTextNode('Memory Hole is not affiliated with Facebook'));

  container.appendChild(document.createElement('p'));

  if (window.location.href.indexOf('allactivity') != -1) {
    var info = document.createElement('div');
    info.appendChild(document.createTextNode('Choose a category of items from the menu on the left, (such as "Likes") and click on it. Once you are ready, you can...'));
    info.appendChild(document.createElement('p'));

    var button = document.createElement('button');
    button.appendChild(document.createTextNode('Delete everything in this list'));
    button.addEventListener('click', function() {
      if (document.getElementById('mh-confirm').checked) {
        if (confirm('Are you sure? This will permanently delete all entries in this list.')) {
          container.removeChild(info);
          setupCounters();
          process();
        }
      } else {
        alert('Check the "Confirm" box first');
      }
    }, false);
    info.appendChild(button);

    info.appendChild(document.createElement('br'));

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'mh-confirm');
    info.appendChild(checkbox);

    var label = document.createElement('label');
    label.setAttribute('for', 'mh-confirm')
    label.appendChild(document.createTextNode('Confirm'));
    info.appendChild(label);

    container.appendChild(info);
  }
  else
  {
    container.appendChild(document.createTextNode('Go to your profile, click on '));
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.addEventListener('click', function() {
      document.getElementById('privacyFlyoutLabel').click();
      window.setTimeout(function() {
        document.getElementById('plite_activity_log').getElementsByTagName('a')[0].click();
      }, 2000);
    }, false);
    a.appendChild(document.createTextNode('Activity Log'));
    container.appendChild(a);
    container.appendChild(document.createTextNode(', and click on the bookmarklet again.'));
  }

  document.body.appendChild(container);
}

function process()
{
  var lastHeight = 0;
  var stallCount = 0;
  var throbber = 0;
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
        document.getElementById('mh-counter-' + i).innerHTML = totals[i];
      }
    }

    if (!anyChange) {
      stallCount++;
      if (stallCount == 5)
      {
        document.getElementById('mh-status').innerHTML = 'Done!';
        return;
      }
    }
    else
    {
      lastHeight = currentHeight;
      window.scrollTo(0, currentHeight);
    }
    document.getElementById('mh-status').innerHTML = 'Processing... ' + ['-', '\\', '|', '/'][throbber];
    throbber = (throbber + 1) % 4;
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

buildUi();
})();
