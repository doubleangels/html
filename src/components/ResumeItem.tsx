import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
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
      <div className="timeline-ico">
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <div className="timeline-header">
        <h3>{job}</h3>
        <p>{date}</p>
      </div>
      <div className="timeline-content">
        <h4>{company}</h4>
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
