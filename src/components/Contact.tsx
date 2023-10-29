import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contactInfo = [
  {
    label: 'Find me:',
    text: 'Denver, CO',
  },
  {
    label: 'Email me:',
    text: 'matt@doubleangels.com',
    href: 'mailto:matt@doubleangels.com',
    icon: faEnvelope,
  },
  {
    label: 'Call/text me:',
    text: '720-295-0463',
    href: 'tel:7202950463',
    icon: faPhone,
  },
];

const Contact = () => {
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
        {contactInfo.map((info, index) => (
          <div key={index} className="col-four tab-full">
            <h5>{info.label}</h5>
            {info.href ? (
              <a href={info.href} aria-label={info.label}>
                <FontAwesomeIcon className="white-2x" icon={info.icon} />
              </a>
            ) : (
              <p className="whitetext">{info.text}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;