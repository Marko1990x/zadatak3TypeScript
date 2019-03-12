//import {registar} from './class'   // registar
var registar = /** @class */ (function () {
    function registar(name, pass) {
        this.userName = name;
        this.password = pass;
    }
    return registar;
}());
var userName = 'Marko';
localStorage.setItem(userName, userName);
var userPass = 'MarkoPass';
localStorage.setItem(userPass, userPass);
var userName2 = 'Nikola';
localStorage.setItem(userName2, userName2);
var userPass2 = 'NikolaPass';
localStorage.setItem(userPass2, userPass2);
var userName3 = 'Damjan';
localStorage.setItem(userName3, userName3);
var userPass3 = 'DamjanPass';
localStorage.setItem(userPass3, userPass3);
var myItem = localStorage.getItem(userName);
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
    var userNameSent = (document.getElementById("enterUsername").value);
    console.log(userNameSent + " this is the username sent by the app ");
    var userPassSent = (document.getElementById("enterPassword").value);
    console.log(userPassSent + " this is the userpass sent by the app");
    console.log("ok");
    console.log(userNameSent + " " + userPassSent);
    if (userName === userNameSent && userPass == userPassSent) {
        console.log("ok it works");
    }
    if (userName2 === userNameSent && userPass2 == userPassSent) {
        console.log("ok it works 2");
    }
    if (userName3 === userNameSent && userPass3 == userPassSent) {
        console.log("ok it works 3");
    }
});
console.log(user1, user2, user3);
