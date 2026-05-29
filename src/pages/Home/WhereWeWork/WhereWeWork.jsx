import './WhereWeWork.css';
import iconLocation from '../../../assets/icon/location_filled.svg';

function WhereWeWork() {
  return (
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
            <div className="expansion-item">
              <span className="expansion-num">01</span>
              <div>
                <h4>Northern Ghana</h4>
                <p>Scaling community programmes across the Northern regions</p>
              </div>
            </div>
            <div className="expansion-item">
              <span className="expansion-num">02</span>
              <div>
                <h4>Ghana nationwide</h4>
                <p>Rural and underserved communities across the country</p>
              </div>
            </div>
            <div className="expansion-item">
              <span className="expansion-num">03</span>
              <div>
                <h4>West Africa</h4>
                <p>Cross-border partnerships and regional impact</p>
              </div>
            </div>
            <div className="expansion-item">
              <span className="expansion-num">04</span>
              <div>
                <h4>Pan-African</h4>
                <p>Continent-wide reach through strategic alliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhereWeWork;
