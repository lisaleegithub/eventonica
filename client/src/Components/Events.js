import { useState } from "react";

// mock events
const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

const Events = () => {
    const [events, setEvents] = useState([event1, event2, event3]);
    
    return (
    <section className="event-management">
        <h2>Event Management</h2>
        <div>
            <h3>All Events</h3>

            <ul id="events-list">
                {events.map((event) => <li key={event.id}>{event.name} {event.date} {event.description}</li>)} 
            </ul>

            <h3>Add Event</h3>
            <form id="add-event" action="#">
                <fieldset>
                    <label>Name</label>
                    <input
                        type="text"
                        id="add-event-name"
                        placeholder="Virtual corgi meetup"
                    />
                </fieldset>

                <fieldset>
                    <label>ID</label>
                    <input
                        type="number"
                        id="add-event-number"
                        placeholder=""
                    />
                </fieldset>

                <fieldset>
                    <label>Date</label>
                    <input
                        type="date"
                        id="add-event-date"
                        placeholder="2/2/2022"
                    />
                </fieldset>

                <fieldset>
                    <label>Description</label>
                    <input
                        type="text"
                        id="add-event-description"
                        placeholder="Meet doggos!"
                    />
                </fieldset>

                <fieldset>
                    <label>Category</label>
                    <input
                        type="text"
                        id="add-event-category"
                        placeholder="Celebration"
                    />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
            </form>
        </div>
    </section>
    )
}

export default Events;