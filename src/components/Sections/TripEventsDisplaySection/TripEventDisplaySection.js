import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './TripEventDisplaySection.css';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../../images/no_image_available_img.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#a8a8a833',
        border: '1px solid #000000',
        padding: '20px 20px',
        margin: '10px 10px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '50%',
        padding: 100
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

function TripEventDisplaySection(props) {

    const classes = useStyles();

    console.log("Trip Event Display Section");
    console.log(props.event);

    var image = props.event.imageURL === null ? <CardMedia className={classes.cover} image={img} title="Event Image NOT" /> : <CardMedia className={classes.cover} image={props.event.imageURL} title="Event Image" />;

    return (
        <div className="event-container">
            <Card className={classes.root}>
                {image}
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {props.event.name}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {props.event.intro}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default TripEventDisplaySection;
