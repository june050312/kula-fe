import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // navigate 훅을 가져옵니다.
import { useAuth } from '../contexts/AuthContext';  // useAuth 훅 가져오기
import Wallpaper from "../Auth/AuthImage/wallpaper.png";
import Out_icon from "../Auth/AuthImage/out_icon.png";
import Google_icon from "../Auth/AuthImage/google_icon.png";
import "./Auth.css"; // 스타일 파일

const initialFormState = { id: '', password: '' };

const Login = () => {
  const { login } = useAuth(); // 로그인 함수 가져오기
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  // 입력값 변경 핸들러
  const changed = useCallback(
    (key) => (e) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.value,  // form 객체 내의 id나 password를 업데이트
      }));
    },
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  
  // 로그인 핸들러
  const handleLogin = () => {
    if (!form.id && !form.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!form.id) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!form.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 함수 호출
    login(form.id, form.password, () => {
      console.log("로그인 성공");
      navigate("/Main"); // 로그인 성공 후 /Main 페이지로 이동
    });
  };
  return (
    <div className="AUTH">
      <img className="Wallpaper" alt="Wallpaper" src={Wallpaper} />

      <div className="MainRectangle" />

      <Link className="Auth-main" to= "/" style={{ textDecoration: "none"}}>KULA</Link>

      <div className="Out-icon" />
      
      <div className="log-in">
        <img className="icon" alt="Icon" src={Out_icon} />
      </div>

      <div className="Google-rectangle" />

      <img className="Google" alt="Google" src={Google_icon} />

      <div className="Login-id-text">사용자 이름 또는 이메일</div>
      <input 
        type = "text"
        className="Login-id"
        name="id"
        placeholder = "아이디"
        value={form.id}
        onChange={changed('id')}
        onKeyDown={handleKeyDown}
      />
      <div className="Login-password-text">비밀번호</div>
      <input 
        type = "password"
        className="Login-password"
        name="password"
        placeholder = "비밀번호"
        value={form.password}
        onChange={changed('password')}
        onKeyDown={handleKeyDown}
      />

      <div className="Google-login-text">구글 계정으로 로그인</div>

      <Link className="Login-LoginPage-button"  to="/login" style={{ textDecoration: "none"}}>로그인</Link>

      <Link className="Login-SignUpPage-button" to="/signup" style={{ textDecoration: "none"}}>회원 가입</Link>

      <button className="Login-button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;





