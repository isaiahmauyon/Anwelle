import './Volunteer.css';

function Volunteer() {
  return (
    <section className="volunteer-section section" id="volunteer">
      <p className="section-label">Get involved</p>
      <h2 className="section-title">Join our mission</h2>
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
  );
}

export default Volunteer;
