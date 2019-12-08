var checkBoxes = $("checkout_checkbox");
checkBoxes.change(function () {
$("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
});
checkBoxes.change();