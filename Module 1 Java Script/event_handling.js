const events = [
  { name: "Music Concert", category: "Music", date: "2025-07-15", seats: 50 },
  { name: "Baking Workshop", category: "Cooking", date: "2025-06-20", seats: 25 },
  { name: "Jazz Night", category: "Music", date: "2025-07-30", seats: 0 },
];

const eventContainer = document.querySelector("#eventContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Reusable function to display events
function displayEvents(eventList) {
  eventContainer.innerHTML = "";
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
    registerBtn.disabled = event.seats === 0;
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

// Filter events by category on change
categoryFilter.onchange = () => {
  const selectedCategory = categoryFilter.value;
  let filteredEvents = events;

  if (selectedCategory !== "all") {
    filteredEvents = events.filter(event => event.category === selectedCategory);
  }

  // Apply search filter too
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredEvents = filteredEvents.filter(event =>
      event.name.toLowerCase().includes(searchTerm)
    );
  }

  displayEvents(filteredEvents);
};

// Quick search by name on keydown
searchInput.onkeydown = (e) => {
  // Use setTimeout to wait for input value to update
  setTimeout(() => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let filteredEvents = events;

    if (selectedCategory !== "all") {
      filteredEvents = events.filter(event => event.category === selectedCategory);
    }

    if (searchTerm) {
      filteredEvents = filteredEvents.filter(event =>
        event.name.toLowerCase().includes(searchTerm)
      );
    }

    displayEvents(filteredEvents);
  }, 0);
};

// Initial display
displayEvents(events);