import ResumeItem from "./ResumeItem";
import { data } from "./data.tsx";

export default function Resume() {
  return (
    <section id="resume">
      <div className="row section-intro">
        <div className="col-twelve resume-header">
          <h1>{data.resumeData.resumeTitle}</h1>
          <h2>{data.resumeData.resumeDescription}</h2>
        </div>
      </div>
      <div className="row resume-timeline">
        <div className="col-twelve">
          <div className="timeline-wrap">
            {data.resumeData.resume.map((job, index) => (
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
