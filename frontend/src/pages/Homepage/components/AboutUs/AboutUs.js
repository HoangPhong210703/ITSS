import React from "react";
import "./AboutUs.css"; // Updated CSS file

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-image">
        {/* Light green placeholder for the image */}
        <div className="image-placeholder"></div>
        {/* Special div for contact information */}
        <div className="contact-info">
          <h3>ぜひ私たちを訪れてください。</h3>
          <p>📞 (+84) 123456789</p>
          <p>📧 sumimasen@gmail.com</p>
          <p>📍 Hai Ba Trung - Ha Noi</p>
        </div>
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">私たちはあなたの家族のために健康的な食べ物を提供します。</h2>
        <p className="about-us-description">
          私たちの物語は、洗練された食事、卓越したサービス、活気ある雰囲気を融合させたユニークなダイニング体験を創造するというビジョンから始まりました。
          他の豊かな料理文化に触発され、私たちは地元のルーツを尊重しながら、グローバルな味覚を取り入れることを目指しています。
        </p>
        <button className="about-us-button">私たちについてもっと</button>
      </div>
    </section>
  );
};

export default AboutUs;
