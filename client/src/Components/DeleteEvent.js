import React from "react";
import { useState } from "react";

const DeleteEvent = ({ handleDeleteEvent }) => {
    const [deleteEvent, setDeleteEvent] = useState('');

    return (
        <div>
            <h3>Delete Event</h3>
            <form id="delete-event" action="#"
            onSubmit={(e) => {
                e.preventDefault();
                handleDeleteEvent(deleteEvent);
                setDeleteEvent('');
                }}
            >
                <fieldset>
                    <label>Event ID</label>
                    <input type="number" min="1" id="delete-event-id"
                    value={deleteEvent}
                    onChange={(e) => setDeleteEvent(e.target.value)} />
                </fieldset>
                <input type="submit" />
            </form>
        </div >
    )
}

export default DeleteEvent;
