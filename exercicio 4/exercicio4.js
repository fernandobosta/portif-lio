function media() {
    let nota1 = Number(window.prompt("Digite a primeira nota: "));
    let nota2 = Number(window.prompt("Digite a segunda nota: "));
    let nota3 = Number(window.prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é ${media.toFixed(1)}</p>`;

    if (media > 6) {
        console.log("Você passou de ano");
    } else {
        let dif = 6 - media;
        console.log("Você não passou de ano porque faltam " + dif + " pontos para passar");
        resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<p> Você foi reprovado ainda faltam ${dif.toFixed(1)} pontos para passar</p>;`

    }
}