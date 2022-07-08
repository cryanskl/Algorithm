function compose(...fn){
  if(!fn.length) return (x)=>x;
  if(fn.length===1) return fn[0];
  return fn.reduce(
    (pre,cur)=>(...args)=>pre(cur(...args))
  ) 
}

