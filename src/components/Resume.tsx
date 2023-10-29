import ResumeItem from './ResumeItem';

const resumeData = [
  {
    jobTitle: 'Freelance Developer',
    dateRange: 'November 2016 - Present',
    companyName: 'Self-Employed (CO, USA)',
    responsibilities: [
      'Created, prototyped, tested, and implemented real-time file sharing software systems...',
      'Developed a privacy-focused, highly-rated Android application...',
    ],
  },
  {
    jobTitle: 'Cyber Security Analyst',
    dateRange: 'April 2022 - June 2023',
    companyName: 'Open Raven (Los Angeles, CA, USA)',
    responsibilities: [
      'Proactively monitored and analyzed security alerts and events...',
      'Conducted regular and comprehensive vulnerability assessments...',
    ],
  },
];

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
            <div className="timeline-block">
              {resumeData.map((entry, index) => (
                <ResumeItem
                  key={index}
                  jobTitle={entry.jobTitle}
                  dateRange={entry.dateRange}
                  companyName={entry.companyName}
                  responsibilities={entry.responsibilities}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}