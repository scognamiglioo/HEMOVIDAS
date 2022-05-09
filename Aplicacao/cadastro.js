function senhasCompativeis () {
    if (senha.value != confirma_senha.value) {
        senha.style.border = '1px solid red';
        confirma_senha.style.border = '1px solid red';  
        alert('Senhas incompatíveis.');
        return false;
    }
    else {
        senha.style.border = '1px solid black';
        confirma_senha.style.border = '1px solid black';
        return true;
    }
}

function confereDados (dados) {
    // Confere se campos necessários estão preenchidos.
    let dados_obrigatorios = ['email', 'senha', 'cpf', 'nome_completo', 'telefone_pessoal', 'cidade'];
    let dados_faltantes = 0;

    for (let index in dados_obrigatorios) {
        let dado = dados_obrigatorios[index];
        if (dados[dado] == "") {
            let dado_faltante = document.getElementById(dado);
            dado_faltante.style.border = '1px solid red';
            let campo_obrigatorio = document.querySelector(`#${dado} ~ #campo-obrigatorio`);
            campo_obrigatorio.innerHTML= "*Preencha este campo.";
            campo_obrigatorio.style.color = 'red';

            dados_faltantes += 1;
        }
        else {
            let dado_preenchido = document.getElementById(dado);
            dado_preenchido.style.border = '1px solid black';
            let campo_obrigatorio = document.querySelector(`#${dado} ~ #campo-obrigatorio`);
            campo_obrigatorio.innerHTML= "*";
            campo_obrigatorio.style.color = '#383838';
        }
    }

    for (let dado in dados.endereco) {
        if (dado == 'complemento') {
            continue;
        }
        
        if (dados.endereco[dado] == "") {
            let dado_faltante = document.getElementById(dado);
            dado_faltante.style.border = '1px solid red';
            let campo_obrigatorio = document.querySelector(`#${dado} ~ #campo-obrigatorio`);
            campo_obrigatorio.innerHTML= "*Preencha este campo.";
            campo_obrigatorio.style.color = 'red';

            dados_faltantes += 1;
        }
        else {
            let dado_preenchido = document.getElementById(dado);
            dado_preenchido.style.border = '1px solid black';
            let campo_obrigatorio = document.querySelector(`#${dado} ~ #campo-obrigatorio`);
            campo_obrigatorio.innerHTML= "*";
            campo_obrigatorio.style.color = '#383838';
        }
    }

    if (!dados.tipo_sanguineo) {
        let campo_obrigatorio = document.querySelector(`.campo-tipo-sanguineo #campo-obrigatorio`);
        campo_obrigatorio.innerHTML= "*Preencha este campo.";
        campo_obrigatorio.style.color = 'red';
        
        dados_faltantes += 1;
    }

    else {
        let campo_obrigatorio = document.querySelector(`.campo-tipo-sanguineo #campo-obrigatorio`);
        campo_obrigatorio.innerHTML= "*";
        campo_obrigatorio.style.color = '#383838';
    }
    
    if (dados_faltantes > 0) {
        alert("Preencha todos os campos necessários.");
        return false;
    }

    // Confere se senhas estão iguais
    let senhas_compativeis = senhasCompativeis();
    if (senhas_compativeis == false) {
        return false;
    }

    // Confere se CPF está válido;
    let cpfValido = () => {
        let cpf = document.getElementById('cpf');
        if (dados.cpf.length < 14) {
            cpf.style.border = '1px solid red';
            alert("CPF inválido.");
            return false;
        }
        else {
            cpf.style.border = '1px solid black';
            return true;
        }
    }
    if (!cpfValido()) {
        return false;
    }

    return true;
}

function proximoIdUsuarioPessoa() {
    let objDados = leDados();
    let array_usuarioPessoa = objDados.usuarioPessoa;
    console.log(objDados, array_usuarioPessoa);

    return (parseInt(array_usuarioPessoa[array_usuarioPessoa.length-1].idUsuarioPessoa, 10)+1);
}

