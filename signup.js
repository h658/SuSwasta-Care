const displayMsg = (msg, idname, colorname) => {
    document.getElementById(idname).innerHTML = msg
    document.getElementById(idname).style.color = colorname
}


const fnameValidate = () => {

    let fname = document.getElementById('fName').value

    if (fname == '') {
        displayMsg('First name is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!fname.match(/^[a-zA-Z]+$/)) {
        displayMsg('First name should be an alphabet', 'fnameMsg', 'red')
        return false
    }
    else if (fname.length < 4) {
        displayMsg('First name should be more than three characters', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('First name is valid', 'fnameMsg', 'green')
        return true
    }

}

const lnameValidate = () =>{
    let lname = document.getElementById('lName').value

    if(lname==''){
        displayMsg('Last name is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if (!lname.match(/^[a-zA-Z]+$/)) {
        displayMsg('First name should be an alphabet', 'lnameMsg', 'red')
        return false
    }
    else if(lname.length < 3){
        displayMsg('Last name should be more than three characters', 'lnameMsg', 'red')
        return false
    }
    else{
        displayMsg('Last Name is Valid!', 'lnameMsg', 'green')
        return true
    }
}

const emailValidate = () =>{
    let email = document.getElementById('email').value

    if (email == '') {
       displayMsg('Email is mandatory', 'emailMsg', 'red')
       return false
   }
   else if(!email.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/)){
        displayMsg('Invalid email address! <br> Example: ram222@gmail.com','emailMsg','red')
        return false
    }
    else{
        displayMsg('Valid email address!','emailMsg','green')
        return true
    }
}

const pwdValidate = () =>{
    let pwd = document.getElementById('password').value

    if (pwd == '') {
        displayMsg('Password is mandatory', 'pwdMsg', 'red')
        return false
    }
   else if(!pwd.match( /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$*!?]).{6,}$/)){
        displayMsg('Invalid password! <br> Example: ramrijal#123','pwdMsg','red')
        return false
    }
    else{
        displayMsg('Valid Password!','pwdMsg','green')
        return true
    }
}

const cpwdValidate = () =>{
    let oldpwd= document.getElementById('password').value
    let cpwd = document.getElementById('confirmpassword').value
   if(cpwd==''){
    displayMsg('Confirm your password','cpwdMsg','red')
    return false
   }
    if(cpwd===oldpwd){
        displayMsg('Password Confirmed!','cpwdMsg','green')
        return true
    }
    else {
        displayMsg('Please reconfirm your password','cpwdMsg','red')
        return false
    }
}


const handleSubmit = (event) => {

    event.preventDefault();

    if (fnameValidate()&& lnameValidate()&&emailValidate()&&pwdValidate()&&cpwdValidate()) {
        alert("Form submitted successfully!");
        document.getElementById('signupForm').reset();
       
          
            displayMsg('', 'fnameMsg', '');  
            displayMsg('', 'lnameMsg', '');  
            displayMsg('', 'emailMsg', '');  
            displayMsg('', 'pwdMsg', '');    
            displayMsg('', 'cpwdMsg', '');
        
        return true
    }
    else {
        return false
    }

}


// email ma no length password ma already sir le rakhdinu vhaca