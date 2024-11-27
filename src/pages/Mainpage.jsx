import React from 'react';
import './Mainpage.css';

function MainPage() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-buttons">
          <button className="login-button">로그인</button>
          <button className="signup-button">회원가입</button>
        </div>
      </nav>

      <main className="main-content">
        {/* 왼쪽 화면 */}
        <section className="left-section">
          <div className="left-content">
            <h1 className="main-title">KULA</h1>
            <h2 className="subtitle">세탁기 알림 서비스</h2>
            <p className="description">우리 동네 세탁기 정보 한 눈에 확인하자</p>
            
            {/* 검색 객체 */}
            <div className="search-container">
              <input type="text" placeholder="세탁소를 검색해보세요" className="search-input" />
              <button className="search-button">Search</button>
            </div>
            <button className="register-button">세탁소 등록하기</button>
          </div>
        </section>

        {/* 오른쪽 화면 */}
        <section className="right-section">
          <div className="image-container">
            <img src="/img/Mainpage_background.jpg" alt="세탁기" className="main-image" />
            <div className="image-overlay">
              <p className="completion-text">"세탁이 완료되었습니다"</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p> 2024 KULA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;