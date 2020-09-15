/** Callback */

// Métodos antigos

function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try{
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000) ;
                    } catch (err) {
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();


// Promises (método de callback com o ES6)

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('First data');
    }, 1000);
})

const doOtherThingPromise = () =>
    new Promise((resolve, reject) =>  {
        setTimeout(function() {
            // did other thing
            resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log(error));


/** A Promise pode ter 3 status:
 * Pending (pendente);
 * Fulfilled (Promise foi cumprida);
 * Rejected (caso aconteça algum erro)
 */


// Fazendo Promises em paralelo. As duas Promises são executadas ao mesmo tempo

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('First data');
    }, 1000);
})

const doOtherThingPromise = () =>
    new Promise((resolve, reject) =>  {
        setTimeout(function() {
            // did other thing
            resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})



// Fazendo com que apenas a primeira Promise a ser executada será retornada nos dados

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('First data');
    }, 1500);
})

const doOtherThingPromise = () =>
    new Promise((resolve, reject) =>  {
        setTimeout(function() {
            // did other thing
            resolve('Second data');
    }, 1000);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})