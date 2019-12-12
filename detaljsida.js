$(document).ready(function() {

  function counter(){
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

    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || {};
      console.log(currentCartItems);
      for (var i = 0; i < currentCartItems.length; i++) {
        newArray.push(currentCartItems[i]);
      }
    }
    newArray.push(detailProduct);
    localStorage.setItem("cart", JSON.stringify(newArray));

    counter();
    });


});
