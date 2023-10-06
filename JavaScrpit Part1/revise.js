//array destructing 
const array=[1,2,34]
var [value1,value2,...value3]=array
console.log(value3)

//object destructing
const obj={
  username:"pavan",
  age:24
}
var {username:name1,...age}=obj
console.log(age)
