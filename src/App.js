import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import BuildTrip from './components/pages/BuildTrip';
import Profile from './components/pages/Profile';
import Trip from './components/pages/Trip';
import About from './components/pages/About';
import Terms from './components/pages/Terms';


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
          <Route path="/terms" exact component={Terms}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
