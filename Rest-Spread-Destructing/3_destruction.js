// Exemplo antes do Destructuring Assingment

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];



/** Destructuring Assingnment */

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2);
console.log(tomato, tomato2);


// Também pode ser utilizado com objetos

var obj = {
    name: 'Guilherme'
}

var name = obj.name;

/** Destructuring Assingnment */

var {name} = obj;

console.log(name);