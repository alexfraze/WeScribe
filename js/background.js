chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "login.html";
    chrome.tabs.create({ url: newURL });
});