

let submit_form = document.getElementById("form");
submit_form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearerrorfeild()
    // console.log("hi");
    // get the user name ented by user
    let username = document.getElementById("username").value
    // console.log(username);
    // check wether the characters in usernameislessthan20
    if (username.length <= 20 && username.length >= 5) {
        console.log("verified username");

    } else if (username.length <= 5) {
        console.log("Username Error : minimum 5 characters is requred");
        document.getElementById('username-Error').innerHTML = "Username Error : minimum 5 characters is requred"
        return
    } else {
        console.log("Username Error : maximum character is 20");
        document.getElementById('username-Error').innerHTML = "Username Errocxazr : maximum  characters is 20"
        return

    }

    // verified password
    let password = document.getElementById("password").value
    // console.log(password);

    if (password.length >= 8 && password.length <= 25) {
        console.log("veified password");
    } else if (password.length <= 8) {
        console.log("password Error : minimum 8 characters is requred ");
        document.getElementById('password-Error').innerHTML = "password Error : minimum 8 characters is requred "
        return

    } else {
        console.log("password Error : maximum characters is 25");
        document.getElementById('password-Error').innerHTML = "password Error : maximum characters is 25"
        return

    }

    // verified email
    let email = document.getElementById("email").value
    // console.log(email);
    if (email.length >= 10 && email.length <= 30) {
        console.log("verified email");
    } else if (email.length <= 10) {
        console.log("email Error:minimum characters is requred");
        document.getElementById('email-Error').innerHTML = "email Error:minimum characters is requred"
        return

    } else {

        console.log("email Error:maximum characters is 30");
        document.getElementById('email-Error').innerHTML = "email Error:maximum characters is 30"
        return
    }



    // verified phone number
    let phonenumber = document.getElementById("phonenumber").value
    // console.log(phonenumber);
    if (phonenumber.length >= 10 && phonenumber.length <= 12) {
        console.log("verified");
    } else if (phonenumber.length <= 10) {
        console.log("phonenumber Error:minimum number is requred");
        document.getElementById('phonenumber-Error').innerHTML = "phonenumber Error:minimum number is requred"
        return

    } else {
        console.log("phonenumber Error:maximum number is 12");
        document.getElementById('phonenumber-Error').innerHTML = "phonenumber Error:maximum number is 12"
        return

    }
    console.log("success message");
    document.getElementById("success").innerHTML = "successfully created accound"
    clearinputs()
    window.location.replace("/instasign.html")

})
function clearerrorfeild() {
    // console.log(document.getElementsByTagName('p')[0].innerHTML);
    // document.getElementsByTagName('p')[0].innerHTML = ""
    let errors = document.getElementsByTagName('p')
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = ""
    }
}
function clearinputs() {
    let inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}

