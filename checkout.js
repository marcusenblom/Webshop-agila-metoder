$(document).ready(function() {
  //hej
  // Öppnar upp/stänger menyn (accordion)
  $(".menu-toggle").click(function() {
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
  $(".filter-button").on("click", function() {
    $(".menu").addClass("menu-hide");
    $(".menu").removeClass("menu-show");
    $(".menu-toggle-container").css("border-bottom", "0");

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
      $(".dark").css("opacity", "0.15");

    } else {
      $(".favorites").addClass("favorites-hide");
      $(".favorites").removeClass("favorites-show");
      $(".favorites").css("width", "0");
      $(".favorites-toggle").css("border-bottom", "0");
      $(".dark").css("opacity", "0");
    }
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
  /*
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  function cartlist(){


  let items_div = $("#checkout_container_items");
    items_div.html('');
  for (let p = 0; p < cart.length; p++) {
    console.log(cart[p]);

    let tagDiv = $("<div>").append($("<h4>").html(cart[p].title))
    //Helena
    // let imgSrc4 = currentCartItems[i].src4;
    // imgSrc4 = cart.src;
    // let cartImg = $("<img>").attr("src", imgSrc4);

    //Helena

    let spanPrice = $("<span>").html(cart[p].price)
    let spanSize = $("<span>").html(cart[p].size)
    let spanQuantity= $("<span>").html(cart[p].quantity)

    items_div.append(tagDiv).addClass("divClass")
}
*/

  function displayCart() {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
   
    
    let idcheckoutcontaineritems=$("#checkout_container_items")
    $("#checkout_container_items").html(" ");
    for (let i = 0; i < currentCart.length; i++) {
      let productContainer = $("<div>").addClass("mainCartContainer").appendTo($(idcheckoutcontaineritems));
     
      let imageDiv = $("<div>").appendTo(productContainer);
      let imgSrc = currentCart[i].src;
      let image = $("<img>").addClass("cartImage").attr("src", imgSrc).appendTo(imageDiv);

      let nameContainer = $("<div>").html(currentCart[i].title).appendTo(productContainer);

      let sizeContainer = $("<div>").html(currentCart[i].size).appendTo(productContainer);

      let amountContainer = $("<div>").html(currentCart[i].quantity).appendTo(productContainer);

      let removeContainer = $("<div>").appendTo(productContainer);

      let buttonDecrease = $("<button>").html("-").appendTo(removeContainer).on("click", function () {buttonDecreaseHandelclick(i)})
  
      let buttonIncrease= $("<button>").appendTo(removeContainer).html("+").on("click", function (){ buttonIncreaseHandelclick(i)})
     
      let buttonRemoveItems=$("<button>").appendTo(removeContainer).html("ta bort").on("click",function(){ handelclickRemoveItems(i)})
      
      let priceContainer = $("<div>").html(currentCart[i].price + " SEK").appendTo(removeContainer);

      let removeImg = $("<img>").addClass("removeImage").attr("src", "images/remove.png").appendTo(removeContainer);
     
    }


    // function checkoutSum(i){
    //   let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    // let currentItems=0;
    //   for(let i=0;i<currentCart.length;++i){
    //      if(this.id==currentCart[i].id && currentItems==currentCart[i].quantity){
    //       let sumQuantity=sumQuantity+ currentCart[i].quantity;
    //       let sumPrice=sumPrice+ currentCart[i].price;
    //       let totalsum=sum2*sum
    //       $("#checkout_sum").html(totalsum)
    //       localStorage.setItem("cart", JSON.stringify(currentCart));
    //      }else{
    //       let sum=sum+currentCart[i].price
    //       $("#checkout_sum").html(sum);
    //       localStorage.setItem("cart", JSON.stringify(currentCart));
    //      }

    //     //lägg till quantity gör en eles if som kontrollera om finns fler quantity  om finns sätt ihop priet
    //     console.log(sum,"test")
    //   }
    //   displayCart()
    
    // }
  
     function buttonDecreaseHandelclick(i){
          console.log(i);
         let DecreaseItemes=currentCart[i].quantity--;
          localStorage.setItem("cart", JSON.stringify(currentCart));
          console.log("öka",DecreaseItemes);
          // checkoutSum()
          displayCart()
        }
      
  
    function handelclickRemoveItems(i){
        let cartSplice=currentCart.splice(i,1);
        console.log("remove")
        localStorage.setItem("cart", JSON.stringify(currentCart));
        // checkoutSum()
        displayCart()
       }
      



function buttonIncreaseHandelclick(i){
 
  let IncreaseItemes=currentCart[i].quantity++;
  console.log("öka",IncreaseItemes);
  localStorage.setItem("cart", JSON.stringify(currentCart));
  // checkoutSum()
  displayCart()
}
  }
    displayCart()
    // checkoutSum()
});
