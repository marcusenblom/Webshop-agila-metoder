$(document).ready(function() {

    /*listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];

    //listOfAllProducts = JSON.parse(localStorage.getItem("products-1")) || [];

    let dataList = [];

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

    }



    for (let v; v < dataList.length; v++) {
        if (dataList[v].id === id) {

            dataList[v].description;
            console.log(dataList[v].description)
            console.log("hej")
        }
    }


    /*
                $("button").on("click", function() {
                    window.open("checkout.html")
                    window.close("detaljsida.html")
                });*/

})