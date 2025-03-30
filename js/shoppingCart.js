console.log("El archivo cart-toggle.js se ha cargado correctamente"); // Mensaje de carga

// document.getElementById("shopping-cart-icon").addEventListener("click", () => {
//   console.log("¡El clic en el carrito funciona correctamente!"); // Mensaje de confirmación
// });

// Obtener elementos del DOM
const cartIcon = document.getElementById("shopping-cart-icon");
const cartSection = document.querySelector(".cart");

// Toggle del carrito al hacer clic en el ícono
cartIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // Evitar que el clic se propague
  cartSection.classList.toggle("active");
});

// Cerrar carrito al hacer clic fuera de él
document.addEventListener("click", (e) => {
  if (!cartSection.contains(e.target) && !cartIcon.contains(e.target)) {
    cartSection.classList.remove("active");
  }
});

// Opcional: Cerrar al hacer clic en la X del carrito
document.querySelectorAll(".delete-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    cartSection.classList.remove("active");
  });
});

// ------------ Instrucciones
// 1.- El menú debe de abrirse al dar click en el carrito ✅
// 2.- El menú debe de cerrarse:
//    2.1- Dar click en el carrito nuevamente. ✅
//    2.2- Dar click en la X (Se debe de agregar la X).
//    2.23 Dar click en fuera del carrito. ✅

// --- Otras funcionalidades ---
// 1.- Incluir un botón de “Agregar al carrito” debajo del precio de cada producto que al hacer click, añada el producto al carrito

// 2.-Incluir un badge arriba del ícono del carrito (ver imagen) que indique cuántos productos hay en el carrito con un número:

// 3.-Se valorará si se crea una funcionalidad libre ✅ (Dar click fuera del carrito para cerrarlo)
