import React from 'react';
import '../AboutSection/AboutSection.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import alon_image from '../../../images/alon.jpg';
import daniel_image from '../../../images/daniel.jpg';

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
      width: theme.spacing(20),
      height: theme.spacing(20),
      border: '2px solid #ffffff',
      margin: theme.spacing(5),
      marginBottom: theme.spacing(1)
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

function AboutSection() {

    const classes = useStyles();

    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>Over the past decade, there has been a significant increase in the number of Israelis traveling abroad, with some of them even flying more than once a year. As a result, the need arises for tools that will allow simple, fast, and efficient trip planning.</p>	
                    <p>Trip4U, a Smart and Customized Trip Planning System project, is designed to build a system that will optimize the way we plan our trip around the world. With the help of the system, we can build a smart and customized trip itinerary for the customers according to their preferences and interests.</p>
                    <p>The system requirements include a convenient user interface that will allow the users to enter their trip characteristics like destinations, dates, day load and interests. The system is required to perform fast and efficient data collection about attractions according to the user’s preferences, which will be transferred to a smart algorithm that will build an optimal itinerary. In addition, the users will be able to edit the trip itinerary that the algorithm generated.</p>
                    <p>The heart of the system is a smart algorithm, which for the purpose of building it, an extensive literature review was performed in order to examine alternatives and find the algorithm that would suit the system’s needs. The algorithm is based on a combination of a greedy algorithm and a genetic algorithm.</p>
                    <p>During the work on the project, several alternatives were examined in various areas, for example: algorithm, development environment for building the server side, external interface for collecting trip content, platforms for building a client side and more.</p>
                    <p>The system architecture includes:
                        <ul>
                            <li>MongoDB database.</li>
                            <li>Tomcat server using Spring Boot Framework.</li>
                            <li>Web client side using React.</li>
                            <li>Mobile client side using React Native.</li>
                            <li>Algorithm for building a trip itinerary.</li>
                        </ul>
                    </p>
                    <p>The final product is a system that builds a trip itinerary for the users according to their preferences, and with the help of external API, the itinerary will be displayed on a map and calendar. The system is available for users on web and mobile platforms.</p>

                </div>
                <div className="about-crew">
                    <div className="about-crew-image">
                        <Avatar alt="alon_image" src={alon_image} className={classes.large} />
                        <p>Alon Lubinski</p>
                    </div>
                    <div className="about-crew-image">
                        <Avatar alt="daniel_image" src={daniel_image} className={classes.large} />
                        <p>Daniel Zusev</p>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
