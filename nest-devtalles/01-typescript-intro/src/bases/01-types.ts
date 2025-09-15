export const name = 'Santiago';
export let age = 45;
export const isValid = true;

// name = 'Fabian'; -> Error

age = 30;

// age = 'Fabian'; -> Error
// age = true; -> Error

export const templateString = `Esto es un string
multilinea, que puede tener
" -> Comillas dobles
' -> Comillas simples
inyectar valores ${name}
expresiones ${1 + 1}
números ${age}
booleanos ${isValid}`;

console.log(templateString);
