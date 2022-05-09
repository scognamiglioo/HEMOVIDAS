function verificaPaginaRedirecionada() {
    let objDados = leDados();

    if (objDados.usuarioLogado) {
        location.href = 'pageDoeSangue.html';
    }
    else {
        location.href = 'pageLogin.html';
    }
}

// Configurações
document.getElementById('btnAgendamento').addEventListener('click', verificaPaginaRedirecionada);