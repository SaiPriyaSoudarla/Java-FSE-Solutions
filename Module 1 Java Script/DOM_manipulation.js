// Sample events array (from previous exercise)
const events = [
  { name: "Music Concert", category: "Music", date: "2025-07-15", seats: 50 },
  { name: "Baking Workshop", category: "Cooking", date: "2025-06-20", seats: 25 },
  { name: "Jazz Night", category: "Music", date: "2025-07-30", seats: 0 },
];

// Task 1: Access DOM elements using querySelector()
const eventContainer = document.querySelector("#eventContainer");

// Task 2: Create and append event cards using createElement()
function displayEvents(eventList) {
  eventContainer.innerHTML = ""; // Clear existing events
  eventList.forEach(event => {
    const card = document.createElement("div");
    card.className = "eventCard";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Seats Available: ${event.seats}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0; // Disable if no seats
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        seats.textContent = `Seats Available: ${event.seats}`;
        alert(`Registered for ${event.name}`);
        if (event.seats === 0) registerBtn.disabled = true;
      }
    };

    card.append(title, category, date, seats, registerBtn);
    eventContainer.appendChild(card);
  });
}
// Task 3: Update UI when user registers or cancels 
// Initial display
displayEvents(events);
