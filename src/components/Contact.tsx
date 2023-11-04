import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
                <div className="col-four tab-full">
                    <h5>Find me:</h5>
                    <p className="whitetext">Denver, CO</p>
                </div>
                <div className="col-four tab-full">
                    <h5>Email me:</h5>
                    <a href="mailto:matt@doubleangels.com" aria-label="Email me">
                        <FontAwesomeIcon className="white-2x" icon={faEnvelope} />
                    </a>
                </div>
                <div className="col-four tab-full">
                    <h5>Call/text me:</h5>
                    <a href="tel:7202950463" aria-label="Call me">
                        <FontAwesomeIcon className="white-2x" icon={faPhone} />
                    </a>
                </div>
            </div>
        </section>
    );
}
