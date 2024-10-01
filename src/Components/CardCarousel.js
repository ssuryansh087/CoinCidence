import React from "react";
import "./styles/CardCarousel.css"; // Import styles for the carousel

const CardCarousel = () => {
  const cards = [
    { title: "USX", content: "Stablecoin USX backed by DeFi protocols." },
    {
      title: "Lending",
      content: "Decentralized lending platform with high returns.",
    },
    { title: "DF Staking", content: "Earn rewards through staking DF." },
    { title: "Trading", content: "Fast, decentralized trading platform." },
    {
      title: "PoS Staking",
      content: "Secure and scalable PoS staking solutions.",
    },
  ];

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {cards.map((card, index) => (
          <div className="carousel-item" key={index} style={{ "--i": index }}>
            <div className="card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;