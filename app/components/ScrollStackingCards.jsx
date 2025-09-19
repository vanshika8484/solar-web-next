import React, { useEffect, useRef } from "react";
import "./ScrollStackingCards.css";

const ScrollStackingCards = ({ content }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY + 150;
      let currentCard = null;

      cardsRef.current.forEach((card) => {
        if (!card) return; // Skip if card is null or undefined
        try {
          const cardTop = card.getBoundingClientRect().top + window.scrollY;
          if (scrollTop >= cardTop) currentCard = card;
        } catch (error) {
          console.error('Error getting card position:', error);
        }
      });

      cardsRef.current.forEach((card) => {
        if (card) { // Only try to modify valid elements
          card.classList.remove("active", "inactive");
        }
      });

      if (currentCard) {
        currentCard.classList.add("active");
        const index = cardsRef.current.indexOf(currentCard);
        for (let i = 0; i < index; i++) {
          if (cardsRef.current[i]) { // Only modify valid elements
            cardsRef.current[i].classList.add("inactive");
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cards-container mt-20">
      {content.map((card, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`card ${i % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="image-container">
            <img src={card.img} alt={card.alt} />
          </div>
          <div className="text-content">
            <h3 className="About">{card.heading}</h3>
            <h4 className="About text-[14px]" >{card.subheading}</h4>
            <ul>
              {card.points.map((point, idx) => (
                <li className="About text-[16px]" key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStackingCards;
