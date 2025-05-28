// main.js
const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Capture inputs
  const name = form.elements['userName'].value.trim();
  const email = form.elements['userEmail'].value.trim();
  const selectedEvent = form.elements['eventSelect'].value;

  // Validate inputs
  if (!name || !email || !selectedEvent) {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  if (!validateEmail(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }
  errorMsg.textContent = ""; // Clear error
  
  // Process registration (e.g., send to backend or update UI)
  console.log(`Registering ${name} (${email}) for event ID ${selectedEvent}`);

  // Reset form after successful submission
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
