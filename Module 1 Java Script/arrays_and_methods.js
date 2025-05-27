// Manage an array of all community events
const events = [];

// Define the Event class (from previous exercise for context)
class Event {
  constructor(name, category, date, seats) {
    this.name = name;
    this.category = category;
    this.date = new Date(date);
    this.seats = seats;
  }
  
  checkAvailability() {
    return this.seats > 0 ? "Seats Available" : "Sold Out";
  }
}

// Task 1: Add new events using .push()
events.push(new Event("Music Concert", "Music", "2025-07-15", 50));
events.push(new Event("Baking Workshop", "Cooking", "2025-06-20", 25));
events.push(new Event("Jazz Night", "Music", "2025-07-30", 0)); // Sold out

// Task 2: Use .filter() to show only music events
const musicEvents = events.filter(event => event.category === "Music");

// Task 3: Use .map() to format display cards (e.g., "Workshop on Baking")
const eventCards = events.map(event => `${event.name} (${event.category})`);

// Output results to console
console.log("All Events:", events);
console.log("Music Events:", musicEvents);
console.log("Event Cards:", eventCards);
