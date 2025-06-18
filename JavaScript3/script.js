
    const lampada = document.getElementById('lampada');
    const btn = document.getElementById('btn-toggle');

    let ligada = false;

    btn.addEventListener('click', () => {
      ligada = !ligada;
      if (ligada) {
        lampada.classList.add('ligada');
        btn.textContent = 'Desligar';
      } else {
        lampada.classList.remove('ligada');
        btn.textContent = 'Ligar';
      }
    });