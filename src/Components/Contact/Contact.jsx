import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or need further assistance, feel free to reach out to us.</p>
      <div className="contact-form">
        {/* Add contact form content here */}
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="contact-button">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
