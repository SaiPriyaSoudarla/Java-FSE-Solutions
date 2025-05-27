// Syntax, Data Types, and Operators

// Define constant values for event name and date
const eventName = "Community Cleanup Drive";
const eventDate = "2025-06-10";

// Use let for mutable data (seats available)
let availableSeats = 25;

// Display event details using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Seats Available: ${availableSeats}`);

// Simulate registration: decrement seat count
function registerUser() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registration successful. Seats left: ${availableSeats}`);
  } else {
    console.log("Registration failed. No seats available.");
  }
}

// Example usage
registerUser();
registerUser();
