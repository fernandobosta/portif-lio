let aleatorio = parseInt(Math.random() * 101);
let mostraResultado = document.querySelector("#resultado");
let jogador;
let tentativa = 0;

function pensar() {
    jogador = Number(window.prompt("Digite um número de 1 a 100"));

    if (jogador > 0 && jogador < 101) {

        tentativa += 1;

        if (jogador != aleatorio) {
            if (jogador > aleatorio) {
                mostraResultado.innerHTML += `<p><b> TENTATIVA ${tentativa}: </b>Você tentou o numero <b>${jogador}</b>, tente um numero <b>MENOR</b>`;
            } else {
                mostraResultado.innerHTML += `<p><b> TENTATIVA ${tentativa}: </b>Você tentou o numero <b>${jogador}</b>, tente um numero <b>MAIOR</b>`;
            }
        } else {
            mostraResultado.innerHTML += `<p><b>Parabéns você acertou ${aleatorio} em ${tentativa} tentativas</b>`;
        }
        } else { alert("Digite um numero de 1 a 100");
            }
    }
