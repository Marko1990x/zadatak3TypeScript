// part 2 the loggin button back and ok buttons
// <div id="second"><button id="okLoginButton">Ok</button><button id="backLoginButton">Back</button></div>
function backToIndex() {
    document.getElementById("backLoginButton").addEventListener("click", function () {
        console.log(location.href);
        location.replace("../index.html");
    });
}
backToIndex();
function toRegPage() {
    document.getElementById("okLoginButton").addEventListener("click", function () {
        console.log(location.href);
        location.replace("./registrationForm.html");
    });
}
toRegPage();
