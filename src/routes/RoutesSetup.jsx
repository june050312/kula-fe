import React, { Routes, Route } from 'react-router-dom';
import RequireAuth from '../Auth/RequireAuth';
import MainPage from '../pages/Mainpage';
import Signup from '../Auth/SignUp';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import NoMatch from './NoMatch';

import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//로그인한 상태이면 다른 화면을 메인으로 출력해야하는데 딱히 필요없을지도?

export default function RoutesSetup() {
  return (
    <Routes>
      {/* 로그아웃 페이지 */}
      <Route path="/" index element={
        <div className="App">
            <Navbar />
            <div className="content">
                <MainPage />
            </div>
            <Footer />
        </div> }/>
      
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      
      {/* 로그아웃 페이지 */}
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
      
      {/* 잘못된 경로 404 페이지 */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
