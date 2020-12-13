import React from 'react';
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Helmet from 'react-helmet';

const SchoolTransferGuide = () => {
    let { path, url } = useRouteMatch();

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
        if (numActive === num) {
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
            <Helmet>
                <title>School Transfer Guide</title>
                <meta name="description" content="A guide for transferring from BYU to a different school." />
            </Helmet>
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="m-auto text-center text-white p-md-5 py-5" id="title">
                            School Transfer Guide
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <div id="cover" className="bg-white pb-1 mb-0">
                            <p>
                                I don’t want to reinvent the wheel, so here’s a great guide that <a href="https://www.reddit.com/user/sometimeInJune">u/sometimeInJune</a> made and posted on <a href="https://www.reddit.com/">Reddit</a>. I don’t know if I totally agree with the entirety of this guide, but it’s a great resource for exploring how one feels about transferring from BYU. Personally, I think its content is great, but maybe it’s not as effective for everyone. As with anything, take this with a grain of salt and assess your personal motivation for transferring: what are the pros and cons? What is the cost to your family/social stability? <br/>
                                <br/>
                                Take everything into consideration before making any sort of irreversible decision. <br/>
                            </p>
                        </div>
                        <div id="banner-wrapper">
                            <div id="supportContentBanner" className="row m-auto mx-2 align-middle">
                                <div id="left" className="col-10 bg-info">
                                    <h3 className="text-white text-center"><b>{subtitle}</b></h3>
                                </div>
                                <div id="right" className="col-2 bg-info p-0">
                                    <button id="selfCareButton" onClick={() => setArrow(!arrow)} className="text-white text-center btn btn-info w-100 h-100 p-0 active"><h3><i className={`fas fa-chevron-down ${alterArrow(arrow)}`} style={{ 'fontSize': '100%' }}></i></h3></button>
                                </div>
                            </div>
                            <div id="content-selector" className={arrow ? '' : 'show'}>
                                <div className="row m-auto mx-2 align-middle">
                                    <Link className={`col-10 btn-info btn border-0 first-item ${isActive('1')}`} onClick={() => buttonFunc('1')} to={`${url}`}><h3 className="text-white text-center px-2"><b>Why Should You Tranfer?</b></h3>
                                    </Link>
                                    <Link className={`col-10 btn-info btn border-0 ${isActive('2')}`} onClick={() => buttonFunc('2')} to={`${url}/part2`}><h3 className="text-white text-center px-2"><b>How to Transfer From BYU</b></h3>
                                    </Link>
                                    <Link className={`col-10 btn-info btn border-0 ${isActive('3')}`} onClick={() => buttonFunc(3)} to={`${url}/part3`}><h3 className="text-white text-center px-2"><b>How to Survive While at BYU</b></h3>
                                    </Link>
                                </div>
                            </div>
                            <Switch>
                                <Route exact path={path}>
                                    <Part1 setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route path={`${path}/part2`}>
                                    <Part2 setSub={setSubtitle} setActive={setNumActive} />
                                </Route>
                                <Route path={`${path}/part3`}>
                                    <Part3 setSub={setSubtitle} setActive={setNumActive} />
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

const Part1 = (props) => {
    props.setSub('Why Should You Transfer?');
    props.setActive('1');

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item">
                    <sup className="text-info"><em>By Ivy League Transfer Student &mdash; <a href="https://www.reddit.com/r/exmormon/comments/6sysqq/guide_part_1_why_you_should_transfer_from_byu_by/">Original Post</a></em></sup><br/>
                    <h3>Introduction</h3>
                    <p>
                        In my last post, I offered an open invitation to help those interested in transferring from BYU. My inbox was flooded with responses! I am happy to help. I am also sad, because I have come to realize that there are very few resources on how to leave BYU. Further, most people who are in the transfer process usually keep it a secret, and with good reason (HCO), so you can’t really work together. My hope is that this guide will serve as a good resource for all the people in the future who are interested transferring. I also hope that this will help you students at BYU understand that you DO have options, and that you have a community that loves you and understands you. You are NOT alone. We on the other side are fighting for you!
                    </p>
                    <p>A couple notes before you read this guide: <br/>
                        <ol>
                            <li>This guide contains both qualitative information (my views towards BYU, education, and debt) and quantitative information (how to successfully transfer / bolster you chances of upgrading). Some people may disagree with my opinions; that is fine. However, the technical information here is invaluable and I wish I had it earlier on. Again, I successfully transferred from BYU to an Ivy League, so I feel very qualified on this front.</li>
                        </ol>
                    </p>
                    <h3>The Purpose and Value of an Education</h3>
                    <p>
                        The answer to this question varies from person to person. In this section, I will outline the two main schools of thought, and, regardless of which school of thought you belong to, show why you should transfer from BYU. I personally believe the purpose of an education lies at the intersection of these two dogmas. <br/>
                        <br/>
                        1. <b>The Philosopher</b>: According to this school of thought, University is a time to expand your academic horizons, to learn about the world around you, to challenge and/or refine your pre-existing views. If you aren’t ever uncomfortable in a University, your teachers are not challenging your traditional views. Your University experience should strengthen some of your views and render others vulnerable. Your mind should be broadened: you should come out a scholar, one who is capable of communicating with people from many different backgrounds. You should learn how to learn and how to communicate effectively with people from all over the world. <br/>
                        <br/>
                        <b>BYU and the Philosopher</b>: If this is what you think college is about, to learn more about the world around you, to broaden your horizons, to achieve an improved state of understanding, to challenge everything you know, you should leave BYU. Why? BYU is a place to learn information that does not conflict with LDS beliefs. It is a place for safeguarding the LDS belief. Professors are not allowed to publish findings that contradict the church’s teachings. Further, many professors are scared to teach certain topics because they don’t want to ruin their students testimonies (my science teacher, but that’s a story for another time). Or you’ll even get taught false information (throwback to sociology class where I learned that children of gay couples get consistently lower test scores and have lower IQ’s than children of straight parents–this research turned out to be falsified, btw, but that’s a story for another time. Don’t worry, the teacher later issued an apology to the students of the class via email). Most importantly, you’ll find you are scared to ask certain questions or argue certain viewpoints because you don’t want to get investigated. This completely defeats the purpose of University. You do not objectively observe truth. You are not exposed to everything in the world. Your intellectual growth is stunted and one-dimensional. You’ll often have already thought of comments your peers have. At another university, your diverse peers will be more likely to present interesting, unexpected views (and nobody will bring up the Lion King or the Circle of Life in biology class…sigh, only at BYU). Chances are, if you’re on this forum right now, you’re smarter than most of your peers as well (you beat the cog dis), and BYU is preventing you from realizing your true potential. <br/>
                        <br/>
                        2. <b>The Pragmatist</b>: Pragmatists view college as a financial investment. You pay a certain money now for your degree, expecting to make more on the return later on. College grants you the ability to enter the workforce and make a living. Depending on your field, college simply gives you a diploma that says “I’m smart enough and I can learn things”, or college gives you actual skills that help with your career (think engineering, nursing, accounting, and the like). Many pragmatists believe that it does not matter where you go to school for this very reason. Other pragmatists believe you should choose a higher ranking school because of the network it places you into or because the reputation of the program will better your job placement. <br/>
                        <br/>
                        <b>BYU and the Pragmatist</b>: BYU does not fail the Pragmatist nearly to the same degree it fails the Philosopher. BYU provides a good technical education. Meaning if your goal is to become a Dentist, a Doctor, an Accountant, a Nurse, a Teacher, an Engineer, or a mid-level management Businessman, BYU will get you there. However, if your goal is to become a 7 figure hotshot (C-suite of Fortune 500 company, Hedge Fund Manager, Senior Management at McKinsey, etc), BYU is not sufficient. Those who go on to make SERIOUS money and came from BYU either 1) Invented something or 2) Went to top-notch grad schools. I cannot stress to you how important your network is in college when starting out your career. As an Ex-Mormon BYU grad, you are stripped of your network—save you feign Mormonism—AND you’re questionable to those outside of your network. Every time you turn your resume into a recruiter, you take a gamble on whether the recruiter will see the BYU name and think “hardworking and honorable” or “homophobic and closed-minded.” <br/>
                    </p>
                    <h3>Stress and Health</h3>
                    <p>
                        If you are suffering from crippling depression, feel extremely ostracized, are prone to suicidal thoughts and tendency, LEAVE. “But, but, my grades at BYU aren’t good enough to transfer anywhere better and, and the Marriott School name…” I’ve had friends at BYU who were ex-Mormon, LGBT, non-Mormon who were just miserable. Their grades suffered, their health was extremely questionable, and yes, they often considered suicide. If you fall into this category, leave. I promise you will be happier at another school, your grades will be better, and you will have a better outlook on life. If you have to transfer to UVU, do it. It’s better to come out with a UVU degree than play with suicide. If you feel depressed and ostracized, but you aren’t suicidal and think you can hack it, make sure you’ve got good tools that will keep you sane and safe. I can later make another post about how some of my at-risk friends survived.
                    </p>
                    <h3>Life-long Branding</h3>
                    <p>
                        From Facebook, to Instagram, Tinder, high school reunions and the like, where you went to college will follow you, and people will assume things about your character based off of where you went. With the BYU branding, be prepared to always have to give a lengthy explanation about why you went there and how you aren’t Mormon. And remember this: the college you went to is something you will have to live with, not your parents. It is a part of you that you will never be able to change. The closest thing you can do to remove that brand is attend grad school and only tell people that school name. Personally, I’d rather go to a school I am proud to share with people, or a school that I chose myself. Your college degree is something that you worked hard for, don’t you want to be proud of it instead of hide it?
                    </p>
                    <h3>Friends and Network</h3>
                    <p>
                        Network kind of falls into job, but I’ll talk about this here too. In college, you will meet lifelong friends and possibly your future spouse (please note, people outside of Utah think it is WEIRD to get married during college). If you are Mormon and planning on staying in Utah or the west, you should be sitting pretty happy at BYU. However, if you aren’t, you should take that into account. Most people who go to BYU are Mormon and west coast people. When you are no longer Mormon, will these people in your BYU network be as eager to help you out? Will BYU alumni see you as a betrayer of sorts, someone who got a cheap education off of their tithing? Someone who robbed a faithful LDS student of an opportunity to go? I’ve gotten targeted for that one already. People often use their alumni network to make career advancements and find friends– you won’t be able to, unless you fake being Mormon. And as for the east, the BYU network isn’t very strong out there. Also, during your stay at BYU, will you be making life-long friendships? Or will you be putting on a Mormon front or hiding away, trying to eek by without getting noticed? You’re missing out on some sincere friendships you could be making elsewhere. Note that those fellow ex Mormons at BYU could be your sincere friends, but they are also hiding away too, making it hard for you to connect with them. There is no “ex-Mormon” club at BYU, and any group you can join that will connect you to ex-Mormons has a certain level of risk involved.
                    </p>
                    <h3>Career Aspirations</h3>
                    <p>
                        I went over this a bit in the “BYU and the Pragmatist” section, but I’ll go over a few other example careers that do not bode well for BYU grads:
                        <ul>
                            <li>Politics: You lose Liberal support and a chunk of Conservative support #RIPMitt</li>
                            <li>Life Science Research: I’ve heard a degree in Biology from an institution that denies evolution is a tough sell. Sure, the professors may support evolution, but the school’s official stance doesn’t reflect that.</li>
                            <li>Wall Street: BYU kids love to tout the Marriot School, but honestly, BYU doesn’t stand very tall when competing with finance behemoths such as U Chicago, Wharton, Columbia, NYU, Harvard, Yale, Northwestern, and the like. You’ll have to fight and network hard to get into the bottom spot at an Investment Bank. And remember, your network respects your LDS status, not so much your BYU label. Further, BYU may be the big fish in Utah, but nationwide its ranking is consistently 68-71 with roughly a 50% acceptance rate. Not many people out here in the east know BYU, either. Take that as you will. Your success in this field will largely depend on how hard you network.</li>
                        </ul>
                    </p>
                    <h3>Common Setbacks</h3>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>Finances:</h4>
                    <p className="ml-5">
                        This topic is so controversial and has so much detail that I made a whole section dedicated to it (it’s later on). Just know that college debt is okay as long as you are responsible and have a plan. For some reason, Mormons have been raised to believe that all debt is bad, even college debt. Your education is the most important investment you will make in your life. Don’t let debt scare you away from the thought of transferring. Many older ex-Mormons say looking back they would have taken the debt for in exchange for a different college brand and experience in a heartbeat. Others are happy with their inexpensive BYU education. Talk to people.
                    </p>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>Support:</h4>
                    <p className="ml-5">
                        Emotional support, financial support, family, friends, you name it—many people lose this when they transfer. Leaving BYU is often a declaration to the world that you are done with Mormonism. You are leaving Zion for Babylon. This is often the hardest part for students. Unless you plan on feigning Mormonism for your whole life (I really hope you don’t do this), know that you’re going to have to go through this process sooner or later. If you do it during college, you’ll be able to establish a new, non-Mormon friend base at your new school. Know that when you grow up, the amount of time you spend with your family (not meaning wife and kids) gets less and less and less. You create your circle of friends and companions. And if your family practices unconditional love, they will come around eventually. And if not, you’ll only be able to maintain a relationship with them at your own expense. Do you want to live for them or for yourself? I can’t answer that for you. But from personal experience, my family cut me off and about a year later they came around. All is well now. Our relationship is much more open because I can be myself and translucent around them. No more hiding or pretending. As for friends, I’ve got a couple Mormon friends still who accept me for who I am. Others have unfriended me on Facebook and unfollowed me on Instagram! Those Mormon friends who stuck by me have become some of my best friends. Those who left are no longer in my life. I think it’s better that way anyway.
                    </p>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>Certain Programs / “Harvard of the West”:</h4>
                    <p className="ml-5">
                        I don’t know what it is, but Mormons are pretty jaded by the “Harvard of the West” (reality check: that’s Stanford, not BYU). Growing up, LDS children aren’t told “Wow, you’re so smart, you could get into Yale!” Instead, they are told “You’re so smart, you could get into BYU Provo!” BYU kids constantly tout how hard it is, and even tell me it’s harder or just as good as any top-ten university. I sincerely think BYU is a good school, and I value my time there. However, I feel it is necessary to address the real rankings of BYU, and how it really isn’t as amazing as you’re led to believe while you study there. I understand many of you attended BYU, and I’m sure the education served you well. I do not mean to invalidate your education. It is necessary, however, to objectively discuss how good BYU actually is in the eyes of non-BYU students (which is what most of the country consists of). <br/>
                        <br/>
                        <b>Marriot School</b>: <br/>
                        Not ranked in the top 96 US MBA programs &mdash; <a href="http://www.economist.com/whichmba/full-time-mba-ranking?page=5&year=2016&term_node_tid_depth=77633">Economist US MBA Programs</a>;<br/>
                        Ranked #34 according to <a href="https://www.usnews.com/best-graduate-schools/top-business-schools/brigham-young-university-marriott-01225">US Times</a>; <br/>
                        I’d like to note that the Accounting program is consistently <a href="https://www.usnews.com/best-colleges/rankings/business-accounting">very well-ranked</a>. If you want to land a spot in the Big 4, or Accounting is your passion, sure, consider staying at BYU. However, don’t expect your typical Wall Street headhunters to jump up and down for a BYU Accountant. They’ll compare BYU as whole to, say, Duke, not BYU’s Accounting program to Duke’s Accounting program. <br/>
                        <br/>
                        <b>Computer Animation</b>: <br/>
                        11 according to <a href="http://www.animationcareerreview.com/articles/top-50-animation-schools-and-colleges-us-%E2%80%93-2017?page=0,1">Animation Career Review</a>; <br/>
                        One of about 100 of <a href="http://www.dreamworksanimation.com/universityrelations/">Dreamworks Partner Schools</a> <br/>
                        <br/>
                        <b>Nursing</b>: <br/>
                        Not in top 50 according to <a href="http://www.collegechoice.net/rankings/best-undergraduate-nursing-schools/">collegeChoice</a>; <br/>
                        Not in top 30 according to <a href="http://www.nursingschoolhub.com/cutting-edge-nursing/">Nursing School Hub</a> <br/>
                        <br/>
                        <b>Engineering</b>: <br/>
                        Ranked 91 by <a href="https://www.usnews.com/best-colleges/rankings/engineering-doctorate">US News</a>; <br/>
                        Ranked 66 by <a href="https://www.niche.com/colleges/search/best-colleges-for-engineering/">Niche</a> <br/>
                    </p>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>Can’t Get Into a Better School:</h4>
                    <p className="ml-5">
                        Some of you may have not done very well at BYU and don’t want to transfer into a worse school. This is understandable, and is one of the better reasons for not transferring, at least until you get your GPA up. Let’s suppose you had a bad Freshman year and your GPA is a 2.5. If you work your tail off summer and spring semesters, now your GPA is about a 3.0. Add a Sophomore year of straight A’s, and now you’re at about a 3.4. We can work with that. Many colleges understand bad Freshman years. If you show an awesome upward trend, they will overlook a rocky start. Example A: I had a 2.9 GPA freshman year and an Ivy League overlooked it. Granted, I hauled ass after Freshman year, but if you really want it, you can do it too. In the worst case scenario, you take an extra year (or two) at BYU and get straight A’s and apply the other recommendations I go over later on. You can do this. Believe in yourself.
                    </p>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>Don’t Want to Waste Credits and Time:</h4>
                    <p className="ml-5">
                        I’m going to chastise you a bit here. This is you listening to the system of “You need to graduate at age xx and after xx years of college.” You’ve got to let go of this mentality. Unless you’ve got a TON OF DEBT on your shoulders (from BYU? Hardly likely), or a family member you need to financially support ASAP, you should not worry about this. Life is an adventure. You shouldn’t have to feel pressured to conform to what’s “expected.” <br/>
                        <br/>
                        If you feel lots of pressure about doing certain things by a certain age, please read the following:
                        <blockquote className="ml-3">
                            At age 23, Tina Fey was working at a YMCA. <br/>
                            <br/>
                            At age 23, Oprah was fired from her first reporting job. <br/>
                            <br/>
                            At age 24, Stephen King was working as a janitor and living in a trailer. <br/>
                            <br/>
                            At age 27, Vincent Van Gogh failed as a missionary and decided to go to art school. <br/>
                            <br/>
                            At age 28, J.K. Rowling was a suicidal single parent living on welfare. <br/>
                            <br/>
                            At age 28, Wayne Coyne (from The Flaming Lips) was a fry cook. <br/>
                            <br/>
                            At age 30, Harrison Ford was a carpenter. <br/>
                            <br/>
                            At age 30, Martha Stewart was a stockbroker. <br/>
                            <br/>
                            At age 37, Ang Lee was a stay-at-home-dad working odd jobs. <br/>
                            <br/>
                            Julia Child released her first cookbook at age 39, and got her own cooking show at age 51. <br/>
                            <br/>
                            Vera Wang failed to make the Olympic figure skating team, didn’t get the Editor-in-Chief position at Vogue, and designed her first dress at age 40. <br/>
                            <br/>
                            Stan Lee didn’t release his first big comic book until he was 40. <br/>
                            <br/>
                            Alan Rickman gave up his graphic design career to pursue acting at age 42. <br/>
                            <br/>
                            Samuel L. Jackson didn’t get his first movie role until he was 46. <br/>
                            <br/>
                            Morgan Freeman landed his first MAJOR movie role at age 52. <br/>
                            <br/>
                            Kathryn Bigelow only reached international success when she made The Hurt Locker at age 57. <br/>
                            <br/>
                            Grandma Moses didn’t begin her painting career until age 76. <br/>
                            <br/>
                            Louise Bourgeois didn’t become a famous artist until she was 78.
                        </blockquote>
                        Life isn’t a race, and honestly, when you’re 90, you aren’t going to think “Gee wiz, I sure wish I graduated a year or two earlier!” A popular argument for graduating as early as possible is for every year later you graduate, you sacrifice a year of your peak income. Example: A 24 year old graduate will have, what, 31 years of income, whereas a 25 year old graduate will have 30 years of income, with the final, highest paid year being the difference. You’ll have to do some soul searching as to what you value in life here. <br/>
                        <br/>
                        As for myself, I had between 90 and 100 credits when I transferred from the Y. My current University accepted most of them, but only allowed me to count 60 for my 124 credit requirement.
                    </p>
                    <h4 className="ml-4" style={{"text-decoration":"underline"}}>“I’ll just go to grad school”:</h4>
                    <p className="ml-5">
                        This IS an option for some people. However, this only really works for the Pragmatist, and not for the Philosopher. Why? In Grad School, you don’t critically evaluate your views of the world. You focus on your trade and sharpen your skills. Now, I will say this: if you are dead-set on grad school anyway, you may want to stay at BYU for your undergrad. Why? You’ll be going into debt for your grad program, and you might not want to pile undergrad debt on top of that.
                    </p>
                    <h3>Financial Considerations</h3>
                    <p>
                        Let’s get one thing straight: TSCC is not making BYU cheap out of the kindness of their hearts. No sir. It’s an investment for them. Subsidize a student’s tuition in exchange for 10% of their life earnings? Hell yeah! If an LDS person is ever going to leave the Church, it’s going to be during college when they are encouraged to explore new methods of thought. It’s going to be when they learn about other cultures and expand their mind. At BYU, students are required to go to church, required to learn about the world from an LDS perspective, and are extremely pressured to get married, thus really keeping them stuck in the Church. Let’s also not forget to mention the students who get baptized at BYU due to insane fellow shipping and peer pressure—I’m sure the Church digs that too. <br/>
                        <br/>
                        This low cost makes it very hard for a student to leave. Why? Many parents refuse to fund a student at another university, or they agree to only give BYU’s tuition amount. So, chances are you are in a pickle. <br/>
                        <br/>
                        As a BYU student, you were lucky in the fact that you most likely didn’t have to worry about debt. If you were one of the students that did, you were lucky to experience an extremely minute amount compared to the typical college student. The average student belonging to the Class of 2016 (nationwide) had <a href="https://studentloanhero.com/student-loan-debt-statistics/">$37k of debt</a>. You can get a whole four years in at BYU for less than that. <br/>
                        <br/>
                        BYU is about 6k a year. Your average tuition for a private school is 34k, 10k for in-state students at state schools, and 25k for out-of-state students at state schools. The best private schools in the nation are usually more expensive than <a href="http://www.collegedata.com/cs/content/content_payarticle_tmpl.jhtml?articleId=10064">these figures</a>. If you’re lucky enough to be a resident of a state that has an awesome flagship school and the state school system doesn’t have a thing against transferring from out of state schools (screw you, California), you’re in a good boat. <br/>
                        <br/>
                        You’re going to pay for this difference in one of a few ways: Mom and dad / Legal guardian; Loans (you’re either over 24 or you’ve got a cosigner); Military benefits or something like that; or Scholarships. <br/>
                        <br/>
                        Now, obviously each school has a different price tag. The rule of thumb is usually this: <b>Take less debt than you will make from your first year in the work force.</b> There is always an exception the rule though (Dentists, Doctors, T14 Lawyers, Top School Finance Guys). Note, if you are pre-professional and need graduate school to begin practicing, maybe consider saving the debt for grad school and sticking it out at BYU. <br/>
                        <br/>
                        That being said, if you don’t have much assistance with school financing, your options will be more limited with certain degrees/ majors, say an English major opposed to a Mathematics major. It sucks, yes, but that’s how the cookie crumbles. <br/>
                        <br/>
                        My advice? <br/>
                        <ul>
                            <li>See what financial aid is offered to transfer students</li>
                            <li>See what scholarships are offered to you (Minority, LGBTQ, etc)</li>
                            <li>FAFSA</li>
                            <li>See how much debt you’ve got left–assume less opposed to more in terms of how much money you will win.</li>
                            <li>Look at what jobs your major typically takes students to</li>
                        </ul>
                        If your major (English, Philosophy, Sociology, Psychology, Biology, Chemistry, Athletic Training, Food Science, Nutrition, Political Science… basically any non-STEM or FAME* major) doesn’t directly translate into a job that will cover an absorbent amount of debt, you’ve got a few options: <br/>
                        <ol>
                            <li>Max out your potential transfer credits at BYU then transfer, thus minimizing the time at your new University and therefore the cost</li>
                            <li>Plan on working outside of your field until your debt is paid, then return to it (easier said than done, but if you can do this, do it)</li>
                            <li>Go to a cheaper school</li>
                            <li>Major in something else and Minor in what you love<sup>&#10013;</sup></li>
                            <li>Pause school, work for a bit / save money, then return to school</li>
                            <li>Stay at BYU</li>
                        </ol>
                        <div className="mt-2" style={{ 'font-size': '65%' }}>*Quick note on FAME majors: FAME = Finance Accounting Marketing and Economics. Save economics, these majors’ courses are a little harder to transfer. Well, even BYU’s Econ 110 class (combined micro and macro) won’t suffice for some schools. Also note that many schools don’t have undergrad business majors; instead, students interested in going into business get a degree in economics, and I think this is great. Why? Econ teaches you how to think—Accounting, Finance, or Marketing are less think-intensive and more skill intensive. This isn’t just my mindset either—the McKinsey recruiters I’ve talked to told me they value Econ majors more than biz majors, and will give Econ majors more GPA leniency (I was never an econ major, so no, they didn’t tell me this just to be nice). As always, research this out yourself and talk to people.</div>
                        <div className="mt-2" style={{ 'font-size': '65%' }}><sup>&#10013;</sup>I can’t tell you which option is best between these last four options. This depends on your drive and your career aspirations, and the schools you are comparing. Also, it takes a very driven person to pause school and return. I usually don’t recommend that, because the amount of money you will make during your break is much less than the money you will receive after you graduate, so in essence you are losing money. However, it is an option, and people have done it. Now, if you DO go this route, contact me because you become a non-traditional student and I’ve got some contacts in the admissions office of my current school that deal strictly with transferring non-traditional students.</div> 
                        <br/>
                        <b>Some good advice I received:</b> If you don’t know what you want to do, major in the hardest thing you believe you can do. It’s much easier to go into acting or advertising with an Engineering degree than the reverse. Also, it will show employers you’re smart, regardless of what field you’re going into. Don’t know what to major in? If you’ve got a knack for it, I highly recommend Math or Statistics with some programming courses on the side. That will set you up for some good jobs right after college. <br/>
                        <br/>
                        <b>Example of Point 2:</b> If your field requires a good brand and an awesome network (business, finance, politics– “who you know &gt; what you know” sort of field) you really should go to a top school at all costs. If you have to take your poli-sci degree to a consulting firm for a couple years to pay off that debt, so be it. Or if you’ve got to minor in poli-sci and major in a money-making field to afford your Boston College or University of Virginia degree, so be it. <br/>
                        <br/>
                        <b>One last point:</b> Many will scoff and think that transferring from BYU is ridiculous, seeing how much you’re paying for what you’re getting. My thought is this: my undergraduate education is priceless, and I won’t be able to get another shot when I’m older. Going in for another bachelors degree when you’re older is not nearly the same as doing it when you’re the same age as everyone else. Also, I strongly believe in my ability to pay off my debt. In the end, you’re the one who will have to pay off your debt, so you’ll have to choose between money and life-changing experiences. The fear of the unknown is huge, yes, but I have NEVER met someone who transferred from BYU and regretted it. I know a plethora of people who regret not transferring, however. As always, reach out to those who did transfer and those who didn’t. Maybe we can make a new post about that.
                    </p>
                </li>
            </ol>
        </div>
    );
};

