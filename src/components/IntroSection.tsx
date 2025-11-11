import { data } from './data';
import { lazy, Suspense } from 'react';
import SocialInfo from './SocialInfo';

const Animation = lazy(() => import('./Animation'));

export default function IntroSection() {
  return (
    <section id="intro">
      <Suspense fallback={<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#000' }} />}>
        <Animation />
      </Suspense>
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
