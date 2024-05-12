


/* Objeto Window */


/* Ejemplo de Propiedad */

window.localStorage.setItem('usuario', 'Juan');


/* Obtener Datos de Local Storage */

const usuario = window.localStorage.getItem('usuario');
console.log(usuario);


/* Metodo Open */
function abrirVentana(){
    window.open('https://www.w3schools.com/', '_blank', 'width=600,height=400');
}

/* Evento DOMcontentLoade */
window.addEventListener('DOMContentLoaded', (Event) =>{
    console.log("Dom completamente Cargado");
} 
);



/* innerText */


/* Selccionar Elemento y Cambiar su Texto */

var titulo = document.getElementById("principal");

titulo.innerText ="Nuevo Titulo";

/* Obtener el Texto de un Elemento */

var parrafo = document.querySelector('.contenido');

var textoParrafo = parrafo.innerText;

console.log(textoParrafo);

/* Crear un Nuevo Elemento */

var nuevoParrafo = document.createElement('p');

nuevoParrafo.innerText = "Nuevo Parrafo";

document.body.appendChild(nuevoParrafo);


/* Final innerText */

/* Segundo Tema */

/* Primer Ejemplo */

var productos = document.querySelectorAll('.producto');
var imagenAmpliada = document.querySelector('.imagen-ampliada');

productos.forEach(function(producto) {
  producto.addEventListener('click', function() {
    var nuevaUrl = this.getAttribute('data-imagen-ampliada');
    imagenAmpliada.setAttribute('src', nuevaUrl);
  });
});

/* Fin */



/* Segundo Ejemplo */



// Cambiar dinámicamente el color de fondo al hacer clic en un botón
var miDiv = document.getElementById('miDiv');
var cambiarColorBtn = document.getElementById('cambiarColorBtn');

cambiarColorBtn.addEventListener('click', function() {
  miDiv.setAttribute('style', 'width: 200px; height: 200px; background-color: #00ff00;');
});


/* Fin */


/* Tercer Ejemplo  */


// Obtener referencias a elementos del DOM
var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
  var taskText = taskInput.value;
  if (taskText.trim() !== '') {
    var newTask = document.createElement('li');
    newTask.textContent = taskText;
    
    // Agregar evento para marcar como completada al hacer clic
    newTask.addEventListener('click', function() {
      if (!newTask.classList.contains('completed')) {
        newTask.classList.add('completed');
      } else {
        newTask.classList.remove('completed');
      }
    });
    
    // Agregar botón para eliminar la tarea
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
      newTask.remove();
    });
    
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    
    // Limpiar el campo de entrada
    taskInput.value = '';
  }
}

// Agregar evento al botón para llamar a la función addTask
addTaskBtn.addEventListener('click', addTask);


/* Fin */

/* On Select */

function miFuncion(){
    document.getElementById('demo').innerHTML = 'slecciono este texto'
}

/* Fin */

/* On Focus */

function vaciar(conrtrol){
    conrtrol.value='';
   }

/* Fin */


/* Evento-Target Primer EJ */

const button = document.getElementById('myButton');

button.addEventListener('click', manejadorClick);

function manejadorClick(event) {
    console.log("Haz dado click en el botón!");
    console.log(`El evento fue activado por:`)
    console.log(event.target); // Elemento que activo el evento
}

/* Evento-Target Primer EJ FIN */



/* Evento-Target Segundo EJ */


document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(event) {
        if (event.target.id == 'btn1') {
            alert(`Haz hecho clic en el botón 1`);
        } else if (event.target.id == 'btn2') {
            alert(`Haz hecho clic en el botón 2`);
        } else if (event.target.id == 'btn3') {
            alert(`Haz hecho clic en el botón 3`);
        }
        });
    });

/* Evento-Target Segundo EJ FIN */

/* Evento-Target Tercer EJ */

document.querySelector('.cambioColor').addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'lightgreen';
});


/* Evento-Target Tercer EJ FIN */



/* On Change Primer EJ */

document.getElementById('color-select').onchange = function(){
    document.body.style.backgroundColor = this.value;
}

/* On Change Primer EJ FIN */


/* On Change Segundo EJ */

document.getElementById('mostrarCheckbox').onchange = function (){
document.getElementById('elemento').style.display = this.checked ? 'block' : 'none';
};
/* On Change Segundo EJ Fin */


/* On Change Tercer EJ */

document.getElementById('colorSelect').onchange = function(){
    document.getElementById('texto').style.color = this.value;
}
/* On Change Tercer EJ FIN */

