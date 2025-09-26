import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function PortfolioItem() {
    return (
        <div className="row">
            <div className="col-twelve">
                <div className="portfolio-list">
                    {data.projectData.projects.map((project, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="item-wrap">
                                <div className="portfolio-item-content">
                                    <h3 className="folio-title">{project.title}</h3>
                                    <p className="folio-desc">{project.description}</p>
                                    <div className="folio-links">
                                        <a href={project.link} className="github-link" aria-label="GitHub">
                                            <FontAwesomeIcon icon={faGithub} size="2x" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
