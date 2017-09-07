export class Tree{
    height:number;
    species:string;
    color:string;
    age:number
    constructor(height:number,species:string,color:string,age:number){
        this.height = height
        this.species = species
        this.color = color
        this.age = age
    }
    render(){
        if(this.species === "spruce"){
            console.log(`🌲 ${this.height} meters ${this.color}`)
        }
        else if(this.species === "oak"){
            console.log(`🌳 ${this.height} meters ${this.color}`)
        }
        else if(this.species === "palm tree"){
            console.log(`🌴 ${this.height} meters ${this.color}`)
        }
    }
}

