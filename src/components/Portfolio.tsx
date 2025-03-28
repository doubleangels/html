import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { data } from './data';

const Portfolio = () => {
  const swiperConfig = {
    pagination: { clickable: true },
    modules: [Pagination],
  };

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio">{data.portfolioData.portfolioTitle}</h1>
        <h2 className="protfolio-title">{data.portfolioData.portfolioDescription}</h2>
        <br />
        <Swiper {...swiperConfig} className="mySwiper">
          {data.projectData.projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio-item">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    <center>
                      <a href={project.link} aria-label="GitHub">
                        <FontAwesomeIcon className="black" icon={faGithub} size="2x" />
                      </a>
                    </center>
                  </p>
                  <br></br>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Portfolio;
