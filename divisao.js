// Função cálculo central para divisão, soma, subtração, multiplicação e potência
function calculo() {
  let display = document.querySelector('#aparecer');
  let expr = display.value.trim();

  if (!expr) return;

  // Expressão regular para operações básicas e potência
  let seguro = /^[0-9]+([+\-*\/\^][0-9]+)*$/;
  if (!seguro.test(expr)) {
    display.value = 'Erro';
    return;
  }

  // Potência: substitui '^' por '**'
  expr = expr.replace(/\^/g, '**');

  try {
    let res = Function('return (' + expr + ')')();
    display.value = Number.isFinite(res) ? res : 'Erro';
  } catch {
    display.value = 'Erro';
  }
}
