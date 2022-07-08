function uniqueArr(arr){
    return [...new Set(arr)]
}

let a = [1,2,2,3]
console.log(uniqueArr(a))