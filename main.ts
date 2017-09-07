import {Tree} from './tree';
import{Animal} from './animal';

let trees:Tree[]=[];
let animals:Animal[] = [];

trees.push(new Tree(2,"spruce","green",3));
trees.push(new Tree(4,"palm tree","green",8));
trees.push(new Tree(10,"oak","orange",11));

animals.push(new Animal("dog", 89));
animals.push(new Animal("cow", 9));
animals.push(new Animal("elephant", 133));
animals.push(new Animal("goat", 44));

for(let t of trees){
    t.render();
}
console.log("\n");
for(let a of animals){
    a.render();
}