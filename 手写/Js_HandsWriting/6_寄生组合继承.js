function Parent(name){
    this.name = name
    this.say=()=>{
        console.log(111);
    }
}
Parent.prototype.play = ()=>{
    console.log(222);
}
function Children(name){
    Parent.call(this)
    this.name = name
}