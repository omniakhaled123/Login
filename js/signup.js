let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputpass = document.getElementById('inputpass');
let signUpBtn = document.getElementById('signUpBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}


function signUp() {
    let data = {
        userName: inputName.value,
        email: inputEmail.value,
        passwrod: inputpass.value
    }
    if (checkInputsEmpty() == true) {
        //alert message
        getAlertMessage('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlertMessage('Email Already Exist', 'red');
        }
        else
        {
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer));
            clrFrorm();
            getAlertMessage('Success', 'green');
        }
    }
    // console.log(userContainer);
}
function getAlertMessage(text, color) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}
function clrFrorm() {
    inputName.value = '';
    inputEmail.value = '';
    inputpass.value = '';
}
function checkInputsEmpty() {
    if (inputName.value == '' || inputEmail.value == '' || inputpass.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == inputEmail.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)

