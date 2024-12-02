import React, { useState } from 'react';
import './Mainpage.css';
import axios from "axios"
import {useNavigate} from "react-router-dom"
function MainPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    body: ""    
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8080/api/laundary/search", formData)
    .then(res => navigate(`/laundary/${res.data}`))
    .catch(() => alert("해당하는 빨래방이 없습니다"))
  }

  return (
    <main className="main-content">
      {/* 왼쪽 화면 */}
      <section className="left-section">
        <div className="left-content">
          <h1 className="main-title">KULA</h1>
          <h2 className="subtitle">세탁기 알림 서비스</h2>
          <p className="description">우리 동네 세탁기 정보 한 눈에 확인하자</p>
          
          {/* 검색 객체 */}
          <form onSubmit={handleSubmit}>

            <div className="search-container">
                <input onChange={handleChange} value={formData.body} name='body' type="text" placeholder="세탁소를 검색해보세요" className="search-input" />
                <button type='submit' className="search-button">Search</button>
            </div>
          </form>

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
  );
}

export default MainPage;