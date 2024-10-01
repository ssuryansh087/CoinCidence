import React from "react";
import "./styles/CardGrid.css"; // Import the CSS file for styling
import img1 from "../assets/Budget.jpg";
import img2 from "../assets/income.jpg";

import img4 from "../assets/debt.jpg";

import img3 from "../assets/financial goals.jpg";

const CardGrid = () => {
  // Sample card data
  const cards = [
    {
      title: "Introduction To Budgeting",
      description:
        " an Annual Financial Statement of yearly estimated receipts and expenditures of the government in respect of every financial year. Budgeting is the process of estimating the availability of resources and then allocating them to various activities according to a pre-determined ...",
      image: img1, // Replace with actual image URL
    },
    {
      title: "Understanding Income",
      description:
        "the amount of money, property, and other transfers of value received over a set period of time in exchange for services or products. Taxable income is gross income minus exclusions, exemptions, and deductions allowed under the tax law...",
      image: img2,
    },
    {
      title: "Setting Financial Goals",
      description:
        "Financial goals provide a framework for investment decisions and can help narrow down your choices.For example...",
      image: img3,
    },
    {
      title: "Understanding Debt Management",
      description:
        "It involves understanding the nature of the debt, monitoring existing debts, budgeting and making informed borrowing decisions,...",
      image: img4,
    },
  ];

  return (
    <div className="grid-container">
      {cards.map((card, index) => (
        <div className="grid-card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;