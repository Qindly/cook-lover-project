"use client";
import React from "react";
import { useUserContext } from "../context/UserContext";
// import { useRouter } from "next/router";
const categories = [
  { id: "homefeed", name: "推荐" },
  { id: "vegetable", name: "素菜" },
  { id: "meat", name: "肉菜" },
  { id: "breakfast", name: "早餐" },
  { id: "lunch", name: "午餐" },
  { id: "dinner", name: "晚餐" },
  { id: "supper", name: "宵夜" },
  { id: "dessert", name: "甜点" },
  { id: "drink", name: "饮品" },
];

const CategoryHeader = () => {
  const { setIndexCategory } = useUserContext();
  // const router = useRouter();
  function handleCategoryClick(categoryId) {
    setIndexCategory(categoryId);
    router.push(`/${categoryId}`);
  }
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="px-4 py-2 cursor-pointer hover:font-bold"
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryHeader;
