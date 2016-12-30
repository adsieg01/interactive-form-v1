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

	// Show total for activities 

if ($("input:checkbox:checked").length){
	$("#totalPost").show().css("border-top", "none");
} else {
	$("#totalPost").hide();
}

$('input:checkbox').change(function ()
{
      var total = 0;
      $('input:checkbox:checked').each(function(){ // iterate through each checked element.
        total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
      });     
      $("#total").val(total);

});

});




// End disabile registration for workshops with time conflicts-----------------------------






















