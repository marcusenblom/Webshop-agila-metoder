$(document).ready(function() {

<<<<<<< HEAD
    $(".menu-toggle").click(function() {
        if ($(".menu").hasClass("menu-hide")) {
            $(".menu").removeClass("menu-hide");
            $(".menu").addClass("menu-show");
            $(".menu-toggle-container").css("border-bottom", "2px solid black");

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
  // Öppnar upp/stänger menyn (accordion)
  $(".menu-toggle").click(function() {
    if ($(".menu").hasClass("menu-hide")) {
      $(".menu").removeClass("menu-hide");
      $(".menu").addClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "2px solid black");

    } else {
      $(".menu").addClass("menu-hide");
      $(".menu").removeClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "0");
    }
  });
  // Stänger menyn samt skickar filter till localStorage
  $(".filter-button").on("click", function() {
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");
>>>>>>> bb838d1975b26c287da945803b7a02670419fe21

    let newFilter = this.id;
    localStorage.setItem("filter", newFilter);
    window.open("index.html", "_self");
  });
  // Skickar användaren till index-html och sätter filter till 0
  $(".home").on("click", function() {
    localStorage.setItem("filter", 0);
    window.open("index.html", "_self");
  });

  // Visar antal produkter i varukorgen (badge)
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
  // Hämtar cart från localStorage
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  let items_div = $("#checkout_container_items");

  for (let p = 0; p < cart.length; p++) {
    console.log(cart[p]);

<<<<<<< HEAD
        let tagDiv = $("<div>").append("<h4>").html(cart[p].title)
        let spanPrice = $("<span>").html(cart[p].price)
        let spanSize = $("<span>").html(cart[p].size)
            .html(cart[p].quantity)

        items_div.append(tagDiv).addClass("divClass")

        tagDiv.append(spanPrice)
        tagDiv.append(spanSize)
    };
=======
    let tagDiv = $("<div>").append("<h4>").html(cart[p].title)
    let spanPrice = $("<span>").html(cart[p].price)
    let spanSize = $("<span>").html(cart[p].size)
    items_div.append(tagDiv).addClass("divClass")
    tagDiv.append(spanPrice)
    tagDiv.append(spanSize)
  };
>>>>>>> bb838d1975b26c287da945803b7a02670419fe21

});
