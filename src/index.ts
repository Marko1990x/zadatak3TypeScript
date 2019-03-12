//import {registar} from './class'   // registar


class registar {
    userName: string;
    password: string;
    constructor(name: string, pass: string) {
        this.userName = name;
        this.password = pass;
    }
}

let userName = 'Marko1';
localStorage.setItem(userName, userName);

let userPass = 'Marko2';
localStorage.setItem(userPass, userPass);

let userName2 = 'Nikola 1';
localStorage.setItem(userName2, userName2);

let userPass2 = 'Nikola9000';
localStorage.setItem(userPass2, userPass2);

let userName3 = 'Damjan 1';
localStorage.setItem(userName3, userName3);

let userPass3 = 'Damjan9000';
localStorage.setItem(userPass3, userPass3);

let myItem = localStorage.getItem(userName);

var user1 = new registar(userName, userPass);
var user2 = new registar(userName2, userPass2);
var user3 = new registar(userName3, userPass3);




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

    console.log("ok");
    console.log(userNameSent + " " + userPassSent);
    
});



console.log(user1, user2, user3);