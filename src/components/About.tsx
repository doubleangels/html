import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faGraduationCap,
  faBuildingColumns,
  faAward,
  faBug,
} from '@fortawesome/free-solid-svg-icons';
import GithubRepoCount from './GithubRepoCount';

// Separate data for skills and certifications
const skillsData = [
  { text: 'Problem Solving', percent: 99 },
  { text: 'Communication Skills', percent: 99 },
  { text: 'Adaptability', percent: 99 },
  { text: 'Technical Proficiency', percent: 99 },
  { text: 'Security Practices', percent: 99 },
  { text: 'Network Architecture', percent: 85 },
  { text: 'Virtualization', percent: 75 },
  { text: 'Full Stack Development', percent: 75 },
];

const certificationsData = [
  'LPI Linux Essentials, June 2017',
  'MIT Python Certification, January 2018',
  'FEMA Certification, July 2018',
  'CompTIA A+, January 2020',
  'CompTIA Network+, April 2020',
  'CompTIA Server+, September 2020',
  'Cisco CCNA, Expected 2023',
];

export default function About() {
  return (
    <section id="about">
      {/* ... */}
      <section id="stats" className="count-up">
        <div className="row">
          <div className="col-twelve">
            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
              {[
                { 
                    icon: faHeart, 
                    text: 'Passion', 
                    content: 1,
                },
                { 
                    icon: faGraduationCap, 
                    text: 'Degree',
                    content: 1,
                },
                { 
                    icon: faBuildingColumns, 
                    text: 'Learning', 
                    content: <span>&#8734;</span>
                },
                {
                    icon: faGithub,
                    text: 'Repos',
                    content: <GithubRepoCount />,
                },
                { 
                    icon: faAward, 
                    text: 'Certs',
                    content: 6,
                },
                { 
                    icon: faBug, 
                    text: 'Bugs',
                    content: 0,
                },
              ].map((item, index) => (
                <div className="bgrid whitetext" key={index}>
                  <div>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>{item.content}</div>
                  <div className="hidemobile">{item.text}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="row about-content">
        <div className="col-twelve tab-full">
          <ul className="info-list">
            <li>
              <h3>Profile</h3>
              <p>Allow me to introduce myself with some key information about me.</p>
            </li>
            {/* ... */}
            <li>
              <h3>Certifications:</h3>
              {certificationsData.map((certification, index) => (
                <p key={index}>{certification}</p>
              ))}
            </li>
          </ul>
        </div>
        <div className="col-twelve tab-full">
          <h3>Skills</h3>
          <p>Throughout my career, I have acquired valuable skills through continuous learning and professional development. Here are some highlights.</p>
          <ul className="skill-bars">
            {skillsData.map((skill, index) => (
              <li key={skill.text}>
                <div className={`progress percent${skill.percent}`}>
                  <span>{`${skill.percent}%`}</span>
                </div>
                <strong className="resize-strong">{skill.text}</strong>
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
}