const Part2 = (props) => {
    props.setSub('How to Tranfer From BYU');
    props.setActive('2');

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item">
                    <sup className="text-info"><em>By Ivy League Transfer Student &mdash; <a href="https://www.reddit.com/r/exmormon/comments/6sytp8/guide_part_2_how_to_transfer_from_byuby_ivy/?st=j67ekrw7&sh=72701f20">Original Post</a></em></sup><br />
                    <h3>Introduction</h3>
                    <p>
                        This is a continuation of a three part series. This part focuses on how to transfer from BYU to a better school. I apologize for the bad formatting, this is my first time making huge posts like these. I will return to improve it. Enjoy!
                    </p>
                    <h3>Choosing Schools to Transfer To</h3>
                    <p>
                        This depends on your goals, really. Personally, I’d attend the schools that give me the most opportunity afterwards. <br/>
                        <br/>
                        <b>Example:</b> Virginia Tech vs University of Virginia<br/>
                        <br/>
                        Virginia Tech has better engineering and CS programs than UVA, that’s for sure. However, in the broader scope of things, (sorry VT fanboys) UVA is held in higher regard nationally. I’d choose UVA because then my degree is well-known in all areas, instead of mainly my niche. Most people don’t know what they want to do later on. Most people jump careers. An overall better school would help you in case you end up switching careers later on. Now, if it’s between Julliard and University of Michigan, well… you’re probably too good at acting or music to not go to Julliard and become a professional. Anyway, that’s a personal decision. <br/>
                        <br/>
                        If you’d like the list of schools I was considering, here they are:
                        <ul>
                            <li>Mega Win: Ivies, U Chicago, MIT, Stanford</li>
                            <li>Win: Duke, Northwestern, U of Virginia, U of Michigan, UC Berkeley, UCLA</li>
                            <li>Safeties: Boston College, U of Boston</li>
                        </ul>
                        I didn’t go for NYU because their tuition assistance is just disastrous, and there are better, cheaper schools I felt I could get into. If I was a resident of Texas or Georgia, I’d definitely be going for UTA or Georgia Tech, respectively. <br/>
                        <br/>
                        I felt confident I could get into U of Virginia and U of Michigan after talking with their admissions officers. I found the transfer acceptance rate into U of Michigan (an awesome school) is actually higher than their standard admissions rates.
                    </p>
                    <h3>How to be an Awesome Transfer Candidate / How I got into an Ivy</h3>
                    <p>
                        I’m guessing most people here will skip to this section, so I’ll do my best to not disappoint! <br/>
                        <br/>
                        Here’s what you’re going to need when you transfer:
                        <ul>
                            <li>Relationship with Admissions Officers</li>
                            <li>2-3 Letters of Recommendation</li>
                            <li>A good GPA</li>
                            <li>An awesome essay</li>
                            <li>Classes to take</li>
                            <li>Academic record reports</li>
                        </ul>
                    </p>
                    <h3>Relationship with Admissions Officers</h3>
                    <p>
                        I don’t care who you are, when you apply, there will be at least 100 kids who are just as qualified or more qualified than you are. What’s going to set you apart from the others is how the little star next to your name meaning <i>they actually know you</i>. This same idea also applies to getting a job. <br/>
                        <br/>
                        Call the admissions office and do your best to land a phone call. TREAT THIS CALL AS AN INTERVIEW. In fact, after I got into my school, the admissions officer revealed to me that my first phone call with him also helped determined whether I’d get in or not. This means you need to research the heck out of the school you’re talking to before you talk to the admissions advisor. Make it look like you’re REALLY interested in this school, and that you’re excited to contribute when you set foot on campus. Bring up obscure traditions or cultural things about the school. Scour the reddit pages of each school and look for specific things you can talk about when talking to the admissions officer. DON’T talk about how “U of M has great connections with Google” or “Columbia will get me into Goldman Sachs!” Bad, bad, bad, bad! Admissions officers are more often philosophers rather than pragmatists&mdash;<a href='topics/school-transfer-guide/'>see my first post on philosophers and pragmatists</a>. They live for academia and the culture of learning—that’s why they work in the admissions office of a university instead of diving headfirst into capitalism. So, talk about the culture of learning at that university, or something of the sort, instead of the purchasing power of the diploma. <br/>
                        <br/>
                        Know your audience and cater to their interests. Also talk with them about the essay and what you are planning on writing on. Bring up your struggle with Mormonism, or whatever. See what they think about your proposed topic. <br/>
                        <br/>
                        <b>Protip:</b> Find these people on LinkedIn and find out as much as you can about them before you talk to them. This will impress them and help you better gauge how to talk to them. If they like you, they’re going to give you more tips about how to stand out amongst the other applicants. <br/>
                        <br/>
                        When talking to them, make sure you note what the application deadlines are. Also make sure to note whether or not there is a priority deadline. Do all of this earlier opposed to later. This will impress the admissions officers.
                    </p>
                    <h3>Letters of Recommendation</h3>
                    <p>
                        You need to develop a good relationship with your professors. These letters often separate the awesome students from the good students. Why? Most kids just ask a Professor who gave them an “A.” But not you! You’re on a mission. You’ll own this. Here’s how: 
                        <ol>
                            <li>Take multiple classes from the same professor. Make sure you visit his/her office hours often, send them emails talking about specific points from their lecture you had interest in / further questions on, and always <b>PARTICIPATE</b>. If nothing the prof. said interested you, FAKE INTEREST and MAKE UP QUESTIONS. This is a skill that will take you a long way in life (it’s called “networking”). Doing this will help you segue to point 2.</li>
                            <li>Become a Teaching Assistant for a professor. You can either do this for a professor whose class you’ve already taken or set yourself up for a teaching assistant position in the next semester. To do the latter option, make sure at the beginning of the semester you are very forth right with the professor. Feel free to use this template: “Hi Professor Young, I am very excited about this class subject. I am especially interested in (something you grabbed from the syllabus / reading list). I am also interested in potentially becoming a Teaching Assistant for this course. What are qualities you look for in potential Teaching Assistants?” You take the things said Professor says and you staple them onto your forehead (figuratively). You will become that. If you can become a Research Assistant, that’s even better.</li>
                        </ol>
                        <br/>
                        So here’s what you’ll most likely end up with: 
                        <ul>
                            <li>A letter from an employer / previous professor (Research Assistant -&gt; Teaching Assistant)</li>
                            <li>A letter from a professor you took multiple classes from and have an A+ relationship with</li>
                            <li>A letter from a professor you took one class from but built a great relationship with</li>
                        </ul>
                        <br/>
                        <b>Getting the Letter:</b> This is similar to getting the TA job. Make sure at the beginning of the semester you let them know you’re trying to get a letter of recommendation, and ask them what separates the best students from the good students in their eyes. If they ask what the letter is for, tell them you are trying to transfer. If they pry further, you can say you are transferring for family or health reasons. Go into as little details as possible, and preferably tell them you’re planning on transferring after they’ve come to love you and not before. Also, don’t tell the teacher you’re trying to become a TA for that you’re going to transfer. Wait until after your hired. 
                    </p>
                    <h3>Have a Good GPA</h3>
                    <p>
                        Depending on where you are at in your BYU career, this will be not so difficult to very difficult. If your GPA is trash, really consider going to school year round (this will also expose you to more letters of recommendation / teaching assistant opportunities). If you want to transfer to a better school than BYU, you really should shoot to have a GPA of 3.5+, with your past year being a 4.0 <i>especially </i>in your major courses. Remember, you’ll be competing with kids who got a 4.0 from community college. The higher your GPA is, the better. I’m not going to go too in depth of what you need to do to get a good GPA because there’s already swaths of info all over the internet on this. Just be prepared to sacrifice your social life for this one.
                    </p>
                    <h3>The Essay</h3>
                    <p>
                        Your essay is going to differ from school to school. There usually is one generic “self-portrait” (I hate this term) / “why I’m awesome” essay that is common among all schools. Often you’ll have extra essays that are more specific. Let’s focus on the big one. <br/>
                        <br/>
                        When you were in high school, there was a huge focus on “being a well-rounded student.” Unfortunately, you’ve been lied to. The bland, basic “well-rounded” student isn’t interesting, and they aren’t going to push boundaries or make any significant contributions to society. Colleges want someone that will get their name out there. They’d rather take a 3.5 GPA pre-Mozart music wiz than a 4.0 Key Club / Football Captain / debate team / Econ club kid. They want someone who is going to enrich their classrooms and, thereafter, the world. So instead of getting your feet wet in a ton of different clubs, dedicate your soul and life to one or two clubs / hobbies. Make a difference in society with that club. Are you a karate guy? Sweet. Join the karate club, and hold free practices at the Boys and Girls club, the Juvenile detention center, or whatever (this would tie in well for an Econ, Poli Sci, or Sociology major). Give to society with your passion. Universities want people who will spread their name throughout the community. That’s how they get recognition and more future students. <br/>
                        <br/>
                        <b>Note: </b>They will ask you why your old university is no longer sufficient. Don’t get too carried away on talking smack on BYU. They don’t like that. Instead of saying “BYU sucks because…” you’ll have to say “Although I appreciate the education BYU had to offer me, it is no longer the right fit for me because of x,y, and z. University of Michigan, however, provides….” Got it? Your reasons could range from BYU’s ex Mormon policy to BYU not having quantitative finance courses. Also, don’t think religion is a taboo topic in the essay. Isn’t the purpose of university to amass truth and knowledge? And what is religion supposed to do for mankind? Ah. If a University prevents you from quenching your thirst for knowledge, well… that’s a big deal. <br/>
                        <br/>
                        How does this tie into the essay? <br/>
                        <br/>
                        You need to make your hobbies, passions, career aspirations, field of study, and your need to transfer weave together in one cohesive point. Let me give you an example: TJ loves Computer Science and Music. He likes to code and he likes to make music on his free time. What the hell do these have to do with each other? Most kids would talk about CS and then Music as two different points. But not TJ because TJ knows that’s a boring essay! Instead, TJ writes about the evolution of artificial intelligence and computer cognition. He writes about how the idea of computers being able to write musical masterpieces intrigues him. He writes about how this made him question if humans are truly special, if they really have this creative aspect that robots can never have. This also makes him start to question divinity, and whether we humans truly have this special “god-spark” robots can’t possess– for if we non-divine humans are capable of making something that demonstrates “soul-like” properties, can we be so sure soul actually exists? Can we be so sure of a divine creator that endows us with some “special ingredient”? And this leads to TJ wanting to explore outside of the boundaries BYU sets for him, thus necessitating his transfer from BYU to school XYZ. <br/>
                        <br/>
                        …or TJ could be like his buddy Trevor and write about how he’s been coding since he was 15, how he did well on his AP exam, how music is his passion, how his volunteer work is awesome, aaaaand why he needs to go to a better school so he can go work at Google. Which essay do you think is Ivy League caliber? <br/>
                        <br/>
                        Don’t be a Trevor. Be a TJ. <br/>
                        <br/>
                        If you’re struggling on essay ideas, feel free to PM me and I can help you brainstorm.
                    </p>
                    <h3>Classes to Take</h3>
                    <p>
                        In this area, you DO want to be well-rounded. As for specifics, it really differs university to university and program-to-program, but the general rule of thumb is to have as many of their GE requirements filled as possible, and to have the first few low-level courses in your major completed by your transfer time. <br/>
                        <br/>
                        Here are some general tips:
                        <ul>
                            <li>Definitely have your Language out of the way, meaning you’ve completed at least 4 semesters of a language, 101 through 202 (or have a waiver for them). A lot of colleges require this to graduate, and some even require them to <i>transfer</i> (I’m talking about you, UVA).</li>
                            <li>Have a psychology or sociology class done</li>
                            <li>Have a chemistry or biology class done (be careful with Bio 100 or Chem 100– some colleges do not recognize these courses)</li>
                            <li>Have a Philosophy or Art History course done</li>
                            <li>If you can swing Calc I, that looks good. I’d recommend taking an Algebra course beforehand. I got better grades in my calc 1 and 2 courses than in my College Algebra course. Weird huh?</li>
                            <li>Skip the religion courses if you can–they are usually difficult and barely ever transfer.</li>
                        </ul>
                        <br/>
                        As always, use Rate My Professor. Getting A’s is more important than showing off difficult courses.
                    </p>
                    <h3>Academic Record Reports</h3>
                    <p>
                        This is the easiest part. You just request your academic report online and have them send it to your school. Keep in mind that schools want official transcripts–this means the E-transcript doesn’t cut it. You need to order a physical one and have it sent to the universities you are applying to.
                    </p>
                    <h3>Bonus Round—Extra Awesome Information</h3>
                    <p>
                        <b>For Computer Science Majors:</b> Often Universities will have a CS program in their Engineering school and a CS program in their Liberal Arts school. Many times the LA school’s CS program is easier to transfer into. You’ll end up with a CS degree from that University either way, so I’d heavily consider going the Liberal Art route. Main difference is more side LA classes vs more CS electives. <br/>
                        <br/>
                        <b>Transfer first, declare later:</b> Some universities allow you to switch majors after transferring, or don’t require you to declare before attending. If this is the case, you might be able to transfer in as a Philosophy or History major (they will have more available spots in that program) then change majors to your more competitive program. Again, this strategy is a little risky, so do your research first. For example, it might be easier to get into MIT as a Philosophy major THEN switch to Math while there. I don’t know, I haven’t researched this out. What I have noticed is Business programs <i>rarely</i> allow you to switch into them after transferring in; usually you have to transfer directly into them. BE CAREFUL with talking to the admissions officers about this. Don’t make your intentions of this obvious. I’d recommend just googling this. If you have to ask them, be tactful and say something along the lines of “Do you recommend I have my major chosen before I transfer? Or is it okay if I am unsure about my major and change while there?”
                    </p>
                </li>
            </ol>
        </div>
    );
};

