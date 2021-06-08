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
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [price, setPrice] = useState('');
    const [website, setWebsite] = useState('');
    const [bus, setBus] = useState('');
    const [train, setTrain] = useState('');
    const [subway, setSubway] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
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
        setAddress(props.properties.Address);
        setHours(props.properties.Hours);
        setPrice(props.properties.Price);
        setWebsite(props.properties.Website)
        setBus(props.properties.Bus);
        setTrain(props.properties.Train);
        setSubway(props.properties.Subway);
        setPhone(props.properties.Phone);
        setEmail(props.properties.Email);
        setImage(props.imageURL);
        console.log(open);
        console.log(props.properties)
    }

    const handleClose = () => {
        setOpen(false);
    };

    var imageCard = (image === null) ? <CardMedia className="event-image" image={img} title="Event Image NOT" /> : <CardMedia className="event-image" image={image} title="Event Image" />;

    var properties = <div>
        <h2>More Details</h2>
        {(address) ? <p>Address: {address}</p> : <></>}
        {(hours) ? <p>Hours: {hours}</p> : <></>}
        {(price) ? <p>Price: {price}</p> : <></>}
        {(website) ? <p>Website: <a href={website}>{website}</a></p> : <></>}
        {(bus || train || subway) ? <h3>Transportation</h3> : <></>}
        {(bus) ? <p>Bus: {bus}</p> : <></>}
        {(train) ? <p>Train: {train}</p> : <></>}
        {(subway) ? <p>Subway: {subway}</p> : <></>}
        {(phone || email) ? <h3>Contact Us</h3> : <></>}
        {(phone) ? <p>Phone: {phone}</p> : <></>}
        {(email) ? <p>Email: {email}</p> : <></>}
    </div>
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
                        {properties}
                        {imageCard}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CalendarCol;
