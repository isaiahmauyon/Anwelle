import './Footer.css';

// Social Icons
import iconFacebook from '../../assets/icon/facebook_filled.svg';
import iconInstagram from '../../assets/icon/instagram_filled.svg';
import iconLinkedin from '../../assets/icon/linkedin_filled.svg';
import iconTwitterX from '../../assets/icon/social_x_regular.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h2 className="footer-logo">Anwelle foundation</h2>
          <p className="footer-desc">A community-driven non-profit improving livelihoods through sustainable programmes in agriculture, education, health & WASH, and economic empowerment.</p>
          <p className="footer-tagline">"Empowering Communities. Transforming Futures."</p>
          <div className="social-row footer-social">
            <a href="#" className="social-link footer-social-link" title="Facebook"><img src={iconFacebook} alt="Facebook" /></a>
            <a href="#" className="social-link footer-social-link" title="LinkedIn"><img src={iconLinkedin} alt="LinkedIn" /></a>
            <a href="#" className="social-link footer-social-link" title="Instagram"><img src={iconInstagram} alt="Instagram" /></a>
            <a href="#" className="social-link footer-social-link" title="X (Twitter)"><img src={iconTwitterX} alt="X" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li><a href="#who">Who we are</a></li>
            <li><a href="#who">Vision & Mission</a></li>
            <li><a href="#where">Where we work</a></li>
            <li><a href="#who">Our approach</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Our work</h5>
          <ul>
            <li><a href="#focus">Agriculture</a></li>
            <li><a href="#focus">Education</a></li>
            <li><a href="#focus">Health & WASH</a></li>
            <li><a href="#focus">Livelihood</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Get involved</h5>
          <ul>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="#partner">Partner with us</a></li>
            <li><a href="mailto:admin@anwellefoundation.org">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Anwelle Foundation. All rights reserved.</span>
        <span>Jirapa, Ghana &nbsp;·&nbsp; admin@anwellefoundation.org</span>
      </div>
    </footer>
  );
}

export default Footer;
