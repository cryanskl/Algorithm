function isObject(val){
    return typeof val === "object" && val!=null;
}

function deepClone(obj, hash=new WeakMap()){
    if(!isObject(obj)) return obj;
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let target = Array.isArray(obj)?[]:{};
    hash.set(obj,target);
    Reflect.ownKeys(obj).forEach((item)=>{
        if(isObject(obj[item])){
            target[item]=deepClone(obj[item],hash);
        }else{
            target[item]=obj[item];
        }
    });
    return target;
}

//example

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a','b','c','d']
}

const obj2 = obj1
obj2.address.city = 'shanghai'
