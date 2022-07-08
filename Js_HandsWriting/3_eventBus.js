class eventBus{
  constructor(){
    this.events = {};
  }

  on(type,fn,isOnce=false){
    if(this.events[type]==null) this.events[type]=[];
    this.events[type].push({fn,isOnce})
  }

  once(type,fn){
    this.on(type,fn,true)
  }

  off(type,fn){
    if(!fn) this.events[type]=[];
    if(this.events[type]){
      this.events[type]=this.events[type].filter(item=> item.fn!==fn)
    }
  }

  emit(type,...args){
    if(this.events[type]==null) return
    this.events[type]=this.events[type].filter(item=>{
      const {fn, isOnce}=item
      fn(...args)
      if(!isOnce) return true
      return false
    })
  }
}

const e = new eventBus()
function fn1(a,b){ console.log('fn1',a,b)}
function fn2(a,b){ console.log('fn2',a,b)}
function fn3(a,b){ console.log('fn3',a,b)}

e.on('key1',fn1)
e.on('key1',fn2)
e.once('key1',fn3)
e.on('xxx',fn3)

e.emit('key1',10,20)
e.off('key1',fn1)
e.emit('key1',100,200)