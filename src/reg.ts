// import  bullShitticusMaximus  from './index'
// try this latter with browserify
// console.log(bullShitticusMaximus);

// <input id="username" class="sortThis" type="text" placeholder="Enter Username" value="Enter Username">
// <input id="password" class="sortThis" type="text" placeholder="Enter Password" value="Enter Password">
// <input id="confPassword" class="sortThis" type="text" placeholder="Confirm Password" value="Confirm password">

class registar2 {
    userName: string;
    password: string;
    constructor(name: string, pass: string) {
        this.userName = name;
        this.password = pass;
    }
}


document.getElementById("regButton").addEventListener("click", function () {
    let userNameSent = ((<HTMLInputElement>document.getElementById("username")).value);
    let userPassSent = ((<HTMLInputElement>document.getElementById("password")).value);
    let userPassConfirmed = ((<HTMLInputElement>document.getElementById("confPassword")).value);

    console.log("this is the value sent by the app");
    console.log(userNameSent + " / " + userPassSent + " / " + userPassConfirmed);

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

        // ovaj uslov proverava da li korisnik vec postoji ako postoji kraj programa break
        if (x == userNameSent && y == userPassSent && y == userPassConfirmed) {
            console.log("Podaci koje zelite da unesete vec postoje: pokusajte ponovo");
            break;
        } else {
            let x1 = userNameSent;
            let x2 = userPassSent;
            let x3 = userPassConfirmed;

            if (x2 == x3) {
                let userName = x1;
                localStorage.setItem(userName, userName);

                let userPass = x2;
                localStorage.setItem(userPass, userPass);
            }else{
                ((<HTMLInputElement>document.getElementById("password")).style.backgroundColor = "red");
                ((<HTMLInputElement>document.getElementById("password")).value = "sifre se ne poklapa pokusaj ponovo");
                ((<HTMLInputElement>document.getElementById("confPassword")).style.backgroundColor = "red");
                ((<HTMLInputElement>document.getElementById("password")).value = "sifre se ne poklapa pokusaj ponovo");
            }
        }
    }
});



//console.log(oJson);