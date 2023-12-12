function numeros(num){ /* O "num" é o nome dos parâmetros que vão ser colocados quando eu clicar e a função "numeros" foi acionada. */
var res = document.getElementById('resultado').innerHTML; /* Uma variável res vai receber o valor ligado ao elemento com id "resultado". Não sei por que tem aquele .innerHTML dps, mas sem ele não funciona.*/
document.getElementById('resultado').innerHTML = res + num; /*De onde vem o valor de res? Não seria só o do parâmetro "num"* que deveria aparecer?/ */

}
function clean()
{
var res = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = "";
}
function apagar(){
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada"
    }
}