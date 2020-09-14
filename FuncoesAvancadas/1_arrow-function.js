/** Arrow Functions */

// No caso de uma expressão, pode-se emitir o return

var sum = (a, b) => a + b;      

console.log(sum(5, 15));




// Nos outros casos, coloca-se a 'chaves' {}

var sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 5));


// Arrow function tem uma propriedade que é de ter um contexto igual ao código que envolve ele

var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

