
/* CARLOS: SOMA */

function aparecernodisplay(data){
    document.querySelector('#aparecer').value += data;
}

function ApagarUmDisplay(){
    let display = document.getElementById('aparecer');
    display.value=display.value.slice(0,-1);

}

function ApagarTudoDisplay(data){
    document.querySelector('#aparecer').value = ""
}

//Recebe o numero que o usuário clicou na tela
let display = document.getElementById("aparecer"); 

//Mostra os números e operadores na tela da calculadora
function aparecernodisplay(valor){ 
    display.value += valor;
}

//Realiza o cálculo da soma
function calculo(){
    try{
        let valores = display.value.split('+'); //Pega os valores digitados e separa por +
        let soma = 0;

        //Executa enquanto existir elementos no array
        for (let i = 0; i < valores.length; i++){ 
            //soma += Number(valores[i]);
            if (valores[i] === ""){
                throw new Error("Erro !");
            }

            //Converte os valores digitados em números e armazena em número
            let numero = Number(valores[i]);
            soma += numero;
        }

        //Exibe o valor da soma
        display.value = soma; 

    } catch (erro) {
        display.value = "Erro !"; //Apresenta erro caso o cálculo esteja incorreto
    }
}

//Apaga tudo
function ApagarTudoDisplay(){
    display.value = ""; 
}

//Apaga somente um número
function ApagarUmDisplay(){
    display.value = display.value.slice(0, -1); //Remove o último número digitado
} 