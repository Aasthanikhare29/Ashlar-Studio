import { useSite } from '../../context/SiteContext';
import './CookieBanner.css';

const CookieBanner = () => {
  const { cookieAccepted, acceptCookies } = useSite();

  if (cookieAccepted) return null;

  return (
    <div className="cookie-banner" role="alert" aria-live="polite">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="cookie-banner__actions">
          <a href="/cookies" className="cookie-banner__link">Learn More</a>
          <button className="cookie-banner__btn" onClick={acceptCookies}>Accept All</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
