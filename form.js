$(document).ready(function() {
<<<<<<< HEAD


	$(".next").click(function(agree) {
	  var current_index = $(this).parent().index("fieldset");

	  if(validateStep(current_index)){			//current_index = sida
=======
              
	
	$(".next").click(function(agree) {
	  var current_index = $(this).parent().index("fieldset");
	  
	  if(validateStep(current_index)){			//current_index = sida 
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
		  makeStepActive(current_index+1);		//Om sidan innan godkäns aktivera nextknappen
	  }else{
		  agree.preventDefault();
	  }
	});

	$(".previous").click(function() {
<<<<<<< HEAD
	  var current_index = $(this).parent().index("fieldset");		//Bakåtknappen
	  makeStepActive(current_index - 1);
	});

   makeStepActive(0);

=======
	  var current_index = $(this).parent().index("fieldset");		//Bakåtknappen 
	  makeStepActive(current_index - 1);
	});

   makeStepActive(0);	
   
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
  });

  function makeStepActive(index){
	  var step = $("#checkout_headings_form li:eq("+index+")");
	  var fieldset = $("fieldset:eq("+index+")");
	  if(step.length){
		  $("#checkout_headings_form li").hide();					//Rubriker
		  $("fieldset").hide();
		  step.show();
		  fieldset.slideDown(500);
	  }
  }

<<<<<<< HEAD
  function validateStep(step){
	  switch(step){
		  case 0:


			  if(($("input[name='checkout_payment_options1']:checked").length === 0)){
=======
  function validateStep(step){				
	  switch(step){
		  case 0:

		  
			  if(($("input[name='checkout_payment_options']:checked").length === 0)){
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
				  alert('Välj ett betalningsalternativ');									//Modal betlaningsalternativ
				  return false;
			  }
			  return true;
		  break;
		  default:
			  var ids = ["firstname", "lastname", "phone", "email", "street", "zipcode", "city"];
			  var err = [];
			  ids.forEach(function(id, i){
				  var value = $("#"+id).val();
				  if ($.trim(value).length === 0) {
					document.getElementById(id).style.borderColor = "#E34234";
<<<<<<< HEAD
					err.push('Please Enter Your '+id);								//Fungerar ej ...?
					return false;
=======
					err.push('Please Enter Your '+id);								//Fungerar ej ...? 
					return false;							
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
				  }
				  return true;
			  });
		  break;
		  case 1:
			  if(($("input[name='agree']:checked").length === 0)){
				  alert('Godkänn köpvillkoren');							// Modal köpvillkor
				  return false;
			  }
			  return true;
<<<<<<< HEAD

=======
			  
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
			  if(err.length > 0){
				  $('.fs-error').html('<span style="color:red;">'+err.join('!<br>')+'</span>');
				  $('.fs-error').show();

				  return false;
			  }else{
				  return true;
			  }
	  }
<<<<<<< HEAD
  }
=======
  }
>>>>>>> ce24f4b054e45dedc49f745057f573bb469d1fec
