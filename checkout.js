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

  let items_div = $("#checkout_container_items");

  for (let p = 0; p < cart.length; p++) {
    console.log(cart[p]);

    let tagDiv = $("<div>").append($("<h4>").html(cart[p].title))
    let spanPrice = $("<span>").html(cart[p].price)
    let spanSize = $("<span>").html(cart[p].size)
    let spanQuantity= $("<span>").html(cart[p].quantity)
    items_div.append(tagDiv).addClass("divClass")
    
  
 let button1=$("<button>").html("--").on("click",function() { handclick2(p)})        
 let button2=($("<button>").html("++").on("click",function() { handclick1(p)}))
 let button3=$("<button>").html("ta bort").on("click",function() { handclick4(p)})
 let buttonSpan=$("<span>").append(button1).append(button2).append(button3)
 tagDiv.append(buttonSpan)
  tagDiv.append(spanQuantity);
    tagDiv.append(spanPrice)
    tagDiv.append(spanSize)
    
 
  
 
 
   function handclick1(i){
  
     let sum=cart[i].quantity++;
         console.log("öka", sum,);
       
        
        }
    
    function handclick2(i){
     
        let sum2=cart[i].quantity--;
      
        console.log("minska",sum2);
       
        
    }

    function handclick4(i){
        let cartSplice=cart.splice(i,1);
        console.log(i)

        console.log(cartSplice);
       
       
       }
  


}




});



