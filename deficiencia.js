document.addEventListener('DOMContentLoaded', function () {
  const selectDeficiencia = document.getElementById('deficiencia');
  const campoDescricao = document.querySelector('.descricao-deficiencia');

  // Inicialmente esconde o campo (sem usar style inline)
  campoDescricao.classList.add('esconder');

  selectDeficiencia.addEventListener('change', function () {
    if (this.value !== 'nao') {
      campoDescricao.classList.remove('esconder');
    } else {
      campoDescricao.classList.add('esconder');
    }
  });
});