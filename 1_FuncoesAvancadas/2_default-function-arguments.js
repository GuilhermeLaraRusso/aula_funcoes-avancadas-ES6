/** Default Function Arguments */

// Utilizando um caracter de '=', pode-se atribuir valores padrão, caso o parâmetro não for passado ou passado com o valor de 'undefined'


// Exemplo parâmetro não definido

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5));


// Exemplo parâmetro '0'

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 0));


// Exemplo 'Undefined'

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, undefined));


//Funciona com todos os parâmetros

function multiply(a = 5, b = 1) {
    return a * b;
}

console.log(multiply());


// Exemplo 2

function multiply(a = 5, b = 1) {
    return a * b;
}

console.log(multiply(undefined, 5));


/** Lazy Evaluation */

function randomNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));