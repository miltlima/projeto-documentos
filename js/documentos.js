function search(){
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}
function validation(cpfValue){
    document.getElementById('busca').setAttribute("class", "hide")
    document.getElementById('resultado').removeAttribute("class", "hide")
    document.getElementById('tituloDocumentos').innerHTML = 'Certificado de: '+cpfValue;
}
function back(){
    document.getElementById('busca').removeAttribute("class", "hide")
    document.getElementById('resultado').setAttribute("class", "hide")
    document.getElementById("inputCPF").value = '';
}