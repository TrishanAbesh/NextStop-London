// Form validation script
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10,15}$/;

  if (!name || !email || !phone || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return false;
  }

  if (!emailPattern.test(email)) {
    status.textContent = "Enter a valid email address.";
    status.style.color = "red";
    return false;
  }

  if (!phonePattern.test(phone)) {
    status.textContent = "Phone number must be 10 to 15 digits.";
    status.style.color = "red";
    return false;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  return true;
}
