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
  // Hämtar cart från localStorage
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  function cartlist(){


  let items_div = $("#checkout_container_items");
    items_div.html('');
  for (let p = 0; p < cart.length; p++) {
    console.log(cart[p]);
  
    let tagDiv = $("<div>").append($("<h4>").html(cart[p].title))
    //Helena
    let imgSrc4 = currentCartItems[i].src4;
    imgSrc4 = cart.src;
    let cartImg = $("<img>").attr("src", imgSrc4);

    //Helena

    let spanPrice = $("<span>").html(cart[p].price)
    let spanSize = $("<span>").html(cart[p].size)
    let spanQuantity= $("<span>").html(cart[p].quantity)

    items_div.append(tagDiv).addClass("divClass")

    $("divClass").append(cartImg);
    
  
 let button1=$("<button>").html("--").on("click",function() { handclick2(p)})        
 let button2=$("<button>").html("++").on("click",function() { handclick1(p)})
  //  let button3=$("<button>").html("ta bort").on("click",function() { handclick4(p)})
 let buttonSpan=$("<span>").append(button1).append(button2) //.append(button3)
  tagDiv.append(buttonSpan)
  tagDiv.append(spanQuantity).append(spanPrice).append(spanSize)//.append(imgImg)
  // tagDiv.append(spanPrice)
  // tagDiv.append(spanSize)

}
/*
      function handclick1(i){
        if (localStorage.getItem("cart")) {
          let cart2 = JSON.parse(localStorage.getItem("cart")) || [];
          for(let i=0;i< cart2.length; ++i){
              cart[i].quantity++;
            console.log("öka", sum,"hej hej");
              } else {
            console.log(i);
            let sum2=cart[i].quantity--;
          }
      
        console.log(i);
        let sum2=cart[i].quantity--;
      
        console.log("minska",sum2,"nej nej",i);
        cartlist() 
      }
    }*/
    
    // function handclick4(i){
    //     let cartSplice=cart.splice(i,1);
    //     console.log(i)

    //     console.log(cartSplice);
    //     $( "<div>" ).remove();  
       
    //     // cartlist()
    //    }
  
      
   


}
 
cartlist()


  function displayCart() {

    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    for (let i = 0; i < currentCart.length; i++) {

      let productContainer = $("<div>").addClass("mainCartContainer").appendTo($("#checkout_container_items"));

      let imageDiv = $("<div>").appendTo(productContainer);
      let imgSrc = currentCart[i].src;
      let image = $("<img>").addClass("cartImage").attr("src", imgSrc).appendTo(imageDiv);

      let nameContainer = $("<div>").html(currentCart[i].title).appendTo(productContainer);

      let sizeContainer = $("<div>").html(currentCart[i].size).appendTo(productContainer);

      let amountContainer = $("<div>").html(currentCart[i].quantity).appendTo(productContainer);

      let priceContainer = $("<div>").html(currentCart[i].price + " SEK").appendTo(productContainer);

      let removeContainer = $("<div>").appendTo(productContainer);
      let removeImg = $("<img>").addClass("removeImage").attr("src", "images/remove.png").appendTo(removeContainer);
    }
  };
  displayCart();




  // function cartlist() {
  //
  //
  //   let items_div = $("#checkout_container_items");
  //   items_div.html('');
  //   for (let p = 0; p < cart.length; p++) {
  //     console.log(cart[p]);
  //
  //     let tagDiv = $("<div>").append($("<h4>").html(cart[p].title))
  //     let divPrice = $("<div>").addClass("divPrice").html(cart[p].price)
  //     let divSize = $("<div>").addClass("divSize").html(cart[p].size)
  //     let divQuantity = $("<div>").addClass("divQuantity").html(cart[p].quantity)
  //     items_div.append(tagDiv).addClass("divClass")
  //     let button1 = $("<button>").html("--").on("click", function () { handclick2(p)})
  //     let button2 = $("<button>").html("++").on("click", function (){handclick1(p)})
  //     //  let button3=$("<button>").html("ta bort").on("click",function() { handclick4(p)})
  //     let divButton = $("div").addClass("divButton").append(button1).append(button2) //.append(button3)
  //
  //     tagDiv.append(divQuantity)
  //     tagDiv.append(divPrice)
  //     tagDiv.append(divSize)
  //     tagDiv.append(divButton)
  //
  //   };
  //
  //   // function handclick1(i) {
  //   //   if (localStorage.getItem("cart")) {
  //   //     let cart2 = JSON.parse(localStorage.getItem("cart")) || [];
  //   //     for (i = 0; i < cart2.length; ++i) {
  //   //       hej=cart2[i].quantity++;
  //
  //   //       localStorage.setItem("cart3", JSON.stringify(hej));
  //   //       console.log("hej på dig",hej)
  //   //     }
  //   //   }
  //
  //   // }
  //
  //   //  function handclick2(i){
  //   //   console.log(i);
  //   //   let sum2=cart[i].quantity++;
  //
  //   //   console.log("minska",sum2,"nej nej",i);
  //   //   cartlist()
  //   // }
  //
  //   /* function handclick1(i){
  //         console.log(i);
  //         let sum2=cart[i].quantity--;
  //
  //         console.log("minska",sum2,"nej nej",i);
  //         cartlist()
  //       }
  //     }*/
  //
  //   // function handclick4(i){
  //   //     let cartSplice=cart.splice(i,1);
  //   //     console.log(i)
  //
  //   //     console.log(cartSplice);
  //   //     $( "<div>" ).remove();
  //
  //   //     // cartlist()
  //   //    }
  //
  //
  // }
  //
  // cartlist()

});
