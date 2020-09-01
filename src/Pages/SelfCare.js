import React from 'react';
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import { useState } from 'react';

const SelfCare = () => {
    let {path, url} = useRouteMatch();

    let [subtitle, setSubtitle] = useState('Self-Care Resources');
    let [numActive, setNumActive] = useState('1');
    
    let [arrow, setArrow] = useState(true);
    const alterArrow = (arrow) => {
        if (arrow === true) {
            return 'arrowUp';
        }
        else {
            return 'arrowDown';
        }
    };

    const isActive = (num) => {
        if (numActive == num) {
            return 'active';
        }
        else {
            return '';
        }
    };

    const buttonFunc = (num) => {
        setArrow(!arrow);
        setNumActive(num);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="m-auto text-center text-white p-md-5 py-5" id="title">
                            Self-Care/Mental Health and Wellness
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <div id="cover" className="bg-white pb-1 mb-0">
                            <p>
                                It’s important to take care of yourself. From eating well, to getting enough exercise, to maintaining mental health, you need to establish a strong discipline of self-care. <br/>
                                <br/>
                                There’s no requirement of feeling unhealthy to seek professional guidance or make accommodations for yourself. Please take care of yourself as best you can. You’re valued and we care about you. Don’t hesitate to reach out via the <a href="finding-a-group">Finding a Group</a> page if you’re in need of a community/social support system. <br/>
                            </p>
                        </div>
                        <div id="banner-wrapper">
                            <div id="supportContentBanner" className="row m-auto mx-2 align-middle">
                                <div id="left" className="col-10 bg-info">
                                    <h3 className="text-white text-center"><b>{subtitle}</b></h3>
                                </div>
                                <div id="right" className="col-2 bg-info p-0">
                                    <button id="selfCareButton" onClick={() => setArrow(!arrow)} className="text-white text-center btn btn-info w-100 h-100 p-0 active"><h3><i className={`fas fa-chevron-down ${alterArrow(arrow)}`} style={{'fontSize':'100%'}}></i></h3></button>
                                </div>
                            </div>
                            <div id="content-selector" className={arrow ? '' : 'show'}>
                                <div className="row m-auto mx-2 align-middle">
                                    <Link className={`col-10 btn-info btn border-0 first-item ${isActive('1')}`} onClick={() => buttonFunc('1')} to={`${url}`}><h3 className="text-white text-center px-2"><b>Self-Care Resources</b></h3>
                                    </Link>
                                    <Link className={`col-10 btn-info btn border-0 ${isActive('2')}`} onClick={() => buttonFunc('2')} to={`${url}/guidlines`}><h3 className="text-white text-center px-2"><b>General Guidelines</b></h3>
                                    </Link>
                                    <Link className={`col-10 btn-info btn border-0 ${isActive('3')}`} onClick={() => buttonFunc(3)} to={`${url}/callings`}><h3 className="text-white text-center px-2"><b>Callings</b></h3>
                                    </Link>
                                    <Link className={`col-10 btn-info btn border-0 last-item ${isActive('4')}`} onClick={() => buttonFunc('4')} to={`${url}/byu-counseling`}><h3 className="text-white text-center px-2"><b>BYU Counseling</b></h3>
                                    </Link>
                                </div>
                            </div>
                            <Switch>
                                <Route exact path={path}>
                                    <SupportList setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route path={`${path}/callings`}>
                                    <Callings setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route path={`${path}/byu-counseling`}>
                                    <BYUCounseling setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route path={`${path}/guidlines`}>
                                    <GeneralGuidelines setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route>
                                    <Redirect to={url} />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

const SupportList = (props) => {
    props.setSub('Self-Care Resources');
    props.setActive('1');

    const SupportListing = (props) => {
        let title = props.title;
        let phone = props.phone;
        let urlTitle = props.urlTitle;
        let url = props.url;
    
        return (
            <li className="list-group-item">
                <h4 style={{'textDecoration':'underline'}}><b>{`${title}`}:</b></h4>
                <h5><b>Phone: </b><a href={`tel:${phone}`}>{`${phone}`}</a></h5>
                <h5><b>{`${urlTitle}`}:</b> <a href={url}>Available Here</a></h5>
            </li>
        );
    };

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item">
                    <h4 style={{ 'textDecoration': 'underline' }}><b>National Suicide Prevention Lifeline:</b></h4>
                    <h5><b>English:</b> <a href="tel:(800) 273-8255">1 (800) 273-8255</a></h5>
                    <h5><b>Espa&ntilde;ol:</b> <a href="tel:(800) 784-2432">1 (800) SUICIDA</a></h5>
                    <h5><b>Online Chat:</b> <a href="http://www.suicidepreventionlifeline.org/gethelp/lifelinechat.aspx">Available Here</a></h5>
                </li>
                <SupportListing
                    title="Trevor Project Lifeline (For LGBTQ+ people)"
                    phone="(866) 488-7386"
                    urlTitle="Online Chat"
                    url="http://www.thetrevorproject.org/pages/get-help-now#tc"
                />
                <SupportListing
                    title="Trans Lifeline (Answered by non-binary persons)"
                    phone="(877) 565-8860"
                    urlTitle="Website"
                    url="https://translifeline.org/hotline"
                />
                <SupportListing
                    title="Provo Wasatch Mental Health Crisis Line (24/7)"
                    phone="(801) 373-7393"
                    urlTitle="Website"
                    url="https://www.wasatch.org/crisis-services/"
                />
                <SupportListing
                    title="Utah Crisis Hotline (24/7)"
                    phone="1 (800) 273-8255"
                    urlTitle="Website"
                    url="https://healthcare.utah.edu/uni/programs/crisis-diversion.php"
                />
                <SupportListing
                    title="LGBTQ+ National Help Center"
                    phone="(888) 843-4564"
                    urlTitle="Online Chat"
                    url="http://www.volunteerlogin.org/chat/"
                />
                <SupportListing
                    title="BYU Counseling and Psychological Services (Free for Students)"
                    phone="(801) 422-3035"
                    urlTitle="Website"
                    url="https://caps.byu.edu/"
                />
                <SupportListing
                    title="BYU Comprehensive Clinic"
                    phone="(801) 422-7759"
                    urlTitle="Website"
                    url="https://comprehensiveclinic.byu.edu/Pages/home.aspx"
                />
                <SupportListing
                    title="BYU Women’s Services and Resources"
                    phone="(801)-422-4877"
                    urlTitle="Website"
                    url="https://wsr.byu.edu/"
                />
                <SupportListing
                    title="American Social Health Association (Sexually Transmitted Disease Hotline)"
                    phone="(800) 227-8922"
                    urlTitle="Website"
                    url="https://www.ashasexualhealth.org/person2person/"
                />
                <SupportListing
                    title="Alcohol and Drug Helpline"
                    phone="(800) 821-4357"
                    urlTitle="Website"
                    url="https://www.rehabdirectory.com/rehabs/highland-ridge-hospital/"
                />
                <SupportListing
                    title="National Help Line for Substance Abuse"
                    phone="(800) 262-2463"
                    urlTitle="Website"
                    url="https://www.samhsa.gov/find-help/national-helpline/"
                />
                <SupportListing
                    title="National Domestic Violence Hotline"
                    phone="(800) 799-7233"
                    urlTitle="Website"
                    url="https://www.acf.hhs.gov/fysb/programs/family-violence-prevention-services/programs/ndvh"
                />
                <SupportListing
                    title="Eating Disorders Help"
                    phone="(800) 931-2237"
                    urlTitle="Website"
                    url="http://www.nationaleatingdisorders.org/"
                />
                <SupportListing
                    title="Rape, Abuse, and Incest National Network (RAINN)"
                    phone="(800) 656-4673"
                    urlTitle="Online Chat"
                    url="http://apps.rainn.org/ohl-bridge/"
                />
                <SupportListing
                    title="Self Abuse Finally Ends (S.A.F.E)"
                    phone="(630) 819-9505"
                    urlTitle="Website"
                    url="http://www.selfinjury.com/"
                />
                <SupportListing
                    title="Love is Respect Chat (For discussing healthy vs. unhealthy relationships)"
                    phone="1 (866) 331-9474"
                    urlTitle="Website"
                    url="https://www.loveisrespect.org/"
                />
            </ol>
            <sup style={{ 'fontStyle': 'italic' }}>*The above resources are provided by <a href="https://www.usgabyu.com/resources-for-you">USGA</a></sup>
        </div>
    );
};

const Callings = (props) => {
    props.setSub('Callings');
    props.setActive('3');

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item" id="callings">
                    <p>
                        If a current calling is causing you extreme stress, you can ask to be released. Usually they will insist on re-assigning you to another calling, so having brainstormed a calling ahead of time that you can handle and making that suggestion will go a long way to help “inspire” them where you can best serve. 
                    </p>
                </li>
            </ol>
        </div>
    );
};

