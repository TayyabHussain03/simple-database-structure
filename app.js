var userName = document.getElementById("userName")
var userContact = document.getElementById("userNumber")
var userEmail = document.getElementById("userEmail")
var userPassword = document.getElementById("userPassword")

function signUp() {
    localStorage.setItem('Name', userName.value)
    localStorage.setItem('Contact', userNumber.value)
    localStorage.setItem('Email', userEmail.value)
    localStorage.setItem('Password', userPassword.value)
}

function logIn() {
    var email1 = document.getElementById("userEmail")
    var password1 = document.getElementById("userPassword")

    var email = localStorage.getItem("Email")
    var password = localStorage.getItem("Password")

    if (email == email1.value && password == password1.value) {
       window.location.href = "greeting.html"
    }
    else {
        alert("email or password incorrect")
    }
}