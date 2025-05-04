"use client";
import { useState, useRef } from "react";

import { useUserContext } from "@/context/UserContext";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [timer, setTimer] = useState(0);
  const { login } = useUserContext();
  const [generatedCode, setGeneratedCode] = useState("");

  const sendVerifyCode = async () => {
    const response = await fetch("/api/users/sendVerifyCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    console.log("response", response);
    const data = await response.json();
    alert(data.message);
    console.log("data", data);
    setGeneratedCode(data.verifyCode);
    return response;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("请输入手机号码");
      return;
    }
    if (!inputCode) {
      alert("请输入验证码");
      return;
    }
 
    if (inputCode !== generatedCode) {
      alert("验证码错误，请重新输入");
      return;
    }
    login(phoneNumber, "小白");
  };

  const sendVerificationCode = async () => {
    if (!phoneNumber) {
      alert("请输入手机号码");
      return;
    }
    if (timer > 0) return;

    const response = await sendVerifyCode();
    if (!response) return;

    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="tel"
        placeholder="手机号码"
        className="w-full p-2 mb-4 border rounded"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)} // 修改为 setPhoneNumber
      />
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="验证码"
          className="flex-grow p-2 border rounded-l"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)} // 修改为 setInputCode
        />
        <button
          type="button"
          className="bg-red-500 text-white p-2 rounded-r w-24"
          onClick={sendVerificationCode}
          disabled={timer > 0}
        >
          {timer > 0 ? `${timer}s` : "发送验证码"}
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white p-2 rounded"
      >
        登录/注册
      </button>
    </form>
  );
};

export default PhoneLogin;
