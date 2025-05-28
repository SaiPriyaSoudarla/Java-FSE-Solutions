const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.createElement('p');
form.appendChild(successMsg);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = form.elements['userName'].value.trim();
  const email = form.elements['userEmail'].value.trim();
  const selectedEvent = form.elements['eventSelect'].value;

  if (!name || !email || !selectedEvent) {
    errorMsg.textContent = "All fields are required.";
    successMsg.textContent = "";
    return;
  }

  if (!validateEmail(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    successMsg.textContent = "";
    return;
  }

  errorMsg.textContent = "";
  successMsg.textContent = "Submitting registration...";

  const userData = {
    name,
    email,
    eventId: selectedEvent
  };

  // delayed API call using setTimeout and fetch
  setTimeout(() => {
    fetch('https://mockapi.example.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      successMsg.style.color = 'green';
      successMsg.textContent = "Registration successful! Thank you.";
      form.reset();
    })
    .catch(error => {
      successMsg.style.color = 'red';
      successMsg.textContent = "Registration failed: " + error.message;
    });
  }, 1000);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
