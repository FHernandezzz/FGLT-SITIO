function toggleMenu() {
  const menuList = document.querySelector('.menu-list');
  menuList.classList.toggle('show');
}
let cantidadCarrito = 0; // Variable para llevar el control de la cantidad en el carrito

function agregarAlCarrito() {
    // Lógica para agregar productos al carrito
    cantidadCarrito++;
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    // Actualizar el contador en la interfaz
    document.getElementById('contador-carrito').innerText = cantidadCarrito;
}

function verCarrito() {
    // Lógica para mostrar la página del carrito (se implementará más adelante)
    console.log("Mostrar carrito");
}
function irAlCarrito() {
    // Aquí puedes poner la lógica adicional que necesites antes de la redirección
    console.log("Redirigiendo al carrito...");
    // Redirige a la página del carrito
    window.location.href = "carrito.html"; // Reemplaza "carrito.html" con la ruta de tu página de carrito
}

document.querySelector('.carrito-icon').addEventListener('click', irAlCarrito);
