import imgLogo from '../../assets/Logo/Logo.png';
import iconMenu from '../../assets/icon/menu_regular.svg';
import './Header.css';

function Header({ isMobileMenuOpen, setIsMobileMenuOpen, hash }) {
  return (
    <header className="header">
      <a href="#" className="logo-link">
        <img src={imgLogo} alt="Anwelle Foundation" className="logo-img" />
      </a>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#who" className={`nav-item ${hash === '#who' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
        <a href="#focus" className={`nav-item ${hash === '#focus' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>OUR IMPACT</a>
        <a href="#where" className={`nav-item ${hash === '#where' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>WHERE WE WORK</a>
        <a href="#partner" className={`nav-item ${hash === '#partner' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>PARTNER</a>
        <a href="#contact" className={`nav-item ${hash === '#contact' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
        <a href="#impact" className={`nav-item ${hash === '#impact' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>IMPACT</a>
        <a href="#volunteer" className="nav-btn-mobile" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
          <button className="btn btn-outline" style={{ width: '100%' }}>BECOME A VOLUNTEER</button>
        </a>
      </nav>
      <div className="header-right">
        <a href="#volunteer" className="desktop-btn" style={{ textDecoration: 'none' }}>
          <button className="btn btn-outline">
            BECOME A VOLUNTEER
          </button>
        </a>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={iconMenu} alt="Menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
