function montaHeader() {
    let menuNavegacao = document.getElementById('nav-menu');
    let objDados = leDados();
    let usuarioLogado = objDados.usuarioLogado;
    
    /*
    <a href="#" class="menu-link">Meu Perfil</a>
    */

    if (usuarioLogado) {
        menuNavegacao.innerHTML += `
    
        
            <a href="#" class="menu-link" id="btnLogout">Sair</a>
        `
        document.getElementById('btnLogout').addEventListener('click', logout);

    }
    else {
        menuNavegacao.innerHTML += `
            <a href="page_cadastroUsuarioPessoa.html" class="menu-link">Registre-se</a>
            <a href="pageLogin.html" class="menu-link">Entrar</a>
        `
    }
    
}

function logout() {
    let confirm_logout = confirm('Deseja realmente sair da sua conta?');

    if (!confirm_logout) {
        return
    }
    else {
        let objDados = leDados();
        objDados.usuarioLogado = null;
        salvaDados(objDados);
        location.reload();
    }
}

// Configurações
onload = montaHeader;