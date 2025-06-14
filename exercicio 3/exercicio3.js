
let num1;
let num2;
let resultado;
let numero;

function sobra(){

    num1 = Number(window.prompt('Digite um número'));
    num2 = Number(window.prompt('Digite outro número'));

    resultado = num1 % num2;

    numero = resultado % 2;

    alert("O resultado é " + resultado);

    if(numero == 0) {
        alert('par');
    } else {
        alert('impar');
    }

}

function multiplicacao(){

    num1 = Number(window.prompt('Digite um número'));
    num2 = Number(window.prompt('Digite outro número'));

    resultado = num1 * num2;

    numero = resultado % 2;

    alert("O resultado é " + resultado);

     if(numero == 0) {
        alert('par');
    } else {
        alert('impar');
    }
}

function adicao(){

    num1 = Number(window.prompt('Digite um número'));
    num2 = Number(window.prompt('Digite outro número'));

    resultado = num1 + num2;

    numero = resultado % 2;

    alert("O resultado é " + resultado + ".");

    if (numero == 0) {
        alert('par');
    } else {
        alert('impar');
    }
}

function subtracao(){

    num1 = Number(window.prompt('Digite um número'));
    num2 = Number(window.prompt('Digite outro número'));

    resultado = num1 - num2;

    numero = resultado % 2;

    alert("O resultado é " + resultado);

    if(numero == 0) {
        alert('par');
    } else {
        alert('impar')
    }
}