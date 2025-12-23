class Heroi {
    constructor( nome, idade, tipo ){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque = ""
        if(this.tipo == "mago"){
            ataque = "magia"
        } else if (this.tipo == "guerreiro"){
            ataque = "espada"
        } else if (this.tipo == "monge"){
            ataque = "artes marciais"
        } else if (this.tipo == "ninja"){
            ataque = "shuriken"
        } else {
            ataque = "mãos"
        }
        console.log(`O herio de nome ${this.nome} e tipo ${this.tipo} atacou usando ${ataque}`)
    }
    regenerar(){
        this.idade ++
        console.log("Heroi regenerado: ganhou +1 de idade")
        console.log(this.idade)
    }
}

let heroi1 = new Heroi("Dante", 436, "anão")

heroi1.atacar()
heroi1.regenerar()