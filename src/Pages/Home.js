import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid page-wrapper" id="Home">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            Welcome to the BYU Survival Guide!
                        </h1>
                    </div>
                    <div className="text-left">
                        <h2 className="text-primary">
                            Some of you may wonder why this exists:
                        </h2>
                        <p className="page-text text-wrap">
                            We all want our campus to be a place of social support and acceptance for those who are in need of a community. Our campus family has members who are struggling to feel accepted and loved because of the systems that BYU has in place to restrict liberal experimentation of one’s religious preference unless that preference is to convert to the Church of Jesus Christ of Latter-Day Saints. FreeBYU targets changing current policies to promote religious freedom on BYU’s campus; however, until those changes are officially adopted, here are some possible resources for those who don’t quite fit the mold to find community and live according to the standards in which they feel most comfortable. The social consequences for publicly expressing one’s shift in religious belief from LDS member to non/partial-believer can be dire. If you are struggling, welcome! If you don’t feel this guide is for you, I hope you can pass this along to anyone you feel might benefit from it. We depend on all people–independent of where you fall on the spectrum of belief–to aid in creating and fostering a healthy environment for everyone who wants to call themselves a part of the BYU campus family.
                        </p>
                        <h2 className="text-primary w-auto">
                            <Link to="/student-experiences" className="badge badge-secondary text-wrap">See Some BYU Students' Experiences to See Why This Affects Them</Link>
                        </h2>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default Home;