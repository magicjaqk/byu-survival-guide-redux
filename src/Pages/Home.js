import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => {
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

    return (
        <div className="container-fluid page-wrapper" id="Home">
            <Helmet>
                <title>BYU Survival Guide</title>
                <meta name="description" content="A guide to navigating a non-mormon life at a mormon-owned university." />
            </Helmet>
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            Welcome to the BYU Survival Guide!
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <h2 className="text-primary">
                            Why We Exist:
                        </h2>
                        <p className="page-text text-wrap">
                            We all want our campus to be a place of social support and acceptance for those who are in need of a community. Our campus family has members who are struggling to feel accepted and loved because of the systems that BYU has in place to restrict liberal experimentation of one’s religious preference unless that preference is to convert to the Church of Jesus Christ of Latter-Day Saints. FreeBYU* targets changing current policies to promote religious freedom on BYU’s campus; however, until those changes are officially adopted, here are some possible resources for those who don’t quite fit the mold to find community and live according to the standards in which they feel most comfortable. The social consequences for publicly expressing one’s shift in religious belief from LDS member to non/partial-believer can be dire. If you are struggling, welcome! If you don’t feel this guide is for you, I hope you can pass this along to anyone you feel might benefit from it. We depend on all people&mdash;independent of where you fall on the spectrum of belief&mdash;to aid in creating and fostering a healthy environment for everyone who wants to call themselves a part of the BYU campus family.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <Link className="w-100" to="/student-experiences" onClick={scrollFunction}><button style={{ 'fontSize': 'inherit' }} className="btn btn-outline-info w-100"><h3>Find out more about what students experience at BYU</h3></button></Link>
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <a className="w-100" href="/topics"><button style={{ 'fontSize': 'inherit' }} className="btn btn-outline-info w-100"><h3>How to Survive at BYU</h3></button></a>
                        </div>

                        <p style={{'fontSize':'60%'}}>*Update: FreeBYU seems to have gone offline. You can access the archive of their site/mission <a href="https://web.archive.org/web/20201108141404/http://www.freebyu.org/">here</a>.</p>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default Home;