console.log("El archivo addToShoppingCart.js se ha cargado correctamente"); // Mensaje de carga

document.querySelectorAll(".product__shopping-cart--add").forEach((button) => {
  button.addEventListener("click", (e) => {
    const bookArticle = e.target.closest(".book");
    const imageSrc = bookArticle.querySelector("img").getAttribute("src");
    const title = bookArticle.querySelector(".book__text h3").textContent;
    const price = bookArticle.querySelector(".book__text p").textContent;

    // Crear nuevo elemento del carrito
    const cartProduct = document.createElement("article");
    cartProduct.className = "cart__product";
    cartProduct.innerHTML = `
        <div class="cart__product--text-container">
          <img src="${imageSrc}" alt="${title}" />
          <p>${title}</p>
          <p>${price}</p>
        </div>
        <i>
          <img src="assets/x-circle.svg" 
               alt="Eliminar ${title}" 
               class="delete-icon">
        </i>
      `;

    // Añadir al carrito
    const cartSection = document.querySelector(".cart");
    cartSection.appendChild(cartProduct);

    // Actualizar badge del carrito
    const cartBadge = document.getElementById("cart-badge");
    if (cartBadge) {
      const currentCount = document.querySelectorAll(".cart__product").length;
      cartBadge.textContent = currentCount;
    }

    // Añadir funcionalidad de eliminar
    cartProduct.querySelector(".delete-icon").addEventListener("click", () => {
      cartProduct.remove();
      // Actualizar badge después de eliminar
      if (cartBadge)
        cartBadge.textContent =
          document.querySelectorAll(".cart__product").length;
    });
  });
});
