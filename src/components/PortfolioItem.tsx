import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperConfig = {
    pagination: { clickable: true },
    modules: [Pagination],
    spaceBetween: 30,
};

export default function PortfolioItem() {
    return (
        <div className="row">
            <div className="col-twelve">
                <Swiper {...swiperConfig} className="portfolio-slider">
                    {data.projectData.projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-item">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
