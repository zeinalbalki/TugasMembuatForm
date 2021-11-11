// Mengubah posisi ketika di enter
var enterNama = document.getElementById("nama");
var enterEmail = document.getElementById("email");
var enterPassword = document.getElementById("password");

enterNama.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("email").focus();
  }
});
enterEmail.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("password").focus();
  }
});
enterPassword.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("retypePassword").focus();
  }
});
