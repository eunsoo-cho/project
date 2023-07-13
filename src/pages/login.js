import React, { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLoginEmailChange = useCallback((event) => {
    setLoginEmail(event.target.value);
  }, []);

  const handleLoginPasswordChange = useCallback((event) => {
    setLoginPassword(event.target.value);
  }, []);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        // 로그인 성공 시 추가적인 작업 수행
      } catch (error) {
        console.log(error.message);
        // 로그인 실패 시 에러 처리
      }
    },
    [loginEmail, loginPassword]
  );

  const handleLogout = () => {
    setUser(null);
  };
  const handleGoogleLogin = () => {
    console.log("구글로그인");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form id="로그인폼" className="login-form">
      <h3>회원로그인</h3>
      <label htmlFor="login-email">이메일</label>
      <input
        type="email"
        id="login-email"
        value={loginEmail}
        onChange={handleLoginEmailChange}
        placeholder="아이디/이메일"
        autoComplete="username"
      />
      <label htmlFor="login-password">비밀번호</label>
      <input
        type="password"
        id="login-password"
        value={loginPassword}
        onChange={handleLoginPasswordChange}
        placeholder="비밀번호"
        autoComplete="current-password"
      />
      <button className="log-button" onClick={handleLogin}>
        로그인
      </button>
      {user ? (
        <>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <h3>welcome {user.displayName}</h3>
        </>
      ) : (
        <button
          id="구글로그인"
          className="google-button"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
          Google 로그인
        </button>
      )}
      <Link to="/register" className="re-button">
        회원가입
      </Link>
    </form>
  );
};

export default Login;
