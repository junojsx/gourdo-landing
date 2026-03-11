import screen1 from '../assets/landing/screen-1.png';
import screen2 from '../assets/landing/screen-2.png';
import screen3 from '../assets/landing/screen-3.png';
import screen4 from '../assets/landing/screen-4.png';
import screen5 from '../assets/landing/screen-5.png';
import badgeAppStore from '../assets/badge-app-store.svg';
import badgeGooglePlay from '../assets/badge-google-play.svg';


export default function Home() {
  return (
    <div className="page landing">
      <section className="heroHero" id="explore">
        <div className="heroHero__inner">
          <h1 className="heroTitle">
            Touch Grass.
            <br />
            Earn your time back.
          </h1>
          <p className="heroSubtitle">
            Task-based app shielding for iOS. Stay focused, then step outside.
          </p>

          <div className="heroSwitch" role="tablist" aria-label="Primary actions">
            <a className="heroSwitch__tab" href="#how-it-works" role="tab" aria-selected="false">
              Set tasks
            </a>
            <a className="heroSwitch__tab heroSwitch__tab--active" href="#features" role="tab" aria-selected="true">
              Shield apps
            </a>
            <a className="heroSwitch__tab" href="#download" role="tab" aria-selected="false">
              Earn access
            </a>
          </div>

          <div className="heroDownloads" id="download">
            <p className="heroDownloads__label">Get our app</p>
            <div className="heroDownloads__row">
              <a className="storeBadge" href="#" aria-label="Get it on Google Play (dummy link)">
                <img src={badgeGooglePlay} alt="" />
              </a>
              <a className="storeBadge" href="#" aria-label="Download on the App Store (dummy link)">
                <img src={badgeAppStore} alt="" />
              </a>
             
            </div>
          </div>

          <section className="howItWorks" id="how-it-works" aria-label="How it works">
            <p className="howItWorks__title">How it works</p>
            <p className="howItWorks__body">
              Touch Grass helps you complete meaningful tasks before unlocking distracting apps.
              Set a goal, get it done, then enjoy your screen time—or better yet, go touch grass.
            </p>
          </section>

          <div className="cardRail" id="features" aria-label="App screenshots">
            <div className="cardRail__card">
              <img src={screen1} alt="Pick distracting apps to lock." loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--raised">
              <img src={screen2} alt="Touch Grass welcome screen." loading="lazy" />
            </div>
            <div className="cardRail__card">
              <img src={screen3} alt="Time spent on phone calculation screen." loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--ghost" aria-hidden="true">
              <img src={screen4} alt="" loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--ghost" aria-hidden="true">
              <img src={screen5} alt="" loading="lazy" />
            </div>
          </div>

          <footer className="landingFooter">
            <a href="/privacy-policy">Privacy</a>
            <span className="landingFooter__dot" aria-hidden="true">
              •
            </span>
            <a href="/terms-of-use">Terms</a>
            <span className="landingFooter__dot" aria-hidden="true">
              •
            </span>
            <a href="/data-deletion">Data deletion</a>
          </footer>
        </div>
      </section>
    </div>
  );
}
