/* Llamando la etiqueta targeta */

var targeta1 = document.querySelector('#targeta1');
console.log(targeta1);

var  targeta2 = document.querySelector('#targeta2');
console.log(targeta2);

var targeta3 = document.querySelector('#targeta3');
console.log(targeta3);

var  targeta4 = document.querySelector('#targeta4');
console.log(targeta4);


var  targeta5 = document.querySelector('#targeta5');
console.log(targeta5);

var  targeta6 = document.querySelector('#targeta6');
console.log(targeta6);

var  targeta7 = document.querySelector('#targeta7');
console.log(targeta7);

var  targeta8 = document.querySelector('#targeta8');
console.log(targeta8);

var  targeta9 = document.querySelector('#targeta9');
console.log(targeta9);

/* Llamando botones */

var boton01 = document.querySelector('#boton1');
console.log(boton01);

var boton02 = document.querySelector('#boton2');
console.log(boton02);


var boton03 = document.querySelector('#boton3');
console.log(boton03);

var boton04 = document.querySelector('#boton4');
console.log(boton04);

var boton05 = document.querySelector('#boton5');
console.log(boton05);

var boton06 = document.querySelector('#boton6');
console.log(boton06);

var boton07 = document.querySelector('#boton7');
console.log(boton07);

var boton08 = document.querySelector('#boton8');
console.log(boton08);

var boton09 = document.querySelector('#boton9');
console.log(boton09);

var espaciog2 = document.querySelector('#espacio1');
console.log(espaciog2);

var producto01 = document.querySelector('#producto01');
console.log(producto01);

/* Creando funciones */



/* Funcionalidad Carrito */



/* Pruebas */

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
  


 /*  Pruebas Targeta1 */
  document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.añadir-carrito');
    const cartItemsContainer = document.querySelector('.items-carrito');
  
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