function finalizarCadastroUsuarioPessoa() {
    let idUsuarioPessoa = proximoIdUsuarioPessoa();
    let strEmail = document.getElementById('email').value;
    let strSenha = document.getElementById('senha').value;
    let strCPF = document.getElementById('cpf').value;
    let strFoto = document.getElementById('foto').value;
    let strNome = document.getElementById('nome_completo').value;
    let strTelefone = document.getElementById('telefone_pessoal').value;
    let strCep = document.getElementById('cep').value;
    let strCidade = document.getElementById('cidade').value;
    let strBairro = document.getElementById('bairro').value;
    let strRua = document.getElementById('rua').value;
    let strNumero = document.getElementById('numero').value;
    let strComplemento = document.getElementById('complemento').value;
    let strTipoSanguineo = pegaTipoSanguineo();

    let novoUsuarioPessoa = {
        idUsuarioPessoa: idUsuarioPessoa,
        email: strEmail,
        senha: strSenha,
        cpf: strCPF,
        foto: strFoto,
        nome_completo: strNome,
        telefone_pessoal: strTelefone,
        cep: strCep,
        cidade: strCidade,
        endereco: { bairro: strBairro, rua: strRua, numero: strNumero, complemento: strComplemento, },
        tipo_sanguineo: strTipoSanguineo,
        tipos_sanguineos_compativeis_receber: "O-",
        idAgendamento: null
    };

    let dadosAceitos = confereDados(novoUsuarioPessoa);

    if (dadosAceitos) {
        // Ler os dados do localStorage
        let objDados = leDados();
        objDados.usuarioPessoa.push(novoUsuarioPessoa);
        objDados.usuarioLogado = { idUsuarioPessoa: idUsuarioPessoa };
        // Salvar os dados no localStorage novamente
        salvaDados(objDados);
        location.href = 'index.html';
    }
}

function pegaTipoSanguineo() {
    let array_tiposSanguineos = document.querySelectorAll('.box-tipos-sanguineos > input');
    let tipoSanguineo = null;
    array_tiposSanguineos.forEach((i) => {
        if (i.checked) {
            tipoSanguineo = i.value;
        }
    });

    return tipoSanguineo;
}

function mostraSenha() {
    let check = document.getElementById('mostra_senha').checked;

    if (check) {
        document.getElementById('senha').setAttribute('type', 'text');
        document.getElementById('confirma_senha').setAttribute('type', 'text');
    }
    else {
        document.getElementById('senha').setAttribute('type', 'password');
        document.getElementById('confirma_senha').setAttribute('type', 'password');
    }

}

function formatoCPF (evento) {
    let campo = document.getElementById(evento.target.id);
    
    if (campo.value != "") {
        if (campo.value[campo.value.length - 1].charCodeAt() < 48 || campo.value[campo.value.length - 1].charCodeAt() > 57 || (campo.value.length - 1) > 13) {
            campo.value = campo.value.substr(0, campo.value.length - 1);
        }
        if ((campo.value.length - 1) == 2 || (campo.value.length - 1) == 6) {
            campo.value = campo.value.concat('.');
        }

        else if ((campo.value.length - 1) == 10) {
            campo.value = campo.value.concat('-');
        }
    }
}

function somenteNumero (evento) {
    let campo = document.getElementById(evento.target.id);
    if (campo.value != "") {
        if ((campo.value[campo.value.length - 1].charCodeAt() < 48 || campo.value[campo.value.length - 1].charCodeAt() > 57) && 
            (["(", ")", "-", ".", "/", "+"].indexOf(campo.value[campo.value.length - 1]) == -1)) {
            campo.value = campo.value.substr(0, campo.value.length - 1);
        }
    }
}

// Configuração dos botões
document.getElementById('btnCriarDoador').addEventListener('click', finalizarCadastroUsuarioPessoa);
document.getElementById ('btnVoltar').addEventListener ('click', () => location.href = "index.html");

// Outras configurações
document.getElementById('confirma_senha').onblur = senhasCompativeis;
document.getElementById('mostra_senha').onchange = mostraSenha;
document.getElementById('cpf').oninput = formatoCPF;
document.getElementById('telefone_pessoal').oninput = somenteNumero;
document.getElementById('cep').oninput = somenteNumero;
document.getElementById('numero').oninput = somenteNumero;