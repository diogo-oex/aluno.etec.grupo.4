const formulario = document.querySelector('form');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');

formulario.addEventListener('submit', function(event) {
    const valorSenha = senha.value;
    const valorConfirmar = confirmar.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&<>;.,])[A-Za-z\d@$!%*?#&<>;.,]{8,}$/;
    
    senha.type = 'password';
    confirmar.type = 'password';
    
    if (!regex.test(valorSenha)) {
        event.preventDefault();
        senha.type = 'text';  
        senha.value = 'Senha inválida!';
        return;
    }
    
    if (valorSenha !== valorConfirmar) {
        event.preventDefault();
        confirmar.type = 'text';
        confirmar.value = 'Senhas não coincidem!';
        return;
    }
});

senha.addEventListener('focus', function() {
    if (senha.value === 'Senha inválida!') {
        senha.value = '';
        senha.type = 'password';
    }
});

confirmar.addEventListener('focus', function() {
    if (confirmar.value === 'Senhas não coincidem!') {
        confirmar.value = '';
        confirmar.type = 'password';
    }
});