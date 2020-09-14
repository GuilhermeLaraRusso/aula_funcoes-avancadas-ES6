/** Rest Operator */
// Pega todos os parâmetros de uma função e transforma em array
// Representado por '...'


// Exemplo 1

function sum(...args) {
    console.log (args);
}

console.log(sum(5, 5, 5, 2, 3));



// Exemplo 2

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));


// Utilizando arrow function

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum(5, 5, 5, 2, 3));


