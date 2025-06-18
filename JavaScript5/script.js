function somar() {
    const n1 =
    parseFloat(document.getElementById('num1').value);
    const n2 =
    parseFloat(document.getElementById('num2').value);
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').textContent = 'Digite dois números válidos.';
    }else{
        const resultado = n1 + n2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}
function subtrair() {
    const n1 =
    parseFloat(document.getElementById('num1').value);
    const n2 =
    parseFloat(document.getElementById('num2').value);
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').textContent = 'Digite dois números válidos.';
    }else{
        const resultado = n1 - n2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}
function dividir() {
    const n1 =
    parseFloat(document.getElementById('num1').value);
    const n2 =
    parseFloat(document.getElementById('num2').value);
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').textContent = 'Digite dois números válidos.';
    }else{
        const resultado = n1 / n2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}
function multiplicar() {
    const n1 =
    parseFloat(document.getElementById('num1').value);
    const n2 =
    parseFloat(document.getElementById('num2').value);
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').textContent = 'Digite dois números válidos.';
    }else{
        const resultado = n1 * n2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }
}