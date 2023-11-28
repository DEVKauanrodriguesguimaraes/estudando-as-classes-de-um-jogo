
class heroes {
    constructor(nameDoHero, ageDoHero, kindDoHero,) {
        this.nameDoHero = nameDoHero
        this.ageDoHero = ageDoHero
        this.kindDoHero = kindDoHero
    }

    attack() {
        let weaponDoHero = " "

        switch (this.kindDoHero) {
            case "guerreiro":
                weaponDoHero = "espada"
                console.log(`O ${this.kindDoHero} atacou usando ${weaponDoHero}`)
                break;
            case "mago":
                weaponDoHero = "magia"
                console.log(`O ${this.kindDoHero} atacou usando ${weaponDoHero}`)
                break;
            case "monge":
                weaponDoHero = "artes marciais"
                console.log(`O ${this.kindDoHero} atacou usando ${weaponDoHero}`)
                break;
            case "ninja":
                weaponDoHero = "shuriken"
                console.log(`O ${this.kindDoHero} atacou usando ${weaponDoHero}`)
                break;
                default:
                    console.log("Herói não foi encontrado")
                    break;    
        }
    }
}
let heroOne = new heroes("Aquiles", "25 anos", "guerreiro");
let heroTwo = new heroes("Merlim", "70 anos", "mago");
let heroThree = new heroes("Gandi", "80 anos", "monge");
let heroFour = new heroes("Itachi", "26 anos", "ninja");
let heroFive= new heroes("Pedro", "30 anos", "arquiteto");

heroOne.attack()
heroTwo.attack()
heroThree.attack()
heroFour.attack()
heroFive.attack()