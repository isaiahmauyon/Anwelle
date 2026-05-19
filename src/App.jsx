import React, { useRef, useState } from 'react';
import './App.css';

// Local Assets
import imgLogo from './assets/Logo/Logo.png';
import imgHeroImage1 from './assets/hero.png';
import imgImg70152 from './assets/images/IMG_7015.jpg';
import imgImg63962 from './assets/images/IMG_6396.jpg';
import imgImg59782 from './assets/images/IMG_5978.jpg';
import imgImg59271 from './assets/images/IMG_5927.jpg';
import imgImg60102 from './assets/images/IMG_6010.jpg';
import imgImg60172 from './assets/images/IMG_6017.jpg';
import imgImg59562 from './assets/images/IMG_5956.jpg';
import imgImg67261 from './assets/images/IMG_6726.jpg';

import imgProg1 from './assets/images/IMG_6037.jpg';
import imgProg3 from './assets/images/IMG_6737.jpg';
import imgProg4 from './assets/images/IMG_6746.jpg';
import imgWwaImage from './assets/images/IMG_6405.jpg';

import imgArrowRightUp from './assets/icon/arrow_right_up_regular.svg';
import imgArrowLeft from './assets/icon/arrow_left_regular.svg';
import imgArrowRight from './assets/icon/arrow_right_regular.svg';

import heroImg1 from './assets/images/IMG 1.png';
import heroImg2 from './assets/images/IMG 2.png';
import heroImg3 from './assets/images/IMG 3.png';
import heroImg4 from './assets/images/IMG 4.png';
import heroImg5 from './assets/images/IMG 5.png';
import heroImg6 from './assets/images/IMG 6.png';
import heroImg7 from './assets/images/IMG 7.png';

// Focus Icons
import iconPlant from './assets/icon/fluent-emoji-flat_potted-plant.svg';
import iconBook from './assets/icon/emojione_green-book.svg';
import iconHealth from './assets/icon/noto_man-health-worker.svg';
import iconMoney from './assets/icon/fluent-emoji-flat_money-bag.svg';

import checkMark from './assets/icon/checkmark.svg';

