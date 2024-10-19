import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

//Stock Photo?
const sectionStyle1 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`
};

//The OK | Computer A
const sectionStyle2 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image2.jpg)`
};

//3090 Project
const sectionStyle3 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image3.jpg)`
};

const Services = () => {
  return (
    <main>
      <section id="section1" className="section" style={sectionStyle1}>
        <div className="content">
          <h1>Welcome to Section 1</h1>
          <p>This is the first section.</p>
          <Link className = "desLink" to="/contact">Contact Us</Link>
        </div>
      </section>
      <section id="section2" className="section" style={sectionStyle2}>
        <div className="content">
          <h1>Welcome to Section 2</h1>
          <p>This is the second section.</p>
        </div>
      </section>
      <section id="section3" className="section" style={sectionStyle3}>
        <div className="content">
          <h1>Welcome to Section 3</h1>
          <p>This is the third section.</p>
        </div>
      </section>
    </main>
  );
};

export default Services;
