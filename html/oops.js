// class Elephant {
//     constructor(name, age, height, width) {
//         this.legs = 4;
//         this.eyes = 2;
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         this.width = width;
//     }
//     getElephantcolor() {
//         return 'black'
//     }
//     getElephantNails() {
//         return 4 * this.legs
//     }
// }
// // let firstElephant = new Elephant()
// let firstElephant = new Elephant("karnan", 60, 340, 720);
// console.log(firstElephant.legs);
// console.log(firstElephant.eyes);
// console.log(firstElephant.getElephantcolor());
// console.log(firstElephant.getElephantNails());
// console.log(firstElephant.name);
// console.log(firstElephant.age);
// console.log(firstElephant.height);
// console.log(firstElephant.width);

// class Message {
//     constructor(to, message) {
//         this.to = to;
//         this.from = "me"
//         this.message = message
//         this.Appname = "instagram";
//         this.Apptype = "desktop";

//     }
//     gettime() {
//         let a = new Date()
//         let time = a.getHours() + ":" + a.getMinutes()
//         return time;
//     }
//     getDate() {
//         let a = new Date()
//         let date = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
//         return date;
//     }


// }
// let Message1 = new Message("zion", "hi there")
// console.log(Message1);
// console.log(Message1.gettime());
// console.log(Message1.getDate());
// console.log(Message1.Appname);
// console.log(Message1.Apptype);

// class Rectangle {
//     constructor(length, height) {
//         this.length = length;
//         this.height = height
//     }
//     getarea() {

//         return this.length * this.height;
//     }
//     getperimeter() {
//         return 2 * (this.length + this.height)
//     }
// }
// let r1 = new Rectangle(10, 5)
// console.log(r1.getarea());
// console.log(r1.getperimeter());
// let r2 = new Rectangle(5, 8)
// console.log(r2.getarea());
// console.log(r2.getperimeter());

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         console.log("circle created");
//     }
//     getarea() {
//         return Math.PI * this.radius * this.radius;
//     }
//     getperimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// let c1 = new Circle(10)
// // console.log(c1.getarea());
// // console.log(c1.getperimeter());

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];
// console.log(library[0].author);
// console.log(library[0].title);
// console.log(library[0].readingStatus);

// console.log(library[1].author);
// console.log(library[1].title);
// console.log(library[1].readingStatus);

// console.log(library[2].author);
// console.log(library[2].title);
// console.log(library[2].readingStatus);

// class Person {
//     constructor(name, age, mark) {
//         this.name = name;
//         this.age = age;
//         this.mark = mark;
//     }
//     discribe() {
//         return this.name + "," + this.age + "years old"
//     }
//     getbirthyear() {
//         return 2022 - this.age;
//     }
//     getMark() {
//         if (this.mark > 90) {
//             return "A"
//         } else
//             if (this.mark > 80) {
//                 return "B"
//             } else
//                 if (this.mark > 70) {
//                     return "C"
//                 } else
//                     if (this.mark > 60) {
//                         return "D"
//                     } else
//                         if (this.mark > 50) {
//                             return "E"
//                         } else
//                             return "failed"
//     }

// }
// let p1 = new Person("Ram", 10, 60,);
// console.log(p1.name);
// p1.discribe()
// console.log(p1.discribe());
// console.log(p1.getbirthyear());
// console.log(p1.getMark());

// class Car {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//         this.speed = 0
//     }
//     accelerated(v) {

//         this.speed = this.speed + v

//     }
//     break(b) {
//         if (this.speed > b) {
//             this.speed = this.speed - b;
//         } else
//             this.speed = 0;
//     }



// }



// let s1 = new Car("nano", "new")
// console.log(s1.name);
// console.log(s1.speed);
// console.log(s1.speed);
// console.log(s1.accelerated(40));
// console.log(s1.accelerated(40));
// console.log(s1.speed);
// s1.break(40)
// s1.break(20)
// console.log(s1.speed);
// console.log(s1.speed);
// console.log(s1.break(30));
// console.log(s1.break(30));
// console.log(s1.break(30));
// console.log(s1.accelerated(40));
// console.log(s1.break(30));
// console.log(s1.speed);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareage(newperson) {
        if (this.age > newperson.age) {
            console.log("Iam older")
        } else if (this.age == newperson.age) {
            console.log("we are same age");
        } else {
            console.log(" I am youger ")
        }
    }
}
let p1 = new Person("Ram", 15);
let p2 = new Person("Raj", 18);
let p3 = new Person("Roy", 15);
p1.compareage(p2)
p2.compareage(p3)
p1.compareage(p3)





















