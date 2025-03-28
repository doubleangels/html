

import { data } from './data';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio">{data.portfolioData.portfolioTitle}</h1>
        <h2 className="protfolio-title">{data.portfolioData.portfolioDescription}</h2>
        <br />
        <PortfolioItem />
      </section>
    </>
  );
};

export default PortfolioSection;
