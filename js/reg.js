// import  bullShitticusMaximus  from './index'
// try this latter with browserify
// console.log(bullShitticusMaximus);
var i = 0, oJson = {}, sKey;
for (; sKey = window.localStorage.key(i); i++) {
    //oJson[sKey] = window.localStorage.getItem(sKey);
    if (i % 2 == 0) { // even values for i
        var x = window.localStorage.getItem(sKey); // how to get every second value
        console.log(x + "this is from the first condition");
    }
    else {
        var y = window.localStorage.getItem(sKey);
        console.log(y + "this if from the second condition");
    }
}
//console.log(oJson);
