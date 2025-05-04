"use client";
import { useState,useEffect } from "react";
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
  { id: "index", name: "发现", value: "/index", icon: HomeIcon },
  { id: "category", name: "分类", value: "/category", icon: FolderIcon },
  { id: "publish", name: "发布", value: "/publish", icon: PencilSquareIcon },
];

const Sidebar = () => {
  const router = useRouter();
  const { avatar, userId } = useUserContext();
  // const handleLinkClick = (linkId) => {
  //   setCurLinks(linkId);
  //   console.log("linkId", linkId);
  //   router.push(`/${linkId}`);
  // };

  const [curLinks, setCurLinks] = useState("index");
  
  // useEffect(() => {
  //   const path = window.location.pathname;
  //   if (path.startsWith("/category")) {
  //     setCurLinks("category");
  //   } else if (path.startsWith("/index")) {
  //     setCurLinks("index");
  //   } else if (path.startsWith("/publish")) {
  //     setCurLinks("publish");
  //   }
  // }, [window.location.pathname]);

  console.log("curLinks", curLinks);
  return (
    <div className="hidden sm:inline w-1/5 p-4 h-screen overflow-y-auto">
      <ul className="flex flex-col gap-8 px-3 text-lg">
        {links.map((link, index) => (
          <li
            className={`flex items-center cursor-pointer hover:text-red-500 ${
              curLinks === link.id ? "bg-gray-200" : ""
            }`}
            onClick={() =>router.push(`/${link.id}`)}
            key={index}
          >
            <link.icon className="w-6 h-6 mr-2" />
            <span>{link.name}</span>
          </li>
        ))}
        {userId && (
          <li
            className="flex items-center cursor-pointer hover:text-red-500"
            onClick={() => handleLinkClick("user")}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span>我</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
