let firstName="pavan";
console.log(firstName[0]);

//length of the string

console.log(firstName.length);

//string methods

//trim
let username=" pavan 1";
console.log(username.trim());
console.log(username);

//lowercase
console.log(username.toUpperCase());

//tolowercase
console.log(username.toLocaleLowerCase());

//slice
console.log(firstName.slice(1,2));
let number=12;
let stringg="12";
//convert number to string
console.log(typeof (number+""));
//otherway
console.log(typeof String(number))

//convert string to  number
console.log(typeof +stringg);
console.log(typeof Number(stringg))

//concatinating two strings

let f1="pavan";
let f2="kumar";
console.log(f1+" " +f2);

//template string
let data=`pavan ${number}`;
console.log(data);

//undefined
let data1;
console.log(typeof data1);

//null
let num=null;
console.log(typeof num);

let num1=123;
console.log(Number.MAX_SAFE_INTEGER);
let num2=BigInt(1111111111111111);
console.log(num2);
//or
let num3=1111111111n;
console.log(num3)

//== and ===
let a=121;
let b="121";
console.log(a===b);