/* Tema Daniel INC */

document.getElementById('inicio').addEventListener('submit', function() {

    let nombreUsuario = document.getElementById('nombreUsuario').value;
    
    let contraseña =document.getElementById('contraseña').value;
    
    // Almacenar las credenciales en localStorage
    
    localStorage.setItem('Nombre de usuario', nombreUsuario);
    
    localStorage.setItem('Contraseña', contraseña);
    
    alert('Credenciales almacenadas en localStorage. Puedes verificarlas en la consola.');
    
    });


/* Tema Daniel FIN */

/* Tema Daniel Segundo EJ INC*/

localStorage.setItem('clave', 'valor');

// Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.

// Recuperar un valor de localStorage:

var valor = localStorage.getItem('clave');

// Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable

// Eliminar un valor de localStorage:

localStorage.removeItem('clave');


/* Tema Daniel Segundo EJ FIN*/



/* Tema Arreglos INC */

let miArreglo = [];

// Declaración de un arreglo con elementos



let frutas = ["manzana", "banana", "naranja"];

// Accediendo a elementos del arreglo por su índice

console.log(numeros [0]);

// Imprimirá: 1

console.log(frutas[1]);

// Imprimira: banana

// Modificando elementos del arreglo

frutas [2] = "pera"; // Cambiando "naranja" por "pera"

console.log(frutas);

// Imprimirá: ["manzana", "banana", "pera"]

// Añadiendo elementos al final del arreglo

frutas.push("uva");

console.log(frutas); //

Imprimirá: ["manzana", "banana", "pera", "uva"]

// Eliminando el último elemento del arreglo

frutas.pop();

console.log(frutas);

// Imprimirá: ["manzana", "banana", "pera"]

// Obteniendo la longitud del arreglo

console.log(frutas.length); // Imprimirá: 3

// UN ARRAY ES UNA VARIABLE QUE ALMACENA VARIOS DATOS



let array2= ["perro, gato, loro, vaca"]


/* Arreglos Segundo EJ INC */

function sumaTotal (arreglo) {

    let suma = 0;
    
    for (let num of arreglo) {
    
    suma += num;
    
    }
    
    return suma;
    
    }
    
    // Ejemplo de uso:
    
    const numeros = [1, 2, 3, 4, 5];
    
    console.log(sumaTotal (numeros)); // Debería imprimir 15 (1+2+3+4+5)

    /* Arreglos Segundo EJ FIN */

/* Arreglos Tercer EJ INC */

function encontrarMinimo (arreglo) {

    let minimo = arreglo[0];
    
    for (let num of arreglo) {
    
    if (num < minimo) { minimo = num; }
    
    }
    
    return minimo;
    
    }
    
    // Ejemplo de uso:
    
    const numbers = [10, 3, 7, 21, 15]
    
    console.log(encontrarMinimo(numeros)); // Debería imprimir 3


/* Arreglos Tercer EJ FIN */

function duplicarElementos (arreglo) {

    const nuevoArreglo = [];
    
    for (let num of arreglo) {
    
    nuevoArreglo.push(num * 2);
    
    }
    
    return nuevoArreglo;
    
    }
    
    // Ejemplo de uso:
    
    const numbers1 = [1, 2, 3, 4, 5];
    
    console.log(duplicarElementos (numeros)); // Debería imprimir [2, 4, 6, 8, 10]

/* Tema Arreglos FIN */


/* Tema Prevent Default Ejemplo INI */

document.getElementById('miEnlace').addEventListener('click', function(event) {

    event.preventDefault(); // Evita que el enlace abra una nueva página
    
    
    alert('Enlace deshabilitado');
    
    });
    document.getElementById('formulario').addEventListener('click', function (event) {
    

    
    event.preventDefault(); // Evita que el enlace abra una nueva página
    
    

    
    alert('campo desabilitado');
    
    
    });
    
    document.getElementById('miBoton').addEventListener('click', function (event) {
    
    
    event.preventDefault(); // Evita el comportamiento predeterminado del botón
    
    // Puedes realizar otras acciones aquí

    });
    
    alert('Botón clickeado, pero no se realizara su accion predeterminada');


/* Tema Prevent Default Ejemplo FIN */



/* Session Storage Tema INC */

/* Session Storage Primer EJ INC */

function guardarDatos() {
    var nombreUsuario = prompt("Ingrese su nombre de usuario:");
    // guardar datos en sessionstorage = setItem
    sessionStorage.setItem('usuario', nombreUsuario);
    alert("Nombre de usuario guardado en sessionStorage.");
}

