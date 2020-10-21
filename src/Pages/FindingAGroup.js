import React from 'react';
//import {Link} from 'react-router-dom';

const FindingAGroup = () => {
    //    const scrollFunction = () => {
    //        document.body.scrollTop = 0;
    //        document.documentElement.scrollTop = 0;
    //    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="m-auto text-center text-white p-md-5 py-5" id="title">
                            Finding a Group
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <p>
                            Everything discussed here is obviously going to vary from group to group, but hopefully this can give you a fair idea of what you can expect from going to a group. We always love new friends and new perspectives. Hope to meet you someday! <br/>
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <a className="w-100" href="https://goo.gl/forms/96X1K6CNNU5dWPvH3"><button style={{ 'fontSize': 'inherit' }} className="btn btn-outline-info w-100">Fill out this survey to find a group near you!</button></a>
                        </div>
                        <p>
                            This page is designed to mitigate any risk that may arise when searching for a group or when trying to reach out to people who may be in need of a group. To help with any concerns regarding this process, we maintain anonymity for both us and you while we help you find a group. That will only be removed once both parties feel comfortable and have built a decent amount of trust. <br/>
                            <br/>
                            Be cautious when looking for groups publicly. Personally, I haven’t met anyone who is specifically out to discover and take down any exmormon or post-mormon groups; however, I have heard that it’s happened in the past so be careful! <br/>
                            <br/>
                            Having a good group to meet and bond with like-minded individuals is tremendously beneficial to mental health. I do recommend finding one if you’re feeling isolated or depressed in your current situation. <br/>
                            <br/>
                            If you feel like you don’t fit into the particular group you find, don’t worry about it. Just move along and try finding a different group.  As well, don’t feel like you have to participate in drinking, doing drugs, or be non-straight to participate in any of these groups. While some groups do offer a social acceptance for such activities, the purpose of these groups is to create a space of non-judgment for all ideals and values. <br/>
                            <br/>
                            <b>These groups are a place to experiment socially and practice acceptance. </b>The only rules of most groups are likely going to be (1) secrecy and confidentiality, (2) tolerance for all people of all walks of life, and (3) willingness to adjust your ideals in order to make room for others’ to practice doing the same. <br/>
                        </p>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default FindingAGroup;