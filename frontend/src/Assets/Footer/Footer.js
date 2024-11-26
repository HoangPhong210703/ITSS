import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">ベトナムごはん</h2>
          <p className="footer-description">
            新しい技術の時代に、私たちのアプリでベトナム料理の魅力を紹介します。
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle"> 
          <h3 className="footer-section-title">ページ</h3>
          <ul className="footer-links">
            <li><a href="#">ホーム</a></li>
            <li><a href="#">メニュー</a></li>
            <li><a href="#">おすすめ</a></li>
            <li><a href="#">お気に入り</a></li>
          </ul>
        </div>

        <div className="footer-middle">
          <h3 className="footer-section-title">ユーティリティページ</h3>
          <ul className="footer-links">
            <li><a href="#">ここから始める</a></li>
            <li><a href="#">スタイルガイド</a></li>
            <li><a href="#">パスワード保護</a></li>
            <li><a href="#">404 未検出</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="footer-section-title">私たちをInstagramでフォローしてください</h3>
          <div className="footer-images">
            <div className="footer-image-placeholder"></div>
            <div className="footer-image-placeholder"></div>
            <div className="footer-image-placeholder"></div>
            <div className="footer-image-placeholder"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 すみませんチーム</p>
      </div>
    </footer>
  );
};

export default Footer;
