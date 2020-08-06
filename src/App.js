import React from 'react';
//import './App.css';
import './stylesheet.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import StudentExperiences from './StudentExperiences';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// --VERSION WITH TRANSITIONS UNDER DEVELOPMENT IN './App-with-transitions.js'
//import {CSSTransition, TransitionGroup} from 'react-transition-group';

const App = () => {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/student-experiences" component={StudentExperiences} />
          <Route component={() => (<h1 className="mx-auto mt-3">Error: Page Not Found</h1>)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
