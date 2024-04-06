import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function ResumeItem({ jobTitle, dateRange, companyName, responsibilities = [] }: any) {
    return (
        <div className="timeline-block">
            <div className="timeline-ico">
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="timeline-header">
                <h3>{jobTitle}</h3>
                <p>{dateRange}</p>
            </div>
            <div className="timeline-content">
                <h4>{companyName}</h4>
                <ul>
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}