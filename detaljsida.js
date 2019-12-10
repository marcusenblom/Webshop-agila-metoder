$(document).ready(function() {
    let cart = [];

    detailproduct = JSON.parse(localStorage.getItem("products-1")) || {};

    $("#h3").html(detailproduct.title)
    $("#detail-description").html(detailproduct.description)
    $("#spaan").html(detailproduct.price)
    imgSrc3 = detailproduct.src;
    let detailImg = $("<img>").attr("src", imgSrc3);
    $("#id-detail-innerbox-Img").append(detailImg)

    $("#detailButton").on("click", function() {
        cart.push(detailproduct);
        window.open("checkout.html")
        window.close("detaljsida.html")
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("skicka vidare")


    });
    /*
        for (let p = 0; p < cart.length; p++) {


            console.log(cart[p].price)

        }
    */




})