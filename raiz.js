
/* CARLOS: RAIZ */

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

function raiz() {
    let display = document.querySelector('#aparecer'); //seleciona o documento html com o id aparecer
    let expr = display.value.trim(); //recebe valor digitado da tela 

    if (!expr) return; //se vazio, retorna

    try {
        let resultado = Function('return (' + expr + ')')(); //recebe a expressão da tela
    
        if (resultado < 0) { //validação que evita número negativo
          display.value = 'Erro';
          return;
        }
    
        display.value = Math.sqrt(resultado); //calculo da raiz

    } catch { //caso não seja atentido, retorna erro
        display.value = 'Erro';
    }
}