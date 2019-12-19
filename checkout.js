$(document).ready(function() {

  // Öppnar upp/stänger menyn (accordion)

  $(".menu-toggle").click(function () {
    if ($(".menu").hasClass("menu-hide")) {
      $(".menu").removeClass("menu-hide");
      $(".menu").addClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "2px solid black");
      $(".dark").css("opacity", "0.15");

    } else {
      $(".menu").addClass("menu-hide");
      $(".menu").removeClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "0");
      $(".dark").css("opacity", "0");
    }
  });
  // Stänger menyn samt skickar filter till localStorage
  $(".filter-button").on("click", function () {
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");

    let newFilter = this.id;
    localStorage.setItem("filter", newFilter);
    window.open("index.html", "_self");
  });
  // Skickar användaren till index-html och sätter filter till 0
  $(".home").on("click", function () {
    localStorage.setItem("filter", 0);
    window.open("index.html", "_self");
  });

  // Öppnar och stänger favorites
  $(".favorites-toggle").click(function () {
    if ($(".favorites").hasClass("favorites-hide")) {
      $(".favorites").removeClass("favorites-hide");
      $(".favorites").addClass("favorites-show");
      $(".favorites").css("width", "400px");
      $(".favorites-toggle").css("border-bottom", "2px solid black");
      $(".dark").css("opacity", "0.15");

    } else {
      $(".favorites").addClass("favorites-hide");
      $(".favorites").removeClass("favorites-show");
      $(".favorites").css("width", "0");
      $(".favorites-toggle").css("border-bottom", "0");
      $(".dark").css("opacity", "0");
    }
  });

  function checkoutSum() {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    let sumQuantity;
    let sumPrice;
    let  TotalSumDisplay= $("#checkout_sum")
    let totalAmount = 0;
    for (let i = 0; i < currentCart.length; ++i) {

      sumQuantity = +currentCart[i].quantity
      sumPrice = +currentCart[i].price
      console.log(sumPrice, sumQuantity)
      totalAmount = sumPrice * sumQuantity
      console.log(totalAmount)
      TotalSumDisplay.html(totalAmount);

    };

    console.log(totalAmount + "test")
    localStorage.setItem("cart", JSON.stringify(currentCart));

    //lägg till quantity gör en eles if som kontrollera om finns fler quantity  om finns sätt ihop priet
    displayCart()

  };
  checkoutSum();

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

  function displayCart() {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    let idcheckoutcontaineritems = $("#checkout_container_items")
    $("#checkout_container_items").html(" ");
    for (let i = 0; i < currentCart.length; i++) {
      let productContainer = $("<div>").addClass("mainCartContainer").appendTo($(idcheckoutcontaineritems));

      let productInfoContainer = $("<div>").addClass("product-info").appendTo(productContainer);

      let imageDiv = $("<div>").addClass("product-info-image").appendTo(productInfoContainer);
      let imgSrc = currentCart[i].src;
      let image = $("<img>").addClass("cartImage").attr("src", imgSrc).appendTo(imageDiv);

      let nameDiv = $("<div>").addClass("product-info-name").appendTo(productInfoContainer);

      let name = $("<div>").html(currentCart[i].title).appendTo(nameDiv);

      let sizeContainer = $("<div>").html(currentCart[i].size).appendTo(nameDiv);

      let amountContainer = $("<div>").html(currentCart[i].quantity).appendTo(productContainer);

      let buttonDecrease = $("<button>").html("-").appendTo(amountContainer).on("click", function () {
        buttonDecreaseHandelclick(i)
      })

      let buttonIncrease = $("<button>").appendTo(amountContainer).html("+").on("click", function () {
        buttonIncreaseHandelclick(i)
      })

      let priceContainer = $("<div>").html(currentCart[i].price + " SEK").appendTo(amountContainer);

      let removeContainer = $("<div>").appendTo(productContainer);

      let buttonRemoveItems = $("<img>").addClass("removeImage").attr("src", "images/remove.png").appendTo(removeContainer).html("ta bort").on("click", function() {
        handelclickRemoveItems(i)
      });

    };

    function buttonDecreaseHandelclick(i) {
      console.log(i);
      let DecreaseItemes = currentCart[i].quantity--;
      localStorage.setItem("cart", JSON.stringify(currentCart));
      console.log("minka", DecreaseItemes);
      checkoutSum()
      displayCart()
    };

    function handelclickRemoveItems(i) {
      let cartSplice = currentCart.splice(i, 1);
      console.log("remove")
      localStorage.setItem("cart", JSON.stringify(currentCart));

      checkoutSum();
      displayCart();
    }

    function buttonIncreaseHandelclick(i) {

      let IncreaseItemes = currentCart[i].quantity++;
      console.log("öka", IncreaseItemes);
      localStorage.setItem("cart", JSON.stringify(currentCart));

      checkoutSum();
      displayCart();
    }
  }
  displayCart()

});
