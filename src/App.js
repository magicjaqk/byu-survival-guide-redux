import React from 'react';
import './stylesheet.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Topics from './Pages/Topics';
import StudentExperiences from './Pages/StudentExperiences';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
    smoothscroll.polyfill();

    const scrollFunction = () => {
        if (CSS.supports('scroll-behavior: smooth')) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        else {
            console.log('no-smooth-scrolling');
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="fade-transition-wrapper">
                    <Switch >
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/student-experiences" component={StudentExperiences} />
                        <Route component={() => (<div className="container-fluid text-danger" style={{"height": "100vh"}}><br /><br /><h1 className="mx-auto" style={{"fontSize": "calc(70px + .5vw)"}}>Page Not Found</h1><br/><br/><h3 className="mx-auto"><Link to='/' className="text-primary">Return to Home</Link></h3></div>)} />
                    </Switch>
                </div>
                <div className="row mx-1">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                        <div className="bg-primary">
                            <p className="mx-auto text-center text-white p-5" id="footer" onClick={scrollFunction}>
                                Return to top of page
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3" />
                </div>
            </div>
        </Router>
  );
}

export default App;
