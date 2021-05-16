import React, { useState } from 'react';
import './CalendarCol.css';
import { Button, CardMedia } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import img from '../../../images/no_image_available_img.jpg';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function CalendarCol(props) {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [snippet, setSnippet] = useState('');
    const [image, setImage] = useState('');

    console.log("Calendar Column - " + props.day);
    console.log(props.route.length);

    const dayLength = props.route.length;
    const events = [];

    for (var i = 0; i < dayLength; i++) {
        events.push(i);
    }

    function handleMoreInfoClick(props) {
        console.log(props);
        setOpen(true);
        setName(props.name);
        setSnippet(props.intro);
        setImage(props.imageURL);
        console.log(open);
    }

    const handleClose = () => {
        setOpen(false);
    };

    var imageCard = (image === null) ? <CardMedia className="event-image" image={img} title="Event Image NOT" /> : <CardMedia className="event-image" image={image} title="Event Image" />;

    return (
        <div className="col-container">
            <div className="col-header">
                {props.day}
            </div>
            {events.map((obj) => (
                <div className="col-event">
                    <p className="col-event-header">{props.route[obj].name}</p>
                    <p className="col-event-snippet">{props.route[obj].snippet}</p>
                    <div className="col-event-btn">
                        <Button variant="contained" color="primary" fullWidth onClick={() => handleMoreInfoClick(props.route[obj])}>More Info</Button>
                    </div>
                </div>
            ))}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {snippet}
                        {imageCard}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CalendarCol;
