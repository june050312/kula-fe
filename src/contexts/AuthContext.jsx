import { createContext, useContext, useState, useCallback } from "react";

// AuthContext 생성
export const AuthContext = createContext({
  signup: (user_id, password, callback) => {},
  login: (user_id, password, callback) => {},
  logout: (callback) => {},
  checkAuth: async () => {}, // 로그인 여부 확인 함수
});

const localStorage = window.localStorage

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(undefined);

  // 회원가입
  const signup = useCallback((user_id, password, callback) => {
    console.log("잘 되는 지 확인")
    const user = { user_id, password };

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoggedUser({ user_id, password });
        localStorage.setItem("user", JSON.stringify(data));//로컬저장소 처리부분 모르겠음
        callback && callback();
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      });
  }, []);

  // 로그인
  const login = useCallback((user_id, password, callback) => {
    const user = { user_id, password };

    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 실패");
        }
        return response.json();
      })
      .then((data) => {
        setLoggedUser({ user_id });
        localStorage.setItem("user", JSON.stringify(data));//로컬저장소 처리부분 모르겠음
        callback && callback();
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  }, []);

  // 로그아웃
  const logout = useCallback((callback) => {
    setLoggedUser(undefined);
    localStorage.removeItem("user");
    callback && callback();
  }, []);

  // 로그인 여부 확인
  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "GET",
        credentials: "include", // 쿠키 포함
      });

      if (response.status === 200) {
        const user = await response.json();
        setLoggedUser(user);
        return 200;
      } else if (response.status === 401) {
        setLoggedUser(undefined);
        return 401;
      }
    } catch (error) {
      console.error("인증 상태 확인 실패:", error);
      return 401;
    }
  }, []);

  const value = {
    loggedUser,
    signup,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth 훅
export const useAuth = () => {
  return useContext(AuthContext);
}; 