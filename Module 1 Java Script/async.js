const API_URL = "https://jsonplaceholder.typicode.com/posts"; 

const eventContainer = document.querySelector("#eventContainer");
const loadingSpinner = document.querySelector("#loadingSpinner");

// Show loading spinner
function showLoading() {
  loadingSpinner.style.display = "block";
}

// Hide loading spinner
function hideLoading() {
  loadingSpinner.style.display = "none";
}

// Fetch events using Promises 
function fetchEventsPromise() {
  showLoading();
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      hideLoading();
      displayEvents(data.slice(0, 5)); 
    })
    .catch(error => {
      hideLoading();
      console.error("Fetch error:", error);
      eventContainer.textContent = "Failed to load events.";
    });
}

// Fetch events using async/await
async function fetchEventsAsync() {
  showLoading();
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    hideLoading();
    displayEvents(data.slice(0, 5));
  } catch (error) {
    hideLoading();
    console.error("Fetch error:", error);
    eventContainer.textContent = "Failed to load events.";
  }
}
function displayEvents(events) {
  eventContainer.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.innerHTML = `
      <h3>${event.title || event.name}</h3>
      <p>${event.body || "No description available"}</p>
    `;
    eventContainer.appendChild(card);
  });
}
