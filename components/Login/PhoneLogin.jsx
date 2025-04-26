"use client";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const { login } = useUserContext();
  const handleLogin = (e) => {
    e.preventDefault();
    login(phone, "小白");
  };

  const sendVerifyCode = async () => {
    const response = await fetch("/api/users/sendVerifyCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });
    console.log("response", response);
    // if (!response.ok) {
    //   alert("验证码发送失败，请稍后再试");
    //   return;
    // }
    const data = await response.json();
    console.log("data", data);
    return response;
  };

  const sendVerificationCode = () => {
    if (!phone) {
      alert("请输入手机号码");
      return;
    }
    const response = sendVerifyCode();
    if (!response) return;
    if (countdown > 0) return;
    setCountdown(60);
    const interval = setInterval(() => {
      setCountdown((prev) => {
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="验证码"
          className="flex-grow p-2 border rounded-l"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button
          type="button"
          className="bg-red-500 text-white p-2 rounded-r  w-24"
          onClick={sendVerificationCode}
          disabled={countdown > 0}
        >
          {countdown > 0 ? `${countdown}s` : "发送验证码"}
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
