interface Fighter {
    attack(Fighter);
    defend(Fighter);
    heal(Fighter);
}

class Ninja {
    constructor() {
    }
    attack(f:Fighter):void {
    }
    defend(f:Fighter):void {

    }
    heal(f:Fighter):void {

    }
    throw(f:Fighter):void {

    }
    jump(f:Fighter):void {

    }
}

class Person{
    eat(){}
    moveBy(){}
}

let n = new Ninja();
let ninjaFighter:Fighter = n;

let p = new Person();
// let fighter:Fighter = p; 