    //for

let numeroDeAlunos = 28

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    
    if (contador == 0){
        console.log("O número atual é Zero")
    }else if (contador % 2 == 0){
        console.log("O número " + contador + " é par")
    }else {
        console.log(`O número ${contador} é impar`)
    }
}

//while

let numeroDeAlunos2 = 28
let contador2 = 0
while (contador2 <= numeroDeAlunos2) {
    if (contador2 == 0){
        console.log("O número atual é Zero")
    }else if (contador2 % 2 == 0){
        console.log("O número " + contador2 + " é par")
    }else {
        console.log(`O número ${contador2} é impar`)
    }
    contador2++
}

//lista

let nomeDeAlunos = ["Helena", "Guilherme", "Caique", "Aluno1", "Aluno2", "Aluno3"]

for (let nome of nomeDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
}