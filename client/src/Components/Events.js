import React, { useState, useReducer } from "react";
import DeleteEvent from "./DeleteEvent";

// create an initial state for the form reducer
const initialState = {
    id: '',
    name: '',
    date: null,
    description: '',
    category: ''
    };

// reducer function - console logs for debugging
// what we can do our state is the cases edit___
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'editId':
            return { ...state, id: action.payload };
        case 'editName':
            console.log('Logged if the editName action is being dispatched');
            return { ...state, name: action.payload };
        case 'editDate':
            return { ...state, date: action.payload };
        case 'editDescription':
            return { ...state, description: action.payload };
        case 'editCategory':
            return { ...state, category: action.payload };
        default:
            // return current state
            return state;
    }
};

const Events = () => {
    // create events state and initialize with mock events
    const [events, setEvents] = useState([]);
    // initialize the reducer that will store and update the form data
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddEvent = (e) => {
        e.preventDefault();
        setEvents([...events, state]);
        // console.log(state);
        }
    
    // delete the event object with the id from the events list
    const handleDeleteEvent = (deleteEvent) => {
        const deleteEvents = events.filter((event) => event.id !== deleteEvent);
        // console.log(deleteEvents);
        setEvents(deleteEvents);
    };

    return (
    <section className="event-management">
        <h2>Event Management</h2>
        <div>
            <h3>All Events</h3>

            <ul id="events-list">
                {events.map((event, index) => <li key={index}> Event ID: {event.id} <br/> {event.name} :  {event.description} <br/> Date: {event.date} <br/> Category: {event.category}</li>)} 
            </ul>

            <h3>Add Event</h3>

            <form id="add-event" action="#"
            onSubmit={handleAddEvent} >
                <fieldset>
                    <label>ID</label>
                    <input
                        type="number"
                        id="add-event-id"
                        placeholder=""
                        value={state.id}
                        onChange={(e) =>
                            dispatch({
                                type: 'editId',
                                payload: e.target.value
                            })
                        }
                    />
                </fieldset>

                <fieldset>
                    <label>Name</label>
                    <input
                        type="text"
                        id="add-event-name"
                        placeholder="Virtual corgi meetup"
                        value={state.name}
                        // when input changed, it will dispatch the "editName" action
                        // the payload(data) of this info will be the input field value
                        // the reducer will "read" and know to update state.name
                        onChange={(e) =>
                            dispatch({
                                type: 'editName',
                                payload: e.target.value
                            })
                        }
                />
                </fieldset>

                <fieldset>
                    <label>Date</label>
                    <input
                        type="date"
                        id="add-event-date"
                        placeholder="2/2/2022"
                        value={state.date}
                        onChange={(e) =>
                            dispatch({
                                type: 'editDate',
                                payload: e.target.value
                            })
                        }
                    />
                </fieldset>

                <fieldset>
                    <label>Description</label>
                    <input
                        type="text"
                        id="add-event-description"
                        placeholder="Meet doggos!"
                        value={state.description}
                        onChange={(e) =>
                            dispatch({
                                type: 'editDescription',
                                payload: e.target.value
                            })
                        }
                    />
                </fieldset>

                <fieldset>
                    <label>Category</label>
                    <input
                        type="text"
                        id="add-event-category"
                        placeholder="Celebration"
                        value={state.category}
                        onChange={(e) =>
                            dispatch({
                                type: 'editCategory',
                                payload: e.target.value
                            })
                        }
                    />
                </fieldset>

                <input type="submit" />
            </form>
        </div>
        <DeleteEvent handleDeleteEvent={handleDeleteEvent} />
    </section>
    )
}

export default Events;