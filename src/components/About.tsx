import Stat from '../components/Stat';
import { data } from './data';

export default function About() {
  return (
    <section id="about">
      <section id="stats" className="count-up">
        <div className="row">
          <div className="col-twelve">
            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
              {data.statsData.stats.map((item, index) => (
                <Stat key={index} {...item} />
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
              <h3>{data.profileData.profileTitle}</h3>
              <p>{data.profileData.profileDescription}</p>
            </li>
            <li>
              <h3>{data.certificationsData.certificationsTitle}</h3>
              {data.certificationsData.certifications.map((certification, index) => (
                <p key={index}>{certification}</p>
              ))}
            </li>
          </ul>
        </div>
        <div className="col-twelve tab-full">
          <h3>{data.skillsData.skillsTitle}</h3>
          <p>{data.skillsData.skillsDescription}</p>
          <ul className="skill-bars">
            {data.skillsData.skills.map((skill) => (
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
          <a href="#contact" title={data.contactData.contactButtonText} className="button stroke smoothscroll">
            {data.contactData.contactButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
