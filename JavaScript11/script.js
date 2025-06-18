btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');

const mensagem = document.getElementById('resultado');

btn1.addEventListener('click', function() {
    mensagem.innerText = '❌❌Errasse seu merda❌❌'
});
btn2.addEventListener('click', function() {
    mensagem.innerText = '✔✔Acertou seu filho da puta🎉🎉🎉🎉✔✔'
});
btn3.addEventListener('click', function() {
    mensagem.innerText = '❌❌Errou, resto de aborto❌❌'
});