"use client";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useUserContext } from "../context/UserContext";
const Header = () => {
  const { avatar, userId, setShowLoginModal, userName, logout } =
    useUserContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex align-center justify-between  p-4 ">
      <div className=" hidden sm:inline bg-red-500 rounded-full text-white px-4 py-2 font-bold ">
        Cook Lover
      </div>
      <div className="relative  flex-grow mx-4 max-w-130 ">
        <input
          type="search"
          className="bg-gray-100  rounded-full py-2 px-4 focus:outline-none w-full "
          placeholder="搜索菜谱、食材"
        />
        <MagnifyingGlassIcon className=" absolute h-6 w-6 right-3.5 top-2" />
      </div>
      {userId ? (
        <div
          className="flex items-center gap-4 mr-2 relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
        >
          <img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
          <span className="hidden sm:inline"> {userName}</span>
          {isDropdownOpen && (
            <div
              className="absolute top-full right-0 mt-2 bg-white  w-24 "
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  我的信息
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  信息修改
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  我的收藏
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    logout();
                  }}
                >
                  退出登录
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          className="bg-red-500 text-white rounded-full px-4 py-2 font-bold"
          onClick={() => setShowLoginModal(true)}
        >
          登录/注册
        </button>
      )}
    </div>
  );
};

export default Header;
