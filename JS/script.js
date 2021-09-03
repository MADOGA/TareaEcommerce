var arrProducts = [];

function addProduct(){
    var name = document.getElementById("pName").value; 
    var price = document.getElementById("pPrice").value; 
    var category = document.getElementById("sproduct").value;
    var image = document.getElementById("pDocument").files[0].name;

    var objProduct = new Object();
    objProduct.name = name; 
    objProduct.price = price;
    objProduct.category = category; 
    objProduct.image = "img/" + image;

    arrProducts.push(objProduct);

    setProducts();
}

function setProducts(){
    var sectionProducts = document.getElementById("container-products");
    sectionProducts.innerHTML= "";

    for(var i = 0; i < arrProducts.length; i ++){
        var img = document.createElement("img");
        var h6 = document.createElement("h6");
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var div = document.createElement("div");

        img.setAttribute("src", arrProducts[i].image);
        //Si mis h tuvieraun una clase el codigo para insertarle la clase desde js es: 
        // h6.setAttribute("class", "Categoria")
        h6.innerHTML = arrProducts[i].category;

        h1.innerHTML = arrProducts[i].name; 

        h2.innerHTML = arrProducts[i].price + ".00";

        div.setAttribute("class", "productos");

        div.appendChild(img);
        div.appendChild(h6);
        div.appendChild(h1);
        div.appendChild(h2);

        sectionProducts.appendChild(div);

    }

    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}