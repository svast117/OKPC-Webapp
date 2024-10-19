import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import P2V1 from "./images/3090Demo.mp4";
import P1V1 from "./images/4090Stab.mp4";
import Modal from './modal';
import Blue from "./images/4090Blue.jpg";
import BlueFront from "./images/4090BlueFront.jpg";
import BlueCloseup from "./images/4090Closeup.jpg";
import BlueCloseup2 from "./images/4090Closeup2.jpg";
import Front from "./images/3090Front.jpg";
import Back from "./images/3090Back.jpg";
import Perspective1 from "./images/3090Perspective.jpg";
import Perspective2 from "./images/3090Perspective2.jpg";

//Stock Photo?
const sectionStyle1 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/MissionStatement2.jpg)`
};

const Home = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleSectionClick = (source) => {
    setCurrentImage(source);
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <main className = "scroller">
      <section id="section1" className="section" style={sectionStyle1}>
        <div className="nonhovercontent">
          <h1 className = "missionTitle">Mission Statement</h1>
          <p className = "missionText">At OKPC, our mission is to build meaningful connections through personalized, high-quality computers designed to empower our clients. We prioritize understanding the unique needs of each individual, offering tailored solutions that make technology more accessible and user-friendly. Rooted in a commitment to community and service, we believe in connection over profit, ensuring that every computer we build enhances the lives of those we serve, fostering trust and long-lasting relationships. From our local seniors to clients across the GTA, we aim to bridge the gap between people and technology with care, integrity, and excellence.</p>
          <p className = "missionText">Your tech should be as unique as you are, come to OKPC and let us build you the computer of your dreams. We will work with you every step of the way to make you feel confident in your choices by the end of the process.</p>
          <div>
            <Link className = "desLink" to="/about">Learn More</Link>
          </div>
        </div>
      </section>
      <section id="section2" className="section">
        <video autoPlay muted loop className = "P2V1">
          <source src = {P1V1} type = "video/mp4"/>
        </video>
        <div className="content">
          <h4 className = "titlePrelude">Computer A</h4>
          <h1 className = "glowText">The Godlike</h1>
          <h2>
            Our best: <span class = "highlight c1">Over-Kill Performance</span> & <span class = "highlight c3">Water Cooling</span>
          </h2>
          <p className = "P2text">Launched in March 2024, the Godlike is our ultimate performance machine. Powered by the Intel i9 14900K and RTX 4090, it’s built to handle the most demanding gaming and rendering tasks with ease.</p>
            
          <p className = "P2text">Featuring custom hardline watercooling with two 480mm and one 400mm radiator, plus 23 Corsair fans, the Godlike keeps temperatures at 60°C, even when overclocked.</p>
            
          <p className = "P2text">For those who demand the best, we can deliver unrivaled speed, power, and cooling. Experience performance at its peak.</p>
          <div className = "modalContainer">
            <div>
              <h3 className = "modalTitle">PHOTOS</h3>
            </div>

            <img 
              src = {Blue} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(Blue)} alt = 'Project 1 Modal 1'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

            <img 
              src = {BlueFront} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(BlueFront)} alt = 'Project 1 Modal 2'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

            <img 
              src = {BlueCloseup} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(BlueCloseup)} alt = 'Project 1 Modal 2'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

             <img 
              src = {BlueCloseup2} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(BlueCloseup2)} alt = 'Project 1 Modal 2'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />
          </div>
        </div>
      </section>
      <section id="section3" className="section">
        <video autoPlay muted loop className = "P2V1">
          <source src = {P2V1} type = "video/mp4"/>
        </video>
        <div className="content">
          <h4 className = "titlePrelude">
            Computer B
          </h4>
          <h1 className="projectDemo">The Discount</h1>
          <h2>
            Our Best: <span class = "highlight c2">Cable Management</span> & <span class = "highlight c1">Cost Efficiency</span>
          </h2>
          <p className = "P2text">Built for just $1,823.25 CAD, the Discount showcases exceptional cost-efficiency and clean cable management. Despite the budget-friendly price, it features the powerful Aorus RTX 3090 Xtreme and AMD’s high-performance Ryzen 9 7900X3D CPU.</p>

          <p className = "P2text">Every component except the thermal paste was purchased a discount. Proof that we can deliver high performance without breaking the bank.</p>
          <div className = "modalContainer">
            <div>
              <h3 className = "modalTitle">PHOTOS</h3>
            </div>

            <img 
              src = {Front} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(Front)} alt = 'Project 2 Modal 1'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

            <img 
              src = {Back} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(Back)} alt = 'Project 2 Modal 2'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

            <img 
              src = {Perspective1} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(Perspective1)} alt = 'Project 2 Modal 3'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />

            <img 
              src = {Perspective2} 
              className = "modalIcon" 
              onClick={() => handleSectionClick(Perspective2)} alt = 'Project 2 Modal 4'
              style = {{width:'80px', height: "auto", cursor:'pointer'}}
            />
          </div>
        </div>
      </section>

      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        source={currentImage}
      />

    </main>
  );
};

export default Home;
