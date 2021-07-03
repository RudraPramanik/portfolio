import React from "react";
import "./../../index.css";

const Contact = () => {
  return (
    <section className="contact-container" name="contact" id="contact">
      <div className="profile-image"></div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>rudrahimangshoo2020@gmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">

          <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B8801917880976&text&app_absent=0&lang=en"
            >
              <i
                className="fab fa-whatsapp"
                title="whatsapp"
                id="whatsapp"
              ></i>
            </a>
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/RudraPramanik"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/rudrapramanik.himangshoo/"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/rudra-pramanik99/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            {/* Twitter */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/RudraPramanik5"
            >
              <i className="fab fa-twitter" title="twitter" id="twitter"></i>
            </a>

            {/* Instagram */}
        
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>+880 1917 880976 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
