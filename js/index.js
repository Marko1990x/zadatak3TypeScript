//import {registar} from './class'   // registar
var registar = /** @class */ (function () {
    function registar(name, pass) {
        this.userName = name;
        this.password = pass;
    }
    return registar;
}());
var userName = 'Marko1';
localStorage.setItem(userName, userName);
var userPass = 'Marko2';
localStorage.setItem(userPass, userPass);
var userName2 = 'Nikola 1';
localStorage.setItem(userName2, userName2);
var userPass2 = 'Nikola9000';
localStorage.setItem(userPass2, userPass2);
var userName3 = 'Damjan 1';
localStorage.setItem(userName3, userName3);
var userPass3 = 'Damjan9000';
localStorage.setItem(userPass3, userPass3);
var myItem = localStorage.getItem(userName);
var user1 = new registar(userName, userPass);
var user2 = new registar(userName2, userPass2);
var user3 = new registar(userName3, userPass3);
var userNameSent = (document.getElementById("enterUsername").value);
console.log(userNameSent + " this is the username sent by the app ");
var userPassSent = (document.getElementById("enterPassword").value);
console.log(userPassSent + " this is the userpass sent by the app");
function check(name, pass) {
    console.log(name + " check " + pass + " these are the values sent by the button");
    if (userName === name) {
        console.log("ok");
    }
    if (userPass === pass) {
        console.log("ok 2");
    }
    return console.log(name + pass);
}
function start() {
    var param1 = userNameSent;
    var param2 = userPassSent;
    document.getElementById("loginButton").addEventListener("click", check(param1, param2));
}
console.log(user1, user2, user3);
