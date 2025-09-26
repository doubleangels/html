import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactInfo() {
    return (
        <div className="flex-responsive spacing-responsive">
          {data.contactData.contactInformation.map((item, index) => (
            <div className="contact-item" key={index}>
              <div className="icon">
                {item.id === 'location' && (
                  <FontAwesomeIcon icon={faLocationDot} size="2x" color='white'/>
                )}
                {item.id === 'email' && (
                  <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'/>
                )}
                {item.id === 'phone' && (
                  <FontAwesomeIcon icon={faPhone} size="2x" color='white'/>
                )}
              </div>
              <h5 className="contact-label">{item.type}</h5>
              <a href={item.link || '#'} aria-label={`${item.type}-me`} className="contact-link">
                <span>{item.text}</span>
              </a>
            </div>
          ))}
        </div>
    );
}
