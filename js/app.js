const registrationForm = document.getElementById("registrationForm");

const studentName = document.getElementById("studentName");
const studentNumber = document.getElementById("studentNumber");

const email = document.getElementById("email");
const terms = document.getElementById("terms");


const nameError = document.getElementById("nameError");
const studentNumberError = document.getElementById("studentNumberError");

const emailError = document.getElementById("emailError");
const workshopError = document.getElementById("workshopError");
const termsError = document.getElementById("termsError");
const clearBtn = document.getElementById("clearBtn");

const registrationResult = document.getElementById("registrationResult");
const summaryName = document.getElementById("summaryName");
const summaryStudentNumber = document.getElementById("summaryStudentNumber");
const summaryEmail = document.getElementById("summaryEmail");
const summaryWorkshop = document.getElementById("summaryWorkshop");

function showError(input,errorElement, message){
    const 
}



function isValidStudentName(value){
    const value = studentName.value.trim() >= 3;
    if(! === ""){
        nameError.textContent = "Enter Your Name";
        return false;
    }
    
}

function ValidStudentEmail(value){
    const value = studentName.value.trim() >= 3;
    if(! === ""){
        nameError.textContent = "Enter Your Name";
        return false;
    }
    
}

function isValidStudentName(value){
    const value = studentName.value.trim() >= 3;
    if(! === ""){
        nameError.textContent = "Enter Your Name";
        return false;
    }
    
}



function validateStudentInfo(name, studentNumber, email){
    const name = studentName.value.trim();

    if(name)

}


