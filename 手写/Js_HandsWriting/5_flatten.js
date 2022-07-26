//实现一个方法使多维数组变成一个数组
function flatten(arr){
    const isDeep = arr.some(item=>item instanceof Array)
    if(!isDeep){
        return arr
    }
    const res = Array.prototype.concat.apply([],arr)
    return flatten(res)
}

console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));