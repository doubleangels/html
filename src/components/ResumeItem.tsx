import { memo } from 'react'

interface ResumeItemProps {
  job: string;
  date: string;
  company: string;
  responsibilities: string[];
}

function ResumeItem({ job, date, company, responsibilities = [] }: ResumeItemProps) {
  return (
    <div className="timeline-block">
      <div className="timeline-content">
        <h3 className="job-title">{job}</h3>
        <p className="job-date">{date}</p>
        <h4 className="company-name">{company}</h4>
        <ul className="responsibility-list">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="responsibility-item">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(ResumeItem);
