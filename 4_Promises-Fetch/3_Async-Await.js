// ES7 - Async / Await

const simpleFunc = async () => {
    return 12345;
};

console.log(simpleFunc());


// Novo Exemplo

const simpleFunc = async () => {
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
});


// Await - só pode ser utilizado dentro do Async

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc().then(data => {
    console.log(data);
});


// Exemplo junto com Fetch

const asyncTimer = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('data.json').then(resStream => resStream.json())
    ]);

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });