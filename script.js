$(document).ready(function () {
    $("#flipToLogin").on("click", function (e) {
      e.preventDefault();
      $("#flipContainer").addClass("flipped");
    });
  
    $("#flipToRegister").on("click", function (e) {
      e.preventDefault();
      $("#flipContainer").removeClass("flipped");
    });
  
    function highlightError(selector) {
      $(selector).addClass("is-invalid");
      $(selector).one("focus", function () {
        $(this).removeClass("is-invalid");
      });
    }
  
    $("#loginButton").on("click", function (e) {
      e.preventDefault();
  
      let password = $("#login-password").val();
      let email = $("#login-email").val();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(email)) {
        highlightError("#login-email");
        Swal.fire("Hmmm, no", "email is wrong", "error");
      } else {
        if  (password.length >= 8 && emailRegex.test(email)) {
        Swal.fire("Done!", "U did it!", "success");
        }
        if (password.length < 8) {
          highlightError("#login-password");
          Swal.fire("Hmmm, no", "password is small", "error");
        }
      }
    });
  
    $("#submitButton").on("click", function (e) {
      e.preventDefault();
  
      let password = $("#password").val();
      let confirmPassword = $("#confirm-password").val();
      let email = $("#email").val();
      let name = $("#username").val();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let hasSymbol = /[!@#$%^&*()_+{}\[\]:;"'<>,.?\\\/|-]/.test(password);
  
      if (/\d/.test(name)) {
        highlightError("#username");
        Swal.fire("Hmmm, no", "no numbers in name pls!", "error");
        return;
      } else if (/[!@#$%^&*()_+{}\[\]:;"'<>,.?\\\/|-]/.test(name)) {
        highlightError("#username");
        Swal.fire("Hmmm, no", "no symbols in name pls!", "error");
        return;
      }
  
      if (password !== confirmPassword) {
        highlightError("#password");
        highlightError("#confirm-password");
        Swal.fire("Hmmm, no", "Passwords do not match!", "error");
      } else if (!emailRegex.test(email)) {
        highlightError("#email");
        Swal.fire("Hmmm, no", "email is wrong! try email@mail.com", "error");
      } else if (hasSymbol && password.length >= 8) {
        Swal.fire("Done!", "U did it!", "success");
      } else {
        highlightError("#password");
        Swal.fire("Hmmm, no", "password length should be 8", "error");
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
  