import './Hero.css';

// Hero Assets
import heroImg1 from '../../../assets/images/IMG 1.png';
import heroImg2 from '../../../assets/images/IMG 2.png';
import heroImg3 from '../../../assets/images/IMG 3.png';
import heroImg4 from '../../../assets/images/IMG 4.png';
import heroImg5 from '../../../assets/images/IMG 5.png';
import heroImg6 from '../../../assets/images/IMG 6.png';
import heroImg7 from '../../../assets/images/IMG 7.png';

function Hero() {
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
    <>
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
    </>
  );
}

export default Hero;
