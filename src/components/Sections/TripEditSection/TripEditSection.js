import React from 'react';
import './TripEditSection.css';

function TripEditSection(props) {

    if(typeof props.eventsPool === 'undefined'){
        console.log("events pool undefined");
    }

    return (
        <div className="edit-container">
            <h1>Edit Section</h1>
            <div className="edit-container-body">

            </div>
        </div>
    )
}

export default TripEditSection;
