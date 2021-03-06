import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>About</title>
                <meta name="description" content="About the minds behind the byu survival guide." />
            </Helmet>
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            About
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <p>
                            This is the work of many individuals. Some of us are willing to be named, but others have chosen to remain anonymous for the sake of preserving relationships and their school-standing. We appreciate the work of all those who contributed. This project could not be what it is without your valuable insights. <br/>
                            <br/>
                            As for us who can and want to be named:

                            <div className="card my-4 about-card">
                                <div className="card-body">
                                    <h2 className="card-title mt-0">Andrew Jacobs</h2>
                                    <p>
                                        I used to be a student at BYU. I lost my faith in the Mormon church while there. I eventually found and became part of a group of students who had similarly lost their faith. Realizing that there were others like me who were not lucky enough to stumble upon our very hard to find group, and realizing that advertising the existence of our group was not academically safe, I came up with the idea of a 'survival guide' that would spread helpful information to other students who need it. In order to be more public about the project, lending it more credibility and trustworthiness, I transferred to University of Utah.<br/>
                                        <br/>
                                        Now there, I study Philosophy with a focus on <i>Philosophy of Mind</i> and <i>Moral Philosophy</i> with the ultimate intent of further developing the philosophy of <i>Mental Security</i>.
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="andrew-jacobs-yt" width="560" height="315" src="https://www.youtube-nocookie.com/embed/WS_3d2H2mzk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-4 about-card">
                                <div className="card-body">
                                    <h2 className="card-title mt-0">Jared Brinton</h2>
                                    <p>
                                        I am a BYU alumnus. I underwent my faith crisis after my freshman year and while serving a mission. The first few years were tough and having people I could be open about my thoughts and experiences with is what helped me through. After returning to BYU, I helped start a BYU exmormon group that built needed support both for myself and for others. What started as a small friend group soon turned into a large community spanning three BYU schools. I’m hoping that this website and the groups behind it can continue into the future and make it easier for those who find themselves in similar situations. <br/>
                                        <br/>
                                        I graduated with a bachelor’s in Information Systems in 2019. I work in IT, live with my wife and two cats, and continue to participate in the community from time to time.
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="jared-brinton-yt" width="560" height="315" src="https://www.youtube-nocookie.com/embed/kzYb_aceGGA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-4 about-card">
                                <div className="card-body">
                                    <h2 className="card-title mt-0">Bradley Butters</h2>
                                    <p>
                                        I lost my faith at the beginning of my senior year in the mechanical engineering program at BYU. My familial, social, academic, and mental health challenges became distressing enough as a result of my faith crisis that I realized that myself and others NEEDED compassionate support in order to survive. I founded an underground support group for BYU students who had lost their faith and coordinated with other prexisting support groups to build community for students in distress.<br/>
                                        <br/>
                                        I graduated in 2019 with a bachelor's in mechanical engineering. I currently do composites engineering testing for Blue Origin, building rockets on Cape Canaveral in Florida.
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="bradley-butters-yt" width="560" height="315" src="https://www.youtube-nocookie.com/embed/mckY081OU4w?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9 mt-4">
                                        <iframe title="bradley-butters-yt-2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Vn_HVNyHnrA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default About;