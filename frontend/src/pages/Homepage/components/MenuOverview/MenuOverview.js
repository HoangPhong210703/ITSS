import React from "react";
import "./MenuOverview.css"; // Updated CSS file

const MenuOverview = () => {
  const menuItems = [
    {
      id: 1,
      icon: "fas fa-coffee",
      title: "朝食",
      description: "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 2,
      icon: "fas fa-utensils",
      title: "主菜",
      description: "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 3,
      icon: "fas fa-glass-martini-alt",
      title: "飲み物",
      description: "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
    {
      id: 4,
      icon: "fas fa-ice-cream",
      title: "デザート",
      description: "新しいテクノロジーの時代において、私たちは未来を確信と誇りを持って見つめています。",
      buttonText: "メニューを探す",
    },
  ];

  return (
    <section className="menu-overview">
      <h2 className="section-title">メニューをご覧ください</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <i className={`menu-icon ${item.icon}`}></i>
            <h3 className="menu-title">{item.title}</h3>
            <p className="menu-description">{item.description}</p>
            <p className="menu-button">{item.buttonText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuOverview;
