const method1=()=>{
    return 3;
};
method1();
// console.log(method1())

const fun1=(a)=>{
    a(1,2);
    console.log("fun1")
}
const fun2=(a,b)=>{
    console.log("fun2    "+a+" "+b)
}
fun1(fun2);


