let  mostraresultado = document.querySelector('#resultado');
     let inscritos =0;

function botao() {

     inscritos++;

    
     mostraresultado.innerHTML = `<p> Numero de click: ${inscritos}</p>`;
    
     if(inscritos >=10){
         mostraresultado.innerHTML += `((◕‿◕))`


       }
     }
     function botaozero() {

     inscritos++;

    
     mostraresultado.innerHTML = `<p> Numero de click: ${inscritos=0}</p>`;

     
     }