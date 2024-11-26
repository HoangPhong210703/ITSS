import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span className="phone">📞 (+84) 123456789</span>
          <span className="email">✉️ sumimasen@gmail.com</span>
        </div>
        <div className="social-icons">
          <span>🔗</span>
          <span>🔗</span>
          <span>🔗</span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <img src="https://placeholder.pics/svg/56x55" alt="Logo" />
          <span className="logo-text">ベトナムごはん</span>
        </div>
        <nav className="navigation-menu">
          <ul>
            <li>ホーム</li>
            <li>メニュー</li>
            <li>おすすめ</li>
            <li>お気に入り</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="名前を入力してください"
        />
      </div>
      <div className="form-group">
        <label>ユーザー名</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="ユーザー名を入力してください"
        />
      </div>
      <div className="form-group">
        <label>パスワード</label>
        <div className="password-input">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="パスワードを入力してください"
          />
          <img src="https://placeholder.pics/svg/24x24" alt="toggle visibility" />
        </div>
      </div>
      <div className="form-group">
        <label>パスワード</label>
        <div className="password-input">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="もう一度パスワードを入力してください"
          />
          <img src="https://placeholder.pics/svg/24x24" alt="toggle visibility" />
        </div>
      </div>
      <div className="form-group">
        <label>メールアドレス</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="メールアドレスを入力してください"
        />
      </div>
      <button type="submit" className="submit-button">登録</button>
      <div className="login-link">ログイン画面に遷移する</div>
    </form>
  );
}

function Title() {
  return (
    <h1 className="title">会員登録</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <RegistrationForm />
    </div>
  );
}

export default App;

