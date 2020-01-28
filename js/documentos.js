function search(){
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}
function validation(cpfValue){
    var storage  = firebase.storage();
    // retorna uma promisses que sera processada
    var resultado = storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
        if(todosArquivos.items.length >= 1){
            next(cpfValue);
        } else{
            alert('CPF não cadastrado')
        }
    }).catch(function(error){
            console.log('ERRO',error);
    });
}

function next(cpfValue){
    document.getElementById('busca').setAttribute("class", "hide")
    document.getElementById('resultado').removeAttribute("class", "hide")
    document.getElementById('tituloDocumentos').innerHTML = 'Certificado de: '+cpfValue;
}

function back(){
    document.getElementById('busca').removeAttribute("class", "hide")
    document.getElementById('resultado').setAttribute("class", "hide")
    document.getElementById("inputCPF").value = '';
}