const Part3 = (props) => {
    props.setSub('How to Survive While at BYU');
    props.setActive('3');

    return (
        <div>
            <ol className="list-group">
                <li className="list-group-item">
                    <sup className="text-info"><em>By Ivy League Transfer Student &mdash; <a href="https://www.reddit.com/r/exmormon/comments/6sytp8/guide_part_2_how_to_transfer_from_byuby_ivy/?st=j67ekrw7&sh=72701f20">Original Post</a></em></sup><br />
                    <h3>Introduction</h3>
                    <p>
                        This is part 3 of a 3 part series. I will come back to edit the guide–this is my first time making long posts like these and the organization isn’t too pretty. But, in the meanwhile, enjoy!
                    </p>
                    <h3>I Can’t Transfer from BYU—What Now? / How to Survive at BYU</h3>
                    <p>
                        I’m sad you can’t! But here are some things that made my time better: <br/>
                        <br/>
                        <ol>
                            <li>
                                <b>ROOMMATES AND FRIENDS:</b> Get non-Mormon or cool roommates. How? You’re going to have to do some sly networking. Hit local coffee shops on Sundays, ex-Mormon groups, gay pride festivals, Meetup.com, etc. I have some connections, but if you want my help, you’ll have to prove to me you aren’t some HCO sell out so I don’t risk my friends. Burden of proof lies with you! For my last year at BYU, our whole place was non or ex-Mormon. It was fantastic. Freedom of thought, great parties, I loved it. <br/>
                                <br/>
                                Also, consider using Craigslist. Don’t be obvious about being ex-Mormon, ex-Mormons will think you are with the HCO. Say something like “Less-religious / non-religious BYU Approved Housing” as the title, and then in the bio say “We are a couple of BYU folks just looking for some non-judgmental, more laid back roommates” or something of the sort. I actually found one of my best friends doing this, and met an ex-Mo I already knew! It’s a small world. <br/>
                                <br/>
                            </li>
                            <li>
                                <b>PROFESSORS:</b> Remember, some teachers at BYU are more open than they let on. I told one of my professors about my relationship with my dad being affected by my doubts, and she called my dad a “jackass who should go to hell.” Haha. Still be cautious, but remember, not all of your professors are robots. <b><a href="http://www.ratemyprofessors.com/">Rate My Professor</a> is your strongest ally.</b> Always use it. No exceptions. <br/>
                                <br/>
                            </li>
                            <li>
                                <b>DATING:</b> Here’s what you can do for Tinder. Make a new Facebook account, one that is hidden from everybody. Like non-Mormon pages such as “Coffee”, “Zelph on a shelf”, “Atheism”, “God” (the satirical page), “Agnosticism”, “Black Lives Matter”, “Equal Rights”, stuff like that. Remember, only those who have the same likes can see you like these pages as well. The Tinder algorithm will match you with fellow progressives who are, for the most part, not Mormon. For your bio, say something that will tip off you not being Mormon. Mine was “Avid fan of coffee shops, Indian lunch buffets, and equal rights.” You bet your Moroni poster I met a ton of ex-Mormon / non-Mormon gals. And for the love of God, don’t put down that you go to BYU. Every single one of my dates told me they would have swiped left on me if they saw “BYU” on my Tinder profile. Set UVU on your facebook profile and your tinder, or something. Also, be prepared to leave Provo for more non / post Mormons. Not very many of us stick around Provo, and with good reason. Happy hunting! <br/>
                                <br/>
                            </li>
                            <li>
                                <b>SWIFLY / YIK YAK:</b> I don’t know if the community is still active, but there was an app called “Yik Yak” (now people switched over to “Swifly” because YY died) that I used to meet liberal Mormons and ex-Mormons. A fair warning though: some super crazy girl on YY threatened to turn me into the HCO. She didn’t actually do it, but boy did I damn near shit myself. No worries, the whole Yik Yak community flooded her snapchat with NSFW photos in response to her blackmail. <br/>
                                <br/>
                            </li>
                            <li>
                                Take a philosophy course! You’re allowed to argue without too much suspicion <span role="img" aria-label="winking emoji">😉</span> And these professors have a little more freedom regarding controversial topics (arguments against God’s existence, the folly of religion, etc). <br/>
                                <br/>
                            </li>
                            <li>
                                <b>CAPS (Counseling and Psychological Services):</b> Take advantage of the psychological services (CAPS). These counselors are required <b>by law </b>to maintain strict confidence, unless you are planning on harming others, of course. You can request a non-Mormon counselor if you feel they are better equipped at helping you. When religion is requested on your fill-out form, don’t mark down “Mormon” unless you want your counselor to go on a spiel about how reading your scriptures will help you overcome your depression. Again, there is a wall stricter than the North / South Korean border between the Honor Code and CAPS. <br/>
                                <br/>
                            </li>
                            <li>
                                <b>DON’T leave the Church (Yet):</b> I am fully aware BYU now says they won’t automatically expel you, but you have to submit all kinds of evidence and prove you are worth keeping. Also, if you DO manage to sneak by the dean (or whatever hoops you have to jump through), you’ll always be on their watch list. Plus, you’ll have to pay double the tuition. Not worth it. <br/>
                                <br/>
                            </li>
                            <li>
                                At church, meet your bishop. Give him short answers, nothing too detailed. Depending on who your bishop is, expressing doubt could lead to extra meetings. Instead, take a good lesson from our Madagascar friends and just “Smile and wave, boys, just smile and wave…” <br/>
                                <br/>
                            </li>
                            <li>
                                <b>DON'T ADMIT ANYTHING TO THE HONOR CODE OFFICE:</b> If in trouble with the HCO, don’t admit to anything. Really. This has been tested time and time again. The only time you should admit to anything is if there is solid evidence (pictures or videos). “But, but, I have depression, surely they will understand.” Nope. I have several friends who had histories of abuse and misuse. They had their counselors and psychologists write in reports for them to their bishops, too. One was still kicked out of the business school and the other had a semester-long suspension from school, both with mandatory scripture reports and Honor Code meetings. <br/>
                                <br/>
                            </li>
                            <li>
                                Be smart in all your fun. When doing something that isn’t HCO approved, dodge cameras and videos like a ninja. If police ever show up to where you are at, dip like a Pringle. I don’t care if you weren’t intoxicated, if BYU finds out you were around questionable activity, expect some interrogation about who you were with, how you got there, where your roommates were at the time, etc. If this does happen, say you were at a UVU get together and you had no idea there was inappropriate activity going on. <br/>
                                <br/>
                            </li>
                            <li>
                                Watch your facebook activity. HCO will screenshot it and use it against you if needs be. Be smart. Remember, people can see what you like or what you comments on pages and posts that they have no connections to. “Be wise.” <br/>
                                <br/>
                            </li>
                            <li>
                                <b>Consent:</b> Triple ask. I don’t care if it “ruins the mood.” Also, <i>lack of protest isn’t consent</i>. You’ve got to get the okay first. I’d recommend the verbal okay over a simple nod. If someone even accuses you of something, you’ll be in a situation that is best avoided. Good news is there is now a Title IX office in place to protect you from a one-way ticket to the HCO. That being said, I still wouldn’t risk it.
                            </li>
                        </ol>
                        <br/>
                        Alright folks, that’s just about everything. Phew. I’m probably missing one or two things, but I’m super exhausted. I’ll revisit this guide later to touch up some things or better organize it. If you’ve got any extra questions, post them and I’ll respond there. If they are too personal, go ahead and PM me. If you can post them I’d rather you do that in case other people have the same question, but I understand if you can’t. <br/>
                        <br/>
                        Welp, that’s all I got for you now! So… go cougars, or something.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default SchoolTransferGuide;