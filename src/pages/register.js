import React, { useState, useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegisterEmailChange = useCallback((event) => {
    setRegisterEmail(event.target.value);
  }, []);

  const handleRegisterPasswordChange = useCallback((event) => {
    setRegisterPassword(event.target.value);
  }, []);

  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
        // 회원가입 성공 시 추가적인 작업 수행
      } catch (error) {
        console.log(error.message);
        // 회원가입 실패 시 에러 처리
      }
    },
    [registerEmail, registerPassword]
  );

  return (
    <form className="register-form">
      <h3>회원가입</h3>
      <div>
        <label htmlFor="register-email">이메일</label>
        <input
          type="email"
          id="register-email"
          value={registerEmail}
          onChange={handleRegisterEmailChange}
        />
      </div>
      <div>
        <label htmlFor="register-password">비밀번호</label>
        <input
          type="password"
          id="register-password"
          value={registerPassword}
          onChange={handleRegisterPasswordChange}
        />
      </div>
      <button className="member-button" onClick={handleRegister} type="submit">
        회원가입
      </button>
    </form>
  );
};

export default Register;
