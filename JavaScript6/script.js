function verificar() {
  let numero = document.getElementById('numero').value;
  let resultado = document.getElementById('resultado');

  numero = Number(numero);

  if (isNaN(numero)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  let tipo = (numero % 2 === 0) ? "par" : "ímpar";

  resultado.textContent = "O número é " + tipo +".";
}