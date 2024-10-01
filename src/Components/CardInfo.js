import React, { useState } from "react";
import "./styles/CardInfo.css"; // Ensure you create this CSS file
import card1img from "../assets/card1_img.jpg";
import card2img from "../assets/learning_card2.png";
import card3img from "../assets/certificate_card3.jpg";
import card4img from "../assets/use_caseCard4.png";
// Updated card data with images
const cardsData = [
  {
    title: "Visualized Learning Through Gaming",
    description:
      "Visualized learning through gaming can be an effective way to teach abstract concepts, improve visual attention, and strengthen memory skills: ",
    image: card1img, // Placeholder image
  },
  {
    title: "Online Courses",
    description:
      "a virtual learning program that can be informal or formal, and can cover a variety of topics. Online courses can be used for fun, or to prepare for an exam or earn a certification or degree. ",
    image: card2img,
  },
  {
    title: "Certificate",
    description:
      "certificate should register for the final proctored exams that come at a fee and attend in-person at designated centres on specified dates.",
    image: card3img, // Placeholder image
  },
  {
    title: "Use Case",
    description:
      "A usage scenario for a piece of software; often used in the plural to suggest situations where a piece of software may be useful.",
    image: card4img,
  },
];

const CardInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="simple-carousel-container">
      <button className="carousel-button-prev" onClick={prevCard}>
        Prev
      </button>
      <div className="simple-carousel-card">
        <img
          src={cardsData[currentIndex].image}
          alt={cardsData[currentIndex].title}
          className="card-image"
        />
        <h3>{cardsData[currentIndex].title}</h3>
        <p>{cardsData[currentIndex].description}</p>
      </div>
      <button className="carousel-button-next" onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

export default CardInfo;