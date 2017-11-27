responseid = null;
currURL = null;
netflixTabID = null;


chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "popup.html";
    chrome.tabs.create({ url: newURL });
});




function callback(resp){
	responseid = resp["_id"];
	console.log(responseid);
}



chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.query({
	  active: true,
	  currentWindow: true
	}, function(tabs) {
	  var tab = tabs[0];
	  var url = tab.url;
	  var regexObj =  /netflix\.com/
	  if(url!== currURL){
	  	/*if we change tab urls and old one is netflix and new one isnt, push stop to API*/
		  if(regexObj.test(currURL) && !regexObj.test(url)){
		  	console.log("here3")
		  	var stop = Date.now();
			var dateString = stop.toString();
			console.log("here")
			$.ajax({
			        type: "Put",
			        url: "http://localhost:5000/usage/" + responseid + "/" + dateString,
			        dataType: 'json',
			        success: function(result) {
			            console.log(result);
			        },
			        error: function(result) {
			            console.log(result);
			        }
				});
		}
	  	currURL = url
	  if(regexObj.test(currURL)){
	  	var start = Date.now();
		var dateString = start.toString();
		netflixTabID = tab.id
		$.ajax({
		        type: "Post",
		        url: "http://localhost:5000/usage/" + dateString,
		        success: function(result) {
		            /*console.log(result);*/
		            callback(result);
		        },
		        error: function(result) {
		            console.log(result);
		        }
			});

		}
	  }

	});

});

/*

chrome.tabs.onRemoved.addListener(function() {
	chrome.tabs.query({
	  active: true,
	  currentWindow: true
	}, function(tabs) {
	  var tab = tabs[0];
	  var url = tab.url;
	  var regexObj =  /netflix\.com/
	  if(url!== currURL){
*/





/*

onRemoved

Fired when a tab is closed.


*/