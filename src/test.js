// // function square(a){
// //     return a*a
// // }

// // console.log(square(5))

// //function expression
// // square = function (a){
// //     return a*a
// // }

// // console.log(square(5))

// //fat arrow (arrow function)
// square = (a) =>{
//     return a*a
// }
// console.log(square(5))

// //example
// addit = (a,b) => {
//     return a+b
// }
// console.log(addit(12,13))

//asynchronous with timeout
// console.log("good morning!")
// setTimeout(()=>{
//     console.log("good afternoon!")
// },5000)
// console.log("good night!")

//Day3
//JavaScript Class
// class Person{
//     constructor(name,age){   //constructor
//         //console.log("Inside constructor")
//         this.name=name  //this is like self in python
//         this.age=age
//     }
//     say_Hello(){    //Method
//         console.log("Hello")
//     }
//     print_name(){
//         console.log(`My name is ${this.name}`) //`` is like f string in python f"dffdf {}"
//     }
//     print_age(){
//         console.log(`My age is ${this.age}`)
//     }
// }
// //inheritance
// class Boy extends Person{   

// }

// const user = new Person("Haris",16)
// user.say_Hello()
// user.print_name()
// user.print_age()
// //In terminal, type node test.js

//Day 4
//with var, re assign, re declare are possible
// var age=20
// var age=30
// console.log(age)

//not possible to re declare
// let age=20
// let age=30
// console.log(age)

//re assigning is possible
// let age=20
//  age=30
// console.log(age)

//re assigning, re declaring is not possible with const
// const age=20
// const age=30
// console.log(age)

//not possible
// const age=20
//  age=30
// console.log(age)

// let state=false

// function toggle(){
//     state=!state
//     console.log(state)
// }

// toggle()
// toggle()
// toggle()
// toggle()

//Day5

const person = {
    name:"Kohli",
    printname:function(){
        console.log(this.name)
    }
}
const member = {
    name:"Dhoni"
}

//person.printname()

person.printname.bind(member)









