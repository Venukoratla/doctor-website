import React from "react";
import "./Contactus.css";
import doctor3 from "../images/doctor-3.jpg";

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contactus">
      <div className="contact-us-wrapper">
        <div className="contact-image-container">
          <img src={doctor3} alt="Doctor" className="contact-image" />
        </div>
        <div className="contact-content">
          <h3 className="support-tag">Continuous Support</h3>
          <h1>Support When You Need It Most</h1>
          <p>
            Our support services are designed to be there for you. Contact us
            through our emergency line or visit your nearest emergency room for
            immediate assistance. Your well-being is our priority, and we are
            here to support you every step of the way.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Helpline Number</h4>
                <p>+1(209) 2458542</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h4>Appointment</h4>
                <p>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
