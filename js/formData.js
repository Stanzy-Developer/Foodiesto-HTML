const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  /* 
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Perform any necessary validation */

  // Redirect to another page
  window.location.href = "EmailConfirmation.html";
});
