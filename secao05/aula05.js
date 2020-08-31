// filter 
// estrutura de repetição mais moderna

var numeros = [1,2,3,4,5,6,7,8,9,10];

function filtrar_pares(n){
    return n % 2 === 0;
};

console.log(filtrar_pares(3)); //false
console.log(filtrar_pares(8)); //true