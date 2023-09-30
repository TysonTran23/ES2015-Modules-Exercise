import fruits from "./foods";
import { choice, remove } from "./helpers";

let RANDOMFRUIT = choice(fruits);

console.log(`I'd like one ${RANDOMFRUIT}, please`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delicious! May I have another?`);
remove(fruits, RANDOMFRUIT);

let remaining = remove(fruits, RANDOMFRUIT);

console.log(`I'm sorry, we're all out. WE have ${remaining.length}`);