import screen1 from '../assets/landing/screen-1.png';
import screen2 from '../assets/landing/screen-2.png';
import screen3 from '../assets/landing/screen-3.png';
import screen4 from '../assets/landing/screen-4.png';
import screen5 from '../assets/landing/screen-5.png';
// import badgeAppStore from '../assets/badge-app-store.svg';
// import badgeGooglePlay from '../assets/badge-google-play.svg';


export default function Home() {
  return (
    <div className="page landing">
      <section className="heroHero" id="explore">
        <div className="heroHero__inner">
          <h1 className="heroTitle">
            Gourdo — Smart Grocery Tracker.
            <br />
            Never waste fresh food again.
          </h1>
          <p className="heroSubtitle">
            Gourdo is your AI-powered grocery companion. Track expiration dates, get AI recipe ideas,
            and follow expert produce guidance to reduce food waste and save money.
          </p>

          <div className="heroSwitch" role="tablist" aria-label="Primary actions">
            <a className="heroSwitch__tab" href="#how-it-works" role="tab" aria-selected="false">
              How it works
            </a>
            <a className="heroSwitch__tab heroSwitch__tab--active" href="#features" role="tab" aria-selected="true">
              Smart tracking
            </a>
            <a className="heroSwitch__tab" href="#download" role="tab" aria-selected="false">
              Pricing
            </a>
          </div>

          <div className="heroDownloads" id="download">
            <p className="heroDownloads__label">Get Gourdo for iOS</p>
            <div className="heroDownloads__row">
              {/* <a className="storeBadge" href="#" aria-label="Get it on Google Play (dummy link)">
                <img src={badgeGooglePlay} alt="" />
              </a>
              <a className="storeBadge" href="#" aria-label="Download on the App Store (dummy link)">
                <img src={badgeAppStore} alt="" />
              </a> */}
             
            </div>
          </div>

          <section className="howItWorks" id="how-it-works" aria-label="How it works">
            <p className="howItWorks__title">How Gourdo works</p>
            <p className="howItWorks__body">
              Scan groceries with barcodes or expiry date photos, let Gourdo track everything in your
              pantry, then get AI-powered recipe ideas and smart notifications before food goes bad.
            </p>
          </section>

          <div className="cardRail" id="features" aria-label="App screenshots and features">
            <div className="cardRail__card">
              <img src={screen1} alt="Home dashboard with pantry overview and quick stats." loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--raised">
              <img src={screen2} alt="Welcome screen with Gourdo logo and sign-in form." loading="lazy" />
            </div>
            <div className="cardRail__card">
              <img src={screen3} alt="Pantry inventory list with expiring and expired items." loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--ghost" aria-hidden="true">
              <img src={screen4} alt="Recipe list with AI-generated recipes and filters." loading="lazy" />
            </div>
            <div className="cardRail__card cardRail__card--ghost" aria-hidden="true">
              <img src={screen5} alt="AI recipe result screen with ingredients and instructions." loading="lazy" />
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
            <span className="landingFooter__dot" aria-hidden="true">
              •
            </span>
            <a href="/feedback">Feedback</a>
          </footer>
        </div>
      </section>
    </div>
  );
}
