import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { checkAuth } = useAuth(); // 로그인 여부 확인 함수
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await checkAuth(); // 로그인 상태 확인
        if (response !== 200) {
          navigate("/login"); // 인증 실패 시 로그인 페이지로 이동
        }
      } catch (error) {
        console.error("오류 발생:", error);
        navigate("/login"); // 오류 시도 로그인 페이지로 이동
      }
    };

    verifyAuth();
  }, [checkAuth, navigate]);

  return <>{children}</>;
};

export default RequireAuth;