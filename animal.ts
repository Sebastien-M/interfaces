export class Animal{
    type:string;
    age:number
    constructor(type:string, age:number){
        this.type = type
        this.age = age
    }
    render(){
        if(this.type === "dog"){
            console.log(`🐕 ${this.type}  ${this.age} years old`)
        }
        else if(this.type === "fox"){
            console.log(`🐺 ${this.type}  ${this.age} years old`)
        }
        else if(this.type === "goat"){
            console.log(`🐐 ${this.type}  ${this.age} years old`)
        }
        else if(this.type === "cow"){
            console.log(`🐂 ${this.type}  ${this.age} years old`)
        }
        else if(this.type === "elephant"){
            console.log(`🐘 ${this.type}  ${this.age} years old`)
        }
    }
}