chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "popup.html";
    chrome.tabs.create({ url: newURL });
});



chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.query({
	  active: true,
	  currentWindow: true
	}, function(tabs) {
	  var tab = tabs[0];
	  var url = tab.url;
	  var regexObj =  /netflix\.com/
	  if(regexObj.test(url)){
	  	var start = Date.now();
		var dateString = start.toString();
		$.ajax({
		        type: "Post",
		        url: "http://localhost:5000/usage/" + dateString,
		        success: function(result) {
		            console.log(result);
		        },
		        error: function(result) {
		            console.log(result);
		        }
			});
			/*Chat conversation end
			Type a message, @name...
			*/

	  }

	});

});

/*
*/