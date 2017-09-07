import { Tree } from './tree';
import { Animal } from './animal';

interface Renderer {
    render(): void;
}

let objects: Renderer[] = [];

objects.push(new Tree(2, "spruce", "green", 3));
objects.push(new Tree(4, "palm tree", "green", 8));
objects.push(new Tree(10, "oak", "orange", 11));

objects.push(new Animal("dog", 89));
objects.push(new Animal("cow", 9));
objects.push(new Animal("elephant", 133));
objects.push(new Animal("goat", 44));

for (let o of objects) {
    o.render();
}