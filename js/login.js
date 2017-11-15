$(function() {
	//on submit check if valid or not
	$("#submit").click(function(e) {
	    e.preventDefault();
	    var username = $("#username").val();
	    var password = $("#password").val();
	    $.ajax({
		        type: "Post",
		        url: "http://localhost:5000/auth/signin/" + `${username}/${password}`,
		        success: function(result) {
		            console.log("sucess", result);
		            alert("User found in db");
		        },
		        error: function(result) {
		            console.log("error" + result);
		            alert("Unauthorized user");
		        }
		});
	
	});


});
