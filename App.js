import React from "react";
import "./App.css";

const Card = () => {
  return ( 
  <>
  <div className="card container">
    <div className="card-image">
    <div className="card-overlay"></div>
      <img className="card-img" src="https://raw.githubusercontent.com/bobbe86/NFTpreviewCard/main/images/image-equilibrium.jpg" alt="image_main"/>
    </div>
    <div className="title">
      <p>Equilibrium #3429</p>
    </div>
    <div className="card-body container">
      <p>Our Equilibrium collection promotes <br/>balance and calm.</p>
    </div>
    <div className="card-info container border-bottom">
      <div className="cyan">
        <img className="icon" src="https://raw.githubusercontent.com/bobbe86/NFTpreviewCard/0cf42bf444edae013d38f3ee1a3ea4e54d3198c2/images/icon-ethereum.svg" alt="diamond icon"/>
        0.041 ETH
      </div>

      <div>
        <img className="icon" src="https://raw.githubusercontent.com/bobbe86/NFTpreviewCard/0cf42bf444edae013d38f3ee1a3ea4e54d3198c2/images/icon-clock.svg" alt="clock icon"/>
        3 days left
      </div>
  </div>
  <div className="footer">
      <div>
        <img className="author" src="https://raw.githubusercontent.com/bobbe86/NFTpreviewCard/main/images/image-avatar.png" alt="author headshot"/>
      </div>
      <div className="created">
        Creation of <span className="name">Jitin Sharma</span>
      </div>
    </div>
  </div>
  
  </>
  );
};

export default Card;
