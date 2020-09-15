/** Symbols */

// Symbols é uma maneira de gerar um identificador único

const uniqueId = Symbol();

console.log(uniqueId)

// Cada Symbol é único.
// Pode-se atribuir valor ao Symbol, porém ele serve apenas para efeito de Debug

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);


// Symbol pode ser utilizado para gerar propriedades privadas

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello',
    _id: 'Hello'
}

console.log(obj)


// Well Know Symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//

// como era feito antes do ES6:

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }

    console.log(value);
}


// Após a introdução do ES6 - Exemplo anterior

const arr = [1, 2, 3, 4];

for (let value of arr) {
    console.log(value);
}

// Exemplo 2

const str = 'Digital Innovation One'

for (let value of str) {
    console.log(value);
}


// Symbol.iterator

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// Exemplo anterior com 'for of'

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

for (let value of obj) {
    console.log(value);
}


// Utilizando Spread para construir um novo Array

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const arr2 = [...obj];

console.log(arr2);