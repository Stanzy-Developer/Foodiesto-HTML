const passwordInput = document.getElementById("passwordInput");
const passwordStrength = document.getElementById("passwordStrength");
const passwordTypes = document.querySelectorAll(".passwordType");

// Check the criteria for each strength level
const veryWeakRegex = /^.{0,5}$/; // 1 to 5 characters
const weakRegex = /^(?=.*[a-z]).{6,10}$/; // 6 to 10 lowercase letters
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 1 lowercase, 1 uppercase, 1 number, and 8 or more characters
const veryStrongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/; // At least 1 lowercase, 1 uppercase, 1 number, 1 special character, and 10 or more characters

function checkPasswordStrength() {
  const password = passwordInput.value;

  if (veryStrongRegex.test(password)) {
    passwordStrength.src = "../images/veryStrong.svg";
    setPasswordTypeInfo("Very Strong", "[#61AD32]");
  } else if (strongRegex.test(password)) {
    passwordStrength.src = "../images/strong.svg";
    setPasswordTypeInfo("Strong", "[#61AD32]");
  } else if (weakRegex.test(password)) {
    passwordStrength.src = "../images/weak.svg";
    setPasswordTypeInfo("Weak", "red-500");
  } else if (veryWeakRegex.test(password)) {
    passwordStrength.src = "../images/veryWeak.svg";
    setPasswordTypeInfo("Very Weak", "red-500");
  } else {
    setPasswordTypeInfo("Very Weak", "red-500");
  }
}

function setPasswordTypeInfo(type, color) {
  passwordTypes.forEach((passwordType) => {
    passwordType.innerHTML = type;
    passwordType.classList.remove("text-[#61AD32]", "text-red-500");
    passwordType.classList.add(`text-${color}`);
  });
}

passwordInput.addEventListener("input", checkPasswordStrength);
