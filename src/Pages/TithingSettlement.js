import React, {useState} from 'react';
import { Accordion, Button } from 'react-bootstrap';

const TithingSettlement = () => {
    const [rotateArrow1, setRotateArrow1] = useState(true);
    const [rotateArrow2, setRotateArrow2] = useState(true);    

    const alterArrow = (arrow) => {
        if (arrow === true) {
            return 'arrowUp';
        }
        else {
            return 'arrowDown';
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            Tithing Settlement
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <p>
                            As a non-mormon at BYU, tithing settlement can sometimes present itself as problematic. <br/>
                            <br/>
                            Likely, you’re feeling one of three ways:
                        </p>
                        <ol>
                            <li>
                                You are perfectly okay to move forward paying tithing as normal despite any faith transition that may have occurred.
                            </li>
                            <li>
                                You feel just fine paying tithing, but are nervous about meeting with your bishop or one of his counselors (e.g. you want to pay tithing, but not a full ten percent and don’t know how to navigate that in a meeting where the bishop and his counselors know your donation amounts).
                            </li>
                            <li>
                                You don’t want to pay tithing at all.
                            </li>
                        </ol>
                        <p>
                            <br/>
                            There are of course other positions to take on the subject, but I did want to start by saying that there’s no pressure to not pay tithing if that’s something you want to do. I commend those who want to fulfill obligations they have made. I also admire those who want to act in accordance with what they feel is most moral despite previous promises. <br/>
                        </p>
                        <h3>Tithing Settlement <i>Shouldn’t</i> Be a Problem:</h3>
                        <p>
                            I say <i>shouldn’t</i> because honestly things can change drastically from bishop to bishop. In general, not showing up for tithing settlement won’t be a problem. However, if it is an issue and you don’t want to play the classic game known as ‘bishop’s roulette’, getting through tithing settlement is as easy as saying ‘yes’. <br/>
                            <br/>
                            In most instances, the Bishop and his counselors can see how much you have donated in tithing and fast offerings; however, if you pay using a specific method, he will likely not be able to see whether you have paid tithing let alone see how much you paid. That said, the bishop can see it if he jumps through a series of hoops which I understand to be tedious enough to discourage it, but I do want to make it known that this method is not without weakness. <br/>
                        </p>
                        <h3>Direct Payments to the Church:</h3>
                        <blockquote className="ml-2">
                            <a href="https://tech.churchofjesuschrist.org/wiki/index.php?title=Donations_to_Church_Headquarters&redirect=no">Donations To Church Headquarters</a>
                            <hr/>
                            Donations made directly to the Church are <b>held in the strictest confidence</b>. They are processed directly by Church headquarters, and <b>do not show up on any ward records</b> in MLS. If any of the funds are directed to the Ward Missionary or Fast Offering categories, they will show up on the <a href="https://tech.churchofjesuschrist.org/wiki/Unit_Financial_Statement">Unit Financial Statement</a> with a 4-digit reference number. For all other categories, <b>details regarding dollar amounts are not available</b>. <br/>
                            <br/>
                            [Emphasis added]
                        </blockquote>
                        <p>
                            In order to make these payments, all you need to do is either send the payment by check or directly wire the money to the main offices of the church. <br/>
                            <br/>
                            If you need to know more about either of these methods, you can find them here:
                        </p>
                        <Accordion>
                            <Accordion.Toggle as={Button} eventKey="0" onClick={() => setRotateArrow1(!rotateArrow1)} className="btn btn-primary mb-3 w-100" style={{ 'fontSize': 'inherit', 'fontFamily': 'Sen' }}>
                                Wire Transfer Payment Instructions<br/><i className={`fas fa-chevron-down ${alterArrow(rotateArrow1)}`} style={{'fontSize':'90%'}}></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <blockquote className="ml-2">
                                    To wire transfer donations to Church Headquarters: <br/>
                                    <br/>
                                    <p style={{'fontSize':'130%'}}>WIRE INSTRUCTIONS</p>
                                    Wire funds to: <br/>
                                    &emsp;&emsp;Zions First National Bank <br/>
                                    &emsp;&emsp;Salt Lake City, Utah <br/>
                                    &emsp;&emsp;ABA 124000054 <br/>
                                    <br/>
                                    For Credit to: <br/>
                                    &emsp;&emsp;Account Number: 001-20007-0 <br/>
                                    &emsp;&emsp;Account Name: Corporation of the President <br/>
                                    <br/>
                                    Originator to Beneficiary Information: <br/>
                                    &emsp;&emsp;Requested by ________________________ (donor’s name) <br/>
                                    <br/>
                                    <p style={{ 'fontSize': '130%' }}>ESSENTIAL INFORMATION</p>
                                    FAX or email essential information: <br/>
                                    <ol>
                                        <li>donor’s name</li>
                                        <li>address</li>
                                        <li>donation category or categories (tithing, fast offering, etc. and amount)</li>
                                    </ol>
                                    Fax number: 801-240-2202 — Attention Donations Department <br/>
                                    <br/>
                                    Or email to: <a href="mailto:Donations@ldschurch.org">Donations@ldschurch.org</a>
                                </blockquote>
                            </Accordion.Collapse>
                        </Accordion>
                        <Accordion>
                            <Accordion.Toggle as={Button} eventKey="0" onClick={() => setRotateArrow2(!rotateArrow2)} className="btn btn-primary mb-3 w-100" style={{ 'fontSize': 'inherit', 'fontFamily': 'Sen' }}>
                                Check Transfer Payment Instructions<br/><i className={`fas fa-chevron-down ${alterArrow(rotateArrow2)}`} style={{ 'fontSize': '90%' }}></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <blockquote className="ml-2">
                                    To send in a check for a donation make the check payable to Corporation of the President. <br/>
                                    <br/>
                                    Mail all donations to: <br/>
                                    &emsp;&emsp;Corporation of the President <br/>
                                    &emsp;&emsp;50 E North Temple, Room 1521 <br/>
                                    &emsp;&emsp;Salt Lake City, UT 84150 <br/>
                                    <br/>
                                    Include a tithing slip or a piece of paper that states: <br/>
                                    <ul>
                                        <li>Name and Mailing Address</li>
                                        <li><b>Membership Number: </b>You can request this from your ward clerk or it is on your temple recommend</li>
                                        <li>Allocation of donation (see <a href="https://tech.lds.org/wiki/Donation_Categories">Donation Categories</a>)</li>
                                        <li>Unit/Ward Number and Name</li>
                                        <li>Please note that the only donations your ward could see are for: 
                                            <ul>
                                                <li>Fast Offering</li>
                                                <li>Ward Missionary. If you are donating for a specific missionary, please also include: 
                                                    <ul>
                                                        <li>Missionary’s Name</li>
                                                        <li>Mission he/she is serving in</li>
                                                        <li>Unit number of the ward funds need to go into (for USA only). For those members outside the United States, also include the home unit name where the missionary left from. Your funds will go in the General Missionary Fund instead of the Ward Missionary Fund. The Donations Department will then communicate with the Missionary Department.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <br/>
                                    The donations department mails out receipts twice a year. You will receive one in November (like you would receive at tithing settlement) and one in January (tax-validated receipt). <br/>
                                    <br/>
                                    If you have further questions, please call 801-240-2554 or 1-800-453-3860 ext 2-2554 or email <a href="mailto:donations@ldschurch.org">donations@ldschurch.org</a>
                                </blockquote>
                            </Accordion.Collapse>
                        </Accordion>
                        <h3>What to Say in Tithing Settlement:</h3>
                        <p>
                            Because it’s possible to pay via wire transfer or by check without the bishop knowing, all that needs to be said is “Yes, I am a full tithe payer.” <br/>
                            <br/>
                            If your bishop presses further saying either your donation amount has decreased, is zero, or your payments stop after a certain point in the year, just tell him that you started using one of the aforementioned methods of paying tithing in order to maintain better security. If he asks why want more security, just ask him why not. <br/>
                            <br/>
                            If you are in fact a full tithe payer, then this shouldn’t be an issue for you; however, if you are nervous about meeting with your bishop for any reason, remember that he cannot read minds. As much as he and the doctrine promote, he has no way to be certain of your thoughts, beliefs, actions, etc. unless you explicitly show him or tell him. <br/>
                            <br/>
                            If confronted, always deny, never admit guilt or shame. Their litmus test for actions or thoughts that need confession is any sign of nervousness, guilt, or discomfort. Just be comfortable, relaxed, and put on a good smile. Getting through bishops interviews is simple if you know the tricks. <br/>
                        </p>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default TithingSettlement;