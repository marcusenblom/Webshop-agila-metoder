$(document).ready(function() {

    detailproduct = JSON.parse(localStorage.getItem("products-1")) || {};

    $("#h3").html(detailproduct.title)
    $("#detail-description").html(detailproduct.description)
    $("#spaan").html(detailproduct.price)
    imgSrc3 = detailproduct.src;
    let detailImg = $("<img>").attr("src", imgSrc3);
    $("#id-detail-innerbox-Img").append(detailImg)



    

})