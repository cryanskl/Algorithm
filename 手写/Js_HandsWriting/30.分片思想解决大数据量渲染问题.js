let ul = document.getElementById("container");

let total = 100000;

let once = 20;

let page = total / once;

let index = 0;

function loop(curTotal, curIndex){
    if(curTotal <=0 ){
        return false;
    }

    let pageCount = Math.min(curToal, once);
    window.requestAnimationFrame(function(){
        for(let i = 0;i<pageCount;++i){
            let li = document.createElement("li");
            li.innerText = curIndex+i+":"+~~(Math.random()*total);
             ul.appendChild(li);
        }
        loop(curTotal-pageCount,curI+page);
    });
}
loop(total,index);