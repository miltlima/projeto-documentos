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
            listFiles(cpfValue);
            next(cpfValue);
        } else{
            alert('CPF não cadastrado')
        }
    }).catch(function(error){
            console.log('ERRO',error);
    });
}

function listFiles(cpfValue){
    document.getElementById('tituloDocumentos').innerHTML = 'Certificado de: '+cpfValue;
    var storage = firebase.storage();
    var files;
    var names = [];
    var links = [];
    storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
        files = todosArquivos.items;
        console.log('files',files);
        for(let i=0; i<files.length; i++){
            names.push(files[i].name);
            storage.ref(cpfValue+'/'+names[i]).getDownloadURL().then(function(url){
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                var listItem = '<a href="'+links[i]+'" target="_blank">'+files[i]+'</a>';
                li.innerHTML = listItem;
                ul.appendChild(li);
                links.push(url);
            }).catch(function(error){
                console.log(error);
            });
        }  
    });
}

function next(cpfValue){
    document.getElementById('busca').setAttribute("class", "hide")
    document.getElementById('resultado').removeAttribute("class", "hide")

}

function back(){
    document.getElementById('busca').removeAttribute("class", "hide")
    document.getElementById('resultado').setAttribute("class", "hide")
    document.getElementById("inputCPF").value = '';
}


