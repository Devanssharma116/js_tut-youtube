// ## Primitive
// 7 types: String,Number,Bollean,null,undefiend,symbol,Bigint
// Refrence type(Non Primitive)
// Array,objects,Functions,

const id=Symbol('123')
const anotherid=Symbol('123')
// console.log(id==anotherid)

const bigNumber=23456543234543212345433423434344343234566n
// console.log(typeof bigNumber)
//++++++++++++++++++++++++++++++++++++++++++++++++++++
/* two types of memory
Stack(Primitive )
Heap(Non-Primitive)

*/
// example of stack
// let myname="Devans sharma"
// let anothername=myname
// console.log(myname)
// console.log(anothername);
// anothername="Aaryansharma"
// console.log(myname)
// console.log(anothername);
// example of heap
let userOne={
    email:"user@gmail.com",
    upi:"user@ybl",
}
console.log(userOne)
let usertwo=userOne
usertwo.email="devans@gmail.com"
console.log("usertwo values",usertwo)
console.log("user one values",userOne)
// i heap memory there is no refrence of object..