import './Contact.css';
import iconLocation from '../../../assets/icon/location_filled.svg';
import iconMail from '../../../assets/icon/mail_filled.svg';
import iconPhone from '../../../assets/icon/phone_filled.svg';

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <p className="section-label">Get in touch</p>
      <h2 className="section-title">Contact us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon"><img src={iconLocation} alt="Location" /></div>
            <div><h4>Head Office</h4><p>Jirapa, Ghana</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><img src={iconMail} alt="Email" /></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:admin@anwellefoundation.org">admin@anwellefoundation.org</a>
              <a href="mailto:founder@anwellefoundation.org">founder@anwellefoundation.org</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><img src={iconPhone} alt="Phone" /></div>
            <div><h4>Phone</h4><p>+233 XX XXX XXXX</p></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
