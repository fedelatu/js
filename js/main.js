let taller = parseInt (prompt("¿Requiere 1.Taller 2.Productos?"))
if (taller <2 ) {
    alert ("Bienvenido, visite el apartado de Taller para contactarse por el servicio requerido")
    
} 
else {
    alert ("Bienvenido, visite el apartado de Productos para ver nuestro stock disponible") 
}

do { 
    producto = prompt("¿Qué producto/servicio requiere?");
    continuar = prompt("¿Desea comprar algo más?");
    
} while (continuar === "si");
alert("Gracias por visitar Rodados Kharuby")
