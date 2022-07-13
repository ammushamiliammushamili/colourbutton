// let displayHi = () => {
//     console.log("hi");
// }

// console.log("Before timeout");

// const myTimeout = function () {
//     setTimeout(displayHi, 5000);
// }
// console.log("After timeout");

// let hellodisplay = () => {
//     const element = document.getElementById("demo");
//     setInterval(function () { element.innerHTML += "Hello world" }, 1000);
// }
// hellodisplay()
import { comp as a } from './first.js';


let arr = [1, 2, 3, 4, 5, 6, 7]
for (let n of arr) {
    console.log(n);
}

function createarray(...array) {
    console.log(array);

}
createarray(1, 2)
createarray(1, 2, 3, 4, 5)

function joinarray(a, b) {
    a = [...a, ...b];
    console.log(a);

}
joinarray([3, 4], [1]);