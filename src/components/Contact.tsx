import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { contactData } from './data.tsx';

export default function Contact() {
  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve contact-header">
          <h1>Contact Me</h1>
          <h2>I'd love to hear from you!</h2>
          <p className="lead">Please don't hesitate to reach out!</p>
        </div>
      </div>
      <div className="row contact-info">
        {contactData.map((item, index) => (
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
    </section>
  );
}
