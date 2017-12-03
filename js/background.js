var responseid = null;
var currURL = null;
var watching_flag = false;
var regexObj =  /netflix\.com/
var netflix_open = false


chrome.browserAction.onClicked.addListener(function(activeTab)
{
	// If user has logged in before their id is in local storage
	if (localStorage.user === undefined){
	    var newURL = "login.html";
	    chrome.tabs.create({ url: newURL });
	 } else {
	 	var newURL = "popup.html";
 		chrome.tabs.create({ url: newURL });
	 }
});




function callback(resp){
	responseid = resp["_id"];
	console.log(responseid);
}



function check_if_netflix_is_open(callback_netflix_open){ 
	netflix_open = false;
	chrome.tabs.query({},function(tabs){
    tabs.forEach(function(tab){
      	if(regexObj.test(tab.url)){
      		netflix_open = true;
      	}	
      }
      );
    callback_netflix_open(netflix_open)
	});
}


// chrome.browserAction.onClicked.addListener(function(activeTab)
// {
// 	var newURL = "popup.html";
// 	chrome.tabs.create({ url: newURL });
// });


chrome.tabs.onUpdated.addListener(function() {
	console.log("tab updated")
	chrome.tabs.query({
	  active: true,
	  currentWindow: true
	}, function(tabs) {
	  var tab = tabs[0];
	  var url = tab.url;
	  /*console.log(started_watching_flag)
	  console.log(url)*/
	  if(watching_flag==true && url!=currURL){
		/*if we change tab urls and old one is netflix and new one isnt, push stop to API*/
		check_if_netflix_is_open(function(return_from_netflix_open){
		if(return_from_netflix_open==false){
			var stop = Date.now();
			var dateString = stop.toString();
			watching_flag = false;
			console.log("netflix url was changed: update api")
			$.ajax({
					type: "Put",
					url: "http://localhost:5000/usage/" + responseid + "/" + dateString,
					dataType: 'json',
					success: function(result) {
						console.log("closed api netflix session")
						console.log(result);
					},
					error: function(result) {
						console.log(result);
					}
				});
			}
		});
	}
	  if(watching_flag == false && regexObj.test(url)){
		currURL = url
		var start = Date.now();
		var dateString = start.toString();
		watching_flag = true;
		console.log("netflix url was opened: update api")
		$.ajax({
				type: "Post",
				url: "http://localhost:5000/usage/" + dateString,
				success: function(result) {
					console.log("opened new netflix session")
					console.log(result);
					callback(result);
				},
				error: function(result) {
					console.log(result);
				}
			});
		}

	});

});



chrome.tabs.onRemoved.addListener(function() {
	console.log("tab closed")
	if(watching_flag==true){
		check_if_netflix_is_open(function(return_from_netflix_open){
		if(return_from_netflix_open==false){
		console.log("netflix tab closed")
		var stop = Date.now();
		var dateString = stop.toString();
		watching_flag = false;
		console.log("netflix tab was removed or browser closed : update api")
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
		});	
	}
});

	  /*function(tabs) {
	  var tab = chrome.tabs.get(netflixTabID)
	  */





/*

onRemoved

Fired when a tab is closed.


*/