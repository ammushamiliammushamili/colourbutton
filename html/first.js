// console.log("hello world");
// var name = "shamili";
// var name = "sruthi";

// // let student = "12";



// // let a = 10;
// // let a = "String";
// // let a = true
// // let a;
// // let a = 12
// // let b = 2
// // let a = "hi iam";
// // let b = " shamili";

// // console.log(a + b)
// // console.log(typeof (a))
// // console.log(b[4])

// let a = [1, 2, 3, "abc", [6, 7, [5, 8, 9]], [8, 9]];
// console.log(a)
// a[0] = 1;
// console.log(a)
// console.log(a.length)

// console.log(a[4][1]);
// console.log(a[4][2][2]);
// a.push(15);
// console.log(a);
// a.pop();
// console.log(a);
// let x = a.pop()
// console.log(x);

// a.unshift(7)
// console.log(a)

// a.shift()
// console.log(a);

// let student = ['ammu', 'achu', 'unni', 'sonu', 'akku'];

// console.log(student);
// student.pop()
// console.log(student);
// student.shift()
// console.log(student);

// let remove = student.pop()
// console.log("student removed", remove);

// let removed = student.shift()
// console.log("student removed", removed);

// let person1 = {
//     name: "shyamili",
//     phone: 876543678
// }
// person1.name = "sruthi"
// console.log(person1);

// function convert(minutes) {
//     return minutes * 60;
// } console.log(convert(1));



// function printupto10(limit) {
//     let a = 1;
//     while (a <= limit) {
//         if (a % 2 == 1)
//             console.log(a);
//         a++;
//     }
// }
// printupto10(50)

// function printnumberwithfor(limit) {
//     for (let a = 1; a <= limit; a++) {
//         if (a % 2 == 1)
//             console.log("even numbers");

//     }
// }
// printnumberwithfor(50)

// function addupto(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 == 0)
//             sum = sum + i
//     }
//     console.log(sum);
// }
// addupto(20)

// function printupto10(limit) {
//     let a = 1;
//     do {
//         if (a % 2 == 1)
//             console.log(a);
//         a++;
//     }
//     while (a <= limit)

// }
// printupto10(30)
// function maximum() {
//     let array = [5, 4, 2, 15, 10, 1, 20]
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     console.log(max);
// }
// maximum()
// function minimum(arr) {

//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     console.log(min);
// }
// minimum([1, 2, 3, 4, 5])
// minimum([10, 2, 3, 4, 5])


// function maxmini(array) {
//     let max = array[0]
//     let mini = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]

//         } else if (array[i] < mini) {
//             mini = array[1]
//         }
//     }
//     console.log("" + max + "the number is bigger");
//     console.log("" + mini + "the number is smaller");
// }
// maxmini([1, 2, 3, 4, 5])

// function remainder(a, b) {
//     return a % b
// }
// console.log(remainder(10, 5));
// console.log(remainder(15, 9));
// console.log(remainder(5, 15));

// function lessthanzero(a) {
//     if (a < 0)
//         return true
//     else
//         return false

// }
// console.log(lessthanzero(-5));
// console.log(lessthanzero(10));
// console.log(lessthanzero(0));

// function lessthanthousand(a) {
//     if (a < 100)
//         return true
//     else

//         return false
// }
// console.log(lessthanthousand(75));
// console.log(lessthanthousand(110));
// console.log(lessthanthousand(100));

// function lessthanfifty(a) {
//     if (a < 50)
//         return true
//     else
//         return false
// }
// console.log(lessthanfifty(45));
// console.log(lessthanfifty(51));

// function greterthan(a) {
//     if (a > 1000)
//         return true
//     else
//         return false

// }
// console.log(greterthan(10001));
// console.log(greterthan(7));


// function findruns(four, six) {
//     let total = 4 * four + 6 * six
//     return 4 * four + 6 * six

// }
// console.log(findruns(4, 2));
// console.log(findruns(0, 0));

// function findruns(four, six, single) {
//     let total = 4 * four + 6 * six + 1 * single
//     return 4 * four + 6 * six + 1 * single
// }
// console.log(findruns(0, 7, 17));
// console.log(findruns(1, 1, 1));


// function points(a, b, c) {

//     return 3 * a + 2 * b + 1 * c

// }
// console.log(points(0, 0, 6));
// console.log(points(7, 10, 7));


// function same(a, b) {
//     if (a == b) {
//         return true
//     }
//     else
//         return false

// }
// console.log(same(20, 20));
// console.log(same(18, 2));
// console.log(same(0, 0));


function largestswap(a) {
    // find the right number
    let right = a % 10
    console.log(right);
    //find the left number using right number
    let left = (a - right) / 10
    console.log(left);

    //find the second number using left vand right number
    let second = right * 10 + left
    console.log(second);
    // check whether the second number is larger and retiurn the karger number
    if (a > second) {
        return "largest " + a;
    } else {
        return "largest " + second;
    }
}
console.log(largestswap(28))
console.log(largestswap(17));
console.log(largestswap(76));

function olderperson(person1, person2) {
    if (person1.age > person2.age) {
        return person1.name + " is older"


    } else {
        return person2.name + " is older"
    }

}
console.log(olderperson({ name: "akash", age: 20 }, { name: "anaz", age: 40 },));
console.log(olderperson({ name: "vishnu", age: 25 }, { name: "Asil", age: 40 },));


function comp(string1, string2) {
    if (string1.length == string2.length) {
        return true;
    } else
        if (string1.length != string2)
            return false


}
console.log(comp("AB", "DC"));
console.log(comp("ABC", "DE"));
