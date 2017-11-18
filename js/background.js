chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  var tab = tabs[0];
  var url = tab.url;
  console.log(url)
});
