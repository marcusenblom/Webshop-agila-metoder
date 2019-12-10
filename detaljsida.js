$(document).ready(function() {

    listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];

    //listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];
    let id = this.id;
    let dataList = [];
    let numberOfItemsAdded = 0;
    for (let v = 0; v < listOfAllProducts.length; v++) {

        //if (listOfAllProducts[v].id === id) {
        numberOfItemsAdded++;
        listOfAllProducts[v].id;
        let jhej = $("#h3").append("detail-h3-price-radiosize-Box")
        jhej.html(listOfAllProducts[v].title)
        $("#detail-description").html(listOfAllProducts[v].description)
        $("#spaan").html(listOfAllProducts[v].price)
        imgSrc3 = listOfAllProducts[v].src;
        let hhhhej = $("<img>").attr("src", imgSrc3);
        $("#id-detail-innerbox-Img").append(hhhhej)

        listOfAllProducts[v].src2;
        listOfAllProducts[v].size1;
        listOfAllProducts[v].size2;
        listOfAllProducts[v].size3;

        // dataList.push(newItem);
        console.log("hejll")

        // }
    }
})







/* 
    for (let v = 0; v < listOfAllProducts.length; v++) {


        let newItem = new Lista();
        newItem.id = listOfAllProducts[v].id;
        newItem.title = listOfAllProducts[v].title;
        newItem.description = listOfAllProducts[v].description;
        newItem.src = listOfAllProducts[v].src;
        newItem.src2 = listOfAllProducts[v].src2;
        newItem.size1 = listOfAllProducts[v].size1;
        newItem.size2 = listOfAllProducts[v].size2;
        newItem.size3 = listOfAllProducts[v].size3;

        dataList.push(newItem);
        console.log("hejll")
        hej()
    }*/
/*
    function hej() {

        for (let u; u < dataList.length; v++) {
            if (dataList[u].id === id) {

                dataList[u].description;
                console.log(dataList[u].description)
                console.log("hej")
            }
        }

    }
    /*
                $("button").on("click", function() {
                    window.open("checkout.html")
                    window.close("detaljsida.html")
                });*/

function Lista() {

    this.id;
    this.title;
    this.description;
    this.src;
    this.src2;
    this.size1;
    this.size2;
    this.size3;
}
$