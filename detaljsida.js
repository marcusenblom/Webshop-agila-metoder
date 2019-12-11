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
        let hej = cart.push(detailproduct)
        let h = 1;
        cart2.push(h)

        ränkare()
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("skicka vidare", hej)
    });



    let i = 0;


    function ränkare() {

        for (i; i < cart2.length; i++) {


        }
        $(".badge-info").html(i)




    }

    $("#buttonShoppingCart").on("click", function() {
        window.open("checkout.html")
        window.close("detaljsida.html")
    })







})