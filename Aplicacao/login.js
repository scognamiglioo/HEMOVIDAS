function confereLogin() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let autenticacaoValida = validaAutenticacao(email, senha);

    if (autenticacaoValida) {
        location.href = 'index.html';
    }
    else {
        alert('Credenciais Inválidas.');
    }
}

function validaAutenticacao(email, senha) {
    let objDados = leDados();
    let usuarios = objDados.usuarioPessoa;

    for (i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].email == email) & (usuarios[i].senha == senha)) {
            objDados.usuarioLogado = { idUsuarioPessoa: usuarios[i].idUsuarioPessoa };
            salvaDados(objDados);
            return true;
        }
    }
    return false;
}

// Configurações
document.getElementById('btnSubmit').addEventListener('click', confereLogin);