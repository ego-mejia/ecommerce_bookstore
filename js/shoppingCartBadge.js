console.log("El archivo shoppingCartBadge.js se ha cargado correctamente"); // Mensaje de carga

const cartProducts = document.querySelectorAll(".cart__product");
console.log(`Hay ${cartProducts.length} productos en el carrito`);

const cartBadge = document.getElementById("cart-badge");
cartBadge.innerHTML = cartProducts.length;
