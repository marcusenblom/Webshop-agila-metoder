$(document).ready(function() {

    detailprodukt = JSON.parse(localStorage.getItem("products-1")) || {};

    $("#h3").html(detailprodukt.title)
    $("#detail-description").html(detailprodukt.description)
    $("#spaan").html(detailprodukt.price)
    imgSrc3 = detailprodukt.src;
    let detailImg = $("<img>").attr("src", imgSrc3);
    $("#id-detail-innerbox-Img").append(detailImg)


})