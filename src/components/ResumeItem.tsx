import { memo } from 'react'

interface ResumeItemProps {
  job: string;
  date: string;
  company: string;
  responsibilities: string[];
}

function ResumeItem({ job, company, responsibilities = [] }: ResumeItemProps) {
  return (
    <div className="timeline-block">
      <div className="timeline-header">
        <h2>{job}</h2>
        <h3>{company}</h3>
      </div>
      <div className="timeline-content">
        <ul className="responsibility-list">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default memo(ResumeItem);
