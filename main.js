function inserir(num) 
{
    var numeros = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numeros + num;
}

function apagar (){
    document.getElementById('result').innerHTML = "";
}

function voltar (){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval (resultado)

    } else {
        document.getElementById('result').innerHTML = "nenhum"
    }
}
function seno(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.sin(resultado*Math.PI/180);
}
function cos(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.cos(resultado*Math.PI/180);
}
function tan(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.tan(resultado*Math.PI/180);
}
function potencia(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado + "**";
}
function fatorial() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseInt (resultado);
    var fat = resultadoNum;
    while (resultadoNum > 1) {
        resultadoNum--
        fat = fat * resultadoNum
    }
    if (fat == 0){
        document.getElementById('result').innerHTML= 1
    }
    else{
    document.getElementById('result').innerHTML= fat
    }
}
function inverso() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat (resultado);
    document.getElementById('result').innerHTML = (1/resultadoNum)
}
function hexadecimal() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat (resultado);
    var hexaResult  = resultadoNum.toString(16);
    document.getElementById('result').innerHTML= hexaResult
}
function binario() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat (resultado);
    var binaResult  = resultadoNum.toString(2);
    document.getElementById('result').innerHTML= binaResult
}
function octodecimal() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat (resultado);
    var octaResult  = resultadoNum.toString(8);
    document.getElementById('result').innerHTML= octaResult
}
function ln() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat (resultado);
    document.getElementById('result').innerHTML= (Math.log(resultadoNum)).toFixed(5);
}
function euler() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = (Math.exp(resultado)).toFixed(8);
}
function fibonacci() {
    var resultado = document.getElementById('result').innerHTML;
    var resultadoNum = parseFloat(resultado)
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    var soma = 0
    for (var i = 2; i < resultadoNum; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    for(var i =0;i<fibonacci.length;i++){
        soma+=fibonacci[i];
     }
    document.getElementById('result').innerHTML = soma;
}