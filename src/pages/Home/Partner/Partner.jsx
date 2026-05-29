import './Partner.css';

function Partner() {
  return (
    <section className="partner-section section" id="partner">
      <p className="section-label">Partner with us</p>
      <h2 className="section-title" style={{ color: 'var(--bg-white)', maxWidth: '560px' }}>
        Together we create <em style={{ color: '#9FD9B4' }}>lasting impact</em> across Africa
      </h2>
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
  );
}

export default Partner;
