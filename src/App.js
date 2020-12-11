import React from 'react';
import './stylesheet.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Topics from './Pages/Topics';
import StudentExperiences from './Pages/StudentExperiences';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams} from 'react-router-dom';
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
                        <Route path="/how-to-navigate-byu-as-an-ex-post-nom-never-mormon/:rerouteID" component={OriginalSiteRerouter} />
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

const OriginalSiteRerouter = () => {
    let {rerouteID} = useParams();
    console.log(rerouteID);
    switch (rerouteID) {
        case 'bishops-interviews':
            return <Redirect to="/topics/bishops-interviews" />;
        case 'church-attendance':
            return <Redirect to="topics/church-attendance" />;
        case 'tithing-settlement':
            return <Redirect to="/topics/tithing-settlement" />;
        case 'what-is-anti-mormon-material':
            return <Redirect to="/topics/what-is-anti-mormon" />;
        case 'moral-ambiguity':
            return <Redirect to="/topics/moral-ambiguity" />;
        case 'experimentation-harm-reduction':
            return <Redirect to="/topics/general-experimentation" />;
        case 'gay-sex-and-harm-reduction':
            return <Redirect to="/topics/gay-sex-risk-management" />;
        case 'maintaining-appearances':
            return <Redirect to="/topics/maintaining-appearances" />
        case 'family-relations-topic':
            return <Redirect to="/topics/family-relations" />;
        case 'self-care-mental-health-and-wellness':
            return <Redirect to="/topics/self-care-wellness" />;
        case 'lgbtq-resources':
            return <Redirect to="/topics/lgbtq-resources" />;
        case 'finding-a-group':
            return <Redirect to="/topics/find-a-group" />;
        case 'how-to-transfer':
            return <Redirect to="/topics/school-transfer-guide" />;
        case 'relevant-links':
            return <Redirect to="/topics/relevant-links" />;
        case 'what-are-your-fellow-classmates-experiencing':
            return <Redirect to="/student-experiences" />;
        default:
            return <Redirect to="/" />;
    }
};

export default App;
