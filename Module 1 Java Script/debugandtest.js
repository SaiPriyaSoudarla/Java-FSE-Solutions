console.log("Submitting registration with data:", userData);

fetch('https://mockapi.example.com/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userData)
})
.then(response => {
  console.log("Fetch response status:", response.status);
  if (!response.ok) throw new Error('Network response not OK');
  return response.json();
})
.then(data => {
  console.log("Registration success data:", data);
  // success handling...
})
.catch(error => {
  console.error("Fetch error:", error);
  // error handling...
});
