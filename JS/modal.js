//SI QUEREMOS QUE SE CARGUE LA PAGINA ANTES QUE SE EJECUTE EL SCRIPT TENEMOS QUE PONER ESTE CODIGO: 
document.addEventListener("DOMContentLoaded", function(event){
//SI NO USAMOS ESTE HAY QUE LINKEAR LOS SCRIPT EN EL HTML HASTA EL FINAL

// OBTIENE EL MODAL
var modal = document.getElementById("myModal");

// OBTIENE EL BOTON
var btn = document.getElementById("myBtn");

//PERMITE CERRAR EL MODAL
var span = document.getElementsByClassName("close")[0];

//CREA EVENTO CLICK PARA EL BOTON
btn.onclick = function(){
    modal.style.display = "block";
}

//CIERRO MODAL 
span.onclick = function(){
    modal.style.display = "none";
}



});