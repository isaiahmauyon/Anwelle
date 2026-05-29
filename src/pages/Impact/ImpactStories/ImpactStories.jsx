import { useState } from 'react';
import './ImpactStories.css';

function ImpactStories({ activities, activeStory, setActiveStory }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openStory = (activity) => {
    setActiveImageIndex(0);
    setActiveStory(activity);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeStory && activeStory.images) {
      setActiveImageIndex((prev) => (prev + 1) % activeStory.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeStory && activeStory.images) {
      setActiveImageIndex((prev) => (prev - 1 + activeStory.images.length) % activeStory.images.length);
    }
  };

  // Render real photo collage grid based on size
  const renderPhotoCollageGrid = (activity) => {
    const images = activity.images || [];
    const length = images.length;
    
    if (length === 0) return null;

    let gridClass = "grid-style-1";
    let visibleCount = 1;
    if (length >= 3) {
      gridClass = "grid-style-3";
      visibleCount = 3;
    } else if (length === 2) {
      gridClass = "grid-style-2";
      visibleCount = 2;
    }

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = length > visibleCount;
    const remainingCount = length - visibleCount;

    return (
      <div 
        className={`emoji-grid ${gridClass} clickable-grid`} 
        onClick={() => openStory(activity)}
        title="View Gallery"
      >
        {visibleImages.map((img, idx) => {
          const isLast = idx === visibleCount - 1;
          return (
            <div key={idx} className="emoji-panel-item photo-panel-item">
              <img src={img} alt="" className="grid-collage-photo" referrerPolicy="no-referrer" />
              {isLast && hasMore && (
                <div className="photo-grid-overlay">
                  <span className="panel-text">+{remainingCount} more</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="stories-column">
      {activities.map(activity => (
        <article key={activity.id} className="activity-card">
          <h2 className="activity-card-title">{activity.title}</h2>
          
          {/* Real Photo Collage Grid (clickable to open gallery modal!) */}
          {renderPhotoCollageGrid(activity)}
          
          {/* Additional Text Snippets */}
          <div className="activity-card-paragraphs">
            {activity.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </article>
      ))}

      {/* Detail & Photo Gallery Slider Modal */}
      {activeStory && (
        <div className="story-modal-overlay" onClick={() => setActiveStory(null)}>
          <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setActiveStory(null)}>&times;</button>
            
            <h1 className="modal-title">{activeStory.title}</h1>
            
            {/* Interactive Image Gallery Slider */}
            {activeStory.images && activeStory.images.length > 0 && (
              <div className="modal-gallery-wrapper">
                <div className="modal-gallery-main">
                  <button className="gallery-arrow-btn prev-btn" onClick={prevImage} aria-label="Previous image">
                    &#8249;
                  </button>
                  
                  <div className="gallery-image-frame">
                    <img 
                      src={activeStory.images[activeImageIndex]} 
                      alt={`Gallery view ${activeImageIndex + 1}`} 
                      className="gallery-active-image" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="gallery-counter-badge">
                      {activeImageIndex + 1} / {activeStory.images.length}
                    </div>
                  </div>
                  
                  <button className="gallery-arrow-btn next-btn" onClick={nextImage} aria-label="Next image">
                    &#8250;
                  </button>
                </div>
                
                {/* Horizontal thumbnails strip */}
                <div className="gallery-thumbnails-strip">
                  {activeStory.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`gallery-thumbnail-wrap ${activeImageIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <img src={img} alt="" className="gallery-thumbnail-img" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-body-text">
              {activeStory.paragraphs.map((p, idx) => (
                <p key={idx} className="modal-p">{p}</p>
              ))}
              <p className="modal-p">
                This project represents part of the Anwelle Foundation's long-term commitment to sustainable and inclusive development. Through collaboration with local communities, partner organizations, and local leaders, we will continue to monitor and support these initiatives to ensure they thrive for generations to come.
              </p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setActiveStory(null)}>Close Story</button>
              <a href="#donate" className="btn btn-primary" onClick={() => setActiveStory(null)}>Support Our Work</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImpactStories;
