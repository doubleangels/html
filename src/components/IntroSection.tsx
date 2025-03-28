import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnimationComponent from './Animation';
import { data } from './data';

export default function IntroSection() {
  return (
    <section id="intro">
      <div id="canvas-wrap">
        <AnimationComponent />
        <div id="overlay" className="intro-overlay"></div>
        <div id="overlay" className="intro-content">
          <h5>{data.introData.intro}.</h5>
          <h1>I'm {data.introData.firstName}</h1>
          <p className="intro-position">
            <span>{data.introData.introDescription}</span>
          </p>
          <a className="button stroke" href="#about" title={data.introData.introButtonText}>
            {data.introData.introButtonText}
          </a>
        </div>
        <ul className="intro-social">
          {data.socialData.socials.map((item, index) => (
            <li key={index}>
              <a href={item.link} aria-label={item.label}>
                {item.id === 'github' && (
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                )}
                {item.id === 'email' && (
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                )}
                {item.id === 'phone' && (
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
