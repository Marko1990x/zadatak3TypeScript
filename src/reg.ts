import { registar } from "./class";



let users = [];

let newUsers = users.concat(users)



var newUsers2 = JSON.parse(localStorage['username'])
console.log(newUsers2)


document.getElementById("regButton").addEventListener("click", function () {

    let userNameReg: string = ((<HTMLInputElement>document.getElementById("usname")).value);
    let passWordReg: string = ((<HTMLInputElement>document.getElementById('pw')).value);
    let passWordCheck: string = ((<HTMLInputElement>document.getElementById('pwcheck')).value);

    users.push(userNameReg)

    // users.push(userNameReg);


    function checkPassword() {
        if (passWordReg !== passWordCheck) {
            console.log("Passwords must match");


            // } else if()  {

        } else {
            // localStorage.setItem('username', userNameReg);
            // localStorage.setItem('password', passWordReg)
            for (let a = 0; a < newUsers.length; a++) {
                localStorage.setItem('username', newUsers[a]);
                
            }
        }
    }
    checkPassword();
})

class CheckRegister {
    getThis = () => {
        localStorage.getItem('username');
    }
}

// let a = new CheckRegister();
// console.log(a.getThis())

