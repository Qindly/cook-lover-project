"use client";
import { useState, useRef } from "react";
import { useUserContext } from "@/context/UserContext";
const PasswordLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { login, setLoginMethod } = useUserContext();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      alert("请输入用户名和密码");
      return;
    }
    if (password !== "123456") {
      alert("密码错误，请重新输入");
      return;
    }

    login(userId, "小白");
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="用户名"
        className="w-full p-2 mb-4 border rounded"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="密码"
        className="w-full p-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center gap-4 ">
        <button
          type="submit"
          className="w-full h-10 box-border border-2 text-red-500 border-red-500 p-2 rounded"
          onClick={() => setLoginMethod("phone")}
        >
          注册
        </button>
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          登录
        </button>
      </div>
    </form>
  );
};

export default PasswordLogin;
