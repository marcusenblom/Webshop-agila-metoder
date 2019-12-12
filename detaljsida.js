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


    detailProduct = JSON.parse(localStorage.getItem("products-1")) || {};

    $("#h3").html(detailProduct.title)
    $("#detail-description").html(detailProduct.description)
    $("#spaan").html(detailProduct.price)
    imgSrc3 = detailProduct.src;
    let detailImg = $("<img>").attr("src", imgSrc3);
    $("#id-detail-innerbox-Img").append(detailImg);


    $("#detailButton").on("click", function() {
        let newArray = [];

<<<<<<< HEAD
    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};

      for (let i = 0; i < currentCartItems.length; i++) {
        newArray.push(currentCartItems[i]);
      }
    }
    newArray.push(detailProduct);
    localStorage.setItem("cart", JSON.stringify(newArray));
=======
        if (localStorage.getItem("cart")) {
            let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};
            console.log(currentCartItems);
            for (var i = 0; i < currentCartItems.length; i++) {
                newArray.push(currentCartItems[i]);
            }
        }
        newArray.push(detailProduct);
        localStorage.setItem("cart", JSON.stringify(newArray));
>>>>>>> f1c71ecb023da75c2f68f0ddd1d5d05e64413f1e

        $(".badge-info").html(cartLength);
    });
    counter();
<<<<<<< HEAD
});
=======
});
>>>>>>> f1c71ecb023da75c2f68f0ddd1d5d05e64413f1e
