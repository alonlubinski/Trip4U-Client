import { AppBar, Avatar, Divider, Tab, Tabs, Box, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import '../../../App.css';
import './ProfileSection.css';
import profile_image from '../../../images/image4.jpg';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import EditProfileDialog from '../../EditProfileDialog/EditProfileDialog';
import TripHistorySection from '../TripHistorySection/TripHistorySection';


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
    boxShadow: 'none'
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

function ProfileSection() {

  const [value, setValue] = useState('about');
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem('lastName'));
  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');
  const [dialog, setDialog] = useState(false);
  const [editState, setEditState] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName")
  })
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setDialog(true);
  }

  const handleClickClose = () => {
    setEditState({
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName")
    })
    setDialog(false);
  }

  const handleEditConfirm = () => {
    if (editState.firstName === localStorage.getItem("firstName") && editState.lastName === localStorage.getItem("lastName")) {
      setEditState({
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName")
      })
      setDialog(false);
    }
    else if (editState.firstName !== '' && editState.lastName !== '') {
      console.log(editState);
      const data = {
        "username": {
          "firstName": editState.firstName,
          "lastName": editState.lastName
        }
      }
      axios
        .put('http://localhost:2222/users/' + email, data)
        .then(function (response) {
          if (response.status === 200) {
            alert("Success");
            localStorage.setItem("firstName", editState.firstName);
            localStorage.setItem("lastName", editState.lastName);
            setFirstName(editState.firstName);
            setLastName(editState.lastName);
          } else {

          }
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    }
    setDialog(false);

  }

  const handleEditChange = (e) => {
    const { id, value } = e.target
    console.log(id);
    console.log(value);
    setEditState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <div className="profile-container">
      <div className="profile-cover">

      </div>
      <div className="profile-image">
        <Avatar alt="profile_image" src={profile_image} className={classes.large} />
      </div>
      <div className="profile-body">
        <EditProfileDialog open={dialog} close={handleClickClose} confirm={handleEditConfirm} change={handleEditChange} />
        <h1>{firstName + " " + lastName}</h1>
        <Divider variant="middle" className={classes.divider} />
        <div class="profile-tabs">
          <AppBar position="static" className={classes.appBar}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
              <Tab value="about" label="About" {...a11yProps('about')} />
              <Tab value="trips" label="My Trips" {...a11yProps('trips')} />
            </Tabs>
          </AppBar>
          <div class="profile-edit-button">
            <Button variant="contained" color="primary" className={classes.edit} onClick={handleClickOpen}><EditIcon style={{ marginRight: 10 }} />Edit Profile</Button>
          </div>
        </div>

      </div>
      <div className="profile-tabs-container">
        <TabPanel value={value} index="about">
          <div className="profile-info">
            <p className="profile-info-head">First Name</p>
            <p className="profile-info-body">{firstName}</p>
            <p className="profile-info-head">Last Name</p>
            <p className="profile-info-body">{lastName}</p>
            <p className="profile-info-head">Email</p>
            <p className="profile-info-body">{email}</p>
            <p className="profile-info-head">Role</p>
            <p className="profile-info-body">{role}</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index="trips">
          <TripHistorySection />
        </TabPanel>
      </div>

    </div>
  )
}

export default ProfileSection;