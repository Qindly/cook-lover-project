"use client";
import React from "react";
import { useUserContext } from "../context/UserContext";
import PasswordLogin from "./Login/PasswordLogin";
import PhoneLogin from "./Login/PhoneLogin";
const Login = () => {
  const { setShowLoginModal,  loginMethod, setLoginMethod } =
    useUserContext();

  console.log("loginMethod", loginMethod);
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700/50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className="flex gap-3   mb-4 justify-center">
            <span
              className={`${loginMethod === "password" ? "text-red-500 " : ""}`}
              onClick={() => setLoginMethod("password")}
            >
              密码登录
            </span>
            |
            <span
              className={`${loginMethod === "phone" ? "text-red-500" : ""}`}
              onClick={() => setLoginMethod("phone")}
            >
              手机登录
            </span>
          </h2>
          {loginMethod === "password" && <PasswordLogin />}
          {loginMethod === "phone" && <PhoneLogin />}
          <button
            className="mt-4 w-full bg-gray-300 text-black p-2 rounded"
            onClick={() => setShowLoginModal(false)}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
