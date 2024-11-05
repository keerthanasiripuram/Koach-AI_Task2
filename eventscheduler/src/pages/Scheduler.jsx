import React, { useState, useEffect } from 'react'
import axios from "axios"
import { message } from "antd"
import styles from './Scheduler.module.css'
export default function Scheduler() {

    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    //event handlers
    const fetchEvents = async () => { // display events logic
        try {
            const response = await axios.get('http://localhost:3000/events')
            if (response.data.success) {
                setEvents(response.data.data)
            }
        }
        catch (err) {
            message.error(err);
        }
    }

    const handleSubmit = async (e) => //submit event logic
    {
        e.preventDefault()
        //client side validations
        if (start >= end || start < 0 || end > 24) {
            console.log("Invalid input")
            message.error('Invalid Input');
            return
        }
        try {
            const response = await axios.post('http://localhost:3000/add-event',
                {
                    "start_time": parseInt(start, 10),
                    "end_time": parseInt(end, 10)
                }
            )
            if (response.data.success) {

                //clean up
                message.success('Event added successfully');
                fetchEvents()
                setStart('')
                setEnd('')
            }
        }
        catch (err) {
            message.error('Error adding event');
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.inputContainer}>
                <h1>Event Scheduler</h1>
                <form onSubmit={handleSubmit} className={styles.formStyles}>
                    <div className={styles.startTime}>
                        <label>
                            <span className={styles.text}>Start Time: (0-22)</span>
                        </label>
                        <input type="number" min="0" max="22" className={styles.input} value={start} onChange={(e) => setStart(e.target.value)} required />
                    </div>
                    <div className={styles.startTime}>
                        <label>
                            <p className={styles.text}>End Time: (1-23)</p>
                        </label>
                        <input type="number" min="1" max="23" className={styles.input} value={end} onChange={(e) => setEnd(e.target.value)} required />
                    </div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </div>
            {/* Displaying the events */}
            <div className={styles.outputContainer}>
                <h1>Scheduled Events</h1>
                <div>
                    {events.map((event, index) =>
                    (
                        <p className={styles.text} key={index}>{event.start_time}:00 - {event.end_time}:00</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
