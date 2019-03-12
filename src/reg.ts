// import  bullShitticusMaximus  from './index'
// try this latter with browserify
// console.log(bullShitticusMaximus);

// <input id="username" class="sortThis" type="text" placeholder="Enter Username" value="Enter Username">
// <input id="password" class="sortThis" type="text" placeholder="Enter Password" value="Enter Password">
// <input id="confPassword" class="sortThis" type="text" placeholder="Confirm Password" value="Confirm password">


document.getElementById("regButton").addEventListener("click", function () {
    let userNameSent = ((<HTMLInputElement>document.getElementById("username")).value);
    let userPassSent = ((<HTMLInputElement>document.getElementById("password")).value);
    let userPassConfirmed = ((<HTMLInputElement>document.getElementById("confPassword")).value);

    console.log("this is the value sent by the app");
    console.log(userNameSent + " / " +  userPassSent + " / " +userPassConfirmed);

    let i = 0,
        oJson = {},
        sKey;
    for (; sKey = window.localStorage.key(i); i++) {
        //oJson[sKey] = window.localStorage.getItem(sKey);
        if (i % 2 == 0) { // even values for i
            var x = window.localStorage.getItem(sKey);  // how to get every second value
            console.log(x + " " + "this is from the first condition");
        } else {
            var y = window.localStorage.getItem(sKey);
            console.log(y + " " + "this if from the second condition");
        }

        // if (x == ) {

        // }

    }
});



//console.log(oJson);