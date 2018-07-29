/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
var form = document.querySelector('#registration-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Submited button pressed"); 
})

//USERNAME
var username = document.querySelector('.field--username input');
var usernameText = username.value;

//PASSWORD
var password = document.querySelector('.field--password input');
var passwordText =  password.value;

//CONFIRM PASSWORD
var confirmPass = document.querySelector()