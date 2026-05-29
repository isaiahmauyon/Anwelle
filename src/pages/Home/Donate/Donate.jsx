import './Donate.css';

function Donate() {
  return (
    <section className="donate-section section" id="donate">
      <p className="section-label">Make an impact</p>
      <h2 className="section-title" >
        Your support transforms lives
      </h2>
      <p className="donate-sub">
        Every contribution helps provide education, clean water, healthcare, agricultural support, and economic opportunities to vulnerable communities across Africa.
      </p>
      <div className="donate-cards">
        <div className="donate-card">
          <h4>Donate Monthly</h4>
          <p>Sustain our programmes with a recurring gift</p>
        </div>
        <div className="donate-card">
          <h4>Sponsor a Child</h4>
          <p>Fund education and opportunity for one child</p>
        </div>
        <div className="donate-card">
          <h4>Community Project</h4>
          <p>Back a specific initiative in a community</p>
        </div>
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
    </section >
  );
}

export default Donate;
