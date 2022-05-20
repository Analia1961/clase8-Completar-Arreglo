// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 7 - Completar Arreglo

/* 
• Llenar un array de 10 posiciones 
con números aleatorios entre 0 y 99.
• Para obtener números aleatorios crear una función Azar,
 que se base en las funciones disponibles en el paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.
*/

//EJERCICIO CREAR ARREGLO CON NUMEROS RAMDOM

let indice: number;
let arregloRandom: number[] = new Array(10);

function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

for (indice = 0; indice < 10; indice++) {
  arregloRandom[indice] = Azar(100);
}

for (indice = 0; indice < 10; indice++) {
  console.log(
    "el numero en la posicion " + indice + " es " + arregloRandom[indice]
  );
}
