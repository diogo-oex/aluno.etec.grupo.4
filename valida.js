let inicioTempo = Date.now();

window.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const tempoAtual = Date.now();
    const tempoDecorrido = tempoAtual - inicioTempo;

    if (tempoDecorrido < 2000) {
      alert('⏱️ Você enviou rápido demais. Verificação antirrobô falhou.');
      return;
    }
    
    formulario.submit();
  });
});