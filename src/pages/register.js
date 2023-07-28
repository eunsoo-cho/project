import React, { useState, useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
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
        navigate("/login");
        alert("회원가입이 완료되었습니다. 로그인해주세요");
        console.log(user);
      } catch (error) {
        const errorCode = [
          "auth/invalid-email",
          "auth/email-already-in-use",
          "auth/invalid-password",
          "auth/weak-password",
        ];
        const errorAlertMsg = [
          "올바른 형식의 이메일을 사용해주세요",
          "중복된 이메일입니다. 다른이메일을 사용해주세요",
          "패스워드는 6자 이상이어야 합니다.",
          "패스워드는 6자 이상이어야 합니다.",
        ];
        console.log(error.code);

        const index = errorCode.indexOf(error.code);

        if (index !== -1) {
          alert(errorAlertMsg[index]);
          return;
        }
      }
    },
    [registerEmail, registerPassword, navigate]
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
