$(function() {
	$("#new-group").click( function() {
		$(".new-group-form").show();
	});

	// First create credentials 
	// Credntials returns crential ID

	//Onclick
	$("#submit").click(function(e){
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		$.ajax({
				        type: "POST",
				        url: "http://localhost:5000/credentials/" + `${username}/${password}`,
				        success: function(result) {
				        	// now create group with the credential ID that has been created
				            createGroup(result._id);
				        },
				        error: function(result) {
				            console.log(result);
				        }
		});	
	});

	function createGroup(credentialID){
		var name = $("#group-name").val();
		var pay = $("#cost").val();
		var date = $("#payment-date").val();
		$.ajax({
				        type: "POST",
				        url: "http://localhost:5000/groups/" + `${name}/${pay}/${date}/${credentialID}`,
				        success: function(result) {
				            console.log(result);
				            addUsers(localStorage.user, result._id);
				        },
				        error: function(result) {
				            console.log(result);
				        }
		});	
	}
	// add group to users 
	function addUsers(user, group){
		$.ajax({
				        type: "PUT",
				        url: "http://localhost:5000/users/" + `${user}/${group}`,
				        success: function(result) {
				            console.log(result);
				        },
				        error: function(result) {
				            console.log(result);
				        }
		});	
	}


});


// Get users in their group {}