$(document).ready(function() {

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

    function cartList(){
    cart = JSON.parse(localStorage.getItem("cart")) || [];

   
    // Hämtar cart från localStorage
 

    let items_div = $("#checkout_container_items");
    
   
    for (let p = 0; p < cart.length; p++) {
       
       
        let tagDiv = $("<div>").append("<h4>").html(cart[p].title)
        let spanPrice = $("<span>").html(cart[p].price)
        let spanSize = $("<span>").html(cart[p].size)
        let spanQuantity = $("<span>").html(cart[p].quantity)
        items_div.append(tagDiv).addClass("divClass")
        tagDiv.append(spanQuantity)
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
      
    };

  
    }

cartList()


});

    

