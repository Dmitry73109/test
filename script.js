$(document).ready(function(){

})

$("#submitButton").on('click', function(e){
e.preventDefault();

let password = $("#password").val();
let email = $("#email").val();
let hasSymbol = /[!@#$%^&*()_+{}\[\]:;"'<>,.?\\\/|-]/.test(password);

if(hasSymbol && password.length>=8 && email.includes("@")){
alert("ok");
}else{
alert("not ok");
}

})

