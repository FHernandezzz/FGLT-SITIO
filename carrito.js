window.onload = function () {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }

  
  var contenedor = document.getElementById("carrito"); 


  var html = "<ul>"; 

  for (var i = 0; i < carrito.length; i++) {
   
    html += "<li>";
    html += "Nombre: " + carrito[i].nombre + ", Precio: " + carrito[i].precio;
    html += "</li>";
  }

  html += "</ul>";
  contenedor.innerHTML = html;
};

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const producto = {
    nombre,
    precio,
  };
  carrito.push(producto);
  actualizarContadorCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const contadorCarrito = document.getElementById('contador-carrito');
  const contador = parseInt(contadorCarrito.textContent);
  contadorCarrito.textContent = contador + 1;
}

function actualizarContadorCarrito() {
}

function mostrarResumenCompra() {

}

function limpiarCarrito() {
  localStorage.removeItem("carrito");
  window.location.reload();
}

function cancelarCompra() {
  limpiarCarrito();
  window.location.href = "productos.html"; 
}

function mostrarResumenCompra() {
  const paginaPagos = document.querySelector("body");
  paginaPagos.innerHTML = "<h1>Proceso de Pago</h1>";

  if (carrito.length === 0) {
    paginaPagos.innerHTML += "<p>No hay productos en el carrito.</p>";
  } else {

    paginaPagos.innerHTML += "<h2>Productos en el carrito:</h2>";
    carrito.forEach((producto) => {
      paginaPagos.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
    });


    const precioTotal = carrito.reduce(
      (total, producto) => total + producto.precio,
      0
    );
    paginaPagos.innerHTML += `<h2>Precio Total: $${precioTotal}</h2>`;
  }


  paginaPagos.innerHTML += `
      <button onclick="limpiarCarrito()">Limpiar Carrito</button>
      <button onclick="cancelarCompra()">Cancelar Compra</button>
      <a href="productos.html">Volver a Productos</a>
    `;
}
