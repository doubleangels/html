import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { memo } from 'react';

interface StatProps {
  icon: IconDefinition;
  text: string;
  content: React.ReactNode;
}

function Stat({ icon, text, content }: StatProps) {
  return (
    <div className="bgrid stat-item whitetext">
      <div className="stat-icon">
        <FontAwesomeIcon icon={icon} aria-label={text} size="2x" />
      </div>
      <div className="stat-content">{content}</div>
      <div className="stat-label hidemobile">{text}</div>
    </div>
  );
}

export default memo(Stat);