// Contact & Social Icons
import iconLocation from './assets/icon/location_filled.svg';
import iconMail from './assets/icon/mail_filled.svg';
import iconPhone from './assets/icon/phone_filled.svg';
import iconEarth from './assets/icon/earth_2_filled.svg';
import iconFacebook from './assets/icon/facebook_filled.svg';
import iconInstagram from './assets/icon/instagram_filled.svg';
import iconLinkedin from './assets/icon/linkedin_filled.svg';
import iconTwitterX from './assets/icon/social_x_regular.svg';
import iconMenu from './assets/icon/menu_regular.svg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Approx card width + gap/overlap
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const renderCollageItems = (keyPrefix) => {
    const imgStyle = { height: '340px', width: 'auto', borderRadius: '16px', objectFit: 'cover', flexShrink: 0 };
    return [
      <img key={`${keyPrefix}-1`} src={heroImg1} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-2`} src={heroImg2} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-3`} src={heroImg3} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-4`} src={heroImg4} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-5`} src={heroImg5} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-6`} src={heroImg6} alt="" style={imgStyle} />,
      <img key={`${keyPrefix}-7`} src={heroImg7} alt="" style={imgStyle} />
    ];
  };

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="header">
        <img src={imgLogo} alt="Anwelle Foundation" className="logo-img" />
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#who" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          <a href="#focus" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>OUR IMPACT</a>
          <a href="#where" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>WHERE WE WORK</a>
          <a href="#partner" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>PARTNER</a>
          <a href="#contact" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
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

      {/* Hero Section */}
      <section className="hero-section container">
        <h1 className="hero-title">
          Empowering Communities. <span className="italic-green">Transforming Lives.</span><br />
          Building Africa's Future.
        </h1>
        <p className="hero-subtitle">
          ANWELLE FOUNDATION is a community-driven non-profit dedicated to improving livelihoods through sustainable programs in agriculture, education, health & WASH, and economic empowerment across Ghana and Africa.
        </p>
        <a href="#donate" style={{ textDecoration: 'none' }}>
          <button className="btn btn-primary">
            DONATE NOW
          </button>
        </a>
      </section>

      {/* Collage Section (Marquee Layout) */}
      <div className="collage-marquee-wrapper">
        <div className="collage-container">
          {renderCollageItems('set1')}
          {renderCollageItems('set2')}
        </div>
      </div>


      {/* HERO BELOW
      <div className="hero-below section">
        <div className="hero-stats-row">
          <div className="hero-stat-cell">
            <span className="hero-stat-num">4</span>
            <span className="hero-stat-label">Focus programmes</span>
          </div>
          <div className="hero-stat-cell">
            <span className="hero-stat-num">1<em style={{ fontStyle: 'italic', color: 'var(--primary-green)' }}>st</em></span>
            <span className="hero-stat-label">Base in Jirapa, Ghana</span>
          </div>
          <div className="hero-stat-cell">
            <span className="hero-stat-num">Pan<em style={{ fontStyle: 'italic', color: 'var(--primary-green)' }}>-AF</em></span>
            <span className="hero-stat-label">Continent-wide vision</span>
          </div>
          <div className="hero-stat-cell">
            <span className="hero-stat-num">100<em style={{ fontStyle: 'italic', color: 'var(--primary-green)' }}>%</em></span>
            <span className="hero-stat-label">Community-driven</span>
          </div>
        </div>
      </div> */}

      {/* WHO WE ARE */}
      <section className="section who-we-are" id="who">
        <p className="section-label">Who we are</p>
        <h2 className="section-title">A foundation built for <em>Africa's communities</em></h2>
        <div className="who-grid">
          <div className="who-text">
            <p className="lead">ANWELLE FOUNDATION exists to create sustainable and inclusive opportunities for underserved communities across Africa.</p>
            <p>Founded with a vision to empower vulnerable populations — especially women, youth, children, and rural households — the Foundation works to address poverty, inequality, limited access to education, poor sanitation, food insecurity, and unemployment through impactful community-centred initiatives.</p>
            <p>Our work is rooted in local leadership, innovation, collaboration, and long-term sustainability. Beginning in Jirapa, we aim to scale our impact throughout Ghana and across the African continent.</p>
            <button className="btn btn-primary">
              EXLORE OUR WORK
            </button>
          </div>
          <div className="who-image">
            <img src={imgWwaImage} alt="Who We Are" />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm-section section">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Our purpose</p>
        <h2 className="section-title" style={{ color: 'var(--bg-white)', maxWidth: '100%' }}>What drives <em style={{ color: '#9FD9B4' }}>everything</em> we do</h2>
        <div className="vm-grid">
          <div className="vm-card">
            <p className="vm-card-label">Our Vision</p>
            <h3>To build <em>resilient, empowered, and sustainable</em> African communities where every individual has the opportunity to thrive.</h3>
          </div>
          <div className="vm-card">
            <p className="vm-card-label">Our Mission</p>
            <h3>To improve the quality of life of <em>vulnerable communities</em> through impactful programs in agriculture, education, health & WASH, and livelihood empowerment.</h3>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="focus-section section" id="focus">
        <p className="section-label">What we do</p>
        <h2 className="section-title">Our four <em>focus areas</em></h2>
        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon agri"><img src={iconPlant} alt="Agriculture" /></div>
            <h3>Agriculture & Food Security</h3>
            <p>We support farmers and rural communities through climate-smart agriculture, women farmer empowerment, and food security initiatives that improve productivity and household income.</p>
          </div>
          <div className="focus-card">
            <div className="focus-icon edu"><img src={iconBook} alt="Education" /></div>
            <h3>Education & Skills Development</h3>
            <p>Education is the foundation of sustainable development. Our programmes improve access to quality education, digital inclusion, vocational training, and youth empowerment.</p>

          </div>
          <div className="focus-card">
            <div className="focus-icon health"><img src={iconHealth} alt="Health" /></div>
            <h3>Health & WASH</h3>
            <p>We improve access to healthcare, clean water, sanitation, and hygiene education in underserved communities to promote healthier and safer living conditions.</p>

          </div>
          <div className="focus-card">
            <div className="focus-icon live"><img src={iconMoney} alt="Livelihood" /></div>
            <h3>Livelihood & Economic Empowerment</h3>
            <p>We empower women and youth with practical skills, entrepreneurship opportunities, financial literacy, and business support systems that create sustainable livelihoods.</p>

          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="section" id="where">
        <p className="section-label">Where we work</p>
        <h2 className="section-title">From <em>Jirapa</em> to the continent</h2>
        <div className="where-grid">
          <div className="where-hq">
            <p className="where-hq-label">Our headquarters</p>
            <h3>Jirapa, Ghana</h3>
            <p>This is where Anwelle Foundation is launching its first community-based initiatives and impact programmes — building the model we will carry across Africa.</p>
            <span className="where-tag">
              <img src={iconLocation} alt="Location" />
              Upper West Region, Ghana
            </span>
          </div>
          <div>
            <p className="expansion-label">Expansion roadmap</p>
            <div className="expansion-list">
              <div className="expansion-item"><span className="expansion-num">01</span><div><h4>Northern Ghana</h4><p>Scaling community programmes across the Northern regions</p></div></div>
              <div className="expansion-item"><span className="expansion-num">02</span><div><h4>Ghana nationwide</h4><p>Rural and underserved communities across the country</p></div></div>
              <div className="expansion-item"><span className="expansion-num">03</span><div><h4>West Africa</h4><p>Cross-border partnerships and regional impact</p></div></div>
              <div className="expansion-item"><span className="expansion-num">04</span><div><h4>Pan-African</h4><p>Continent-wide reach through strategic alliances</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section section">
        <div className="approach-header-row">
          <div className="approach-header-text">
            <p className="section-label">How we work</p>
            <h2 className="section-title">Our <em>approach</em></h2>
          </div>
          <div className="approach-nav">
            <button className="nav-btn" onClick={() => scrollCarousel('left')}><img src={imgArrowLeft} alt="Previous" /></button>
            <button className="nav-btn" onClick={() => scrollCarousel('right')}><img src={imgArrowRight} alt="Next" /></button>
          </div>
        </div>

        <div className="approach-carousel" ref={carouselRef}>
          <div className="approach-card c-purple" style={{ zIndex: 6 }}>
            <div className="ap-num">1</div>
            <h4>Community participation</h4>
            <p>Communities are part of the solution, not just recipients of it.</p>
          </div>
          <div className="approach-card c-yellow" style={{ zIndex: 5 }}>
            <div className="ap-num">2</div>
            <h4>Women & youth inclusion</h4>
            <p>We centre the voices and leadership of women, youth, and children.</p>
          </div>
          <div className="approach-card c-cyan" style={{ zIndex: 4 }}>
            <div className="ap-num">3</div>
            <h4>Strategic partnerships</h4>
            <p>We collaborate with governments, NGOs, and private sector organisations.</p>
          </div>
          <div className="approach-card c-orange" style={{ zIndex: 3 }}>
            <div className="ap-num">4</div>
            <h4>Innovation & technology</h4>
            <p>Leveraging tools and data to design smarter, scalable solutions.</p>
          </div>
          <div className="approach-card c-pink" style={{ zIndex: 2 }}>
            <div className="ap-num">5</div>
            <h4>Long-term sustainability</h4>
            <p>Every programme is built to last beyond our direct involvement.</p>
          </div>
          <div className="approach-card c-green" style={{ zIndex: 1 }}>
            <div className="ap-num">6</div>
            <h4>Capacity building</h4>
            <p>Equipping communities and leaders to drive their own development.</p>
          </div>
        </div>
      </section>

      {/* IMPACT GOALS */}
      <section className="section goals-section">
        <div className="goals-content-wrapper">
          <div className="goals-text-side">
            <p className="section-label">Our impact goals</p>
            <h2 className="section-title">What we are working <em>towards</em></h2>
            <div className="goals-grid">
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Improve food security for vulnerable households</h4></div>
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Increase access to quality education and digital skills</h4></div>
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Improve access to clean water and sanitation</h4></div>
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Reduce poverty and unemployment</h4></div>
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Empower women and youth economically</h4></div>
              <div className="goal-card"><img src={checkMark} alt="" /><h4 className="">Build resilient and sustainable communities</h4></div>
            </div>
          </div>
          <div className="goals-image-side">
            <img src={imgImg63962} alt="Impact" />
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="partner-section section" id="partner">
        <p className="section-label">Partner with us</p>
        <h2 className="section-title" style={{ color: 'var(--bg-white)', maxWidth: '560px' }}>Together we create <em style={{ color: '#9FD9B4' }}>lasting impact</em> across Africa</h2>
        <div className="partner-types-grid">
          <div className="partner-type">Development organizations</div>
          <div className="partner-type">Corporate institutions</div>
          <div className="partner-type">Donor agencies</div>
          <div className="partner-type">NGOs and CSOs</div>
          <div className="partner-type">Educational institutions</div>
          <div className="partner-type">Volunteers & community leaders</div>
        </div>
        <div className="partner-actions">
          <button className="btn btn-primary">
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="volunteer-section section" id="volunteer">
        <p className="section-label">Get involved</p>
        <h2 className="section-title">Join our <em>mission</em></h2>
        <div className="volunteer-grid">
          <div className="volunteer-text">
            <p>Become part of a movement creating sustainable change across communities in Ghana and Africa. Whether you are a professional, student, mentor, healthcare worker, educator, or development practitioner — your skills and support can make a difference.</p>
            <button className="btn btn-primary">APPLY TO VOLUNTEER</button>
          </div>
          <div>
            <p className="vol-areas-label">Volunteer areas</p>
            <div className="vol-areas">
              <div className="vol-area">Community outreach</div>
              <div className="vol-area">Education programs</div>
              <div className="vol-area">Health campaigns</div>
              <div className="vol-area">Agriculture support</div>
              <div className="vol-area">Fundraising</div>
              <div className="vol-area">Media & communications</div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="donate-section section" id="donate">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Make an impact</p>
        <h2 className="section-title" style={{ color: 'var(--bg-white)', margin: '0 auto 1.25rem', textAlign: 'center' }}>Your support <em style={{ color: '#9FD9B4' }}>transforms lives</em></h2>
        <p className="donate-sub">Every contribution helps provide education, clean water, healthcare, agricultural support, and economic opportunities to vulnerable communities across Africa.</p>
        <div className="donate-cards">
          <div className="donate-card"><h4>Donate Monthly</h4><p>Sustain our programmes with a recurring gift</p></div>
          <div className="donate-card"><h4>Sponsor a Child</h4><p>Fund education and opportunity for one child</p></div>
          <div className="donate-card"><h4>Community Project</h4><p>Back a specific initiative in a community</p></div>
        </div>
        <div className="donate-actions">
          <button className="btn btn-outline">
            DONATE NOW
          </button>
          <button className="btn btn-outline">
            SUPPORT COMMUNITY PROJECT
          </button>
          <button className="btn btn-outline">
            SPONSOR A CHILD
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section" id="contact">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact <em>us</em></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><img src={iconLocation} alt="Location" /></div>
              <div><h4>Head Office</h4><p>Jirapa, Ghana</p></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><img src={iconMail} alt="Email" /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:admin@anwellefoundation.org">admin@anwellefoundation.org</a>
                <a href="mailto:founder@anwellefoundation.org">founder@anwellefoundation.org</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><img src={iconPhone} alt="Phone" /></div>
              <div><h4>Phone</h4><p>+233 XX XXX XXXX</p></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Anwelle <span>Foundation</span></div>
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
    </div>
  );
}

export default App;
