$(document).ready(function() {

})

// let checkoutButton = $("#checkout_button");
// let checkBoxes = $("#checkout_checkbox");
// checkoutButton.addEventListener("click", function () {
//     $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
// });
// checkBoxes.change();  
    
// $("#checkout_checkbox").on("change", function(){
//     if($("#checkout_checkbox").attr("checked")){
//       $("#checkout_button").button("enable");
//     } else {
//       $("#checkout_button").button("disable");
//     }
    
//   });

$("payment_option").on('click', function() { var checked = $("payment_option").prop('checked');
console.log(checked);
   if(checked) { $("#checkout_button").show();  } 
   else { $("#checkout_button").hide(); }
                                                 });




