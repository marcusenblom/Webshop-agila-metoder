$(document).ready(function() {

    $(".menu-toggle").click(function() {
        if ($(".menu").hasClass("menu-hide")) {
            $(".menu").removeClass("menu-hide");
            $(".menu").addClass("menu-show");

        } else {
            $(".menu").addClass("menu-hide");
            $(".menu").removeClass("menu-show");
        }
    });
    $(".filter-button").on("click", function() {
        $(".menu").addClass("menu-hide");
        $(".menu").removeClass("menu-show");

        let newFilter = this.id;

        localStorage.setItem("filter", newFilter);

        window.open("index.html", "_self");
    });

    $(".home").on("click", function() {
        localStorage.setItem("filter", 0);
        window.open("index.html", "_self");
    });

    function counter() {
        let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};
        let cartLength = currentCartItems.length;
        console.log(cartLength);

        $(".badge-info").html(cartLength);
    };
    counter();


    cart = JSON.parse(localStorage.getItem("cart")) || [];

    for (let p = 0; p < cart.length; p++) {

        $("#checkout_items_titel1").html(cart[p].title)
        $("#checkout_items_price1").html(cart[p].price)

        console.log("kom och hjälp mig!")


    }


    let checkoutButton = $("#checkout_button");
    let checkBoxes = $("#checkout_checkbox");
    checkoutButton.addEventListener("click", function() {
        $("#checkout_button").prop('disabled', checkBoxes.filter(':checked').length < 1);
    });
    checkBoxes.change();

    $("#checkout_checkbox").on("change", function(e) {
        if ($("#checkout_checkbox").attr("checked")) {
            $("#checkout_button").button("enable");
        } else {
            $(".submit").button("disable");
        }

    });

});