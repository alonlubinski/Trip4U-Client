import React, { useState, useEffect } from 'react';
import './TripHistorySection.css';
import axios from 'axios';
import TripHistoryRow from './TripHistoryRow';
import { useHistory } from 'react-router-dom';



function TripHistorySection(props) {

    const [trip, setTrips] = useState([]);
    const trips = [];

    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:2222/trips/' + localStorage.getItem('email'))
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    for (var i = 0; i < response.data.length; i++) {
                        trips.push(response.data[i]);
                    }
                    setTrips(trips);
                }
            })
            .catch(function (error) {
                alert(error);
            });
    }, []);

    const handleWatchClick = (obj) => {
        console.log("Click Watch");
        console.log(obj)
        const tripData = {
            categories: obj.categories,
            dayLoad: obj.dayLoad,
            startDate: obj.startDate,
            endDate: obj.endDate,
            startLocation: obj.startLocation,
            endLocation: obj.endLocation,
            route: obj.route,
            length: obj.length
        }
        history.push({
            pathname: '/trip',
            state: { data: tripData }
        });
    }

    const handleDeleteClick = (obj) => {
        
        console.log("Click Delete");
        console.log(obj)
        const data = {
            "type": "DELETE",
            "invokeBy": localStorage.getItem('email'),
            "elementId": obj.tripId
        }
        axios
            .post('http://localhost:2222/actions/', data)
            .then(function (response) {
                if (response.status === 200) {
                    const newArr = trip.filter(item => item.tripId !== obj.tripId);
                    setTrips(newArr);
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
            });

    }


    return (
        <div className="history-container">
            {trip.map((obj) => (
                <TripHistoryRow trip={obj} watch={() => handleWatchClick(obj)} delete={() => handleDeleteClick(obj)} />
            ))}
        </div>
    )
}

export default TripHistorySection;
