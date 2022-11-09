//caique fofo uwu

let peso = 100
if (peso<100){
    console.log("A peça deve ter mais que 100g")
}else{
    console.log("A peça possui o tamanho adequado")
}

var listaDePeças = ["Lanterna", "Motor", "Amor_tece_dor", "cambio", "painel", "cabeçote"]
if(listaDePeças.length < 10){
    console.log("É possível cadastrar")
}else{
    console.log("Não é possível cadastrar")
}

let nomePeça = "Peça"
if(nomePeça.length>3){
    console.log("Nome adequado para cadastro")
}else{
    console.log("O nome da peça deve ter mais que 3 caracteres! Favor digitar nome adequado")
}

let nomePeca = "iv34"
switch(nomePeca.length){
    case 0:
    console.log("O nome não pode estar vazio")
    break;
    case 1:
    console.log("O nome deve ter mais de 1 caractere (minimo 4 caracteres)")
    break;
    case 2:
    console.log("O nome deve ter mais de 2 caracteres (minimo 4 caracteres)")
    break;
    case 3:
    console.log("O nome deve ter mais de 3 caracteres (minimo 4 caracteres)")
    break;
    default:
    console.log("O nome está adequado para utilização")
    break;
}