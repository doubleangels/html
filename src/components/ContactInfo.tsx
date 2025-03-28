import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactInfo() {
    return (
        <div className="row contact-info">
        {data.contactData.contactInformation.map((item, index) => (
          <div className="col-four tab-full" key={index}>
            <h5>{item.type}:</h5>
            <a href={item.link || '#'} aria-label={`${item.type} me`}>
              {item.id === 'location' && (
                <FontAwesomeIcon className="white" icon={faLocationDot} size="2x" />
              )}
              {item.id === 'email' && (
                <FontAwesomeIcon className="white" icon={faEnvelope} size="2x" />
              )}
              {item.id === 'phone' && (
                <FontAwesomeIcon className="white" icon={faPhone} size="2x" />
              )}
            </a>
          </div>
        ))}
      </div>
    );
}