import React from 'react';
import CalendarCol from './CalendarCol';
import './TripCalendarDisplaySection.css';

function TripCalendarDisplaySection(props) {

    console.log("Trip Calendar Display Section");
    console.log(props.trip);

    const tripLength = props.trip.data.length;

    console.log(tripLength);

    const days = [];

    for (var i = 0; i < tripLength; i++) {
        days.push(i + 1);
    }

    return (
        <div className="calendar-container">
            {days.map((obj) => (
                <CalendarCol className="calendar-col" day={"Day " + (obj)} route={props.trip.data.route[obj]}/>
            ))}
        </div>
    )
}

export default TripCalendarDisplaySection;
