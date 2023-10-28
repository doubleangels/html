import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faGraduationCap,
  faBuildingColumns,
  faAward,
  faBug,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GithubRepoCount from './GithubRepoCount';

const aboutInfo = [
  {
    icon: faHeart,
    value: '1',
    text: 'Passion',
  },
  {
    icon: faGraduationCap,
    value: '1',
    text: 'Degree',
  },
  {
    icon: faBuildingColumns,
    value: '∞',
    text: 'Learning',
  },
  {
    icon: faGithub,
    value: <GithubRepoCount />,
    text: 'Repos',
  },
  {
    icon: faAward,
    value: '6',
    text: 'Certs',
  },
  {
    icon: faBug,
    value: '0',
    text: 'Bugs',
  },
];

const certifications = [
  'LPI Linux Essentials, June 2017',
  'MIT Python Certification, January 2018',
  'FEMA Certification, July 2018',
  'CompTIA A+, January 2020',
  'CompTIA Network+, April 2020',
  'CompTIA Server+, September 2020',
  'Cisco CCNA, Expected 2023',
];

const skills = [
  { label: 'Problem Solving', percent: '99%' },
  { label: 'Communication Skills', percent: '99%' },
  { label: 'Adaptability', percent: '99%' },
  { label: 'Technical Proficiency', percent: '99%' },
  { label: 'Security Practices', percent: '99%' },
  { label: 'Network Architecture', percent: '85%' },
  { label: 'Virtualization', percent: '75%' },
  { label: 'Full Stack Development', percent: '75%' },
];

const About = () => {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve about-header">
          <h1>About Me</h1>
          <h2>Let me introduce myself.</h2>
          <div className="intro-info">
            <img src="./profile-pic.webp" alt="Profile Picture" />
            <p className="lead">
              I'm a developer, administrator, and student from Denver, CO. I believe the power of technology is limitless.
            </p>
          </div>
        </div>
      </div>
      <section id="stats" className="count-up">
        <div className="row">
          <div className="col-twelve">
            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
              {aboutInfo.map((info, index) => (
                <div key={index} className="bgrid whitetext">
                  <div>
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div>
                    <span>{info.value}</span>
                  </div>
                  <div className="hidemobile">{info.text}</div>
                </div>
              ))}
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
              {certifications.map((cert, index) => (
                <p key={index}>{cert}</p>
              ))}
            </li>
          </ul>
        </div>
        <div className="col-twelve tab-full">
          <h3>Skills</h3>
          <p>
            Throughout my career, I have acquired valuable skills through continuous learning and professional development.
            Here are some highlights.
          </p>
          <ul className="skill-bars">
            {skills.map((skill, index) => (
              <li key={index}>
                <div className={`progress ${skill.percent}`}>
                  <span>{skill.percent}</span>
                </div>
                <strong className="resize-strong">{skill.label}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" title="Hire Me" className="button stroke smoothscroll">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;