function mostrarDatos() {
    // recuperar datos = getItem
    var usuario = sessionStorage.getItem('usuario');
    // Si se encuentra contenido en nombreUsuario 
    if (usuario) {
        alert("Nombre de usuario almacenado en sessionStorage: " + usuario);
    } else { // si no se encuentra contenido
        alert("No se encontró ningún nombre de usuario en sessionStorage.");
    }
}

/* Session Storage Primer EJ FIN */

/* Session Storage Segundo EJ INC */


// guardar el nombre de un usuario en SessionStorage cuando inicia sesion
sessionStorage.setItem('usuario', 'José');

// recuperar el nombre de usuario y mostrarlo en la página de bienvenida
const usuario1 = sessionStorage.getItem('usuario');
document.getElementById('bienvenida').textContent = 'Bienvenido, ' + usuario + '!';


/* Session Storage Segundo EJ FIN */

/* Session Storage Tema FIN */


/* Tema Mouseenter INC */

/* Primer EJ INC */

// Obtener referencia al botón
const boton = document.getElementById('boton');

// Agregar evento MouseEnter al botón
boton.addEventListener('mouseenter', () => {
      // Cambiar el color del botón cuando el cursor entra
    boton.style.backgroundColor = 'green';
});

// Agregar evento MouseLeave al botón
boton.addEventListener('mouseleave', () => {
     // Restaurar el color original del botón cuando el cursor sale
    boton.style.backgroundColor = '';
});

/* Primer EJ FIN */



/* Segundo EJ INC */



// Obtener referencia al elemento que se va a seguir con el mouse
const elemento = document.getElementById('elemento');

// Agregar evento mousemove al documento
document.addEventListener('mousemove', function(evento) {
    // Obtener las coordenadas del mouse dentro del documento
    const x = evento.clientX;
    const y = evento.clientY;
     // Actualizar la posición del elemento para que siga al mouse
    elemento.style.left = (x - elemento.offsetWidth / 2) + 'px';
    elemento.style.top = (y - elemento.offsetHeight / 2) + 'px';
});

/* Segundo EJ FIN */



/* Tercer EJ INC */

// Obtener referencia al lienzo y al contexto 2D
const lienzo = document.getElementById('lienzo');
const contexto = lienzo.getContext('2d');

// Bandera para indicar si se está dibujando
let dibujando = false;

// Función para comenzar a dibujar
function iniciarDibujo(evento) {
    dibujando = true;
    contexto.beginPath();
    contexto.moveTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
}

// Función para dibujar mientras el mouse se mueve
function dibujar(evento) {
    if (dibujando) {
    contexto.lineTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
    contexto.stroke();
}
}

// Función para detener el dibujo
function detenerDibujo() {
    dibujando = false;
}

// Agregar evento mousedown al lienzo
lienzo.addEventListener('mousedown', iniciarDibujo);

// Agregar evento mousemove al lienzo
lienzo.addEventListener('mousemove', dibujar);

// Agregar evento mouseup al lienzo
lienzo.addEventListener('mouseup', detenerDibujo);

// Agregar evento mouseleave al lienzo (por si el mouse sale del área del lienzo mientras se está dibujando)
lienzo.addEventListener('mouseleave', detenerDibujo);

/* Tercer EJ FIN */

/* Tema Mouseenter FIN*/

/* Tema ON scroll y ON reset INC */

/* Ejemplos ON scroll INC */

/* Primer EJ INC */

window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

/* Primer EJ FIN */

/* Segundo EJ INC */
$(window).scroll(function() {
    if($(window).scrollTop()+ $   (window).height()=== $(document).height() ) {

        $('#content').append('<div class="item">Nuevo Elemeto</div>');
    }
});

/* Segundo EJ FIN */





/* Ejemplos ON scroll FIN */


/* Ejemplos ON reset INC */

/* Primer EJ INC */

function manejarRestablecimiento(){
    console.log("El formulario ha sido restablecido");

    document.getElementById('nombre').value = "";
}

/* Primer EJ FIN */

/* Segundo EJ INC */


function confirmarRestablecimiento(){
    return confirm("Estas seguro de que desea restablecer")
}

/* Segundo EJ FIN */

/* Tercer EJ INC */


function guardarDatos(){
    const nombreGuardado = document.getElementById("nombre").value;

    alert("Los valores de el formulario se han guardado temporalmente")
}

/* Tercer EJ FIN */


/* Ejemplos ON reset FIN */

/* Tema ON scroll y ON reset FIN */
