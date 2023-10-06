const method1=(a)=>{
   
    return a;
}
const method2=()=>{
    return "a"
}
let hello="pavan";
// console.log(method1(method2()))
const method3=()=>{
    const a=()=>{
        return hello;
    }
    return a;
}
const method4=method3();
console.log(method4())