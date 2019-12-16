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
        let currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        let cartLength = currentCartItems.length;
        console.log(cartLength);

        $(".badge-info").html(cartLength);
    };
    counter();

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);

    let items_div = $("#checkout_container_items");

    for (let p = 0; p < cart.length; p++) {
        console.log(cart[p]);

        let Tagdiv = $("<div>").addClass("divClass").append("<h3>").html(cart[p].title)
        let spanPrice = $("<span>").html(cart[p].price)
        let spanSize = $("<span>").html(cart[p].size)
        items_div.append(Tagdiv)
        Tagdiv.append(spanPrice)
        Tagdiv.append(spanSize)
    };

});