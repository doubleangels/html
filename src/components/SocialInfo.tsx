import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

// Icon mapping object for scalability
const ICON_MAP = {
  github: faGithub,
  email: faEnvelope,
  phone: faPhone
};

function SocialInfo() {
  return (
    <ul className="intro-social">
      {data.socialData.socials.map((item) => (
        <li key={item.id}>
          <a 
            href={item.link} 
            aria-label={item.id}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {ICON_MAP[item.id] && (
              <FontAwesomeIcon icon={ICON_MAP[item.id]} size="lg" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(SocialInfo);
