function calculaGostos(notas){
    var qdeNotasRuins = 0; 
    var qdeNotasMedianas = 0;
    var qdeNotasBoas = 0;

    for (var i = 0; i < notas.length;i++){
        if (notas[i] >= 0 && notas[i]<= 1){
            qdeNotasRuins++
        }
        if (notas[i] >= 2 && notas[i]<= 3){
            qdeNotasMedianas++
        }        
        if (notas[i] >= 4 && notas[i]<= 5){
            qdeNotasBoas++
        }        
    }
    return [qdeNotasRuins, qdeNotasMedianas, qdeNotasBoas]
}    