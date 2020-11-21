import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
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
                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WS_3d2H2mzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-4 about-card">
                                <div className="card-body">
                                    <h2 className="card-title mt-0">Jared Brinton</h2>
                                    <p>
                                       [TEMP TEXT]
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kzYb_aceGGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-4 about-card">
                                <div className="card-body">
                                    <h2 className="card-title mt-0">Bradley Butters</h2>
                                    <p>
                                        [TEMP TEXT]
                                    </p>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mckY081OU4w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9 mt-4">
                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Vn_HVNyHnrA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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