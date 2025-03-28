
import { data } from './data';
import Animation from './Animation';
import SocialInfo from './SocialInfo';

export default function IntroSection() {
  return (
    <section id="intro">
      <div id="canvas-wrap">
        <Animation />
        <div id="overlay" className="intro-overlay"></div>
        <div id="overlay" className="intro-content">
          <h5>{data.introData.intro}</h5>
          <h1>I'm {data.introData.firstName}.</h1>
          <p className="intro-position">
            <span>{data.introData.introDescription}</span>
          </p>
          <a className="button stroke" href="#about" title={data.introData.introButtonText}>
            {data.introData.introButtonText}
          </a>
        </div>
        <SocialInfo />
      </div>
    </section>
  );
}
