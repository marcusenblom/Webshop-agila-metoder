$(document).ready(function() {
    //Gör alla varor synliga
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    for (let p = 0; p < cart.length; p++) {

        $("#checkout_items_titel1").html(cart[p].title)
        $("#checkout_items_price1").html(cart[p].price)

        console.log("kom och hjälp mig!")


    }

    // let checkoutButton = $("#checkout_button");
    // let checkBoxes = $("#checkout_checkbox");
    // checkoutButton.addEventListener("click", function () {
    //     $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
    // });
    // checkBoxes.change();  

    $("#checkout_checkbox").on("change", function(e) {
        if ($("#checkout_checkbox").attr("checked")) {
            $("#checkout_button").button("enable");
        } else {
            $(".submit").button("disable");
        }

    });

});