// Example events array
const events = [
  { id: 1, name: "Music Concert", category: "music", date: "2025-06-10" },
  { id: 2, name: "Art Workshop", category: "art", date: "2025-07-05" },
];

// Use let and const, default parameters
function addEvent(eventList, newEvent = { id: 0, name: "Untitled", category: "general", date: "2025-01-01" }) {
  eventList.push(newEvent);
  console.log(`Added event: ${newEvent.name}`);
}

// Destructuring in function parameters
function displayEventDetails({ name, category, date }) {
  console.log(`Event: ${name} | Category: ${category} | Date: ${date}`);
}

// Spread operator to clone and filter events
function filterEventsByCategory(eventList, category) {
  const clonedEvents = [...eventList]; // clone array
  return clonedEvents.filter(event => event.category === category);
}

// Using the functions
addEvent(events, { id: 3, name: "Dance Festival", category: "dance", date: "2025-08-12" });

events.forEach(event => displayEventDetails(event));

const musicEvents = filterEventsByCategory(events, "music");
console.log("Music Events:", musicEvents);
