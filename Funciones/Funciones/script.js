/* Primer Ejercisio */

function suma(num1, num2) {
  return num1 + num2;
}

var resultado = suma(5, 3);
console.log(resultado);

/* Segundo Ejersicio */

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

var num = 17;
if (esPrimo(num)) {
  console.log(num + " es primo");
} else {
  console.log(num + " no es primo");
}

/* Tercer Ejercisio */

function calcularPromedio(numeros) {
  var total = 0;
  for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total / numeros.length;
}

var numeros = [5, 8, 12, 3, 6];
var promedio = calcularPromedio(numeros);
console.log("El promedio es: " + promedio);

/* Cuarto Ejercisio */

function imprimirNumerosPares(limite) {
  for (var i = 2; i <= limite; i += 2) {
    console.log(i);
  }
}

var limite = 20;
console.log("Números pares hasta el límite de " + limite + ":");
imprimirNumerosPares(limite);

/* Quinto Ejersicio */

function tablaMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
  }
}

var numero = 5;
console.log("Tabla de multiplicar del " + numero + ":");
tablaMultiplicar(numero);

/* Sexto Ejercisio */

function numeroMayor(a, b, c) {
  if (a === b && a === c) {
    return "Son Iguales";
  } else {
    return Math.max(a, b, c);
  }
}

console.log(numeroMayor(10, 30, 50));

/* Setimo Ejercisio */

function generar_caracter(n, caracter) {
  return caracter.repeat(n);
}

console.log(generar_caracter(10, "z"));

/* Octavo Ejercisio */

function sumaDiez() {
  let suma = 0;
  for (let i = 1; i <= 10; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumaDiez());

/* Noveno Ejercisio */

function solicitarNumero() {
  let numero;
  do {
    numero = prompt("Ingrese un número mayor que 100:");
    numero = Number(numero);
  } while (numero <= 100 || isNaN(numero));
  alert("Número válido: " + numero);
}

solicitarNumero();

/* Decimo Ejercisio */

function obtenerSiete() {
  let numero;
  while (numero !== 7) {
    numero = Math.floor(Math.random() * 10) + 1;
    console.log(numero);
  }
}

obtenerSiete();

/* Ejercisio 11 */

function imprimirPares() {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}

imprimirPares();

/* Ejercisio 12 */

function pedirNumero() {
  let numero;
  do {
    numero = prompt("Por favor, ingrese un número entre 1 y 5:");
    numero = parseInt(numero, 10);
  } while (numero < 1 || numero > 5 || isNaN(numero));

  alert("Número ingresado correctamente: " + numero);
}

pedirNumero();

/* Ejercisio 13 */

function imprimirFibonacci() {
  let a = 0,
    b = 1,
    c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

imprimirFibonacci();

/* Ejercisio 14 */

function validarContrasena() {
  let contrasena;
  while (contrasena !== "contraseña123") {
    contrasena = prompt("Ingrese su contraseña:");
  }
  alert("Contraseña correcta!");
}

validarContrasena();

/* Ejercisio 15 */

function imprimirPrimos(n) {
  for (let num = 2, count = 0; count < n; num++) {
    for (let i = 2, s = Math.sqrt(num); i <= s && num % i === 0; ) i += 2;
    if (i > s) console.log(num), count++;
  }
}

imprimirPrimos(5); // Imprime: 2 3 5 7 11

/* Ejersicio 16 */

function pedirNumeroPositivo() {
  let numero;
  do {
    numero = prompt("Ingrese un número positivo:");
  } while (isNaN(numero) || numero <= 0);
  return numero;
}

const numeroIngresado = pedirNumeroPositivo();
console.log("Número ingresado:", numeroIngresado);

/* Ejercisio 17 */

function imprimirAtras(inicio, fin) {
  for (let i = inicio; i >= fin; i--) console.log(i);
}

imprimirAtras(10, 1);

/*   Ejercisio 18 */

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

/* Ejercisio 20 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    const resultado = i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i;
    console.log(resultado);
  }
}

fizzBuzz();
