import React from 'react';

const RelevantLinks = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                    <div id="title-colorbox" className="bg-primary">
                        <h1 className="mx-auto text-center text-white p-5" id="title">
                            Relevant Links
                        </h1>
                    </div>
                    <div className="page-content topic-content mt-4 mx-2">
                        <h3>Helpful Research Resources:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="http://www.mormonthink.com/">Mormon Think</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.lds.org/topics/essays?lang=eng">LDS.org's Gospel Topics Essays</a> <br/>
                                <span style={{'fontSize':'85%'}}>
                                    Specifically these two which are not listed on the index, and are more difficult to find because they are only referenced within other Gospel Topics Essays: 
                                    <ul>
                                        <li><a href="https://www.lds.org/topics/plural-marriage-in-kirtland-and-nauvoo?lang=eng">Plural Marriage in Kirtland and Nauvoo</a></li>
                                        <li><a href="https://www.lds.org/topics/the-manifesto-and-the-end-of-plural-marriage?lang=eng">The Manifesto and the End of Plural Marriage</a></li>
                                    </ul>
                                </span>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.fairmormon.org/">FAIRMormon</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://cesletter.org/">Letter to a CES Director</a> (a.k.a. The CES Letter) <br/>
                                and it's <a href="https://www.fairmormon.org/answers/Criticism_of_Mormonism/Online_documents/Letter_to_a_CES_Director">Response From FAIRMormon</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://faenrandir.github.io/a_careful_examination/">A Careful Examination</a> <br/>
                                <span style={{ 'fontSize': '85%' }}><i>Resources, research, and thoughts related to the truth-claims, teachings, and culture of The Church of Jesus Christ of Latter-day Saints</i></span>
                            </li>
                        </ul>
                        <h3>Podcasts:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="https://www.mormonstories.org/">Mormon Stories</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://mormondiscussionpodcast.org/">Mormon Discussion Podcast</a> <br/>
                                <span style={{ 'fontSize': '85%' }}>(A collection of podcasts including the famous RadioFreeMormon Podcast)</span>
                            </li>
                            <li className="list-group-item">
                                <a href="http://nakedmormonismpodcast.com/">Naked Mormonism</a>
                            </li>
                            <li className="list-group-item">
                                <a href="http://johnlarsen.org/mormon-expression/">Mormon Expression</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.sunstonemagazine.com/feed/podcast/sunstone-podcast">Sunstone Podcast</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.sunstonemagazine.com/feed/podcast/sunstone-history">Sunstone History Podcast</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.yearofpolygamy.com/archive/listen-to-the-episodes-in-order/">Year of Polygamy</a>
                            </li>
                        </ul>
                        <h3>LGBTQ+ Resources:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="https://www.usgabyu.com/">Understanding Sexuality, Gender, and Allyship (USGA)</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://encircletogether.org/">Encircle</a>
                            </li>
                        </ul>
                        <h3>Women’s Resources:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="https://www.facebook.com/groups/PROVOFFHE/?ref=share">Feminist FHE</a>
                            </li>
                        </ul>
                        <h3>Honor Code/Bishop Encounter Resources:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="http://www.freebyu.org/">FreeBYU</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://drive.google.com/file/d/13juCa0fsdy8A8rqeIRslasJwO0ks6vNz/view?usp=drivesdk">General Handbook of Instruction 1 (May 2019 Update)</a>
                            </li>
                        </ul>
                        <h3>Miscellaneous:</h3>
                        <ul className="list-group-flush pl-0">
                            <li className="list-group-item">
                                <a href="https://www.timeforcambio.org">Time For Cambio</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.atheistsofutah.org">Atheists of Utah</a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.facebook.com/AtheistsOfUtah/">Atheists of Utah (Facebook)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3" />
            </div>
        </div>
    );
};

export default RelevantLinks;