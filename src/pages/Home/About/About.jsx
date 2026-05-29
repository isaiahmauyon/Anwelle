import './About.css';
import heroImg3 from '../../../assets/images/IMG 3.png';

function About() {
  return (
    <>
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
              EXPLORE OUR WORK
            </button>
          </div>
          <div className="who-image">
            <img src={heroImg3} alt="Who We Are" />
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
            <h3>To build resilient, empowered, and sustainable African communities where every individual has the opportunity to thrive.</h3>
          </div>
          <div className="vm-card">
            <p className="vm-card-label">Our Mission</p>
            <h3>To improve the quality of life of vulnerable communities through impactful programs in agriculture, education, health & WASH, and livelihood empowerment.</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
