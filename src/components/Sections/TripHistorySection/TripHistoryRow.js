import { Card, Button } from '@material-ui/core';
import React from 'react';
import './TripHistoryRow.css';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#a8a8a833',
        border: '1px solid #000000',
        padding: '20px 20px',
        margin: '10px 10px'
    }
}));

function TripHistoryRow(props) {

    const classes = useStyles();

    return (
        <div className="row-container">
            <Card className={classes.root}>
                <div className="row-details">
                    <p>Trip {props.trip.tripId}</p>
                    <p>Origin: {props.trip.startLocation}</p>
                    <p>Destination: {props.trip.endLocation}</p>
                    <p>Start Date: {props.trip.startDate}</p>
                    <p>End Date: {props.trip.endDate}</p>
                </div>
                <div className="row-btns">
                    <Button className="row-btn" variant="contained" color="primary" startIcon={<VisibilityIcon/>} onClick={props.watch}>Watch</Button>
                    <Button className="row-btn" variant="contained" color="secondary" startIcon={<DeleteIcon/>} onClick={props.delete}>Delete</Button>
                </div>
            </Card>
        </div>
    )
}

export default TripHistoryRow;
