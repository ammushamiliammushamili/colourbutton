let submit_form = document.getElementById("form");
submit_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value
    console.log(username);
    if (username.length <= 10 && username.length >= 5) {
        console.log("verified username");

    } else if (username.length <= 5) {
        console.log("username error : minimum 5 characters is requred");
        document.getElementById('username').innerHTML = "Username Error : minimum 5 characters is requred"
        return
    } else {
        console.log("Username error : maximum character is 10");
        document.getElementById('username-error').innerHTML = "Username error : maximum  characters is 10"
        return

    }
    let password = document.getElementById("password").value
    // console.log(password);

    if (password.length >= 8 && password.length <= 25) {
        console.log("veified password");
    } else if (password.length <= 8) {
        console.log("password Error : minimum 8 characters is requred ");
        document.getElementById('password-error').innerHTML = "password error : minimum 8 characters is requred "
        return

    } else {
        console.log("password Error : maximum characters is 25");
        document.getElementById('password-error').innerHTML = "password Error : maximum characters is 25"
        return

    }
    console.log("success");
    document.getElementById("success").innerHTML = "successfully log in"
    clearInputs()
    // window.location.href = "http://www.w3schools.com";
    // window.location.href = "https://www.instagram.com/"
    window.location.replace("/sign.html")


})
function clearInputs() {
    let inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}