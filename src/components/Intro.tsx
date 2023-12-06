import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnimationComponent from './Animation';

const socialIcons = [
  { icon: faGithub, link: 'https://github.com/doubleangels', label: 'View my Github profile' },
  { icon: faPhone, link: '#contact', label: 'Contact me by phone' },
  { icon: faEnvelope, link: '#contact', label: 'Contact me by email' },
];

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
          {socialIcons.map((item, index) => (
            <li key={index}>
              <a href={item.link} aria-label={item.label}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
