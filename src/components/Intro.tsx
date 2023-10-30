import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimationComponent from './Animation';

export default function Intro() {
    return (
        <section id="intro">
            <div id="canvas-wrap">
                <AnimationComponent />
                <div className="intro-overlay"></div>
                <div className="intro-content">
                    <h5>Hello, World.</h5>
                    <h1>I'm Matt.</h1>
                    <p className="intro-position">
                        <span>Developer | Administrator | Student</span>
                    </p>
                    <a className="button stroke" href="#about" title="">
                        Meet Me!
                    </a>
                </div>
                <ul className="intro-social">
                    <li>
                        <a href="https://github.com/doubleangels" aria-label="View my Github profile">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="#contact" aria-label="Contact me by phone">
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </li>
                    <li>
                        <a href="#contact" aria-label="Contact me by email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}