function resistanceinseries(ar) {
    let sum = 0;
    for (let a of ar) {
        sum = sum + a;
    }
    return sum;
}

console.log(resistanceinseries([1, 2]));

function sayHelloBye(name, number) {
    if (number == 1) {
        return "Hello  " + name
    } else
        if (number == 0) {
            return "Bye  " + name
        }

}
console.log(sayHelloBye("alon", 1));
console.log(sayHelloBye("anju", 0));
console.log(sayHelloBye("appu", 0));

function SumOfCubes(s) {
    let sum = 0;
    for (let a of s) {
        sum = sum + a * a * a
    }
    return sum;
}
console.log(SumOfCubes([2, 2, 2]));