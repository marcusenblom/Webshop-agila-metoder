window.onload = function() {





  let listOfAllProducts = [];

  // Class which will create new products (object) //
  function Product (title, price, src){

    this.title = title;
    this.price = price;
    this.src = src;

  }



  for (var i = 1; i < 7; i++) {
    let newProduct = new Product("Sommarjacka " + i, 899, "images/jacket1.jpg");
    listOfAllProducts.push(newProduct);
  }

  console.log(listOfAllProducts);

  // for (var i = 0; i < listOfAllProducts.length; i++) {
  //
  //   let productContainer = document.createElement("div");
  //   productContainer.className = "product-container";
  //   let productImageContainer = document.createElement("div");
  //   productImageContainer.className = "productImageContainer";
  //   let image = document.createElement("img");
  //   image.className = "productImage";
  //   let productTitleContainer = document.createElement("div");
  //
  //   image.src = listOfAllProducts[i].src;
  //   productImageContainer.appendChild(image);
  //   productTitleContainer.innerHTML = listOfAllProducts[i].title;
  //
  //   productContainer.appendChild(productImageContainer);
  //   productContainer.appendChild(productTitleContainer);
  //
  //
  //   $("#productSection").append(productContainer);
  //
  // }


}
