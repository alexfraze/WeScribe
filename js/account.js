$(function() {
	$("#new-group").click( function() {
		$(".new-group-form").show();
	});

	// First create credentials 
	// Credntials returns crential ID
	// create group with credential ID
	var users = ["erin", "ediering"]
	// Test to see if the users part works for groups 
	$.ajax({
			        type: "POST",
			        url: "http://localhost:5000/groups/" + users,
			        contentType: 'application/json',
			        success: function(result) {
			            console.log(result);
			        },
			        error: function(result) {
			            console.log(result);
			        }
		});	

});