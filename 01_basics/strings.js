const string1="hello"
console.log(string1)
console.log(typeof string1)

let string2=new String("world")
console.log(string2)

let string3=string2
console.log(string3)
string2=string3.toLocaleUpperCase()
console.log(string3)
console.log(string2)
console.log(typeof string2)

let obj1={
    name:"sutta",
    role:"kutta"
}
let obj2=obj1
obj2.role="puttha"
console.log(obj1)