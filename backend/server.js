// server.js
const express = require('express');
const cors = require('cors')
const Scheduler = require('./Scheduler');

const app = express();
const scheduler = new Scheduler();

app.use(express.json());
app.use(cors())
// Endpoint to add an event
app.post('/add-event', (req, res) => {
    console.log("hey")
  const { start_time, end_time } = req.body;
  console.log(start_time,end_time)
  // Validate input
  if (
    typeof start_time !== 'number' ||
    typeof end_time !== 'number' ||
    start_time < 0 || end_time > 23 || start_time >= end_time
  ) {
    console.log("faie")
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  const success = scheduler.addEvent({ start_time, end_time });
  if (success) {
    console.log("succ")
    res.json({ success: true, message: 'Event added successfully' });
  } else {
    console.log("overlap")
    res.json({ success: false, message: 'Event overlaps with existing events' });
  }
});

// Endpoint to get all events
app.get('/events', (req, res) => {
    console.log(scheduler.getEvents())
  res.json({success:true,data:scheduler.getEvents()});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