const BYUCounseling = (props) => {
    props.setSub('BYU Counseling');
    props.setActive('4');

    return (
        <ol className="list-group">
            <li className="list-group-item">
                <p>
                    You don’t have to be broken, mentally diagnosed with anything, or incapable to go in and get some help. Their staff takes privacy very seriously at the expense of losing their licenses, so you are safe talking with any of them about your struggles and you can have the reassurance they won’t turn you in for not believing in the church, committing major sins, or even breaking the honor code. They are only required to report if you or another person is in imminent danger, and in that case they report to your family or law enforcement, not to the church. They put your health first, and while they all need temple recommends to work for BYU, they will all respect working through solutions to better health with you that disclude reading scriptures, praying, fasting, etc if you let them know those solutions are not helpful to you because you lost your faith. They are all educated enough not to recommend scientifically unfounded and harmful practices such as reparative therapy to the LGBTQ community. They are all LGBTQ friendly and non-believing friendly. For a recommendation of someone who could fit your needs well, contact <a href="https://goo.gl/forms/cbbpPK0B7QWOeYf63">BYU Guru</a>. <br/>
                    <br/>
                    One major issue with the counseling center is getting in. They service ⅓ of students at BYU so if you need help it may still be 3-4 weeks before they can find you an appointment. Other solutions include: <br/>
                    <ul>
                        <li><a href="https://caps.byu.edu/silvercloud">SilverCloud</a>- an online, work at your own pace, non face to face counseling service by BYU where you receive education on how to better your health and can include an interactive journal with a counseling student if desired.</li>
                        <li>Group counseling- ask about this option at the desk.</li>
                        <li>Off Campus Counseling. LDS Family Services is generally not recommended as they tend to give advice that is even more in line with the church than the BYU counseling center. The BYU counseling office has a case worker that will work with you to recommend other counselors in the valley that may be especially suited to your needs, including a faith crisis.</li>
                    </ul> 
                    <br/>
                </p>
            </li>
        </ol>
    );
};

