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
                        </p>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default About;