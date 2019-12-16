$(document).ready(function() {

    $(".menu-toggle").click(function() {
        if ($(".menu").hasClass("menu-hide")) {
            $(".menu").removeClass("menu-hide");
            $(".menu").addClass("menu-show");
            $(".menu-toggle-container").css("border-bottom", "2px solid black");

<<<<<<< HEAD
    } else {
      $(".menu").addClass("menu-hide");
      $(".menu").removeClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "0");
    }
  });
  $(".filter-button").on("click", function() {
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");
=======
        } else {
            $(".menu").addClass("menu-hide");
            $(".menu").removeClass("menu-show");
            $(".menu-toggle-container").css("border-bottom", "0");
        }
    });
    $(".filter-button").on("click", function() {
        $(".menu").addClass("menu-hide");
        $(".menu").removeClass("menu-show");
>>>>>>> 2daae621dca0e5d4910df690c793fe62a593efbe

        let newFilter = this.id;
        localStorage.setItem("filter", newFilter);
        window.open("index.html", "_self");
    });

    $(".home").on("click", function() {
        localStorage.setItem("filter", 0);
        window.open("index.html", "_self");
    });


    cart = JSON.parse(localStorage.getItem("cart")) || [];

    function counter() {
        let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};

        let totalAmount = 0;
        for (var i = 0; i < currentCartItems.length; i++) {
            totalAmount = totalAmount + currentCartItems[i].quantity;
        }
        console.log(totalAmount);
        if (totalAmount > 0) {
            $(".badge").css("visibility", "visible");
        }

        $(".badge").html(totalAmount);
    };
    counter();

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);

    let items_div = $("#checkout_container_items");

    for (let p = 0; p < cart.length; p++) {
        console.log(cart[p]);

        let Tagdiv = $("<div>").append("<h4>").html(cart[p].title)
        let spanPrice = $("<span>").html(cart[p].price)
        let spanSize = $("<span>").html(cart[p].size)
        items_div.append(Tagdiv).addClass("divClass")
        Tagdiv.append(spanPrice)
        Tagdiv.append(spanSize)
    };

});