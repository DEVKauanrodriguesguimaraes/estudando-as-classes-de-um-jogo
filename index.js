
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
                break;
            case "mago":
                weaponDoHero = "magia"
                break;
            case "monge":
                weaponDoHero = "artes marciais"
                break;
            case "ninja":
                weaponDoHero = "shuriken"
                break;
        }
        console.log(`o ${this.kindDoHero} atacou usando ${weaponDoHero}`)
    }
}
let heroOne = new heroes("Aquiles", "25 anos", "guerreiro");
let heroTwo = new heroes("Merlim", "70 anos", "mago");
let heroThree = new heroes("Gandi", "80 anos", "monge");
let heroFour = new heroes("Itachi", "26 anos", "ninja");

heroOne.attack()
heroTwo.attack()
heroThree.attack()
heroFour.attack()