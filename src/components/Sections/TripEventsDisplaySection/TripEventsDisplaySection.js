import React from 'react';
import TripEventDisplaySection from './TripEventDisplaySection';
import './TripEventsDisplaySection.css'

function TripEventsDisplaySection(props) {

    console.log("Trip Events Display Section");
    console.log(props.events);

    const events = [];

    for (var i = 0; i < props.events.length; i++) {
        events.push(i);
    }

    return (
        <div>
            {events.map((obj) => (
                <TripEventDisplaySection event={props.events[obj]}/>
            ))}

        </div>
    )
}

export default TripEventsDisplaySection;
