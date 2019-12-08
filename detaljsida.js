$(document).ready(function() {

    listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];

    //listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];


    for (let v = 0; v < listOfAllProducts.length; v++) {



        listOfAllProducts[v].id;
        listOfAllProducts[v].title;
        listOfAllProducts[v].title;
        listOfAllProducts[v].description;
        listOfAllProducts[v].src;
        listOfAllProducts[v].src2;
        listOfAllProducts[v].size1;
        listOfAllProducts[v].size2;
        listOfAllProducts[v].size3;

        console.log("hej")
    }




    /*
                $("button").on("click", function() {
                    window.open("checkout.html")
                    window.close("detaljsida.html")
                });*/

})