function gerarListener(){
    var obj, count = 0
    return obj;
}
var countOb = gerarListener();
countOb.adicionarOuvinte(function(evento){
        console.log(evento.contador)
})
