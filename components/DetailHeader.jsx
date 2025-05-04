"use client";
import React from "react";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

const DetailHeader = ({ details }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 px-4 py-2">
      {details.map((detail, index) => (
        <div
          key={index}
          className="px-4 py-2 cursor-pointer hover:font-bold"
          onClick={() => {
            const currentPath = window.location.pathname;
            router.push(`${currentPath}?detail=${detail.id}`);
          }}
        >
          {detail.name}
        </div>
      ))}
    </div>
  );
};

export default DetailHeader;
