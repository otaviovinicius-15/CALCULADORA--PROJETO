// Função cálculo central para todas as operações
function calculo() {
  let display = document.querySelector('#aparecer');
  let expr = display.value.trim();

  if (!expr) return;

  // Fatorial: se termina com '!'
  if (/^\d+!$/.test(expr)) {
    let num = parseInt(expr.replace('!', ''), 10);
    if (isNaN(num) || num < 0) {
      display.value = 'Erro';
      return;
    }
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    display.value = resultado;
    return;
  }

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
