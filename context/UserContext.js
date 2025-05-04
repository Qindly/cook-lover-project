import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [avatar, setAvatar] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // "password" or "phone"
  const login = (id, name) => {
    setUserId(id);
    setUserName(name);
    setShowLoginModal(false);
    setAvatar(
      "https://sns-webpic-qc.xhscdn.com/202504240859/af3c7101b902e5ea96429d493717099f/1040g00831eq20nd25u605nm9157g8m8e012bcfo!nd_dft_wlteh_webp_3"
    );
  };
  const logout = () => {
    setUserId(null);
    setUserName(null);
    setLoginMethod("password");
    setAvatar(null);
    //setCurLinks("index");
  };
  return (
    <UserContext.Provider
      value={{
        avatar,
        setAvatar,
        userName,
        setUserName,
        userId,
        setUserId,
        showLoginModal,
        setShowLoginModal,
        loginMethod,
        setLoginMethod,
        login,
        logout,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
