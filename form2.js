$(document).ready(function() {		
              
	//funkar
	$(".next").click(function(agree) {								//Nextknappen för input text field
	  var current_index = $(this).parent().index("fieldset");
	  
	  let validateSuccess = validateStep(current_index);
	  console.log("Validering: ", validateSuccess);
	  if(validateSuccess){						
		  makeStepActive(current_index+1);		
	  }else{
		  agree.preventDefault();
	  }
	});
	//funkar

	  //orginal radio
	  $(".next2").click(function(agree) {							//Nextknappen för input radiobutton 
		var current_index = $(this).parent().index("fieldset");
  
		if(validateStep(current_index)){			
			makeStepActive(current_index+1);		
		}else{
			agree.preventDefault();
		}
	  });
	  //orginal

	  //funkar
	$(".confirm").click(function(agree) {
		var current_index = $(this).parent().index("fieldset");
		
		let validateSuccess = validateStep(current_index);
		console.log("Validering: ", validateSuccess);
		if(validateSuccess){							//current_index = sida 
			makeStepActive(current_index + 1);				//Om sidan innan godkäns aktivera nextknappen
		}else{
			agree.preventDefault();
		}
	  });
	  //funkar
	
	//funkar
	$(".previous").click(function() {
	  var current_index = $(this).parent().index("fieldset");		//Bakåtknappen 
	  makeStepActive(current_index - 1);
	});
	//funkar

   makeStepActive(0);	
   
  });

  function makeStepActive(index){
	  console.log("Making step " + index + " active");
	  var step = $("#checkout_headings_form li:eq("+index+")");
	  var fieldset = $("fieldset:eq("+index+")");
	  if(step.length){
		  $("#checkout_headings_form li").hide();					//Rubriker
		  $("fieldset").hide();
		  step.show();
		  fieldset.slideDown(500);
	  }
  }

  function validateStep(step){				
	  console.log("Validating step: ", step);
	  switch(step){
		  case 0:
			var ids = ["firstname", "lastname", "phone", "email", "street", "zipcode", "city"];
			var err = [];
			let hasError = false;
			ids.forEach(function(id, i){
				var value = $("#"+id).val();
				if ($.trim(value).length === 0) {
					document.getElementById(id).style.borderColor = "#E34234";
					err.push('Please Enter Your '+id);								// koppla till HTML 
					hasError = true;					
				}
				
			});
			return !hasError;
		  break;
		  //CASE 1
		  case 1:
		//   $(".next2").click(function() {
		// 	if ($('input[name="checkout_payment_options"]:checked').length == 0) {
		// 		alert('Välj ett betalningsalternativ');	
		// 	  return false; } 
		// 	   else {
		// 	   $.ajax({
		// 		//...
		// 	  })
		// 	}
		// 	return false;
		//  });
		 //

			//org
			//case 0:
			if(($("input[name='checkout_payment_options']:checked").length === 0)){
				alert('Välj ett betalningsalternativ');									//Modal betlaningsalternativ
				return false;
			}
			return true;
		break;
			//org

			//CASE 1
		break;
			
			default:
				if(($("input[name='agree']:checked").length === 0)){
					alert('Godkänn köpvillkoren');							// Modal köpvillkor
					return false;
				}
				return true;
				
				if(err.length > 0){
					$('.fs-error').html('<span style="color:red;">'+err.join('!<br>')+'</span>');
					$('.fs-error').show();
  
					return false;
				}else{
					return true;
				}
	  }
  }