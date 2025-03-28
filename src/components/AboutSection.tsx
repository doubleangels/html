import { data } from './data';
import Stats from './Stats';
import Profile from './Profile';
import Education from './Education.tsx';
import Certifications from './Certifications.tsx';
import Skills from './Skills';

export default function AboutSection() {
  return (
    <section id="about">
      <Stats />
      <br />
      <div className="row about">
        <Profile />
        <Education />
        <Certifications />
        <Skills />
      </div>
      <div className="row button">
        <div className="col-twelve">
          <a href="#contact" title={data.contactData.contactButtonText} className="button stroke smoothscroll">
            {data.contactData.contactButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
