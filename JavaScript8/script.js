const btnVermelho = document.getElementById('vermelho');
const btnAzul = document.getElementById('azul');
const btnAmarelo = document.getElementById('amarelo');
const btnBranco = document.getElementById('branco');

btnVermelho.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
btnAzul.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
btnAmarelo.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});
btnBranco.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
});