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
//let bullShitticusMaximus = [user1, user2, user3];
//export default bullShitticusMaximus;
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
    //console.log("ok");
    console.log(userNameSent + " " + userPassSent);
    var x1 = [user1, user2, user3], string;
    //console.log(x1);
    for (var i_1 = 0; i_1 < x1.length; i_1++) {
        var element = x1[i_1];
        console.log("sent by for loop");
        console.log(element);
        // let x: boolean = false;
        var x = -1;
        if (element.userName == userNameSent && element.password == userPassSent) {
            // x = true;
            // console.log(x + " this is the boolean value");
            x = 1;
            console.log("check is ok opening new page");
            location.replace("../additionalAnnoyance/login.html");
            // document.getElementById("loginButton").removeEventListener("click", function(){
            // try and fix this part
            // });
        }
        else if (x < 0) {
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
