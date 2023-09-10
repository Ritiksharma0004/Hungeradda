
function open() {
    document.getElementById("login-form").style.visibility = "visible";
}

function Close() {
    document.getElementById("login-form").style.visibility = "hidden";
}

var emptEmail = document.getElementById("name").value; 
var emptPassword = document.getElementById("pasword").value;
// var emptPassword = document00.
// let text =document.getElementById("#tt");

function ale() {
    // if (emptEmail == "")  
    // {  
    //     alert("Please enter your email first");  
    //     return false;  
    // } 

    // if (emptPassword == " "){
    //     alert("Enter Password");
    //     return false;
    // }

    if(emptPassword.length < 7){
        alert("Password must be 8 character long")
    }
}