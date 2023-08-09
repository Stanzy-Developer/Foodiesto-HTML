const password = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
function togglePasswordVisibility() {
  if (password.type === "password") {
    password.type = "text";
    toggleBtn.src = "../assets/hide.svg";
  } else {
    password.type = "password";
    toggleBtn.src = "../assets/show.svg";
  }
}
toggleBtn.addEventListener("click", togglePasswordVisibility);
