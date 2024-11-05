class Scheduler {
    constructor() {
      this.events = []; // Store all scheduled events as {start_time, end_time}
    }
  
    // Add an event if it doesn't overlap with existing events
    addEvent(newEvent) {
      for (let event of this.events) {
        // Check for overlap
        if (
          (newEvent.start_time < event.end_time && newEvent.end_time > event.start_time)
        ) {
          return false; // Overlap detected, don't add the event
        }
      }
      this.events.push(newEvent); // No overlap, add the event
      return true;
    }
  
    // Retrieve all scheduled events
    getEvents() {
      return this.events;
    }
  }
  
  module.exports = Scheduler;