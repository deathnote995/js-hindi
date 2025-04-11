const marvel=["thor","hulk","ironman","strange"];
const dc=["superman","flash","batman","wonderW"];

// marvel.push(dc);
// marvel=marvel.concat(dc);
// marvel.unshift(dc);
// marvel.shift(dc);


// console.log(...marvel);
// console.log(dc);

console.log(Array.from("Rajat"));

const arr1=[1,2,3]
const arr2=[1,2,3]
const arr3=[1,2,3]
console.log(Array.of(arr1,arr2,arr3));

let val1=100
let val2=200
let val3=300
let val4=400
let val5=500
let val6=600
console.log(Array.of(val1,val2,val3))

const new_arr=Array.of(val1,val2,val3,val4,val5,val6);
console.log(new_arr.pop()); //jsut pops the last elemnt and prints it and not the array
console.log(new_arr);

console.log(new_arr.slice(1,3))
console.log(new_arr)

console.log(new_arr.splice(2,0,1000))  //splice basically takes first argument as starting index and second index  as no. of elements to be removed from that index
//from 3rd, 4th argument onwards it basically adds thhose as lements in the array
console.log(new_arr)