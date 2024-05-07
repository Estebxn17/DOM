/* Body */

var cuerpo = document.querySelector('body');
console.log(cuerpo);


/* Botones Body */

var amarillo11 = document.querySelector('#amarillo');
console.log(amarillo11);

var azul12 = document.querySelector('#azul');
console.log(azul12);


var rojo13 = document.querySelector('#rojo');
console.log(rojo13);

amarillo11.addEventListener('click',
function amarillo21(){
    console.log("caja a");
    cuerpo.style.backgroundColor = "yellow"
}
)


azul12.addEventListener('click',
function amarillo21(){
    console.log("caja az");
    cuerpo.style.backgroundColor = "blue"
}
)

rojo13.addEventListener('click',
function amarillo21(){
    console.log("caja r");
    cuerpo.style.backgroundColor = "red"
}
)

/* Fin de botones Body */



/* Capturar Cuadro */


var cuadro1 = document.querySelector('.caja');
console.log(cuadro1);

cuadro1.style.border = "2px solid black"
cuadro1.style.backgroundColor = "red"
cuadro1.style.padding = "180px"




/* Capturar Botones */

var Azul = document.querySelector('#azulc');
console.log(Azul);


var Rojo = document.querySelector('#rojoc');
console.log(Rojo);

var Verde = document.querySelector('#verdec');
console.log(Verde);

let amarillo = document.querySelector('#amarilloc');
console.log(amarillo);

let Gris = document.querySelector('#grisc');
console.log(Gris);


/* Funciones */ 

Azul.addEventListener('click',
function azul(){
    console.log("caja azul");
    cuadro1.style.backgroundColor = "blue"
    
}


)

Rojo.addEventListener('click',

function rojo1(){
    console.log("caja roja");
    cuadro1.style.backgroundColor = "red"
}
)


Verde.addEventListener('click',

function verde1(){
    console.log("caja verde");
    cuadro1.style.backgroundColor = "green"
}
)

amarillo.addEventListener('click',

function amarillo1(){
    console.log("caja amarilla");
    cuadro1.style.backgroundColor = "yellow"
}
)

Gris.addEventListener('click',

function gris1(){
    console.log("caja gris");
    cuadro1.style.backgroundColor = "gray"
}
)



/* Segundo Ejercisio Formulario */

var espaciog = document.querySelector('#form1')
console.log(espaciog);

var div02 = document.querySelector('#espacio')
console.log(div02);

var nombre1 = document.querySelector('#nombre');
console.log(nombre1);

var boton = document.querySelector('#boton11');
console.log(boton);


/* Evento boton */



boton.addEventListener('click',
function pasarinfo(){
    let nombre1 = document.querySelector('#nombre').value;
    let crear = document.createElement('li');
    crear.append(nombre1)
    let div1 = document.querySelector('#espacio');
    div1.append(crear);

});


/* Calculadora */

const pantalla = document.getElementById('pantalla');
let primerNumero = null;
let operador = null;
let segundoNumero = null;

function manejarNumero(numero) {
  pantalla.innerText += numero;
}

function manejarOperador(op) {
  primerNumero = parseFloat(pantalla.innerText);
  pantalla.innerText = "";
  operador = op;
}

function calcularResultado() {
  segundoNumero = parseFloat(pantalla.innerText);
  let resultado;
  switch (operador) {
    case "+":
      resultado = primerNumero + segundoNumero;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      break;
    case "*":
      resultado = primerNumero * segundoNumero;
      break;
    case "/":
      if (segundoNumero === 0) {
        resultado = "Error";
      } else {
        resultado = primerNumero / segundoNumero;
      }
      break;
  }
  pantalla.innerText = resultado;
  primerNumero = null;
  operador = null;
  segundoNumero = null;
}

function limpiarPantalla() {
  pantalla.innerText = "";
  primerNumero = null;
  operador = null;
  segundoNumero = null;
}

const botonesNumeros = document.querySelectorAll('.numero');
botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => manejarNumero(boton.dataset.numero));
});

const botonesOperadores = document.querySelectorAll('.operador');
botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => manejarOperador(boton.dataset.operador));
});

const botonIgual = document.querySelector('.igual');
botonIgual.addEventListener('click', calcularResultado);

const botonBorrar = document.querySelector('.borrar');
botonBorrar.addEventListener('click', limpiarPantalla);



var contenedorp = document.querySelector('#calculadora');
console.log(contenedorp);

var numero1 = document.querySelector('#num1');
console.log(numero1);

var numero2 = document.querySelector('#num2');
console.log(numero2);


var suma = document.querySelector('#suma');
console.log(suma);

var resta = document.querySelector('#resta');
console.log(resta);

var multiplicacion = document.querySelector('#multiplicacion');
console.log(multiplicacion);

var divicion = document.querySelector('#divicion');
console.log(divicion);


var bresultado = document.querySelector('#resultado');
console.log(bresultado);

var cresultado = document.querySelector('#resultadoc');
console.log(cresultado);




