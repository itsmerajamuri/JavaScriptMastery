//set
//doesnot have duplicates ,order is not available and no indexes
const set=new Set([1,2,3]);
set.add(11)
set.add(2)
set.add(3)
console.log(set)
for(let value of set){
    console.log(value)
}

if(set.has(1)){
    console.log("1 is present")
}else{
    console.log("not present")
}

//map
//it will have key values paires,key should be unique
const map=new Map([[13,2],[15,8]]);
map.set(1,2)
map.set(2,1)
console.log(map)
console.log(map.get(1))
console.log(map.keys())
for(let [key,value] of map){
    console.log(key,value)
}

//cloning an object
const obj={
    id:1,
    age:26
}
console.log(Object.assign({},obj))
