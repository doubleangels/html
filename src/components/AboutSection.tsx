import { data } from './data';
import Stats from './Stats';
import Profile from './Profile';
import Education from './Education.tsx';
import Certifications from './Certifications.tsx';
import Skills from './Skills';

export default function AboutSection() {
  return (
    <section id="about" className="center-aligned">
      <Stats />
      <br />
      <div className="row" style={{maxWidth: "850px", margin: "0 auto"}}>
        <Profile />
        <Education />
        <Certifications />
        <Skills />
      </div>
      <div className="row button-section">
        <div className="col-twelve" style={{textAlign: "center"}}>
          <a 
            href="#contact" 
            title={data.contactData.contactButtonText} 
            className="button stroke"
          >
            {data.contactData.contactButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
