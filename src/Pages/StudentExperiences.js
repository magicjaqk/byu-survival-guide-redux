import React from 'react';
import Helmet from 'react-helmet';

const StudentExperiences = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>Student Experiences</title>
                <meta name="description" content="A collection of self-reported experiences from BYU students who have undergone a change in their faith." />
            </Helmet>
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            Student Experiences
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <p>
                            This is a collection of the stories we’ve acquired regarding other students at BYU. These are your friends, your family, and your community. The space for publicly discussing thoughts that don’t fit within the status quo of BYU expression is limited by a number of factors that affect each person differently. Please take the time to go through a few so that you can more completely understand the varying hardships people face while navigating their personal faith journeys.
                            <div className="d-flex justify-content-center my-3">
                                <a className="w-100" href="https://goo.gl/forms/dyGsfY1qxSXE9HXP2"><button style={{ 'fontSize': 'inherit' }} className="btn btn-outline-info w-100"><h3>Share Your Story Here</h3></button></a>
                            </div>
                        </p>

                        <div className="card bg-blue-grey my-4">
                            <div className="card-body">
                                <h3 className="card-title mt-0">Classmate #1:</h3>
                                <blockquote className="card-text">
                                    My mom told me when I was young that “the only way I could hurt her would be to stop believing in the church.” Now that I’ve lost my testimony, I hurt her every day. I hate the way I make her feel, but I can’t figure out how to believe. When I try, teachers silence me and friends leave me. All I want is freedom to find my own path.
                                </blockquote>
                            </div>
                        </div>

                        <div className="card bg-blue-grey my-4">
                            <div className="card-body">
                                <h3 className="card-title mt-0">Classmate #2:</h3>
                                <blockquote className="card-text">
                                    My parents disowned my first sibling who stopped believing, and tried to force my second sibling into homelessness. When I found myself no longer believing, I felt stuck on a mission and at BYU because I wasn’t ready to see what my family would do to me. Now I’m building resources for others in a similar situation to me.
                                </blockquote>
                            </div>
                        </div>

                        <div className="card bg-blue-grey my-4">
                            <div className="card-body">
                                <h3 className="card-title mt-0">Classmate #3:</h3>
                                <blockquote className="card-text">
                                    In high school, church was my life. All of my friends were Mormon, and we were proud of it. I was eager to share my beliefs with school friends who were interested, and I bought the story hook line and sinker. When time came for me to apply to colleges, the only school that I seriously considered was BYU, so when the admission letter came in the mail, I thought I had the rest of my life figured out. I would go on a mission, get married in the temple, graduate from BYU and spend the rest of my life preparing to return to live with God. The plan didn’t work out for long… While I was on my mission, I encountered some information that was troublesome. My issues stemmed from the Book of Abraham. After learning more about it, I decided that I didn’t feel comfortable teaching from that book, however I wholeheartedly believed in Jesus Christ, Joseph Smith, the Book of Mormon, and in modern revelation. I finished my mission working as hard as I could and taught people what I knew, that Jesus Christ died for our sins and that his true church had been restored through Joseph Smith. At the very least, I knew that the church was good, and that it could help people live happy lives. After I returned home, I went to BYU and had a great freshman year. However, the problems that I had with the BoA still bothered me, and I was determined to find answers. I learned as much as I could from BYU devotionals on the topic, the LDS.org gospel topics essays, and from the FAIR website (church apologetics). Unfortunately, instead of finding answers, I found more and more problems. I learned about the Book of Mormon, about the anachronisms found within it’s pages, and plagiarism from the Bible and contemporary writings. I learned about Joseph Smith as a translator, about kinderhook plates and the Egyptian grammar. I learned about racism in the Book of Mormon and in the priesthood. It seemed like there were no answers. To compound the problems I was finding with church doctrines and history, I learned that a close friend had been the victim of sexual assualt by a BYU student. She was threatened with expulsion by the HCO and would have been expelled, had the Title IX office not stepped in to stop it. This opened my eyes. I realized that the church had a dark side. Church doctrine and policies not only allow for, but encourage victim shaming and exclusion of those people that don’t fit the mold. My heart was broken; the church that I had loved my whole life was not what I thought it was. I can’t pinpoint a specific day or period that I stopped believing, however at some point I decided that I could not be the person that I wanted to be while remaining in the church, and I was crushed. I went into one of the darkest periods of my life. I was depressed and wasn’t sure if it would ever get better. I’m not sure exactly how, but eventually, it did get better. One day at a time. Now, I have a healthy attitude towards life. I used to think that life without faith would be meaningless, however I have found deep meaning in simply living. I respect and acknowledge other’s beliefs and am relieved at having been able to surround myself by people who love me and respect me for who I am. I don’t claim to have the complete truth, in fact, I no longer believe that there is such a thing as objective truth. But that doesn’t worry me. The search for truth, in whatever form I may find it, is what gives me motivation through the difficult times, and gives me joy in the good times.
                                </blockquote>
                            </div>
                        </div>

                        <div className="card bg-blue-grey my-4">
                            <div className="card-body">
                                <h3 className="card-title mt-0">Classmate #4:</h3>
                                <blockquote className="card-text">
                                    Discovering the truth can be painful. When I started to lose faith, my first instinct was to blame myself. It’s only been after over a year of struggling that I have come to a healthy place. However, I fully believe that the journey has made me better off. I no longer have all the answers, which is scary, but that’s okay. That absence of surety has become my motivation to continue on.
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-blue-grey my-4">
                        <div className="card-body">
                            <h3 className="card-title mt-0">Classmate #5:</h3>
                            <blockquote className="card-text">
                                As our family encountered severe depression as faithful believers and members, we began reexamining our lives and found that much of the faith and unhappiness was coming from the church. The hardest part of living at BYU is living in constant fear- fear that someone will see me not wearing my garments, fear that someone will interpret a comment I make in class wrong, fear that the Elder’s Quorum president is taking notes and talking about me to the bishop for not coming as often. I am terrified of being turned me into the Honor Code Office where I might lose my education and degree for simply not believing, but I feel stuck because I have to make lifestyle changes that give me greater happiness and purpose in life to deal with my depression, and distancing myself from the church was one of those choices that healthcare professionals (who even worked at BYU) recommended to me.
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default StudentExperiences;