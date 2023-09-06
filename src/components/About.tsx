import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faGraduationCap, faBuildingColumns, faAward, faBug } from '@fortawesome/free-solid-svg-icons'
import GithubRepoCount from './GithubRepoCount'

export default function About() {
    return (
        <>
            <section id="about">
                <div className="row section-intro">
                    <div className="col-twelve about-header">
                        <h1>About Me</h1>
                        <h2>Let me introduce myself.</h2>
                        <div className="intro-info">
                            <img src="./profile-pic.webp" alt="Profile Picture"/>
                            <p className="lead">I'm a developer, administrator, and student from Denver, CO. I believe the power of
                                technology is
                                limitless.
                            </p>
                        </div>
                    </div>
                </div>
                <section id="stats" className="count-up">
                    <div className="row">
                        <div className="col-twelve">
                            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    <div>
                                        <span>1</span>
                                    </div>
                                    <div className="hidemobile">
                                        Passion
                                    </div>
                                </div>
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <div>
                                        <span>1</span>
                                    </div>
                                    <div className="hidemobile">
                                        Degree
                                    </div>
                                </div>
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faBuildingColumns} />
                                    </div>
                                    <div>
                                        <span>&infin;</span>
                                    </div>
                                    <div className="hidemobile">
                                        Learning
                                    </div>
                                </div>
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </div>
                                    <div>
                                        <GithubRepoCount />
                                    </div>
                                    <div className="hidemobile">
                                        Repos
                                    </div>
                                </div>
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faAward} />
                                    </div>
                                    <div>
                                        <span>6</span>
                                    </div>
                                    <div className="hidemobile">
                                        Certs
                                    </div>
                                </div>
                                <div className="bgrid whitetext">
                                    <div>
                                        <FontAwesomeIcon icon={faBug} />
                                    </div>
                                    <div>
                                        <span>0</span>
                                    </div>
                                    <div className="hidemobile">
                                        Bugs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </section>
                <br />
                <div className="row about-content">
                    <div className="col-twelve tab-full">
                        <ul className="info-list">
                            <li>
                                <h3>Profile</h3>
                                <p>Allow me to introduce myself with some key information about me.</p>
                            </li>
                            <li>
                                <h3>Name:</h3>
                                <p>Matt VerLee</p>
                            </li>
                            <li>
                                <h3>Education:</h3>
                                <p>BS Cyber Security, Southern New Hampshire University (In-Progress)</p>
                            </li>
                            <li>
                                <h3>Certifications:</h3>
                                <p>LPI Linux Essentials, June 2017</p>
                                <p>MIT Python Certification, January 2018</p>
                                <p>FEMA Certification, July 2018</p>
                                <p>CompTIA A+, January 2020</p>
                                <p>CompTIA Network+, April 2020</p>
                                <p>CompTIA Server+, September 2020</p>
                                <p>Cisco CCNA, Expected 2023</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-twelve tab-full">
                        <h3>Skills</h3>
                        <p>Throughout my career, I have acquired valuable skills through continuous learning and professional
                            development. Here are
                            some highlights.</p>
                        <ul className="skill-bars">
                            <li>
                                <div className="progress percent99"><span>99%</span></div>
                                <strong className="resize-strong">Problem Solving and Troubleshooting</strong>
                            </li>
                            <li>
                                <div className="progress percent99"><span>99%</span></div>
                                <strong className="resize-strong">Communication Skills</strong>
                            </li>
                            <li>
                                <div className="progress percent99"><span>99%</span></div>
                                <strong className="resize-strong">Adaptability</strong>
                            </li>
                            <li>
                                <div className="progress percent99"><span>99%</span></div>
                                <strong className="resize-strong">Technical Proficiency</strong>
                            </li>
                            <li>
                                <div className="progress percent99"><span>99%</span></div>
                                <strong className="resize-strong">Security Practices</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong className="resize-strong">Network Architecture</strong>
                            </li>
                            <li>
                                <div className="progress percent75"><span>75%</span></div>
                                <strong className="resize-strong">Virtualization</strong>
                            </li>
                            <li>
                                <div className="progress percent75"><span>75%</span></div>
                                <strong className="resize-strong">Full Stack Development</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}