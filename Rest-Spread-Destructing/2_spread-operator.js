/** Spread Operator */
// Pega todos os itens do array e transforma no parâmetro para a função
// Também representado por '...'

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
        return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));


/** Spread Operator */
// Pode ser usados em strings, arrays, literal objects e objetos iteráveis

// Exemplo 1
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);


// Exemplo 2 - Utilizando em Arrays

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(arguments);
}

logArgs(...arr);


// Exemplo 3 - Utilizando em Arrays

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);


// Pode ser utilizado para construir Arrays

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

logArgs(arr2);
console.log(arr3);


// Exemplo 5 - Utilizando em Objetos Literais

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);

logArgs(arr2);
console.log(arr3);
