const object={
    name:"pavan",
    age:24
}
console.log(object);
object.gender="male";
console.log(object);
object["phonenumber"]=9000973053;
console.log(object);
console.log(object["age"])

//how to  iterate objects
//using for in loop
for(let index in object){
    console.log(index,":",object[index])
}
//using objects.key to iterate
let arrayofobj= Object.keys(object);
console.log(arrayofobj)
for(let key of arrayofobj){
    console.log(key ,":",object[key])
}
//computed properties
const key1="obj1"
const key2="obj2"

const var1="1"
const var2="2"

let obj={};
// obj[key1]=var1;
// obj[key2]=var2;
console.log(obj)
//simple way
obj={
    [key1]:var1,
    [key2]:var2
}
console.log(obj)


