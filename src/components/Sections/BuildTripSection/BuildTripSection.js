import React, { useState } from 'react';
import './BuildTripSection.css';
import { Button, Card, CssBaseline, makeStyles, Grid, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl, FormGroup, Checkbox, CircularProgress } from '@material-ui/core';
import LocationField from '../../LocationField/LocationField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        padding: 50,
        width: '600px',
        opacity: '80%',
    }
}));

function BuildTripSection(props) {

    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [state, setState] = useState({
        startPoint: '',
        endPoint: '',
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000)),
        minDate: new Date().getTime() + (1 * 24 * 60 * 60 * 1000),
        maxDate: new Date().getTime() + (6 * 24 * 60 * 60 * 1000),
        dayLoad: '',
        interests: []
    });
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    const history = useHistory();

    const handleStartPointSelect = (value) => {
        if (value !== null) {
            setStartLocation(value.properties.lat + "," + value.properties.lon);
        }
    }

    const handleEndPointSelect = (value) => {
        if (value !== null) {
            setEndLocation(value.properties.lat + "," + value.properties.lon);
        }
    }

    const handleDateChange = (target, date) => {
        if (target === 'start') {
            setState({ ...state, startDate: date, maxDate: date.getTime() + (6 * 24 * 60 * 60 * 1000), minDate: date.getTime() + (1 * 24 * 60 * 60 * 1000) });
        }
        else if (target === 'end') {
            setState({ ...state, endDate: date });
        }
    }

    const handleDayLoad = (e) => {
        setState({ ...state, dayLoad: e.target.value });
    };

    const handleInterests = (e) => {
        let newArray = [...state.interests, e.target.name.toLowerCase()];
        if (state.interests.includes(e.target.name.toLowerCase())) {
            newArray = newArray.filter(interest => interest !== e.target.name.toLowerCase());
        }
        setState({
            ...state,
            interests: newArray
        });
    }

    const handleBuildMyTrip = () => {
        if (startLocation === '') {
            alert("Please enter start location");
        } else if (endLocation === '') {
            alert("Please enter end location");
        } else if (state.dayLoad === '') {
            alert("Please select dayload");
        } else if (state.interests.length < 2) {
            alert("Please select at least one interest");
        } else {
            setLoading(true);
            const startDate = (state.startDate.getUTCMonth() + 1) + "/" + state.startDate.getUTCDate() + "/" + state.startDate.getFullYear();
            const endDate = (state.endDate.getUTCMonth() + 1) + "/" + state.endDate.getUTCDate() + "/" + state.endDate.getFullYear();
            const data = {
                "type": "GENERATE",
                "moreDetails": {
                    "trip": {
                        "startDate": startDate,
                        "endDate": endDate,
                        "categories": state.interests,
                        "dayLoad": state.dayLoad.toUpperCase(),
                        "startLocation": startLocation,
                        "endLocation": endLocation
                    }
                },
                "invokeBy": localStorage.getItem('email')
            }
            console.log(data);
            axios
                .post('http://localhost:2222/actions/', data)
                .then(function (response) {
                    if (response.status === 200) {
                        alert("Success");
                        console.log(response.data.trip);
                        setLoading(false);
                        const tripData = {
                            categories: response.data.trip.categories,
                            dayLoad: response.data.trip.dayLoad,
                            startDate: response.data.trip.startDate,
                            endDate: response.data.trip.endDate,
                            startLocation: response.data.trip.startLocation,
                            endLocation: response.data.trip.endLocation,
                            route: response.data.trip.route,
                            length: response.data.trip.length
                        }
                        history.push({
                            pathname: '/trip',
                            state: { data: tripData }
                        });
                    } else {

                    }
                })
                .catch(function (error) {
                    setLoading(false);
                    alert(error.response.data.message);
                });
        }

    }

    let content = loading ? <div className="loading-container"><div className="loading-body"><CircularProgress className="loading-circular"/><h1>Building your trip, please wait...</h1></div></div> : <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.container}>
            <CssBaseline />
            <div className="building-container">
                <form>
                    <Card variant="outlined" className={classes.card} spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <LocationField placeholder="Enter start point" placeSelect={handleStartPointSelect} />
                            </Grid>
                            <Grid item xs={12}>
                                <LocationField placeholder="Enter end point" placeSelect={handleEndPointSelect} />
                            </Grid>
                            <Grid item xs={12}>
                                <KeyboardDatePicker autoOk disablePast variant="inline" inputVariant="outlined" label="Start Date" format="dd/MM/yyyy" value={state.startDate} onChange={date => handleDateChange('start', date)} />
                            </Grid>
                            <Grid item xs={12}>
                                <KeyboardDatePicker autoOk variant="inline" inputVariant="outlined" label="End Date" format="dd/MM/yyyy" value={state.endDate} minDate={state.minDate} maxDate={state.maxDate} onChange={date => handleDateChange('end', date)} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel>DayLoad</FormLabel>
                                    <RadioGroup row value={state.dayLoad} onChange={handleDayLoad}>
                                        <FormControlLabel value="Calm" control={<Radio color="primary" />} label="Calm" />
                                        <FormControlLabel value="Moderate" control={<Radio color="primary" />} label="Moderate" />
                                        <FormControlLabel value="Intense" control={<Radio color="primary" />} label="Intense" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel>Choose your interests:</FormLabel>
                                    <FormGroup row>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="Hiking" color="primary" onChange={handleInterests} />}
                                                label="Hiking" />
                                            <FormControlLabel
                                                control={<Checkbox name="Extreme" color="primary" onChange={handleInterests} />}
                                                label="Extreme" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="Culture" color="primary" onChange={handleInterests} />}
                                                label="Culture" />
                                            <FormControlLabel
                                                control={<Checkbox name="Shopping" color="primary" onChange={handleInterests} />}
                                                label="Shopping" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="Museums" color="primary" onChange={handleInterests} />}
                                                label="Museums" />
                                            <FormControlLabel
                                                control={<Checkbox name="Food" color="primary" onChange={handleInterests} />}
                                                label="Food" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="Relaxing" color="primary" onChange={handleInterests} />}
                                                label="Relaxing" />
                                            <FormControlLabel
                                                control={<Checkbox name="Casino" color="primary" onChange={handleInterests} />}
                                                label="Casino" />
                                        </FormGroup>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <div>
                                <Button variant="contained" color="primary" onClick={handleBuildMyTrip} fullWidth>Build My Trip</Button>
                            </div>
                        </Grid>
                    </Card>
                </form>
            </div>
        </div>
    </MuiPickersUtilsProvider>;

    return (
        <div className="build-trip-container">
            {content}
        </div>
    )
}

export default BuildTripSection;
