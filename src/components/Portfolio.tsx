import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faGooglePlay, faGithub, faLinux, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';

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
          <SwiperSlide>
            <div className="portfolio-item">
              <div>
                <h3>NextDNS Manager</h3>
                <p><FontAwesomeIcon className="padding-right-20" icon={faAndroid} />A
                  lightweight mobile app for Android that allows you to manage your NextDNS settings on the
                  go!</p>
                <p>Link: 
                  <a href="https://play.google.com/store/apps/details?id=com.doubleangels.nextdnsmanagement&hl=en_US&gl=US" aria-label="Check out my NextDNS Manager project" target="_blank">
                    <FontAwesomeIcon className="padding-both-20" icon={faGooglePlay} />
                  </a>
                  Source: <a href="https://github.com/mtverlee/NextDNSManager" aria-label="Check out my NextDNS Manager project" target="_blank">
                    <FontAwesomeIcon className="padding-left-20" icon={faGithub} />
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide portfolio-item">
              <div>
                <h3>gradientLines</h3>
                <p>
                  <FontAwesomeIcon icon={faCode} />
                  A simple, animated graphic using only HTML canvases, JS, and CSS.
                </p>
                <p>Source: 
                  <a href="https://github.com/mtverlee/gradientLines" aria-label="Check out my gradientLines project" target="_blank">
                    <FontAwesomeIcon className="padding-left-20" icon={faGithub} />
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide portfolio-item">
              <div>
                <h3>GalaxyWatch4</h3>
                <p>
                  <FontAwesomeIcon className="padding-right-20" icon={faLinux} />
                  A simple bash script that uses ADB commands to debloat a Galaxy Watch 4 or other similar devices over the local network.
                </p>
                <p>
                  Source: 
                  <a href="https://github.com/mtverlee/GalaxyWatch4" aria-label="Check out my GalaxyWatch4 project" target="_blank">
                    <FontAwesomeIcon className="padding-left-20" icon={faGithub} />
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide portfolio-item">
              <div>
                <h3>J3Copy</h3>
                <p>
                  <FontAwesomeIcon className="padding-right-20" icon={faMicrosoft} />
                  A custom file synchronization program for J3 Engineering Consultants, Inc.
                </p>
                <p>
                  Source: 
                  <a href="https://github.com/mtverlee/j3Copy" aria-label="Check out my j3Copy project" target="_blank">
                    <FontAwesomeIcon className="padding-left-20" icon={faGithub} />
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Portfolio;
