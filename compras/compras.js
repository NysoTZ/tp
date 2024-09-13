'use strict'


let arrProductos=["Fideos Matarazzo","Atun la campagnola","Arroz check 1KG","Lentejas check 1KG","Galletas Don satur","Hamburguesas paty 12/U","Gaseosa Pepsi 2L","Cerveza Quilmes 1L","Cerveza Corona 710 cc ","Aceite Natura 1L","Vinagre dos anclas1L","Coca Cola 500ML"];
let arrPrecios=[1000,3950,1900,1950,1670,1800,1300,1670,1220,1520,1200,2100];
let arrCant = [30,50,150,500,300,600,250,340,200,115,45,65];
let arrID=[0,1,2,3,4,5,6,7,8,9,10,11];
let total= 0;
let img = ["/compras/productos/fideos.webp","/compras/productos/atun.webp","/compras/productos/arroz.webp","/compras/productos/lenteja.webp","/compras/productos/donsatur.webp","/compras/productos/paty.webp","/compras/productos/pepsi.webp","/compras/productos/quilmes.webp","/compras/productos/corona.webp","/compras/productos/aceite.webp","/compras/productos/vinagre.webp","/compras/productos/cokita.webp"]
const productos = document.getElementById("contenedor");




//      SE LE ASIGNA A CADA BOTON UN EVENTO DE ESCUCHA ("CLICK")
//      UNA VEZ CLICKEADO LLAMA A LA FUNCION ( Comprar )

function cargaBotones() {
    let botones = document.querySelectorAll(".comprar");
        console.log(botones);

    for (let i = 0; i < botones.length; i++) {
        let id = i;
        botones[id].addEventListener("click",()=> {
                Comprar(id)
            });
    }
    
}

//          MOSTRAR ELEMENTOS
function elementos (arrPrecios,arrProductos,arrCant,arrID,img){ 
        productos.innerHTML = ``;
    for(let i = 0; i < arrProductos.length; i++){
        productos.innerHTML += `
        <ol> 
        <img src="${img[i]}" alt="">
            <li class='negro'>${arrProductos[i]}</li>
            <li class='gris'>$${arrPrecios[i]}</li>
            <li class='grenn'>${arrCant[i]}</li>
            <input type="number" name="cant" id="cant" min="0" value="0" required> 
            <button class="comprar">comprar</button>
        </ol>
        `
    };
    cargaBotones()
}

elementos(arrPrecios,arrProductos,arrCant,arrID,img)


function Comprar(id){

    let cantidades= document.querySelectorAll("input");
    let cantidad = Number(cantidades[id].value);
   
    if(cantidad>0 && (arrCant[id] - cantidad)>=0){
        total = total +(cantidad*arrPrecios[id]);
        arrCant[id] = arrCant[id] - cantidad;
        elementos(arrPrecios,arrProductos,arrCant,arrID,img)
        document.getElementById("total").innerHTML= total;
        
    }else if (cantidad > arrCant[id]) {
        alert('No hay Stock del producto seleccionado');
    }

}

// Agregar un listener al campo de entrada para escuchar los cambios en tiempo real
document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('input', function() {
        // Reemplazar cualquier carácter que no sea un dígito con una cadena vacía
        this.value = this.value.replace(/\D/g, '');
    });
});

cargaBotones();