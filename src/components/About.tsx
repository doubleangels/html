import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faGraduationCap,
  faBuildingColumns,
  faAward,
  faBug,
} from '@fortawesome/free-solid-svg-icons';
import GithubRepoCount from './GithubRepoCount';
import Stat from '../components/Stat';
import { skillsData } from './data.tsx';
import { certificationsData } from './data.tsx';

export default function About() {
  return (
    <section id="about">
      <section id="stats" className="count-up">
        <div className="row">
          <div className="col-twelve">
            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
              {
                [
                  { icon: faHeart, text: 'Passion', content: 1 },
                  { icon: faGraduationCap, text: 'Degree', content: 1 },
                  { icon: faBuildingColumns, text: 'Learning', content: <span>&#8734;</span> },
                  { icon: faGithub, text: 'Repos', content: <GithubRepoCount /> },
                  { icon: faAward, text: 'Certs', content: certificationsData.length },
                  { icon: faBug, text: 'Bugs', content: 0 },
                ].map((item, index) => (
                  <Stat key={index} {...item} />
                ))
              }
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
              <p>Let me introduce myself by highlighting what I bring to the table:</p>
            </li>
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
          <p>Throughout my career, I have proactively sought opportunities to acquire valuable skills through continuous learning and professional development. Here are some highlights.</p>
          <ul className="skill-bars">
            {skillsData.map((skill) => (
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
