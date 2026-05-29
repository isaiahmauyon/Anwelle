import './ImpactHero.css';

function ImpactHero() {
  return (
    <section className="impact-hero">
      <div className="impact-hero-content">
        <p className="impact-label">STORIES FROM THE FIELD</p>
        <h1 className="impact-title">Our <em>Impact</em> in Action</h1>
        <p className="impact-subtitle">
          From Jirapa to the wider region — real activities, real communities, real change.
          Follow our journey through every programme we deliver.
        </p>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">38</span>
            <span className="stat-label">Communities reached</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">850+</span>
            <span className="stat-label">Volunteers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12K+</span>
            <span className="stat-label">Lives touched</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactHero;
