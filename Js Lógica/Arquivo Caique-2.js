// #############################################################################
// Requisitos S2
//  OK 1 - Percorrer de Zero até o número de alunos 
//  OK 2 - Se o número for par, escreva ‘par’ e o número correspondente 
//  OK 3 - Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  
//  OK 4 - Se o número for zero, escreva ‘zero’ e o número correspondente 
// #############################################################################

let numeroDeAlunos = 28

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log(contador)

    if (contador == 0){
        console.log("O numero Atual é Zero")
    }else if (contador % 2 == 0){
        console.log("O número " + contador + " é par")// concatenação
    }else {
        console.log(`O número ${contador} é impar`)// interpolação
    }
}

// = é atribuição... A = B... A esta recebendo o valor de B, ou, A recebe B
// == é Comparação... A == B... A é igual a B?
// === é Comparação... A == B... A é estritamente igual a B?

/*
A = 3
B = "3"
A == B? Sim
A === B? Não

*/

let numeroDeAlunos2 = 28
let contador2 = 0
while (contador2 <= numeroDeAlunos2){
    if (contador2 == 0){
        console.log("O numero Atual é Zero")
    }else if (contador2 % 2 == 0){
        console.log("O número " + contador2 + " é par")// concatenação
    }else {
        console.log(`O número ${contador2} é impar`)// interpolação
    }
    contador2++
}

//

let Nomes = ["Thiago", "Hector", "Israel", "Caique","Nathalia", "Chrislayne", "Jailson"]

for (let nome of Nomes){
    console.log(`Esta pessoa se chama ${nome}`)
}

