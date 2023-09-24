document.addEventListener("DOMContentLoaded", function () {
    const servicios = [
        { id: 1, nombre: "centrado de llanta", precio: 1800 },
        { id: 2, nombre: "cambio de maza", precio: 3400 },
        { id: 3, nombre: "cambio de eje", precio: 1400 },
        { id: 4, nombre: "parchado", precio: 750 },
    ];



    const verListaButton = document.getElementById("verLista");
    const productosContainer = document.getElementById("productos");
    const carritoContainer = document.getElementById("carrito");
    const totalSpan = document.getElementById("total");

    verListaButton.addEventListener("click", () => {
        mostrarProductos(servicios);
    });

  
    function mostrarProductos(productos) {
        const productosContainer = document.getElementById("productos");
    
        productosContainer.innerHTML = "";
    
        productos.forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.innerHTML = `
                <p>${producto.nombre} - $${producto.precio}</p>
                <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            `;
            productosContainer.appendChild(productoDiv);
    
            const agregarButton = productoDiv.querySelector(".agregar-carrito");
            agregarButton.addEventListener("click", () => {
                agregarAlCarrito(producto.id);
            });
        });
    }


    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function agregarAlCarrito(id) {
        const producto = servicios.find(item => item.id === id);

        if (producto) {
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
        }
    }

    function mostrarCarrito() {
        let total = 0;

        carritoContainer.innerHTML = "";

        carrito.forEach(producto => {
            total += producto.precio;
            carritoContainer.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
        });

        totalSpan.textContent = total;
    }

    
    const vaciarCarritoButton = document.getElementById("vaciarCarrito");
    
    vaciarCarritoButton.addEventListener("click", () => {
        vaciarCarrito();
    });

    function vaciarCarrito() {
        localStorage.removeItem("carrito");
        carrito.length = 0; // Vaciar el arreglo del carrito
        mostrarCarrito(); // Actualizar la vista del carrito
    }

    mostrarProductos(servicios);
    mostrarCarrito();
});


//console.log(carrito);
//const total = carrito.reduce((acc, el) == acc + el.precio, 0);
//console.log(total);