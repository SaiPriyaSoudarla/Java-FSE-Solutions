// Event class definition
class Event {
  constructor(title, date, seatsAvailable) {
    this.title = title;
    this.date = new Date(date);
    this.seatsAvailable = seatsAvailable;
  }
}

// Add checkAvailability method to prototype
Event.prototype.checkAvailability = function() {
  const today = new Date();
  if (this.date < today) {
    return 'Event has passed';
  }
  return this.seatsAvailable > 0 ? 'Seats available' : 'Fully booked';
};

// Create an event object
const event1 = new Event('Community Yoga Workshop', '2025-06-15', 10);

// Use the method
console.log(event1.checkAvailability()); // Seats available

// List object keys and values
console.log(Object.entries(event1));
// Output example:
// [ ['title', 'Community Yoga Workshop'], ['date', DateObject], ['seatsAvailable', 10] ]
