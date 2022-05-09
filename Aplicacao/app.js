function leDados () {
    let strDados = localStorage.getItem('as');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {unidade: "Hemominas", data: "11/11", hora: "09:30", nome: "Geraldo Arcanjo", email: "geraldoA@gmail.com", cpf: "15669874621", nascimento: "28/02/1938", rg: "mg18756942", contato: "994873254"},
                        {unidade: "Vita Hemoterapia", data: "13/11", hora: "07:00", nome: "Antonia Regina", email: "remosil@ig.com.br", cpf: "47869888433", nascimento: "06/01/1964", rg: "mg68725419", contato: "994079223"}, 
                        {unidade: "Felicio Rocho", data: "09/11", hora: "10:00", nome: "Maria Aparecida", email: "Aparecida1234@hotmail.com", cpf: "55478462512", nascimento: "18/09/1982", rg: "mg25796325", contato: "996871547"}, 
                    ]}
    }

    return objDados;
}


function salvaDados (dados) {
    localStorage.setItem ('as', JSON.stringify (dados));
}


function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strUnidade = document.getElementById('campoUnidade').value;
    let strData = document.getElementById('campoData').value;
    let strHora = document.getElementById('campoHora').value;
    let strNome = document.getElementById('campoNome').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strCpf = document.getElementById('campoCpf').value;
    let strNascimento = document.getElementById('campoNascimento').value;
    let strRg = document.getElementById('campoRg').value;
    let strContato = document.getElementById('campoCelular').value;
    
    let novoContato = {
        unidade: strUnidade,
        data: strData,
        hora: strHora,
        nome: strNome,
        email: strEmail,
        cpf: strCpf,
        nascimento: strNascimento,
        rg: strRg,
        contato: strContato,
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    //imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].unidade}  -  ${objDados.contatos[i].data}  - ${objDados.contatos[i].hora}  -  ${objDados.contatos[i].nome}  -  ${objDados.contatos[i].email}  -  ${objDados.contatos[i].cpf}  -  ${objDados.contatos[i].nascimento}  -  ${objDados.contatos[i].rg}  - ${objDados.contatos[i].contato}</p>`
    }

    tela.innerHTML = strHtml;
}

//Alerta

function funcao1()
{
alert("Agendamento marcado com sucesso !");
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);   
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);
document.getElementById ('btnIncluirContato').addEventListener ('click', funcao1);
