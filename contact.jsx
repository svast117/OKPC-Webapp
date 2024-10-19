import React, { useState } from 'react';
import "./contact.css";
import banner from "./images/BoxBanner.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form using Web3Forms API
    const form = e.target;
    const data = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })
    .then((response) => response.json())
    .then((result) => {
      alert("Message sent successfully!");
      // Clear the form fields
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert("Error sending message. Please try again later.");
      console.error('Error:', error);
    });
  };

  return (
    <main className = "contact-us-main">
      <div>
        <img className = "pageBanner" src = {banner} alt = "Box Banner"/>
      </div>
      <div>
          <section id = "contact" className = "contact-us-section">
            <h1>Contact Us</h1>
            <div>
              <p>Email: contact@okpc.com</p>
              <p>Phone: +416 858 9286</p>
              <p>Follow us on:</p>
              <contact>
                <a class="instagram" href="https://www.instagram.com/okpc.ca/">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </contact>
            </div>
            {/* Web3Forms Form */}
            <form onSubmit={handleSubmit} method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="37a90264-7f89-4422-a908-e609ad643812" />
              
              <div>
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  className="contact-inputs" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="contact-inputs" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your Message" 
                  className="contact-inputs" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>
      </main>
  );
};

export default Contact;


/* document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", checkSubmission(event) {
        event.preventDefault()

        const formData = new FormData(form)
        const jsonData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        },

        fetch ('/send_email.php', {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Message Sent Successfully.")
            form.reset();
        })
        .then(error => {
            console.error("Error", error);
            alert("Something Went Wrong :(");
        });
    });
});

function Contact() {
    return (
        <head>
            <header>
                <button title = "Home"></button>
                <button title = "Services"></button>
                <button title = "About Us"></button>
                <button title = "Contact Us" href = "#contact.html"></button>
            </header>

            <link rel = "stylesheet" href = "Somebody else's website's css goes here"/>
            <section title = "contact">
                <div>
                    <p>Email: OKPC@OKPC.com</p>
                    <p>Phone: +1 416-858-9286</p>
                    <p>Follow Us</p>

                    <ul>
                        <li>
                            <img href = "#" src = "\path">Instagram</img>
                            <img href = "#" src = "\path">Facebook</img>
                            <img href = "#" src = "\path">Discord</img>
                        </li>
                    </ul>
                </div>
                <form id = "contact form" action = "send_email.php">
                    <label for = "name">Name:</label>
                    <input type = "text" id = "num" name = "name" required>

                    <label for = "email" >Email</label>
                    <input type = "email" id = "email" name = "email" required>

                    <label for=""message>Message:</label>
                    <input type = "text" id = "message" name = "message" rows = "10" required>

                    <button type = "submit">Send</button>
                </form>
            </section>
        </head>
  );
};

</form> */