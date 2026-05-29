import './FocusAreas.css';

// Focus Icons
import iconPlant from '../../../assets/icon/fluent-emoji-flat_potted-plant.svg';
import iconBook from '../../../assets/icon/emojione_green-book.svg';
import iconHealth from '../../../assets/icon/noto_man-health-worker.svg';
import iconMoney from '../../../assets/icon/fluent-emoji-flat_money-bag.svg';

function FocusAreas() {
  return (
    <section className="focus-section section" id="focus">
      <p className="section-label">What we do</p>
      <h2 className="section-title">Our four <em>focus areas</em></h2>
      <div className="focus-grid">
        <div className="focus-card">
          <div className="focus-icon agri"><img src={iconPlant} alt="Agriculture" /></div>
          <h3>Agriculture & Food Security</h3>
          <p>We support farmers and rural communities through climate-smart agriculture, women farmer empowerment, and food security initiatives that improve productivity and household income.</p>
        </div>
        <div className="focus-card">
          <div className="focus-icon edu"><img src={iconBook} alt="Education" /></div>
          <h3>Education & Skills Development</h3>
          <p>Education is the foundation of sustainable development. Our programmes improve access to quality education, digital inclusion, vocational training, and youth empowerment.</p>
        </div>
        <div className="focus-card">
          <div className="focus-icon health"><img src={iconHealth} alt="Health" /></div>
          <h3>Health & WASH</h3>
          <p>We improve access to healthcare, clean water, sanitation, and hygiene education in underserved communities to promote healthier and safer living conditions.</p>
        </div>
        <div className="focus-card">
          <div className="focus-icon live"><img src={iconMoney} alt="Livelihood" /></div>
          <h3>Livelihood & Economic Empowerment</h3>
          <p>We empower women and youth with practical skills, entrepreneurship opportunities, financial literacy, and business support systems that create sustainable livelihoods.</p>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
