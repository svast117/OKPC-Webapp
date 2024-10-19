import React from 'react';
import './styles.css';
import "./about.css";

//Stock Photo?
const sectionStyle1 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/Founder.png)`
};

//The OK | Computer A
const sectionStyle2 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/4090Timeline.jpg)`
};

const About = () => {
  return (
    <main>
      <section id="section1" className="section" style={sectionStyle1}>
        <div className="nonhovercontent">
          <h1 className = "abtTitle">Our Founder</h1>
          <p className = "abtText">Jack Wang, the brilliant mind behind OKPC, founded the company after frustrating experiences with large tech brands like Dell. He wanted to create a business where human connection takes priority over profit.</p>
          <p className = "abtText">Fun fact: Jack is also the one writing this description and coding this website from scratch in React.js. Hi!</p>
        </div>
      </section>
      <section id="section2" className="section" style={sectionStyle2}>
        <div className="timeline">
          <h1 className = "abtTitle2">Our Story</h1>
          <div className = "blocks">
            <div className = "block1">
              <h1 className = "blockTitle">Humble Beginnings</h1>
              <p className = "abtText">As an idea, OKPC began after Jack's bad experiences with Dell Computers in 2019. His first ever computer, an Alienware Aurora R9, was sold to him with a faulty motherboard. Having saved up a year's worth of allowance, he was unimaginably disappointed and had resorted to going to an independent repair service. There, he was shown the marvels of PC Building and even helped diagnose the motherboard with a voltage tester.</p>
            </div>
            <div className = "block2">
              <h1 className = "blockTitle">Official Start</h1>
              <p className = "abtText">As a business, OKPC started during Jack's current tenure at the Oakville Chinese Network. He often made trips to seniors' homes outside of official OCN activities to repair big items that couldn't be brought to the community center. Wanting to expand his impact and make things more official, he created OKPC with the principle of connection over profit in mind.</p>
            </div>
            <div className = "block3">
              <h1 className = "blockTitle">Current Day</h1>
              <p className = "abtText">Currently, we work with clients ranging from seniors to aspiring first-time PC builders all over the Greater Toronto Area. As of writing, we have served around ~35 unique customers in ~50 service requests ranging from repairs to building PCs from scratch. We have plans to expand our staff and our outreach to other portions of Ontario through shipping for the future. Stay tuned!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
