let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function inscrever() {
    inscritos += 1;

    times = parseInt (inscritos / 3);

    mostraResultado.innerHTML = `<p>Numero de inscritos: ${inscritos}.</p><p>Numero de equipes: ${times}</p>`;

    if(times >= 4) {
        alert("Ja é possivel iniciar o campeonato, pois tem 4 equipes");
    }
}