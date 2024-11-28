import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthProvider"; // 인증 컨텍스트
import RoutesSetup from "./routes/RoutesSetup"; // 라우트 설정

function App() {
  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  );
}

export default App;
