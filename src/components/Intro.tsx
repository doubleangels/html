import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnimationComponent from './Animation';
import socialData from '../json/socialData.json';

export default function Intro() {
  return (
    <section id="intro">
      <div id="canvas-wrap">
        <AnimationComponent />
        <div id="overlay" className="intro-overlay"></div>
        <div id="overlay" className="intro-content">
          <h5>Hello, World.</h5>
          <h1>I'm Matt.</h1>
          <p className="intro-position">
            <span>Developer | Administrator | Student</span>
          </p>
          <a className="button stroke" href="#about" title="Meet Me!">
            Meet Me!
          </a>
        </div>
        <ul className="intro-social">
          {socialData.map((item, index) => (
            <li key={index}>
              <a href={item.link} aria-label={item.label}>
                {item.id === 'github' && (
                  <FontAwesomeIcon icon={faGithub} />
                )}
                {item.id === 'email' && (
                  <FontAwesomeIcon icon={faEnvelope} />
                )}
                {item.id === 'phone' && (
                  <FontAwesomeIcon icon={faPhone} />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
