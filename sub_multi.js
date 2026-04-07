/* OTÁVIO: SUBTRAÇÃO e MULTIPLICAÇÃO */

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

function calculo() { //declara função cálculo
  let display = document.querySelector('#aparecer'); //seleciona o documento html com o id aparecer
  let expr = display.value.trim(); //recebe valor digitado da tela 

  if (!expr) return; //se estiver vazio, finaliza

  let seguro = /^[0-9]+([+\-*][0-9]+)*$/; //expressão regular de segurança

  if (!seguro.test(expr)) {
    display.value = 'Erro';
    return;
  }

  try {
    let res = Function('return (' + expr + ')')();
    display.value = Number.isFinite(res) ? res : 'Erro';
  } catch {
    display.value = 'Erro';
  }
} 