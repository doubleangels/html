import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faGraduationCap, faBuildingColumns, faAward, faBug } from '@fortawesome/free-solid-svg-icons';
import GithubRepoCount from './GithubRepoCount';

export default function About() {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve about-header">
                    <h1>About Me</h1>
                    <h2>Let me introduce myself.</h2>
                    <div className="intro-info">
                        <img src="./profile-pic.webp" alt="Profile Picture" />
                        <p className="lead">I'm a developer, administrator, and student from Denver, CO. I believe in the limitless power of technology.</p>
                    </div>
                </div>
            </div>
            <section id="stats" className="count-up">
                <div className="row">
                    <div className="col-twelve">
                        <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
                            {[
                                { icon: faHeart, text: 'Passion' },
                                { icon: faGraduationCap, text: 'Degree' },
                                { icon: faBuildingColumns, text: 'Learning' },
                                { icon: faGithub, text: 'Repos', content: <GithubRepoCount /> },
                                { icon: faAward, text: 'Certs' },
                                { icon: faBug, text: 'Bugs' },
                            ].map((item, index) => (
                                <div className="bgrid whitetext" key={index}>
                                    <div>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <div>
                                        {item.content ? item.content : <span>1</span>}

                                    </div>
                                    <div className="hidemobile">
                                        {item.text}
                                    </div>
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
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
                    <p>Throughout my career, I have acquired valuable skills through continuous learning and professional development. Here are some highlights.</p>
                    <ul className="skill-bars">
                        {[
                            { text: 'Problem Solving', percent: 99 },
                            { text: 'Communication Skills', percent: 99 },
                            { text: 'Adaptability', percent: 99 },
                            { text: 'Technical Proficiency', percent: 99 },
                            { text: 'Security Practices', percent: 99 },
                            { text: 'Network Architecture', percent: 85 },
                            { text: 'Virtualization', percent: 75 },
                            { text: 'Full Stack Development', percent: 75 },
                        ].map((skill, index) => (
                            <li key={index}>
                                <div className={`progress percent${skill.percent}`}><span>{`${skill.percent}%`}</span></div>
                                <strong className="resize-strong">{skill.text}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                </div>
            </div>
        </section>
    );
}
