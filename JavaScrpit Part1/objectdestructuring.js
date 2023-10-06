const array=[1,2,3,]
const obj1={
    ...array
}
console.log(obj1) //index will become keys and values becomes value

const obj2={
    username:"pavan",
    age:24
}
let {username:pavan1,...rest}=obj2;
console.log(pavan1)
console.log(rest)

//object sinside array 
//used in real world projects
let array2=[
    {
        name:"pavan",
        age:"24"
    },
    {
        name:"pavan",
        age:"25"
    },
    {
        name:"pavan",
        age:"26"
    },
    {
        name:"pavan",
        age:"27"
    }
]
console.log(array2)
for(let obj of array2){
    console.log(obj.age)
}
// destructuring objects inside arrat
let [{name:username},,,...obj6]=array2
console.log(username)
console.log(Array.isArray(obj6) )


