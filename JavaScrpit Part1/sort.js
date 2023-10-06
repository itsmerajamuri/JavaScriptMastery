const array=[11,1,2,9,6];
const a= array.sort((a,b)=>b-a)
console.log(a)

//find method
const array1= array.find(item=>item===1);
console.log(array1)
const array2=[
{
    id:1,
    username:"unknown"
},
{
    id:2,
    username:"teja"
},
{
    id:3,
    username:"unknown"
},
{
    id:4,
    username:"unknown"
}

]
const array3= array2.find(details=>details.username==="unknown")
console.log(array3)

//every method
const array4=[2,4]
const array5= array4.every((number)=>number%2===0)
console.log(array5)

//some method

const array6=[21,5,1]
const array7= array6.some(number=>number%2===0)
console.log(array7)
