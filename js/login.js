$(function() {
	var login = true;
	$("#sign-up").click( function() {
		$(".login-div").hide();
		$(".signup-div").show();
		login = false;
	});

	$("#login").click( function() {
		$(".login-div").show();
		$(".signup-div").hide();
		login = true;
	});

	//on submit check if valid or not
	$("#submit1").click(function(e) {
		    e.preventDefault();
		    var username = $("#username1").val();
		    var password = $("#password1").val();
		    $.ajax({
			        type: "Post",
			        url: "http://localhost:5000/auth/signin/" + `${username}/${password}`,
			        success: function(result) {
			        	loginSucess(result);
			        },
			        error: function(result) {
			            console.log("error" + result);
			            alert("Unauthorized user, please try again");
			        }
			});
			
	});

	function loginSucess(result){
		localStorage.user = result.user
		window.location.href = './popup.html';
	}

	$("#submit2").click(function(e) {
		    e.preventDefault();
		    var fname = $("#first-name").val();
		    var lname = $("#last-name").val();
		    var email = $("#email").val();
		    var username = $("#username").val();
		    var password = $("#password").val();
		    $.ajax({
			        type: "Post",
			        url: "http://localhost:5000/users/" + `${fname}/${lname}/${username}/${password}/${email}`,
			        success: function(result) {
			        	signin(result);
			        },
			        error: function(result) {
			            console.log("error" + result);
			            alert("Cannot create user, please try again");
			        }
			});
	});

	function signin(data){
		var username = data.username
		var password = $("#password").val();
		$.ajax({
			        type: "Post",
			        url: "http://localhost:5000/auth/signin/" + `${username}/${password}`,
			        success: function(result) {
			        	loginSucess(result);
			        },
			        error: function(result) {
			            console.log("error" + result);
			            alert("Unauthorized user, please try again");
			        }
			});
	}


});



