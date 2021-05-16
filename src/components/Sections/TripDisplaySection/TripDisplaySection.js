import React, { useState } from 'react';
import '../../../App.css';
import './TripDisplaySection.css';
import { AppBar, Tab, Tabs, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TripMapDisplaySection from '../TripMapDisplaySection/TripMapDisplaySection';
import TripCalendarDisplaySection from '../TripCalendarDisplaySection/TripCalendarDisplaySection';


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

function TripDisplaySection(props) {

    const [value, setValue] = useState('map');

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className="trip-container">
            <div className="trip-header">

            </div>

            <div className="trip-body">
                <div className="trip-tabs">
                    <AppBar position="static" className={classes.appBar}>
                        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
                            <Tab value="map" label="map" {...a11yProps('map')} />
                            <Tab value="calendar" label="calendar" {...a11yProps('calendar')} />
                            <Tab value="edit" label="edit" {...a11yProps('edit')} />
                        </Tabs>
                    </AppBar>
                </div>
                <TabPanel value={value} index="map">
                    <div>
                        <TripMapDisplaySection trip={props.trip}/>
                    </div>
                </TabPanel>
                <TabPanel value={value} index="calendar">
                    <TripCalendarDisplaySection trip={props.trip}/>
                </TabPanel>
                <TabPanel value={value} index="edit">
                    <p>Edit</p>
                </TabPanel>
            </div>
        </div>
    )
}

export default TripDisplaySection;
