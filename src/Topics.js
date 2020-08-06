import React from 'react';
import { Switch, Link, Route, useRouteMatch, useParams } from 'react-router-dom';

const Topics = () => {
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
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Link to={`${url}/bishops-interviews`}>Bishop's Interviews</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/church-attendance`}>Church Attendance</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/tithing-settlement`}>Tithing Settlement</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/what-is-anti-mormon`}>What is "Anti-Mormon Material"?</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/moral-ambiguity`}>Moral Ambiguity</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/experimentation-harm-reduction`}>Experimentation and Harm Reduction</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/maintaining-appearances`}>Maintaining Appearances</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/family-relations`}>Family Relations</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/self-care-wellness`}>Self-Care/Mental Health and Wellness</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/lgbtq-resources`}>LGBTQ+ Resources</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/find-a-group`}>Finding a Group</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/school-transfer-guide`}>School Transfer Guide</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`${url}/relevant-links`}>Relevant Links</Link>
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

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            {topicId}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topics;