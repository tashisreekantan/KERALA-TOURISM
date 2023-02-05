function validateEmail() {
    let email = document.getElementById('email')
    let email_error = document.getElementById('email-error')
    let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (email.value.trim()=='') {
        email_error.innerHTML="Empty Field"
        return false
    }
    else if (!email.value.match(regex_email)) {
        email_error.innerHTML=" Invalid email"
        return false
    }
    else{
        email_error.innerHTML="<span>Valid email id</span>"
        return true
    }
}
function validatePassword(){
    let password=document.getElementById('password')
    let password_error=document.getElementById('password-error')
    let password_strength = document.getElementById('password-strength')
    let regex_password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[ ~`! @#$%^&*()_+={[}|\:;"'<,>.?]).{8,32}$/g
    if(password.value.trim()=='')
    {
        password_error.innerHTML="Empty Field"
        return false
    }else if (!password.value.match(regex_password)) {
        password_error.innerHTML="Invalid password"
        return false
    }else{

        password_error.innerHTML="<span>Valid Password</span>"
    if (password.value.length>7 && password.value.length<11) {
        password_strength.innerHTML = "<span1>Poor</span1>"
    }
    else if(password.value.length>10 && password.value.length<16  ){
        password_strength.innerHTML = "<span2>Medium</span2>"
    }
    else if(password.value.length>15){
        password_strength.innerHTML = "<span3>Strong</span3>"
    }
    else{
        password_strength.innerHTML = " "
    }
    return true
}
}

function validatePhone(){
    let phone = document.getElementById('phoneno')
    let phone_error = document.getElementById('phoneno-error')
    let phone_regex = /^\d{10}$/g
    let phone_regex1 = /^[1-9]\d{2}-\d{3}-\d{4}/g  
    let phone_regex2 = /^[1-9]\d{2}\.\d{3}\.\d{4}/g 
    let phone_regex3 = /^[1-9]\d{2}\s\d{3}\s\d{4}/g 


    if(phone.value.trim()==''){
        phone_error.innerHTML="Empty field"
        return false
    }else if(phone.value.match(phone_regex) || phone.value.match(phone_regex1) || phone.value.match(phone_regex2) || phone.value.match(phone_regex3)){
        phone_error.innerHTML="<span>Valid Phone No</span>"   
        return true
    }else{
        phone_error.innerHTML="Invalid"   
        return false
    }

}
function validateName(){
    let user = document.getElementById('username');
    let name_error = document.getElementById('name-error')
    console.log(user.value)
    if (user.value.trim() == '') {
        name_error.innerHTML = "Cannot be Blank"
        return false
    }
    else{
        name_error.innerHTML = "<span></span>"
        return true
    }
}
function validateConfirm(){
    let confirm = document.getElementById('confirm-password')
    let password_confirm = document.getElementById('password')
    let confirm_error = document.getElementById('confirm-error')
    if (confirm.value.trim() == '') {
        confirm_error.innerHTML = "Empty field"
        return false
    }
    else if (confirm.value != password_confirm.value) {
        confirm_error.innerHTML = "<span1>Not same as above</span1>"
        return false
    }else{
        confirm_error.innerHTML = "<span3>Same as above</span3>"
        return true
    }
}
function validateLname(){
    let last = document.getElementById('lname');
    let last_error = document.getElementById('last-error')
    console.log(last.value)
    if (last.value.trim() == '') {
        last_error.innerHTML = "Cannot be Blank"
        return false
    }
    else{
        last_error.innerHTML = "<span></span>"
        return true
    }
}
function validateForm(){
    if(!validateEmail() || !validatePassword() || !validateConfirm() || !validateLname() || !validateName()){
        return false
    }
    else{
        return true
    }
}