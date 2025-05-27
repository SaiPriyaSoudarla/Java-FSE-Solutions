// Conditionals, Loops, and Error Handling

// Sample list of events
const events = [
  { name: "Art Workshop", date: "2025-06-15", seats: 10 },
  { name: "Yoga Session", date: "2024-12-01", seats: 0 },
  { name: "Music Night", date: "2025-07-20", seats: 5 },
];

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

function displayValidEvents(eventList) {
  console.log("Upcoming Available Events:");

  eventList.forEach((event) => {
    if (event.date >= today && event.seats > 0) {
      console.log(`- ${event.name} on ${event.date} (Seats: ${event.seats})`);
    }
  });
}

function registerToEvent(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found.");
    if (event.date < today) throw new Error("Event already occurred.");
    if (event.seats === 0) throw new Error("No seats available.");
    
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (err) {
    console.error("Registration Error:", err.message);
  }
}

// Usage
displayValidEvents(events);
registerToEvent("Music Night");
registerToEvent("Yoga Session");
