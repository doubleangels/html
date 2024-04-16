import ResumeItem from "./ResumeItem";
import resumeData from "../json/resumeData.json";

export default function Resume() {
  return (
    <section id="resume">
      <div className="row section-intro">
        <div className="col-twelve resume-header">
          <h1>Resume</h1>
          <h2>Throughout my career, I have had the privilege of working on a variety of impactful projects...</h2>
        </div>
      </div>
      <div className="row resume-timeline">
        <div className="col-twelve">
          <div className="timeline-wrap">
            {resumeData.map((job, index) => (
              <div className="timeline-block" key={index}>
                <ResumeItem {...job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
