$(document).ready(function() {


  detailproduct = JSON.parse(localStorage.getItem("products-1")) || {};

  $("#h3").html(detailproduct.title)
  $("#detail-description").html(detailproduct.description)
  $("#spaan").html(detailproduct.price)
  imgSrc3 = detailproduct.src;
  let detailImg = $("<img>").attr("src", imgSrc3);
  $("#id-detail-innerbox-Img").append(detailImg);

  localStorage.setItem("cart", JSON.stringify(detailproduct));

  $("#detailButton").on("click", function() {

    let list = [];

    if (localStorage.getItem("cart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(currentCartItems);
    }
    });
    // let currentCartItems = localStorage.getItem("cart");
    // console.log(currentCartItems);
    //
    // list.push(currentCartItems);
    // list.push(JSON.stringify(detailproduct));
    //
    // localStorage.setItem("cart", list);
    //
    // console.log(localStorage.getItem("cart"));

    //
    // $("#detailButton").on("click", function() {
    //     let cart3 = cart.push(detailproduct)
    //     let number = 1;
    //     cart2.push(number)
    //
    //     counter()
    //
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     console.log("skicka vidare", cart3)
    // });
    //
    // let i = 0;
    //
    // function counter() {
    //
    //
    //     }
    //     $(".badge-info").html(i);



});
