import ResumeItem from "./ResumeItem";
import { data } from "./data";

export default function ResumeSection() {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{data.resumeData.resumeTitle}</h5>
          <h1>{data.resumeData.resumeDescription}</h1>
        </div>
      </div>
      
      <div className="row resume-timeline">
        <div className="col-twelve">
          <div className="timeline-wrap">
            {data.resumeData.resume.map((job, index) => (
              <ResumeItem key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
