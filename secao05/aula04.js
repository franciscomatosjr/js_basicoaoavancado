// aprendendo a utilizar o MAP
// O map é uma estrutura de repetição mais moderna

var valores = [2,4,6,8,10];
console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;
});

//console.log(dobro)

function dobrar(valor){
    return valor * 2;
}

dobro = valores.map(dobrar);

// encadeando maps para realizar múltiplas transformações
function soma_4(valor){
    return valor + 4;
};

function dividir_por_5(valor){
    return valor / 5;
};

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);

console.log(resultado);

// o funcionamento do forEach é semelhante ao map, a diferença é que o map retorna um array, já o forEach não.
