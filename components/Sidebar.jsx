"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  FolderIcon,
  PencilSquareIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useUserContext } from "../context/UserContext";

const links = [
  { name: "发现", value: "/index", icon: HomeIcon },
  { name: "分类", value: "/category", icon: FolderIcon },
  { name: "发布", value: "/publish", icon: PencilSquareIcon },
  { name: "通知", value: "/notification", icon: BellIcon },
  { name: "设置", value: "/setting", icon: Cog6ToothIcon },
  { name: "我", value: "/user", icon: null },
];

const Sidebar = () => {
  const router = useRouter();
  const { avatar } = useUserContext();
  return (
    <div className="hidden sm:inline w-1/5 p-4 h-screen overflow-y-auto">
      <ul className="flex flex-col gap-8 px-3 text-lg">
        {links.map((link, index) => (
          <li
            className="flex items-center cursor-pointer hover:text-red-500"
            onClick={() => router.push(link.value)}
            key={index}
          >
            {link.name === "我" ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-6 h-6 rounded-full mr-2"
              />
            ) : (
              <link.icon className="w-6 h-6 mr-2" />
            )}
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
