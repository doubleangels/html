import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialInfo() {
    return (
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
    );
}