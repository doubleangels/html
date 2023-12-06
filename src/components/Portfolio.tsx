import React from 'react';
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

  const projects = [
    {
      title: 'NextDNS Manager',
      description: 'A lightweight mobile app for Android that allows you to manage your NextDNS settings on the go!',
      icons: [
        { icon: faAndroid },
        { icon: faGooglePlay, link: 'https://play.google.com/store/apps/details?id=com.doubleangels.nextdnsmanagement&hl=en_US&gl=US', label: 'Check out my NextDNS Manager project' },
        { icon: faGithub, link: 'https://github.com/mtverlee/NextDNSManager', label: 'Check out my NextDNS Manager project' },
      ],
    },
    {
      title: 'gradientLines',
      description: 'A simple, animated graphic using only HTML canvases, JS, and CSS.',
      icons: [{ icon: faCode, link: 'https://github.com/mtverlee/gradientLines', label: 'Check out my gradientLines project' }],
    },
    {
      title: 'GalaxyWatch4',
      description: 'A simple bash script that uses ADB commands to debloat a Galaxy Watch 4 or other similar devices over the local network.',
      icons: [{ icon: faLinux }, { icon: faGithub, link: 'https://github.com/mtverlee/GalaxyWatch4', label: 'Check out my GalaxyWatch4 project' }],
    },
    {
      title: 'J3Copy',
      description: 'A custom file synchronization program for J3 Engineering Consultants, Inc.',
      icons: [{ icon: faMicrosoft }, { icon: faGithub, link: 'https://github.com/mtverlee/j3Copy', label: 'Check out my j3Copy project' }],
    },
  ];

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio">Projects</h1>
        <h2 className="protfolio-title">Here are a few examples of my work.</h2>
        <br />
        <Swiper {...swiperConfig} className="mySwiper">
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio-item">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    {project.icons.map((icon, iconIndex) => (
                      <React.Fragment key={iconIndex}>
                        {icon.link ? (
                          <a href={icon.link} aria-label={icon.label} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={`padding-${iconIndex === 0 ? 'right' : 'left'}-20`} icon={icon.icon} />
                          </a>
                        ) : (
                          <FontAwesomeIcon className={`padding-${iconIndex === 0 ? 'right' : 'left'}-20`} icon={icon.icon} />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
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
