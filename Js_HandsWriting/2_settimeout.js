function mySetTimeInterval(fn,t){
  let timer = null;
  function interval(){
    fn();
    timer = setTimeout(interval,t)
  }
  interval();
  return{
    cancel:()=>{
      clearTimeout(timer)
    }
  }
}

let a = mySetTimeInterval(()=>{console.log(111)},1000)
let b = mySetTimeInterval(()=>{console.log(222)},1000)
let c = setTimeout(a.cancel,2000)
let d = setTimeout(b.cancel,3000)

const mySetTimeout = (fn, t)=>{
  const timer = setInterval(()=>{
    clearInterval(timer);
    fn();
  },t)
}
mySetTimeout(()=>{console.log(333)},4000)
