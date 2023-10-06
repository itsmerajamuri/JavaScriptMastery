const fruits=[1,2,3,4,5]
for(let fruit of fruits){
   console.log(fruit);
}


//array destructuring
const array=[12,2,35];
let [var1,var2]=array;
let [var3,var4,...array1]=array;
console.log(array1)
