function myInstanceof(left,right){
    while(true){
        if(left===null){
            return false;
        }
        if(left._proto_===right.prototype){
            return true;
        }
        left = left._proto_;
    }
}