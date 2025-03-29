import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactInfo() {
    return (
        <div className="row contact-info">
          {data.contactData.contactInformation.map((item, index) => (
            <div className="col-four" key={index}>
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
              <h5>{item.type}</h5>
              <a href={item.link || '#'} aria-label={`${item.type} me`}/>
            </div>
          ))}
        </div>
    );
}
