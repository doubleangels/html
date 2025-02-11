import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stat = ({ icon, text, content }) => {
    return (
        <div className="bgrid whitetext">
            <div>
                <FontAwesomeIcon icon={icon} aria-label={text} />
            </div>
            <div>{content}</div>
            <div className="hidemobile">{text}</div>
            <br></br>
        </div>
    );
};

export default Stat;