var nombre = "Juan"; // DEPRECADA - NO SE USA MAS
nombre = 2;

//---------------------------------------------------------
const otroNombre = "Juan";
let tercerNombre = "Carlos";
tercerNombre = 0;
// USAR SIEMPRE CONST A MENOS QUE SEPAS QUE LA VARIABLE VA A CAMBIAR
console.log(tercerNombre);

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
  console.log(cualquierCosa);
}
// DECLARACION - FORMA NUEVA
const mostrarOtraCosaEnConsola = () => {
  const cualquierCosa = "cualquier otra cosa";
  console.log(cualquierCosa);
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
console.log(valor)
//console.log(cualquierCosa) // COMO ESTA DECLARADA DENTRO DE LA FUNCION, NO EXISTE FUERA ENTONCES PARA JS NO ESTA DEFINIDA

//-------------------------------------
