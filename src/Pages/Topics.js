import React, {useState} from 'react';
import { Switch, Link, Route, useRouteMatch, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Helmet from 'react-helmet';

//Pages components
import ChurchAttendance from './ChurchAttendance.js';
import BishopsInterviews from './BishopsInterviews.js';
import TithingSettlement from './TithingSettlement.js';
import AntiMormon from './AntiMormon.js';
import MoralAmbiguity from './MoralAmbiguity.js';
import GeneralExperimentation from './GeneralExperimentation.js';
import GaySexRisks from './GaySexRisks.js';
import MaintainingAppearances from './MaintainingAppearances.js';
import FamilyRelations from './FamilyRelations.js';
import SelfCare from './SelfCare.js';
import QueerAtBYU from './QueerAtBYU.js';
import FindingAGroup from './FindingAGroup.js';
import SchoolTransferGuide from './SchoolTransferGuide.js';
import RelevantLinks from './RelevantLinks.js';
import Dating from './Dating.js';


//Main page to display
const Topics = () => {
    const scrollFunction = () => {
        if (CSS.supports('scroll-behavior', 'smooth')) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        else {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    const [expandedExperimentation, setExpandedExperimentation] = useState(false);
    const [expandedLGBTQ, setExpandedLGBTQ] = useState(false);

    let {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <div className="container-fluid">
                    <Helmet>
                        <title>Topics</title>
                        <meta name="description" content="A gospel-topics selection of sorts for non-mormon BYU students" />
                    </Helmet>
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6">
                            <div id="title-colorbox" className="bg-primary">
                                <h1 className="mx-auto text-center text-white p-md-5 py-5" id="title">
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
                                    <Accordion>
                                        <Accordion.Toggle as={Link} variant="link" eventKey="0" onClick={() => setExpandedExperimentation(!expandedExperimentation)}>
                                            <span style={{'fontSize': '80%'}}>{expandedExperimentation ? '- ': '+ '}</span>Experimentation and Harm Reduction
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <ol className="list-group-flush pl-5">
                                                <li className="list-group-item" onClick={() => setExpandedExperimentation(!expandedExperimentation)}><Link onClick={scrollFunction} to={`${url}/general-experimentation`}>General Risk Management</Link></li>
                                                <li className="list-group-item" onClick={() => setExpandedExperimentation(!expandedExperimentation)}><Link onClick={scrollFunction} to={`${url}/gay-sex-risk-management`}>Gay Sex and Risk Management</Link></li>
                                            </ol>
                                        </Accordion.Collapse>
                                    </Accordion>
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
                                    <Accordion>
                                        <Accordion.Toggle as={Link} eventKey="0" onClick={() => setExpandedLGBTQ(!expandedLGBTQ)}>
                                            <span style={{'fontSize': '80%'}}>{expandedLGBTQ ? '- ' : '+ '}</span>LGBTQ+ Resources
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <ol className="list-group-flush pl-5">
                                                <li className="list-group-item" onClick={() => setExpandedLGBTQ(!expandedLGBTQ)}><Link onClick={scrollFunction} to={`${url}/queer-at-byu`}>Being Queer at BYU</Link></li>
                                                <li className="list-group-item" onClick={() => setExpandedLGBTQ(!expandedLGBTQ)}><Link onClick={scrollFunction} to={`${url}/gay-sex-risk-management`}>Gay Sex and Risk Management</Link></li>
                                                <li className="list-group-item"><a href="https://byu.maps.arcgis.com/apps/StoryMapBasic/index.html?appid=2d0b025e10e24ff9b679a00105f5dab0&extent=-111.6639%2C40.2446%2C-111.6346%2C40.2527">Map of Gender-Neutral Bathrooms at BYU</a></li>
                                            </ol>
                                        </Accordion.Collapse>
                                    </Accordion>
                                </li>
                                <li className="list-group-item">
                                    <Link onClick={scrollFunction} to={`${url}/dating`}>Dating</Link>
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
                        <div className="col-lg-3" />
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
        case 'general-experimentation':
            return (<GeneralExperimentation/>);
        case 'gay-sex-risk-management':
            return (<GaySexRisks />);
        case 'maintaining-appearances':
            return (<MaintainingAppearances />);
        case 'family-relations':
            return (<FamilyRelations />);
        case 'self-care-wellness':
            return (<SelfCare />);
        case 'queer-at-byu':
            return (<QueerAtBYU />);
        case 'find-a-group':
            return (<FindingAGroup />);
        case 'school-transfer-guide':
            return <SchoolTransferGuide />;
        case 'dating':
            return <Dating />;
        case 'relevant-links':
            return <RelevantLinks />;
    }
}

export default Topics;