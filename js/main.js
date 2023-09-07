document.addEventListener("DOMContentLoaded", function () {
    const servicios = [
        { id: 1, nombre: "centrado de llanta", precio: 1500 },
        { id: 2, nombre: "cambio de maza", precio: 3100 },
        { id: 3, nombre: "cambio de eje", precio: 1100 },
        { id: 4, nombre: "parchado", precio: 700 },
    ];

    
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let opciones = "Seleccione una opción (0 en caso de no precisar / ver carrito):\n";

    for (let i = 0; i < servicios.length; i++) {
        opciones += servicios[i].id + ". " + servicios[i].nombre + "\n";
    }

    function verLista() {
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

                if (!isNaN(cantidad) && cantidad > 0) {
                    carrito.push({ servicio: servicioElegido, cantidad });
                    alert(cantidad + " unidades de " + servicioElegido.nombre + " añadidas al carrito.");
                    
                    // Guardar el carrito actualizado en localStorage.
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                } else {
                    alert("Cantidad inválida. Ingrese una cantidad válida.");
                }
            } else {
                alert("Opción inválida. Elija una opción válida.");
            }
        } else {
            alert("No eligió ningún servicio.");
        }


        function vaciarCarrito() {
            carrito.length = 0; 
            localStorage.removeItem("carrito"); 
            mostrarCarrito(); 
        }
        
        document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito);


        let carritoTexto = "Productos en el carrito:\n";

        for (let i = 0; i < carrito.length; i++) {
            carritoTexto += carrito[i].cantidad + " unidades de " + carrito[i].servicio.nombre + " - Precio unitario: $" + carrito[i].servicio.precio + "\n";
        }

        document.getElementById("resultado").textContent = carritoTexto;
    }

    document.getElementById("verLista").addEventListener("click", verLista);
});





//console.log(carrito);
//const total = carrito.reduce((acc, el) == acc + el.precio, 0);
//console.log(total);