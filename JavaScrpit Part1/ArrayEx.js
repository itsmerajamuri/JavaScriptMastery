let array=[1,2,3,4,5];
console.log(Array.isArray(array));
array1={};
console.log(Array.isArray(array));
console.log(array[0]);
array.shift();
console.log()
console.log(array)

//cloning an array
let arr=[1,2,3,4,5];
let arr1=arr.slice(0);
let arr2=[].concat(arr,[1,2,3,4]);
let arr3=arr.concat([1,2,3,2])
let arr4=[...[1,2,34],"arr"];
let arr5=[...arr];
console.log(arr3)
console.log(arr);
console.log(arr4.length);