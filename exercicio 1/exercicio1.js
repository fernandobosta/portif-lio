
//função que vai somar os valores
function somar(){
    //declaração de variaveis
    let num1 = 0;
    let num2 = 0;

    //entrada de dados pelo usuario e atribuição nas variaveis
    num1 = Number(window.prompt('Digite um número: '));
    num2 = Number(window.prompt('Digite outro número: '));

    //a variavel soma recebe o resultado da soma nas variaveis num1 e num2
    let soma = num1 + num2;

    //mostra o resultado pro usuario
    alert(soma);

    //aqui diz se o resultado da conta é maior do que 10
    if(soma > 10) {
        alert("O resultado é maior do que 10");
    //aqui diz se o resultado da conta é menos do que 10
    } else {
        alert("Não é maior que 10");
    }

}