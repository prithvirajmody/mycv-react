// components/Contact.js
import React from 'react';
import linkedinLogo from './assets/linkedin_logo.jpg';
import githubLogo from './assets/github_logo.png';
import gmailLogo from './assets/gmail_logo.jpg';
import phoneLogo from './assets/phone_logo.jpg';
import whatsappLogo from './assets/whatsapp_logo.jpg';
import instagramLogo from './assets/instagram_logo.jpg';
import './Contact.css'; // For specific styling of this page

function Contact() {
  const handlePhoneClick = () => {
    alert('My Phone Numbers are +91 90043 72646 (India) and +1 530 979 3451 (USA)');
  };

  return (
    <div className="contact-page">
      <header>
        <h1>Contact Details</h1>
      </header>

      <main>
        <section className="contact-buttons">
          <button onClick={() => window.open('https://www.linkedin.com/in/prithviraj-mody/')}>
            <img src={linkedinLogo} alt="LinkedIn" />
          </button>

          <button onClick={() => window.open('https://github.com/prithvirajmody')}>
            <img src={githubLogo} alt="GitHub" />
          </button>

          <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=prithvirajmody@gmail.com')}>
            <img src={gmailLogo} alt="Gmail" />
          </button>

          <button onClick={handlePhoneClick}>
            <img src={phoneLogo} alt="Phone" />
          </button>

          <button onClick={() => window.open('https://wa.me/919004372646')}>
            <img src={whatsappLogo} alt="WhatsApp" />
          </button>

          <button onClick={() => window.open('https://www.instagram.com/prithvirajmody/')}>
            <img src={instagramLogo} alt="Instagram" />
          </button>
        </section>

        <section>
          <a href="/">Back to Homepage</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Prithviraj Mody. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
