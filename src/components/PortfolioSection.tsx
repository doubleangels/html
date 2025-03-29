import { data } from './data';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{data.portfolioData.portfolioTitle}</h5>
          <h1>{data.portfolioData.portfolioDescription}</h1>
        </div>
      </div>
      
      <div className="row portfolio-content">
        <PortfolioItem />
      </div>
    </section>
  );
};

export default PortfolioSection;
