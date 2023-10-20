import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function ResumeItem(props: any) {
    return (
        <>
            <div className="timeline-block">
                <div className="timeline-ico">
                    <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-header">
                    <h3>{ props.jobTitle }</h3>
                    <p>{ props.dateRange }</p>
                </div>
                <div className="timeline-content">
                    <h4>{ props.companyName }</h4>
                    <ul>
                        <li>
                            { props.responsibility1 }
                        </li>
                        <li>
                            { props.responsibility2 }
                        </li>
                        <li>
                            { props.responsibility3 }
                        </li>
                        <li>
                            { props.responsibility4 }
                        </li>
                        <li>
                            { props.responsibility5 }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}