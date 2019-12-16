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

  detailProduct = JSON.parse(localStorage.getItem("products-1")) || [];

  $("#h3").html(detailProduct.title)
  $("#detail-description").html(detailProduct.description)
  $("#spaan").html(detailProduct.price)
  imgSrc3 = detailProduct.src;
  let detailImg = $("<img>").attr("src", imgSrc3);
  $("#id-detail-innerbox-Img").append(detailImg);


  $("#detailButtontoCart").attr("disabled", "disabled")
  let inputSize = $("input:checked").val();
  $("input").on("click", function() {
    $("#detailButtontoCart").removeAttr("disabled");

  });

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

  $("#detailButtontoCart").on("click", function() {
    let newArray = [];
    let inputSize = $("input:checked").val();
    detailProduct.size = inputSize;


    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];

      for (let i = 0; i < currentCartItems.length; i++) {
        newArray.push(currentCartItems[i]);
      };

      let alreadyExist = false;
      for (let i = 0; i < newArray.length; i++) {
        if (detailProduct.id == newArray[i].id && inputSize == newArray[i].size) {
          alreadyExist = true;
          newArray[i].quantity++;
        }
      };
      if (!alreadyExist) {
        newArray.push(detailProduct);
      }
    } else {
      newArray.push(detailProduct);
    };

    localStorage.setItem("cart", JSON.stringify(newArray));

    counter();
  });


});
