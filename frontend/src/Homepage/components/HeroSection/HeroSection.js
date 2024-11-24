import React from "react";
import "./HeroSection.css"; // For styling, create a corresponding CSS file.

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">ベトナムの味、もっと身近に</h1>
        <p className="hero-subtitle">
          私たちの温かい料理の楽園で、魅力的な料理と忘れられない瞬間を発見してください。
        </p>
        <div className="hero-buttons">
          <button className="filter-button">フィルター</button>
          <button className="menu-button-hero">メニューを探る</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
