function receivesAFunction (callback){
    callback();
    return callback;
}

function returnsANamedFunction (){
    return function sumNumAdditon (num1,num2) { return num1+ num2 }
}

function returnsAnAnonymousFunction (){
    return () => 2+3
}