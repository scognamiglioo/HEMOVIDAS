function preencherCampo(){

    let nome = localStorage.getItem('centro');
    if (nome){
        document.getElementById('campoUnidade').value = nome;
    } else {
        window.location.href = '/TIAW/html/index.html';
        //document.getElementById('campoUnidade').value = 'Sem centro selecionado';
    }
    console.log(nome);    
}

preencherCampo();
