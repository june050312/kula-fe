import React, { useState, useCallback } from 'react';
import { useNavigate,Link } from 'react-router-dom'
import Checkbox from './CheckBox';
import Wallpaper from "../Auth//AuthImage/wallpaper.png";
import Out_icon from "../Auth//AuthImage/out_icon.png";
import { useAuth } from '../contexts/AuthContext';
import './Auth.css'; // 스타일 파일 경로

const initialFormState = { id: '', schoolId: '', name: '', password: '', passwordConfirm: ''};

const SignUp = () => {
  const { signup } = useAuth(); // 로그인 함수 가져오기
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅


  // 입력값 변경 핸들러
  const changed = useCallback(
    (key) => (e) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.value, // form 객체 내의 특정 키를 업데이트
      }));
    },
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  // 제출 핸들러
   const handleSignUp = (e) => {
    
    if (!form.id || !form.password || !form.name || !form.schoolId || !form.passwordConfirm) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    // 로그인 함수 호출
    // signup(form.name, form.schoolId, form.id, form.password, () => {
    //   alert("회원가입 성공")
    //   console.log("회원가입 성공");
    //   navigate("/Login"); // 회원가입 성공 후 /로그인 페이지로 이동
    // });
  }
  


  return (
    <div className="AUTH">
      <img className="Wallpaper" alt="Wallpaper" src={Wallpaper} />

      <Link className="Auth-main" to= "/" style={{ textDecoration: "none"}}>KULA</Link>

      <div className="MainRectangle" />

      <Link className="SignUp-LoginPage-button" to="/login" style={{ textDecoration: "none"}}>로그인</Link>

      <Link className="SignUp-SignUpPage-button" to="/signup" style={{ textDecoration: "none"}}>회원 가입</Link>

      <div className="Out-icon" />
      
      <div className="log-in">
        <img className="icon" alt="Icon" src={Out_icon} />
      </div>

      <div className="SignUp-id-text">아이디</div>
      <input
        type="text"
        className="SignUp-id"
        name="id"
        placeholder="아이디"
        value={form.id}
        onChange={changed('id')}
        onKeyDown={handleKeyDown}
      />
      <div className="SignUp-School-id-text">학교 아이디</div>
      <input
        type="text"
        className="SignUp-School-id"
        name="schoolId"
        placeholder="학교 아이디"
        value={form.schoolId}
        onChange={changed('schoolId')}
        onKeyDown={handleKeyDown}
      />
      <div className="SignUp-Name-Text">이름</div>
      <input
        type="text"
        className="SignUp-Name"
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={changed('name')}
        onKeyDown={handleKeyDown}
      />
      <div className="SignUp-Password-text">비밀번호</div>
      <input
        type="password"
        className="SignUp-Password"
        name="password"
        placeholder="비밀번호"
        value={form.password}
        onChange={changed('password')}
        onKeyDown={handleKeyDown}
      />
      <div className="SignUp-Password-Confirm-text">비밀번호 확인</div>
      <input
        type="password"
        className="SignUp-Password-Confirm"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        value={form.passwordConfirm}
        onChange={changed('passwordConfirm')}
        onKeyDown={handleKeyDown}
      />
      <div className="SignUp-button" onClick={handleSignUp}>
        회원가입
      </div>
        <div className="checkbox-container">
          <Checkbox />
        </div>
    </div>
  );
};

export default SignUp;