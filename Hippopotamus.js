class Hippopotamus{
    constructor(name, weight, tusksSize){
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    swim(){
        this.weight -= 0.3;
        this.weight = this.weight.toFixed(2);

    }

    eat(){
        this.weight -= 0.3;
        this.weight = this.weight.toFixed(2);
    }

    HippopotamusFight(Hippopotamus){
        if (this.tusksSize >= Hippopotamus.tusksSize){
            console.log(`${this.name} a vaincu ${Hippopotamus.name}`)
        }
        else{
            console.log(`${this.name} a été vaincu par ${Hippopotamus.name}`)
        }
    }

    toString(){
        return `${this.name} fait ${this.weight} kg et possède une corne de ${this.tusksSize} cm`
    }

    spendingDay(){
        for (let i = 0; i<15; i++){
            this.eat();
            //console.log(this.toString());
            this.eat();
            //console.log(this.toString());
            this.swim();
            //console.log(this.toString());
            this.swim();
            //console.log(this.toString());
            this.swim();
            //console.log(this.toString());
        }
    }

    isAlive(){
        if (this.weight > 15){
            return true;
        }
        else{
            return false;
        }
    }

    isDeath(){
        return `${this.name} est mort par manque de nourriture`
    }
}

let hip1 = new Hippopotamus('Alex', 300, 20)
let hip2 = new Hippopotamus('Paul', 1450, 21)

console.log(hip1.toString());
console.log(hip2.toString());

hip1.eat();
console.log(hip1.toString());
hip1.swim();
console.log(hip1.toString());

hip1.HippopotamusFight(hip2);

for (let i = 0; i<21; i++){

    hip1.spendingDay()
    
    if (hip1.isAlive()){
        console.log(`jour ${i+1} : ${hip1.toString()}`);
    }
    else{
        console.log(hip1.isDeath());
        break;
    }
}