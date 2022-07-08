Function.prototype.myCall = function(context,...args){
    if(!context||context===null){
        context = window;
    }
    let fn = Symbol();
    context[fn]=this;
    return context[fn](...args);
}

Function.prototype.myApply=function(context,args){
    if(!context||context===null){
        context=window;
    }
    let fn = Symbol();
    context[fn]=this;
    return context[fn](...args);
}

Function.prototype.myBind=function(context,...args){
    if(!context||context===null){
        context=window;
    }
    let fn = Symbol();
    context[fn] = this;

    let _this = this;
    const result = function(...innerArgs){
        if(this instanceof  _this===true){
            this[fn]=_this;
            this[fn](...[...args,...innerArgs]);
        }else{
            context[fn](...[...args,...innerArgs]);
        }
    };
    result.prototype=Object.create(this.prototype);
    return result;
}