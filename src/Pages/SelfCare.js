import React from 'react';

const SelfCare = () => {
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
                        <p>
                            It’s important to take care of yourself. From eating well, to getting enough exercise, to maintaining mental health, you need to establish a strong discipline of self-care. <br/>
                            <br/>
                            There’s no requirement of feeling unhealthy to seek professional guidance or make accommodations for yourself. Please take care of yourself as best you can. You’re valued and we care about you. Don’t hesitate to reach out via the <a href="finding-a-group">Finding a Group</a> page if you’re in need of a community/social support system. <br/>
                        </p>
                        <SupportList />
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

const SupportList = () => {
    return (
        <div>
            <div className="row m-auto mx-2">
                <div className="col-md-11 bg-info">
                    <h3 className="text-white text-center"><b>INSERT TITLE HERE</b></h3>
                </div>
                <div className="col-md-1 bg-info">
                    <h3 className="text-white text-center btn btn-info">V</h3>
                </div>
            </div>
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

export default SelfCare;

/*
            <div className="btn-group btn-group-toggle row mx-2 m-auto w-100" role="group" aria-label="Content Selector">
                <label className="col-md-3 btn btn-info active">
                    <input type="radio" name="page-selector" id="selectHarm" defaultChecked />Harm Prevention Resources<br /><i className={`fas fa-chevron-down`} style={{ 'fontSize': '90%' }}></i>
                </label>
                <label className="col-md-3 btn btn-info">
                    <input type="radio" name="page-selector" id="selectCare" />General Self Care<br /><i className={`fas fa-chevron-down`} style={{ 'fontSize': '90%' }}></i>
                </label>
                <label className="col-md-3 btn btn-info">
                    <input type="radio" name="page-selector" id="selectCallings" />Callings<br /><i className={`fas fa-chevron-down`} style={{ 'fontSize': '90%' }}></i>
                </label>
                <label className="col-md-3 btn btn-info">
                    <input type="radio" name="page-selector" id="selectBYU" />BYU Counseling<br /><i className={`fas fa-chevron-down`} style={{ 'fontSize': '90%' }}></i>
                </label>
            </div>
*/