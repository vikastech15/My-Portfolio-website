import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/rb_4917.png';

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'vikas_630777',         // ✅ new service ID
      'template_71c3kha',     // ✅ new template ID
      form.current,
      'DwoITBN3NYsWwubOd'     // ✅ new public key
    )
    .then((result) => {
      console.log(result.text);
      toast.success('✅ Message sent successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      form.current.reset(); // clear form after success
    }, (error) => {
      console.log(error.text);
      toast.error("❌ Failed to send message. Kindly refresh the page.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container" style={{ justifyContent: "center" }}>
        {/* <img src={cartoon} style={{ width: '500px' }} /> */}

        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="user_name" placeholder='Full Name' required />
          <input id='email' type="email" name="user_email" placeholder='Email ID' required />
          <textarea
            id='message'
            name="message"
            rows='5'
            placeholder='Share your thoughts and insights here; your feedback means a lot.'
            required
          />
          <button className='btn' id='submitBtn' type="submit">Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
