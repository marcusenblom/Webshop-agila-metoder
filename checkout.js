$(document).ready(function() {

})

let checkoutButton = $("#checkout_button");
let checkBoxes = $("#checkout_checkbox");
checkoutButton.addEventListener("click", function () {
    $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
});
checkBoxes.change();  
    







