/** Enhanced Object Literals */


// Definição de Objetos

var prop1 = 'Digital Innovation One';

var obj = {
    prop1
};

console.log(obj);


// Definição de Métodos para Funções

function method1() {
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();


// Outra forma de fazer métodos

var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum (1, 5));