$(document).ready(function() {

})

// let checkoutButton = $("#checkout_button");
// let checkBoxes = $("#checkout_checkbox");
// checkoutButton.addEventListener("click", function () {
//     $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
// });
// checkBoxes.change();  
    
$("#checkout_checkbox").on("change", function(e){
    if($("#checkout_checkbox").attr("checked")){
      $("#checkout_button").button("enable");
    } else {
      $(".submit").button("disable");
    }
    
  });






