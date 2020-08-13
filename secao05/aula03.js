var cursos = [
    'Programação para leigos',
    'Algoritmos e lógicas de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação web com Django Framework',
    'Programação em Javascript'
];

//console.log(cursos);
//console.log(cursos.length);

// definir uma função
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
};

// para cada elemento do array, ele vai fazer alguma coisa
//cursos.forEach(imprimir);

// utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`)
});