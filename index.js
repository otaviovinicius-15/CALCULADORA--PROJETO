function aparecernodisplay(data) {
  document.querySelector('#aparecer').value += data;
}

function ApagarUmDisplay() {
  const display = document.getElementById('aparecer');
  display.value = display.value.slice(0, -1);
}

function ApagarTudoDisplay() {
  document.querySelector('#aparecer').value = '';
}

function SubtrairDisplay() {
  aparecernodisplay('-');
}

function MultiplicarDisplay() {
  aparecernodisplay('*');
}

function menos(a, b) {
  return Number(a) - Number(b);
}

function vezes(a, b) {
  return Number(a) * Number(b);
}

function calculo() {
  const display = document.querySelector('#aparecer');
  const expr = display.value.trim();
  if (!expr) return;

  // só números, -, *, . e espaços
  const seguro = /^[0-9.\-\*\s]+$/;
  if (!seguro.test(expr)) {
    display.value = 'Erro';
    return;
  }

  try {
    const res = Function('return (' + expr + ')')();
    display.value = Number.isFinite(res) ? res : 'Erro';
  } catch {
    display.value = 'Erro';
  }
}
