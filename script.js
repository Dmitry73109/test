$(document).ready(function() {

    $("#flipToLogin").on("click", function(e) {
      e.preventDefault();
      $("#flipContainer").addClass("flipped");
    });
  
    $("#flipToRegister").on("click", function(e) {
      e.preventDefault();
      $("#flipContainer").removeClass("flipped");
    });
  
    $("#loginButton").on('click', function(e) {
        e.preventDefault();
      
        let password = $("#login-password").val();
        let email = $("#login-email").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (password.length >= 8 && emailRegex.test(email)) {
          Swal.fire("Done!", "U did it!", "success");
        } else {
          Swal.fire("Hmmm, no", "password|email wrong!", "error");
        }
      });
      
  
    $("#submitButton").on('click', function(e) {
      e.preventDefault();
  
      let password = $("#password").val();
      let confirmPassword = $("#confirm-password").val();
      let email = $("#email").val();
      let hasSymbol = /[!@#$%^&*()_+{}\[\]:;"'<>,.?\\\/|-]/.test(password);
      let name = $("#username").val();

      if(/[0-9]/.test(name)){
        Swal.fire("Hmmm, no", "name wrong!", "error");
        return;
      }else if(/[!@#$%^&*()_+{}\[\]:;"'<>,.?\\\/|-]/.test(name)){
        Swal.fire("Hmmm, no", "name wrong!", "error");
        return;
      }
  
      if (password !== confirmPassword) {
        Swal.fire("Hmmm, no", "Passwords do not match!", "error");
      } else if (hasSymbol && password.length >= 8 && email.includes("@")) {
        Swal.fire("Done!", "U did it!", "success");
      } else {
        Swal.fire("Hmmm, no", "password|name wrong!", "error");
      }
    });

    $("#showPasswords").on("change", function () {
        const type = $(this).is(":checked") ? "text" : "password";
        $("#password, #confirm-password").attr("type", type);
      });
    
      $("#showLoginPassword").on("change", function () {
        const type = $(this).is(":checked") ? "text" : "password";
        $("#login-password").attr("type", type);
      });
      
  
  });
  