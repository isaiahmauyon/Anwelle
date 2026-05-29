import './Goals.css';
import checkMark from '../../../assets/icon/checkmark.svg';
import imgImg63962 from '../../../assets/images/IMG_6396.jpg';

function Goals() {
  return (
    <section className="section goals-section">
      <div className="goals-content-wrapper">
        <div className="goals-text-side">
          <p className="section-label">Our impact goals</p>
          <h2 className="section-title">What we are working <em>towards</em></h2>
          <div className="goals-grid">
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Improve food security for vulnerable households</h4>
            </div>
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Increase access to quality education and digital skills</h4>
            </div>
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Improve access to clean water and sanitation</h4>
            </div>
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Reduce poverty and unemployment</h4>
            </div>
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Empower women and youth economically</h4>
            </div>
            <div className="goal-card">
              <img src={checkMark} alt="" />
              <h4>Build resilient and sustainable communities</h4>
            </div>
          </div>
        </div>
        <div className="goals-image-side">
          <img src={imgImg63962} alt="Impact" />
        </div>
      </div>
    </section>
  );
}

export default Goals;
