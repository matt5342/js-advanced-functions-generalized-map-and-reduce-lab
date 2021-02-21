// Add your functions here
// Your code here
function map(array, func) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        let a = array[i]

        newarray.push(func(a));
    }
    return newarray;
}
function reduce(src, cb, starting){

    let r = (starting) ? starting : src[0]
    let i = (starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
}


