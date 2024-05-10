document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = button.dataset.name;
        const price = button.dataset.price;
  
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <p>${name} - $${price}</p>
          <button class="remove-from-cart">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
  
        const removeButtons = document.querySelectorAll('.remove-from-cart');
        removeButtons.forEach(removeButton => {
          removeButton.addEventListener('click', function() {
            removeButton.parentElement.remove();
          });
        });
      });
    });
  });
  