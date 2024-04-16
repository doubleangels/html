import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function ResumeItem({ job, date, company, responsibilities = [] }: any) {
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
                <ul>
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}