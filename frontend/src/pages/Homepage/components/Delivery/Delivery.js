import React from "react";
import "./Delivery.css"; // Updated CSS file

const Delivery = () => {
  return (
    <section className="delivery-section">
      <div className="delivery-images">
        {/* Large image on the left */}
        <div className="image-large"></div>
        {/* Two smaller images on the right */}
        <div className="image-column">
          <div className="image-small image-small-top"></div>
          <div className="image-small image-small-bottom"></div>
        </div>
      </div>
      <div className="delivery-content">
        <h2 className="delivery-title">市内で最速のフードデリバリー</h2>
        <p className="delivery-description">
          私たちのビジュアルデザイナーを使えば、デスクトップ用のカスタムアプリを簡単に作成できます。
        </p>
        <ul className="delivery-features">
          <li>📦 30分以内に配達</li>
          <li>💲 最高のお得情報と価格</li>
          <li>🛒 オンラインサービスをご利用いただけます</li>
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
