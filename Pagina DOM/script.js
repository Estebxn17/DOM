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

/* Tabla Carrito */

const botonAgregar = document.getElementById('agregarFila');
const cuerpoTabla = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 01';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Portatil-HP'; 

    const precio = document.createElement('td');
    precio.textContent = '20.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});


/* Tabla 2 */

const botonAgregar2 = document.getElementById('agregarFila');
const cuerpoTabla2 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 02';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Portatil AZUS'; 

    const precio = document.createElement('td');
    precio.textContent = '10.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla3 */
const botonAgregar3 = document.getElementById('agregarFila');
const cuerpoTabla3 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 03';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Lenovo'; 

    const precio = document.createElement('td');
    precio.textContent = '15.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

const botonAgregar4 = document.getElementById('agregarFila');
const cuerpoTabla4 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 04';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Dell'; 

    const precio = document.createElement('td');
    precio.textContent = '30.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla5 */

const botonAgregar5 = document.getElementById('agregarFila');
const cuerpoTabla5 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 05';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'MSI'; 

    const precio = document.createElement('td');
    precio.textContent = '12.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla6 */

const botonAgregar6 = document.getElementById('agregarFila');
const cuerpoTabla6 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 06';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'ACER'; 

    const precio = document.createElement('td');
    precio.textContent = '25.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla7 */

const botonAgregar7 = document.getElementById('agregarFila');
const cuerpoTabla7 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 07';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Razer'; 

    const precio = document.createElement('td');
    precio.textContent = '15.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla8 */

const botonAgregar8 = document.getElementById('agregarFila');
const cuerpoTabla8 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 08';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'Samsumg'; 

    const precio = document.createElement('td');
    precio.textContent = '40.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});

/* Tabla9 */

const botonAgregar9 = document.getElementById('agregarFila');
const cuerpoTabla9 = document.getElementById('cuerpoTabla');

botonAgregar.addEventListener('click', () => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = 'PC - 03';
     

    const tipo = document.createElement('td');
    tipo.textContent = 'MAC'; 

    const precio = document.createElement('td');
    precio.textContent = '40.000$'; 

    const acciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        fila.remove();
    });
    acciones.appendChild(botonEliminar);

    fila.appendChild(nombre);
    fila.appendChild(tipo);
    fila.appendChild(precio);
    fila.appendChild(acciones);

    cuerpoTabla.appendChild(fila);
});