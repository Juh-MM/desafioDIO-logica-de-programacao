//Desafio Classificador de nível de Herói
let nomeHeroi = prompt("Qual o nome do seu herói?")

let xp = 0 
let nivel = "Ferro"

console.log("Olá herói " + nomeHeroi + ", atualmente você tem " + xp + " de XP e está no nível " + nivel)
let resposta = prompt("Você quer lutar com o dragão para conseguir mais XP? Sim/Nao")

while(resposta === "Sim"){
    console.log("lutando...")
    xp += 500
    console.log("parabéns você conseguiu " + xp + "XP")
    resposta = prompt("Quer continuar lutando? Sim/Nao")
}

if (xp < 1000){
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 3000){
    nivel = "Prata"
} else if (xp >= 3001 && xp <= 4000){
    nivel = "Ouro"
} else if (xp >= 4001 && xp <= 5000){
    nivel = "Platina"
} else if (xp >= 5001 && xp <= 7000){
    nivel = "Ascendente"
} else if (xp >= 7001 && xp <= 9000){
    nivel = "Imortal"
} else{
    nivel = "Radiante"
}
console.log("| O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "|")