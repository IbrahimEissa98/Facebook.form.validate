function loginValidate() {
    var email = document.getElementById("EmailorPhone").value;
    var emailBorder = document.getElementById("EmailorPhone");
    var pass = document.getElementById("password").value;
    var passBorder = document.getElementById("password");
    var emailLoginError = document.getElementById("emailLoginError");
    var passLoginError = document.getElementById("passLoginError");

    if (email.length < 11 && pass.length < 8 ) {
        emailLoginError.style.visibility = "visible";
        emailBorder.style.border = "1px solid red";
        passLoginError.style.visibility = "visible";
        passBorder.style.border = "1px solid red";
        return false;
    } else if (email != "ibrahimqutb112@gmail.com" && email != "01098813635") {
        emailLoginError.style.visibility = "visible";
        emailBorder.style.border = "1px solid red";
        return false;
    } else if (pass != 12345678) {
        passLoginError.style.visibility = "visible";
        passBorder.style.border = "1px solid red";
        return false;
    } else {
        return true;
    }
}


function openCreatAccount() {
    document.getElementById("creatNewAccount").style.display = "block";
    document.getElementById("footer").style.display = "none";
}
function closeNewAccount() {
    document.getElementById("creatNewAccount").style.display = "none";
    document.getElementById("footer").style.display = "flex";
}

function newAccountValidate() {

    var firstName = document.getElementById("FirstName").value;
    var firstNameBorder = document.getElementById("FirstName");
    var firstName_signupError = document.getElementById("fnSignupError");
    var firstName_signupErrorInfo = document.getElementById("fnError-info");

    var surName = document.getElementById("Surname").value;
    var surNameBorder = document.getElementById("Surname");
    var surName_signupError = document.getElementById("snSignupError");
    var surName_signupErrorInfo = document.getElementById("snError-info");

    var email = document.getElementById("newEmail").value;
    var emailBorder = document.getElementById("newEmail");
    var email_signupError = document.getElementById("emailSignupError");
    var email_signupErrorInfo = document.getElementById("emailError-info");

    var newPass = document.getElementById("newpassword").value;
    var newPassBorder = document.getElementById("newpassword");
    var pass_signupError = document.getElementById("passSingupError");
    var pass_signupErrorInfo = document.getElementById("passError-info");

    var birthDay_signupError = document.getElementById("birthSingupError");
    var dayOfBirth = document.getElementById("Day").value;
    var dayOfBirth_Border =document.getElementById("Day");
    var monthOfBirth = document.getElementById("Month").value;
    var monthOfBirth_Border =document.getElementById("Month");
    var yearOfBirth = document.getElementById("Year").value;
    var yearOfBirth_Border =document.getElementById("Year");
    var birth_signupErrorInfo = document.getElementById("birthError-info");

    var male_Gender = document.getElementById("male");
    var male_Border = document.getElementById("gender-box1");
    var female_Gender = document.getElementById("female");
    var female_Border = document.getElementById("gender-box2");
    var custom_Gender = document.getElementById("custom");
    var custom_Border = document.getElementById("gender-box3");
    var gender_signupError = document.getElementById("genderSingupError");
    var gender_signupErrorInfo = document.getElementById("genderError-info");


    if (firstName.length < 3) {
        firstNameBorder.style.border = "1px solid red";
        firstName_signupError.style.visibility = "visible";
        firstName_signupErrorInfo.style.display = "block";
        return false;
    } else if (surName.length < 3) {
        surNameBorder.style.border = "1px solid red";
        surName_signupError.style.visibility = "visible";
        surName_signupErrorInfo.style.display = "block";
        return false;
    } else if ((email.indexOf("@") == -1 || email.indexOf(".") == -1) && email.length != 11) {
        emailBorder.style.border = "1px solid red";
        email_signupError.style.visibility = "visible";
        email_signupErrorInfo.style.display = "block";
        return false;
    } else if (newPass.length < 8) {
        newPassBorder.style.border = "1px solid red";
        pass_signupError.style.visibility = "visible";
        pass_signupErrorInfo.style.display = "block";
        return false;
    } else if (dayOfBirth == "0" || monthOfBirth == "notMonth" || yearOfBirth == "notYear") {
        dayOfBirth_Border.style.border = "1px solid red";
        birthDay_signupError.style.visibility = "visible";
        monthOfBirth_Border.style.border = "1px solid red";
        yearOfBirth_Border.style.border = "1px solid red";
        birth_signupErrorInfo.style.display = "block";
        return false;
    } else if ((male_Gender.checked == false) && (female_Gender.checked == false) && (custom_Gender.checked == false)) {
        gender_signupError.style.visibility = "visible";
        male_Border.style.border = "1px solid red";
        female_Border.style.border = "1px solid red";
        custom_Border.style.border = "1px solid red";
        gender_signupErrorInfo.style.display = "block";
        return false;
    }
    else {
        return true;
    }
}