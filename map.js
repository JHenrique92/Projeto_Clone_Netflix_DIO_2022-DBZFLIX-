/*const array = [1,2,3,4,5];
array.map((item) => item *2);

//Filter
array.filter(callback, thisArgs)


// Reduce: não retorna um novo arrray
//retorna um valor unico*/

/*
//Exercicio 1
const maca = {
    value : 2,
};
const laranja = {
    value : 3,
};
function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
    
}
const num = [1, 2];

console.log('This -> maçã' , mapComThis(num, maca));

console.log('This -> maçã' , mapComThis(num, laranja));


//EXERCICIO01

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(num));

//Filter 1

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;

}

const meuArray = [1,23,55,67,30,4,5];

console.log(filtraPares(meuArray));*/


//REDUCE
/*function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));*/

const lista = [
    {
        nome: 'sabão em pó',
        preco: 30,
    }, 
    {
        nome: 'cereal',
        preco: 12,
    
    },
    {
        nome: 'toalha',
        preco: 30,
    }

];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

