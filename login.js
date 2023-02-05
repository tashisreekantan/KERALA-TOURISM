
function validateMail(){
    let email = document.getElementById('email')
    let email_error = document.getElementById('email-error')
    let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(email.value.trim()==''){
        email_error.innerHTML="Please Enter Your Email ID"
        return false
    }
    else if (!email.value.match(regex_email)) {
        email_error.innerHTML="Invalid email"
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
        if(password.value.trim()=='')
        {
            password_error.innerHTML="Please Enter your password"
            return false
        }else{
    
            password_error.innerHTML="<span></span>"
            return true
        }
 }        
 function validateForms(){
    if(!validatePassword() || !validateMail()){
        return false
        
    } else {
        return true
    }
}