import React, { useState } from 'react';
import '../../../App.css';
import './TripMapDisplaySection.css';
import { AppBar, Tab, Tabs, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TripMapDailyDisplaySection from './TripMapDailyDisplaySection';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        border: '2px solid #ffffff'
    },
    divider: {
        width: '80%',
        marginTop: theme.spacing(5)
    },
    appBar: {
        backgroundColor: '#00000000',
        color: '#000000',
        marginTop: theme.spacing(3),
        width: '80%',
        boxShadow: 'none',
        alignItems: 'center',
        zIndex: 1
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}


function TripMapDisplaySection(props) {

    const [value, setValue] = useState('Day 1');
    
    const tripLength = props.trip.data.length;
    const days = [];

    for(var i = 1; i <= tripLength; i++){
        days.push(i);     
    }

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="map-container">
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} >
                    {days.map((obj) => (
                        <Tab value={"Day " + obj} label={"Day " + obj} {...a11yProps("Day " + obj)}/>
                    ))}
                </Tabs>
            </AppBar>
            {days.map((obj) => (
                <TabPanel value={value} index={"Day " + obj}>
                    <TripMapDailyDisplaySection route={props.trip.data.route[obj]}/>
                </TabPanel>
            ))}
        </div>
    )
}

export default TripMapDisplaySection;
