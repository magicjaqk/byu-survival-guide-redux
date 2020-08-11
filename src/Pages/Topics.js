import React from 'react';
import ChurchAttendance from './ChurchAttendance.js';
import BishopsInterviews from './BishopsInterviews.js';
import TithingSettlement from './TithingSettlement.js';
import AntiMormon from './AntiMormon.js';
import MoralAmbiguity from './MoralAmbiguity.js';
import { Switch, Link, Route, useRouteMatch, useParams } from 'react-router-dom';

const Topics = () => {
    const scrollFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    let {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <div id="title-colorbox" className="bg-primary">
                                <h1 className="mx-auto text-center text-white p-5" id="title">
                                    Topics
                                </h1>
                            </div>
                            <ul className="list-group list-group-flush page-content">
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/bishops-interviews`}>Bishop's Interviews</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/church-attendance`}>Church Attendance</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/tithing-settlement`}>Tithing Settlement</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/what-is-anti-mormon`}>What is "Anti-Mormon Material"?</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/moral-ambiguity`}>Moral Ambiguity</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link data-toggle="collapse" data-target="#experimentation-list" aria-expanded="false" id="experiment-toggle">Experimentation and Harm Reduction</Link>
                                    <div className="collapse" id="experimentation-list">
                                        <ol className="list-group pl-5">
                                            <li className="list-group-item"><Link onClick={scrollFunction} to={`${url}/experimentation/general`}>General Harm Reduction and Self-Care</Link></li>
                                            <li className="list-group-item"><Link onClick={scrollFunction} to={`${url}/experimentation/general`}>General Harm Reduction and Self-Care</Link></li>
                                        </ol>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/maintaining-appearances`}>Maintaining Appearances</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/family-relations`}>Family Relations</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/self-care-wellness`}>Self-Care/Mental Health and Wellness</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/lgbtq-resources`}>LGBTQ+ Resources</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/find-a-group`}>Finding a Group</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/school-transfer-guide`}>School Transfer Guide</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/relevant-links`}>Relevant Links</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3" />
                    </div>
                </div>
            </Route>
            <Route path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
    );
};

const Topic = () => {
    let { topicId } = useParams();

    switch (topicId) {
        default:
            return ( <div className="container-fluid text-danger" style={{"height": "100vh"}}><br /><br /><h1 className="mx-auto" style={{"fontSize": "calc(70px + .5vw)"}}>Topic Page Not Found</h1><br/><br/><h3 className="mx-auto"><Link to='/topics' className="text-primary">Return to Topic Selection</Link></h3></div> );
        case 'bishops-interviews':
            return (<BishopsInterviews />);
        case 'church-attendance':
            return (<ChurchAttendance />);
        case 'tithing-settlement':
            return (<TithingSettlement />);
        case 'what-is-anti-mormon':
            return (<AntiMormon />);
        case 'moral-ambiguity':
            return (<MoralAmbiguity />);
    }
}

export default Topics;