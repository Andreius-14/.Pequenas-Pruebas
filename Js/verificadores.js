const valor1 = 10;
const valor2 = "Hola";
const valor3 = true;
const valor4 = NaN;
const valor5 = Infinity;
const valor6 = null;
const valor7 = undefined;
const valor8 = new Date();
const valor9 = /Hola/;
const valor10 = ["a", "b", "c"]; 
const valor11 = new Map()
const valor12 = new Set();

// console.log(isNaN(valor4)) // true
console.log(isFinite(valor1)); // true
console.log(isFinite(valor5)); // false
// console.log(isInteger(valor1)) // true
// console.log(isInteger(valor2)) // false
// console.log(isBoolean(valor3)) // true
// console.log(isString(valor2)) // true
// console.log(isSymbol(Symbol())) // true
// console.log(isUndefined(valor7)) // true
// console.log(isNull(valor6)) // true
// console.log(isDate(valor8)) // true
// console.log(isRegExp(valor9)) // true
// console.log(isArray(valor10)) // true
// console.log(isTypedArray(new Int8Array(10))) // true
// console.log(isError(new Error())) // true
// console.log(isMap(valor11)) // true
// console.log(isSet(valor12)) // true
// const valor1 = "Hola";
// const valor2 = true;
//
// Array.bind;
