// Função cálculo atualizada com exponenciação (^) e divisão (/)
function calculo() { 
  let display = document.querySelector('#aparecer'); 
  let expr = display.value.trim(); 

  if (!expr) return; 

  // Atualizamos a expressão regular de segurança.
  // Adicionei a barra (\/) de divisão e o acento circunflexo (\^) de exponenciação.
  let seguro = /^[0-9]+([+\-*\/\^][0-9]+)*$/; 

  if (!seguro.test(expr)) {
    display.value = 'Erro';
    return;
  }

  // O JavaScript calcula potência usando '**', mas o usuário digita '^'
  // Essa linha substitui todos os '^' por '**' antes de calcular
  expr = expr.replace(/\^/g, '**');

  try {
    let res = Function('return (' + expr + ')')();
    display.value = Number.isFinite(res) ? res : 'Erro';
  } catch {
    display.value = 'Erro';
  }
}