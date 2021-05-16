import React from 'react';
import './TripMapDailyDisplaySection.css';
import TripEventsDisplaySection from '../TripEventsDisplaySection/TripEventsDisplaySection';

function TripMapDailyDisplaySection(props) {

    const dayLength = props.route.length;
    var origin = "&origin=";
    var destination = "&destination=";
    var wayPoints = "";

    var bool = false;

    for (var i = 0; i < dayLength; i++) {
        if (i === 0) {
            origin += props.route[i].location.lat + "," + props.route[i].location.lng;
        } else if (i === dayLength - 1) {
            destination += props.route[i].location.lat + "," + props.route[i].location.lng;
        } else {
            if(!bool){
                wayPoints += "&waypoints=";
                bool = true;
            }
            wayPoints += props.route[i].location.lat + "," + props.route[i].location.lng;
            if (i !== dayLength - 2) {
                wayPoints += "|";
            }
        }
    }
    console.log(props.route);

    return (
        <div className="container">
            <div>
                <TripEventsDisplaySection events={props.route} />
            </div>
            <div className="map-container">
                <iframe
                    title="map"
                    width="500"
                    height="500"
                    border="0"
                    src={"https://www.google.com/maps/embed/v1/directions?key=AIzaSyAM9uPSisu7fOO4ke6sZEm8cCgKOK-QXDc" + origin + wayPoints + destination + "&units=metric"} >
                </iframe>
            </div>
        </div>
    )
}

export default TripMapDailyDisplaySection;
