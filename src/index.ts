//import {registar} from './class'   // registar


class registar {
    userName: string;
    password: string;
    constructor(name: string, pass: string) {
        this.userName = name;
        this.password = pass;
    }
}

let userName = 'Marko';
localStorage.setItem(userName, userName);

let userPass = 'MarkoPass';
localStorage.setItem(userPass, userPass);

let userName2 = 'Nikola';
localStorage.setItem(userName2, userName2);

let userPass2 = 'NikolaPass';
localStorage.setItem(userPass2, userPass2);

let userName3 = 'Damjan';
localStorage.setItem(userName3, userName3);

let userPass3 = 'DamjanPass';
localStorage.setItem(userPass3, userPass3);

let myItem = localStorage.getItem(userName);

var user1 = new registar(userName, userPass);
var user2 = new registar(userName2, userPass2);
var user3 = new registar(userName3, userPass3);


function bullShitticusMaximus (param: any){
    
}

//#region 
// function start() {
//     let param1 = userNameSent;
//     let param2 = userPassSent;
//     (<HTMLInputElement>document.getElementById("loginButton")).addEventListener("click", check(param1,param2));
// }

// function check(name: string, pass: string) {

//     console.log(name + " check " + pass + " these are the values sent by the button")

//     if (userName === name) {
//         console.log("ok")
//     }

//     if (userPass === pass) {
//         console.log("ok 2")
//     }

//     return console.log(name + pass)
// }
//#endregion

document.getElementById("loginButton").addEventListener("click", function () {
    let userNameSent = ((<HTMLInputElement>document.getElementById("enterUsername")).value);
    console.log(userNameSent + " this is the username sent by the app ");

    let userPassSent = ((<HTMLInputElement>document.getElementById("enterPassword")).value);
    console.log(userPassSent + " this is the userpass sent by the app");

    //console.log("ok");
    console.log(userNameSent + " " + userPassSent);

    let x1 = [user1, user2, user3], string;
    //console.log(x1);

    for (let i = 0; i < x1.length; i++) {
        const element = x1[i];
        console.log("sent by for loop")
        console.log(element);
        // let x: boolean = false;
        let x: number = -1;
        if (element.userName == userNameSent && element.password == userPassSent) {
            // x = true;
            // console.log(x + " this is the boolean value");
            x = 1;
            console.log("check is ok opening new page")
            location.replace("../additionalAnnoyance/login.html")
            // document.getElementById("loginButton").removeEventListener("click", function(){
                // try and fix this part
            // });

        }
        else if(x < 0){
            console.log("nije pronadjen objekat u ovoj iteraciji");
        }
    }

    // if(userName === userNameSent && userPass == userPassSent){
    //     console.log("ok it works first set of values");
    // }
    // if(userName2 === userNameSent && userPass2 == userPassSent){
    //     console.log("ok it works first set of values");
    // }
    // if(userName3 === userNameSent && userPass3 == userPassSent){
    //     console.log("ok it works 3");
    // }

    
});


console.log(user1, user2, user3);