const obj={
    "id":1,
    age:24
}
const obj1=obj;
console.log(obj1);
obj1["id"]=2
console.log(obj)

//spread operator in arrays recap
let array1=[12,2,3]
let array2=[...array1]
console.log(array2)
let array3=[..."abc"]
console.log(array3)
 //now we try spread operator in objects
const obj2={

    ...obj1,...obj


}
console.log(obj2)
obj2["id"]=23
console.log(obj2)
//if two properties are same then they will overide by the latest one


