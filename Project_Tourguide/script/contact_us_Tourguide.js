function validateForm() {
    // Retrieve the input fields from the HTML document
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var birthday = document.getElementById("birthday");

    // Regular expressions for validating the input values
    const nameRegex = new RegExp("[A-Za-z\\s]+");
    const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    const telRegex = new RegExp("^\\d{10}$");
    const birthdayRegex = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");
    
    // Error message variable to keep track of any invalid inputs
    var errorMessage = "";

    // Check if the first name field is empty or has invalid characters
    if(fname.value == "" || fname.value == null){
        errorMessage += "Please fill out your first name.\n";
    } else if(!nameRegex.test(fname.value)){
        errorMessage += "Invalid form for your first name.\n";
    }

    // Check if the last name field is empty or has invalid characters
    if(lname.value == "" || lname.value == null){
        errorMessage += "Please fill out your last name.\n";
    } else if(!nameRegex.test(lname.value)){
        errorMessage += "Invalid form for your last name.\n";
    }

    // Check if the email field is empty or has an invalid format
    if(email.value == "" || email.value == null){
        errorMessage += "Please fill out your email address.\n";
    } else if(!emailRegex.test(email.value)){
        errorMessage += "Invalid form for email address.\n";
    }

    // Check if the telephone number field is empty or has an invalid format
    if(tel.value == "" || tel.value == null){
        errorMessage += "Please fill out your telephone number.\n";
    } else if(!telRegex.test(tel.value)){
        errorMessage += "Invalid form for your telephone number.\n";
    }

    // Check if the birthday field is empty or has an invalid format
    if(birthday.value == "" || birthday.value == null){
        errorMessage += "Please fill out your birthday details.\n";
    } else if(!birthdayRegex.test(birthday.value)){
        errorMessage += "Invalid form for your birthday details.\n";
    }

    // If there is an error message, display it to the user
    if(errorMessage != "")
        alert(errorMessage);
    else // Otherwise, show the popup
        showPopup();
}

// Function to display the popup
function showPopup(){
    document.getElementById("popup-container").style.display = 'flex';
}

// Function to hide the popup
function hidePopup(){
    document.getElementById("popup-container").style.display = 'none';
}