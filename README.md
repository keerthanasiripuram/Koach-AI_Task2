## Event Scheduler

Developed a daily scheduling application designed to manage events within a 24-hour day. The application uses a Scheduler class to track events and prevent any overlapping schedules, ensuring that each scheduled event has a unique time slot.
![Uploading image.png…]()

## Key Components

1. Scheduler Class: The backbone of the app, with an events member variable to store scheduled events, and two main methods:
addEvent({ start_time: number, end_time: number }): Boolean - Adds a new event if there’s no overlap; returns true if added, otherwise false.
getEvents(): { start_time: number, end_time: number }[] - Returns all scheduled events.

2. Event Representation: Events are represented by start_time and end_time, using whole numbers (0-23) for hours in a day, e.g., 9 for 9:00 AM, 17 for 5:00 PM.

3. Adding Events: The addEvent method checks for overlaps—adds the event if no overlap; otherwise, returns false.

4. Retrieving Events: The getEvents method returns all added events, providing access to the non-overlapping schedule.

5. User Interface: Simple UI for entering event times, displaying events visually, and validating inputs to prevent invalid or overlapping submissions.
