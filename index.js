$(document).ready(function() {

  // Funktion som ändrar backgrunden på #header beroende på scroll position //
  $(document).scroll(function(){
    if (window.pageYOffset>400) {
      $("#header").css({"background-color":"white","color":"black"}).addClass("borderShadow").removeClass("borderWhite");
    }
    else {
      $("#header").css({"background-color":"transparent","color":"white"}).removeClass("borderShadow").addClass("borderWhite");
    }
  });

  // Funktion som skapar upp produkter på förstasidan //

  for (var i = 1; i < 9; i++) {

    let productContainer = $("<div>").addClass("productContainer").appendTo($(".flex-container"));

    let image = $("<img>").attr("src", "images/jacket" +i+".jpg").addClass("productImage").appendTo(productContainer);

    let productTitleContainer = $("<div>").addClass("productTitleContainer").appendTo(productContainer);

    let title = $("<span>").html("Winter jacket").addClass("titleFont").appendTo(productTitleContainer);

    let price = $("<span>").html("1299 SEK").addClass("priceSpan").appendTo(productTitleContainer);

  }


  // Funktion som skapar upp produkter under sektionen: "recommended" //
  for (var i = 1; i < 4; i++) {

    let productContainer = $("<div>").addClass("recommendedContainer").appendTo($(".recommended-flex"));

    let image = $("<img>").attr("src", "images/jacket" +i+".jpg").addClass("recommendedImage").appendTo(productContainer);

  }
});
