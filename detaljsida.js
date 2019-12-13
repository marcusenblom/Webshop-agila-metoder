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


  $("#detailButtontoCart").on("click", function() {

    let newArray = [];
    let inputSize = $("input:checked").val();
    detailProduct.size = inputSize

    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};

      for (let i = 0; i < currentCartItems.length; i++) {
        newArray.push(currentCartItems[i]);


      };
    };
    newArray.push(detailProduct);
    localStorage.setItem("cart", JSON.stringify(newArray));

    $(".badge-info").html(newArray.length);
  });
  counter();

});
