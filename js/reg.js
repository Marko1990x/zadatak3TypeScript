"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [];
var newUsers = users.concat(users);
var newUsers2 = JSON.parse(localStorage['username']);
console.log(newUsers2);
document.getElementById("regButton").addEventListener("click", function () {
    var userNameReg = (document.getElementById("usname").value);
    var passWordReg = (document.getElementById('pw').value);
    var passWordCheck = (document.getElementById('pwcheck').value);
    users.push(userNameReg);
    // users.push(userNameReg);
    function checkPassword() {
        if (passWordReg !== passWordCheck) {
            console.log("Passwords must match");
            // } else if()  {
        }
        else {
            // localStorage.setItem('username', userNameReg);
            // localStorage.setItem('password', passWordReg)
            for (var a = 0; a < newUsers.length; a++) {
                localStorage.setItem('username', newUsers[a]);
            }
        }
    }
    checkPassword();
});
var CheckRegister = /** @class */ (function () {
    function CheckRegister() {
        this.getThis = function () {
            localStorage.getItem('username');
        };
    }
    return CheckRegister;
}());
// let a = new CheckRegister();
// console.log(a.getThis())
