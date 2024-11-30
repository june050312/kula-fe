import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 네비게이션을 위한 useNavigate 훅
import { useAuth } from "../contexts/AuthContext"; // useAuth 훅을 통해 로그아웃 함수 가져오기
import axios from "axios";

const Logout = () => {
  const { logout } = useAuth(); // 로그아웃 함수
  const navigate = useNavigate(); // 네비게이션을 위한 훅

  // 로그아웃 처리 함수
  const handleLogout = useCallback(() => {
    const fetchLogout = async() => {
      await axios.get("http://localhost:8080/api/user/logout", { withCredentials: true })
      // logout(() => {
      //   // 로그아웃 성공 후 로그인 페이지로 리다이렉트
      // });
      navigate("/login")
    }
    fetchLogout()
  }, [logout, navigate]);

  return (
    <div>
      <p>정말 로그아웃 하시겠습니까?</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Logout;