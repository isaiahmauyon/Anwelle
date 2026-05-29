import { useRef } from 'react';
import './Approach.css';
import imgArrowLeft from '../../../assets/icon/arrow_left_regular.svg';
import imgArrowRight from '../../../assets/icon/arrow_right_regular.svg';

function Approach() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Approx card width + gap/overlap
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="approach-section section">
      <div className="approach-header-row">
        <div className="approach-header-text">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Our <em>approach</em></h2>
        </div>
        <div className="approach-nav">
          <button className="nav-btn" onClick={() => scrollCarousel('left')}>
            <img src={imgArrowLeft} alt="Previous" />
          </button>
          <button className="nav-btn" onClick={() => scrollCarousel('right')}>
            <img src={imgArrowRight} alt="Next" />
          </button>
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
  );
}

export default Approach;
