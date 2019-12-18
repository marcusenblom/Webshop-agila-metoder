$(document).ready(function() {
  // Öppnar och stänger dropdown
  $(".menu-toggle").click(function() {
    if ($(".menu").hasClass("menu-hide")) {
      $(".menu").removeClass("menu-hide");
      $(".menu").addClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "2px solid black");
      $(".dark").css("display", "block");
      $(".favorites").removeClass("favorites-show");
      $(".favorites").addClass("favorites-hide");
      $(".favorites").css("width", "0");
      $(".favorites-toggle").css("border-bottom", "0");

    } else {
      $(".menu").addClass("menu-hide");
      $(".menu").removeClass("menu-show");
      $(".menu-toggle-container").css("border-bottom", "0");
      $(".dark").css("display", "none");
    }
  });
  // Stänger meny och sätter filter vid klick av kategori
  $(".filter-button").on("click", function() {
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");
    $(".dark").css("display", "none");

    let newFilter = this.id;
    localStorage.setItem("filter", newFilter);
    window.open("index.html", "_self");
  });
  // Skickar användaren till index-html och sätter filter till 0
  $(".home").on("click", function() {
    localStorage.setItem("filter", 0);
    window.open("index.html", "_self");
  });

  // Öppnar och stänger favorites
  $(".favorites-toggle").click(function() {
    if ($(".favorites").hasClass("favorites-hide")) {
      $(".favorites").removeClass("favorites-hide");
      $(".favorites").addClass("favorites-show");
      $(".favorites").css("width", "400px");
      $(".favorites-toggle").css("border-bottom", "2px solid black");
      $(".dark").css("display", "block");
      $(".menu").addClass("menu-hide");
      $(".menu-toggle-container").css("border-bottom", "0");

    } else {
      $(".favorites").addClass("favorites-hide");
      $(".favorites").removeClass("favorites-show");
      $(".favorites").css("width", "0");
      $(".favorites-toggle").css("border-bottom", "0");
      $(".dark").css("display", "none");
    }
  });

  //Stänger meny samt favorites vid klick på opacity-filtret .dark
  $(".dark").on("click", function(){
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");
    $(".favorites").removeClass("favorites-show");
    $(".favorites").addClass("favorites-hide");
    $(".favorites").css("width", "0");
    $(".favorites-toggle").css("border-bottom", "0");
    $(".dark").css("display", "none");
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

    let tagDiv = $("<div>").append("<h4>").html(cart[p].title)
    let spanPrice = $("<span>").html(cart[p].price)
    let spanSize = $("<span>").html(cart[p].size)
    items_div.append(tagDiv).addClass("divClass")
    tagDiv.append(spanPrice)
    tagDiv.append(spanSize)

    spanQuantity.append($("<button>").html("--").on("click",handclick2))

    spanQuantity.append($("<button>").html("++").on("click",handclick1))
    spanQuantity.append($("<button>").html("ta bort").on("click",handclick4))

    tagDiv.append(spanPrice)
    tagDiv.append(spanSize)

   function handclick1(){

     let sum=cart[p].quantity++;
         console.log("öka", sum,);

         cartList()
        }

    function handclick2(){

        let sum2=cart[p].quantity--;

        console.log("minska",sum2);

        cartList()
    }

    function handclick4(){
        let cartSplice=cart.splice(p,1);
        console.log(p)

        console.log(cartSplice[p])

        cartList()
       }



}

cartList()


});

