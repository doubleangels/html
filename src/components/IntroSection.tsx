import { data } from './data';
import Animation from './Animation';
import SocialInfo from './SocialInfo';

export default function IntroSection() {
  return (
    <section id="intro">
      <Animation />
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>{data.introData.intro}</h5>
            <h1>I'm {data.introData.firstName}.</h1>
            <p className="intro-position">
              <span>{data.introData.introDescription}</span>
            </p>
            <a className="button stroke" href="#about" title={data.introData.introButtonText}>
              {data.introData.introButtonText}
            </a>
          </div>
        </div>
      </div>
      <SocialInfo />
    </section>
  );
}
