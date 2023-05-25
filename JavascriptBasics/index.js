var nombre = "Juan"; // DEPRECADA - NO SE USA MAS
nombre = 2;

//---------------------------------------------------------
const otroNombre = "Juan";
let tercerNombre = "Carlos";
tercerNombre = 0;
// USAR SIEMPRE CONST A MENOS QUE SEPAS QUE LA VARIABLE VA A CAMBIAR
// console.log(tercerNombre);

// --------------------------------------------------------
// LEVEMENTE TIPADO - A JAVASCRIPT NO LE IMPORTAN LOS TIPOS

const string = "jshdakjshda54654654*-*/-*/2312312"; // "" - `` // TIPO PRIMITIVO // TIENE METODOS
const boolean = true; // false // PRIMITIVO
const number = -1.2; // NUMBEROS POSITIVOS, NEGATIVOS, CON COMA (es un punto)
const array = ["Lujan", "Sanchez", 35, 1, true, false]; // Lista de cosas y se ponen entre corchetes // METODOS ESPECIFICOS PARA EL
// VALOR ES EL STRING/NUMERO/LO QUE SEA QUE PONGO ADENTRO - LUGAR QUE OCUPA SE LLAMA INDEX
// INDEX EMPIEZA EN 0
// Array es un tipo especial de objeto  [ 0: 'Lujan', 1: 'Sanchez', 2: 35, 3: 1, 4: true, 5: false ]

const object = {
  propiedad: "valor",
  key: "value",
  nombre: "Lujan",
  apellido: "Sanchez",
  edad: 35,
  cosasQueTengoEnElBolsillo: {
    deAdelante: "llaves",
    deAtras: "mugre",
  },
}; // Lista de cosas y se ponen entre llaves // METODOS ESPECIFICOS PARA EL
//-------------------------------------
// DECLARACION - VIEJA FORMA (JAVASCRIPT SOLO LEE LA DECLARACION Y NO LA EJCUTA)
// FUNCIONES HACEN COSAS O DEVUELVEN COSAS

function mostrarEnConsola() {
  const cualquierCosa = "cualquier cosa";
  // console.log(cualquierCosa);
}
// DECLARACION - FORMA NUEVA
const mostrarOtraCosaEnConsola = () => {
  const cualquierCosa = "cualquier otra cosa";
  // console.log(cualquierCosa);
};

const devolverAlgo = (name) => {
    return name;
    //JS NO LO LEE, LA FUNCIONA TERMINA EN EL RETURN
    console.log(cualquierCosa);
};

// LLAMAR FUNCIONES - EJECUCION
mostrarEnConsola();
mostrarOtraCosaEnConsola();
const valor = devolverAlgo("Luajn")
// console.log(valor)
//console.log(cualquierCosa) // COMO ESTA DECLARADA DENTRO DE LA FUNCION, NO EXISTE FUERA ENTONCES PARA JS NO ESTA DEFINIDA

//-------------------------------------

//ARRAYS


const frutas = [ "banana", "manzana", "pera" ]
const verdaderos = [ true, true, true, true, false]
// index a partir del 0 (no del 1), cada lugar del array es un numero creciente de index
// TIPO RARO DE OBJETO - METODOS ESPECIFICOS PARA ARRAYS

// PUSH - POP
// PUSH - meter un elemento al final del array
frutas.push("naranja") // --> YO LO NECESITO COMO DESARROLLADOR --> MAS SE USA

// POP
frutas.pop() // QUITA ELEMENTO DEL FINAL DEL ARRAY


// SHIFT - UNSHIFT --> PRINCIPIO DEL ARRAY -------- CASI NO SE USA
frutas.unshift("naranja") // --> YO NECESITO PONER NARANJA AL PRINCIPIO DEL ARRAY
frutas.shift() // --> QUITA ELEMENTO DEL PRINCIPIO DEL ARRAY

// --------------------------------------------------
const list = [ 2, 5, 7, 8, 15, 23, 54 ] // --> LENGTH = 6
const secondList = list;
const menoresADiez = []; 

for (let index = 0; index < list.length; index++) {
  // console.log("index", index)
  // console.log("valor", list[index])
  if(list[index] < 10) {
    menoresADiez.push(list[index])
  }
}

secondList.push("banana")
// console.log('segunda', secondList);
// console.log('primera', list)

let miFrutaFavorita;

for (let index = 0; index < frutas.length; index++) {
  console.log("index", index)
  console.log("valor", frutas[index])
  if(frutas[index] === 'manzana') {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", frutas[index])
    miFrutaFavorita = frutas[index]
    break // --> FRENA EL BUCLE CUANDO ENCUENTRA LO QUE QUIERO
  }
}

// console.log('miFrutaFavorita', miFrutaFavorita)

// ---------- SWITCH --------------------
// STATEMENT - CONDICIONAL ENCADENADO
const error = 500; // 500, 404, 400, 532
// SOLO CASOS DE IGUALDAD
switch(error) {
    case 500: console.log("Internal server error");
    break
    case 404: console.log("PAge not found")
    break
    case 400: console.log("Bad Request")
    default:
      console.log("network error")
}

if(error === 500) {
  console.log("es par");
} else if (error === 404) {
  console.log("es impar")
}  else if (error === 400) {
  console.log("es impar")
} else {
  console.log("es impar")
}