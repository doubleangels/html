import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Separate data for contact information
const contactData = [
  { type: 'Location', text: 'Denver, CO' },
  { type: 'Email', text: 'matt@doubleangels.com', icon: faEnvelope, link: 'mailto:matt@doubleangels.com' },
  { type: 'Call/Text', text: '720-295-0463', icon: faPhone, link: 'tel:7202950463' },
];

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
            {item.link ? (
              <a href={item.link} aria-label={`${item.type} me`}>
                <FontAwesomeIcon className="white-2x" icon={item.icon} />
              </a>
            ) : (
              <p className="whitetext">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
