<<<<<<< HEAD
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
=======
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function MainPage() {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchWrapperRef = useRef(null);
  const navigate = useNavigate();

  // 임시 세탁소 데이터
  const laundryList = [
    {
      name: "깔끔 세탁소",
      location: "세종 조치원읍 세종로 2511",
      machines: [
        { id: 1, status: true, userId: null },
        { id: 2, status: false, userId: "user123" },
        { id: 3, status: true, userId: null },
        { id: 4, status: false, userId: "user456" }
      ]
    },
    {
      name: "깔끔한 세탁방",
      location: "세종 조치원읍 으뜸길 226",
      machines: [
        { id: 1, status: true, userId: null },
        { id: 2, status: true, userId: null },
        { id: 3, status: false, userId: "user789" }
      ]
    },
    {
      name: "깔끔히 세탁해주는 곳",
      location: "세종 보듬3로 100",
      machines: [
        { id: 1, status: false, userId: "user234" },
        { id: 2, status: true, userId: null },
        { id: 3, status: true, userId: null },
        { id: 4, status: true, userId: null },
        { id: 5, status: false, userId: "user567" }
      ]
    },
    {
      name: "청결 세탁소",
      location: "대전 유성구 엑스포로 107",
      machines: [
        { id: 1, status: true, userId: null },
        { id: 2, status: true, userId: null }
      ]
    },
  ];

  // 검색어에 따른 추천 목록 업데이트
  useEffect(() => {
    const searchTerm = searchInput.trim().toLowerCase();
    
    if (!searchTerm) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // 검색어를 포함하는 세탁소 필터링
    const filtered = laundryList.filter(laundry =>
      laundry.name.toLowerCase().includes(searchTerm)
    );

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchInput]);

  // 외부 클릭 시 추천 목록 숨김
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 검색 처리
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.trim().toLowerCase();
    const foundLaundry = laundryList.find(
      laundry => laundry.name.toLowerCase() === searchTerm
    );
    
    if (foundLaundry) {
      navigate(`/laundry/${encodeURIComponent(foundLaundry.name)}`, {
        state: { laundryData: foundLaundry }
      });
    } else {
      alert('찾으시는 세탁소가 없습니다.');
    }
  };

  // 추천 항목 클릭 시 자동 완성 및 검색 실행
  const handleSuggestionClick = (laundry) => {
    setSearchInput(laundry.name);
    setShowSuggestions(false);

    navigate(`/laundry/${encodeURIComponent(laundry.name)}`, {
      state: { laundryData: laundry }
    });
  };
>>>>>>> 35d77a56dda377e2783ddf1740eb10d09d0891fd

  return (
    <main className="main-content">
      {/* 왼쪽 화면 */}
      <section className="left-section">
        <div className="left-content">
          <h1 className="main-title">KULA</h1>
          <h2 className="subtitle">세탁기 알림 서비스</h2>
          <p className="description">우리 동네 세탁기 정보 한 눈에 확인하자</p>
<<<<<<< HEAD
          
          {/* 검색 객체 */}
          <form onSubmit={handleSubmit}>

            <div className="search-container">
                <input onChange={handleChange} value={formData.body} name='body' type="text" placeholder="세탁소를 검색해보세요" className="search-input" />
                <button type='submit' className="search-button">Search</button>
            </div>
          </form>
=======

          {/* 세탁기 검색 창 */}
          <div className="search-wrapper" ref={searchWrapperRef}>
            <form onSubmit={handleSearch}>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="우리 동네 세탁소 입력"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                />
                <button type="submit" className="search-button">검색</button>
              </div>
            </form>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions-container">
                {suggestions.map((laundry) => (
                  <div
                    key={laundry.name}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(laundry)}
                  >
                    <span className="suggestion-name">{laundry.name}</span>
                    <span className="suggestion-location">{laundry.location}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
>>>>>>> 35d77a56dda377e2783ddf1740eb10d09d0891fd

          <button className="register-button">세탁소 등록하기</button>
        </div>
      </section>

      {/* 오른쪽 화면 */}
      <section className="right-section">
        <div className="image-container">
          <img src="/img/MainPage_background.jpg" alt="메인 이미지" className="main-image" />
          <div className="image-overlay">
            <p className="completion-text">"We believe in laundry"</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;