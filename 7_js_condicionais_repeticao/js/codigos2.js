console.log("Entrou no arquivo 'codigos2.js'");
// alert("Entrou no arquivo 'codigos2.js'");

function copia_cola(){
    let n = document.getElementById('nome').value;
    let comando = "<p>O nome é: " + n + "</p>";
    document.getElementById('sec_resultados').innerHTML += comando;
}

function calcula_media(){
    console.log("Clicou no botão Calcula Média");
    let n1 = Number(prompt("Informe a nota 1"));
    let n2 = Number(prompt("Informe a nota 2"));
    let n3 = Number(prompt("Informe a nota 3"));

    console.log(n1, n2, n3);

    let media = (n1 + n2 + n3) / 3;

    let comando = "<li>A média é: " + media.toFixed(2) + "</li>";
    document.getElementById('sec_resultados').innerHTML += comando;
    
    let resultado;
    if(media >= 6){
        resultado = "APROVADO";
    }
    else if(media < 4){
        resultado = "REPROVADO";
    }
    else{
        resultado = "RECUPERAÇÃO";
    }
    comando = "<li>A situação do aluno é: " + resultado + "</li>";
    document.getElementById('sec_resultados').innerHTML += comando;
}