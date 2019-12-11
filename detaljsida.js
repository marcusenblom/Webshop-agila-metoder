$(document).ready(function() {


    let cart = [];
    let cart2 = [];
    localStorage.setItem("cart", JSON.stringify(cart));


    $(".menu-toggle").click(function() {
        if ($(".menu").hasClass("menu-hide")) {
            $(".menu").removeClass("menu-hide");
            $(".menu").addClass("menu-show");

        } else {
            $(".menu").addClass("menu-hide");
            $(".menu").removeClass("menu-show");
        }
    });


    detailproduct = JSON.parse(localStorage.getItem("products-1")) || {};

    $("#h3").html(detailproduct.title)
    $("#detail-description").html(detailproduct.description)
    $("#spaan").html(detailproduct.price)
    imgSrc3 = detailproduct.src;
    let detailImg = $("<img>").attr("src", imgSrc3);
    $("#id-detail-innerbox-Img").append(detailImg)

    $("#detailButton").on("click", function() {
        let cart3 = cart.push(detailproduct)
        let number = 1;
        cart2.push(h)

        counter()

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("skicka vidare", cart3)
    });

    let i = 0;

    function counter() {

        for (i; i < cart2.length; i++) {

        }
        $(".badge-info").html(i)

    }


});