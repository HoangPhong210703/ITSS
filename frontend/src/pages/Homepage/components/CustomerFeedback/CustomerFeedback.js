import React from "react";
import "./CustomerFeedback.css";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      quote: "最高のレストラン",
      feedback:
        "昨晩、当店で食事をし、私たちは本当に驚きました。入った瞬間から、私たちは心地よい雰囲気に包まれ、温かい笑顔で迎えられました。",
      name: "陸葵",
      location: "北海道",
    },
    {
      id: 2,
      quote: "シンプルに美味しい",
      feedback:
        "当店はすべての面で私の期待を超えました。雰囲気は居心地が良くリラックスしており、私たちの記念日ディナーにぴったりの場所でした。",
      name: "緑",
      location: "栃木県",
    },
    {
      id: 3,
      quote: "唯一無二のレストラン",
      feedback:
        "当店での料理体験は他に比べるものがありません。雰囲気は活気に満ちており、料理は素晴らしいものでした。食事は私たちの夜のハイライトでした。",
      name: "代子",
      location: "東京都",
    },
  ];

  return (
    <section className="customer-feedback">
      <h2 className="section-title">お客様のフィードバック</h2>
      <div className="feedback-grid">
        {feedbacks.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <h3 className="feedback-quote">「{feedback.quote}」</h3>
            <p className="feedback-text">{feedback.feedback}</p>
            <div className="feedback-footer">
              <div className="avatar-placeholder"></div>
              <div className="author-info">
                <span className="author-name">{feedback.name}</span>
                <span className="author-location">{feedback.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
