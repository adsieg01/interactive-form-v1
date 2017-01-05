// focus the cursor on the Name input
$('#name').focus();

// Hide the job role text field 
$('#other-title').hide();

// Reveal text field when "Other" is selected-----------------------------------

$("#title").change(function() {
	if( $("#title").val() == 'other'){
		$('#other-title').show();
	} else {$('#other-title').hide();}
});

// Matching color options to the selected design-----------------------------------

	// I heart JS selection


	if( $("#design").val() == 'select theme'){
		$("#color option[value='cornflowerblue']").hide();
		$("#color option[value='darkslategrey']").hide();
		$("#color option[value='gold']").hide();
		$("#color option[value='tomato']").hide();
		$("#color option[value='steelblue']").hide();
		$("#color option[value='dimgrey']").hide();

$("#design").change(function() {
	if( $("#design").val() == 'heart js'){
		$("#color option[value='cornflowerblue']").hide();
		$("#color option[value='darkslategrey']").hide();
		$("#color option[value='gold']").hide();
		$("#color option[value='tomato']").show();
		$("#color option[value='steelblue']").show();
		$("#color option[value='dimgrey']").show();
		$("#color").val('tomato');
	} 
});

	// JS Puns Selection
$("#design").change(function() {
	if( $("#design").val() == 'js puns'){
		$("#color option[value='tomato']").hide();
		$("#color option[value='steelblue']").hide();
		$("#color option[value='dimgrey']").hide();
		$("#color option[value='cornflowerblue']").show();
		$("#color option[value='darkslategrey']").show();
		$("#color option[value='gold']").show();
		$("#color").val('cornflowerblue');
	} 
});

// End matching color options to the selected design-----------------------------------

// Disabile registration for workshops with time conflicts-----------------------------

$("#total").hide();

$( ":checkbox" ).change(function() {
	
	// Tuesday 9am-12pm

if ( $( "input[name='js-frameworks']" ).prop( "checked" ) ){
	$("input[name='express']").prop("disabled", true).parent('label').css("text-decoration", "line-through");
} else if ( $( "input[name='js-frameworks']" ).prop( "checked", false ) ){
	$("input[name='express']").prop("disabled", false).parent('label').css("text-decoration", "none");
}

if ( $( "input[name='express']" ).prop( "checked" ) ){
	$("input[name='js-frameworks']").prop("disabled", true).parent('label').css("text-decoration", "line-through");
} else if ( $( "input[name='express']" ).prop( "checked", false ) ){
	$("input[name='js-frameworks']").prop("disabled", false).parent('label').css("text-decoration", "none");
}

	// Tuesday 1pm-4pm

if ( $( "input[name='js-libs']" ).prop( "checked" ) ){
	$("input[name='node']").prop("disabled", true).parent('label').css("text-decoration", "line-through");
} else if ( $( "input[name='js-libs']" ).prop( "checked", false ) ){
	$("input[name='node']").prop("disabled", false).parent('label').css("text-decoration", "none");
}

if ( $( "input[name='node']" ).prop( "checked" ) ){
	$("input[name='js-libs']").prop("disabled", true).parent('label').css("text-decoration", "line-through");
} else if ( $( "input[name='node']" ).prop( "checked", false ) ){
	$("input[name='js-libs']").prop("disabled", false).parent('label').css("text-decoration", "none");
}

});
// End disabile registration for workshops with time conflicts-----------------------------


// Show total for activities--------------------------------

var grandTotal = 0;

//Add or subtract the cost of the selected activity

$( "input[name='all']" ).change(function() {
	if($( "input[name='all']" ).prop( "checked")){
	grandTotal += 200;} 
	else if($( "input[name='all']" ).prop( "checked", false)){
	grandTotal -= 200;}
});

$( "input[name='js-frameworks']" ).change(function() {
	if($("input[name='js-frameworks']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='js-frameworks']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

$( "input[name='js-libs']" ).change(function() {
	if($("input[name='js-libs']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='js-libs']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

$( "input[name='express']" ).change(function() {
	if($("input[name='express']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='express']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

$( "input[name='node']" ).change(function() {
	if($("input[name='node']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='node']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

$( "input[name='build-tools']" ).change(function() {
	if($("input[name='build-tools']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='build-tools']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

$( "input[name='npm']" ).change(function() {
	if($("input[name='npm']" ).prop( "checked")){
	grandTotal += 100;}
	else if($( "input[name='npm']" ).prop( "checked", false)){
	grandTotal -= 100;}
});

//Display and hide the total amount

$( "input[type=checkbox]" ).change(function() {
	if(grandTotal > 0){$('#cost').text('Total Cost: USD $' + grandTotal).show();}
	else{$('#cost').hide();}
	});

// End show total for activities------------------------------------------	

// Credit Card payment is selected and show by default----------- 

$("#payment").val("credit card");
$(".pp").hide();
$(".bc").hide();

// Appropriate payment information is shown/hidden---------------

$("#payment").change(function() {
	if ($("#payment").val()=="credit card"){
		$("#credit-card").show();
		$("fieldset div p").hide();
		}
		else if ($("#payment").val()=="paypal"){
		$(".pp").show();
		$(".bc").hide();
		$("#credit-card").hide();
		}
		else if ($("#payment").val()=="bitcoin"){
		$(".bc").show();
		$(".pp").hide();
		$("#credit-card").hide();
		}
	});

// Form validation
	// Name is not blank
	
	$( "#register" ).click(function( event ) {
		if($("#name").val()===""){
	  event.preventDefault();
	  $("#name").css("border-color", "red");
	  $("[for='name']").text("Add a name").css("color", "red");
	}
	  });

	// Valid format email address
	
	$( "#register" ).click(function(event) {
	    var x = document.forms["form"]["user_email"].value;
	    var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	    	event.preventDefault();
	    	$("#mail").css("border-color", "red");
	  		$("[for='mail']").text("Add a vaild email address").css("color", "red");
	    }
	});

	// Al least one checkbox is selected
	
	$("#register").click(function (event) {
	  var atLeastOneIsChecked = $('input:checkbox').is(':checked');
	  if (atLeastOneIsChecked===false){
	  	event.preventDefault();
	  	$("#selectError").text("Select at least one activity").css("color", "red");
	  }
	});

	// Credit card number between 13-16 digits 
	
	$("#register").click(function(event){
		if(($.isNumeric($("#cc-num").val())===false) || ($("#cc-num").val().length < 13) || ($("#cc-num").val().length > 16))
		{
			event.preventDefault();
			$("[for='cc-num']").text("Add a vaild card number").css("color", "red");
		}
	});

	//zip code is 5 digits

	$("#register").click(function(event){
			if(($.isNumeric($("#zip").val())===false) || ($("#zip").val().length !== 5)) 
				
			{
				event.preventDefault();
				$("[for='zip']").text("Add a zip code").css("color", "red");
			}
		});

	//CVV is exactly 3 digits

	$("#register").click(function(event){
			if(($.isNumeric($("#cvv").val())===false) || ($("#cvv").val().length !== 3)) 
				
			{
				event.preventDefault();
				$("[for='cvv']").text("Add a valid CVV").css("color", "red");
			}
		})};

	
	




