const GeneralGuidelines = (props) => {
    props.setSub('General Guidlines');
    props.setActive('2');

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item">
                    <p>
                        Avoid situations around campus where you are easily triggered. This may include not attending campus devotional, not attending FHE groups, missing General Conference or Ward and Stake conferences, only attending on Sundays when you need to and/or can bear to go, etc. <br/>
                        <br/>
                        Regular exercise is proven to outperform medication in increasing wellbeing and happiness. There are great resources on campus to provide a wide variety of exercise experiences that meet your interests and needs. Consider:
                        <ul>
                            <li>Exercise clubs through BYUSA such as jiu jitsu, hip hop, outdoor adventure, etc.</li>
                            <li>A BYU gym wristband that gets you into drop-in classes like cycling, zumba, high fitness, lifting, step class, etc.</li>
                            <li>BYU exercise classes you register for each semester, such as jogging, volleyball, diving, lifting, stretching, etc.</li>
                            <li>BYU intramural sports teams</li>
                            <li>BYU dance classes</li>
                            <li>Taking advantage of free facilities such as the track, lifting room, dance studios, fields, tennis courts, pool, etc.</li>
                            <li>A gym membership. VASA is just a few blocks south of campus and they give a discount to students. The Provo Rec center has some great cheap classes and facilities.</li>
                            <li>Suggesting social exercise with friends you enjoy being with such as playing soccer in the park, going running with a friend, etc.</li>
                            <li>Doing something a little more private in your own spave, such as P90x videos, zumba videos, walking videos, etc.</li>
                        </ul>
                        <br/>
                        Eating healthy foods, while not as cheap and not as easy to eat or prepare, can also significantly increase your general feeling of health and wellbeing. Fruits, vegetables, and good proteins will always help you feel much better than ramen noodles, Little Ceasars pizzas, and cold sugar cereals, even if those are the easiest “college foods”. Consider:
                        <ul>
                            <li>Packing fresh fruits and vegetables in your backpack with a yummy dip- ranch, hummus, peanut butter, or yogurt</li>
                            <li>Going grocery shopping weekly with a friend with plans to cook healthy foods you enjoy</li>
                            <li>Making large portions of healthy foods you make so you can have leftovers</li>
                            <li>Choosing healthier choices on campus restaurants</li>
                        </ul>
                        <br/>
                        Find a support system of good friends that accept you and love you. Research shows that even just having 2-3 close friends significantly increases life satisfsetSub. Consider:
                        <ul>
                            <li>Becoming a part of a BYU community or group that accepts your changing faith (see section on <a href="/topics/finding-a-group">Finding a Group</a>).</li>
                            <li>Finding community centered around one of your hobbies:
                                <ul>
                                    <li>a campus club — <a href="https://clubs.byu.edu/clubs#/">https://clubs.byu.edu/clubs#/</a></li>
                                    <li>an intramural sport — <a href="https://intramurals.byu.edu/information.php#">https://intramurals.byu.edu/information.php#</a></li>
                                </ul>
                            </li>
                            <li>Consider joining a non-BYU community that more closely aligns with your adjusting faith, including:
                                <ul>
                                    <li>Community of Christ- Non-Mormon Christian church: <a href="https://www.facebook.com/latterdayseekersprovo/">https://www.facebook.com/latterdayseekersprovo/</a></li>
                                    <li>Oasis — a secular humanist group in Provo: <a href="https://www.facebook.com/uvoasis/">https://www.facebook.com/uvoasis/</a></li>
                                </ul>
                            </li>
                        </ul>
                        <br/>
                        Find ways to make a difference in the world, as this will help you find meaning in your life if your faith is not providing you with adequate meaning. This may include using your education in professional ways that benefits the world, becoming involved in research on campus, or engaging in service opportunities that fit your abilities, interests, and schedule. Consult the following resources for finding a great service opportunity:
                        <ul>
                            <li>Y-Serve Service Groups- BYU’s Service Hub, Home to over 70 different and unique programs servicing a range of the community and world: <a href="https://yserve.byu.edu/volunteer-now">https://yserve.byu.edu/volunteer-now</a></li>
                            <li>Encircle — Provo’s LGBTQ+ friendly safe home: <a href="https://encircletogether.org/volunteer/">https://encircletogether.org/volunteer/</a></li>
                            <li>Provo Food and Care Coalition — helping alleviate hunger and diminish plights of poverty in Provo: <a href="https://foodandcare.org/volunteer-oportunities/">https://foodandcare.org/volunteer-oportunities/</a></li>
                            <li>Tabitha’s Way Food Bank — "At Tabitha's Way, we believe no one should be food insecure.": <a href="https://tabithasway.org/">https://tabithasway.org/</a></li>
                        </ul>
                        <br/>
                        Finally, consider professional counseling if that's what you need. It doesn't have to be a last resort and has been a significant help to many people in all sorts of circumstances. Find out more under <Link to="topics/self-care-wellness/byu-counseling">BYU Counseling</Link>.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default SelfCare;