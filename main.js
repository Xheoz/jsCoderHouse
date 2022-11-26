const productos = [
    {nombre: "televisor", precio: 1000},
    {nombre: "lavarropas", precio: 2500},
    {nombre: "cocina", precio: 5000},
    {nombre: "lavavajilla", precio: 1500},
];

let carrito = [];

let seleccion = prompt("Hola! ¿Desea comprar algún producto?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese su respuesta por si o no")
    seleccion = prompt("Hola! Comprará algo? Ingrese si o no")
};

while(seleccion != "no"){
    let producto = prompt("Escoje un producto por favor")
    let precio = 0

    if(producto == "televisor" || producto == "lavarropas" || producto == "cocina" || producto == "lavavajilla"){
        switch(producto) {
            case "televisor":
                precio = 1000;
                break;
            case "lavarropas":
                precio = 2500;
                break;
            case "cocina":
                    precio = 5000;
                    break;
            case "lavavajilla":
                precio = 1500;
                break;    
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuántas unidades quiere llevar?"))
    
    carrito.push({producto, unidades, precio})
    alert(carrito)
    } else {
        alert("No tenemos ese producto en nuestra tienda")
    }

    seleccion = prompt("Quiere seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por la compra! Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

alert(`El total a pagar es: ${total}`);