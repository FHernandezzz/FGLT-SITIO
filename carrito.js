// carrito.js




let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const producto = {
    nombre,
    precio
  };
  carrito.push(producto);
  actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
  const contadorCarrito = document.getElementById('contador-carrito');
  contadorCarrito.textContent = carrito.length;
}

function mostrarResumenCompra() {
    // Aquí debes construir la lógica para mostrar el resumen de la compra en la página de pagos
  }
  
  function limpiarCarrito() {
    carrito = [];
    actualizarContadorCarrito();
    mostrarResumenCompra(); // Actualiza la vista de la página de pagos
  }
  
  function cancelarCompra() {
    limpiarCarrito();
    window.location.href = "productos.html"; // Redirige a la página de productos
  }


  function mostrarResumenCompra() {
    const paginaPagos = document.querySelector('body');
    paginaPagos.innerHTML = '<h1>Proceso de Pago</h1>';
  
    if (carrito.length === 0) {
      paginaPagos.innerHTML += '<p>No hay productos en el carrito.</p>';
    } else {
      // Mostrar cada producto en el carrito
      paginaPagos.innerHTML += '<h2>Productos en el carrito:</h2>';
      carrito.forEach(producto => {
        paginaPagos.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
      });
  
      // Mostrar el precio total
      const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
      paginaPagos.innerHTML += `<h2>Precio Total: $${precioTotal}</h2>`;
    }
  
    // Botones de acciones
    paginaPagos.innerHTML += `
      <button onclick="limpiarCarrito()">Limpiar Carrito</button>
      <button onclick="cancelarCompra()">Cancelar Compra</button>
      <a href="productos.html">Volver a Productos</a>
    `;
  }
  
  