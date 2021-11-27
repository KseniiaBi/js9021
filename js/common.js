import * as consts from "./constants.js";
import {sayHi} from './vars.js';
import {u} from "./user.js";
import {sum as calc} from "./functions.js";
import Coffee from "./coffee.js";

sayHi();
console.warn(consts);
console.log(u);

console.warn(calc(3,3));

let latte = new Coffee('latte');
latte.brew();