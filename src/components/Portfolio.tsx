import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import projectData from '../json/projectData.json';

const Portfolio = () => {
  const swiperConfig = {
    pagination: { clickable: true },
    modules: [Pagination],
  };

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio">Projects</h1>
        <h2 className="protfolio-title">Here are a few examples of my work.</h2>
        <br />
        <Swiper {...swiperConfig} className="mySwiper">
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio-item">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    <center>
                      <a href={project.link} aria-label="GitHub">
                        <FontAwesomeIcon className="black-portfolio" icon={faGithub} />
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
