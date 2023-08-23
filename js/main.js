const servicios = [
    {id: 1, nombre: "centrado de llanta", precio: 1500},
    {id: 2, nombre: "cambio de maza", precio: 3100},
    {id: 3, nombre: "cambio de eje", precio: 1100},
    {id: 4, nombre: "parchado", precio: 700},
];


const carrito = [];


let opciones = "Seleccione una opción (0 en caso de no precisar):\n";

for (let i = 0; i < servicios.length; i++) {
    opciones += servicios[i].id + ". " + servicios[i].nombre + "\n";
}


let opcionElegida = parseInt(prompt(opciones));


if (opcionElegida >= 1 && opcionElegida <= servicios.length) {
    let servicioElegido = null;
    for (let i = 0; i < servicios.length; i++) {
        if (servicios[i].id === opcionElegida) {
            servicioElegido = servicios[i];
            break;
        }
    }

    
    if (servicioElegido) {
        let cantidad = parseFloat(prompt("Indique la cantidad de unidades requeridas para " + servicioElegido.nombre + ":"));

        // Verificar la cantidad ingresada
        if (!isNaN(cantidad) && cantidad > 0) {
            carrito.push({ servicio: servicioElegido, cantidad });
            alert(cantidad + " unidades de " + servicioElegido.nombre + " añadidas al carrito.");
        } else {
            alert("Cantidad inválida. Ingrese una cantidad válida.");
        }
    } else {
        alert("Opción inválida. Elija una opción válida.");
    }
} else {
    alert("No eligió ningún servicio.");
}


let carritoTexto = "Productos en el carrito:\n";

for (let i = 0; i < carrito.length; i++) {
    carritoTexto += carrito[i].cantidad + " unidades de " + carrito[i].servicio.nombre + " - Precio unitario: $" + carrito[i].servicio.precio + "\n";
}


alert(carritoTexto);


const preciofiltrado = 2800;
function filtrarpormenorprecio(servicios,preciofiltrado ){
    const encontrado = servicios.find((el) => el.precio <= preciofiltrado);
    return encontrado
}


//console.log(carrito);
//const total = carrito.reduce((acc, el) == acc + el.precio, 0);
//console.log(total);