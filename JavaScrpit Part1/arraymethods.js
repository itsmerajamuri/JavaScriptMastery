const array=[1,2,3,4,5];
// using array method ->foreach
 array.forEach((a)=>{
   console.log(a)
})
console.log(array)
//using map method
const c=array.map((a)=>{
    return 1*a;
})
console.log(c)
console.log(array)
//using filter method
const d= array.filter((a,b)=>{
    return a%2===0;
})

console.log(d)
console.log("filter")
console.log(array)


//using reduce method
const e= array.reduce((a,b)=>{
    return a+b;
},10)
console.log(e)
console.log(array)


