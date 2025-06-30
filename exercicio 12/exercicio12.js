let mostraHTML = document.getElementById("resultado");

function tabuada () {
    let numero = prompt("Digite um numero para calcular a tabuada: ");
    let contador = 1;

    mostraHTML.innerHTML = `<p><b>TABUADA</b></p>`;
    while (contador <= 10) {
    mostraHTML.innerHTML += `${numero} X ${contador} = ${numero*contador}<br>`;
    contador ++;
}
}