// Event data
const events = [
  { name: "Art Workshop", category: "Art", seats: 10 },
  { name: "Music Night", category: "Music", seats: 5 },
  { name: "Coding Bootcamp", category: "Tech", seats: 8 },
];

// Function to add new event
function addEvent(name, category, seats) {
  events.push({ name, category, seats });
  console.log(`Added: ${name} in ${category} with ${seats} seats.`);
}

// Function to register user to event
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log("Cannot register. Event full or not found.");
  }
}

//  Closure to track total registrations per category
function createCategoryTracker() {
  const counts = {};

  return function (category) {
    counts[category] = (counts[category] || 0) + 1;
    console.log(`Total registrations in ${category}: ${counts[category]}`);
  };
}

const trackRegistration = createCategoryTracker();

// Higher-order function to filter events
function filterEvents(callback) {
  const filtered = events.filter(callback);
  console.log("Filtered Events:");
  filtered.forEach(e => console.log(`- ${e.name} (${e.category})`));
}

// Test Functions
addEvent("Dance Night", "Entertainment", 6);
registerUser("Music Night");
trackRegistration("Music");

filterEvents(event => event.category === "Tech");
