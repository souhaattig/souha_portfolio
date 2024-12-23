import React,{useState} from "react";
import "./Contact.css";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import './Contact.css' ; 
import { Button, message, Space } from 'antd';

const Contact = () => { 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messagee, setMessage] = useState("");
  
  
  const [messageApi, contextHolder] = message.useMessage();
 
 
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a data object with the form field values
      const data = {
        sender: email,
        message : messagee,
        name,
        subject,
      };

      // Make a POST request to your API
      const response = await axios.post("https://api.flydelivery.tn/admin/email_portfolio", data);

      // // Handle the response as needed (e.g., show a success message)
      console.log("Email sent successfully!", response);

      // Clear the form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      message.success("Email Sent Successfully!", 5);
    } catch (error) {
      // Handle any errors (e.g., show an error message)
      console.error("Error sending email:", error);
    }
  };


  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span> Touch </span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">souhaattig44@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+216 50 770 447</h4>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/souha-attig-9938592a3/"
                className="contact__social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/souha-attig-9938592a3/"
                className="contact__social-link"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/souha-attig-9938592a3/"
                className="contact__social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/souha-attig-9938592a3/"
                className="contact__social-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
            <input
              type="text"
              className="form__control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>

            <div className="form__input-div">
            <input
              type="email"
              className="form__control"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="form__input-div">
            <input
              type="text"
              className="form__control"
              placeholder="Your Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            </div>
          </div>

          <div className="form__input-div">
          <textarea
            placeholder="Your Message"
            className="form__control textarea"
            value={messagee}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          </div>
          <button className="button" > 
             Send Message
             <span className="button__icon contact__button_icon">
              <FiSend/>
             </span>
          </button>
        </form>
      </div>
      { contextHolder}

    </section>
  );
};

export default Contact;
