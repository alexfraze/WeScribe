$(function() {

	$("#sign-up").click( function() {
		$(".login-div").hide();
		$(".signup-div").show();
	});

	$("#login").click( function() {
		$(".login-div").show();
		$(".signup-div").hide();
	});

	//on submit check if valid or not
	$("#submit").click(function(e) {
		if ($(".login-div").is(":hidden")){
		 //    e.preventDefault();
		 //    var username = $("#username").val();
		 //    var password = $("#password").val();
		 //    $.ajax({
			//         type: "Post",
			//         url: "http://localhost:5000/auth/signin/" + `${username}/${password}`,
			//         success: function(result) {
			//             console.log("sucess", result);
			//             alert("User found in db");
			//         },
			//         error: function(result) {
			//             console.log("error" + result);
			//             alert("Unauthorized user");
			//         }
			// });
			console.log("signin");
		}  else {
			console.log("login");
		}
	
	});


});



