/*

    // array contendo 5 elementos -> n = 5
    [0][1][2][3][4]

    // valores em um array
    [12][24][36][48][52]

    // Detalhes sobre arrays
    - Possuem tamanho infinito*
    - Podemos colocar qualquer tipo de dado

*/

// Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Maria', 'Sofia');

//console.log(alunos[0]);

// Forma 2 (recomendada)
var notas = [1,3,5,7,9];
//console.log(notas)

// Criando um array vazio
var dados = []
//console.log(dados)

// Fazendo acesso ao valor de um índice
// console.log(notas[2]);

// Alterando o valor do índice
notas[2] = 12;
// console.log(notas);

// Atenção ao acessar um valor com um índice que não existe
notas[9] =  10;
// console.log(notas);

if (notas[5] == undefined){
    notas[5] = 54;
};

// console.log(notas[5]);  // undefined
// console.log(notas[6]);  // undefined
// console.log(notas[7]);  // undefined
// console.log(notas[8]);  // undefined
// console.log(notas[9]);  // undefined

//console.log(notas[5] == undefined);  // false

// Inserindo elemtnos no final do array
var nomes = ['Paula', 'Maria', 'Julia'];

nomes.push('Vanessa'); // Insere o valor no final do array


// Tamanho do array

var tam = nomes.length;

//console.log(tam);

// Ordenar os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla']
//console.log(alunos);

alunos.sort();

var precos = [123.55, 42.27, 546.99, 23.12]
//console.log(precos);

//precos.sort(); // ATENÇÃO: Ordenação de floats não funciona assim
//console.log(precos);

precos.sort(function(a,b){return a - b;} );
//console.log(precos);


var idades = [5, 1, 8, 12, 44, 78];
//console.log(idades);

//idades.sort();
//console.log(idades);
idades.sort(function(a,b){return a - b;});
//console.log(idades);

// Deletando dados de um array
delete idades[3];
//console.log(idades);

idades[3]=12;
//console.log(idades);

//idades.splice(3, 1); // a partir do índices 3, delete um elemento
//console.log(idades);

//idades.splice(3, 0, 56, 89); // a partir do índices 3, não delete nenhum mas adicione 56 e 89
//console.log(idades);
// idades.splice(3, 1, 23);
 console.log(idades);

// Iterar em uma array
for (var i = 0; i< idades.length; i++){
    //console.log(idades[i]);
};
//idades.pop(); ;// remove e retorna o último elemento de um array
//console.log(idades);
//var ret = idades.pop();
//console.log(ret);
//console.log(idades);
//idades.shift();
//console.log(idades);

// inserindo elementos no início do array
//idades.unshift(99);
//console.log(idades);

// retorna um novo array a partir do índice informado
//var novo = idades.slice(3);
//console.log(novo);

//var novo = idades.slice(1,2); // a partir do índice 1, pegue até o índice 3 sem incluí-lo
//console.log(novo);

var pares = [2,4,6,8,10];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares);
console.log(rest);
rest.sort(function(a,b){return a-b});
console.log(rest);
