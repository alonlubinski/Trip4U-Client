import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoggedNavbar from './components/Navbar/LoggedNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import BuildTrip from './components/pages/BuildTrip';
import Profile from './components/pages/Profile';
import Trip from './components/pages/Trip';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/sign-up" exact component={Signup}/>
          <Route path="/home" exact component={BuildTrip}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/trip" exact component={Trip}/>
          <Route path="/about" excat component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
