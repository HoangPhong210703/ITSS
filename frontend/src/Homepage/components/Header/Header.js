import React from "react";
import "./Header.css"; // For styling, create a corresponding CSS file.

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-contact-info">
          <span>📞 (+84) 123456789</span>
          <span>📧 sumimasen@gmail.com</span>
        </div>
        <div className="social-icons">
          {/* Replace '#' with actual links */}
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-logo">
          <div className="header-logo-image"></div>
          <h1>ベトナムごはん</h1>
        </div>
        <nav className="nav-links">
          <a href="#">ホーム</a>
          <a href="#">メニュー</a>
          <a href="#">おすすめ</a>
          <a href="#">お気に入り</a>
        </nav>
        <button className="sign-out-button">サインアウト</button>
      </div>
    </header>
  );
};

export default Header;
